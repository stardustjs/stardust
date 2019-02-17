// Declare mark code with Javascript calls.

import { Dictionary } from "../common";

import * as Specification from "../specification";

import { compileString } from "../compiler";

export class CustomMarkItem {
  private _name: string;
  private _attrs: Dictionary<string>;

  constructor(name: string) {
    this._name = name;
    this._attrs = new Dictionary<string>();
  }

  public attr(name: string, expression: string): CustomMarkItem {
    this._attrs.set(name, expression);
    return this;
  }

  public generateCode(): string {
    const attrDefs: string[] = [];
    this._attrs.forEach((value, key) => {
      attrDefs.push(`${key} = ${value}`);
    });
    return `${this._name}(${attrDefs.join(", ")})`;
  }
}

export class CustomMark {
  private _imports: Array<[string, string]>;
  private _inputs: Array<[string, string, string]>;
  private _variables: Array<[string, string]>;
  private _items: CustomMarkItem[];

  constructor() {
    this._imports = [];
    this._inputs = [];
    this._variables = [];
    this._items = [];
  }

  public input(name: string, type: string, initial?: string): CustomMark {
    this._inputs.push([name, type, initial]);
    return this;
  }

  public variable(name: string, expression: string): CustomMark {
    this._variables.push([name, expression]);
    return this;
  }

  public add(name: string): CustomMarkItem {
    const [libraryName, markName] = name.split(".");
    let alreadyImported = false;
    for (const [lib, mark] of this._imports) {
      if (lib == libraryName && mark == markName) {
        alreadyImported = true;
      }
    }
    if (!alreadyImported) {
      this._imports.push([libraryName, markName]);
    }
    const item = new CustomMarkItem(markName);
    this._items.push(item);
    return item;
  }

  public generateCode(markName: string): string {
    const lines: string[] = [];
    for (const [library, name] of this._imports) {
      lines.push(`import { ${name} } from ${library};`);
    }
    // Input attributes:
    const inputDefs: string[] = [];
    for (const [name, type, initial] of this._inputs) {
      if (initial == null) {
        inputDefs.push(`${name}: ${type}`);
      } else {
        inputDefs.push(`${name}: ${type} = ${initial}`);
      }
    }
    lines.push(`mark ${markName}(`);
    lines.push(`    ${inputDefs.join(", ")}`);
    lines.push(`) {`);
    // Variables
    for (const [name, expression] of this._variables) {
      lines.push(`    let ${name} = ${expression};`);
    }
    for (const item of this._items) {
      lines.push(`    ${item.generateCode()};`);
    }
    lines.push(`}`);
    return lines.join("\n");
  }

  public compile(): Specification.Mark {
    const code = this.generateCode("Mark");
    const specs = compileString(code);
    return specs.Mark;
  }
}
