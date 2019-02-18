(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Stardust"] = factory();
	else
		root["Stardust"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));
__export(__webpack_require__(12));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = "0.2.4";
// Math classes and utilities
__export(__webpack_require__(0));
// Re-export core modules
var Specification = __webpack_require__(6);
exports.Specification = Specification;
var Intrinsics = __webpack_require__(3);
exports.Intrinsics = Intrinsics;
var Compiler = __webpack_require__(13);
exports.Compiler = Compiler;
__export(__webpack_require__(14));
__export(__webpack_require__(34));
__export(__webpack_require__(41));
__export(__webpack_require__(17));
//# sourceMappingURL=stardust-core.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = __webpack_require__(7);
function compile(code) {
    return compiler_1.compileString(code);
}
exports.compile = compile;
//# sourceMappingURL=compile.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var common_2 = __webpack_require__(0);
// Global intrinsic functions.
var intrinsicFunctions = new common_1.Dictionary();
var intrinsicFunctionList = [];
var typeConversions = new common_1.Dictionary();
var constants = new common_1.Dictionary();
function getInternalName(func) {
    return "@" + func.name + ":" + func.argTypes.join(",") + ":" + func.returnType;
}
exports.getInternalName = getInternalName;
function getIntrinsicFunction(internalName) {
    if (!intrinsicFunctions.has(internalName)) {
        console.log(internalName);
    }
    return intrinsicFunctions.get(internalName);
}
exports.getIntrinsicFunction = getIntrinsicFunction;
function forEachIntrinsicFunction(callback) {
    intrinsicFunctionList.forEach(callback);
}
exports.forEachIntrinsicFunction = forEachIntrinsicFunction;
function addIntrinsicFunction(func) {
    func.internalName = getInternalName(func);
    intrinsicFunctions.set(func.internalName, func);
    intrinsicFunctionList.push(func);
}
exports.addIntrinsicFunction = addIntrinsicFunction;
function addConstant(name, type, value) {
    var constant = {
        name: name,
        type: type,
        value: value
    };
    constants.set(name, constant);
}
exports.addConstant = addConstant;
function forEachConstant(callback) {
    constants.forEach(callback);
}
exports.forEachConstant = forEachConstant;
function forEachTypeConversion(callback) {
    typeConversions.forEach(callback);
}
exports.forEachTypeConversion = forEachTypeConversion;
function getTypeConversion(srcType, destType) {
    return typeConversions.get(srcType + ":" + destType);
}
exports.getTypeConversion = getTypeConversion;
function RegisterTypeConversion(srcType, destType, rank, func) {
    var name = "cast:" + srcType + ":" + destType;
    var info = {
        name: name,
        argTypes: [srcType],
        returnType: destType,
        javascriptImplementation: func
    };
    addIntrinsicFunction(info);
    typeConversions.set(srcType + ":" + destType, {
        internalName: info.internalName,
        rank: rank
    });
}
function RegisterFunction(name, argTypes, returnType, func) {
    addIntrinsicFunction({
        name: name,
        argTypes: argTypes,
        returnType: returnType,
        javascriptImplementation: func
    });
}
function RegisterOperator(name, argTypes, returnType, func) {
    addIntrinsicFunction({
        name: "@" + name,
        argTypes: argTypes,
        returnType: returnType,
        javascriptImplementation: func
    });
}
function not_implemented() {
    throw new Error("not implemented");
}
var RegisterConstructor = function (type, srcTypes, func) { return RegisterFunction(type, srcTypes, type, func); };
// Basic arithmetics: +, -, *, /.
RegisterOperator("+", ["float", "float"], "float", function (a, b) { return a + b; });
RegisterOperator("-", ["float", "float"], "float", function (a, b) { return a - b; });
RegisterOperator("*", ["float", "float"], "float", function (a, b) { return a * b; });
RegisterOperator("/", ["float", "float"], "float", function (a, b) { return a / b; });
RegisterOperator("+", ["float"], "float", function (a) { return +a; });
RegisterOperator("-", ["float"], "float", function (a) { return -a; });
RegisterOperator("%", ["int", "int"], "int", function (a, b) { return a % b; });
RegisterOperator("%", ["float", "float"], "float", function (a, b) { return a % b; });
RegisterOperator("+", ["int", "int"], "int", function (a, b) { return a + b; });
RegisterOperator("-", ["int", "int"], "int", function (a, b) { return a - b; });
RegisterOperator("*", ["int", "int"], "int", function (a, b) { return a * b; });
RegisterOperator("/", ["int", "int"], "int", function (a, b) { return a / b; });
RegisterOperator("+", ["int"], "int", function (a) { return +a; });
RegisterOperator("-", ["int"], "int", function (a) { return -a; });
RegisterOperator("+", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] + b[0], a[1] + b[1]]; });
RegisterOperator("-", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] - b[0], a[1] - b[1]]; });
RegisterOperator("*", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] * b[0], a[1] * b[1]]; });
RegisterOperator("/", ["Vector2", "Vector2"], "Vector2", function (a, b) { return [a[0] / b[0], a[1] / b[1]]; });
RegisterOperator("+", ["Vector2"], "Vector2", function (a) { return a; });
RegisterOperator("-", ["Vector2"], "Vector2", function (a) { return [-a[0], -a[1]]; });
RegisterOperator("+", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; });
RegisterOperator("-", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; });
RegisterOperator("*", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]; });
RegisterOperator("/", ["Vector3", "Vector3"], "Vector3", function (a, b) { return [a[0] / b[0], a[1] / b[1], a[2] / b[2]]; });
RegisterOperator("+", ["Vector3"], "Vector3", function (a) { return a; });
RegisterOperator("-", ["Vector3"], "Vector3", function (a) { return [
    -a[0],
    -a[1],
    -a[2]
]; });
RegisterOperator("+", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [
    a[0] + b[0],
    a[1] + b[1],
    a[2] + b[2],
    a[3] + b[3]
]; });
RegisterOperator("-", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [
    a[0] - b[0],
    a[1] - b[1],
    a[2] - b[2],
    a[3] - b[3]
]; });
RegisterOperator("*", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [
    a[0] * b[0],
    a[1] * b[1],
    a[2] * b[2],
    a[3] * b[3]
]; });
RegisterOperator("/", ["Vector4", "Vector4"], "Vector4", function (a, b) { return [
    a[0] / b[0],
    a[1] / b[1],
    a[2] / b[2],
    a[3] / b[3]
]; });
RegisterOperator("+", ["Vector4"], "Vector4", function (a) { return a; });
RegisterOperator("-", ["Vector4"], "Vector4", function (a) { return [
    -a[0],
    -a[1],
    -a[2],
    -a[3]
]; });
RegisterOperator("*", ["float", "Vector2"], "Vector2", function (a, b) { return [a * b[0], a * b[1]]; });
RegisterOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return [a[0] * b, a[1] * b]; });
RegisterOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return [a[0] / b, a[1] / b]; });
RegisterOperator("*", ["float", "Vector3"], "Vector3", function (a, b) { return [a * b[0], a * b[1], a * b[2]]; });
RegisterOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return [a[0] * b, a[1] * b, a[2] * b]; });
RegisterOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return [a[0] / b, a[1] / b, a[2] / b]; });
RegisterOperator("*", ["float", "Vector4"], "Vector4", function (a, b) { return [a * b[0], a * b[1], a * b[2], a * b[3]]; });
RegisterOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return [a[0] * b, a[1] * b, a[2] * b, a[3] * b]; });
RegisterOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return [a[0] / b, a[1] / b, a[2] / b, a[3] / b]; });
// Comparison operators.
RegisterOperator("==", ["float", "float"], "bool", function (a, b) {
    return a == b ? 1 : 0;
});
RegisterOperator(">", ["float", "float"], "bool", function (a, b) {
    return a > b ? 1 : 0;
});
RegisterOperator("<", ["float", "float"], "bool", function (a, b) {
    return a < b ? 1 : 0;
});
RegisterOperator(">=", ["float", "float"], "bool", function (a, b) {
    return a >= b ? 1 : 0;
});
RegisterOperator("<=", ["float", "float"], "bool", function (a, b) {
    return a <= b ? 1 : 0;
});
RegisterOperator("==", ["int", "int"], "bool", function (a, b) {
    return a == b ? 1 : 0;
});
RegisterOperator(">", ["int", "int"], "bool", function (a, b) {
    return a > b ? 1 : 0;
});
RegisterOperator("<", ["int", "int"], "bool", function (a, b) {
    return a < b ? 1 : 0;
});
RegisterOperator(">=", ["int", "int"], "bool", function (a, b) {
    return a >= b ? 1 : 0;
});
RegisterOperator("<=", ["int", "int"], "bool", function (a, b) {
    return a <= b ? 1 : 0;
});
RegisterOperator("==", ["bool", "bool"], "bool", function (a, b) {
    return a == b ? 1 : 0;
});
// Boolean operators.
RegisterOperator("!", ["bool"], "bool", function (a) { return (!a ? 1 : 0); });
RegisterOperator("&&", ["bool", "bool"], "bool", function (a, b) {
    return a && b ? 1 : 0;
});
RegisterOperator("||", ["bool", "bool"], "bool", function (a, b) {
    return a || b ? 1 : 0;
});
// Vector/quaternion constructors.
RegisterConstructor("Vector2", ["float", "float"], function (a, b) { return [
    a,
    b
]; });
RegisterConstructor("Vector3", ["float", "float", "float"], function (a, b, c) { return [a, b, c]; });
RegisterConstructor("Vector4", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
RegisterConstructor("Color", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
RegisterConstructor("Quaternion", ["float", "float", "float", "float"], function (a, b, c, d) { return [a, b, c, d]; });
// Math functions.
RegisterFunction("abs", ["float"], "float", function (a) { return Math.abs(a); });
RegisterFunction("sqrt", ["float"], "float", function (a) { return Math.sqrt(a); });
RegisterFunction("exp", ["float"], "float", function (a) { return Math.exp(a); });
RegisterFunction("log", ["float"], "float", function (a) { return Math.log(a); });
RegisterFunction("sin", ["float"], "float", function (a) { return Math.sin(a); });
RegisterFunction("cos", ["float"], "float", function (a) { return Math.cos(a); });
RegisterFunction("tan", ["float"], "float", function (a) { return Math.tan(a); });
RegisterFunction("asin", ["float"], "float", function (a) { return Math.asin(a); });
RegisterFunction("acos", ["float"], "float", function (a) { return Math.acos(a); });
RegisterFunction("atan", ["float"], "float", function (a) { return Math.atan(a); });
RegisterFunction("atan2", ["float", "float"], "float", function (a, b) {
    return Math.atan2(a, b);
});
RegisterFunction("abs", ["int"], "int", function (a) { return Math.abs(a); });
RegisterFunction("min", ["int", "int"], "int", function (a, b) {
    return Math.min(a, b);
});
RegisterFunction("max", ["int", "int"], "int", function (a, b) {
    return Math.max(a, b);
});
RegisterFunction("min", ["float", "float"], "float", function (a, b) {
    return Math.min(a, b);
});
RegisterFunction("max", ["float", "float"], "float", function (a, b) {
    return Math.max(a, b);
});
RegisterFunction("ceil", ["float"], "float", function (a, b) {
    return Math.ceil(a);
});
RegisterFunction("floor", ["float"], "float", function (a, b) {
    return Math.floor(a);
});
RegisterFunction("mix", ["float", "float", "float"], "float", function (a, b, t) { return a + (b - a) * t; });
RegisterFunction("mix", ["Vector2", "Vector2", "float"], "Vector2", null); // TODO
RegisterFunction("mix", ["Vector3", "Vector3", "float"], "Vector3", null);
RegisterFunction("mix", ["Vector4", "Vector4", "float"], "Vector4", null);
RegisterFunction("mix", ["Color", "Color", "float"], "Color", null);
RegisterFunction("clamp", ["float"], "float", function (a) {
    return Math.max(0, Math.min(1, a));
});
// Vector functions.
RegisterFunction("dot", ["Vector2", "Vector2"], "float", function (a, b) { return a[0] * b[0] + a[1] * b[1]; });
RegisterFunction("dot", ["Vector3", "Vector3"], "float", function (a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; });
RegisterFunction("dot", ["Vector4", "Vector4"], "float", function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});
RegisterFunction("length", ["Vector2"], "float", function (a) {
    return common_2.Vector2.FromArray(a)
        .normalize()
        .toArray();
});
RegisterFunction("length", ["Vector3"], "float", function (a) {
    return common_2.Vector3.FromArray(a)
        .normalize()
        .toArray();
});
RegisterFunction("length", ["Vector4"], "float", function (a) {
    return common_2.Quaternion.FromArray(a)
        .normalize()
        .toArray();
});
RegisterFunction("length", ["Quaternion"], "float", function (a) {
    return common_2.Quaternion.FromArray(a)
        .normalize()
        .toArray();
});
RegisterFunction("normalize", ["Vector2"], "Vector2", function (a) {
    return common_2.Vector2.FromArray(a).length();
});
RegisterFunction("normalize", ["Vector3"], "Vector3", function (a) {
    return common_2.Vector3.FromArray(a).length();
});
RegisterFunction("normalize", ["Vector4"], "Vector4", function (a) {
    return common_2.Quaternion.FromArray(a).length();
});
RegisterFunction("normalize", ["Quaternion"], "Quaternion", function (a) {
    return common_2.Quaternion.FromArray(a).length();
});
RegisterFunction("cross", ["Vector3", "Vector3"], "Vector3", function (a, b) {
    return common_2.Vector3.FromArray(a)
        .cross(common_2.Vector3.FromArray(b))
        .toArray();
});
// Quaternion functions.
RegisterFunction("quat_mul", ["Quaternion", "Quaternion"], "Quaternion", function (a, b) {
    return common_2.Quaternion.FromArray(a)
        .mul(common_2.Quaternion.FromArray(b))
        .toArray();
});
RegisterFunction("quat_conj", ["Quaternion"], "Quaternion", function (a) {
    return common_2.Quaternion.FromArray(a)
        .conj()
        .toArray();
});
RegisterFunction("quat_slerp", ["Quaternion", "Quaternion", "float"], "Quaternion", function (a, b, t) {
    return common_2.Quaternion.Slerp(common_2.Quaternion.FromArray(a), common_2.Quaternion.FromArray(b), t).toArray();
});
RegisterFunction("quat_rotate", ["Quaternion", "Vector3"], "Vector3", function (q, v) {
    return common_2.Quaternion.FromArray(q)
        .rotate(common_2.Vector3.FromArray(v))
        .toArray();
});
RegisterFunction("quat_rotation", ["Vector3", "float"], "Quaternion", function (axis, angle) {
    return common_2.Quaternion.Rotation(common_2.Vector3.FromArray(axis), angle).toArray();
});
// Color functions.
RegisterConstructor("Color", ["float", "float", "float", "float"], function (r, g, b, a) { return [r, g, b, a]; });
RegisterConstructor("Color", ["float", "float", "float"], function (r, g, b) { return [r, g, b, 1]; });
RegisterConstructor("Color", ["float", "float"], function (v, a) { return [
    v,
    v,
    v,
    a
]; });
RegisterConstructor("Color", ["float"], function (v) { return [v, v, v, 1]; });
RegisterFunction("lab2rgb", ["Color"], "Color", function (color) { return color; });
RegisterFunction("hcl2rgb", ["Color"], "Color", function (color) { return color; });
// Type conversions.
// We only allow low-precision to high-precision conversions to be automated.
RegisterTypeConversion("bool", "int", 1, function (a) { return a; });
RegisterTypeConversion("int", "float", 1, function (a) { return a; });
// Explicit conversions.
RegisterFunction("int", ["float"], "int", function (a) { return Math.floor(a); });
RegisterFunction("float", ["int"], "float", function (a) { return a; });
RegisterTypeConversion("Quaternion", "Vector4", 0, function (a) { return a; });
RegisterTypeConversion("Vector4", "Quaternion", 0, function (a) { return a; });
RegisterTypeConversion("Color", "Vector4", 0, function (a) { return a; });
RegisterTypeConversion("Vector4", "Color", 0, function (a) { return a; });
RegisterTypeConversion("Vector4Array", "ColorArray", 0, function (a) { return a; });
RegisterTypeConversion("ColorArray", "Vector4Array", 0, function (a) { return a; });
RegisterTypeConversion("Vector4Array2D", "Image", 0, function (a) { return a; });
RegisterTypeConversion("Image", "Vector4Image", 0, function (a) { return a; });
// Constants
addConstant("PI", "float", Math.PI);
addConstant("SQRT2", "float", Math.SQRT2);
addConstant("SQRT1_2", "float", Math.SQRT1_2);
addConstant("RED", "Color", [1, 0, 0, 1]);
// Array and image
RegisterFunction("array", ["FloatArray", "float"], "float", not_implemented);
RegisterFunction("array", ["Vector2Array", "float"], "Vector2", not_implemented);
RegisterFunction("array", ["Vector3Array", "float"], "Vector3", not_implemented);
RegisterFunction("array", ["Vector4Array", "float"], "Vector4", not_implemented);
RegisterFunction("array", ["ColorArray", "float"], "Color", not_implemented);
RegisterFunction("image", ["Image", "Vector2"], "Color", not_implemented);
RegisterFunction("image", ["Vector4Image", "Vector2"], "Vector4", not_implemented);
RegisterFunction("image", ["Vector3Image", "Vector2"], "Vector3", not_implemented);
RegisterFunction("image", ["Vector2Image", "Vector2"], "Vector2", not_implemented);
RegisterFunction("image", ["FloatImage", "Vector2"], "float", not_implemented);
// Return the camera position if appliable
RegisterFunction("get_camera_position", [], "Vector3", not_implemented);
// Return a unit vector pointing to the camera
RegisterFunction("get_camera_direction", ["Vector3"], "Vector3", not_implemented);
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var parser_pegjs = __webpack_require__(27);
function stripComments(content) {
    content = content.replace(/\/\/[^\n]*\n/g, "\n");
    content = content.replace(/\/\/[^\n]*$/g, "");
    return content;
}
function parseFile(content) {
    content = stripComments(content);
    var result = null;
    try {
        result = parser_pegjs.parse(content, {
            startRule: "FileEntry"
        });
    }
    catch (e) {
        if (e.location) {
            throw new common_1.ParseError(e.message, e.location.start, e.location.end);
        }
        else {
            throw new common_1.ParseError(e.message);
        }
    }
    return result;
}
exports.parseFile = parseFile;
function parseExpression(content) {
    var result = null;
    try {
        result = parser_pegjs.parse(content, {
            startRule: "ExpressionEntry"
        });
    }
    catch (e) {
        if (e.location) {
            throw new common_1.ParseError(e.message, e.location.start, e.location.end);
        }
        else {
            throw new common_1.ParseError(e.message);
        }
    }
    return result;
}
exports.parseExpression = parseExpression;
//# sourceMappingURL=parser.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var BindingType;
(function (BindingType) {
    BindingType[BindingType["VALUE"] = 0] = "VALUE";
    BindingType[BindingType["FUNCTION"] = 1] = "FUNCTION";
    BindingType[BindingType["TEXTURE"] = 2] = "TEXTURE";
})(BindingType = exports.BindingType || (exports.BindingType = {}));
var ShiftBinding = /** @class */ (function () {
    function ShiftBinding(name, offset) {
        this.name = name;
        this.offset = offset;
    }
    return ShiftBinding;
}());
exports.ShiftBinding = ShiftBinding;
// Resolve binding primitives to Value (Value = number or number[]).
function getBindingValue(value) {
    if (value instanceof common_1.MathType) {
        return value.toArray();
    }
    else {
        return value;
    }
}
exports.getBindingValue = getBindingValue;
exports.types = {
    float: { name: "float", size: 4, primitive: "float", primitiveCount: 1 },
    int: { name: "int", size: 4, primitive: "int", primitiveCount: 1 },
    Vector2: { name: "Vector2", size: 8, primitive: "float", primitiveCount: 2 },
    Vector3: { name: "Vector3", size: 12, primitive: "float", primitiveCount: 3 },
    Quaternion: {
        name: "Quaternion",
        size: 16,
        primitive: "float",
        primitiveCount: 4
    },
    Color: { name: "Color", size: 16, primitive: "float", primitiveCount: 4 }
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Construct = __webpack_require__(25);
exports.Construct = Construct;
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var common_2 = __webpack_require__(0);
var Intrinsics = __webpack_require__(3);
var Library = __webpack_require__(26);
var parser_1 = __webpack_require__(4);
var resolver_1 = __webpack_require__(30);
var scope_1 = __webpack_require__(31);
var Compiler = /** @class */ (function () {
    function Compiler() {
        this._scope = new scope_1.ScopeStack();
        this._constants = new common_2.Dictionary();
        this._moduleResolver = new resolver_1.ModuleResolver();
        this._statements = [];
        this._lastIndex = 1;
        this.prepareFieldTypeRegistry();
        this.prepareConstants();
    }
    Compiler.prototype.prepareFieldTypeRegistry = function () {
        this._fieldTypeRegistry = {};
        var r = this._fieldTypeRegistry;
        for (var _i = 0, _a = ["x", "y"]; _i < _a.length; _i++) {
            var f = _a[_i];
            r["Vector2." + f] = "float";
        }
        for (var _b = 0, _c = ["x", "y", "z", "r", "g", "b"]; _b < _c.length; _b++) {
            var f = _c[_b];
            r["Vector3." + f] = "float";
        }
        for (var _d = 0, _e = ["x", "y", "z", "w", "r", "g", "b", "a"]; _d < _e.length; _d++) {
            var f = _e[_d];
            r["Vector4." + f] = "float";
        }
        for (var _f = 0, _g = ["r", "g", "b", "a"]; _f < _g.length; _f++) {
            var f = _g[_f];
            r["Color." + f] = "float";
        }
    };
    Compiler.prototype.prepareConstants = function () {
        var _this = this;
        Intrinsics.forEachConstant(function (info) {
            _this._constants.set(info.name, info);
        });
    };
    Compiler.prototype.resolveFunction = function (name, args, kwargs) {
        var resolver = this._moduleResolver.getFunction(name);
        if (resolver) {
            return resolver.resolveArguments(args, kwargs);
        }
        else {
            throw new common_1.CompileError("function '" + name + " is undefined.");
        }
    };
    Compiler.prototype.loadFile = function (file) {
        var _this = this;
        var _loop_1 = function (block) {
            if (block.type == "function") {
                var blockFunction = block;
                this_1._moduleResolver.addFunction(blockFunction.name, blockFunction);
            }
            if (block.type == "import") {
                var blockImport_1 = block;
                if (blockImport_1.functionNames != null) {
                    blockImport_1.functionNames.forEach(function (name) {
                        _this._moduleResolver.importFunction(Library.getModule(blockImport_1.moduleName), name);
                    });
                }
                else {
                    var module_1 = Library.getModule(blockImport_1.moduleName);
                    module_1.forEach(function (func, name) {
                        _this._moduleResolver.importFunction(module_1, name);
                    });
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = file.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            _loop_1(block);
        }
    };
    Compiler.prototype.getDefaultValueForType = function (type) {
        if (type == "float") {
            return 0;
        }
        if (type == "Vector2") {
            return [0, 0];
        }
        if (type == "Vector3") {
            return [0, 0, 0];
        }
        if (type == "Vector4") {
            return [0, 0, 0, 0];
        }
        if (type == "Color") {
            return [0, 0, 0, 1];
        }
        if (type == "Quaternion") {
            return [0, 0, 0, 1];
        }
        return 0;
    };
    Compiler.prototype.compileFunctionToMark = function (globals, block) {
        // Re-init state.
        this._scope.resetScope();
        this._lastIndex = 1;
        var markInput = {};
        var markOutput = {};
        var markVariables = {};
        // Setup input parameters.
        for (var _i = 0, globals_1 = globals; _i < globals_1.length; _i++) {
            var global_1 = globals_1[_i];
            this._scope.addVariable(global_1.name, global_1.valueType, "global");
            markInput[global_1.name] = {
                type: global_1.valueType,
                default: global_1.default || this.getDefaultValueForType(global_1.valueType)
            };
        }
        for (var _a = 0, _b = block.arguments; _a < _b.length; _a++) {
            var arg = _b[_a];
            this._scope.addVariable(arg.name, arg.type, "local");
            markInput[arg.name] = {
                type: arg.type,
                default: arg.default || this.getDefaultValueForType(arg.type)
            };
        }
        // Flatten statements.
        this.compileStatements({
            type: "statements",
            statements: block.statements
        });
        // Figure out variables.
        this._scope.forEach(function (name, type) {
            if (!markInput[name]) {
                markVariables[name] = type;
            }
        });
        // Figure out outputs.
        var processStatementsForOutputs = function (statements) {
            statements.forEach(function (x) {
                if (x.type == "emit") {
                    var sEmit = x;
                    for (var attr in sEmit.attributes) {
                        if (markOutput.hasOwnProperty(attr)) {
                            if (markOutput[attr].type != sEmit.attributes[attr].valueType) {
                                throw new common_1.CompileError("output variable '" + attr + " has conflicting types.");
                            }
                        }
                        else {
                            markOutput[attr] = { type: sEmit.attributes[attr].valueType };
                        }
                    }
                }
                if (x.type == "condition") {
                    var sCondition = x;
                    processStatementsForOutputs(sCondition.trueStatements);
                    processStatementsForOutputs(sCondition.falseStatements);
                }
                if (x.type == "for") {
                    var sForLoop = x;
                    processStatementsForOutputs(sForLoop.statements);
                }
            });
        };
        processStatementsForOutputs(this._statements);
        return {
            input: markInput,
            output: markOutput,
            variables: markVariables,
            statements: this._statements
        };
    };
    Compiler.prototype.addStatement = function (statement) {
        this._statements.push(statement);
    };
    Compiler.prototype.addStatements = function (statements) {
        this._statements = this._statements.concat(statements);
    };
    Compiler.prototype.captureStatements = function (callback) {
        var currentStatements = this._statements;
        this._statements = [];
        callback();
        var result = this._statements;
        this._statements = currentStatements;
        return result;
    };
    Compiler.prototype.compileExpression = function (expression) {
        switch (expression.type) {
            case "value": {
                var expr = expression;
                return {
                    type: "constant",
                    value: expr.value,
                    valueType: expr.valueType
                };
            }
            case "variable": {
                var expr = expression;
                if (this._constants.has(expr.name)) {
                    var cinfo = this._constants.get(expr.name);
                    return {
                        type: "constant",
                        value: cinfo.value,
                        valueType: cinfo.type
                    };
                }
                else {
                    return {
                        type: "variable",
                        variableName: this._scope.translateVariableName(expr.name),
                        valueType: this._scope.getVariable(expr.name).type
                    };
                }
            }
            case "field": {
                var expr = expression;
                var valueExpr = this.compileExpression(expr.value);
                return {
                    type: "field",
                    fieldName: expr.fieldName,
                    value: valueExpr,
                    valueType: this._fieldTypeRegistry[valueExpr.valueType + "." + expr.fieldName]
                };
            }
            case "function": {
                var expr = expression;
                var args = [];
                var kwargs = {};
                for (var _i = 0, _a = expr.args.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    args.push(this.compileExpression(arg));
                }
                for (var key in expr.args.kwargs) {
                    var e = expr.args.kwargs[key];
                    kwargs[key] = this.compileExpression(expr.args.kwargs[key]);
                }
                var _b = this.resolveFunction(expr.name, args, kwargs), func = _b[0], argExpressions = _b[1];
                var returnValueExpression = null;
                if (!func.statements) {
                    returnValueExpression = {
                        type: "function",
                        functionName: func.name,
                        arguments: argExpressions,
                        valueType: func.returnType
                    };
                }
                else {
                    var argMap = new common_2.Dictionary();
                    for (var argIndex in func.arguments) {
                        var arg = func.arguments[argIndex];
                        var mapped = this._scope.nextVariableName(arg.type);
                        argMap.set(arg.name, mapped);
                        this.addStatement({
                            type: "assign",
                            variableName: this._scope.translateVariableName(mapped),
                            expression: argExpressions[argIndex]
                        });
                    }
                    this._scope.pushScope(argMap);
                    this._moduleResolver.enterFunctionImplementation(expr.name);
                    for (var _c = 0, _d = func.statements; _c < _d.length; _c++) {
                        var statement = _d[_c];
                        if (statement.type == "return") {
                            var statement_return = statement;
                            returnValueExpression = this.compileExpression(statement_return.value);
                            break;
                        }
                        else {
                            this.compileStatement(statement);
                        }
                    }
                    this._moduleResolver.leaveFunctionImplementation(expr.name);
                    this._scope.popScope();
                }
                return returnValueExpression;
            }
        }
        return null;
    };
    Compiler.prototype.compileStandaloneExpression = function (expression, variables) {
        switch (expression.type) {
            case "value": {
                var expr = expression;
                return {
                    type: "constant",
                    value: expr.value,
                    valueType: expr.valueType
                };
            }
            case "variable": {
                var expr = expression;
                if (variables.has(expr.name)) {
                    return variables.get(expr.name);
                }
                else {
                    if (this._constants.has(expr.name)) {
                        var cinfo = this._constants.get(expr.name);
                        return {
                            type: "constant",
                            value: cinfo.value,
                            valueType: cinfo.type
                        };
                    }
                    else {
                        throw new common_1.CompileError("variable " + expr.name + " is undefined");
                    }
                }
            }
            case "field": {
                var expr = expression;
                var valueExpr = this.compileStandaloneExpression(expr.value, variables);
                return {
                    type: "field",
                    fieldName: expr.fieldName,
                    value: valueExpr,
                    valueType: this._fieldTypeRegistry[valueExpr.valueType + "." + expr.fieldName]
                };
            }
            case "function": {
                var expr = expression;
                var args = [];
                var kwargs = {};
                for (var _i = 0, _a = expr.args.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    args.push(this.compileStandaloneExpression(arg, variables));
                }
                for (var key in expr.args.kwargs) {
                    var e = expr.args.kwargs[key];
                    kwargs[key] = this.compileStandaloneExpression(expr.args.kwargs[key], variables);
                }
                var _b = this.resolveFunction(expr.name, args, kwargs), func = _b[0], argExpressions = _b[1];
                return {
                    type: "function",
                    functionName: func.name,
                    arguments: argExpressions,
                    valueType: func.returnType
                };
            }
        }
        return null;
    };
    Compiler.prototype.compileStatements = function (statements) {
        this._scope.pushScope();
        for (var _i = 0, _a = statements.statements; _i < _a.length; _i++) {
            var s = _a[_i];
            this.compileStatement(s);
        }
        this._scope.popScope();
    };
    Compiler.prototype.compileStatement = function (statement) {
        var _this = this;
        switch (statement.type) {
            case "declare":
                {
                    var s = statement;
                    if (s.initial) {
                        var ve = this.compileExpression(s.initial);
                        var variableType = s.variableType;
                        if (variableType == "auto") {
                            variableType = ve.valueType;
                        }
                        this._scope.addVariable(s.variableName, variableType, "local");
                        if (ve.valueType != variableType) {
                            var veType = ve.valueType;
                            ve = resolver_1.typeConversionAttempt(ve, this._scope.getVariable(s.variableName).type)[0];
                            if (ve === null) {
                                throw new common_1.CompileError("cannot convert type '" + veType + "' to '" + variableType + "'.");
                            }
                        }
                        this.addStatement({
                            type: "assign",
                            variableName: this._scope.translateVariableName(s.variableName),
                            expression: ve
                        });
                    }
                    else {
                        this._scope.addVariable(s.variableName, s.variableType, "local");
                    }
                }
                break;
            case "expression":
                {
                    var s = statement;
                    this.compileExpression(s.expression);
                }
                break;
            case "assign":
                {
                    var s = statement;
                    var ve = this.compileExpression(s.expression);
                    var targetType = this._scope.getVariable(s.variableName).type;
                    if (ve.valueType != targetType) {
                        var veType = ve.valueType;
                        ve = resolver_1.typeConversionAttempt(ve, this._scope.getVariable(s.variableName).type)[0];
                        if (ve === null) {
                            throw new common_1.CompileError("cannot convert type '" + veType + " to '" + targetType + "'.");
                        }
                    }
                    this.addStatement({
                        type: "assign",
                        variableName: this._scope.translateVariableName(s.variableName),
                        expression: ve
                    });
                }
                break;
            case "emit":
                {
                    var s = statement;
                    s.vertices.forEach(function (v) {
                        var attrs = {};
                        for (var argName in v) {
                            var expr = v[argName];
                            attrs[argName] = _this.compileExpression(expr);
                        }
                        _this.addStatement({
                            type: "emit",
                            attributes: attrs
                        });
                    });
                }
                break;
            case "discard":
                {
                    this.addStatement({
                        type: "discard"
                    });
                }
                break;
            case "statements":
                {
                    var s = statement;
                    this.compileStatements(s);
                }
                break;
            case "for":
                {
                    var s_1 = statement;
                    this._scope.pushScope();
                    // Declare the loop variable
                    this._scope.addVariable(s_1.variableName, "int", "local");
                    var loopVariable = this._scope.translateVariableName(s_1.variableName);
                    // Compile for statements
                    var forStatement = {
                        type: "for",
                        variableName: loopVariable,
                        rangeMin: s_1.start,
                        rangeMax: s_1.end,
                        statements: this.captureStatements(function () {
                            return _this.compileStatement(s_1.statement);
                        })
                    };
                    this.addStatement(forStatement);
                    this._scope.popScope();
                }
                break;
            case "if":
                {
                    var s_2 = statement;
                    // Function to compile the i-th condition in the if-elseif-else syntax.
                    var compileIthCondition_1 = function (i) {
                        if (i < s_2.conditions.length) {
                            var statements = [];
                            _this._scope.pushScope();
                            var ve = _this.compileExpression(s_2.conditions[i].condition);
                            var cond = {
                                type: "condition",
                                condition: ve,
                                trueStatements: _this.captureStatements(function () {
                                    return _this.compileStatement(s_2.conditions[i].statement);
                                }),
                                falseStatements: _this.captureStatements(function () {
                                    return compileIthCondition_1(i + 1);
                                })
                            };
                            _this.addStatement(cond);
                            _this._scope.popScope();
                        }
                        else {
                            if (s_2.else) {
                                _this.compileStatement(s_2.else);
                            }
                        }
                    };
                    compileIthCondition_1(0);
                }
                break;
            case "return": {
                throw new common_1.CompileError("unexpected return statement");
            }
        }
    };
    return Compiler;
}());
exports.Compiler = Compiler;
function compileTree(file) {
    var spec = {};
    var globals = file.blocks.filter(function (x) { return x.type == "global"; });
    for (var _i = 0, _a = file.blocks; _i < _a.length; _i++) {
        var block = _a[_i];
        if (block.type == "function") {
            var blockFunction = block;
            if (blockFunction.isMark || blockFunction.isShader) {
                var scope = new Compiler();
                scope.loadFile(file);
                var mark = scope.compileFunctionToMark(globals, blockFunction);
                spec[blockFunction.name] = mark;
            }
        }
    }
    return spec;
}
exports.compileTree = compileTree;
var standaloneCompiler = new Compiler();
function compileExpression(expr, variables) {
    return standaloneCompiler.compileStandaloneExpression(expr, variables);
}
exports.compileExpression = compileExpression;
function compileString(content) {
    var file = parser_1.parseFile(content);
    return compileTree(file);
}
exports.compileString = compileString;
//# sourceMappingURL=compiler.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(5);
/** Texture data binding */
var TextureBinding = /** @class */ (function () {
    function TextureBinding() {
    }
    return TextureBinding;
}());
exports.TextureBinding = TextureBinding;
var ArrayBinding = /** @class */ (function (_super) {
    __extends(ArrayBinding, _super);
    function ArrayBinding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        _this._valueFunction = null;
        _this._dirty = false;
        _this._textureData = null;
        return _this;
    }
    ArrayBinding.prototype.getTextureData = function () {
        if (this._dirty) {
            var values = this._data.map(this._valueFunction).map(types_1.getBindingValue);
            if (values.length == 0) {
                this._textureData = null;
            }
            else {
                var array_1;
                var numberComponents = void 0;
                if (typeof values[0] == "number") {
                    numberComponents = 1;
                    array_1 = new Float32Array(values.length * 4);
                    for (var i = 0; i < values.length; i++) {
                        array_1[i * 4] = values[i];
                    }
                }
                else {
                    numberComponents = values[0].length;
                    array_1 = new Float32Array(values.length * 4);
                    var offset = 0;
                    for (var i = 0; i < values.length; i++) {
                        var v = values[i];
                        for (var j = 0; j < numberComponents; j++) {
                            array_1[offset++] = v[j];
                        }
                        offset += 4 - numberComponents;
                    }
                }
                this._textureData = {
                    width: this._data.length,
                    height: 1,
                    dimensions: 1,
                    type: "f32",
                    numberComponents: numberComponents,
                    data: array_1
                };
            }
        }
        return this._textureData;
    };
    ArrayBinding.prototype.data = function (data) {
        if (data != null) {
            this._data = data;
            this._dirty = true;
            return this;
        }
        else {
            return this._data;
        }
    };
    ArrayBinding.prototype.value = function (func) {
        if (func != null) {
            this._valueFunction = func;
            this._dirty = true;
            return this;
        }
        else {
            return this._valueFunction;
        }
    };
    return ArrayBinding;
}(TextureBinding));
exports.ArrayBinding = ArrayBinding;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    Image.prototype.setImage = function (image) {
        this._data = {
            width: image.width,
            height: image.height,
            numberComponents: 4,
            type: image instanceof HTMLImageElement
                ? "HTMLImageElement"
                : "HTMLCanvasElement",
            data: image,
            dimensions: 2
        };
    };
    Image.prototype.getTextureData = function () {
        return this._data;
    };
    return Image;
}(TextureBinding));
exports.Image = Image;
function array() {
    return new ArrayBinding();
}
exports.array = array;
//# sourceMappingURL=array.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var common_2 = __webpack_require__(0);
var binding_1 = __webpack_require__(15);
var scale_1 = __webpack_require__(10);
var shiftBindingDescriptions = [
    { shift: -2, suffix: "_pp" },
    { shift: -1, suffix: "_p" },
    { shift: +1, suffix: "_n" },
    { shift: +2, suffix: "_nn" }
];
var Mark = /** @class */ (function () {
    function Mark(spec, shader, platform) {
        this._spec = spec;
        this._shader = shader;
        this._data = [];
        this._platform = platform;
        this._bindings = new common_2.Dictionary();
        this._shiftBindings = new common_2.Dictionary();
        this._platformMark = null;
        this._shouldUploadData = true;
        this._instanceFunctions = null;
        // Set bindings to default value whenever exists.
        for (var name_1 in this._spec.input) {
            if (this._spec.input.hasOwnProperty(name_1)) {
                var input = this._spec.input[name_1];
                if (input.default != null) {
                    this._bindings.set(name_1, new binding_1.Binding(input.type, input.default));
                }
            }
        }
        // Assign shift bindings based on naming convention.
        for (var name_2 in this._spec.input) {
            if (this._spec.input.hasOwnProperty(name_2)) {
                for (var _i = 0, shiftBindingDescriptions_1 = shiftBindingDescriptions; _i < shiftBindingDescriptions_1.length; _i++) {
                    var _a = shiftBindingDescriptions_1[_i], shift = _a.shift, suffix = _a.suffix;
                    if (this._spec.input.hasOwnProperty(name_2 + suffix)) {
                        this._bindings.delete(name_2 + suffix);
                        this._shiftBindings.set(name_2 + suffix, new binding_1.ShiftBinding(name_2, shift));
                    }
                }
            }
        }
    }
    Object.defineProperty(Mark.prototype, "spec", {
        get: function () {
            return this._spec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mark.prototype, "shader", {
        get: function () {
            return this._shader;
        },
        enumerable: true,
        configurable: true
    });
    Mark.prototype.attr = function (name, value) {
        if (value === undefined) {
            if (!this._bindings.has(name)) {
                throw new common_1.RuntimeError("attr '" + name + " is undefined.");
            }
            var binding = this._bindings.get(name);
            if (binding instanceof binding_1.Binding) {
                return binding.value;
            }
            else {
                return binding;
            }
        }
        else {
            if (!this._spec.input.hasOwnProperty(name)) {
                throw new common_1.RuntimeError("attr '" + name + " is undefined.");
            }
            if (value instanceof scale_1.ScaleBinding) {
                if (this._platformMark) {
                    if (this._bindings.get(name) != value) {
                        this._platformMark = null;
                    }
                }
                this._bindings.set(name, value);
            }
            else {
                // Create new binding.
                var newBinding = new binding_1.Binding(this._spec.input[name].type, value);
                // Decide if we should recompile the platform code.
                if (this._platformMark) {
                    // Recompile if the input was compiled as input,
                    // and the new binding is not a function.
                    if (this._platformMark.isUniform(name) &&
                        newBinding.bindingType != binding_1.BindingType.FUNCTION) {
                        if (newBinding.bindingType == binding_1.BindingType.VALUE) {
                            this._platformMark.updateUniform(name, newBinding.specValue);
                        }
                        if (newBinding.bindingType == binding_1.BindingType.TEXTURE) {
                            this._platformMark.updateTexture(name, newBinding.textureValue);
                        }
                    }
                    else {
                        this._platformMark = null;
                    }
                }
                this._bindings.set(name, newBinding);
            }
            return this;
        }
    };
    Mark.prototype.data = function (data) {
        if (data === undefined) {
            return this._data;
        }
        else {
            this._data = data;
            this._shouldUploadData = true;
            return this;
        }
    };
    Mark.prototype.instance = function (datum, attrs) {
        if (datum === undefined && attrs === undefined) {
            return this._instanceFunctions;
        }
        else {
            this._instanceFunctions = {
                datum: datum,
                attrs: attrs
            };
        }
    };
    // Make alternative spec to include ScaleBinding values.
    Mark.prototype.prepareSpecification = function () {
        var newSpec = {
            input: common_2.shallowClone(this._spec.input),
            output: this._spec.output,
            statements: this._spec.statements.slice(),
            variables: common_2.shallowClone(this._spec.variables),
            repeatBegin: this._spec.repeatBegin,
            repeatEnd: this._spec.repeatEnd
        };
        var newBindings = this._bindings.clone();
        var shiftBindings = this._shiftBindings.clone();
        this._bindings.forEach(function (binding, name) {
            if (binding instanceof scale_1.ScaleBinding) {
                var attributes = binding.getAttributes();
                var attrs_1 = {};
                attributes.forEach(function (attr) {
                    var bindedName = name + attr.bindedName;
                    newBindings.set(bindedName, new binding_1.Binding(attr.type, attr.binding));
                    attrs_1[attr.bindedName] = {
                        type: "variable",
                        valueType: attr.type,
                        variableName: bindedName
                    };
                    newSpec.input[bindedName] = {
                        type: attr.type,
                        default: null
                    };
                });
                // Move the attribute to variables.
                newSpec.variables[name] = newSpec.input[name].type;
                newSpec.statements.splice(0, 0, {
                    type: "assign",
                    variableName: name,
                    expression: binding.getExpression(attrs_1),
                    valueType: newSpec.input[name].type
                });
                var _loop_1 = function (suffix, shift) {
                    if (newSpec.input.hasOwnProperty(name + suffix)) {
                        newSpec.variables[name + suffix] = newSpec.input[name].type;
                        var shiftAttrs_1 = {};
                        attributes.forEach(function (attr) {
                            var bindedName = name + attr.bindedName;
                            if (newBindings.get(bindedName).bindingType == binding_1.BindingType.FUNCTION) {
                                var shiftBindedName = bindedName + suffix;
                                shiftBindings.set(shiftBindedName, new binding_1.ShiftBinding(bindedName, shift));
                                shiftAttrs_1[attr.bindedName] = {
                                    type: "variable",
                                    valueType: attr.type,
                                    variableName: shiftBindedName
                                };
                                newSpec.input[shiftBindedName] = {
                                    type: attr.type,
                                    default: null
                                };
                            }
                            else {
                                shiftAttrs_1[attr.bindedName] = {
                                    type: "variable",
                                    valueType: attr.type,
                                    variableName: bindedName
                                };
                            }
                        });
                        newSpec.statements.splice(0, 0, {
                            type: "assign",
                            variableName: name + suffix,
                            expression: binding.getExpression(shiftAttrs_1),
                            valueType: newSpec.input[name].type
                        });
                    }
                };
                for (var _i = 0, shiftBindingDescriptions_2 = shiftBindingDescriptions; _i < shiftBindingDescriptions_2.length; _i++) {
                    var _a = shiftBindingDescriptions_2[_i], suffix = _a.suffix, shift = _a.shift;
                    _loop_1(suffix, shift);
                }
                delete newSpec.input[name];
                newBindings.delete(name);
                for (var _b = 0, shiftBindingDescriptions_3 = shiftBindingDescriptions; _b < shiftBindingDescriptions_3.length; _b++) {
                    var suffix = shiftBindingDescriptions_3[_b].suffix;
                    if (shiftBindings.has(name + suffix)) {
                        delete newSpec.input[name + suffix];
                        shiftBindings.delete(name + suffix);
                    }
                }
            }
        });
        return [newSpec, newBindings, shiftBindings];
    };
    Mark.prototype.uploadScaleUniforms = function () {
        var _this = this;
        this._bindings.forEach(function (binding, name) {
            if (binding instanceof scale_1.ScaleBinding) {
                var attributes = binding.getAttributes();
                var attrs = {};
                attributes.forEach(function (attr) {
                    if (attr.binding instanceof binding_1.TextureBinding) {
                        _this._platformMark.updateTexture(name + attr.bindedName, attr.binding);
                    }
                    else {
                        _this._platformMark.updateUniform(name + attr.bindedName, attr.binding);
                    }
                });
            }
        });
    };
    Mark.prototype.prepare = function () {
        var _this = this;
        if (!this._platformMark) {
            var _a = this.prepareSpecification(), spec = _a[0], binding = _a[1], shiftBinding = _a[2];
            this._platformMark = this._platform.compile(this, spec, this._shader, binding, shiftBinding);
            this._shouldUploadData = true;
        }
        if (this._shouldUploadData) {
            if (this._instanceFunctions == null) {
                this._platformMarkData = this._platformMark.uploadData([this._data]);
            }
            else {
                var allData_1 = [];
                this._data.forEach(function (datum, index) {
                    var data = _this._instanceFunctions.datum(datum, index, _this._data);
                    allData_1.push(data);
                });
                this._platformMarkData = this._platformMark.uploadData(allData_1);
            }
            this._shouldUploadData = false;
        }
        return this;
    };
    Mark.prototype.render = function () {
        var _this = this;
        this.prepare();
        if (this._instanceFunctions == null) {
            this._platformMark.render(this._platformMarkData, function () {
                _this.uploadScaleUniforms();
            });
        }
        else {
            this._platformMark.render(this._platformMarkData, function (index) {
                var datum = _this._data[index];
                if (_this._instanceFunctions.attrs) {
                    var attrs = _this._instanceFunctions.attrs(datum, index, _this._data);
                    if (attrs != null) {
                        for (var attr in attrs) {
                            if (attrs.hasOwnProperty(attr)) {
                                _this._platformMark.updateUniform(attr, binding_1.getBindingValue(attrs[attr]));
                            }
                        }
                    }
                }
                _this.uploadScaleUniforms();
            });
        }
        return this;
    };
    return Mark;
}());
exports.Mark = Mark;
//# sourceMappingURL=mark.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScaleBinding = /** @class */ (function () {
    function ScaleBinding(scale, returnType, argTypes) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this._scale = scale;
        this._returnType = returnType;
        this._argTypes = argTypes;
        this._args = args;
    }
    ScaleBinding.prototype.getReturnType = function () {
        return this._returnType;
    };
    ScaleBinding.prototype.getAttributes = function () {
        var _this = this;
        var result = [];
        for (var _i = 0, _a = this._scale.getAttributes(); _i < _a.length; _i++) {
            var attr = _a[_i];
            result.push({
                scaleBinding: this,
                bindedName: "s" + attr.name,
                name: attr.name,
                type: attr.type,
                binding: attr.binding
            });
        }
        this._args.forEach(function (arg, index) {
            if (arg instanceof ScaleBinding) {
                var a = arg;
                var attributes = a.getAttributes();
                for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                    var attr = attributes_1[_i];
                    result.push({
                        scaleBinding: _this,
                        bindedName: "a" + index + attr.bindedName,
                        name: attr.name,
                        type: attr.type,
                        binding: attr.binding
                    });
                }
            }
            else {
                // Binded values become attributes here.
                result.push({
                    scaleBinding: _this,
                    bindedName: "a" + index,
                    name: "a" + index,
                    type: _this._argTypes[index],
                    binding: arg
                });
            }
        });
        return result;
    };
    ScaleBinding.prototype.getExpression = function (attrs) {
        var _a;
        var sAttrs = {};
        for (var _i = 0, _b = this._scale.getAttributes(); _i < _b.length; _i++) {
            var attr = _b[_i];
            sAttrs[attr.name] = attrs["s" + attr.name];
        }
        var values = this._args.map(function (arg, index) {
            if (arg instanceof ScaleBinding) {
                var a = arg;
                var attributes = a.getAttributes();
                var aAttrs = {};
                for (var _i = 0, attributes_2 = attributes; _i < attributes_2.length; _i++) {
                    var attr = attributes_2[_i];
                    aAttrs[attr.bindedName] = attrs["a" + index + attr.bindedName];
                }
                return arg.getExpression(aAttrs);
            }
            else {
                return attrs["a" + index];
            }
        });
        return (_a = this._scale).getExpression.apply(_a, [sAttrs].concat(values));
    };
    return ScaleBinding;
}());
exports.ScaleBinding = ScaleBinding;
//# sourceMappingURL=scale.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
var stardust_core_2 = __webpack_require__(1);
var generator_1 = __webpack_require__(43);
var stardust_core_3 = __webpack_require__(1);
var stardust_core_4 = __webpack_require__(1);
var WebGLUtils = __webpack_require__(47);
var WebGLPlatformMarkProgram = /** @class */ (function () {
    function WebGLPlatformMarkProgram(GL, spec, shader, asUniform, viewType, mode) {
        this._GL = GL;
        var generator = new generator_1.Generator(spec, shader, asUniform, viewType, mode);
        this._program = WebGLUtils.compileProgram(this._GL, generator.getVertexCode(), generator.getFragmentCode());
        this._uniformLocations = new stardust_core_2.Dictionary();
        this._attribLocations = new stardust_core_2.Dictionary();
        this._textures = new stardust_core_2.Dictionary();
        this._currentTextureUnit = 0;
    }
    WebGLPlatformMarkProgram.prototype.use = function () {
        this._GL.useProgram(this._program);
    };
    WebGLPlatformMarkProgram.prototype.setUniform = function (name, type, value) {
        var location = this.getUniformLocation(name);
        if (location == null) {
            return;
        }
        var GL = this._GL;
        if (type.primitive == "float") {
            var va = value;
            switch (type.primitiveCount) {
                case 1:
                    GL.uniform1f(location, value);
                    break;
                case 2:
                    GL.uniform2f(location, va[0], va[1]);
                    break;
                case 3:
                    GL.uniform3f(location, va[0], va[1], va[2]);
                    break;
                case 4:
                    GL.uniform4f(location, va[0], va[1], va[2], va[3]);
                    break;
            }
        }
        if (type.primitive == "int") {
            var va = value;
            switch (type.primitiveCount) {
                case 1:
                    GL.uniform1i(location, value);
                    break;
                case 2:
                    GL.uniform2i(location, va[0], va[1]);
                    break;
                case 3:
                    GL.uniform3i(location, va[0], va[1], va[2]);
                    break;
                case 4:
                    GL.uniform4i(location, va[0], va[1], va[2], va[3]);
                    break;
            }
        }
    };
    WebGLPlatformMarkProgram.prototype.setTexture = function (name, texture) {
        var GL = this._GL;
        if (!this._textures.has(name)) {
            var newTexture = GL.createTexture();
            var unit = this._currentTextureUnit++;
            this._textures.set(name, {
                data: null,
                texture: newTexture,
                unit: unit
            });
            GL.bindTexture(GL.TEXTURE_2D, newTexture);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
            GL.bindTexture(GL.TEXTURE_2D, null);
            this.use();
            this.setUniform(name, stardust_core_1.types.int, unit);
        }
        var cache = this._textures.get(name);
        var newData = texture.getTextureData();
        if (cache.data == newData) {
            return;
        }
        else {
            cache.data = newData;
            // We need non-power-of-2 textures and floating point texture support.
            GL.bindTexture(GL.TEXTURE_2D, cache.texture);
            switch (newData.type) {
                case "f32": {
                    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, newData.width, newData.height, 0, GL.RGBA, GL.FLOAT, newData.data);
                    break;
                }
                case "u8": {
                    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, newData.width, newData.height, 0, GL.RGBA, GL.FLOAT, newData.data);
                    break;
                }
                case "HTMLImageElement":
                case "HTMLCanvasElement": {
                    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.FLOAT, newData.data);
                    break;
                }
            }
            GL.bindTexture(GL.TEXTURE_2D, null);
            this.use();
            if (newData.dimensions == 1) {
                this.setUniform(name + "_length", stardust_core_1.types.float, newData.width);
            }
            if (newData.dimensions == 2) {
                this.setUniform(name + "_width", stardust_core_1.types.float, newData.width);
                this.setUniform(name + "_height", stardust_core_1.types.float, newData.height);
            }
        }
    };
    WebGLPlatformMarkProgram.prototype.bindTextures = function () {
        var GL = this._GL;
        this._textures.forEach(function (cache) {
            GL.activeTexture(GL.TEXTURE0 + cache.unit);
            GL.bindTexture(GL.TEXTURE_2D, cache.texture);
        });
    };
    WebGLPlatformMarkProgram.prototype.unbindTextures = function () {
        var GL = this._GL;
        this._textures.forEach(function (cache) {
            GL.activeTexture(GL.TEXTURE0 + cache.unit);
            GL.bindTexture(GL.TEXTURE_2D, null);
        });
    };
    WebGLPlatformMarkProgram.prototype.getUniformLocation = function (name) {
        if (this._uniformLocations.has(name)) {
            return this._uniformLocations.get(name);
        }
        else {
            var location_1 = this._GL.getUniformLocation(this._program, name);
            this._uniformLocations.set(name, location_1);
            return location_1;
        }
    };
    WebGLPlatformMarkProgram.prototype.getAttribLocation = function (name) {
        if (this._attribLocations.has(name)) {
            return this._attribLocations.get(name);
        }
        else {
            var location_2 = this._GL.getAttribLocation(this._program, name);
            if (location_2 < 0) {
                location_2 = null;
            }
            this._attribLocations.set(name, location_2);
            return location_2;
        }
    };
    return WebGLPlatformMarkProgram;
}());
var WebGLPlatformMarkData = /** @class */ (function (_super) {
    __extends(WebGLPlatformMarkData, _super);
    function WebGLPlatformMarkData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebGLPlatformMarkData;
}(stardust_core_1.PlatformMarkData));
exports.WebGLPlatformMarkData = WebGLPlatformMarkData;
var WebGLPlatformMark = /** @class */ (function (_super) {
    __extends(WebGLPlatformMark, _super);
    function WebGLPlatformMark(platform, GL, mark, spec, shader, bindings, shiftBindings) {
        var _this = _super.call(this) || this;
        _this._platform = platform;
        _this._GL = GL;
        _this._mark = mark;
        _this._bindings = bindings;
        _this._shiftBindings = shiftBindings;
        _this._spec = spec;
        _this._shader = shader;
        var flattenedInfo = stardust_core_2.Compiler.Transforms.flattenEmits(spec);
        _this._specFlattened = flattenedInfo.specification;
        _this._flattenedVertexIndexVariable = flattenedInfo.indexVariable;
        _this._flattenedVertexCount = flattenedInfo.count;
        _this._program = new WebGLPlatformMarkProgram(GL, _this._specFlattened, _this._shader, function (name) { return _this.isUniform(name); }, _this._platform.viewInfo.type, generator_1.GenerateMode.NORMAL);
        _this._programPick = new WebGLPlatformMarkProgram(GL, _this._specFlattened, _this._shader, function (name) { return _this.isUniform(name); }, _this._platform.viewInfo.type, generator_1.GenerateMode.PICK);
        _this.initializeUniforms();
        return _this;
    }
    WebGLPlatformMark.prototype.initializeUniforms = function () {
        for (var name_1 in this._specFlattened.input) {
            if (this.isUniform(name_1)) {
                var binding = this._bindings.get(name_1);
                if (binding.bindingType == stardust_core_1.BindingType.VALUE) {
                    this.updateUniform(name_1, binding.specValue);
                }
                if (binding.bindingType == stardust_core_1.BindingType.TEXTURE) {
                    this.updateTexture(name_1, binding.textureValue);
                }
            }
        }
    };
    WebGLPlatformMark.prototype.initializeBuffers = function () {
        var _this = this;
        var GL = this._GL;
        var data = new WebGLPlatformMarkData();
        data.buffers = new stardust_core_2.Dictionary();
        this._bindings.forEach(function (binding, name) {
            if (!_this.isUniform(name)) {
                var location_3 = _this._program.getAttribLocation(name);
                if (location_3 != null) {
                    data.buffers.set(name, GL.createBuffer());
                }
            }
        });
        data.buffers.set(this._flattenedVertexIndexVariable, GL.createBuffer());
        if (this._programPick) {
            data.buffers.set("s3_pick_index", GL.createBuffer());
        }
        data.ranges = [];
        return data;
    };
    // Is the input attribute compiled as uniform?
    WebGLPlatformMark.prototype.isUniform = function (name) {
        // Extra variables we add are always not uniforms.
        if (name == this._flattenedVertexIndexVariable) {
            return false;
        }
        if (this._bindings.get(name) == null) {
            if (this._shiftBindings.get(name) == null) {
                throw new stardust_core_3.RuntimeError("attribute " + name + " is not specified.");
            }
            else {
                return (this._bindings.get(this._shiftBindings.get(name).name).bindingType !=
                    stardust_core_1.BindingType.FUNCTION);
            }
        }
        else {
            // Look at the binding to determine.
            return this._bindings.get(name).bindingType != stardust_core_1.BindingType.FUNCTION;
        }
    };
    WebGLPlatformMark.prototype.updateUniform = function (name, value) {
        var binding = this._bindings.get(name);
        var type = binding.valueType;
        this._program.use();
        this._program.setUniform(name, type, value);
        if (this._programPick) {
            this._programPick.use();
            this._programPick.setUniform(name, type, value);
        }
    };
    WebGLPlatformMark.prototype.updateTexture = function (name, value) {
        this._program.setTexture(name, value);
        if (this._programPick) {
            this._programPick.setTexture(name, value);
        }
    };
    WebGLPlatformMark.prototype.uploadData = function (datas) {
        var buffers = this.initializeBuffers();
        buffers.ranges = [];
        var repeatBegin = this._spec.repeatBegin || 0;
        var repeatEnd = this._spec.repeatEnd || 0;
        var GL = this._GL;
        var bindings = this._bindings;
        var rep = this._flattenedVertexCount;
        var totalCount = 0;
        datas.forEach(function (data) {
            var n = data.length;
            if (n == 0) {
                buffers.ranges.push(null);
                return;
            }
            else {
                var c1 = totalCount;
                totalCount += n + repeatBegin + repeatEnd;
                var c2 = totalCount;
                buffers.ranges.push([c1 * rep, c2 * rep]);
            }
        });
        this._bindings.forEach(function (binding, name) {
            var buffer = buffers.buffers.get(name);
            if (buffer == null) {
                return;
            }
            var type = binding.valueType;
            var array = new Float32Array(type.primitiveCount * totalCount * rep);
            var currentIndex = 0;
            var multiplier = type.primitiveCount * rep;
            datas.forEach(function (data) {
                if (data.length == 0) {
                    return;
                }
                for (var i = 0; i < repeatBegin; i++) {
                    binding.fillBinary([data[0]], rep, array.subarray(currentIndex, currentIndex + multiplier));
                    currentIndex += multiplier;
                }
                binding.fillBinary(data, rep, array.subarray(currentIndex, currentIndex + data.length * multiplier));
                currentIndex += data.length * multiplier;
                for (var i = 0; i < repeatEnd; i++) {
                    binding.fillBinary([data[data.length - 1]], rep, array.subarray(currentIndex, currentIndex + multiplier));
                    currentIndex += multiplier;
                }
            });
            GL.bindBuffer(GL.ARRAY_BUFFER, buffer);
            GL.bufferData(GL.ARRAY_BUFFER, array, GL.STATIC_DRAW);
        });
        // The vertex index attribute.
        var array = new Float32Array(totalCount * rep);
        for (var i = 0; i < totalCount * rep; i++) {
            array[i] = i % rep;
        }
        GL.bindBuffer(GL.ARRAY_BUFFER, buffers.buffers.get(this._flattenedVertexIndexVariable));
        GL.bufferData(GL.ARRAY_BUFFER, array, GL.STATIC_DRAW);
        // The pick index attribute.
        if (this._programPick) {
            var array_1 = new Float32Array(totalCount * rep * 4);
            for (var i = 0; i < totalCount * rep; i++) {
                var index = Math.floor(i / rep);
                array_1[i * 4 + 0] = (index & 0xff) / 255.0;
                array_1[i * 4 + 1] = ((index & 0xff00) >> 8) / 255.0;
                array_1[i * 4 + 2] = ((index & 0xff0000) >> 16) / 255.0;
                array_1[i * 4 + 3] = ((index & 0xff000000) >> 24) / 255.0;
            }
            GL.bindBuffer(GL.ARRAY_BUFFER, buffers.buffers.get("s3_pick_index"));
            GL.bufferData(GL.ARRAY_BUFFER, array_1, GL.STATIC_DRAW);
        }
        return buffers;
    };
    // Render the graphics.
    WebGLPlatformMark.prototype.renderBase = function (buffers, mode, onRender) {
        var _this = this;
        if (buffers.ranges.length > 0) {
            var GL_1 = this._GL;
            var spec = this._specFlattened;
            var bindings = this._bindings;
            // Decide which program to use
            var program_1 = this._program;
            if (mode == generator_1.GenerateMode.PICK) {
                program_1 = this._programPick;
            }
            program_1.use();
            var minOffset_1 = 0;
            var maxOffset_1 = 0;
            this._shiftBindings.forEach(function (shift, name) {
                if (shift.offset > maxOffset_1) {
                    maxOffset_1 = shift.offset;
                }
                if (shift.offset < minOffset_1) {
                    minOffset_1 = shift.offset;
                }
            });
            // Assign attributes to buffers
            for (var name_2 in spec.input) {
                var attributeLocation = program_1.getAttribLocation(name_2);
                if (attributeLocation == null) {
                    continue;
                }
                if (this._shiftBindings.has(name_2)) {
                    var shift = this._shiftBindings.get(name_2);
                    GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get(shift.name));
                    GL_1.enableVertexAttribArray(attributeLocation);
                    var type = bindings.get(shift.name).valueType;
                    GL_1.vertexAttribPointer(attributeLocation, type.primitiveCount, type.primitive == "float" ? GL_1.FLOAT : GL_1.INT, false, 0, type.size * (shift.offset - minOffset_1) * this._flattenedVertexCount);
                }
                else {
                    GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get(name_2));
                    GL_1.enableVertexAttribArray(attributeLocation);
                    if (name_2 == this._flattenedVertexIndexVariable) {
                        GL_1.vertexAttribPointer(attributeLocation, 1, GL_1.FLOAT, false, 0, 4 * -minOffset_1 * this._flattenedVertexCount);
                    }
                    else {
                        var type = bindings.get(name_2).valueType;
                        GL_1.vertexAttribPointer(attributeLocation, type.primitiveCount, type.primitive == "float" ? GL_1.FLOAT : GL_1.INT, false, 0, type.size * -minOffset_1 * this._flattenedVertexCount);
                    }
                }
            }
            // For pick mode, assign the pick index buffer
            if (mode == generator_1.GenerateMode.PICK) {
                var attributeLocation = program_1.getAttribLocation("s3_pick_index");
                GL_1.bindBuffer(GL_1.ARRAY_BUFFER, buffers.buffers.get("s3_pick_index"));
                GL_1.enableVertexAttribArray(attributeLocation);
                GL_1.vertexAttribPointer(attributeLocation, 4, GL_1.FLOAT, false, 0, 0);
            }
            // Set view uniforms
            var viewInfo = this._platform.viewInfo;
            var pose = this._platform.pose;
            var cameraPosition = this._platform.cameraPosition;
            switch (viewInfo.type) {
                case generator_1.ViewType.VIEW_2D:
                    {
                        GL_1.uniform4f(program_1.getUniformLocation("s3_view_params"), 2.0 / viewInfo.width, -2.0 / viewInfo.height, -1, +1);
                    }
                    break;
                case generator_1.ViewType.VIEW_3D:
                    {
                        GL_1.uniform4f(program_1.getUniformLocation("s3_view_params"), 1.0 / Math.tan(viewInfo.fovY / 2.0) / viewInfo.aspectRatio, 1.0 / Math.tan(viewInfo.fovY / 2.0), (viewInfo.near + viewInfo.far) / (viewInfo.near - viewInfo.far), (2.0 * viewInfo.near * viewInfo.far) /
                            (viewInfo.near - viewInfo.far));
                        if (pose) {
                            // Rotation and position.
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), pose.rotation.x, pose.rotation.y, pose.rotation.z, pose.rotation.w);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), pose.position.x, pose.position.y, pose.position.z);
                        }
                        else {
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), 0, 0, 0, 1);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), 0, 0, 0);
                        }
                        GL_1.uniform3f(program_1.getUniformLocation("s3_camera_position"), cameraPosition.x, cameraPosition.y, cameraPosition.z);
                    }
                    break;
                case generator_1.ViewType.VIEW_MATRIX:
                    {
                        GL_1.uniformMatrix4fv(program_1.getUniformLocation("s3_view_matrix"), false, viewInfo.viewMatrix);
                        GL_1.uniformMatrix4fv(program_1.getUniformLocation("s3_projection_matrix"), false, viewInfo.projectionMatrix);
                        if (pose) {
                            // Rotation and position.
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), pose.rotation.x, pose.rotation.y, pose.rotation.z, pose.rotation.w);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), pose.position.x, pose.position.y, pose.position.z);
                        }
                        else {
                            GL_1.uniform4f(program_1.getUniformLocation("s3_view_rotation"), 0, 0, 0, 1);
                            GL_1.uniform3f(program_1.getUniformLocation("s3_view_position"), 0, 0, 0);
                        }
                        GL_1.uniform3f(program_1.getUniformLocation("s3_camera_position"), cameraPosition.x, cameraPosition.y, cameraPosition.z);
                    }
                    break;
            }
            // For pick, set the mark index
            if (mode == generator_1.GenerateMode.PICK) {
                GL_1.uniform1f(program_1.getUniformLocation("s3_pick_index_alpha"), this._pickIndex / 255.0);
            }
            program_1.bindTextures();
            // Draw arrays
            buffers.ranges.forEach(function (range, index) {
                if (onRender) {
                    onRender(index);
                }
                if (range != null) {
                    program_1.use();
                    program_1.bindTextures();
                    GL_1.drawArrays(GL_1.TRIANGLES, range[0], range[1] -
                        range[0] -
                        (maxOffset_1 - minOffset_1) * _this._flattenedVertexCount);
                }
            });
            program_1.unbindTextures();
            // Unbind attributes
            for (var name_3 in spec.input) {
                var attributeLocation = program_1.getAttribLocation(name_3);
                if (attributeLocation != null) {
                    GL_1.disableVertexAttribArray(attributeLocation);
                }
            }
            // Unbind the pick index buffer
            if (mode == generator_1.GenerateMode.PICK) {
                var attributeLocation = program_1.getAttribLocation("s3_pick_index");
                GL_1.disableVertexAttribArray(attributeLocation);
            }
        }
    };
    WebGLPlatformMark.prototype.setPickIndex = function (index) {
        this._pickIndex = index;
    };
    WebGLPlatformMark.prototype.render = function (buffers, onRender) {
        if (this._platform.renderMode == generator_1.GenerateMode.PICK) {
            this.setPickIndex(this._platform.assignPickIndex(this._mark));
        }
        this.renderBase(buffers, this._platform.renderMode, onRender);
    };
    return WebGLPlatformMark;
}(stardust_core_1.PlatformMark));
exports.WebGLPlatformMark = WebGLPlatformMark;
var WebGLPlatform = /** @class */ (function (_super) {
    __extends(WebGLPlatform, _super);
    function WebGLPlatform(GL) {
        var _this = _super.call(this) || this;
        _this._GL = GL;
        _this.set2DView(500, 500);
        _this.setCameraPosition(new stardust_core_1.Vector3());
        _this.setPose(new stardust_core_4.Pose());
        _this._renderMode = generator_1.GenerateMode.NORMAL;
        _this._pickFramebuffer = null;
        return _this;
    }
    Object.defineProperty(WebGLPlatform.prototype, "viewInfo", {
        get: function () {
            return this._viewInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebGLPlatform.prototype, "pose", {
        get: function () {
            return this._pose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebGLPlatform.prototype, "cameraPosition", {
        get: function () {
            return this._cameraPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebGLPlatform.prototype, "renderMode", {
        get: function () {
            return this._renderMode;
        },
        enumerable: true,
        configurable: true
    });
    WebGLPlatform.prototype.getPickFramebuffer = function (width, height) {
        if (this._pickFramebuffer == null ||
            width != this._pickFramebufferWidth ||
            height != this._pickFramebufferHeight) {
            var GL = this._GL;
            this._pickFramebuffer = GL.createFramebuffer();
            this._pickFramebufferWidth = width;
            this._pickFramebufferHeight = height;
            GL.bindFramebuffer(GL.FRAMEBUFFER, this._pickFramebuffer);
            this._pickFramebufferTexture = GL.createTexture();
            GL.bindTexture(GL.TEXTURE_2D, this._pickFramebufferTexture);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
            GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, width, height, 0, GL.RGBA, GL.UNSIGNED_BYTE, null);
            GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.COLOR_ATTACHMENT0, GL.TEXTURE_2D, this._pickFramebufferTexture, 0);
            GL.bindTexture(GL.TEXTURE_2D, null);
            GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        }
        return this._pickFramebuffer;
    };
    WebGLPlatform.prototype.beginPicking = function (width, height) {
        this._renderMode = generator_1.GenerateMode.PICK;
        var GL = this._GL;
        var fb = this.getPickFramebuffer(width, height);
        GL.bindFramebuffer(GL.FRAMEBUFFER, fb);
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT);
        GL.disable(GL.BLEND);
        this._pickMarks = [];
    };
    WebGLPlatform.prototype.assignPickIndex = function (mark) {
        var idx = this._pickMarks.indexOf(mark);
        if (idx >= 0) {
            return idx;
        }
        else {
            var num = this._pickMarks.length;
            this._pickMarks.push(mark);
            return num;
        }
    };
    WebGLPlatform.prototype.endPicking = function () {
        var GL = this._GL;
        GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        GL.enable(GL.BLEND);
        this._renderMode = generator_1.GenerateMode.NORMAL;
    };
    WebGLPlatform.prototype.getPickingPixel = function (x, y) {
        if (this._pickMarks == null ||
            x < 0 ||
            y < 0 ||
            x >= this._pickFramebufferWidth ||
            y >= this._pickFramebufferHeight) {
            return null;
        }
        var GL = this._GL;
        var fb = this._pickFramebuffer;
        GL.bindFramebuffer(GL.FRAMEBUFFER, fb);
        var data = new Uint8Array(4);
        GL.readPixels(x, this._pickFramebufferHeight - 1 - y, 1, 1, GL.RGBA, GL.UNSIGNED_BYTE, data);
        GL.bindFramebuffer(GL.FRAMEBUFFER, null);
        var offset = data[0] + (data[1] << 8) + (data[2] << 16);
        if (offset >= 16777215) {
            return null;
        }
        return [this._pickMarks[data[3]], offset];
    };
    WebGLPlatform.prototype.set2DView = function (width, height) {
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_2D,
            width: width,
            height: height
        };
    };
    WebGLPlatform.prototype.set3DView = function (fovY, aspectRatio, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_3D,
            fovY: fovY,
            aspectRatio: aspectRatio,
            near: near,
            far: far
        };
    };
    WebGLPlatform.prototype.setWebVRView = function (viewMatrix, projectionMatrix) {
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_MATRIX,
            viewMatrix: viewMatrix,
            projectionMatrix: projectionMatrix
        };
    };
    WebGLPlatform.prototype.setMatrixView = function (viewMatrix, projectionMatrix) {
        this._viewInfo = {
            type: generator_1.ViewType.VIEW_MATRIX,
            viewMatrix: viewMatrix,
            projectionMatrix: projectionMatrix
        };
    };
    WebGLPlatform.prototype.setCameraPosition = function (cameraPosition) {
        this._cameraPosition = cameraPosition;
    };
    WebGLPlatform.prototype.setPose = function (pose) {
        this._pose = pose;
    };
    WebGLPlatform.prototype.compile = function (mark, spec, shader, bindings, shiftBindings) {
        return new WebGLPlatformMark(this, this._GL, mark, spec, shader, bindings, shiftBindings);
    };
    return WebGLPlatform;
}(stardust_core_1.Platform));
exports.WebGLPlatform = WebGLPlatform;
//# sourceMappingURL=webgl.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Base class for Vector, Quaternion, and Color */
var MathType = /** @class */ (function () {
    function MathType() {
    }
    return MathType;
}());
exports.MathType = MathType;
/** 2D vector */
var Vector2 = /** @class */ (function (_super) {
    __extends(Vector2, _super);
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    /** Create a Vector2 from a pair of numbers */
    Vector2.FromArray = function (_a) {
        var a = _a[0], b = _a[1];
        return new Vector2(a, b);
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.add = function (rhs) {
        return new Vector2(this.x + rhs.x, this.y + rhs.y);
    };
    Vector2.prototype.sub = function (rhs) {
        return new Vector2(this.x - rhs.x, this.y - rhs.y);
    };
    Vector2.prototype.mul = function (rhs) {
        return new Vector2(this.x * rhs.x, this.y * rhs.y);
    };
    Vector2.prototype.div = function (rhs) {
        return new Vector2(this.x / rhs.x, this.y / rhs.y);
    };
    Vector2.prototype.scale = function (rhs) {
        return new Vector2(this.x * rhs, this.y * rhs);
    };
    Vector2.prototype.dot = function (rhs) {
        return this.x * rhs.x + this.y * rhs.y;
    };
    /** Compute the length of the vector */
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /** Return the normalized vector. Does not affect this vector */
    Vector2.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector3(this.x / l, this.y / l);
    };
    Vector2.prototype.toArray = function () {
        return [this.x, this.y];
    };
    return Vector2;
}(MathType));
exports.Vector2 = Vector2;
/** 3D vector */
var Vector3 = /** @class */ (function (_super) {
    __extends(Vector3, _super);
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    /** Create a Vector3 from a triplet of numbers */
    Vector3.FromArray = function (_a) {
        var a = _a[0], b = _a[1], c = _a[2];
        return new Vector3(a, b, c);
    };
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector3.prototype.add = function (rhs) {
        return new Vector3(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z);
    };
    Vector3.prototype.sub = function (rhs) {
        return new Vector3(this.x - rhs.x, this.y - rhs.y, this.z - rhs.z);
    };
    Vector3.prototype.mul = function (rhs) {
        return new Vector3(this.x * rhs.x, this.y * rhs.y, this.z * rhs.z);
    };
    Vector3.prototype.div = function (rhs) {
        return new Vector3(this.x / rhs.x, this.y / rhs.y, this.z / rhs.z);
    };
    Vector3.prototype.scale = function (rhs) {
        return new Vector3(this.x * rhs, this.y * rhs, this.z * rhs);
    };
    Vector3.prototype.dot = function (rhs) {
        return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
    };
    Vector3.prototype.cross = function (rhs) {
        return new Vector3(this.y * rhs.z - this.z * rhs.y, this.z * rhs.x - this.x * rhs.z, this.x * rhs.y - this.y * rhs.x);
    };
    /** Compute the length of the vector */
    Vector3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    /** Return the normalized vector. Does not affect this vector */
    Vector3.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return new Vector3(this.x / l, this.y / l, this.z / l);
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    return Vector3;
}(MathType));
exports.Vector3 = Vector3;
/** Quaternion */
var Quaternion = /** @class */ (function (_super) {
    __extends(Quaternion, _super);
    function Quaternion(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        _this.w = w;
        return _this;
    }
    /** Spherical linear interpolation */
    Quaternion.Slerp = function (q1, q2, t) {
        var acos_arg = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (acos_arg > 1) {
            acos_arg = 1;
        }
        if (acos_arg < -1) {
            acos_arg = -1;
        }
        var omega = Math.acos(acos_arg);
        var st0, st1;
        if (Math.abs(omega) < 1e-10) {
            st0 = 1 - t;
            st1 = t;
        }
        else {
            var som = Math.sin(omega);
            st0 = Math.sin((1 - t) * omega) / som;
            st1 = Math.sin(t * omega) / som;
        }
        return new Quaternion(q1.x * st0 + q2.x * st1, q1.y * st0 + q2.y * st1, q1.z * st0 + q2.z * st1, q1.w * st0 + q2.w * st1);
    };
    /** Create a rotation quaternion from axis and rotation angle */
    Quaternion.Rotation = function (axis, angle) {
        var axis_normal = axis.normalize().scale(Math.sin(angle / 2));
        return new Quaternion(axis_normal.x, axis_normal.y, axis_normal.z, Math.cos(angle / 2));
    };
    /** Create a Vector2 from an array of four numbers */
    Quaternion.FromArray = function (_a) {
        var a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        return new Quaternion(a, b, c, d);
    };
    Quaternion.prototype.clone = function () {
        return new Quaternion(this.x, this.y, this.z, this.w);
    };
    /** Return the conjugate of this quaternion */
    Quaternion.prototype.conj = function () {
        return new Quaternion(-this.x, -this.y, -this.z, this.w);
    };
    /** Quaternion multiplication */
    Quaternion.prototype.mul = function (rhs) {
        return new Quaternion(rhs.x * this.w + this.x * rhs.w + this.y * rhs.z - this.z * rhs.y, rhs.y * this.w + this.y * rhs.w + this.z * rhs.x - this.x * rhs.z, rhs.z * this.w + this.z * rhs.w + this.x * rhs.y - this.y * rhs.x, this.w * rhs.w - this.x * rhs.x - this.y * rhs.y - this.z * rhs.z);
    };
    /** Rotate the vector with this quaternion */
    Quaternion.prototype.rotate = function (vector) {
        var q = new Quaternion(vector.x, vector.y, vector.z, 0);
        var qv = this.mul(q).mul(this.conj());
        return new Vector3(qv.x, qv.y, qv.z);
    };
    /** Compute the length of the quaternion */
    Quaternion.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    };
    /** Return the normalized quaternion. Does not affect this quaternion */
    Quaternion.prototype.normalize = function () {
        var s = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        return new Quaternion(this.x / s, this.y / s, this.z / s, this.w / s);
    };
    /** Spherical linear interpolation */
    Quaternion.prototype.slerp = function (rhs, t) {
        return Quaternion.Slerp(this, rhs, t);
    };
    Quaternion.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    return Quaternion;
}(MathType));
exports.Quaternion = Quaternion;
/** 3D pose */
var Pose = /** @class */ (function () {
    function Pose(position, rotation) {
        if (position === void 0) { position = new Vector3(0, 0, 0); }
        if (rotation === void 0) { rotation = new Quaternion(0, 0, 0, 1); }
        this.position = position;
        this.rotation = rotation;
    }
    Pose.prototype.transform = function (point) {
        return this.rotation.rotate(point).add(this.position);
    };
    Pose.prototype.transformDirection = function (direction) {
        return this.rotation.rotate(direction);
    };
    Pose.prototype.concat = function (pose2) {
        return new Pose(this.rotation.rotate(pose2.position).add(this.position), this.rotation.mul(pose2.rotation));
    };
    Pose.prototype.invert = function () {
        var invRotation = this.rotation.conj();
        return new Pose(invRotation.rotate(this.position).scale(-1), invRotation);
    };
    return Pose;
}());
exports.Pose = Pose;
//# sourceMappingURL=math.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = __webpack_require__(7);
exports.compileExpression = compiler_1.compileExpression;
exports.compileString = compiler_1.compileString;
exports.compileTree = compiler_1.compileTree;
exports.Compiler = compiler_1.Compiler;
var parser_1 = __webpack_require__(4);
exports.parseExpression = parser_1.parseExpression;
exports.parseFile = parser_1.parseFile;
var Transforms = __webpack_require__(32);
exports.Transforms = Transforms;
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(15));
__export(__webpack_require__(8));
__export(__webpack_require__(5));
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// binding.js:
// Take care of data binding.
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __webpack_require__(8);
var common_1 = __webpack_require__(0);
var types_1 = __webpack_require__(5);
__export(__webpack_require__(5));
__export(__webpack_require__(8));
// The main binding class.
var Binding = /** @class */ (function () {
    function Binding(typeName, value) {
        this._type = types_1.types[typeName];
        this._value = value;
    }
    Object.defineProperty(Binding.prototype, "valueType", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "bindingType", {
        get: function () {
            if (this._value instanceof array_1.TextureBinding) {
                return types_1.BindingType.TEXTURE;
            }
            if (typeof this._value == "function") {
                return types_1.BindingType.FUNCTION;
            }
            return types_1.BindingType.VALUE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "specValue", {
        get: function () {
            return types_1.getBindingValue(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "textureValue", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.forEach = function (data, callback) {
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION:
                {
                    var f = this._value;
                    for (var i = 0; i < data.length; i++) {
                        callback(types_1.getBindingValue(f(data[i], i)), i);
                    }
                }
                break;
            case types_1.BindingType.VALUE:
                {
                    var value = types_1.getBindingValue(this._value);
                    for (var i = 0; i < data.length; i++) {
                        callback(value, i);
                    }
                }
                break;
            case types_1.BindingType.TEXTURE: {
                throw new common_1.RuntimeError("Texture binding does not support for each");
            }
        }
    };
    Binding.prototype.map = function (data) {
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION: {
                var f_1 = this._value;
                return data.map(function (d, i) { return types_1.getBindingValue(f_1(d, i)); });
            }
            case types_1.BindingType.VALUE: {
                var value_1 = types_1.getBindingValue(this._value);
                return data.map(function () { return value_1; });
            }
            case types_1.BindingType.TEXTURE: {
                throw new common_1.RuntimeError("Texture binding does not support for map");
            }
        }
    };
    Binding.prototype.fillBinary = function (data, rep, array) {
        var n = data.length;
        var p = this._type.primitiveCount;
        var ptr = 0;
        switch (this.bindingType) {
            case types_1.BindingType.FUNCTION:
                {
                    var f = this._value;
                    if (p == 1) {
                        for (var i = 0; i < n; i++) {
                            var result = types_1.getBindingValue(f(data[i], i));
                            for (var k = 0; k < rep; k++) {
                                array[ptr++] = result;
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < n; i++) {
                            var result = types_1.getBindingValue(f(data[i], i));
                            for (var k = 0; k < rep; k++) {
                                for (var j = 0; j < p; j++) {
                                    array[ptr++] = result[j];
                                }
                            }
                        }
                    }
                }
                break;
            case types_1.BindingType.VALUE:
                {
                    var value = types_1.getBindingValue(this._value);
                    if (p == 1) {
                        var v = value;
                        for (var i = 0; i < n; i++) {
                            for (var k = 0; k < rep; k++) {
                                array[ptr++] = v;
                            }
                        }
                    }
                    else {
                        var v = value;
                        for (var i = 0; i < n; i++) {
                            for (var k = 0; k < rep; k++) {
                                for (var j = 0; j < p; j++) {
                                    array[ptr++] = v[j];
                                }
                            }
                        }
                    }
                }
                break;
            case types_1.BindingType.TEXTURE: {
                throw new common_1.RuntimeError("Texture binding does not support for fillBinary");
            }
        }
    };
    return Binding;
}());
exports.Binding = Binding;
//# sourceMappingURL=binding.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Declare mark code with Javascript calls.
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var compiler_1 = __webpack_require__(13);
var CustomMarkItem = /** @class */ (function () {
    function CustomMarkItem(name) {
        this._name = name;
        this._attrs = new common_1.Dictionary();
    }
    CustomMarkItem.prototype.attr = function (name, expression) {
        this._attrs.set(name, expression);
        return this;
    };
    CustomMarkItem.prototype.generateCode = function () {
        var attrDefs = [];
        this._attrs.forEach(function (value, key) {
            attrDefs.push(key + " = " + value);
        });
        return this._name + "(" + attrDefs.join(", ") + ")";
    };
    return CustomMarkItem;
}());
exports.CustomMarkItem = CustomMarkItem;
var CustomMark = /** @class */ (function () {
    function CustomMark() {
        this._imports = [];
        this._inputs = [];
        this._variables = [];
        this._items = [];
    }
    CustomMark.prototype.input = function (name, type, initial) {
        this._inputs.push([name, type, initial]);
        return this;
    };
    CustomMark.prototype.variable = function (name, expression) {
        this._variables.push([name, expression]);
        return this;
    };
    CustomMark.prototype.add = function (name) {
        var _a = name.split("."), libraryName = _a[0], markName = _a[1];
        var alreadyImported = false;
        for (var _i = 0, _b = this._imports; _i < _b.length; _i++) {
            var _c = _b[_i], lib = _c[0], mark = _c[1];
            if (lib == libraryName && mark == markName) {
                alreadyImported = true;
            }
        }
        if (!alreadyImported) {
            this._imports.push([libraryName, markName]);
        }
        var item = new CustomMarkItem(markName);
        this._items.push(item);
        return item;
    };
    CustomMark.prototype.generateCode = function (markName) {
        var lines = [];
        for (var _i = 0, _a = this._imports; _i < _a.length; _i++) {
            var _b = _a[_i], library = _b[0], name_1 = _b[1];
            lines.push("import { " + name_1 + " } from " + library + ";");
        }
        // Input attributes:
        var inputDefs = [];
        for (var _c = 0, _d = this._inputs; _c < _d.length; _c++) {
            var _e = _d[_c], name_2 = _e[0], type = _e[1], initial = _e[2];
            if (initial == null) {
                inputDefs.push(name_2 + ": " + type);
            }
            else {
                inputDefs.push(name_2 + ": " + type + " = " + initial);
            }
        }
        lines.push("mark " + markName + "(");
        lines.push("    " + inputDefs.join(", "));
        lines.push(") {");
        // Variables
        for (var _f = 0, _g = this._variables; _f < _g.length; _f++) {
            var _h = _g[_f], name_3 = _h[0], expression = _h[1];
            lines.push("    let " + name_3 + " = " + expression + ";");
        }
        for (var _j = 0, _k = this._items; _j < _k.length; _j++) {
            var item = _k[_j];
            lines.push("    " + item.generateCode() + ";");
        }
        lines.push("}");
        return lines.join("\n");
    };
    CustomMark.prototype.compile = function () {
        var code = this.generateCode("Mark");
        var specs = compiler_1.compileString(code);
        return specs.Mark;
    };
    return CustomMark;
}());
exports.CustomMark = CustomMark;
//# sourceMappingURL=declare.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var PlatformMarkData = /** @class */ (function () {
    function PlatformMarkData() {
    }
    return PlatformMarkData;
}());
exports.PlatformMarkData = PlatformMarkData;
var PlatformMark = /** @class */ (function () {
    function PlatformMark() {
    }
    return PlatformMark;
}());
exports.PlatformMark = PlatformMark;
var Viewport = /** @class */ (function () {
    function Viewport() {
    }
    return Viewport;
}());
exports.Viewport = Viewport;
var Viewport2D = /** @class */ (function (_super) {
    __extends(Viewport2D, _super);
    function Viewport2D(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Viewport2D;
}(Viewport));
exports.Viewport2D = Viewport2D;
var Viewport3D = /** @class */ (function (_super) {
    __extends(Viewport3D, _super);
    function Viewport3D(width, height, fov) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.fov = fov;
        return _this;
    }
    return Viewport3D;
}(Viewport));
exports.Viewport3D = Viewport3D;
var platformConstructors = new common_1.Dictionary();
var Platform = /** @class */ (function () {
    function Platform() {
    }
    /** Register a platform */
    Platform.Register = function (name, ctor) {
        platformConstructors.set(name, ctor);
    };
    /** Create a platform */
    Platform.Create = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return platformConstructors.get(name).apply(void 0, args);
    };
    return Platform;
}());
exports.Platform = Platform;
function platform(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return Platform.Create.apply(Platform, [name].concat(args));
}
exports.platform = platform;
//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compile_1 = __webpack_require__(2);
function basic() {
    return compile_1.compile("\n        shader Default(\n            color: Color = [ 0, 0, 0, 1 ]\n        ) {\n            emit { color: color };\n        }\n    ").Default;
}
exports.basic = basic;
function lighting() {
    return compile_1.compile("\n        shader Default(\n            color: Color = [ 0, 0, 0, 1 ],\n            normal: Vector3,\n            position: Vector3\n        ) {\n            let lighting = get_camera_direction(position);\n            let NdotL = abs(dot(normal, lighting));\n            let s = NdotL * 0.5 + 0.5;\n            emit { color: Color(s * color.r, s * color.g, s * color.b, color.a) };\n        }\n    ").Default;
}
exports.lighting = lighting;
//# sourceMappingURL=shaders.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = "0.2.4";
var webgl_1 = __webpack_require__(11);
exports.WebGLPlatform = webgl_1.WebGLPlatform;
var platforms_1 = __webpack_require__(20);
exports.WebGLCanvasPlatform2D = platforms_1.WebGLCanvasPlatform2D;
exports.WebGLCanvasPlatform3D = platforms_1.WebGLCanvasPlatform3D;
exports.WebGLCanvasPlatformWebVR = platforms_1.WebGLCanvasPlatformWebVR;
var stardust_core_1 = __webpack_require__(1);
var webgl_2 = __webpack_require__(11);
var platforms_2 = __webpack_require__(20);
stardust_core_1.Platform.Register("webgl", function (gl) {
    return new webgl_2.WebGLPlatform(gl);
});
stardust_core_1.Platform.Register("webgl-2d", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new platforms_2.WebGLCanvasPlatform2D(canvas, width, height);
});
stardust_core_1.Platform.Register("webgl-3d", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new platforms_2.WebGLCanvasPlatform3D(canvas, width, height);
});
stardust_core_1.Platform.Register("webgl-webvr", function (canvas, width, height) {
    if (width === void 0) { width = 600; }
    if (height === void 0) { height = 400; }
    return new platforms_2.WebGLCanvasPlatformWebVR(canvas, width, height);
});
//# sourceMappingURL=stardust-webgl.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
var webgl_1 = __webpack_require__(11);
var helpers_1 = __webpack_require__(48);
var WebGLCanvasPlatform2D = /** @class */ (function (_super) {
    __extends(WebGLCanvasPlatform2D, _super);
    function WebGLCanvasPlatform2D(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var _this = this;
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        try {
            GL.getExtension("OES_texture_float");
            GL.getExtension("OES_texture_float_linear");
        }
        catch (e) { }
        _this = _super.call(this, GL) || this;
        _this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.disable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        _this._pixelRatio = helpers_1.getDefaultDevicePixelRatio();
        _this.resize(width, height);
        return _this;
    }
    Object.defineProperty(WebGLCanvasPlatform2D.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatform2D.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.style.width = width + "px";
        this._canvas.style.height = height + "px";
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this.set2DView(width, height);
        this.setPose(new stardust_core_1.Pose());
        this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
    };
    WebGLCanvasPlatform2D.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatform2D;
}(webgl_1.WebGLPlatform));
exports.WebGLCanvasPlatform2D = WebGLCanvasPlatform2D;
var WebGLCanvasPlatform3D = /** @class */ (function (_super) {
    __extends(WebGLCanvasPlatform3D, _super);
    function WebGLCanvasPlatform3D(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var _this = this;
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        _this = _super.call(this, GL) || this;
        _this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.enable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        _this._pixelRatio = 2;
        _super.prototype.set3DView.call(_this, Math.PI / 4, width / height, 0.1, 1000);
        _this.resize(width, height);
        return _this;
    }
    Object.defineProperty(WebGLCanvasPlatform3D.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatform3D.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.style.width = width + "px";
        this._canvas.style.height = height + "px";
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
        _super.prototype.set3DView.call(this, this._viewInfo.fovY, this._width / this._height, this._viewInfo.near, this._viewInfo.far);
    };
    WebGLCanvasPlatform3D.prototype.set3DView = function (fovY, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        _super.prototype.set3DView.call(this, fovY, this._width / this._height, near, far);
    };
    WebGLCanvasPlatform3D.prototype.setMVPMatrix = function (matrix) {
        throw new stardust_core_1.RuntimeError("not implemented");
    };
    WebGLCanvasPlatform3D.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatform3D;
}(webgl_1.WebGLPlatform));
exports.WebGLCanvasPlatform3D = WebGLCanvasPlatform3D;
var WebGLCanvasPlatformWebVR = /** @class */ (function (_super) {
    __extends(WebGLCanvasPlatformWebVR, _super);
    function WebGLCanvasPlatformWebVR(canvas, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 400; }
        var _this = this;
        var GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        _this = _super.call(this, GL) || this;
        _this._canvas = canvas;
        GL.clearColor(1, 1, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
        GL.enable(GL.DEPTH_TEST);
        GL.enable(GL.BLEND);
        GL.disable(GL.CULL_FACE);
        GL.blendFuncSeparate(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA, GL.ONE, GL.ONE_MINUS_SRC_ALPHA);
        _this._pixelRatio = helpers_1.getDefaultDevicePixelRatio();
        _this.resize(width, height);
        _this.setWebVRView([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        return _this;
    }
    Object.defineProperty(WebGLCanvasPlatformWebVR.prototype, "pixelRatio", {
        get: function () {
            return this._pixelRatio;
        },
        set: function (value) {
            this._pixelRatio = value;
            this.resize(this._width, this._height);
        },
        enumerable: true,
        configurable: true
    });
    WebGLCanvasPlatformWebVR.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
    };
    WebGLCanvasPlatformWebVR.prototype.set3DView = function (fovY, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = 1000; }
        _super.prototype.set3DView.call(this, fovY, this._width / this._height, near, far);
    };
    WebGLCanvasPlatformWebVR.prototype.setWebVRView = function (viewMatrix, projectionMatrix) {
        _super.prototype.setWebVRView.call(this, viewMatrix, projectionMatrix);
    };
    WebGLCanvasPlatformWebVR.prototype.clear = function (color) {
        if (color) {
            this._GL.clearColor(color[0], color[1], color[2], color[3] != null ? color[3] : 1);
        }
        this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
    };
    return WebGLCanvasPlatformWebVR;
}(webgl_1.WebGLPlatform));
exports.WebGLCanvasPlatformWebVR = WebGLCanvasPlatformWebVR;
//# sourceMappingURL=platforms.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
var stardust_webgl_1 = __webpack_require__(19);
exports.WebGLPlatform = stardust_webgl_1.WebGLPlatform;
exports.WebGLCanvasPlatform2D = stardust_webgl_1.WebGLCanvasPlatform2D;
exports.WebGLCanvasPlatform3D = stardust_webgl_1.WebGLCanvasPlatform3D;
exports.WebGLCanvasPlatformWebVR = stardust_webgl_1.WebGLCanvasPlatformWebVR;
var stardust_isotype_1 = __webpack_require__(49);
var mark;
(function (mark) {
    mark.isotype = stardust_isotype_1.isotype;
})(mark = exports.mark || (exports.mark = {}));
__webpack_require__(19);
//# sourceMappingURL=stardust.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** A dictionary class that maps string to ValueType */
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._dict = {};
    }
    /** Set an entry */
    Dictionary.prototype.set = function (key, value) {
        this._dict[key] = value;
    };
    /** Determine if the dictionary has an entry */
    Dictionary.prototype.has = function (key) {
        return this._dict.hasOwnProperty(key);
    };
    /** Delete an entry from the dictionary */
    Dictionary.prototype.delete = function (key) {
        delete this._dict[key];
    };
    /** Get a entry, if not found, return undefined */
    Dictionary.prototype.get = function (key) {
        if (this._dict.hasOwnProperty(key)) {
            return this._dict[key];
        }
        else {
            return undefined;
        }
    };
    /** Iterate over the dictionary */
    Dictionary.prototype.forEach = function (cb) {
        for (var key in this._dict) {
            if (this._dict.hasOwnProperty(key)) {
                cb(this._dict[key], key);
            }
        }
    };
    /** Create a copy of the dictionary */
    Dictionary.prototype.clone = function () {
        var result = new Dictionary();
        this.forEach(function (value, key) {
            result.set(key, value);
        });
        return result;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
/** Shallow clone an object */
function shallowClone(object) {
    var result = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            result[key] = object[key];
        }
    }
    return result;
}
exports.shallowClone = shallowClone;
/** Attempt different names starting with prefix until check returns true */
function attemptName(prefix, check) {
    if (check(prefix)) {
        return prefix;
    }
    for (var i = 1;; i++) {
        var c = prefix + i.toString();
        if (check(c)) {
            return c;
        }
    }
}
exports.attemptName = attemptName;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(12);
/** Color class. Stardust use colors with range 0-1 instead of 0-255, different from HTML! */
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    /** Create a new Color, rgba ranges are 0 to 1 */
    function Color(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        var _this = _super.call(this) || this;
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        return _this;
    }
    /** Create a color from an array of numbers [r, g, b, a] */
    Color.FromArray = function (_a) {
        var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        return new Color(r, g, b, a);
    };
    /** Create a color from HTML color code rgb(r, g, b), rgba(r, g, b, a), #RRGGBB, #RGB */
    Color.FromHTML = function (html, alpha) {
        if (alpha === void 0) { alpha = 1; }
        return Color.FromArray(colorFromHTML(html, alpha));
    };
    Color.prototype.toArray = function () {
        return [this.r, this.g, this.b, this.a];
    };
    Color.prototype.clone = function () {
        return new Color(this.r, this.g, this.b, this.a);
    };
    return Color;
}(math_1.MathType));
exports.Color = Color;
/** Get color quadruple from HTML color code */
function colorFromHTML(html, alpha) {
    if (html === void 0) { html = "#000000"; }
    if (alpha === void 0) { alpha = 1; }
    var m;
    m = html.match(/^ *rgb *\( *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *\) *$/);
    if (m) {
        return [+m[1] / 255.0, +m[2] / 255.0, +m[3] / 255.0, alpha];
    }
    m = html.match(/^ *rgba *\( *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *, *([0-9\.\-e]+) *\) *$/);
    if (m) {
        return [+m[1] / 255.0, +m[2] / 255.0, +m[3] / 255.0, alpha * +m[4]];
    }
    m = html.match(/^ *\#([0-9a-fA-F]{3}) *$/);
    if (m) {
        var r = parseInt(m[1][0], 16) * 17;
        var g = parseInt(m[1][1], 16) * 17;
        var b = parseInt(m[1][2], 16) * 17;
        return [r / 255.0, g / 255.0, b / 255.0, alpha];
    }
    m = html.match(/^ *\#([0-9a-fA-F]{6}) *$/);
    if (m) {
        var r = parseInt(m[1].slice(0, 2), 16);
        var g = parseInt(m[1].slice(2, 4), 16);
        var b = parseInt(m[1].slice(4, 6), 16);
        return [r / 255.0, g / 255.0, b / 255.0, alpha];
    }
    return [0, 0, 0, 1];
}
exports.colorFromHTML = colorFromHTML;
//# sourceMappingURL=color.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* Base class for Stardust errors */
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        var _this = _super.call(this, message) || this;
        _this.stack = new Error(message).stack;
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
/* Parse error */
var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError(message, start, end) {
        var _this = _super.call(this, message) || this;
        _this.name = "ParseError";
        _this.message = message;
        _this.start = start;
        _this.end = end;
        return _this;
    }
    return ParseError;
}(BaseError));
exports.ParseError = ParseError;
/* Compile error */
var CompileError = /** @class */ (function (_super) {
    __extends(CompileError, _super);
    function CompileError(message, start, end) {
        var _this = _super.call(this, message) || this;
        _this.name = "CompileError";
        _this.message = message;
        _this.start = start;
        _this.end = end;
        return _this;
    }
    return CompileError;
}(BaseError));
exports.CompileError = CompileError;
/* Runtime error */
var RuntimeError = /** @class */ (function (_super) {
    __extends(RuntimeError, _super);
    function RuntimeError(message, start, end) {
        var _this = _super.call(this, message) || this;
        _this.name = "RuntimeError";
        _this.message = message;
        _this.start = start;
        _this.end = end;
        return _this;
    }
    return RuntimeError;
}(BaseError));
exports.RuntimeError = RuntimeError;
//# sourceMappingURL=exceptions.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Construct part of specification.
var intrinsics_1 = __webpack_require__(3);
function func(name, returnType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: name,
            argTypes: args.map(function (arg) { return arg.valueType; }),
            returnType: returnType
        }),
        arguments: args,
        valueType: returnType
    };
}
exports.func = func;
function op(name, returnType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: "@" + name,
            argTypes: args.map(function (arg) { return arg.valueType; }),
            returnType: returnType
        }),
        valueType: returnType,
        arguments: args
    };
}
exports.op = op;
function cast(from, to) {
    return {
        type: "function",
        functionName: intrinsics_1.getInternalName({
            name: "cast:" + from.valueType + ":" + to,
            argTypes: [from.valueType],
            returnType: to
        }),
        valueType: to,
        arguments: [from]
    };
}
exports.cast = cast;
function variable(varName, varType) {
    return {
        type: "variable",
        variableName: varName,
        valueType: varType
    };
}
exports.variable = variable;
function constant(value, valueType) {
    return {
        type: "constant",
        value: value,
        valueType: valueType
    };
}
exports.constant = constant;
function mix(a1, a2, t) {
    return func("mix", a1.valueType, a1, a2, t);
}
exports.mix = mix;
function exp(x) {
    return func("exp", "float", x);
}
exports.exp = exp;
function log(x) {
    return func("log", "float", x);
}
exports.log = log;
function add(a1, a2) {
    return op("+", a1.valueType, a1, a2);
}
exports.add = add;
function sub(a1, a2) {
    return op("-", a1.valueType, a1, a2);
}
exports.sub = sub;
function mul(a1, a2) {
    return op("*", a1.valueType, a1, a2);
}
exports.mul = mul;
function div(a1, a2) {
    return op("/", a1.valueType, a1, a2);
}
exports.div = div;
function equals(a1, a2) {
    return op("==", "bool", a1, a2);
}
exports.equals = equals;
function greaterThan(a1, a2) {
    return op(">", "bool", a1, a2);
}
exports.greaterThan = greaterThan;
function lessThan(a1, a2) {
    return op("<", "bool", a1, a2);
}
exports.lessThan = lessThan;
function greaterThanOrEquals(a1, a2) {
    return op(">=", "bool", a1, a2);
}
exports.greaterThanOrEquals = greaterThanOrEquals;
function lessThanOrEquals(a1, a2) {
    return op("<=", "bool", a1, a2);
}
exports.lessThanOrEquals = lessThanOrEquals;
//# sourceMappingURL=construct.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var parser_1 = __webpack_require__(4);
var modules = new common_1.Dictionary();
function importPrimitiveCode(name, code) {
    var thisModule = null;
    if (modules.has(name)) {
        thisModule = modules.get(name);
    }
    else {
        thisModule = new common_1.Dictionary();
        modules.set(name, thisModule);
    }
    var tree = parser_1.parseFile(code);
    for (var _i = 0, _a = tree.blocks; _i < _a.length; _i++) {
        var f = _a[_i];
        if (f.type == "function") {
            var fn = f;
            thisModule.set(fn.name, fn);
        }
    }
}
var P2D = __webpack_require__(28);
importPrimitiveCode("P2D", P2D.primitives);
var P3D = __webpack_require__(29);
importPrimitiveCode("P3D", P3D.primitives);
function getModule(name) {
    return modules.get(name);
}
exports.getModule = getModule;
function getModuleFunction(name, functionName) {
    return modules.get(name).get(functionName);
}
exports.getModuleFunction = getModuleFunction;
function forEachModuleFunction(name, callback) {
    return modules.get(name).forEach(callback);
}
exports.forEachModuleFunction = forEachModuleFunction;
//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { FileEntry: peg$parseFileEntry, ExpressionEntry: peg$parseExpressionEntry },
        peg$startRuleFunction  = peg$parseFileEntry,

        peg$c0 = function(blocks) { return { blocks: blocks.map(function(d) { return d[0]; }) }; },
        peg$c1 = function(expr) { return expr; },
        peg$c2 = "function",
        peg$c3 = { type: "literal", value: "function", description: "\"function\"" },
        peg$c4 = "mark",
        peg$c5 = { type: "literal", value: "mark", description: "\"mark\"" },
        peg$c6 = "shader",
        peg$c7 = { type: "literal", value: "shader", description: "\"shader\"" },
        peg$c8 = "(",
        peg$c9 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c10 = ")",
        peg$c11 = { type: "literal", value: ")", description: "\")\"" },
        peg$c12 = ":",
        peg$c13 = { type: "literal", value: ":", description: "\":\"" },
        peg$c14 = "{",
        peg$c15 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c16 = "}",
        peg$c17 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c18 = function(type, name, args, ret, statements) {
              return {
                type: "function",
                isMark: flatten(type) == "mark",
                isShader: flatten(type) == "shader",
                name: name,
                returnType: ret ? ret[3] : "void",
                arguments: args,
                statements: statements
              };
            },
        peg$c19 = "let",
        peg$c20 = { type: "literal", value: "let", description: "\"let\"" },
        peg$c21 = "=",
        peg$c22 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c23 = ";",
        peg$c24 = { type: "literal", value: ";", description: "\";\"" },
        peg$c25 = function(name, type, value) {
              return {
                type: "global",
                name: name,
                valueType: type ? type[3] : "auto",
                default: value ? value[3] : undefined
              };
            },
        peg$c26 = "import",
        peg$c27 = { type: "literal", value: "import", description: "\"import\"" },
        peg$c28 = "*",
        peg$c29 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c30 = "from",
        peg$c31 = { type: "literal", value: "from", description: "\"from\"" },
        peg$c32 = function(moduleName) { return { type: "import", moduleName: moduleName, functionNames: null }; },
        peg$c33 = ",",
        peg$c34 = { type: "literal", value: ",", description: "\",\"" },
        peg$c35 = function(name, others, moduleName) { return { type: "import", moduleName: moduleName, functionNames: resolveList(name, others, 3) }; },
        peg$c36 = function(first, others) { return resolveList(first, others, 3); },
        peg$c37 = function() { return []; },
        peg$c38 = function(name, type, value) { return { type: type, name: name, default: value } },
        peg$c39 = function(name, type) { return { type: type, name: name } },
        peg$c40 = function(first, others) { return resolveList(first, others, 1); },
        peg$c41 = function(s) { return s; },
        peg$c42 = function(statements) { return { type: "statements", statements: statements }; },
        peg$c43 = "return",
        peg$c44 = { type: "literal", value: "return", description: "\"return\"" },
        peg$c45 = function(expr) { return { type: "return", value: expr }; },
        peg$c46 = "discard",
        peg$c47 = { type: "literal", value: "discard", description: "\"discard\"" },
        peg$c48 = function() { return { type: "discard" }; },
        peg$c49 = "emit",
        peg$c50 = { type: "literal", value: "emit", description: "\"emit\"" },
        peg$c51 = "[",
        peg$c52 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c53 = "]",
        peg$c54 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c55 = function(vertices) { return { type: "emit", vertices: vertices }; },
        peg$c56 = function(args) { return { type: "emit", vertices: [ args ] }; },
        peg$c57 = function(name, expr) { return { name: name, value: expr }; },
        peg$c58 = function(first, others) { return resolveArgumentList(resolveList(first, others, 3)).kwargs; },
        peg$c59 = function() { return {}; },
        peg$c60 = function(first, others) { return resolveList(first, others, 4); },
        peg$c61 = function(expr) { return { type: "expression", expression: expr }; },
        peg$c62 = function(name, type, initial) {
              return {
                type: "declare",
                variableType: type ? type[3] : "auto",
                variableName: name,
                initial: initial ? initial[3] : undefined
              };
            },
        peg$c63 = function(variable, value) { return { type: "assign", variableName: variable, expression: value }; },
        peg$c64 = "for",
        peg$c65 = { type: "literal", value: "for", description: "\"for\"" },
        peg$c66 = "in",
        peg$c67 = { type: "literal", value: "in", description: "\"in\"" },
        peg$c68 = "..",
        peg$c69 = { type: "literal", value: "..", description: "\"..\"" },
        peg$c70 = function(variable, start, end, statement) { return { type: "for", variableName: variable, statement: statement, start: start, end: end }; },
        peg$c71 = "if",
        peg$c72 = { type: "literal", value: "if", description: "\"if\"" },
        peg$c73 = "else",
        peg$c74 = { type: "literal", value: "else", description: "\"else\"" },
        peg$c75 = function(condition, statement, elseifs, lastelse) {
              var conditions = [ { condition: condition, statement: statement } ].concat(elseifs.map(function(x) {
                return { condition: x[7], statement: x[11] };
              }));
              return {type: "if", conditions: conditions, else: lastelse ? lastelse[3] : null };
            },
        peg$c76 = "&&",
        peg$c77 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c78 = "||",
        peg$c79 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c80 = ">=",
        peg$c81 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c82 = ">",
        peg$c83 = { type: "literal", value: ">", description: "\">\"" },
        peg$c84 = "<=",
        peg$c85 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c86 = "<",
        peg$c87 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c88 = "==",
        peg$c89 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c90 = "!=",
        peg$c91 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c92 = "+",
        peg$c93 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c94 = "-",
        peg$c95 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c96 = "/",
        peg$c97 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c98 = "%",
        peg$c99 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c100 = "not",
        peg$c101 = { type: "literal", value: "not", description: "\"not\"" },
        peg$c102 = function(expr) { return makeOperatorFunction({ type: "operator", operator: "!", args: [ item ] }); },
        peg$c103 = function(first, others) { return resolveExpressionBinaryOp(first, others); },
        peg$c104 = function(item) { return makeOperatorFunction({ type: "operator", operator: "-", args: [ item ] }); },
        peg$c105 = function(name) { return { type: "variable", name: name }; },
        peg$c106 = ".",
        peg$c107 = { type: "literal", value: ".", description: "\".\"" },
        peg$c108 = function(expr, field) { return { type: "field", value: expr, fieldName: field }; },
        peg$c109 = function(name, args) { return { type: "function", name: name, args: resolveArgumentList(args) }; },
        peg$c110 = function(expr) { return { value: expr }; },
        peg$c111 = function(value) { return { type: "value", valueType: "float", value: value }; },
        peg$c112 = function(value) { return { type: "value", valueType: "bool", value: value }; },
        peg$c113 = function(value) { return { type: "value", valueType: "int", value: value }; },
        peg$c114 = function(first, others) {
              var list = resolveList(first, others, 3);
              return { type: "value", valueType: "Vector" + list.length, value: list };
            },
        peg$c115 = /^[+\-]/,
        peg$c116 = { type: "class", value: "[+-]", description: "[+-]" },
        peg$c117 = /^[0-9]/,
        peg$c118 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c119 = function(str) { return parseFloat(flatten(str)); },
        peg$c120 = /^[eE]/,
        peg$c121 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c122 = "true",
        peg$c123 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c124 = function() { return true; },
        peg$c125 = "false",
        peg$c126 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c127 = function() { return false; },
        peg$c128 = /^[a-zA-Z_]/,
        peg$c129 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c130 = /^[a-zA-Z0-9_]/,
        peg$c131 = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
        peg$c132 = function(name) { return flatten(name); },
        peg$c133 = /^[ \t\n]/,
        peg$c134 = { type: "class", value: "[ \\t\\n]", description: "[ \\t\\n]" },
        peg$c135 = function() { return ' '; },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseFileEntry() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseFileBlock();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseFileBlock();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionEntry() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpressionLevel1();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c1(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseFileBlock() {
      var s0;

      s0 = peg$parseFunction();
      if (s0 === peg$FAILED) {
        s0 = peg$parseGlobalVariable();
        if (s0 === peg$FAILED) {
          s0 = peg$parseImportStatement();
        }
      }

      return s0;
    }

    function peg$parseFunction() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 8) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c4) {
          s1 = peg$c4;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c6) {
            s1 = peg$c6;
            peg$currPos += 6;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s5 = peg$c8;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c9); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseFunctionArgumentList();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c10;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$currPos;
                    s9 = peg$parse_();
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 58) {
                        s10 = peg$c12;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c13); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parse_();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseName();
                          if (s12 !== peg$FAILED) {
                            s9 = [s9, s10, s11, s12];
                            s8 = s9;
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 === peg$FAILED) {
                      s8 = null;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parse_();
                      if (s9 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 123) {
                          s10 = peg$c14;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c15); }
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parse_();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseStatements();
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parse_();
                              if (s13 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                  s14 = peg$c16;
                                  peg$currPos++;
                                } else {
                                  s14 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                }
                                if (s14 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c18(s1, s3, s6, s8, s12);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseGlobalVariable() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s6 = peg$c12;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c13); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseName();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c21;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseValue();
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s7 = peg$c23;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c24); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c25(s3, s4, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseImportStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c26) {
        s1 = peg$c26;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s3 = peg$c28;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 4) === peg$c30) {
                s5 = peg$c30;
                peg$currPos += 4;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c31); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse__();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseName();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 59) {
                        s9 = peg$c23;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c24); }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c32(s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c26) {
          s1 = peg$c26;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c27); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s3 = peg$c14;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseName();
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$currPos;
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c33;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseName();
                        if (s11 !== peg$FAILED) {
                          s8 = [s8, s9, s10, s11];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$currPos;
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s9 = peg$c33;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseName();
                          if (s11 !== peg$FAILED) {
                            s8 = [s8, s9, s10, s11];
                            s7 = s8;
                          } else {
                            peg$currPos = s7;
                            s7 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s8 = peg$c16;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c17); }
                      }
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parse_();
                        if (s9 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 4) === peg$c30) {
                            s10 = peg$c30;
                            peg$currPos += 4;
                          } else {
                            s10 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c31); }
                          }
                          if (s10 !== peg$FAILED) {
                            s11 = peg$parse__();
                            if (s11 !== peg$FAILED) {
                              s12 = peg$parseName();
                              if (s12 !== peg$FAILED) {
                                s13 = peg$parse_();
                                if (s13 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 59) {
                                    s14 = peg$c23;
                                    peg$currPos++;
                                  } else {
                                    s14 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c24); }
                                  }
                                  if (s14 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c35(s5, s6, s12);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseFunctionArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseFunctionArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseFunctionArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseFunctionArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseFunctionArgument() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c12;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s7 = peg$c21;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseValue();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c38(s1, s5, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseName();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s3 = peg$c12;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c13); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseName();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c39(s1, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseStatements() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseStatement();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStatement();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStatement();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c40(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseStatement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseReturnStatement();
      if (s1 === peg$FAILED) {
        s1 = peg$parseEmitStatement();
        if (s1 === peg$FAILED) {
          s1 = peg$parseDiscardStatement();
          if (s1 === peg$FAILED) {
            s1 = peg$parseVariableDeclaration();
            if (s1 === peg$FAILED) {
              s1 = peg$parseVariableAssignment();
              if (s1 === peg$FAILED) {
                s1 = peg$parseExpressionStatement();
              }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 59) {
            s3 = peg$c23;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c24); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseForLoop();
        if (s0 === peg$FAILED) {
          s0 = peg$parseIfStatement();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 123) {
              s1 = peg$c14;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseStatements();
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse_();
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s5 = peg$c16;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c17); }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c42(s3);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseReturnStatement() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c43) {
        s1 = peg$c43;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c45(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseDiscardStatement() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c46) {
        s1 = peg$c46;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c48();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseEmitStatement() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c49) {
        s1 = peg$c49;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 91) {
            s3 = peg$c51;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c52); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseEmitVertexList();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c53;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c54); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c55(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c49) {
          s1 = peg$c49;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c50); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s3 = peg$c14;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseEmitArgumentList();
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s5 = peg$c16;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c17); }
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c56(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseEmitArgument() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s3 = peg$c12;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c57(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEmitArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEmitArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseEmitArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseEmitArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c59();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseEmitVertexList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 123) {
          s2 = peg$c14;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEmitArgumentList();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s4 = peg$c16;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$currPos;
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s8 = peg$c33;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c34); }
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parse_();
                  if (s9 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 123) {
                      s10 = peg$c14;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c15); }
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parseEmitArgumentList();
                      if (s11 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s12 = peg$c16;
                          peg$currPos++;
                        } else {
                          s12 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c17); }
                        }
                        if (s12 !== peg$FAILED) {
                          s7 = [s7, s8, s9, s10, s11, s12];
                          s6 = s7;
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$currPos;
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s8 = peg$c33;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parse_();
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 123) {
                        s10 = peg$c14;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c15); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseEmitArgumentList();
                        if (s11 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 125) {
                            s12 = peg$c16;
                            peg$currPos++;
                          } else {
                            s12 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c17); }
                          }
                          if (s12 !== peg$FAILED) {
                            s7 = [s7, s8, s9, s10, s11, s12];
                            s6 = s7;
                          } else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c60(s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionStatement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel1();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c61(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseVariableDeclaration() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s6 = peg$c12;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c13); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseName();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s7 = peg$c21;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseExpressionLevel1();
                    if (s9 !== peg$FAILED) {
                      s6 = [s6, s7, s8, s9];
                      s5 = s6;
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c62(s3, s4, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseVariableAssignment() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c21;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c22); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c63(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseForLoop() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c64) {
        s1 = peg$c64;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c65); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseName();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c66) {
                    s7 = peg$c66;
                    peg$currPos += 2;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c67); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseInteger();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 2) === peg$c68) {
                            s11 = peg$c68;
                            peg$currPos += 2;
                          } else {
                            s11 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c69); }
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parse_();
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parseInteger();
                              if (s13 !== peg$FAILED) {
                                s14 = peg$parse_();
                                if (s14 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 41) {
                                    s15 = peg$c10;
                                    peg$currPos++;
                                  } else {
                                    s15 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                  }
                                  if (s15 !== peg$FAILED) {
                                    s16 = peg$parse_();
                                    if (s16 !== peg$FAILED) {
                                      s17 = peg$parseStatement();
                                      if (s17 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c70(s5, s9, s13, s17);
                                        s0 = s1;
                                      } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIfStatement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c71) {
        s1 = peg$c71;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c10;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseStatement();
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$currPos;
                        s12 = peg$parse_();
                        if (s12 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 4) === peg$c73) {
                            s13 = peg$c73;
                            peg$currPos += 4;
                          } else {
                            s13 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c74); }
                          }
                          if (s13 !== peg$FAILED) {
                            s14 = peg$parse__();
                            if (s14 !== peg$FAILED) {
                              if (input.substr(peg$currPos, 2) === peg$c71) {
                                s15 = peg$c71;
                                peg$currPos += 2;
                              } else {
                                s15 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c72); }
                              }
                              if (s15 !== peg$FAILED) {
                                s16 = peg$parse_();
                                if (s16 !== peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 40) {
                                    s17 = peg$c8;
                                    peg$currPos++;
                                  } else {
                                    s17 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                                  }
                                  if (s17 !== peg$FAILED) {
                                    s18 = peg$parse_();
                                    if (s18 !== peg$FAILED) {
                                      s19 = peg$parseExpressionLevel1();
                                      if (s19 !== peg$FAILED) {
                                        s20 = peg$parse_();
                                        if (s20 !== peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 41) {
                                            s21 = peg$c10;
                                            peg$currPos++;
                                          } else {
                                            s21 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                          }
                                          if (s21 !== peg$FAILED) {
                                            s22 = peg$parse_();
                                            if (s22 !== peg$FAILED) {
                                              s23 = peg$parseStatement();
                                              if (s23 !== peg$FAILED) {
                                                s12 = [s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23];
                                                s11 = s12;
                                              } else {
                                                peg$currPos = s11;
                                                s11 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s11;
                                              s11 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s11;
                                            s11 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s11;
                                          s11 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s11;
                                        s11 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s11;
                                      s11 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s11;
                                    s11 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s11;
                          s11 = peg$FAILED;
                        }
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$currPos;
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c73) {
                              s13 = peg$c73;
                              peg$currPos += 4;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c74); }
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parse__();
                              if (s14 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c71) {
                                  s15 = peg$c71;
                                  peg$currPos += 2;
                                } else {
                                  s15 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c72); }
                                }
                                if (s15 !== peg$FAILED) {
                                  s16 = peg$parse_();
                                  if (s16 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 40) {
                                      s17 = peg$c8;
                                      peg$currPos++;
                                    } else {
                                      s17 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                                    }
                                    if (s17 !== peg$FAILED) {
                                      s18 = peg$parse_();
                                      if (s18 !== peg$FAILED) {
                                        s19 = peg$parseExpressionLevel1();
                                        if (s19 !== peg$FAILED) {
                                          s20 = peg$parse_();
                                          if (s20 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 41) {
                                              s21 = peg$c10;
                                              peg$currPos++;
                                            } else {
                                              s21 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                            }
                                            if (s21 !== peg$FAILED) {
                                              s22 = peg$parse_();
                                              if (s22 !== peg$FAILED) {
                                                s23 = peg$parseStatement();
                                                if (s23 !== peg$FAILED) {
                                                  s12 = [s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23];
                                                  s11 = s12;
                                                } else {
                                                  peg$currPos = s11;
                                                  s11 = peg$FAILED;
                                                }
                                              } else {
                                                peg$currPos = s11;
                                                s11 = peg$FAILED;
                                              }
                                            } else {
                                              peg$currPos = s11;
                                              s11 = peg$FAILED;
                                            }
                                          } else {
                                            peg$currPos = s11;
                                            s11 = peg$FAILED;
                                          }
                                        } else {
                                          peg$currPos = s11;
                                          s11 = peg$FAILED;
                                        }
                                      } else {
                                        peg$currPos = s11;
                                        s11 = peg$FAILED;
                                      }
                                    } else {
                                      peg$currPos = s11;
                                      s11 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s11;
                                    s11 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c73) {
                              s13 = peg$c73;
                              peg$currPos += 4;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c74); }
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parse_();
                              if (s14 !== peg$FAILED) {
                                s15 = peg$parseStatement();
                                if (s15 !== peg$FAILED) {
                                  s12 = [s12, s13, s14, s15];
                                  s11 = s12;
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                          if (s11 === peg$FAILED) {
                            s11 = null;
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c75(s5, s9, s10, s11);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionOp1() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c76) {
        s0 = peg$c76;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c77); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c78) {
          s0 = peg$c78;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c79); }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp2() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c80) {
        s0 = peg$c80;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c81); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 62) {
          s0 = peg$c82;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c83); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c84) {
            s0 = peg$c84;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c85); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 60) {
              s0 = peg$c86;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c87); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c88) {
                s0 = peg$c88;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c89); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c90) {
                  s0 = peg$c90;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c91); }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp3() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 43) {
        s0 = peg$c92;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c93); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s0 = peg$c94;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c95); }
        }
      }

      return s0;
    }

    function peg$parseExpressionOp4() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 42) {
        s0 = peg$c28;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s0 = peg$c96;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c97); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 37) {
            s0 = peg$c98;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c99); }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionLevel1() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c100) {
        s1 = peg$c100;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c102(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseExpressionLevel2();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp1();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel2();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionOp1();
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseExpressionLevel2();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c103(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      return s0;
    }

    function peg$parseExpressionLevel2() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel3();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp2();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevel3();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp2();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel3();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c103(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevel3();
      }

      return s0;
    }

    function peg$parseExpressionLevel3() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevel4();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp3();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevel4();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp3();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevel4();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c103(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevel4();
      }

      return s0;
    }

    function peg$parseExpressionLevel4() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseExpressionLevelN();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpressionOp4();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseExpressionLevelN();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseExpressionOp4();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseExpressionLevelN();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c103(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionLevelN();
      }

      return s0;
    }

    function peg$parseExpressionLevelN() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c94;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c95); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionItem();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c104(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionItem();
      }

      return s0;
    }

    function peg$parseExpressionParenthesis() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c8;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseExpressionLevel1();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c10;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c1(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionItem() {
      var s0;

      s0 = peg$parseExpressionFunction();
      if (s0 === peg$FAILED) {
        s0 = peg$parseExpressionField();
        if (s0 === peg$FAILED) {
          s0 = peg$parseExpressionVariable();
          if (s0 === peg$FAILED) {
            s0 = peg$parseExpressionValue();
            if (s0 === peg$FAILED) {
              s0 = peg$parseExpressionParenthesis();
            }
          }
        }
      }

      return s0;
    }

    function peg$parseExpressionVariable() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c105(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseExpressionField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseExpressionFunction();
      if (s1 === peg$FAILED) {
        s1 = peg$parseExpressionVariable();
        if (s1 === peg$FAILED) {
          s1 = peg$parseExpressionParenthesis();
        }
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c106;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c107); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseName();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c108(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionFunction() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseExpressionFunctionArgumentList();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c10;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c109(s1, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseExpressionFunctionArgumentList() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseExpressionArgument();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s6 = peg$c33;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c34); }
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseExpressionArgument();
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c33;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseExpressionArgument();
                  if (s8 !== peg$FAILED) {
                    s5 = [s5, s6, s7, s8];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c36(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionArgument() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c21;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c22); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseExpressionLevel1();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c57(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseExpressionLevel1();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c110(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseExpressionValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$parseFloat();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c111(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseInteger();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c112(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseBoolean();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c113(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c51;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseFloat();
                if (s3 !== peg$FAILED) {
                  s4 = [];
                  s5 = peg$currPos;
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s7 = peg$c33;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseFloat();
                        if (s9 !== peg$FAILED) {
                          s6 = [s6, s7, s8, s9];
                          s5 = s6;
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$currPos;
                    s6 = peg$parse_();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s7 = peg$c33;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parse_();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseFloat();
                          if (s9 !== peg$FAILED) {
                            s6 = [s6, s7, s8, s9];
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse_();
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s6 = peg$c53;
                        peg$currPos++;
                      } else {
                        s6 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c54); }
                      }
                      if (s6 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c114(s3, s4);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$parseFloat();
      if (s0 === peg$FAILED) {
        s0 = peg$parseInteger();
        if (s0 === peg$FAILED) {
          s0 = peg$parseBoolean();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c51;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseFloat();
                if (s3 !== peg$FAILED) {
                  s4 = [];
                  s5 = peg$currPos;
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s7 = peg$c33;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseFloat();
                        if (s9 !== peg$FAILED) {
                          s6 = [s6, s7, s8, s9];
                          s5 = s6;
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$currPos;
                    s6 = peg$parse_();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s7 = peg$c33;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c34); }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parse_();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseFloat();
                          if (s9 !== peg$FAILED) {
                            s6 = [s6, s7, s8, s9];
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse_();
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s6 = peg$c53;
                        peg$currPos++;
                      } else {
                        s6 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c54); }
                      }
                      if (s6 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c36(s3, s4);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }

      return s0;
    }

    function peg$parseInteger() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c115.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c116); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c117.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c118); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c117.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c118); }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c119(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseFloat() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c115.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c116); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c117.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c118); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (peg$c117.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c118); }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s5 = peg$c106;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c107); }
          }
          if (s5 !== peg$FAILED) {
            s6 = [];
            if (peg$c117.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c118); }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c117.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c118); }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            if (peg$c120.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c121); }
            }
            if (s6 !== peg$FAILED) {
              if (peg$c115.test(input.charAt(peg$currPos))) {
                s7 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c116); }
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                s8 = [];
                if (peg$c117.test(input.charAt(peg$currPos))) {
                  s9 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s9 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c118); }
                }
                if (s9 !== peg$FAILED) {
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    if (peg$c117.test(input.charAt(peg$currPos))) {
                      s9 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c118); }
                    }
                  }
                } else {
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s6 = [s6, s7, s8];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c119(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseBoolean() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c122) {
        s1 = peg$c122;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c123); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c124();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c125) {
          s1 = peg$c125;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c126); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c127();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseName() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c128.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c129); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c130.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c131); }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c130.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c131); }
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c132(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c133.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c134); }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c133.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c135();
      }
      s0 = s1;

      return s0;
    }

    function peg$parse__() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c133.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c134); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c133.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c134); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c135();
      }
      s0 = s1;

      return s0;
    }


        function flatten(vars) {
            if(vars instanceof Array) {
                var r = "";
                for(var i = 0; i < vars.length; i++)
                    r += flatten(vars[i]);
                return r;
            } else return vars || "";
        }

        function resolveList(first, others, k) {
            if(others) {
                return [ first ].concat(others.map(function(d) { return d[k]; }));
            } else {
                return [ first ];
            }
        }

        function resolveExpressionBinaryOp(first, others) {
            var expr = first;
            others.forEach(function(d) {
              var op = d[1];
              var rhs = d[3];
              expr = makeOperatorFunction({ type: "operator", operator: op, args: [ expr, rhs ] });
            });
            return expr;
        }

        function resolveArgumentList(list) {
            var result = { args: [], kwargs: {} };
            list.forEach(function(d) {
                if(d.name !== undefined) {
                    result.kwargs[d.name] = d.value;
                } else {
                    result.args.push(d.value);
                }
            });
            return result;
        }

        function makeOperatorFunction(op) {
            return { type: "function", name: "@" + op.operator, args: { args: op.args, kwargs: {} } };
        }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.primitives = "\n    mark Triangle(\n        p1: Vector2,\n        p2: Vector2,\n        p3: Vector2,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        emit [\n            { position: p1, color: color },\n            { position: p2, color: color },\n            { position: p3, color: color }\n        ];\n    }\n\n    mark Rectangle(\n        p1: Vector2,\n        p2: Vector2,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        emit [\n            { position: Vector2(p1.x, p1.y), color: color },\n            { position: Vector2(p2.x, p1.y), color: color },\n            { position: Vector2(p2.x, p2.y), color: color }\n        ];\n        emit [\n            { position: Vector2(p1.x, p1.y), color: color },\n            { position: Vector2(p1.x, p2.y), color: color },\n            { position: Vector2(p2.x, p2.y), color: color }\n        ];\n    }\n\n    mark OutlinedRectangle(\n        p1: Vector2,\n        p2: Vector2,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        Rectangle(p1, Vector2(p1.x + width, p2.y - width), color);\n        Rectangle(Vector2(p1.x, p2.y - width), Vector2(p2.x - width, p2.y), color);\n        Rectangle(Vector2(p1.x + width, p1.y), Vector2(p2.x, p1.y + width), color);\n        Rectangle(Vector2(p2.x - width, p1.y + width), p2, color);\n    }\n\n    mark Hexagon(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..5) {\n            let a1 = i / 6.0 * PI * 2.0;\n            let a2 = (i + 1) / 6.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Circle16(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..15) {\n            let a1 = i / 16.0 * PI * 2.0;\n            let a2 = (i + 1) / 16.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Circle(\n        center: Vector2,\n        radius: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        for(i in 0..31) {\n            let a1 = i / 32.0 * PI * 2.0;\n            let a2 = (i + 1) / 32.0 * PI * 2.0;\n            let p1 = Vector2(radius * cos(a1), radius * sin(a1));\n            let p2 = Vector2(radius * cos(a2), radius * sin(a2));\n            emit [\n                { position: center + p1, color: color },\n                { position: center, color: color },\n                { position: center + p2, color: color }\n            ];\n        }\n    }\n\n    mark Line(\n        p1: Vector2,\n        p2: Vector2,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let d = normalize(p2 - p1);\n        let t = Vector2(d.y, -d.x) * (width / 2);\n        emit [\n            { position: p1 + t, color: color },\n            { position: p1 - t, color: color },\n            { position: p2 + t, color: color }\n        ];\n        emit [\n            { position: p1 - t, color: color },\n            { position: p2 - t, color: color },\n            { position: p2 + t, color: color }\n        ];\n    }\n\n    mark Sector2(\n        c: Vector2,\n        p1: Vector2,\n        p2: Vector2,\n        color: Color\n    ) {\n        let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n        Triangle(c, p1, pc, color);\n        Triangle(c, pc, p2, color);\n    }\n\n    mark Sector4(\n        c: Vector2,\n        p1: Vector2,\n        p2: Vector2,\n        color: Color\n    ) {\n        let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n        Sector2(c, p1, pc, color);\n        Sector2(c, pc, p2, color);\n    }\n\n    mark Polyline(\n        p: Vector2, p_p: Vector2, p_n: Vector2, p_nn: Vector2,\n        width: float,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let EPS = 1e-5;\n        let w = width / 2;\n        let d = normalize(p - p_n);\n        let n = Vector2(d.y, -d.x);\n        let m1: Vector2;\n        if(length(p - p_p) < EPS) {\n            m1 = n * w;\n        } else {\n            m1 = normalize(d + normalize(p - p_p)) * w;\n        }\n        let m2: Vector2;\n        if(length(p_n - p_nn) < EPS) {\n            m2 = -n * w;\n        } else {\n            m2 = normalize(normalize(p_n - p_nn) - d) * w;\n        }\n        let c1a: Vector2;\n        let c1b: Vector2;\n        let a1: Vector2;\n        let a2: Vector2;\n        if(dot(m1, n) > 0) {\n            c1a = p + m1;\n            c1b = p + n * w;\n            a2 = c1b;\n            a1 = p - m1 * (w / dot(m1, n));\n        } else {\n            c1a = p + m1;\n            c1b = p - n * w;\n            a2 = p + m1 * (w / dot(m1, n));\n            a1 = c1b;\n        }\n        let c2a: Vector2;\n        let c2b: Vector2;\n        let b1: Vector2;\n        let b2: Vector2;\n        if(dot(m2, n) < 0) {\n            c2a = p_n + m2;\n            c2b = p_n - n * w;\n            b1 = c2b;\n            b2 = p_n + m2 * (w / dot(m2, n));\n        } else {\n            c2a = p_n + m2;\n            c2b = p_n + n * w;\n            b2 = c2b;\n            b1 = p_n - m2 * (w / dot(m2, n));\n        }\n        emit [\n            { position: p, color: color },\n            { position: c1a, color: color },\n            { position: c1b, color: color }\n        ];\n        emit [\n            { position: p_n, color: color },\n            { position: c2a, color: color },\n            { position: c2b, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: a1, color: color },\n            { position: b1, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: b1, color: color },\n            { position: p_n, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: a2, color: color },\n            { position: b2, color: color }\n        ];\n        emit [\n            { position: p, color: color },\n            { position: b2, color: color },\n            { position: p_n, color: color }\n        ];\n    }\n\n    mark Wedge(\n        p1: Vector2 = [ 0, 0 ],\n        theta1: float = 0,\n        theta2: float = 0,\n        length: float = 10,\n        width: float = 1,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let dTheta = (theta2 - theta1) / 60;\n        let dL = length / 60;\n        for(i in 0..59) {\n            let dThetaA = i * dTheta;\n            let dThetaB = (i + 1) * dTheta;\n            let thetaA = theta1 + dThetaA;\n            let thetaB = theta1 + dThetaB;\n            let thetaCenterA = theta1 + dThetaA / 2;\n            let thetaCenterB = theta1 + dThetaB / 2;\n            let dlA = dL * i;\n            let dlB = dL * (i + 1);\n            if(dThetaA > 1e-5 || dThetaA < -1e-5) {\n                dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);\n            }\n            if(dThetaB > 1e-5 || dThetaB < -1e-5) {\n                dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);\n            }\n            let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;\n            let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;\n            let pA = p1 + pAdvA;\n            let pB = p1 + pAdvB;\n\n            let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;\n            let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;\n\n            Triangle(pA + dpA, pB + dpB, pB - dpB, color);\n            Triangle(pA + dpA, pB - dpB, pA - dpA, color);\n        }\n    }\n";
//# sourceMappingURL=primitives2d.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.primitives = "\n    mark Triangle(\n        p1: Vector3,\n        p2: Vector3,\n        p3: Vector3,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        let normal = normalize(cross(p2 - p1, p3 - p1));\n        emit [\n            { position: p1, color: color, normal: normal },\n            { position: p2, color: color, normal: normal },\n            { position: p3, color: color, normal: normal }\n        ];\n    }\n\n    mark Tetrahedron(\n        p1: Vector3,\n        p2: Vector3,\n        p3: Vector3,\n        p4: Vector3,\n        color: Color = [ 0, 0, 0, 1 ]\n    ) {\n        Triangle(p3, p4, p1, color);\n        Triangle(p1, p4, p2, color);\n        Triangle(p1, p2, p3, color);\n        Triangle(p2, p3, p4, color);\n    }\n\n    mark Line(\n        p1: Vector3,\n        p2: Vector3,\n        width: float = 1,\n        color: Color = [ 1, 0, 1, 1 ]\n    ) {\n        let center = (p1 + p2) * 0.5;\n        let d = p2 - p1;\n        let v = get_camera_direction(center);\n        let F = normalize(cross(d, v));\n        let normal = normalize(cross(F, d));\n        let s = width * 0.5;\n        emit [\n            { position: p1 + F * s, color: color, normal: normal },\n            { position: p2 + F * s, color: color, normal: normal },\n            { position: p1 - F * s, color: color, normal: normal },\n            { position: p1 - F * s, color: color, normal: normal },\n            { position: p2 + F * s, color: color, normal: normal },\n            { position: p2 - F * s, color: color, normal: normal }\n        ];\n    }\n\n    mark Cube(\n        center: Vector3,\n        radius: float,\n        color: Color\n    ) {\n        let p000 = Vector3(center.x - radius, center.y - radius, center.z - radius);\n        let p001 = Vector3(center.x - radius, center.y - radius, center.z + radius);\n        let p010 = Vector3(center.x - radius, center.y + radius, center.z - radius);\n        let p011 = Vector3(center.x - radius, center.y + radius, center.z + radius);\n        let p100 = Vector3(center.x + radius, center.y - radius, center.z - radius);\n        let p101 = Vector3(center.x + radius, center.y - radius, center.z + radius);\n        let p110 = Vector3(center.x + radius, center.y + radius, center.z - radius);\n        let p111 = Vector3(center.x + radius, center.y + radius, center.z + radius);\n        let nx = Vector3(1, 0, 0);\n        let ny = Vector3(0, 1, 0);\n        let nz = Vector3(0, 0, 1);\n        emit [ { position: p000, color: color, normal: nz }, { position: p110, color: color, normal: nz }, { position: p100, color: color, normal: nz } ];\n        emit [ { position: p000, color: color, normal: nz }, { position: p010, color: color, normal: nz }, { position: p110, color: color, normal: nz } ];\n        emit [ { position: p001, color: color, normal: nz }, { position: p101, color: color, normal: nz }, { position: p111, color: color, normal: nz } ];\n        emit [ { position: p001, color: color, normal: nz }, { position: p111, color: color, normal: nz }, { position: p011, color: color, normal: nz } ];\n        emit [ { position: p000, color: color, normal: ny }, { position: p100, color: color, normal: ny }, { position: p101, color: color, normal: ny } ];\n        emit [ { position: p000, color: color, normal: ny }, { position: p101, color: color, normal: ny }, { position: p001, color: color, normal: ny } ];\n        emit [ { position: p010, color: color, normal: ny }, { position: p111, color: color, normal: ny }, { position: p110, color: color, normal: ny } ];\n        emit [ { position: p010, color: color, normal: ny }, { position: p011, color: color, normal: ny }, { position: p111, color: color, normal: ny } ];\n        emit [ { position: p000, color: color, normal: nx }, { position: p001, color: color, normal: nx }, { position: p011, color: color, normal: nx } ];\n        emit [ { position: p000, color: color, normal: nx }, { position: p011, color: color, normal: nx }, { position: p010, color: color, normal: nx } ];\n        emit [ { position: p100, color: color, normal: nx }, { position: p111, color: color, normal: nx }, { position: p101, color: color, normal: nx } ];\n        emit [ { position: p100, color: color, normal: nx }, { position: p110, color: color, normal: nx }, { position: p111, color: color, normal: nx } ];\n    }\n";
//# sourceMappingURL=primitives3d.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var common_2 = __webpack_require__(0);
var Intrinsics = __webpack_require__(3);
var ModuleResolver = /** @class */ (function () {
    function ModuleResolver() {
        var _this = this;
        this._functions = new common_2.Dictionary();
        this._functionModule = new common_2.Dictionary();
        this._currentMoudles = [];
        Intrinsics.forEachIntrinsicFunction(function (info) {
            _this.addIntrinsicFunction(info.name, {
                type: "function",
                isMark: false,
                isShader: false,
                name: info.internalName,
                returnType: info.returnType,
                arguments: info.argTypes.map(function (x, idx) { return ({
                    name: "a" + idx,
                    type: x
                }); }),
                statements: null
            });
        });
    }
    ModuleResolver.prototype.addIntrinsicFunction = function (name, func) {
        if (!this._functions.has(name)) {
            var resolver = new FunctionOverloadResolver(name);
            this._functions.set(name, resolver);
            resolver.addFunction(func);
        }
        else {
            var resolver = this._functions.get(name);
            resolver.addFunction(func);
        }
    };
    ModuleResolver.prototype.addFunction = function (name, func) {
        if (!this._functions.has(name)) {
            var resolver = new FunctionOverloadResolver(name);
            this._functions.set(name, resolver);
            resolver.addFunction(func);
        }
        else {
            var resolver = this._functions.get(name);
            resolver.addFunction(func);
        }
    };
    ModuleResolver.prototype.importFunction = function (module, name) {
        this.addFunction(name, module.get(name));
        this._functionModule.set(name, module);
    };
    ModuleResolver.prototype.getFunction = function (name) {
        for (var i = this._currentMoudles.length - 1; i >= 0; i--) {
            var cm = this._currentMoudles[i];
            if (cm && cm.has(name)) {
                var resolver = new FunctionOverloadResolver(name);
                resolver.addFunction(cm.get(name));
                return resolver;
            }
        }
        if (this._functions.has(name)) {
            return this._functions.get(name);
        }
        else {
            return null;
        }
    };
    ModuleResolver.prototype.enterFunctionImplementation = function (name) {
        this._currentMoudles.push(this._functionModule.get(name));
    };
    ModuleResolver.prototype.leaveFunctionImplementation = function (name) {
        this._currentMoudles.pop();
    };
    return ModuleResolver;
}());
exports.ModuleResolver = ModuleResolver;
var FunctionOverloadResolver = /** @class */ (function () {
    function FunctionOverloadResolver(name) {
        this._name = name;
        this._functions = [];
    }
    FunctionOverloadResolver.prototype.addFunction = function (func) {
        this._functions.push(func);
    };
    FunctionOverloadResolver.prototype.resolveArguments = function (args, kwargs) {
        var result = null;
        var resultRank = null;
        for (var _i = 0, _a = this._functions; _i < _a.length; _i++) {
            var func = _a[_i];
            var funcRank = 0;
            var matched = true;
            var argExpressions = [];
            var argIndexUsed = [];
            var kwargsUsed = [];
            for (var argIndex in func.arguments) {
                var arg = func.arguments[argIndex];
                var argExpression = args[argIndex] || kwargs[arg.name];
                if (args[argIndex] != null) {
                    argIndexUsed.push(argIndex);
                }
                else if (kwargs[arg.name]) {
                    kwargsUsed.push(arg.name);
                }
                if (argExpression != null) {
                    if (argExpression.valueType != arg.type) {
                        var _b = typeConversionAttempt(argExpression, arg.type), conversion = _b[0], rank = _b[1];
                        if (conversion) {
                            argExpressions.push(conversion);
                            funcRank += rank;
                        }
                        else {
                            matched = false;
                            break;
                        }
                    }
                    else {
                        argExpressions.push(argExpression);
                    }
                }
                else {
                    if (arg.default === null || arg.default === undefined) {
                        matched = false;
                        break;
                    }
                    else {
                        argExpressions.push({
                            type: "constant",
                            value: arg.default,
                            valueType: arg.type
                        });
                    }
                }
            }
            var isAllUsed = true;
            for (var argIndex in args) {
                if (argIndexUsed.indexOf(argIndex) < 0) {
                    isAllUsed = false;
                }
            }
            for (var argName in kwargs) {
                if (kwargsUsed.indexOf(argName) < 0) {
                    isAllUsed = false;
                }
            }
            if (matched && isAllUsed) {
                if (!result || funcRank < resultRank) {
                    result = [func, argExpressions];
                    resultRank = funcRank;
                }
            }
        }
        if (result) {
            return result;
        }
        else {
            var argspec = args.map(function (x) { return x.valueType; }).join(", ");
            throw new common_1.CompileError("unable to resolve function '" + this._name + "' with arguments (" + argspec + ")");
        }
    };
    return FunctionOverloadResolver;
}());
exports.FunctionOverloadResolver = FunctionOverloadResolver;
function typeConversionAttempt(src, dest) {
    var info = Intrinsics.getTypeConversion(src.valueType, dest);
    if (info) {
        var rank = info.rank;
        return [
            {
                type: "function",
                valueType: dest,
                arguments: [src],
                functionName: info.internalName
            },
            rank
        ];
    }
    else {
        return [null, null];
    }
}
exports.typeConversionAttempt = typeConversionAttempt;
//# sourceMappingURL=resolver.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);
var ScopeVariables = /** @class */ (function () {
    function ScopeVariables(owner, parentScope, argMap) {
        if (parentScope === void 0) { parentScope = null; }
        if (argMap === void 0) { argMap = null; }
        this._owner = owner;
        this._variables = new common_1.Dictionary();
        this._parentScope = parentScope || null;
        this._argMap = argMap;
    }
    // Add a variable with name and type, shadows the ones from previous scopes.
    ScopeVariables.prototype.addVariable = function (name, type) {
        if (this._variables.has(name) ||
            (this._argMap != null && this._argMap.has(name))) {
            // If the variable is defined in the current scope, throw exception.
            throw new common_1.CompileError(name + " is already declared.");
        }
        else {
            // Create new translated name and set variable info.
            var translatedName = this._owner.newTranslatedName(name, type);
            this._variables.set(name, {
                name: name,
                type: type,
                translatedName: translatedName
            });
        }
    };
    // Create a new variable of type.
    ScopeVariables.prototype.nextVariable = function (type) {
        var _this = this;
        var name = common_1.attemptName("tmp", function (name) {
            return !_this._variables.has(name) &&
                !(_this._argMap != null && _this._argMap.has(name));
        });
        this.addVariable(name, type);
        return this.getVariable(name);
    };
    ScopeVariables.prototype.getVariable = function (name) {
        if (this._variables.has(name)) {
            return this._variables.get(name);
        }
        else if (this._argMap != null && this._argMap.has(name)) {
            return this._parentScope.getVariable(this._argMap.get(name));
        }
        else if (this._parentScope) {
            return this._parentScope.getVariable(name);
        }
        else {
            throw new common_1.CompileError(name + " is undefined.");
        }
    };
    Object.defineProperty(ScopeVariables.prototype, "parentScope", {
        get: function () {
            return this._parentScope;
        },
        enumerable: true,
        configurable: true
    });
    return ScopeVariables;
}());
exports.ScopeVariables = ScopeVariables;
var ScopeStack = /** @class */ (function () {
    function ScopeStack() {
        this._translatedNames = new common_1.Dictionary();
        this._globalScope = new ScopeVariables(this);
        this._currentScope = this._globalScope;
    }
    // Reset scope to empty.
    ScopeStack.prototype.resetScope = function () {
        this._translatedNames = new common_1.Dictionary();
        this._globalScope = new ScopeVariables(this);
        this._currentScope = this._globalScope;
    };
    // Push a scope.
    ScopeStack.prototype.pushScope = function (argMap) {
        if (argMap === void 0) { argMap = null; }
        this._currentScope = new ScopeVariables(this, this._currentScope, argMap);
    };
    // Pop a scope.
    ScopeStack.prototype.popScope = function () {
        this._currentScope = this._currentScope.parentScope;
    };
    // Create a new translated variable.
    ScopeStack.prototype.newTranslatedName = function (name, type) {
        var _this = this;
        var candidate = common_1.attemptName(name, function (c) { return !_this._translatedNames.has(c); });
        this._translatedNames.set(candidate, {
            name: name,
            type: type,
            translatedName: candidate
        });
        return candidate;
    };
    // Iterate through translated variables.
    ScopeStack.prototype.forEach = function (callback) {
        this._translatedNames.forEach(function (o) {
            callback(o.translatedName, o.type);
        });
    };
    // Create a new variable in current scope, return its translated name.
    ScopeStack.prototype.nextVariableTranslatedName = function (type) {
        return this.nextVariable(type).translatedName;
    };
    // Create a new variable in current scope, return its name.
    ScopeStack.prototype.nextVariableName = function (type) {
        return this.nextVariable(type).name;
    };
    // Create a new variable in current scope, return its info.
    ScopeStack.prototype.nextVariable = function (type) {
        return this._currentScope.nextVariable(type);
    };
    // Add a new variable.
    ScopeStack.prototype.addVariable = function (name, type, scope) {
        if (scope == "global") {
            this._globalScope.addVariable(name, type);
        }
        else {
            this._currentScope.addVariable(name, type);
        }
    };
    // Translate variable from current scope to its translated name.
    ScopeStack.prototype.translateVariableName = function (name) {
        return this.getVariable(name).translatedName;
    };
    // Get variable info.
    ScopeStack.prototype.getVariable = function (name) {
        return this._currentScope.getVariable(name);
    };
    return ScopeStack;
}());
exports.ScopeStack = ScopeStack;
//# sourceMappingURL=scope.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var flattener_1 = __webpack_require__(33);
exports.flattenEmits = flattener_1.flattenEmits;
//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Flattener: Resolve emit statements into individual render calls.
Object.defineProperty(exports, "__esModule", { value: true });
var Specification = __webpack_require__(6);
var SC = Specification.Construct;
var common_1 = __webpack_require__(0);
// For now, assume there is no conditional emits.
function flattenEmits(mark) {
    var vertexIndexNameFloat = common_1.attemptName("s3idx", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var vertexIndexName = common_1.attemptName("s3idx_i", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var emitIndexName = common_1.attemptName("s3emitidx", function (c) { return !mark.variables.hasOwnProperty(c) && !mark.input.hasOwnProperty(c); });
    var newMark = {
        input: {},
        output: mark.output,
        variables: mark.variables,
        statements: [],
        repeatBegin: mark.repeatBegin,
        repeatEnd: mark.repeatEnd
    };
    for (var i in mark.input) {
        if (mark.input.hasOwnProperty(i)) {
            newMark.input[i] = mark.input[i];
        }
    }
    newMark.input[vertexIndexNameFloat] = {
        type: "float",
        default: 0
    };
    newMark.variables[vertexIndexName] = "int";
    newMark.variables[emitIndexName] = "int";
    newMark.statements.push({
        type: "assign",
        variableName: vertexIndexName,
        expression: SC.cast(SC.variable(vertexIndexNameFloat, "float"), "int")
    });
    newMark.statements.push({
        type: "assign",
        variableName: emitIndexName,
        expression: SC.constant(0, "int")
    });
    var generateStatements = function (statements) {
        var result = [];
        var maxNumberEmits = 0;
        for (var i = 0; i < statements.length; i++) {
            switch (statements[i].type) {
                case "emit":
                    {
                        result.push({
                            type: "condition",
                            condition: SC.equals(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")),
                            trueStatements: [statements[i]],
                            falseStatements: []
                        });
                        result.push({
                            type: "assign",
                            variableName: emitIndexName,
                            expression: SC.add(SC.variable(emitIndexName, "int"), SC.constant(1, "int"))
                        });
                        maxNumberEmits += 1;
                    }
                    break;
                case "for":
                    {
                        var forStatement = statements[i];
                        var _a = generateStatements(forStatement.statements), generatedStatements_1 = _a[0], maxNumber = _a[1];
                        var mappingMode = true;
                        if (mappingMode) {
                            // Here we assume for loops only alter its internal variables, not anything outside, so each turn is independent.
                            var tStatements = [];
                            tStatements.push({
                                type: "assign",
                                variableName: forStatement.variableName,
                                expression: SC.add(SC.div(SC.sub(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")), SC.constant(maxNumber, "int")), SC.constant(forStatement.rangeMin, "int"))
                            });
                            tStatements.push({
                                type: "assign",
                                variableName: emitIndexName,
                                expression: SC.add(SC.variable(emitIndexName, "int"), SC.mul(SC.constant(maxNumber, "int"), SC.sub(SC.variable(forStatement.variableName, "int"), SC.constant(forStatement.rangeMin, "int"))))
                            });
                            tStatements = tStatements.concat(generatedStatements_1);
                            tStatements.push({
                                type: "assign",
                                variableName: emitIndexName,
                                expression: SC.add(SC.variable(emitIndexName, "int"), SC.mul(SC.constant(maxNumber, "int"), SC.sub(SC.constant(forStatement.rangeMax, "int"), SC.variable(forStatement.variableName, "int"))))
                            });
                            result.push({
                                type: "condition",
                                condition: SC.op("&&", "bool", SC.greaterThanOrEquals(SC.variable(vertexIndexName, "int"), SC.variable(emitIndexName, "int")), SC.lessThan(SC.variable(vertexIndexName, "int"), SC.add(SC.variable(emitIndexName, "int"), SC.constant(maxNumber *
                                    (forStatement.rangeMax - forStatement.rangeMin + 1), "int")))),
                                trueStatements: tStatements,
                                falseStatements: [
                                    {
                                        type: "assign",
                                        variableName: emitIndexName,
                                        expression: SC.add(SC.variable(emitIndexName, "int"), SC.constant((forStatement.rangeMax - forStatement.rangeMin + 1) *
                                            maxNumber, "int"))
                                    }
                                ]
                            });
                        }
                        else {
                            result.push({
                                type: "for",
                                variableName: forStatement.variableName,
                                rangeMin: forStatement.rangeMin,
                                rangeMax: forStatement.rangeMax,
                                statements: generatedStatements_1
                            });
                        }
                        maxNumberEmits +=
                            (forStatement.rangeMax - forStatement.rangeMin + 1) * maxNumber;
                    }
                    break;
                case "condition":
                    {
                        var condStatement = statements[i];
                        var _b = generateStatements(condStatement.trueStatements), gTrueStatements = _b[0], gTrueStatementsMax = _b[1];
                        var _c = generateStatements(condStatement.falseStatements), gFalseStatements = _c[0], gFalseStatementsMax = _c[1];
                        result.push({
                            type: "condition",
                            condition: condStatement.condition,
                            trueStatements: gTrueStatements,
                            falseStatements: gFalseStatements
                        });
                        maxNumberEmits = Math.max(gTrueStatementsMax, gFalseStatementsMax);
                    }
                    break;
                default:
                    {
                        result.push(statements[i]);
                    }
                    break;
            }
        }
        return [result, maxNumberEmits];
    };
    var _a = generateStatements(mark.statements), generatedStatements = _a[0], maxNumberEmits = _a[1];
    newMark.statements = newMark.statements.concat(generatedStatements);
    return {
        specification: newMark,
        count: maxNumberEmits,
        indexVariable: vertexIndexNameFloat
    };
}
exports.flattenEmits = flattenEmits;
//# sourceMappingURL=flattener.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(9);
exports.Mark = mark_1.Mark;
var declare_1 = __webpack_require__(16);
exports.CustomMark = declare_1.CustomMark;
exports.CustomMarkItem = declare_1.CustomMarkItem;
var mark = __webpack_require__(35);
exports.mark = mark;
var shader = __webpack_require__(40);
exports.shader = shader;
var compile_1 = __webpack_require__(2);
exports.compile = compile_1.compile;
//# sourceMappingURL=index.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var declare_1 = __webpack_require__(16);
var mark_1 = __webpack_require__(9);
var platform_1 = __webpack_require__(17);
var shaders_1 = __webpack_require__(18);
function create(arg1, arg2, arg3) {
    if (arg2 instanceof platform_1.Platform) {
        var default_shader = shaders_1.basic();
        if (arg1 instanceof declare_1.CustomMark) {
            var compiled = arg1.compile();
            if (compiled.shader != null) {
                return new mark_1.Mark(compiled, compiled.shader, arg2);
            }
            else {
                return new mark_1.Mark(compiled, default_shader, arg2);
            }
        }
        else {
            if (arg1.shader != null) {
                return new mark_1.Mark(arg1, arg1.shader, arg2);
            }
            else {
                return new mark_1.Mark(arg1, default_shader, arg2);
            }
        }
    }
    else {
        var default_shader = arg2;
        if (arg1 instanceof declare_1.CustomMark) {
            return new mark_1.Mark(arg1.compile(), default_shader, arg3);
        }
        else {
            return new mark_1.Mark(arg1, default_shader, arg3);
        }
    }
}
exports.create = create;
function custom() {
    return new declare_1.CustomMark();
}
exports.custom = custom;
__export(__webpack_require__(36));
__export(__webpack_require__(37));
var text_1 = __webpack_require__(38);
exports.createText = text_1.createText;
var compile_1 = __webpack_require__(2);
exports.compile = compile_1.compile;
//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compile_1 = __webpack_require__(2);
function circle() {
    var spec = compile_1.compile("\n    mark Circle(\n      center: Vector2 = [ 0, 0 ],\n      radius: float = 1,\n      color: Color = [ 0, 0, 0, 1 ]\n    ) {\n      let rs = radius * 1.4142135624;\n      emit [\n        { position: center + Vector2(rs, 0), offset: Vector2(1, 1), color: color },\n        { position: center + Vector2(0, rs), offset: Vector2(-1, 1), color: color },\n        { position: center + Vector2(-rs, 0), offset: Vector2(-1, -1), color: color }\n      ];\n      emit [\n        { position: center + Vector2(-rs, 0), offset: Vector2(-1, -1), color: color },\n        { position: center + Vector2(0, -rs), offset: Vector2(1, -1), color: color },\n        { position: center + Vector2(rs, 0), offset: Vector2(1, 1), color: color }\n      ];\n    }\n    shader CircleShader(\n      color: Color,\n      offset: Vector2\n    ) {\n      let dist = dot(offset, offset);\n      if(dist > 1.0) {\n        discard;\n      } else {\n        emit { color: color };\n      }\n    }\n  ");
    spec.Circle.shader = spec.CircleShader;
    return spec.Circle;
}
exports.circle = circle;
function rect() {
    return compile_1.compile("\n    mark Rectangle(\n      p1: Vector2 = [ 0, 0 ],\n      p2: Vector2 = [ 0, 0 ],\n      color: Color = [ 0, 0, 0, 1 ]\n    ) {\n      emit [\n        { position: Vector2(p1.x, p1.y), color: color },\n        { position: Vector2(p2.x, p1.y), color: color },\n        { position: Vector2(p2.x, p2.y), color: color }\n      ];\n      emit [\n        { position: Vector2(p1.x, p1.y), color: color },\n        { position: Vector2(p1.x, p2.y), color: color },\n        { position: Vector2(p2.x, p2.y), color: color }\n      ];\n    }\n  ").Rectangle;
}
exports.rect = rect;
function line() {
    return compile_1.compile("\n    mark Line(\n      p1: Vector2 = [ 0, 0 ],\n      p2: Vector2 = [ 0, 0 ],\n      width: float = 1,\n      color: Color = [ 0, 0, 0, 1 ]\n    ) {\n      let d = normalize(p2 - p1);\n      let t = Vector2(d.y, -d.x) * (width / 2);\n      emit [\n        { position: p1 + t, color: color },\n        { position: p1 - t, color: color },\n        { position: p2 + t, color: color }\n      ];\n      emit [\n        { position: p1 - t, color: color },\n        { position: p2 - t, color: color },\n        { position: p2 + t, color: color }\n      ];\n    }\n  ").Line;
}
exports.line = line;
function wedge(sides) {
    if (sides === void 0) { sides = 60; }
    return compile_1.compile("\n    import { Triangle } from P2D;\n\n    mark Wedge(\n      p1: Vector2 = [ 0, 0 ],\n      theta1: float = 0,\n      theta2: float = 0,\n      length: float = 10,\n      width: float = 1,\n      color: Color = [ 0, 0, 0, 1 ]\n    ) {\n      let dTheta = (theta2 - theta1) / 60;\n      let dL = length / 60;\n      for(i in 0..59) {\n        let dThetaA = i * dTheta;\n        let dThetaB = (i + 1) * dTheta;\n        let thetaA = theta1 + dThetaA;\n        let thetaB = theta1 + dThetaB;\n        let thetaCenterA = theta1 + dThetaA / 2;\n        let thetaCenterB = theta1 + dThetaB / 2;\n        let dlA = dL * i;\n        let dlB = dL * (i + 1);\n        if(dThetaA > 1e-5 || dThetaA < -1e-5) {\n          dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);\n        }\n        if(dThetaB > 1e-5 || dThetaB < -1e-5) {\n          dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);\n        }\n        let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;\n        let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;\n        let pA = p1 + pAdvA;\n        let pB = p1 + pAdvB;\n\n        let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;\n        let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;\n\n        Triangle(pA + dpA, pB + dpB, pB - dpB, color);\n        Triangle(pA + dpA, pB - dpB, pA - dpA, color);\n      }\n    }\n  ").Wedge;
}
exports.wedge = wedge;
function polyline() {
    var spec = compile_1.compile("\n    import { Triangle } from P2D;\n\n    mark Sector2(\n      c: Vector2,\n      p1: Vector2,\n      p2: Vector2,\n      color: Color\n    ) {\n      let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n      Triangle(c, p1, pc, color);\n      Triangle(c, pc, p2, color);\n    }\n\n    mark Sector4(\n      c: Vector2,\n      p1: Vector2,\n      p2: Vector2,\n      color: Color\n    ) {\n      let pc = c + normalize(p1 + p2 - c - c) * length(p1 - c);\n      Sector2(c, p1, pc, color);\n      Sector2(c, pc, p2, color);\n    }\n\n    mark PolylineRound(\n      p: Vector2, p_p: Vector2, p_n: Vector2, p_nn: Vector2,\n      width: float = 1,\n      color: Color = [ 0, 0, 0, 1 ]\n    ) {\n      let EPS = 1e-5;\n      let w = width / 2;\n      let d = normalize(p - p_n);\n      let n = Vector2(d.y, -d.x);\n      let m1: Vector2;\n      if(length(p - p_p) < EPS) {\n        m1 = n * w;\n      } else {\n        m1 = normalize(d + normalize(p - p_p)) * w;\n      }\n      let m2: Vector2;\n      if(length(p_n - p_nn) < EPS) {\n        m2 = -n * w;\n      } else {\n        m2 = normalize(normalize(p_n - p_nn) - d) * w;\n      }\n      let c1a: Vector2;\n      let c1b: Vector2;\n      let a1: Vector2;\n      let a2: Vector2;\n      if(dot(m1, n) > 0) {\n        c1a = p + m1;\n        c1b = p + n * w;\n        a2 = c1b;\n        a1 = p - m1 * (w / dot(m1, n));\n      } else {\n        c1a = p + m1;\n        c1b = p - n * w;\n        a2 = p + m1 * (w / dot(m1, n));\n        a1 = c1b;\n      }\n      let c2a: Vector2;\n      let c2b: Vector2;\n      let b1: Vector2;\n      let b2: Vector2;\n      if(dot(m2, n) < 0) {\n        c2a = p_n + m2;\n        c2b = p_n - n * w;\n        b1 = c2b;\n        b2 = p_n + m2 * (w / dot(m2, n));\n      } else {\n        c2a = p_n + m2;\n        c2b = p_n + n * w;\n        b2 = c2b;\n        b1 = p_n - m2 * (w / dot(m2, n));\n      }\n      Sector4(p, c1a, c1b, color);\n      Sector4(p_n, c2a, c2b, color);\n      Triangle(p, a1, b1, color);\n      Triangle(p, b1, p_n, color);\n      Triangle(p, a2, b2, color);\n      Triangle(p, b2, p_n, color);\n    }\n  ").PolylineRound;
    spec.repeatBegin = 1;
    spec.repeatEnd = 1;
    return spec;
}
exports.polyline = polyline;
//# sourceMappingURL=marks.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var compile_1 = __webpack_require__(2);
function circle3d() {
    var spec = compile_1.compile("\n    mark Circle(\n      center: Vector3 = [0, 0, 0],\n      radius: float = 0.1,\n      color: Color = [1, 1, 1, 1]\n    ) {\n      let camera_direction = get_camera_direction(center);\n      let ex = normalize(cross(camera_direction, Vector3(0, 1, 0)));\n      let ey = cross(camera_direction, ex);\n      let p1 = center + ex * radius + ey * radius;\n      let p2 = center + ex * radius - ey * radius;\n      let p3 = center - ex * radius - ey * radius;\n      let p4 = center - ex * radius + ey * radius;\n      emit [\n        { position: p1, color: color, off: Vector2(1, 1) },\n        { position: p3, color: color, off: Vector2(-1, -1) },\n        { position: p2, color: color, off: Vector2(1, -1) },\n        { position: p1, color: color, off: Vector2(1, 1) },\n        { position: p4, color: color, off: Vector2(-1, 1) },\n        { position: p3, color: color, off: Vector2(-1, -1) }\n      ];\n    }\n    shader CircleShader(color: Color, off: Vector2) {\n      let r = length(off);\n      if(r > 1 || color.a < 0.001) {\n        discard;\n      } else {\n        emit { color: color };\n      }\n    }\n  ");
    spec.Circle.shader = spec.CircleShader;
    return spec.Circle;
}
exports.circle3d = circle3d;
function line3d() {
    return compile_1.compile("\n    import { Line } from P3D;\n    mark Line3D(\n      p1: Vector3 = [0, 0, 0],\n      p2: Vector3 = [0, 0, 0],\n      width: float = 0.1,\n      color: Color = [1, 1, 1, 1]\n    ) {\n      Line(p1, p2, width, color);\n    }\n  ").Line3D;
}
exports.line3d = line3d;
function polyline3d() {
    return compile_1.compile("\n    import { Line } from P3D;\n    mark Line3D(\n      p: Vector3 = [0, 0, 0],\n      p_n: Vector3 = [0, 0, 0],\n      width: float = 0.1,\n      color: Color = [1, 1, 1, 1]\n    ) {\n      Line(p, p_n, width, color);\n    }\n  ").Line3D;
}
exports.polyline3d = polyline3d;
//# sourceMappingURL=marks3d.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(9);
var binding_1 = __webpack_require__(14);
var compile_1 = __webpack_require__(2);
var TextCache = __webpack_require__(39);
var TextMark = /** @class */ (function (_super) {
    __extends(TextMark, _super);
    function TextMark(mode, platform) {
        if (mode === void 0) { mode = "2d"; }
        var _this = _super.call(this, compile_1.compile("\n        mark TextMark(\n          position: " + (mode == "2d" ? "Vector2" : "Vector3") + ",\n          normal: Vector3 = [ 0, 0, 1 ],\n          up: " + (mode == "2d" ? "Vector2 = [ 0, 1 ]" : "Vector3 = [ 0, 1, 0 ]") + ",\n          scale: float = 1,\n          color: Color = [ 0, 0, 0, 1 ],\n          alignX: float = 0,\n          alignY: float = 0,\n          mScaling: float,\n          mImage: Image,\n          mTextInfo: Vector4Array,\n          mIndex: float\n        ) {\n          let p = " + (mode == "2d" ? "Vector3(position.x, position.y, 0)" : "position") + ";\n          let info = array(mTextInfo, mIndex);\n          let e1 = normalize(cross(" + (mode == "2d" ? "Vector3(up.x, up.y, 0)" : "up") + ", normal)) * info.x * (scale / mScaling);\n          let e2 = normalize(cross(normal, e1)) * info.y * (scale / mScaling);\n          p = p - e1 * alignX - e2 * (1 - alignY);\n          let mSizeX = Vector2(info.x, 0);\n          let mSizeY = Vector2(0, info.y);\n          let mTexPos = Vector2(info.z, info.w);\n          emit [\n              { position: p, tp: mTexPos, color: color },\n              { position: p + e1, tp: mTexPos + mSizeX, color: color },\n              { position: p + e1 + e2, tp: mTexPos + mSizeX + mSizeY, color: color },\n              { position: p, tp: mTexPos, color: color },\n              { position: p + e1 + e2, tp: mTexPos + mSizeX + mSizeY, color: color },\n              { position: p + e2, tp: mTexPos + mSizeY, color: color }\n          ];\n        }\n      ").TextMark, compile_1.compile("\n        shader TextShader(\n          tp: Vector2,\n          mImage: Image,\n          color: Color\n        ) {\n          let c = image(mImage, tp);\n          let alpha = c.a;\n          if(alpha == 0) {\n            discard;\n          } else {\n            emit { color: Color(color.r, color.g, color.b, alpha * color.a) };\n          }\n        }\n      ").TextShader, platform) || this;
        _this._textBinding = "text";
        _this._fontFamilyBinding = "Arial";
        _this._fontSizeBinding = 12;
        _this._fontWeightBinding = "normal";
        _this._fontStyleBinding = "normal";
        _this._textCache = new TextCache.TextCache(1024, 1024);
        _this._image = new binding_1.Image();
        _this._textInfo = new binding_1.ArrayBinding();
        _this.attr("mScaling", _this._textCache.scaling);
        _this.attr("mImage", _this._image);
        _this.attr("mIndex", function (d, i) { return i; });
        _this.attr("mTextInfo", _this._textInfo);
        _this._shouldRefreshCanvas = true;
        return _this;
    }
    TextMark.prototype.prepare = function () {
        var _this = this;
        if (this._shouldRefreshCanvas) {
            var data = this.data();
            var texts_1 = new binding_1.Binding("string", this._textBinding).map(data);
            var fontFamilys_1 = new binding_1.Binding("string", this._fontFamilyBinding).map(data);
            var fontSizes_1 = new binding_1.Binding("string", this._fontSizeBinding).map(data);
            var fontWeights_1 = new binding_1.Binding("string", this._fontWeightBinding).map(data);
            var fontStyles_1 = new binding_1.Binding("string", this._fontStyleBinding).map(data);
            var attempt = function () {
                _this._textLayouts = texts_1.map(function (x, i) {
                    var font = new TextCache.Font(fontFamilys_1[i].toString(), fontSizes_1[i], fontWeights_1[i].toString(), fontStyles_1[i].toString());
                    var info = _this._textCache.addText(x.toString(), font);
                    return {
                        size: [info.w, info.h],
                        position: [info.x, info.y]
                    };
                });
            };
            try {
                attempt();
            }
            catch (e) {
                this._textCache.clear();
                attempt();
            }
            this._textInfo.data(texts_1);
            this._textInfo.value(function (d, i) { return [
                _this._textLayouts[i].size[0],
                _this._textLayouts[i].size[1],
                _this._textLayouts[i].position[0],
                _this._textLayouts[i].position[1]
            ]; });
            this.attr("mTextInfo", this._textInfo);
            if (this._textCache.updated) {
                this._image.setImage(this._textCache.canvas);
                this.attr("mImage", this._image);
                this._textCache.updated = false;
            }
            this._shouldRefreshCanvas = false;
        }
        return _super.prototype.prepare.call(this);
    };
    TextMark.prototype.attr = function (name, value) {
        switch (name) {
            case "text": {
                if (value === undefined) {
                    return this._textBinding;
                }
                else {
                    this._textBinding = value;
                    this._shouldRefreshCanvas = true;
                    return this;
                }
            }
            case "fontFamily": {
                if (value === undefined) {
                    return this._fontFamilyBinding;
                }
                else {
                    this._fontFamilyBinding = value;
                    this._shouldRefreshCanvas = true;
                    return this;
                }
            }
            case "fontSize": {
                if (value === undefined) {
                    return this._fontSizeBinding;
                }
                else {
                    this._fontSizeBinding = value;
                    this._shouldRefreshCanvas = true;
                    return this;
                }
            }
            case "fontWeight": {
                if (value === undefined) {
                    return this._fontWeightBinding;
                }
                else {
                    this._fontWeightBinding = value;
                    this._shouldRefreshCanvas = true;
                    return this;
                }
            }
            case "fontStyle": {
                if (value === undefined) {
                    return this._fontStyleBinding;
                }
                else {
                    this._fontStyleBinding = value;
                    this._shouldRefreshCanvas = true;
                    return this;
                }
            }
            default: {
                return _super.prototype.attr.call(this, name, value);
            }
        }
    };
    TextMark.prototype.data = function (data) {
        if (data === undefined) {
            return _super.prototype.data.call(this);
        }
        else {
            _super.prototype.data.call(this, data);
            this._shouldRefreshCanvas = true;
            return this;
        }
    };
    return TextMark;
}(mark_1.Mark));
exports.TextMark = TextMark;
function createText(mode, platform) {
    return new TextMark(mode, platform);
}
exports.createText = createText;
//# sourceMappingURL=text.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Create a text cache of given width and height.
var Font = /** @class */ (function () {
    function Font(fontFamily, fontSize, fontWeight, fontStyle) {
        if (fontFamily === void 0) { fontFamily = "Arial"; }
        if (fontSize === void 0) { fontSize = 12; }
        if (fontWeight === void 0) { fontWeight = "normal"; }
        if (fontStyle === void 0) { fontStyle = "normal"; }
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.fontStyle = fontStyle;
    }
    Font.prototype.hash = function () {
        return ("F" +
            this.fontFamily +
            "," +
            this.fontSize +
            "," +
            this.fontWeight +
            "," +
            this.fontStyle);
    };
    Font.prototype.setFont = function (c) {
        c.font = this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + JSON.stringify(this.fontFamily);
    };
    return Font;
}());
exports.Font = Font;
var TextCache = /** @class */ (function () {
    function TextCache(width, height, scaling) {
        if (width === void 0) { width = 1024; }
        if (height === void 0) { height = 1024; }
        if (scaling === void 0) { scaling = 2; }
        this.entries = {};
        this.current_x = 0;
        this.current_y = 0;
        this.current_height = 0;
        this.width = width;
        this.height = height;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width * scaling;
        this.canvas.height = this.height * scaling;
        this.scaling = scaling;
        this.context.scale(scaling, scaling);
        this.context.fillStyle = "#000000";
    }
    // Add text of a given font to the cache.
    TextCache.prototype.addText = function (text, font) {
        var hash = JSON.stringify(text) + font.hash();
        if (this.entries[hash]) {
            return this._layout2TextRect(this.entries[hash]);
        }
        font.setFont(this.context);
        var width = this.context.measureText(text).width;
        var height = font.fontSize;
        var bbox_width = Math.ceil(width + 4);
        var bbox_height = Math.ceil(height + 2);
        var x_offset = 2;
        var baseline_offset = height - 2;
        if (bbox_width > this.width) {
            throw new Error("E_FIT");
        }
        // If can't fit in current line, start a new line.
        if (this.current_x + bbox_width > this.width) {
            if (this.current_y + this.current_height + bbox_height > this.height) {
                throw new Error("E_FIT");
            }
            this.current_x = 0;
            this.current_y += this.current_height;
            this.current_height = bbox_height;
        }
        // Here it must fit.
        var layout = {
            x: this.current_x,
            y: this.current_y,
            x_offset: x_offset,
            baseline_offset: baseline_offset,
            bbox_width: bbox_width,
            bbox_height: bbox_height
        };
        this.current_x += bbox_width;
        this.current_height = Math.max(this.current_height, bbox_height);
        this.entries[hash] = layout;
        // Render.
        var draw_x = layout.x + x_offset;
        var draw_y = layout.y + baseline_offset;
        this.context.fillText(text, draw_x, draw_y);
        this.updated = true;
        return this._layout2TextRect(layout);
    };
    TextCache.prototype._layout2TextRect = function (layout) {
        return {
            x: layout.x * this.scaling,
            y: layout.y * this.scaling,
            w: layout.bbox_width * this.scaling,
            h: layout.bbox_height * this.scaling,
            scaling: this.scaling,
            x_offset: layout.x_offset * this.scaling,
            baseline_offset: layout.baseline_offset * this.scaling
        };
    };
    // Query the cache for a text and given font.
    TextCache.prototype.getTextRect = function (text, font) {
        var hash = JSON.stringify(text) + font.hash();
        var layout = this.entries[hash];
        if (!layout) {
            return null;
        }
        return this._layout2TextRect(layout);
    };
    // Clear the cache.
    TextCache.prototype.clear = function () {
        this.entries = {};
        this.current_x = 0;
        this.current_y = 0;
        this.current_height = 0;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updated = true;
    };
    return TextCache;
}());
exports.TextCache = TextCache;
//# sourceMappingURL=textCache.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
var compile_1 = __webpack_require__(2);
exports.compile = compile_1.compile;
//# sourceMappingURL=index.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scale_1 = __webpack_require__(10);
exports.ScaleBinding = scale_1.ScaleBinding;
var scale = __webpack_require__(42);
exports.scale = scale;
//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Prebuilt scales.
var common_1 = __webpack_require__(0);
var compiler_1 = __webpack_require__(7);
var parser_1 = __webpack_require__(4);
var Specification = __webpack_require__(6);
var scale_1 = __webpack_require__(10);
var SC = Specification.Construct;
function linear(valueType) {
    if (valueType === void 0) { valueType = "float"; }
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, valueType, ["float"]].concat(args)))();
    });
    var domain = [0, 1];
    var range = [0, 1];
    scale.domain = function (value) {
        if (value == null) {
            return domain;
        }
        domain[0] = value[0];
        domain[1] = value[1];
        return scale;
    };
    scale.range = function (value) {
        if (value == null) {
            return range;
        }
        range[0] = value[0];
        range[1] = value[1];
        return scale;
    };
    scale.getAttributes = function () {
        return [
            { name: "d0", type: valueType, binding: domain[0] },
            { name: "d1", type: valueType, binding: domain[1] },
            { name: "r0", type: valueType, binding: range[0] },
            { name: "r1", type: valueType, binding: range[1] }
        ];
    };
    scale.getExpression = function (attrs, value) {
        return SC.mix(attrs.r0, attrs.r1, SC.div(SC.sub(value, attrs.d0), SC.sub(attrs.d1, attrs.d0)));
    };
    return scale;
}
exports.linear = linear;
function log(valueType) {
    if (valueType === void 0) { valueType = "float"; }
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, valueType, ["float"]].concat(args)))();
    });
    var domain = [0, 1];
    var range = [0, 1];
    scale.domain = function (value) {
        if (value == null) {
            return domain;
        }
        domain[0] = value[0];
        domain[1] = value[1];
        return scale;
    };
    scale.range = function (value) {
        if (value == null) {
            return range;
        }
        range[0] = value[0];
        range[1] = value[1];
        return scale;
    };
    scale.getAttributes = function () {
        return [
            { name: "d0", type: valueType, binding: domain[0] },
            { name: "d1", type: valueType, binding: domain[1] },
            { name: "r0", type: valueType, binding: range[0] },
            { name: "r1", type: valueType, binding: range[1] }
        ];
    };
    scale.getExpression = function (attrs, value) {
        return SC.mix(attrs.r0, attrs.r1, SC.div(SC.log(SC.div(value, attrs.d0)), SC.log(SC.div(attrs.d1, attrs.d0))));
    };
    return scale;
}
exports.log = log;
// Common arithmetics
function addScale() {
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, "float", ["float", "float"]].concat(args)))();
    });
    scale.getAttributes = function () { return []; };
    scale.getExpression = function (attrs, value1, value2) { return SC.add(value1, value2); };
    return scale;
}
exports.addScale = addScale;
function subScale() {
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, "float", ["float", "float"]].concat(args)))();
    });
    scale.getAttributes = function () { return []; };
    scale.getExpression = function (attrs, value1, value2) { return SC.sub(value1, value2); };
    return scale;
}
exports.subScale = subScale;
function mulScale() {
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, "float", ["float", "float"]].concat(args)))();
    });
    scale.getAttributes = function () { return []; };
    scale.getExpression = function (attrs, value1, value2) { return SC.mul(value1, value2); };
    return scale;
}
exports.mulScale = mulScale;
function divScale() {
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, "float", ["float", "float"]].concat(args)))();
    });
    scale.getAttributes = function () { return []; };
    scale.getExpression = function (attrs, value1, value2) { return SC.div(value1, value2); };
    return scale;
}
exports.divScale = divScale;
// Common arithmetics
function vector2Scale() {
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, "Vector2", ["float", "float"]].concat(args)))();
    });
    scale.getAttributes = function () { return []; };
    scale.getExpression = function (attrs, value1, value2) {
        return SC.func("Vector2", "Vector2", value1, value2);
    };
    return scale;
}
exports.vector2Scale = vector2Scale;
function add(value1, value2) {
    return addScale()(value1, value2);
}
exports.add = add;
function sub(value1, value2) {
    return subScale()(value1, value2);
}
exports.sub = sub;
function mul(value1, value2) {
    return mulScale()(value1, value2);
}
exports.mul = mul;
function div(value1, value2) {
    return divScale()(value1, value2);
}
exports.div = div;
function interpolate(valueType) {
    if (valueType === void 0) { valueType = "float"; }
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, valueType, [valueType, valueType]].concat(args)))();
    });
    var t;
    scale.t = function (value) {
        if (value == null) {
            return t;
        }
        t = value;
        return scale;
    };
    scale.getAttributes = function () {
        return [{ name: "t", type: "float", binding: t }];
    };
    scale.getExpression = function (attrs, value1, value2) {
        return SC.mix(value1, value2, attrs.t);
    };
    return scale;
}
exports.interpolate = interpolate;
function Vector2(value1, value2) {
    return vector2Scale()(value1, value2);
}
exports.Vector2 = Vector2;
function custom(expr) {
    var parsed = parser_1.parseExpression(expr);
    var scale = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Inference the return type
        var vars = new common_1.Dictionary();
        attributes.forEach(function (attr, name) {
            vars.set(name, {
                type: "constant",
                valueType: attr.type,
                value: null
            });
        });
        vars.set("value", {
            type: "constant",
            valueType: "float",
            value: null
        });
        var e = compiler_1.compileExpression(parsed, vars);
        return new (scale_1.ScaleBinding.bind.apply(scale_1.ScaleBinding, [void 0, scale, e.valueType, ["float"]].concat(args)))();
    });
    var attributes = new common_1.Dictionary();
    scale.attr = function (name, typeOrValue, value) {
        if (typeOrValue == null && value == null) {
            return attributes.get(name).value;
        }
        else if (typeof typeOrValue == "string") {
            attributes.set(name, { type: typeOrValue, value: value });
            return scale;
        }
        else {
            attributes.set(name, {
                type: "float",
                value: typeOrValue
            });
            return scale;
        }
    };
    scale.getAttributes = function () {
        var r = [];
        attributes.forEach(function (attr, name) {
            r.push({ name: name, type: attr.type, binding: attr.value });
        });
        return r;
    };
    scale.getExpression = function (attrs, value) {
        var vars = new common_1.Dictionary();
        for (var name_1 in attrs) {
            if (attrs.hasOwnProperty(name_1)) {
                vars.set(name_1, attrs[name_1]);
            }
        }
        vars.set("value", value);
        return compiler_1.compileExpression(parsed, vars);
    };
    return scale;
}
exports.custom = custom;
//# sourceMappingURL=scales.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
var glsl_1 = __webpack_require__(44);
var GenerateMode;
(function (GenerateMode) {
    GenerateMode[GenerateMode["NORMAL"] = 0] = "NORMAL";
    GenerateMode[GenerateMode["PICK"] = 1] = "PICK";
    GenerateMode[GenerateMode["FRAGMENT"] = 2] = "FRAGMENT";
})(GenerateMode = exports.GenerateMode || (exports.GenerateMode = {}));
var ViewType;
(function (ViewType) {
    ViewType[ViewType["VIEW_2D"] = 0] = "VIEW_2D";
    ViewType[ViewType["VIEW_3D"] = 1] = "VIEW_3D";
    ViewType[ViewType["VIEW_MATRIX"] = 2] = "VIEW_MATRIX"; // Matrix mode.
})(ViewType = exports.ViewType || (exports.ViewType = {}));
var GLSLVertexShaderGenerator = /** @class */ (function (_super) {
    __extends(GLSLVertexShaderGenerator, _super);
    function GLSLVertexShaderGenerator(parent) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        return _this;
    }
    GLSLVertexShaderGenerator.prototype.addEmitStatement = function (sEmit) {
        for (var name_1 in sEmit.attributes) {
            this.addLine(this._parent._voutMapping.get(name_1) + " = " + this.generateExpression(sEmit.attributes[name_1]) + ";");
        }
        if (this._parent._mode == GenerateMode.PICK) {
            this.addLine("out_pick_index = vec4(s3_pick_index.rgb, s3_pick_index_alpha);");
        }
        var position = this._parent._voutMapping.get("position");
        switch (this._parent._spec.output.position.type) {
            case "Vector2":
                {
                    this.addLine("gl_Position = s3_render_vertex(vec3(" + position + ", 0.0));");
                }
                break;
            case "Vector3":
                {
                    this.addLine("gl_Position = s3_render_vertex(" + position + ");");
                }
                break;
            case "Vector4":
                {
                    this.addLine("gl_Position = s3_render_vertex(" + position + ".xyz);");
                }
                break;
        }
    };
    return GLSLVertexShaderGenerator;
}(glsl_1.ShaderGenerator));
exports.GLSLVertexShaderGenerator = GLSLVertexShaderGenerator;
var GLSLFragmentShaderGenerator = /** @class */ (function (_super) {
    __extends(GLSLFragmentShaderGenerator, _super);
    function GLSLFragmentShaderGenerator(parent) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        return _this;
    }
    GLSLFragmentShaderGenerator.prototype.addEmitStatement = function (sEmit) {
        this.addLine("gl_FragColor = " + this.generateExpression(sEmit.attributes.color) + ";");
    };
    return GLSLFragmentShaderGenerator;
}(glsl_1.ShaderGenerator));
exports.GLSLFragmentShaderGenerator = GLSLFragmentShaderGenerator;
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator(spec, shader, asUniform, viewType, mode) {
        if (mode === void 0) { mode = GenerateMode.NORMAL; }
        var _this = _super.call(this, spec, shader, asUniform) || this;
        _this._mode = mode;
        _this._viewType = viewType;
        _this._vertex = new GLSLVertexShaderGenerator(_this);
        _this._fragment = new GLSLFragmentShaderGenerator(_this);
        _this.compile();
        return _this;
    }
    Generator.prototype.compile = function () {
        var _this = this;
        var spec = this._spec;
        var shader = this._shader;
        var asUniform = this._asUniform;
        this._voutMapping = new stardust_core_1.Dictionary();
        this._foutMapping = new stardust_core_1.Dictionary();
        this._vertex.addLine("precision highp float;");
        this._fragment.addLine("precision highp float;");
        if (this._mode == GenerateMode.PICK) {
            this._vertex.addAttribute("s3_pick_index", "Vector4");
            this._vertex.addUniform("s3_pick_index_alpha", "float");
        }
        switch (this._viewType) {
            case ViewType.VIEW_2D:
                {
                    this._vertex.addUniform("s3_view_params", "Vector4");
                    this._vertex.addAdditionalCode("\n            vec4 s3_render_vertex(vec3 p) {\n              return vec4(p.xy * s3_view_params.xy + s3_view_params.zw, 0.0, 1.0);\n            }\n          ");
                }
                break;
            case ViewType.VIEW_3D:
                {
                    this._vertex.addUniform("s3_view_params", "Vector4");
                    this._vertex.addUniform("s3_view_position", "Vector3");
                    this._fragment.addUniform("s3_view_position", "Vector3");
                    this._vertex.addUniform("s3_view_rotation", "Vector4");
                    this._vertex.addAdditionalCode("\n            vec4 s3_render_vertex(vec3 p) {\n              // Get position in view coordinates:\n              vec3 v = p - s3_view_position;\n              float d = dot(s3_view_rotation.xyz, v);\n              vec3 c = cross(s3_view_rotation.xyz, v);\n              v = s3_view_rotation.w * s3_view_rotation.w * v - (s3_view_rotation.w + s3_view_rotation.w) * c + d * s3_view_rotation.xyz - cross(c, s3_view_rotation.xyz);\n              // Compute projection.\n              vec4 r;\n              r.xy = v.xy * s3_view_params.xy;\n              r.z = v.z * s3_view_params.z + s3_view_params.w;\n              r.w = -v.z;\n              return r;\n            }\n          ");
                }
                break;
            case ViewType.VIEW_MATRIX:
                {
                    // Use the MVP matrix provided by it.
                    this._vertex.addUniform("s3_projection_matrix", "Matrix4");
                    this._vertex.addUniform("s3_view_matrix", "Matrix4");
                    this._vertex.addUniform("s3_view_position", "Vector3");
                    this._vertex.addUniform("s3_view_rotation", "Vector4");
                    this._vertex.addAdditionalCode("\n            vec4 s3_render_vertex(vec3 p) {\n              vec3 v = p - s3_view_position;\n              float d = dot(s3_view_rotation.xyz, v);\n              vec3 c = cross(s3_view_rotation.xyz, v);\n              v = s3_view_rotation.w * s3_view_rotation.w * v - (s3_view_rotation.w + s3_view_rotation.w) * c + d * s3_view_rotation.xyz - cross(c, s3_view_rotation.xyz);\n              return s3_projection_matrix * s3_view_matrix * vec4(v, 1);\n            }\n          ");
                }
                break;
        }
        if (this._viewType == ViewType.VIEW_2D) {
            [this._vertex, this._fragment].forEach(function (x) {
                return x.addAdditionalCode("\n          vec3 s3_get_camera_position() {\n            return vec3(0, 0, 1);\n          }\n          vec3 s3_get_camera_direction(vec3 p) {\n            return vec3(0, 0, 1);\n          }\n        ");
            });
        }
        else {
            [this._vertex, this._fragment].forEach(function (x) {
                x.addUniform("s3_camera_position", "Vector3");
                x.addAdditionalCode("\n          vec3 s3_get_camera_position() {\n            return s3_camera_position;\n          }\n          vec3 s3_get_camera_direction(vec3 p) {\n            return normalize(s3_camera_position - p);\n          }\n        ");
            });
        }
        // Input attributes.
        for (var name_2 in spec.input) {
            if (spec.input.hasOwnProperty(name_2)) {
                if (asUniform(name_2)) {
                    this._vertex.addUniform(name_2, spec.input[name_2].type);
                }
                else {
                    this._vertex.addAttribute(name_2, spec.input[name_2].type);
                }
            }
        }
        this._vertex.addLine("@additionalCode");
        // Output attributes.
        for (var name_3 in spec.output) {
            if (spec.output.hasOwnProperty(name_3)) {
                var oname = this.getUnusedName(name_3);
                this._voutMapping.set(name_3, oname);
                this._vertex.addVarying(oname, spec.output[name_3].type);
            }
        }
        // Fragment shader inputs
        var fragment_passthrus = []; // gname, input_name
        for (var name_4 in shader.input) {
            if (shader.input.hasOwnProperty(name_4)) {
                if (this.fragmentPassthru(name_4)) {
                    if (this._asUniform(name_4)) {
                        this._fragment.addUniform(name_4, shader.input[name_4].type);
                    }
                    else {
                        var gname = this.getUnusedName(name_4);
                        fragment_passthrus.push([gname, name_4]);
                        this._vertex.addVarying(gname, shader.input[name_4].type);
                        this._fragment.addVarying(gname, shader.input[name_4].type);
                    }
                }
                else {
                    var gname = this._voutMapping.get(name_4);
                    if (gname) {
                        this._fragment.addVarying(gname, shader.input[name_4].type);
                    }
                    else {
                        this._fragment.addUniform(name_4, shader.input[name_4].type);
                    }
                }
            }
        }
        if (this._mode == GenerateMode.PICK) {
            this._vertex.addVarying("out_pick_index", "Vector4");
        }
        // The main function.
        this._vertex.addLine("void main() {");
        this._vertex.indent();
        // Define arguments.
        for (var name_5 in spec.variables) {
            if (spec.variables.hasOwnProperty(name_5)) {
                var type = spec.variables[name_5];
                this._vertex.addDeclaration(name_5, type);
            }
        }
        this._vertex.addStatements(spec.statements);
        this._vertex.unindent();
        this._vertex.addLine("}");
        this._vertexCode = this._vertex.getCode();
        if (this._mode == GenerateMode.PICK) {
            this._fragmentCode = "\n        precision highp float;\n        varying vec4 out_pick_index;\n        void main() {\n          gl_FragColor = out_pick_index;\n        }\n      ";
        }
        else {
            // Input attributes.
            // Output attributes.
            for (var name_6 in shader.output) {
                if (shader.output.hasOwnProperty(name_6)) {
                    var oname = this.getUnusedName(name_6);
                    this._foutMapping.set(name_6, oname);
                    this._fragment.addDeclaration(oname, shader.output[name_6].type);
                }
            }
            this._fragment.addLine("@additionalCode");
            // The main function.
            this._fragment.addLine("void main() {");
            this._fragment.indent();
            // Define arguments.
            for (var name_7 in shader.variables) {
                if (shader.variables.hasOwnProperty(name_7)) {
                    var type = shader.variables[name_7];
                    this._fragment.addDeclaration(name_7, type);
                }
            }
            var _loop_1 = function (name_8) {
                if (shader.input.hasOwnProperty(name_8)) {
                    if (this_1.fragmentPassthru(name_8)) {
                        fragment_passthrus.forEach(function (_a) {
                            var gname = _a[0], vname = _a[1];
                            if (vname == name_8) {
                                _this._fragment.addLine(name_8 + " = " + gname + ";");
                            }
                        });
                    }
                    else {
                        if (this_1._voutMapping.get(name_8)) {
                            this_1._fragment.addDeclaration(name_8, shader.input[name_8].type);
                            this_1._fragment.addLine(name_8 + " = " + this_1._voutMapping.get(name_8) + ";");
                        }
                    }
                }
            };
            var this_1 = this;
            for (var name_8 in shader.input) {
                _loop_1(name_8);
            }
            this._fragment.addStatements(shader.statements);
            this._fragment.unindent();
            this._fragment.addLine("}");
            this._fragmentCode = this._fragment.getCode();
        }
    };
    Generator.prototype.getVertexCode = function () {
        return this._vertexCode;
    };
    Generator.prototype.getFragmentCode = function () {
        return this._fragmentCode;
    };
    return Generator;
}(glsl_1.ProgramGenerator));
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Common code for GLSL-based shader languages
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(45);
var intrinsics_1 = __webpack_require__(46);
var stardust_core_1 = __webpack_require__(1);
var LinesGenerator = /** @class */ (function () {
    function LinesGenerator() {
        this._lines = [];
        this._currentIndent = "";
        this._blocks = new stardust_core_1.Dictionary();
    }
    LinesGenerator.prototype.addNamedBlock = function (name, code) {
        if (this._blocks.has(name)) {
            this._blocks.set(name, this._blocks.get(name) + "\n" + code);
        }
        else {
            this._blocks.set(name, code);
        }
    };
    LinesGenerator.prototype.addLine = function (code) {
        this._lines.push(this._currentIndent + code);
    };
    LinesGenerator.prototype.indent = function () {
        this._currentIndent += "    ";
    };
    LinesGenerator.prototype.unindent = function () {
        this._currentIndent = this._currentIndent.slice(0, this._currentIndent.length - 4);
    };
    LinesGenerator.prototype.getCode = function () {
        var _this = this;
        return this._lines
            .map(function (line) {
            if (line[0] == "@") {
                if (_this._blocks.has(line.substr(1))) {
                    return _this._blocks.get(line.substr(1));
                }
                else {
                    return "";
                }
            }
            else {
                return line;
            }
        })
            .join("\n");
    };
    return LinesGenerator;
}());
exports.LinesGenerator = LinesGenerator;
// The basic GLSL generator
var ShaderGenerator = /** @class */ (function (_super) {
    __extends(ShaderGenerator, _super);
    function ShaderGenerator() {
        return _super.call(this) || this;
    }
    ShaderGenerator.prototype.addAdditionalCode = function (code) {
        this.addNamedBlock("additionalCode", code);
    };
    ShaderGenerator.prototype.addDeclaration = function (name, type, modifier) {
        if (modifier === void 0) { modifier = null; }
        if (modifier == null) {
            this.addLine(types_1.convertTypeName(type) + " " + name + ";");
        }
        else {
            this.addLine(modifier + " " + types_1.convertTypeName(type) + " " + name + ";");
        }
    };
    ShaderGenerator.prototype.addArrayDeclaration = function (name, type, count, modifier) {
        if (count === void 0) { count = 1; }
        if (modifier === void 0) { modifier = null; }
        if (modifier == "null") {
            this.addLine(types_1.convertTypeName(type) + "[" + count + "] " + name + ";");
        }
        else {
            this.addLine(modifier + " " + types_1.convertTypeName(type) + "[" + count + "] " + name + ";");
        }
    };
    ShaderGenerator.prototype.addUniform = function (name, type) {
        this.addLine("uniform " + types_1.convertTypeName(type) + " " + name + ";");
        if (type == "Vector2Array" ||
            type == "FloatArray" ||
            type == "Vector3Array" ||
            type == "Vector4Array" ||
            type == "ColorArray") {
            this.addLine("uniform float " + name + "_length;");
        }
        if (type == "Vector2Image" ||
            type == "FloatImage" ||
            type == "Vector3Image" ||
            type == "Vector4Image" ||
            type == "Image") {
            this.addLine("uniform float " + name + "_width;");
            this.addLine("uniform float " + name + "_height;");
        }
    };
    ShaderGenerator.prototype.addAttribute = function (name, type) {
        this.addLine("attribute " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addVarying = function (name, type) {
        this.addLine("varying " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addIn = function (name, type) {
        this.addLine("in " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.addOut = function (name, type) {
        this.addLine("out " + types_1.convertTypeName(type) + " " + name + ";");
    };
    ShaderGenerator.prototype.generateExpression = function (expr) {
        var _this = this;
        switch (expr.type) {
            case "constant": {
                var eConstant = expr;
                return types_1.convertConstant(eConstant.valueType, eConstant.value);
            }
            case "variable": {
                var eVariable = expr;
                return eVariable.variableName;
            }
            case "function": {
                var eFunction = expr;
                var args = eFunction.arguments.map(function (arg) {
                    return _this.generateExpression(arg);
                });
                var _a = intrinsics_1.generateIntrinsicFunction(eFunction.functionName, args), code = _a.code, additionalCode = _a.additionalCode;
                if (additionalCode != null) {
                    this.addAdditionalCode(additionalCode);
                }
                return code;
            }
            case "field": {
                var eField = expr;
                return this.generateExpression(eField.value) + "." + eField.fieldName;
            }
        }
    };
    ShaderGenerator.prototype.addStatement = function (stat) {
        switch (stat.type) {
            case "assign":
                {
                    var sAssign = stat;
                    var expr = this.generateExpression(sAssign.expression);
                    this.addLine(sAssign.variableName + " = " + expr + ";");
                }
                break;
            case "condition":
                {
                    var sCondition = stat;
                    if (sCondition.trueStatements.length > 0 &&
                        sCondition.falseStatements.length > 0) {
                        this.addLine("if(" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("} else {");
                        this.indent();
                        this.addStatements(sCondition.falseStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                    else if (sCondition.trueStatements.length > 0) {
                        this.addLine("if(" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                    else if (sCondition.falseStatements.length > 0) {
                        this.addLine("if(!" + this.generateExpression(sCondition.condition) + ") {");
                        this.indent();
                        this.addStatements(sCondition.trueStatements);
                        this.unindent();
                        this.addLine("}");
                    }
                }
                break;
            case "for":
                {
                    var sForLoop = stat;
                    this.addLine("for(int " + sForLoop.variableName + " = " + sForLoop.rangeMin + "; " + sForLoop.variableName + " <= " + sForLoop.rangeMax + "; " + sForLoop.variableName + "++) {");
                    this.indent();
                    this.addStatements(sForLoop.statements);
                    this.unindent();
                    this.addLine("}");
                }
                break;
            case "emit":
                {
                    var sEmit = stat;
                    this.addEmitStatement(sEmit);
                }
                break;
            case "discard":
                {
                    this.addLine("discard;");
                }
                break;
        }
    };
    ShaderGenerator.prototype.addStatements = function (stat) {
        var _this = this;
        stat.forEach(function (s) { return _this.addStatement(s); });
    };
    // Override these
    ShaderGenerator.prototype.addEmitStatement = function (s) {
        this.addLine("// Emit Statement");
    };
    return ShaderGenerator;
}(LinesGenerator));
exports.ShaderGenerator = ShaderGenerator;
var ProgramGenerator = /** @class */ (function () {
    function ProgramGenerator(spec, shader, asUniform) {
        var _this = this;
        this._spec = spec;
        this._shader = shader;
        this._asUniform = asUniform;
        // Make a record of existing names
        this._names = {};
        var record_names = function (map) {
            for (var name_1 in map) {
                if (map.hasOwnProperty(name_1)) {
                    _this._names[name_1] = true;
                }
            }
        };
        record_names(spec.input);
        record_names(spec.output);
        record_names(spec.variables);
        record_names(shader.input);
        record_names(shader.output);
    }
    ProgramGenerator.prototype.getUnusedName = function (hint) {
        var index = 0;
        while (true) {
            var candidate = "s3" + hint + index.toString();
            if (this._names[candidate] === true) {
                index += 1;
                continue;
            }
            this._names[candidate] = true;
            return candidate;
        }
    };
    // Should we pass the mark input `name` to the fragment shader?
    ProgramGenerator.prototype.fragmentPassthru = function (name) {
        return (this._spec.input.hasOwnProperty(name) &&
            !this._spec.output.hasOwnProperty(name));
    };
    return ProgramGenerator;
}());
exports.ProgramGenerator = ProgramGenerator;
//# sourceMappingURL=glsl.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Declare the types
Object.defineProperty(exports, "__esModule", { value: true });
var typeName2GLSLTypeName = {
    float: "float",
    int: "int",
    bool: "bool",
    Vector2: "vec2",
    Vector3: "vec3",
    Vector4: "vec4",
    Matrix3: "mat3",
    Matrix4: "mat4",
    Quaternion: "vec4",
    Color: "vec4",
    Image: "sampler2D",
    FloatArray: "sampler2D",
    Vector2Array: "sampler2D",
    Vector3Array: "sampler2D",
    Vector4Array: "sampler2D"
};
function convertTypeName(name) {
    return typeName2GLSLTypeName[name];
}
exports.convertTypeName = convertTypeName;
function convertConstant(type, value) {
    if (type == "float") {
        return value.toFixed(5);
    }
    if (type == "int") {
        return value.toString();
    }
    if (type == "bool") {
        return value != 0 ? "true" : "false";
    }
    if (type == "Vector2") {
        return "vec2(" + value.join(", ") + ")";
    }
    if (type == "Vector3") {
        return "vec3(" + value.join(", ") + ")";
    }
    if (type == "Vector4") {
        return "vec4(" + value.join(", ") + ")";
    }
    if (type == "Quaternion") {
        return "vec4(" + value.join(", ") + ")";
    }
    if (type == "Color") {
        return "vec4(" + value.join(", ") + ")";
    }
}
exports.convertConstant = convertConstant;
//# sourceMappingURL=types.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
var stardust_core_2 = __webpack_require__(1);
var intrinsicImplementations = new stardust_core_2.Dictionary();
var intrinsicsCodeBase = new stardust_core_2.Dictionary();
function ImplementFunction(name, argTypes, returnType, code) {
    var internalName = stardust_core_1.Intrinsics.getInternalName({
        name: name,
        argTypes: argTypes,
        returnType: returnType
    });
    intrinsicImplementations.set(internalName, code);
}
function ImplementSimpleFunction(name, argTypes, returnType, funcName, funcCode) {
    ImplementFunction(name, argTypes, returnType, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return funcName + "(" + args.join(", ") + ")";
    });
    if (funcCode) {
        var internalName = stardust_core_1.Intrinsics.getInternalName({
            name: name,
            argTypes: argTypes,
            returnType: returnType
        });
        intrinsicsCodeBase.set(internalName, funcCode);
    }
}
function ImplementOperator(name, argTypes, returnType, code) {
    ImplementFunction("@" + name, argTypes, returnType, code);
}
function ImplementTypeConversion(srcType, destType, code) {
    ImplementFunction("cast:" + srcType + ":" + destType, [srcType], destType, code);
}
for (var _i = 0, _a = ["float", "int", "Vector2", "Vector3", "Vector4", "Color"]; _i < _a.length; _i++) {
    var type = _a[_i];
    ImplementOperator("+", [type, type], type, function (a, b) { return "(" + a + ") + (" + b + ")"; });
    ImplementOperator("-", [type, type], type, function (a, b) { return "(" + a + ") - (" + b + ")"; });
    ImplementOperator("*", [type, type], type, function (a, b) { return "(" + a + ") * (" + b + ")"; });
    ImplementOperator("/", [type, type], type, function (a, b) { return "(" + a + ") / (" + b + ")"; });
    if (type != "Color") {
        ImplementOperator("+", [type], type, function (a, b) { return "" + a; });
        ImplementOperator("-", [type], type, function (a, b) { return "-(" + a + ")"; });
    }
}
ImplementOperator("*", ["float", "Vector2"], "Vector2", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("*", ["float", "Vector3"], "Vector3", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("*", ["float", "Vector4"], "Vector4", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("*", ["Vector2", "float"], "Vector2", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("*", ["Vector3", "float"], "Vector3", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("*", ["Vector4", "float"], "Vector4", function (a, b) { return "(" + a + ") * (" + b + ")"; });
ImplementOperator("/", ["Vector2", "float"], "Vector2", function (a, b) { return "(" + a + ") / (" + b + ")"; });
ImplementOperator("/", ["Vector3", "float"], "Vector3", function (a, b) { return "(" + a + ") / (" + b + ")"; });
ImplementOperator("/", ["Vector4", "float"], "Vector4", function (a, b) { return "(" + a + ") / (" + b + ")"; });
// ImplementOperator("%", [ "int", "int" ], "int", (a, b) => `(${a}) % (${b})`);
ImplementOperator("%", ["float", "float"], "float", function (a, b) { return "mod(" + a + ", " + b + ")"; });
for (var _b = 0, _c = ["float", "int", "bool"]; _b < _c.length; _b++) {
    var type = _c[_b];
    ImplementOperator("==", [type, type], "bool", function (a, b) { return "(" + a + ") == (" + b + ")"; });
}
for (var _d = 0, _e = ["float", "int"]; _d < _e.length; _d++) {
    var type = _e[_d];
    ImplementOperator(">", [type, type], "bool", function (a, b) { return "(" + a + ") > (" + b + ")"; });
    ImplementOperator("<", [type, type], "bool", function (a, b) { return "(" + a + ") < (" + b + ")"; });
    ImplementOperator(">=", [type, type], "bool", function (a, b) { return "(" + a + ") >= (" + b + ")"; });
    ImplementOperator("<=", [type, type], "bool", function (a, b) { return "(" + a + ") <= (" + b + ")"; });
}
ImplementOperator("!", ["bool"], "bool", function (a) { return "!(" + a + ")"; });
ImplementOperator("&&", ["bool", "bool"], "bool", function (a, b) { return "(" + a + ") && (" + b + ")"; });
ImplementOperator("||", ["bool", "bool"], "bool", function (a, b) { return "(" + a + ") || (" + b + ")"; });
ImplementSimpleFunction("Vector2", ["float", "float"], "Vector2", "vec2");
ImplementSimpleFunction("Vector3", ["float", "float", "float"], "Vector3", "vec3");
ImplementSimpleFunction("Vector4", ["float", "float", "float", "float"], "Vector4", "vec4");
ImplementSimpleFunction("Color", ["float", "float", "float", "float"], "Color", "vec4");
ImplementSimpleFunction("Quaternion", ["float", "float", "float", "float"], "Quaternion", "vec4");
ImplementSimpleFunction("normalize", ["Vector2"], "Vector2", "normalize");
ImplementSimpleFunction("normalize", ["Vector3"], "Vector3", "normalize");
ImplementSimpleFunction("normalize", ["Vector4"], "Vector4", "normalize");
ImplementSimpleFunction("normalize", ["Quaternion"], "Vector4", "normalize");
ImplementSimpleFunction("dot", ["Vector2", "Vector2"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector3", "Vector3"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector4", "Vector4"], "float", "dot");
ImplementSimpleFunction("length", ["Vector2"], "float", "length");
ImplementSimpleFunction("length", ["Vector3"], "float", "length");
ImplementSimpleFunction("length", ["Vector4"], "float", "length");
ImplementSimpleFunction("length", ["Quaternion"], "float", "length");
ImplementSimpleFunction("cross", ["Vector3", "Vector3"], "Vector3", "cross");
ImplementSimpleFunction("quat_mul", ["Quaternion", "Quaternion"], "Quaternion", "s3_quat_mul", "\n    vec4 s3_quat_mul(vec4 q1, vec4 q2) {\n        return vec4(\n            q1.w * q2.xyz + q2.w * q1.xyz + cross(q1.xyz, q2.xyz),\n            q1.w * q2.w - dot(q1.xyz, q2.xyz)\n        );\n    }\n");
ImplementSimpleFunction("quat_rotate", ["Quaternion", "Vector3"], "Vector3", "s3_quat_rotate", "\n    vec3 s3_quat_rotate(vec4 q, vec3 v) {\n        float d = dot(q.xyz, v);\n        vec3 c = cross(q.xyz, v);\n        return q.w * q.w * v + (q.w + q.w) * c + d * q.xyz - cross(c, q.xyz);\n    }\n");
var colorCode = "\n    float s3_lab2rgb_curve(float v) {\n        float p = pow(v, 3.0);\n        if(p > 0.008856) {\n            return p;\n        } else {\n            return (v - 16.0 / 116.0) / 7.787;\n        }\n    }\n    float s3_lab2rgb_curve2(float v) {\n        if(v > 0.0031308) {\n            return 1.055 * pow(v , (1.0 / 2.4)) - 0.055;\n        } else {\n            return 12.92 * v;\n        }\n    }\n    vec4 s3_lab2rgb(vec4 lab) {\n        float var_Y = (lab.x + 0.160) / 1.160;\n        float var_X = lab.y / 5.0 + var_Y;\n        float var_Z = var_Y - lab.z / 2.0;\n\n        var_X = s3_lab2rgb_curve(var_X) * 0.95047;\n        var_Y = s3_lab2rgb_curve(var_Y);\n        var_Z = s3_lab2rgb_curve(var_Z) * 1.08883;\n\n        float var_R = var_X *  3.2406 + var_Y * -1.5372 + var_Z * -0.4986;\n        float var_G = var_X * -0.9689 + var_Y *  1.8758 + var_Z *  0.0415;\n        float var_B = var_X *  0.0557 + var_Y * -0.2040 + var_Z *  1.0570;\n\n        var_R = s3_lab2rgb_curve2(var_R);\n        var_G = s3_lab2rgb_curve2(var_G);\n        var_B = s3_lab2rgb_curve2(var_B);\n\n        return vec4(var_R, var_G, var_B, lab.a);\n    }\n    vec4 s3_hcl2rgb(vec4 hcl) {\n        vec4 lab = vec4(hcl.z, hcl.y * cos(hcl.x), hcl.y * sin(hcl.x), hcl.a);\n        return s3_lab2rgb(lab);\n    }\n";
ImplementSimpleFunction("lab2rgb", ["Color"], "Color", "s3_lab2rgb", colorCode);
ImplementSimpleFunction("hcl2rgb", ["Color"], "Color", "s3_hcl2rgb", colorCode);
ImplementSimpleFunction("abs", ["float"], "float", "abs");
ImplementSimpleFunction("sqrt", ["float"], "float", "sqrt");
ImplementSimpleFunction("exp", ["float"], "float", "exp");
ImplementSimpleFunction("log", ["float"], "float", "log");
ImplementSimpleFunction("sin", ["float"], "float", "sin");
ImplementSimpleFunction("cos", ["float"], "float", "cos");
ImplementSimpleFunction("tan", ["float"], "float", "tan");
ImplementSimpleFunction("asin", ["float"], "float", "asin");
ImplementSimpleFunction("acos", ["float"], "float", "acos");
ImplementSimpleFunction("atan", ["float"], "float", "atan");
ImplementSimpleFunction("atan2", ["float", "float"], "float", "atan2");
ImplementSimpleFunction("abs", ["int"], "int", "abs");
ImplementSimpleFunction("min", ["float", "float"], "float", "min");
ImplementSimpleFunction("max", ["float", "float"], "float", "max");
ImplementSimpleFunction("ceil", ["float"], "float", "ceil");
ImplementSimpleFunction("floor", ["float"], "float", "floor");
ImplementSimpleFunction("mix", ["float", "float", "float"], "float", "mix");
ImplementSimpleFunction("mix", ["Vector2", "Vector2", "float"], "Vector2", "mix");
ImplementSimpleFunction("mix", ["Vector3", "Vector3", "float"], "Vector3", "mix");
ImplementSimpleFunction("mix", ["Vector4", "Vector4", "float"], "Vector4", "mix");
ImplementSimpleFunction("mix", ["Color", "Color", "float"], "Color", "mix");
ImplementFunction("clamp", ["float"], "float", function (a) { return "clamp(" + a + ", 0, 1)"; });
ImplementTypeConversion("float", "int", function (a) { return "int(" + a + ")"; });
ImplementTypeConversion("int", "float", function (a) { return "float(" + a + ")"; });
ImplementFunction("array", ["FloatArray", "float"], "float", function (a, b) { return "texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).x"; });
ImplementFunction("array", ["Vector2Array", "float"], "Vector2", function (a, b) { return "texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xy"; });
ImplementFunction("array", ["Vector3Array", "float"], "Vector3", function (a, b) { return "texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xyz"; });
ImplementFunction("array", ["Vector4Array", "float"], "Vector4", function (a, b) { return "texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).xyzw"; });
ImplementFunction("array", ["ColorArray", "float"], "Color", function (a, b) { return "texture2D(" + a + ", vec2((" + b + " + 0.5) / float(" + a + "_length), 0.5)).rgba"; });
ImplementFunction("image", ["Image", "Vector2"], "Color", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height))"; });
ImplementFunction("image", ["FloatImage", "Vector2"], "float", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height)).x"; });
ImplementFunction("image", ["Vector2Image", "Vector2"], "Vector2", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height)).xy"; });
ImplementFunction("image", ["Vector3Image", "Vector2"], "Vector3", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height)).xyz"; });
ImplementFunction("image", ["Vector4Image", "Vector2"], "Vector4", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height)).xyzw"; });
ImplementFunction("image", ["ColorImage", "Vector2"], "Color", function (a, b) { return "texture2D(" + a + ", (" + b + " + 0.5) / vec2(" + a + "_width, " + a + "_height)).rgba"; });
ImplementFunction("get_camera_position", [], "Vector3", function () { return "s3_get_camera_position()"; });
ImplementFunction("get_camera_direction", ["Vector3"], "Vector3", function (a) { return "s3_get_camera_direction(" + a + ")"; });
function generateIntrinsicFunction(name, args) {
    if (intrinsicImplementations.has(name)) {
        if (intrinsicsCodeBase.has(name)) {
            return {
                code: intrinsicImplementations.get(name).apply(void 0, args),
                additionalCode: intrinsicsCodeBase.get(name)
            };
        }
        else {
            return {
                code: intrinsicImplementations.get(name).apply(void 0, args),
                additionalCode: null
            };
        }
    }
    else {
        throw new Error("intrinsic function " + name + " is not defined.");
    }
}
exports.generateIntrinsicFunction = generateIntrinsicFunction;
//# sourceMappingURL=intrinsics.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
function compileProgram(GL, vsCode, fsCode) {
    // Vertex shader
    var vsShader = GL.createShader(GL.VERTEX_SHADER);
    GL.shaderSource(vsShader, vsCode);
    GL.compileShader(vsShader);
    var success = GL.getShaderParameter(vsShader, GL.COMPILE_STATUS);
    if (!success) {
        console.log("Vertex shader code is:", vsCode);
        throw new stardust_core_1.RuntimeError("could not compile vertex shader: " + GL.getShaderInfoLog(vsShader));
    }
    // Fragment shader
    var fsShader = GL.createShader(GL.FRAGMENT_SHADER);
    GL.shaderSource(fsShader, fsCode);
    GL.compileShader(fsShader);
    success = GL.getShaderParameter(fsShader, GL.COMPILE_STATUS);
    if (!success) {
        console.log("Fragment shader code is:", fsCode);
        throw new stardust_core_1.RuntimeError("could not compile fragment shader: " + GL.getShaderInfoLog(fsShader));
    }
    // Link the program
    var program = GL.createProgram();
    GL.attachShader(program, vsShader);
    GL.attachShader(program, fsShader);
    GL.linkProgram(program);
    if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
        console.log("Vertex shader code is:", vsCode);
        console.log("Fragment shader code is:", fsCode);
        throw new stardust_core_1.RuntimeError("could not link shader: " + GL.getProgramInfoLog(program));
    }
    return program;
}
exports.compileProgram = compileProgram;
//# sourceMappingURL=webglutils.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDefaultDevicePixelRatio() {
    if (window.devicePixelRatio != undefined) {
        return window.devicePixelRatio;
    }
    else {
        return 1;
    }
}
exports.getDefaultDevicePixelRatio = getDefaultDevicePixelRatio;
//# sourceMappingURL=helpers.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stardust_core_1 = __webpack_require__(1);
var earcut = __webpack_require__(50);
function parseSVGTriangles(svg) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(svg, "image/svg+xml");
    function findNodeByType(node, type) {
        if (node instanceof Element) {
            if (node.tagName && node.tagName.toLowerCase() == type) {
                return [node];
            }
        }
        var nodes = [];
        for (var i = 0; i < node.children.length; i++) {
            nodes = nodes.concat(findNodeByType(node.children.item(i), type));
        }
        return nodes;
    }
    var svgNode = findNodeByType(doc, "svg")[0];
    var polygons = findNodeByType(doc, "polygon");
    var triangles = [];
    polygons.forEach(function (p) {
        var pointsString = p.getAttribute("points");
        var points = pointsString
            .split(/[, \t]/)
            .map(function (x) { return x.trim(); })
            .filter(function (x) { return x != ""; })
            .map(function (x) { return parseFloat(x); });
        var cut = earcut(points);
        var color = "black";
        if (p.style.fill && p.style.fill != "") {
            color = p.style.fill;
        }
        for (var i = 0; i < cut.length; i += 3) {
            var i1 = cut[i + 0];
            var i2 = cut[i + 1];
            var i3 = cut[i + 2];
            var triangle = {
                p1: [points[i1 * 2], points[i1 * 2 + 1]],
                p2: [points[i2 * 2], points[i2 * 2 + 1]],
                p3: [points[i3 * 2], points[i3 * 2 + 1]],
                color: color
            };
            triangles.push(triangle);
        }
    });
    var parseSize = function (sz) {
        if (sz == null || sz == "") {
            return 0;
        }
        if (sz.match(/px$/)) {
            return parseFloat(sz.substr(0, sz.length - 2));
        }
        if (sz.match(/em$/)) {
            return parseFloat(sz.substr(0, sz.length - 2));
        }
        return parseFloat(sz);
    };
    return {
        x: parseSize(svgNode.getAttribute("x")),
        y: parseSize(svgNode.getAttribute("y")),
        width: parseSize(svgNode.getAttribute("width")),
        height: parseSize(svgNode.getAttribute("height")),
        triangles: triangles
    };
}
function isotype(svg) {
    var custom = stardust_core_1.mark.custom();
    custom.input("position", "Vector2", "[ 0, 0 ]");
    custom.input("size", "float", "1");
    custom.input("color", "Color", "[ 0, 0, 0, 1 ]");
    var triangles = parseSVGTriangles(svg);
    var cx = triangles.x + triangles.width / 2;
    var cy = triangles.y + triangles.height / 2;
    for (var _i = 0, _a = triangles.triangles; _i < _a.length; _i++) {
        var t = _a[_i];
        custom
            .add("P2D.Triangle")
            .attr("p1", "position + Vector2(" + (t.p1[0] - cx) + ", " + (t.p1[1] - cy) + ") * size")
            .attr("p2", "position + Vector2(" + (t.p2[0] - cx) + ", " + (t.p2[1] - cy) + ") * size")
            .attr("p3", "position + Vector2(" + (t.p3[0] - cx) + ", " + (t.p3[1] - cy) + ") * size")
            .attr("color", "color");
    }
    return custom.compile();
}
exports.isotype = isotype;
exports.version = "0.2.3";
//# sourceMappingURL=stardust-isotype.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })
/******/ ]);
});