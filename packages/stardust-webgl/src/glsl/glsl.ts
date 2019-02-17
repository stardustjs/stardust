// Common code for GLSL-based shader languages

import { convertTypeName, convertConstant } from "./types";
import { generateIntrinsicFunction } from "./intrinsics";

import { Specification } from "stardust-core";
import { Binding } from "stardust-core";
import { Dictionary } from "stardust-core";

export class LinesGenerator {
  private _lines: string[];
  private _currentIndent: string;
  private _blocks: Dictionary<string>;

  constructor() {
    this._lines = [];
    this._currentIndent = "";
    this._blocks = new Dictionary<string>();
  }

  public addNamedBlock(name: string, code: string) {
    if (this._blocks.has(name)) {
      this._blocks.set(name, this._blocks.get(name) + "\n" + code);
    } else {
      this._blocks.set(name, code);
    }
  }

  public addLine(code: string) {
    this._lines.push(this._currentIndent + code);
  }

  public indent() {
    this._currentIndent += "    ";
  }

  public unindent() {
    this._currentIndent = this._currentIndent.slice(
      0,
      this._currentIndent.length - 4
    );
  }

  public getCode(): string {
    return this._lines
      .map(line => {
        if (line[0] == "@") {
          if (this._blocks.has(line.substr(1))) {
            return this._blocks.get(line.substr(1));
          } else {
            return "";
          }
        } else {
          return line;
        }
      })
      .join("\n");
  }
}

// The basic GLSL generator
export class ShaderGenerator extends LinesGenerator {
  constructor() {
    super();
  }

  public addAdditionalCode(code: string) {
    this.addNamedBlock("additionalCode", code);
  }

  public addDeclaration(name: string, type: string, modifier: string = null) {
    if (modifier == null) {
      this.addLine(`${convertTypeName(type)} ${name};`);
    } else {
      this.addLine(`${modifier} ${convertTypeName(type)} ${name};`);
    }
  }

  public addArrayDeclaration(
    name: string,
    type: string,
    count: number = 1,
    modifier: string = null
  ) {
    if (modifier == "null") {
      this.addLine(`${convertTypeName(type)}[${count}] ${name};`);
    } else {
      this.addLine(`${modifier} ${convertTypeName(type)}[${count}] ${name};`);
    }
  }

  public addUniform(name: string, type: string) {
    this.addLine(`uniform ${convertTypeName(type)} ${name};`);
    if (
      type == "Vector2Array" ||
      type == "FloatArray" ||
      type == "Vector3Array" ||
      type == "Vector4Array" ||
      type == "ColorArray"
    ) {
      this.addLine(`uniform float ${name}_length;`);
    }
    if (
      type == "Vector2Image" ||
      type == "FloatImage" ||
      type == "Vector3Image" ||
      type == "Vector4Image" ||
      type == "Image"
    ) {
      this.addLine(`uniform float ${name}_width;`);
      this.addLine(`uniform float ${name}_height;`);
    }
  }

  public addAttribute(name: string, type: string) {
    this.addLine(`attribute ${convertTypeName(type)} ${name};`);
  }

  public addVarying(name: string, type: string) {
    this.addLine(`varying ${convertTypeName(type)} ${name};`);
  }

  public addIn(name: string, type: string) {
    this.addLine(`in ${convertTypeName(type)} ${name};`);
  }

  public addOut(name: string, type: string) {
    this.addLine(`out ${convertTypeName(type)} ${name};`);
  }

  public generateExpression(expr: Specification.Expression): string {
    switch (expr.type) {
      case "constant": {
        const eConstant = expr as Specification.ExpressionConstant;
        return convertConstant(eConstant.valueType, eConstant.value as (
          | number
          | number[]));
      }
      case "variable": {
        const eVariable = expr as Specification.ExpressionVariable;
        return eVariable.variableName;
      }
      case "function": {
        const eFunction = expr as Specification.ExpressionFunction;
        const args = eFunction.arguments.map(arg =>
          this.generateExpression(arg)
        );
        const { code, additionalCode } = generateIntrinsicFunction(
          eFunction.functionName,
          args
        );
        if (additionalCode != null) {
          this.addAdditionalCode(additionalCode);
        }
        return code;
      }
      case "field": {
        const eField = expr as Specification.ExpressionField;
        return `${this.generateExpression(eField.value)}.${eField.fieldName}`;
      }
    }
  }

  public addStatement(stat: Specification.Statement) {
    switch (stat.type) {
      case "assign":
        {
          const sAssign = stat as Specification.StatementAssign;
          const expr = this.generateExpression(sAssign.expression);
          this.addLine(`${sAssign.variableName} = ${expr};`);
        }
        break;
      case "condition":
        {
          const sCondition = stat as Specification.StatementCondition;
          if (
            sCondition.trueStatements.length > 0 &&
            sCondition.falseStatements.length > 0
          ) {
            this.addLine(
              `if(${this.generateExpression(sCondition.condition)}) {`
            );
            this.indent();
            this.addStatements(sCondition.trueStatements);
            this.unindent();
            this.addLine(`} else {`);
            this.indent();
            this.addStatements(sCondition.falseStatements);
            this.unindent();
            this.addLine(`}`);
          } else if (sCondition.trueStatements.length > 0) {
            this.addLine(
              `if(${this.generateExpression(sCondition.condition)}) {`
            );
            this.indent();
            this.addStatements(sCondition.trueStatements);
            this.unindent();
            this.addLine(`}`);
          } else if (sCondition.falseStatements.length > 0) {
            this.addLine(
              `if(!${this.generateExpression(sCondition.condition)}) {`
            );
            this.indent();
            this.addStatements(sCondition.trueStatements);
            this.unindent();
            this.addLine(`}`);
          }
        }
        break;
      case "for":
        {
          const sForLoop = stat as Specification.StatementForLoop;
          this.addLine(
            `for(int ${sForLoop.variableName} = ${sForLoop.rangeMin}; ${
              sForLoop.variableName
            } <= ${sForLoop.rangeMax}; ${sForLoop.variableName}++) {`
          );
          this.indent();
          this.addStatements(sForLoop.statements);
          this.unindent();
          this.addLine(`}`);
        }
        break;
      case "emit":
        {
          const sEmit = stat as Specification.StatementEmit;
          this.addEmitStatement(sEmit);
        }
        break;
      case "discard":
        {
          this.addLine("discard;");
        }
        break;
    }
  }

  public addStatements(stat: Specification.Statement[]) {
    stat.forEach(s => this.addStatement(s));
  }

  // Override these
  public addEmitStatement(s: Specification.StatementEmit) {
    this.addLine("// Emit Statement");
  }
}

export class ProgramGenerator {
  public _spec: Specification.Mark;
  public _shader: Specification.Shader;
  public _asUniform: (name: string) => boolean;
  public _names: { [name: string]: boolean };

  constructor(
    spec: Specification.Mark,
    shader: Specification.Shader,
    asUniform: (name: string) => boolean
  ) {
    this._spec = spec;
    this._shader = shader;
    this._asUniform = asUniform;

    // Make a record of existing names
    this._names = {};
    const record_names = (map: { [name: string]: any }) => {
      for (const name in map) {
        if (map.hasOwnProperty(name)) {
          this._names[name] = true;
        }
      }
    };
    record_names(spec.input);
    record_names(spec.output);
    record_names(spec.variables);
    record_names(shader.input);
    record_names(shader.output);
  }

  public getUnusedName(hint: string): string {
    let index = 0;
    while (true) {
      const candidate = "s3" + hint + index.toString();
      if (this._names[candidate] === true) {
        index += 1;
        continue;
      }
      this._names[candidate] = true;
      return candidate;
    }
  }

  // Should we pass the mark input `name` to the fragment shader?
  public fragmentPassthru(name: string) {
    return (
      this._spec.input.hasOwnProperty(name) &&
      !this._spec.output.hasOwnProperty(name)
    );
  }
}
