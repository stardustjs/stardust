import { RuntimeError, Dictionary } from "../common";

import * as Specification from "../specification";
import * as Intrinsics from "../intrinsics";

export interface EmittedVertex {
  [name: string]: Specification.Value;
}

export class Context {
  private _variables: Dictionary<Specification.Value>;

  constructor() {
    this._variables = new Dictionary<Specification.Value>();
  }

  public get(name: string): Specification.Value {
    if (!this._variables.has(name)) {
      throw new RuntimeError(`'${name}' is undefined.`);
    }
    return this._variables.get(name);
  }

  public set(name: string, value: Specification.Value) {
    this._variables.set(name, value);
  }

  public evaluateExpression(
    expression: Specification.Expression
  ): Specification.Value {
    switch (expression.type) {
      case "function": {
        const expr = expression as Specification.ExpressionFunction;
        const args = expr.arguments.map(arg => this.evaluateExpression(arg));
        const func = Intrinsics.getIntrinsicFunction(expr.functionName);
        if (!func) {
          throw new RuntimeError(
            `function '${expr.functionName}' is undefined.`
          );
        }
        return func.javascriptImplementation(...args);
      }
      case "field": {
        const expr = expression as Specification.ExpressionField;
        const value = this.evaluateExpression(expr.value);
        switch (expr.fieldName) {
          case "x":
            return (value as number[])[0];
          case "y":
            return (value as number[])[1];
          case "z":
            return (value as number[])[2];
          case "w":
            return (value as number[])[3];
          case "r":
            return (value as number[])[0];
          case "g":
            return (value as number[])[1];
          case "b":
            return (value as number[])[2];
          case "a":
            return (value as number[])[3];
        }
        throw new RuntimeError("invalid field.");
      }
      case "constant": {
        const expr = expression as Specification.ExpressionConstant;
        return expr.value;
      }
      case "variable": {
        const expr = expression as Specification.ExpressionVariable;
        return this.get(expr.variableName);
      }
    }
  }

  public evaluateStatement(
    statement: Specification.Statement
  ): EmittedVertex[] {
    switch (statement.type) {
      case "assign": {
        const s = statement as Specification.StatementAssign;
        this.set(s.variableName, this.evaluateExpression(s.expression));
        return [];
      }
      case "condition": {
        const s = statement as Specification.StatementCondition;
        const condition = this.evaluateExpression(s.condition) as number;
        if (condition != 0) {
          return this.evaluateStatements(s.trueStatements);
        } else {
          return this.evaluateStatements(s.falseStatements);
        }
      }
      case "emit": {
        const s = statement as Specification.StatementEmit;
        const emitInfo: { [name: string]: Specification.Value } = {};
        for (const name in s.attributes) {
          const value = this.evaluateExpression(s.attributes[name]);
          emitInfo[name] = value;
        }
        return [emitInfo];
      }
    }
  }

  public evaluateStatements(
    statements: Specification.Statement[]
  ): EmittedVertex[] {
    const result: EmittedVertex[] = [];
    for (const s of statements) {
      const v = this.evaluateStatement(s);
      for (const r of v) {
        result.push(r);
      }
    }
    return result;
  }

  public evaluateMark(
    mark: Specification.Mark,
    inputs: { [name: string]: Specification.Value }
  ): EmittedVertex[] {
    for (const name in inputs) {
      this.set(name, inputs[name]);
    }
    return this.evaluateStatements(mark.statements);
  }
}
