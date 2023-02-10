/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-electron/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base")
    base.href = arguments[0]

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0]
    head.insertBefore(base, head.firstChild)

    var a = document.createElement("a")
    var resolved

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index]
      resolved = a.href
      base.href = resolved
    }

    head.removeChild(base)

    return resolved
  }

  return resolveUrl

}));


/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, main, types, unpkg, jsdelivr, scripts, browser, author, contributors, license, devDependencies, dependencies, repository, bugs, homepage, collective, default */
/***/ (function(module) {

module.exports = {"name":"tesseract.js","version":"4.0.2","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.18.7","@babel/preset-env":"^7.18.7","@rollup/plugin-commonjs":"^22.0.2","acorn":"^6.4.0","babel-loader":"^8.2.0","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^10.0.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^2.7.1","rollup":"^2.79.0","wait-on":"^3.3.0","webpack":"^5.74.0","webpack-bundle-analyzer":"^4.6.0","webpack-cli":"^4.10.0","webpack-dev-middleware":"^5.3.3"},"dependencies":{"babel-eslint":"^10.1.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^4.0.2","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}};

/***/ }),

/***/ "./node_modules/tesseract.js/src/Tesseract.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");

const recognize = async (image, langs, options) => {
  const worker = await createWorker(options);
  await worker.loadLanguage(langs);
  await worker.initialize(langs);
  return worker.recognize(image)
    .finally(async () => {
      await worker.terminate();
    });
};

const detect = async (image, options) => {
  const worker = await createWorker(options);
  await worker.loadLanguage('osd');
  await worker.initialize('osd');
  return worker.detect(image)
    .finally(async () => {
      await worker.terminate();
    });
};

module.exports = {
  recognize,
  detect,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/OEM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/PSM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12',
  RAW_LINE: '13',
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const OEM = __webpack_require__(/*! ./OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");

module.exports = {
  defaultOEM: OEM.DEFAULT,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',
  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {},
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/languages.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/languages.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * languages with existing tesseract traineddata
 * https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
 */

/**
 * @typedef {object} Languages
 * @property {string} AFR Afrikaans
 * @property {string} AMH Amharic
 * @property {string} ARA Arabic
 * @property {string} ASM Assamese
 * @property {string} AZE Azerbaijani
 * @property {string} AZE_CYRL Azerbaijani - Cyrillic
 * @property {string} BEL Belarusian
 * @property {string} BEN Bengali
 * @property {string} BOD Tibetan
 * @property {string} BOS Bosnian
 * @property {string} BUL Bulgarian
 * @property {string} CAT Catalan; Valencian
 * @property {string} CEB Cebuano
 * @property {string} CES Czech
 * @property {string} CHI_SIM Chinese - Simplified
 * @property {string} CHI_TRA Chinese - Traditional
 * @property {string} CHR Cherokee
 * @property {string} CYM Welsh
 * @property {string} DAN Danish
 * @property {string} DEU German
 * @property {string} DZO Dzongkha
 * @property {string} ELL Greek, Modern (1453-)
 * @property {string} ENG English
 * @property {string} ENM English, Middle (1100-1500)
 * @property {string} EPO Esperanto
 * @property {string} EST Estonian
 * @property {string} EUS Basque
 * @property {string} FAS Persian
 * @property {string} FIN Finnish
 * @property {string} FRA French
 * @property {string} FRK German Fraktur
 * @property {string} FRM French, Middle (ca. 1400-1600)
 * @property {string} GLE Irish
 * @property {string} GLG Galician
 * @property {string} GRC Greek, Ancient (-1453)
 * @property {string} GUJ Gujarati
 * @property {string} HAT Haitian; Haitian Creole
 * @property {string} HEB Hebrew
 * @property {string} HIN Hindi
 * @property {string} HRV Croatian
 * @property {string} HUN Hungarian
 * @property {string} IKU Inuktitut
 * @property {string} IND Indonesian
 * @property {string} ISL Icelandic
 * @property {string} ITA Italian
 * @property {string} ITA_OLD Italian - Old
 * @property {string} JAV Javanese
 * @property {string} JPN Japanese
 * @property {string} KAN Kannada
 * @property {string} KAT Georgian
 * @property {string} KAT_OLD Georgian - Old
 * @property {string} KAZ Kazakh
 * @property {string} KHM Central Khmer
 * @property {string} KIR Kirghiz; Kyrgyz
 * @property {string} KOR Korean
 * @property {string} KUR Kurdish
 * @property {string} LAO Lao
 * @property {string} LAT Latin
 * @property {string} LAV Latvian
 * @property {string} LIT Lithuanian
 * @property {string} MAL Malayalam
 * @property {string} MAR Marathi
 * @property {string} MKD Macedonian
 * @property {string} MLT Maltese
 * @property {string} MSA Malay
 * @property {string} MYA Burmese
 * @property {string} NEP Nepali
 * @property {string} NLD Dutch; Flemish
 * @property {string} NOR Norwegian
 * @property {string} ORI Oriya
 * @property {string} PAN Panjabi; Punjabi
 * @property {string} POL Polish
 * @property {string} POR Portuguese
 * @property {string} PUS Pushto; Pashto
 * @property {string} RON Romanian; Moldavian; Moldovan
 * @property {string} RUS Russian
 * @property {string} SAN Sanskrit
 * @property {string} SIN Sinhala; Sinhalese
 * @property {string} SLK Slovak
 * @property {string} SLV Slovenian
 * @property {string} SPA Spanish; Castilian
 * @property {string} SPA_OLD Spanish; Castilian - Old
 * @property {string} SQI Albanian
 * @property {string} SRP Serbian
 * @property {string} SRP_LATN Serbian - Latin
 * @property {string} SWA Swahili
 * @property {string} SWE Swedish
 * @property {string} SYR Syriac
 * @property {string} TAM Tamil
 * @property {string} TEL Telugu
 * @property {string} TGK Tajik
 * @property {string} TGL Tagalog
 * @property {string} THA Thai
 * @property {string} TIR Tigrinya
 * @property {string} TUR Turkish
 * @property {string} UIG Uighur; Uyghur
 * @property {string} UKR Ukrainian
 * @property {string} URD Urdu
 * @property {string} UZB Uzbek
 * @property {string} UZB_CYRL Uzbek - Cyrillic
 * @property {string} VIE Vietnamese
 * @property {string} YID Yiddish
 */

/**
  * @type {Languages}
  */
module.exports = {
  AFR: 'afr',
  AMH: 'amh',
  ARA: 'ara',
  ASM: 'asm',
  AZE: 'aze',
  AZE_CYRL: 'aze_cyrl',
  BEL: 'bel',
  BEN: 'ben',
  BOD: 'bod',
  BOS: 'bos',
  BUL: 'bul',
  CAT: 'cat',
  CEB: 'ceb',
  CES: 'ces',
  CHI_SIM: 'chi_sim',
  CHI_TRA: 'chi_tra',
  CHR: 'chr',
  CYM: 'cym',
  DAN: 'dan',
  DEU: 'deu',
  DZO: 'dzo',
  ELL: 'ell',
  ENG: 'eng',
  ENM: 'enm',
  EPO: 'epo',
  EST: 'est',
  EUS: 'eus',
  FAS: 'fas',
  FIN: 'fin',
  FRA: 'fra',
  FRK: 'frk',
  FRM: 'frm',
  GLE: 'gle',
  GLG: 'glg',
  GRC: 'grc',
  GUJ: 'guj',
  HAT: 'hat',
  HEB: 'heb',
  HIN: 'hin',
  HRV: 'hrv',
  HUN: 'hun',
  IKU: 'iku',
  IND: 'ind',
  ISL: 'isl',
  ITA: 'ita',
  ITA_OLD: 'ita_old',
  JAV: 'jav',
  JPN: 'jpn',
  KAN: 'kan',
  KAT: 'kat',
  KAT_OLD: 'kat_old',
  KAZ: 'kaz',
  KHM: 'khm',
  KIR: 'kir',
  KOR: 'kor',
  KUR: 'kur',
  LAO: 'lao',
  LAT: 'lat',
  LAV: 'lav',
  LIT: 'lit',
  MAL: 'mal',
  MAR: 'mar',
  MKD: 'mkd',
  MLT: 'mlt',
  MSA: 'msa',
  MYA: 'mya',
  NEP: 'nep',
  NLD: 'nld',
  NOR: 'nor',
  ORI: 'ori',
  PAN: 'pan',
  POL: 'pol',
  POR: 'por',
  PUS: 'pus',
  RON: 'ron',
  RUS: 'rus',
  SAN: 'san',
  SIN: 'sin',
  SLK: 'slk',
  SLV: 'slv',
  SPA: 'spa',
  SPA_OLD: 'spa_old',
  SQI: 'sqi',
  SRP: 'srp',
  SRP_LATN: 'srp_latn',
  SWA: 'swa',
  SWE: 'swe',
  SYR: 'syr',
  TAM: 'tam',
  TEL: 'tel',
  TGK: 'tgk',
  TGL: 'tgl',
  THA: 'tha',
  TIR: 'tir',
  TUR: 'tur',
  UIG: 'uig',
  UKR: 'ukr',
  URD: 'urd',
  UZB: 'uzb',
  UZB_CYRL: 'uzb_cyrl',
  VIE: 'vie',
  YID: 'yid',
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createJob.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let jobCounter = 0;

module.exports = ({
  id: _id,
  action,
  payload = {},
}) => {
  let id = _id;
  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id,
    action,
    payload,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createScheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let schedulerCounter = 0;

module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];

  schedulerCounter += 1;

  const getQueueLen = () => jobQueue.length;
  const getNumWorkers = () => Object.keys(workers).length;

  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);
      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  const queue = (action, payload) => (
    new Promise((resolve, reject) => {
      const job = createJob({ action, payload });
      jobQueue.push(async (w) => {
        jobQueue.shift();
        runningWorkers[w.id] = job;
        try {
          resolve(await w[action].apply(this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });
      log(`[${id}]: Add ${job.id} to JobQueue`);
      log(`[${id}]: JobQueue length=${jobQueue.length}`);
      dequeue();
    })
  );

  const addWorker = (w) => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };

  const addJob = async (action, ...payload) => {
    if (getNumWorkers() === 0) {
      throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
    }
    return queue(action, payload);
  };

  const terminate = async () => {
    Object.keys(workers).forEach(async (wid) => {
      await workers[wid].terminate();
    });
    jobQueue = [];
  };

  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/createWorker.js":
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ "./node_modules/tesseract.js/src/utils/resolvePaths.js");
const circularize = __webpack_require__(/*! ./utils/circularize */ "./node_modules/tesseract.js/src/utils/circularize.js");
const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");
const { log } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");
const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");
const { defaultOEM } = __webpack_require__(/*! ./constants/config */ "./node_modules/tesseract.js/src/constants/config.js");
const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send,
} = __webpack_require__(/*! ./worker/node */ "./node_modules/tesseract.js/src/worker/browser/index.js");

let workerCounter = 0;

module.exports = async (_options = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({
    ...defaultOptions,
    ..._options,
  });
  const resolves = {};
  const rejects = {};

  let workerResReject;
  let workerResResolve;
  const workerRes = new Promise((resolve, reject) => {
    workerResResolve = resolve;
    workerResReject = reject;
  });
  const workerError = (event) => { workerResReject(event.message); };

  let worker = spawnWorker(options);
  worker.onerror = workerError;

  workerCounter += 1;

  const setResolve = (action, res) => {
    resolves[action] = res;
  };

  const setReject = (action, rej) => {
    rejects[action] = rej;
  };

  const startJob = ({ id: jobId, action, payload }) => (
    new Promise((resolve, reject) => {
      log(`[${id}]: Start ${jobId}, action=${action}`);
      setResolve(action, resolve);
      setReject(action, reject);
      send(worker, {
        workerId: id,
        jobId,
        action,
        payload,
      });
    })
  );

  const load = () => (
    console.warn('`load` is depreciated and should be removed from code (workers now come pre-loaded)')
  );

  const loadInternal = (jobId) => (
    startJob(createJob({
      id: jobId, action: 'load', payload: { options },
    }))
  );

  const writeText = (path, text, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'writeFile', args: [path, text] },
    }))
  );

  const readText = (path, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'readFile', args: [path, { encoding: 'utf8' }] },
    }))
  );

  const removeFile = (path, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method: 'unlink', args: [path] },
    }))
  );

  const FS = (method, args, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'FS',
      payload: { method, args },
    }))
  );

  const loadLanguage = (langs = 'eng', jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'loadLanguage',
      payload: { langs, options },
    }))
  );

  const initialize = (langs = 'eng', oem = defaultOEM, config, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'initialize',
      payload: { langs, oem, config },
    }))
  );

  const setParameters = (params = {}, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'setParameters',
      payload: { params },
    }))
  );

  const recognize = async (image, opts = {}, output = {
    blocks: true, text: true, hocr: true, tsv: true,
  }, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'recognize',
      payload: { image: await loadImage(image), options: opts, output },
    }))
  );

  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => {
    console.log('`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead.');
    return startJob(createJob({
      id: jobId,
      action: 'getPDF',
      payload: { title, textonly },
    }));
  };

  const detect = async (image, jobId) => (
    startJob(createJob({
      id: jobId,
      action: 'detect',
      payload: { image: await loadImage(image) },
    }))
  );

  const terminate = async () => {
    if (worker !== null) {
      /*
      await startJob(createJob({
        id: jobId,
        action: 'terminate',
      }));
      */
      terminateWorker(worker);
      worker = null;
    }
    return Promise.resolve();
  };

  onMessage(worker, ({
    workerId, jobId, status, action, data,
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;
      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({ ...data, length: Object.keys(data).length });
      }
      resolves[action]({ jobId, data: d });
    } else if (status === 'reject') {
      rejects[action](data);
      if (action === 'load') workerResReject(data);
      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger({ ...data, userJobId: jobId });
    }
  });

  const resolveObj = {
    id,
    worker,
    setResolve,
    setReject,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate,
  };

  loadInternal().then(() => workerResResolve(resolveObj)).catch(() => {});

  return workerRes;
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
const createScheduler = __webpack_require__(/*! ./createScheduler */ "./node_modules/tesseract.js/src/createScheduler.js");
const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");
const Tesseract = __webpack_require__(/*! ./Tesseract */ "./node_modules/tesseract.js/src/Tesseract.js");
const languages = __webpack_require__(/*! ./constants/languages */ "./node_modules/tesseract.js/src/constants/languages.js");
const OEM = __webpack_require__(/*! ./constants/OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");
const PSM = __webpack_require__(/*! ./constants/PSM */ "./node_modules/tesseract.js/src/constants/PSM.js");
const { setLogging } = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");

module.exports = {
  languages,
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/circularize.js":
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */

module.exports = (page) => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];

  if (page.blocks) {
    page.blocks.forEach((block) => {
      block.paragraphs.forEach((paragraph) => {
        paragraph.lines.forEach((line) => {
          line.words.forEach((word) => {
            word.symbols.forEach((sym) => {
              symbols.push({
                ...sym, page, block, paragraph, line, word,
              });
            });
            words.push({
              ...word, page, block, paragraph, line,
            });
          });
          lines.push({
            ...line, page, block, paragraph,
          });
        });
        paragraphs.push({
          ...paragraph, page, block,
        });
      });
      blocks.push({
        ...block, page,
      });
    });
  }

  return {
    ...page, blocks, paragraphs, lines, words, symbols,
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getEnvironment.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const isElectron = __webpack_require__(/*! is-electron */ "./node_modules/is-electron/index.js");

module.exports = (key) => {
  const env = {};

  if (typeof WorkerGlobalScope !== 'undefined') {
    env.type = 'webworker';
  } else if (isElectron()) {
    env.type = 'electron';
  } else if (typeof window === 'object') {
    env.type = 'browser';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }

  if (typeof key === 'undefined') {
    return env;
  }

  return env[key];
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getId.js":
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (prefix, cnt) => (
  `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`
);


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/log.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let logging = false;

exports.logging = logging;

exports.setLogging = (_logging) => {
  logging = _logging;
};

exports.log = (...args) => (logging ? console.log.apply(this, args) : null);


/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/resolvePaths.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ "./node_modules/tesseract.js/src/utils/getEnvironment.js")('type') === 'browser';
const resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js") : s => s; // eslint-disable-line

module.exports = (options) => {
  const opts = { ...options };
  ['corePath', 'workerPath', 'langPath'].forEach((key) => {
    if (options[key]) {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { version } = __webpack_require__(/*! ../../../package.json */ "./node_modules/tesseract.js/package.json");
const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ "./node_modules/tesseract.js/src/constants/defaultOptions.js");

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: (typeof process !== 'undefined' && process.env.TESS_ENV === 'development')
    ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`)
    : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,
  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: null,
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js");
const spawnWorker = __webpack_require__(/*! ./spawnWorker */ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js");
const terminateWorker = __webpack_require__(/*! ./terminateWorker */ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js");
const onMessage = __webpack_require__(/*! ./onMessage */ "./node_modules/tesseract.js/src/worker/browser/onMessage.js");
const send = __webpack_require__(/*! ./send */ "./node_modules/tesseract.js/src/worker/browser/send.js");
const loadImage = __webpack_require__(/*! ./loadImage */ "./node_modules/tesseract.js/src/worker/browser/loadImage.js");

module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage,
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/loadImage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */
const readFromBlobOrFile = (blob) => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */
const loadImage = async (image) => {
  let data = image;
  if (typeof image === 'undefined') {
    return 'undefined';
  }

  if (typeof image === 'string') {
    // Base64 Image
    if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
      data = atob(image.split(',')[1])
        .split('')
        .map((c) => c.charCodeAt(0));
    } else {
      const resp = await fetch(resolveURL(image));
      data = await resp.arrayBuffer();
    }
  } else if (image instanceof HTMLElement) {
    if (image.tagName === 'IMG') {
      data = await loadImage(image.src);
    }
    if (image.tagName === 'VIDEO') {
      data = await loadImage(image.poster);
    }
    if (image.tagName === 'CANVAS') {
      await new Promise((resolve) => {
        image.toBlob(async (blob) => {
          data = await readFromBlobOrFile(blob);
          resolve();
        });
      });
    }
  } else if (image instanceof File || image instanceof Blob) {
    data = await readFromBlobOrFile(image);
  }

  return new Uint8Array(data);
};

module.exports = loadImage;


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/onMessage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (worker, handler) => {
  worker.onmessage = ({ data }) => { // eslint-disable-line
    handler(data);
  };
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/send.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = async (worker, packet) => {
  worker.postMessage(packet);
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({ workerPath, workerBlobURL }) => {
  let worker;
  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript',
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};


/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = (worker) => {
  worker.terminate();
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tesseract_js_1 = __importDefault(__webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js"));
const setImageSrc = (image, imageFile) => {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = function () {
            if (typeof fr.result !== 'string')
                return reject(null);
            image.src = fr.result;
            return resolve('');
        };
        fr.onerror = reject;
        fr.readAsDataURL(imageFile);
    });
};
const recognitionImageInputElement = document.querySelector('#recognition-image-input');
const recognitionConfidenceInputElement = document.querySelector('#recognition-confidence-input');
const recognitionProgressElement = document.querySelector('#recognition-progress');
const recognitionTextElement = document.querySelector('#recognition-text');
const originalImageElement = document.querySelector('#original-image');
const labeledImageElement = document.querySelector('#labeled-image');
if (!recognitionImageInputElement ||
    !recognitionTextElement ||
    !originalImageElement ||
    !labeledImageElement ||
    !recognitionProgressElement ||
    !recognitionConfidenceInputElement) {
    throw new Error('Missing elements');
}
recognitionImageInputElement.addEventListener('change', () => {
    if (!recognitionImageInputElement.files) {
        return null;
    }
    const file = recognitionImageInputElement.files[0];
    return tesseract_js_1.default
        .recognize(file, 'eng', {
        logger: ({ progress, status }) => {
            if (!progress || !status || status !== 'recognizing text')
                return null;
            const p = progress * 100;
            recognitionProgressElement.textContent = `${status}: ${p.toFixed(2)}%`;
            recognitionProgressElement.value = p;
        },
    })
        .then(async ({ data: res }) => {
        originalImageElement.innerHTML = '';
        labeledImageElement.innerHTML = '';
        recognitionTextElement.innerHTML = '';
        const paragraphsElements = res.paragraphs.map(({ text }) => {
            const p = document.createElement('p');
            p.textContent = text;
            return p;
        });
        recognitionTextElement.append(...paragraphsElements);
        const originalImage = document.createElement('img');
        await setImageSrc(originalImage, file);
        const labeledImage = originalImage.cloneNode(true);
        const wordsElements = res.words
            .filter(({ confidence }) => {
            return confidence > parseInt(recognitionConfidenceInputElement.value, 10);
        })
            .map((word) => {
            const div = document.createElement('div');
            const { x0, x1, y0, y1 } = word.bbox;
            div.classList.add('word-element');
            Object.assign(div.style, {
                top: `${y0}px`,
                left: `${x0}px`,
                width: `${x1 - x0}px`,
                height: `${y1 - y0}px`,
                border: '1px solid black',
                position: 'absolute',
            });
            return div;
        });
        originalImageElement.appendChild(originalImage);
        labeledImageElement.appendChild(labeledImage);
        labeledImageElement.append(...wordsElements);
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWVsZWN0cm9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwvcmVzb2x2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvVGVzc2VyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NvbnN0YW50cy9PRU0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29uc3RhbnRzL1BTTS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb25zdGFudHMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NvbnN0YW50cy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb25zdGFudHMvbGFuZ3VhZ2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NyZWF0ZUpvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jcmVhdGVTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY3JlYXRlV29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3V0aWxzL2NpcmN1bGFyaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3V0aWxzL2dldEVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3V0aWxzL2dldElkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy91dGlscy9yZXNvbHZlUGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvbG9hZEltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3dvcmtlci9icm93c2VyL29uTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy93b3JrZXIvYnJvd3Nlci9zZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3dvcmtlci9icm93c2VyL3NwYXduV29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3dvcmtlci9icm93c2VyL3Rlcm1pbmF0ZVdvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRSx1QkFBdUI7QUFDbEcsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFrRDs7QUFFNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3REFBd0Q7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxpQkFBaUI7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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LE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU8sYUFBYTtBQUNsQyxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU8sYUFBYTtBQUNsQyxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPLGFBQWE7QUFDbEMsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFP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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uL2VsZWN0cm9uL2lzc3Vlcy8yMjg4XG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xuICAgIC8vIFJlbmRlcmVyIHByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5wcm9jZXNzID09PSAnb2JqZWN0JyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIE1haW4gcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnICYmICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgdGhlIHVzZXIgYWdlbnQgd2hlbiB0aGUgYG5vZGVJbnRlZ3JhdGlvbmAgb3B0aW9uIGlzIHNldCB0byBmYWxzZVxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFbGVjdHJvbicpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRWxlY3Ryb247XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHsgb2JqW2tleV0gPSBkZXNjLnZhbHVlOyB9O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIH0pO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gIGRlZmluZVByb3BlcnR5KFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIFwiY29uc3RydWN0b3JcIixcbiAgICB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwgY29uZmlndXJhYmxlOiB0cnVlIH1cbiAgKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBlbnF1ZXVlIH0pO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZDtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCwgb3IgYSBtaXNzaW5nIC5uZXh0IG1laHRvZCwgYWx3YXlzIHRlcm1pbmF0ZSB0aGVcbiAgICAgIC8vIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNCBTaW1vbiBMeWRlbGxcclxuLy8gWDExICjigJxNSVTigJ0pIExpY2Vuc2VkLiAoU2VlIExJQ0VOU0UuKVxyXG5cclxudm9pZCAoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKGZhY3RvcnkpXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdC5yZXNvbHZlVXJsID0gZmFjdG9yeSgpXHJcbiAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xyXG5cclxuICBmdW5jdGlvbiByZXNvbHZlVXJsKC8qIC4uLnVybHMgKi8pIHtcclxuICAgIHZhciBudW1VcmxzID0gYXJndW1lbnRzLmxlbmd0aFxyXG5cclxuICAgIGlmIChudW1VcmxzID09PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS5cIilcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpXHJcbiAgICBiYXNlLmhyZWYgPSBhcmd1bWVudHNbMF1cclxuXHJcbiAgICBpZiAobnVtVXJscyA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYmFzZS5ocmVmXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF1cclxuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGJhc2UsIGhlYWQuZmlyc3RDaGlsZClcclxuXHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICB2YXIgcmVzb2x2ZWRcclxuXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbnVtVXJsczsgaW5kZXgrKykge1xyXG4gICAgICBhLmhyZWYgPSBhcmd1bWVudHNbaW5kZXhdXHJcbiAgICAgIHJlc29sdmVkID0gYS5ocmVmXHJcbiAgICAgIGJhc2UuaHJlZiA9IHJlc29sdmVkXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZC5yZW1vdmVDaGlsZChiYXNlKVxyXG5cclxuICAgIHJldHVybiByZXNvbHZlZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc29sdmVVcmxcclxuXHJcbn0pKTtcclxuIiwiY29uc3QgY3JlYXRlV29ya2VyID0gcmVxdWlyZSgnLi9jcmVhdGVXb3JrZXInKTtcblxuY29uc3QgcmVjb2duaXplID0gYXN5bmMgKGltYWdlLCBsYW5ncywgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3b3JrZXIgPSBhd2FpdCBjcmVhdGVXb3JrZXIob3B0aW9ucyk7XG4gIGF3YWl0IHdvcmtlci5sb2FkTGFuZ3VhZ2UobGFuZ3MpO1xuICBhd2FpdCB3b3JrZXIuaW5pdGlhbGl6ZShsYW5ncyk7XG4gIHJldHVybiB3b3JrZXIucmVjb2duaXplKGltYWdlKVxuICAgIC5maW5hbGx5KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGRldGVjdCA9IGFzeW5jIChpbWFnZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3b3JrZXIgPSBhd2FpdCBjcmVhdGVXb3JrZXIob3B0aW9ucyk7XG4gIGF3YWl0IHdvcmtlci5sb2FkTGFuZ3VhZ2UoJ29zZCcpO1xuICBhd2FpdCB3b3JrZXIuaW5pdGlhbGl6ZSgnb3NkJyk7XG4gIHJldHVybiB3b3JrZXIuZGV0ZWN0KGltYWdlKVxuICAgIC5maW5hbGx5KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWNvZ25pemUsXG4gIGRldGVjdCxcbn07XG4iLCIvKlxuICogT0VNID0gT0NSIEVuZ2luZSBNb2RlLCBhbmQgdGhlcmUgYXJlIDQgcG9zc2libGUgbW9kZXMuXG4gKlxuICogQnkgZGVmYXVsdCB0ZXNzZXJhY3QuanMgdXNlcyBMU1RNX09OTFkgbW9kZS5cbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBURVNTRVJBQ1RfT05MWTogMCxcbiAgTFNUTV9PTkxZOiAxLFxuICBURVNTRVJBQ1RfTFNUTV9DT01CSU5FRDogMixcbiAgREVGQVVMVDogMyxcbn07XG4iLCIvKlxuICogUFNNID0gUGFnZSBTZWdtZW50YXRpb24gTW9kZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgT1NEX09OTFk6ICcwJyxcbiAgQVVUT19PU0Q6ICcxJyxcbiAgQVVUT19PTkxZOiAnMicsXG4gIEFVVE86ICczJyxcbiAgU0lOR0xFX0NPTFVNTjogJzQnLFxuICBTSU5HTEVfQkxPQ0tfVkVSVF9URVhUOiAnNScsXG4gIFNJTkdMRV9CTE9DSzogJzYnLFxuICBTSU5HTEVfTElORTogJzcnLFxuICBTSU5HTEVfV09SRDogJzgnLFxuICBDSVJDTEVfV09SRDogJzknLFxuICBTSU5HTEVfQ0hBUjogJzEwJyxcbiAgU1BBUlNFX1RFWFQ6ICcxMScsXG4gIFNQQVJTRV9URVhUX09TRDogJzEyJyxcbiAgUkFXX0xJTkU6ICcxMycsXG59O1xuIiwiY29uc3QgT0VNID0gcmVxdWlyZSgnLi9PRU0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRPRU06IE9FTS5ERUZBVUxULFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAvKlxuICAgKiBkZWZhdWx0IHBhdGggZm9yIGRvd25sb2FkaW5nICoudHJhaW5lZGRhdGFcbiAgICovXG4gIGxhbmdQYXRoOiAnaHR0cHM6Ly90ZXNzZGF0YS5wcm9qZWN0bmFwdGhhLmNvbS80LjAuMCcsXG4gIC8qXG4gICAqIFVzZSBCbG9iVVJMIGZvciB3b3JrZXIgc2NyaXB0IGJ5IGRlZmF1bHRcbiAgICogVE9ETzogcmVtb3ZlIHRoaXMgb3B0aW9uXG4gICAqXG4gICAqL1xuICB3b3JrZXJCbG9iVVJMOiB0cnVlLFxuICBsb2dnZXI6ICgpID0+IHt9LFxufTtcbiIsIi8qXG4gKiBsYW5ndWFnZXMgd2l0aCBleGlzdGluZyB0ZXNzZXJhY3QgdHJhaW5lZGRhdGFcbiAqIGh0dHBzOi8vdGVzc2VyYWN0LW9jci5naXRodWIuaW8vdGVzc2RvYy9EYXRhLUZpbGVzI2RhdGEtZmlsZXMtZm9yLXZlcnNpb24tNDAwLW5vdmVtYmVyLTI5LTIwMTZcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExhbmd1YWdlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFGUiBBZnJpa2FhbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTUggQW1oYXJpY1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFSQSBBcmFiaWNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBU00gQXNzYW1lc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBWkUgQXplcmJhaWphbmlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBWkVfQ1lSTCBBemVyYmFpamFuaSAtIEN5cmlsbGljXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQkVMIEJlbGFydXNpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCRU4gQmVuZ2FsaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEJPRCBUaWJldGFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQk9TIEJvc25pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCVUwgQnVsZ2FyaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0FUIENhdGFsYW47IFZhbGVuY2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IENFQiBDZWJ1YW5vXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0VTIEN6ZWNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0hJX1NJTSBDaGluZXNlIC0gU2ltcGxpZmllZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IENISV9UUkEgQ2hpbmVzZSAtIFRyYWRpdGlvbmFsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0hSIENoZXJva2VlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ1lNIFdlbHNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gREFOIERhbmlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IERFVSBHZXJtYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBEWk8gRHpvbmdraGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFTEwgR3JlZWssIE1vZGVybiAoMTQ1My0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRU5HIEVuZ2xpc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFTk0gRW5nbGlzaCwgTWlkZGxlICgxMTAwLTE1MDApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRVBPIEVzcGVyYW50b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEVTVCBFc3RvbmlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEVVUyBCYXNxdWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGQVMgUGVyc2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTiBGaW5uaXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlJBIEZyZW5jaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZSSyBHZXJtYW4gRnJha3R1clxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZSTSBGcmVuY2gsIE1pZGRsZSAoY2EuIDE0MDAtMTYwMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHTEUgSXJpc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHTEcgR2FsaWNpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHUkMgR3JlZWssIEFuY2llbnQgKC0xNDUzKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdVSiBHdWphcmF0aVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEhBVCBIYWl0aWFuOyBIYWl0aWFuIENyZW9sZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEhFQiBIZWJyZXdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBISU4gSGluZGlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBIUlYgQ3JvYXRpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBIVU4gSHVuZ2FyaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSUtVIEludWt0aXR1dFxuICogQHByb3BlcnR5IHtzdHJpbmd9IElORCBJbmRvbmVzaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSVNMIEljZWxhbmRpY1xuICogQHByb3BlcnR5IHtzdHJpbmd9IElUQSBJdGFsaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSVRBX09MRCBJdGFsaWFuIC0gT2xkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSkFWIEphdmFuZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSlBOIEphcGFuZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gS0FOIEthbm5hZGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLQVQgR2VvcmdpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLQVRfT0xEIEdlb3JnaWFuIC0gT2xkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gS0FaIEthemFraFxuICogQHByb3BlcnR5IHtzdHJpbmd9IEtITSBDZW50cmFsIEtobWVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gS0lSIEtpcmdoaXo7IEt5cmd5elxuICogQHByb3BlcnR5IHtzdHJpbmd9IEtPUiBLb3JlYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLVVIgS3VyZGlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IExBTyBMYW9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMQVQgTGF0aW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMQVYgTGF0dmlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IExJVCBMaXRodWFuaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUFMIE1hbGF5YWxhbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1BUiBNYXJhdGhpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUtEIE1hY2Vkb25pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNTFQgTWFsdGVzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1TQSBNYWxheVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1ZQSBCdXJtZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTkVQIE5lcGFsaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE5MRCBEdXRjaDsgRmxlbWlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IE5PUiBOb3J3ZWdpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPUkkgT3JpeWFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQU4gUGFuamFiaTsgUHVuamFiaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBPTCBQb2xpc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQT1IgUG9ydHVndWVzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBVUyBQdXNodG87IFBhc2h0b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPTiBSb21hbmlhbjsgTW9sZGF2aWFuOyBNb2xkb3ZhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJVUyBSdXNzaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0FOIFNhbnNrcml0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0lOIFNpbmhhbGE7IFNpbmhhbGVzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNMSyBTbG92YWtcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTTFYgU2xvdmVuaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1BBIFNwYW5pc2g7IENhc3RpbGlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNQQV9PTEQgU3BhbmlzaDsgQ2FzdGlsaWFuIC0gT2xkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1FJIEFsYmFuaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1JQIFNlcmJpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTUlBfTEFUTiBTZXJiaWFuIC0gTGF0aW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTV0EgU3dhaGlsaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNXRSBTd2VkaXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1lSIFN5cmlhY1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFRBTSBUYW1pbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFRFTCBUZWx1Z3VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUR0sgVGFqaWtcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUR0wgVGFnYWxvZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFRIQSBUaGFpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVElSIFRpZ3JpbnlhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVFVSIFR1cmtpc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVSUcgVWlnaHVyOyBVeWdodXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVS1IgVWtyYWluaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVJEIFVyZHVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVWkIgVXpiZWtcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVWkJfQ1lSTCBVemJlayAtIEN5cmlsbGljXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklFIFZpZXRuYW1lc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBZSUQgWWlkZGlzaFxuICovXG5cbi8qKlxuICAqIEB0eXBlIHtMYW5ndWFnZXN9XG4gICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUZSOiAnYWZyJyxcbiAgQU1IOiAnYW1oJyxcbiAgQVJBOiAnYXJhJyxcbiAgQVNNOiAnYXNtJyxcbiAgQVpFOiAnYXplJyxcbiAgQVpFX0NZUkw6ICdhemVfY3lybCcsXG4gIEJFTDogJ2JlbCcsXG4gIEJFTjogJ2JlbicsXG4gIEJPRDogJ2JvZCcsXG4gIEJPUzogJ2JvcycsXG4gIEJVTDogJ2J1bCcsXG4gIENBVDogJ2NhdCcsXG4gIENFQjogJ2NlYicsXG4gIENFUzogJ2NlcycsXG4gIENISV9TSU06ICdjaGlfc2ltJyxcbiAgQ0hJX1RSQTogJ2NoaV90cmEnLFxuICBDSFI6ICdjaHInLFxuICBDWU06ICdjeW0nLFxuICBEQU46ICdkYW4nLFxuICBERVU6ICdkZXUnLFxuICBEWk86ICdkem8nLFxuICBFTEw6ICdlbGwnLFxuICBFTkc6ICdlbmcnLFxuICBFTk06ICdlbm0nLFxuICBFUE86ICdlcG8nLFxuICBFU1Q6ICdlc3QnLFxuICBFVVM6ICdldXMnLFxuICBGQVM6ICdmYXMnLFxuICBGSU46ICdmaW4nLFxuICBGUkE6ICdmcmEnLFxuICBGUks6ICdmcmsnLFxuICBGUk06ICdmcm0nLFxuICBHTEU6ICdnbGUnLFxuICBHTEc6ICdnbGcnLFxuICBHUkM6ICdncmMnLFxuICBHVUo6ICdndWonLFxuICBIQVQ6ICdoYXQnLFxuICBIRUI6ICdoZWInLFxuICBISU46ICdoaW4nLFxuICBIUlY6ICdocnYnLFxuICBIVU46ICdodW4nLFxuICBJS1U6ICdpa3UnLFxuICBJTkQ6ICdpbmQnLFxuICBJU0w6ICdpc2wnLFxuICBJVEE6ICdpdGEnLFxuICBJVEFfT0xEOiAnaXRhX29sZCcsXG4gIEpBVjogJ2phdicsXG4gIEpQTjogJ2pwbicsXG4gIEtBTjogJ2thbicsXG4gIEtBVDogJ2thdCcsXG4gIEtBVF9PTEQ6ICdrYXRfb2xkJyxcbiAgS0FaOiAna2F6JyxcbiAgS0hNOiAna2htJyxcbiAgS0lSOiAna2lyJyxcbiAgS09SOiAna29yJyxcbiAgS1VSOiAna3VyJyxcbiAgTEFPOiAnbGFvJyxcbiAgTEFUOiAnbGF0JyxcbiAgTEFWOiAnbGF2JyxcbiAgTElUOiAnbGl0JyxcbiAgTUFMOiAnbWFsJyxcbiAgTUFSOiAnbWFyJyxcbiAgTUtEOiAnbWtkJyxcbiAgTUxUOiAnbWx0JyxcbiAgTVNBOiAnbXNhJyxcbiAgTVlBOiAnbXlhJyxcbiAgTkVQOiAnbmVwJyxcbiAgTkxEOiAnbmxkJyxcbiAgTk9SOiAnbm9yJyxcbiAgT1JJOiAnb3JpJyxcbiAgUEFOOiAncGFuJyxcbiAgUE9MOiAncG9sJyxcbiAgUE9SOiAncG9yJyxcbiAgUFVTOiAncHVzJyxcbiAgUk9OOiAncm9uJyxcbiAgUlVTOiAncnVzJyxcbiAgU0FOOiAnc2FuJyxcbiAgU0lOOiAnc2luJyxcbiAgU0xLOiAnc2xrJyxcbiAgU0xWOiAnc2x2JyxcbiAgU1BBOiAnc3BhJyxcbiAgU1BBX09MRDogJ3NwYV9vbGQnLFxuICBTUUk6ICdzcWknLFxuICBTUlA6ICdzcnAnLFxuICBTUlBfTEFUTjogJ3NycF9sYXRuJyxcbiAgU1dBOiAnc3dhJyxcbiAgU1dFOiAnc3dlJyxcbiAgU1lSOiAnc3lyJyxcbiAgVEFNOiAndGFtJyxcbiAgVEVMOiAndGVsJyxcbiAgVEdLOiAndGdrJyxcbiAgVEdMOiAndGdsJyxcbiAgVEhBOiAndGhhJyxcbiAgVElSOiAndGlyJyxcbiAgVFVSOiAndHVyJyxcbiAgVUlHOiAndWlnJyxcbiAgVUtSOiAndWtyJyxcbiAgVVJEOiAndXJkJyxcbiAgVVpCOiAndXpiJyxcbiAgVVpCX0NZUkw6ICd1emJfY3lybCcsXG4gIFZJRTogJ3ZpZScsXG4gIFlJRDogJ3lpZCcsXG59O1xuIiwiY29uc3QgZ2V0SWQgPSByZXF1aXJlKCcuL3V0aWxzL2dldElkJyk7XG5cbmxldCBqb2JDb3VudGVyID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSAoe1xuICBpZDogX2lkLFxuICBhY3Rpb24sXG4gIHBheWxvYWQgPSB7fSxcbn0pID0+IHtcbiAgbGV0IGlkID0gX2lkO1xuICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgIGlkID0gZ2V0SWQoJ0pvYicsIGpvYkNvdW50ZXIpO1xuICAgIGpvYkNvdW50ZXIgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgYWN0aW9uLFxuICAgIHBheWxvYWQsXG4gIH07XG59O1xuIiwiY29uc3QgY3JlYXRlSm9iID0gcmVxdWlyZSgnLi9jcmVhdGVKb2InKTtcbmNvbnN0IHsgbG9nIH0gPSByZXF1aXJlKCcuL3V0aWxzL2xvZycpO1xuY29uc3QgZ2V0SWQgPSByZXF1aXJlKCcuL3V0aWxzL2dldElkJyk7XG5cbmxldCBzY2hlZHVsZXJDb3VudGVyID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlkID0gZ2V0SWQoJ1NjaGVkdWxlcicsIHNjaGVkdWxlckNvdW50ZXIpO1xuICBjb25zdCB3b3JrZXJzID0ge307XG4gIGNvbnN0IHJ1bm5pbmdXb3JrZXJzID0ge307XG4gIGxldCBqb2JRdWV1ZSA9IFtdO1xuXG4gIHNjaGVkdWxlckNvdW50ZXIgKz0gMTtcblxuICBjb25zdCBnZXRRdWV1ZUxlbiA9ICgpID0+IGpvYlF1ZXVlLmxlbmd0aDtcbiAgY29uc3QgZ2V0TnVtV29ya2VycyA9ICgpID0+IE9iamVjdC5rZXlzKHdvcmtlcnMpLmxlbmd0aDtcblxuICBjb25zdCBkZXF1ZXVlID0gKCkgPT4ge1xuICAgIGlmIChqb2JRdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHdJZHMgPSBPYmplY3Qua2V5cyh3b3JrZXJzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd0lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIHJ1bm5pbmdXb3JrZXJzW3dJZHNbaV1dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGpvYlF1ZXVlWzBdKHdvcmtlcnNbd0lkc1tpXV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHF1ZXVlID0gKGFjdGlvbiwgcGF5bG9hZCkgPT4gKFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGpvYiA9IGNyZWF0ZUpvYih7IGFjdGlvbiwgcGF5bG9hZCB9KTtcbiAgICAgIGpvYlF1ZXVlLnB1c2goYXN5bmMgKHcpID0+IHtcbiAgICAgICAgam9iUXVldWUuc2hpZnQoKTtcbiAgICAgICAgcnVubmluZ1dvcmtlcnNbdy5pZF0gPSBqb2I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzb2x2ZShhd2FpdCB3W2FjdGlvbl0uYXBwbHkodGhpcywgWy4uLnBheWxvYWQsIGpvYi5pZF0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZGVsZXRlIHJ1bm5pbmdXb3JrZXJzW3cuaWRdO1xuICAgICAgICAgIGRlcXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsb2coYFske2lkfV06IEFkZCAke2pvYi5pZH0gdG8gSm9iUXVldWVgKTtcbiAgICAgIGxvZyhgWyR7aWR9XTogSm9iUXVldWUgbGVuZ3RoPSR7am9iUXVldWUubGVuZ3RofWApO1xuICAgICAgZGVxdWV1ZSgpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3QgYWRkV29ya2VyID0gKHcpID0+IHtcbiAgICB3b3JrZXJzW3cuaWRdID0gdztcbiAgICBsb2coYFske2lkfV06IEFkZCAke3cuaWR9YCk7XG4gICAgbG9nKGBbJHtpZH1dOiBOdW1iZXIgb2Ygd29ya2Vycz0ke2dldE51bVdvcmtlcnMoKX1gKTtcbiAgICBkZXF1ZXVlKCk7XG4gICAgcmV0dXJuIHcuaWQ7XG4gIH07XG5cbiAgY29uc3QgYWRkSm9iID0gYXN5bmMgKGFjdGlvbiwgLi4ucGF5bG9hZCkgPT4ge1xuICAgIGlmIChnZXROdW1Xb3JrZXJzKCkgPT09IDApIHtcbiAgICAgIHRocm93IEVycm9yKGBbJHtpZH1dOiBZb3UgbmVlZCB0byBoYXZlIGF0IGxlYXN0IG9uZSB3b3JrZXIgYmVmb3JlIGFkZGluZyBqb2JzYCk7XG4gICAgfVxuICAgIHJldHVybiBxdWV1ZShhY3Rpb24sIHBheWxvYWQpO1xuICB9O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBPYmplY3Qua2V5cyh3b3JrZXJzKS5mb3JFYWNoKGFzeW5jICh3aWQpID0+IHtcbiAgICAgIGF3YWl0IHdvcmtlcnNbd2lkXS50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbiAgICBqb2JRdWV1ZSA9IFtdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkV29ya2VyLFxuICAgIGFkZEpvYixcbiAgICB0ZXJtaW5hdGUsXG4gICAgZ2V0UXVldWVMZW4sXG4gICAgZ2V0TnVtV29ya2VycyxcbiAgfTtcbn07XG4iLCJjb25zdCByZXNvbHZlUGF0aHMgPSByZXF1aXJlKCcuL3V0aWxzL3Jlc29sdmVQYXRocycpO1xuY29uc3QgY2lyY3VsYXJpemUgPSByZXF1aXJlKCcuL3V0aWxzL2NpcmN1bGFyaXplJyk7XG5jb25zdCBjcmVhdGVKb2IgPSByZXF1aXJlKCcuL2NyZWF0ZUpvYicpO1xuY29uc3QgeyBsb2cgfSA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nJyk7XG5jb25zdCBnZXRJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0SWQnKTtcbmNvbnN0IHsgZGVmYXVsdE9FTSB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMvY29uZmlnJyk7XG5jb25zdCB7XG4gIGRlZmF1bHRPcHRpb25zLFxuICBzcGF3bldvcmtlcixcbiAgdGVybWluYXRlV29ya2VyLFxuICBvbk1lc3NhZ2UsXG4gIGxvYWRJbWFnZSxcbiAgc2VuZCxcbn0gPSByZXF1aXJlKCcuL3dvcmtlci9ub2RlJyk7XG5cbmxldCB3b3JrZXJDb3VudGVyID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAoX29wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBpZCA9IGdldElkKCdXb3JrZXInLCB3b3JrZXJDb3VudGVyKTtcbiAgY29uc3Qge1xuICAgIGxvZ2dlcixcbiAgICBlcnJvckhhbmRsZXIsXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gcmVzb2x2ZVBhdGhzKHtcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAuLi5fb3B0aW9ucyxcbiAgfSk7XG4gIGNvbnN0IHJlc29sdmVzID0ge307XG4gIGNvbnN0IHJlamVjdHMgPSB7fTtcblxuICBsZXQgd29ya2VyUmVzUmVqZWN0O1xuICBsZXQgd29ya2VyUmVzUmVzb2x2ZTtcbiAgY29uc3Qgd29ya2VyUmVzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdvcmtlclJlc1Jlc29sdmUgPSByZXNvbHZlO1xuICAgIHdvcmtlclJlc1JlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIGNvbnN0IHdvcmtlckVycm9yID0gKGV2ZW50KSA9PiB7IHdvcmtlclJlc1JlamVjdChldmVudC5tZXNzYWdlKTsgfTtcblxuICBsZXQgd29ya2VyID0gc3Bhd25Xb3JrZXIob3B0aW9ucyk7XG4gIHdvcmtlci5vbmVycm9yID0gd29ya2VyRXJyb3I7XG5cbiAgd29ya2VyQ291bnRlciArPSAxO1xuXG4gIGNvbnN0IHNldFJlc29sdmUgPSAoYWN0aW9uLCByZXMpID0+IHtcbiAgICByZXNvbHZlc1thY3Rpb25dID0gcmVzO1xuICB9O1xuXG4gIGNvbnN0IHNldFJlamVjdCA9IChhY3Rpb24sIHJlaikgPT4ge1xuICAgIHJlamVjdHNbYWN0aW9uXSA9IHJlajtcbiAgfTtcblxuICBjb25zdCBzdGFydEpvYiA9ICh7IGlkOiBqb2JJZCwgYWN0aW9uLCBwYXlsb2FkIH0pID0+IChcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2coYFske2lkfV06IFN0YXJ0ICR7am9iSWR9LCBhY3Rpb249JHthY3Rpb259YCk7XG4gICAgICBzZXRSZXNvbHZlKGFjdGlvbiwgcmVzb2x2ZSk7XG4gICAgICBzZXRSZWplY3QoYWN0aW9uLCByZWplY3QpO1xuICAgICAgc2VuZCh3b3JrZXIsIHtcbiAgICAgICAgd29ya2VySWQ6IGlkLFxuICAgICAgICBqb2JJZCxcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4gKFxuICAgIGNvbnNvbGUud2FybignYGxvYWRgIGlzIGRlcHJlY2lhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIGNvZGUgKHdvcmtlcnMgbm93IGNvbWUgcHJlLWxvYWRlZCknKVxuICApO1xuXG4gIGNvbnN0IGxvYWRJbnRlcm5hbCA9IChqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsIGFjdGlvbjogJ2xvYWQnLCBwYXlsb2FkOiB7IG9wdGlvbnMgfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCB3cml0ZVRleHQgPSAocGF0aCwgdGV4dCwgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnRlMnLFxuICAgICAgcGF5bG9hZDogeyBtZXRob2Q6ICd3cml0ZUZpbGUnLCBhcmdzOiBbcGF0aCwgdGV4dF0gfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCByZWFkVGV4dCA9IChwYXRoLCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdGUycsXG4gICAgICBwYXlsb2FkOiB7IG1ldGhvZDogJ3JlYWRGaWxlJywgYXJnczogW3BhdGgsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9XSB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSAocGF0aCwgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnRlMnLFxuICAgICAgcGF5bG9hZDogeyBtZXRob2Q6ICd1bmxpbmsnLCBhcmdzOiBbcGF0aF0gfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCBGUyA9IChtZXRob2QsIGFyZ3MsIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ0ZTJyxcbiAgICAgIHBheWxvYWQ6IHsgbWV0aG9kLCBhcmdzIH0sXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgbG9hZExhbmd1YWdlID0gKGxhbmdzID0gJ2VuZycsIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ2xvYWRMYW5ndWFnZScsXG4gICAgICBwYXlsb2FkOiB7IGxhbmdzLCBvcHRpb25zIH0sXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChsYW5ncyA9ICdlbmcnLCBvZW0gPSBkZWZhdWx0T0VNLCBjb25maWcsIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ2luaXRpYWxpemUnLFxuICAgICAgcGF5bG9hZDogeyBsYW5ncywgb2VtLCBjb25maWcgfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCBzZXRQYXJhbWV0ZXJzID0gKHBhcmFtcyA9IHt9LCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdzZXRQYXJhbWV0ZXJzJyxcbiAgICAgIHBheWxvYWQ6IHsgcGFyYW1zIH0sXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgcmVjb2duaXplID0gYXN5bmMgKGltYWdlLCBvcHRzID0ge30sIG91dHB1dCA9IHtcbiAgICBibG9ja3M6IHRydWUsIHRleHQ6IHRydWUsIGhvY3I6IHRydWUsIHRzdjogdHJ1ZSxcbiAgfSwgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAncmVjb2duaXplJyxcbiAgICAgIHBheWxvYWQ6IHsgaW1hZ2U6IGF3YWl0IGxvYWRJbWFnZShpbWFnZSksIG9wdGlvbnM6IG9wdHMsIG91dHB1dCB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IGdldFBERiA9ICh0aXRsZSA9ICdUZXNzZXJhY3QgT0NSIFJlc3VsdCcsIHRleHRvbmx5ID0gZmFsc2UsIGpvYklkKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2BnZXRQREZgIGZ1bmN0aW9uIGlzIGRlcHJlY2lhdGVkLiBgcmVjb2duaXplYCBvcHRpb24gYHNhdmVQREZgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdnZXRQREYnLFxuICAgICAgcGF5bG9hZDogeyB0aXRsZSwgdGV4dG9ubHkgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgZGV0ZWN0ID0gYXN5bmMgKGltYWdlLCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdkZXRlY3QnLFxuICAgICAgcGF5bG9hZDogeyBpbWFnZTogYXdhaXQgbG9hZEltYWdlKGltYWdlKSB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod29ya2VyICE9PSBudWxsKSB7XG4gICAgICAvKlxuICAgICAgYXdhaXQgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgICAgaWQ6IGpvYklkLFxuICAgICAgICBhY3Rpb246ICd0ZXJtaW5hdGUnLFxuICAgICAgfSkpO1xuICAgICAgKi9cbiAgICAgIHRlcm1pbmF0ZVdvcmtlcih3b3JrZXIpO1xuICAgICAgd29ya2VyID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIG9uTWVzc2FnZSh3b3JrZXIsICh7XG4gICAgd29ya2VySWQsIGpvYklkLCBzdGF0dXMsIGFjdGlvbiwgZGF0YSxcbiAgfSkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdyZXNvbHZlJykge1xuICAgICAgbG9nKGBbJHt3b3JrZXJJZH1dOiBDb21wbGV0ZSAke2pvYklkfWApO1xuICAgICAgbGV0IGQgPSBkYXRhO1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3JlY29nbml6ZScpIHtcbiAgICAgICAgZCA9IGNpcmN1bGFyaXplKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdnZXRQREYnKSB7XG4gICAgICAgIGQgPSBBcnJheS5mcm9tKHsgLi4uZGF0YSwgbGVuZ3RoOiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggfSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlc1thY3Rpb25dKHsgam9iSWQsIGRhdGE6IGQgfSk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdyZWplY3QnKSB7XG4gICAgICByZWplY3RzW2FjdGlvbl0oZGF0YSk7XG4gICAgICBpZiAoYWN0aW9uID09PSAnbG9hZCcpIHdvcmtlclJlc1JlamVjdChkYXRhKTtcbiAgICAgIGlmIChlcnJvckhhbmRsZXIpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdwcm9ncmVzcycpIHtcbiAgICAgIGxvZ2dlcih7IC4uLmRhdGEsIHVzZXJKb2JJZDogam9iSWQgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCByZXNvbHZlT2JqID0ge1xuICAgIGlkLFxuICAgIHdvcmtlcixcbiAgICBzZXRSZXNvbHZlLFxuICAgIHNldFJlamVjdCxcbiAgICBsb2FkLFxuICAgIHdyaXRlVGV4dCxcbiAgICByZWFkVGV4dCxcbiAgICByZW1vdmVGaWxlLFxuICAgIEZTLFxuICAgIGxvYWRMYW5ndWFnZSxcbiAgICBpbml0aWFsaXplLFxuICAgIHNldFBhcmFtZXRlcnMsXG4gICAgcmVjb2duaXplLFxuICAgIGdldFBERixcbiAgICBkZXRlY3QsXG4gICAgdGVybWluYXRlLFxuICB9O1xuXG4gIGxvYWRJbnRlcm5hbCgpLnRoZW4oKCkgPT4gd29ya2VyUmVzUmVzb2x2ZShyZXNvbHZlT2JqKSkuY2F0Y2goKCkgPT4ge30pO1xuXG4gIHJldHVybiB3b3JrZXJSZXM7XG59O1xuIiwiLyoqXG4gKlxuICogRW50cnkgcG9pbnQgZm9yIHRlc3NlcmFjdC5qcywgc2hvdWxkIGJlIHRoZSBlbnRyeSB3aGVuIGJ1bmRsaW5nLlxuICpcbiAqIEBmaWxlb3ZlcnZpZXcgZW50cnkgcG9pbnQgZm9yIHRlc3NlcmFjdC5qc1xuICogQGF1dGhvciBLZXZpbiBLd29rIDxhbnRpbWF0dGVyMTVAZ21haWwuY29tPlxuICogQGF1dGhvciBHdWlsbGVybW8gV2Vic3RlciA8Z3VpQG1pdC5lZHU+XG4gKiBAYXV0aG9yIEplcm9tZSBXdSA8amVyb21ld3VzQGdtYWlsLmNvbT5cbiAqL1xucmVxdWlyZSgncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJyk7XG5jb25zdCBjcmVhdGVTY2hlZHVsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVNjaGVkdWxlcicpO1xuY29uc3QgY3JlYXRlV29ya2VyID0gcmVxdWlyZSgnLi9jcmVhdGVXb3JrZXInKTtcbmNvbnN0IFRlc3NlcmFjdCA9IHJlcXVpcmUoJy4vVGVzc2VyYWN0Jyk7XG5jb25zdCBsYW5ndWFnZXMgPSByZXF1aXJlKCcuL2NvbnN0YW50cy9sYW5ndWFnZXMnKTtcbmNvbnN0IE9FTSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzL09FTScpO1xuY29uc3QgUFNNID0gcmVxdWlyZSgnLi9jb25zdGFudHMvUFNNJyk7XG5jb25zdCB7IHNldExvZ2dpbmcgfSA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsYW5ndWFnZXMsXG4gIE9FTSxcbiAgUFNNLFxuICBjcmVhdGVTY2hlZHVsZXIsXG4gIGNyZWF0ZVdvcmtlcixcbiAgc2V0TG9nZ2luZyxcbiAgLi4uVGVzc2VyYWN0LFxufTtcbiIsIi8qKlxuICogSW4gdGhlIHJlY29nbml0aW9uIHJlc3VsdCBvZiB0ZXNzZXJhY3QsIHRoZXJlXG4gKiBpcyBhIGRlZXAgSlNPTiBvYmplY3QgZm9yIGRldGFpbHMsIGl0IGhhcyBhcm91bmRcbiAqXG4gKiBUaGUgcmVzdWx0IG9mIGR1bXAuanMgaXMgYSBiaWcgSlNPTiB0cmVlXG4gKiB3aGljaCBjYW4gYmUgZWFzaWx5IHNlcmlhbGl6ZWQgKGZvciBpbnN0YW5jZVxuICogdG8gYmUgc2VudCBmcm9tIGEgd2Vid29ya2VyIHRvIHRoZSBtYWluIGFwcFxuICogb3IgdGhyb3VnaCBOb2RlJ3MgSVBDKSwgYnV0IHdlIHdhbnRcbiAqIGEgKGNpcmN1bGFyKSBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmdcbiAqIHRocm91Z2ggdGhlIGRhdGEuXG4gKlxuICogQGZpbGVvdmVydmlldyBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmcgdGhyb3VnaCBkYXRhXG4gKiBAYXV0aG9yIEtldmluIEt3b2sgPGFudGltYXR0ZXIxNUBnbWFpbC5jb20+XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBXZWJzdGVyIDxndWlAbWl0LmVkdT5cbiAqIEBhdXRob3IgSmVyb21lIFd1IDxqZXJvbWV3dXNAZ21haWwuY29tPlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gKHBhZ2UpID0+IHtcbiAgY29uc3QgYmxvY2tzID0gW107XG4gIGNvbnN0IHBhcmFncmFwaHMgPSBbXTtcbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgY29uc3Qgd29yZHMgPSBbXTtcbiAgY29uc3Qgc3ltYm9scyA9IFtdO1xuXG4gIGlmIChwYWdlLmJsb2Nrcykge1xuICAgIHBhZ2UuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBibG9jay5wYXJhZ3JhcGhzLmZvckVhY2goKHBhcmFncmFwaCkgPT4ge1xuICAgICAgICBwYXJhZ3JhcGgubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgIGxpbmUud29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgd29yZC5zeW1ib2xzLmZvckVhY2goKHN5bSkgPT4ge1xuICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLnN5bSwgcGFnZSwgYmxvY2ssIHBhcmFncmFwaCwgbGluZSwgd29yZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdvcmRzLnB1c2goe1xuICAgICAgICAgICAgICAuLi53b3JkLCBwYWdlLCBibG9jaywgcGFyYWdyYXBoLCBsaW5lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICAuLi5saW5lLCBwYWdlLCBibG9jaywgcGFyYWdyYXBoLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyYWdyYXBocy5wdXNoKHtcbiAgICAgICAgICAuLi5wYXJhZ3JhcGgsIHBhZ2UsIGJsb2NrLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYmxvY2tzLnB1c2goe1xuICAgICAgICAuLi5ibG9jaywgcGFnZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wYWdlLCBibG9ja3MsIHBhcmFncmFwaHMsIGxpbmVzLCB3b3Jkcywgc3ltYm9scyxcbiAgfTtcbn07XG4iLCJjb25zdCBpc0VsZWN0cm9uID0gcmVxdWlyZSgnaXMtZWxlY3Ryb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoa2V5KSA9PiB7XG4gIGNvbnN0IGVudiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW52LnR5cGUgPSAnd2Vid29ya2VyJztcbiAgfSBlbHNlIGlmIChpc0VsZWN0cm9uKCkpIHtcbiAgICBlbnYudHlwZSA9ICdlbGVjdHJvbic7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICBlbnYudHlwZSA9ICdicm93c2VyJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbnYudHlwZSA9ICdub2RlJztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbnY7XG4gIH1cblxuICByZXR1cm4gZW52W2tleV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAocHJlZml4LCBjbnQpID0+IChcbiAgYCR7cHJlZml4fS0ke2NudH0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgzLCA4KX1gXG4pO1xuIiwibGV0IGxvZ2dpbmcgPSBmYWxzZTtcblxuZXhwb3J0cy5sb2dnaW5nID0gbG9nZ2luZztcblxuZXhwb3J0cy5zZXRMb2dnaW5nID0gKF9sb2dnaW5nKSA9PiB7XG4gIGxvZ2dpbmcgPSBfbG9nZ2luZztcbn07XG5cbmV4cG9ydHMubG9nID0gKC4uLmFyZ3MpID0+IChsb2dnaW5nID8gY29uc29sZS5sb2cuYXBwbHkodGhpcywgYXJncykgOiBudWxsKTtcbiIsImNvbnN0IGlzQnJvd3NlciA9IHJlcXVpcmUoJy4vZ2V0RW52aXJvbm1lbnQnKSgndHlwZScpID09PSAnYnJvd3Nlcic7XG5jb25zdCByZXNvbHZlVVJMID0gaXNCcm93c2VyID8gcmVxdWlyZSgncmVzb2x2ZS11cmwnKSA6IHMgPT4gczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5tb2R1bGUuZXhwb3J0cyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgWydjb3JlUGF0aCcsICd3b3JrZXJQYXRoJywgJ2xhbmdQYXRoJ10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkge1xuICAgICAgb3B0c1trZXldID0gcmVzb2x2ZVVSTChvcHRzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRzO1xufTtcbiIsImNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuY29uc3QgeyB2ZXJzaW9uIH0gPSByZXF1aXJlKCcuLi8uLi8uLi9wYWNrYWdlLmpzb24nKTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzL2RlZmF1bHRPcHRpb25zJyk7XG5cbi8qXG4gKiBEZWZhdWx0IG9wdGlvbnMgZm9yIGJyb3dzZXIgd29ya2VyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgd29ya2VyUGF0aDogKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5URVNTX0VOViA9PT0gJ2RldmVsb3BtZW50JylcbiAgICA/IHJlc29sdmVVUkwoYC9kaXN0L3dvcmtlci5kZXYuanM/bm9jYWNoZT0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDMpfWApXG4gICAgOiBgaHR0cHM6Ly91bnBrZy5jb20vdGVzc2VyYWN0LmpzQHYke3ZlcnNpb259L2Rpc3Qvd29ya2VyLm1pbi5qc2AsXG4gIC8qXG4gICAqIElmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFdlYkFzc2VtYmx5LFxuICAgKiBsb2FkIEFTTSB2ZXJzaW9uIGluc3RlYWRcbiAgICovXG4gIGNvcmVQYXRoOiBudWxsLFxufTtcbiIsIi8qKlxuICpcbiAqIFRlc3NlcmFjdCBXb3JrZXIgYWRhcHRlciBmb3IgYnJvd3NlclxuICpcbiAqIEBmaWxlb3ZlcnZpZXcgVGVzc2VyYWN0IFdvcmtlciBhZGFwdGVyIGZvciBicm93c2VyXG4gKiBAYXV0aG9yIEtldmluIEt3b2sgPGFudGltYXR0ZXIxNUBnbWFpbC5jb20+XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBXZWJzdGVyIDxndWlAbWl0LmVkdT5cbiAqIEBhdXRob3IgSmVyb21lIFd1IDxqZXJvbWV3dXNAZ21haWwuY29tPlxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdE9wdGlvbnMnKTtcbmNvbnN0IHNwYXduV29ya2VyID0gcmVxdWlyZSgnLi9zcGF3bldvcmtlcicpO1xuY29uc3QgdGVybWluYXRlV29ya2VyID0gcmVxdWlyZSgnLi90ZXJtaW5hdGVXb3JrZXInKTtcbmNvbnN0IG9uTWVzc2FnZSA9IHJlcXVpcmUoJy4vb25NZXNzYWdlJyk7XG5jb25zdCBzZW5kID0gcmVxdWlyZSgnLi9zZW5kJyk7XG5jb25zdCBsb2FkSW1hZ2UgPSByZXF1aXJlKCcuL2xvYWRJbWFnZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdE9wdGlvbnMsXG4gIHNwYXduV29ya2VyLFxuICB0ZXJtaW5hdGVXb3JrZXIsXG4gIG9uTWVzc2FnZSxcbiAgc2VuZCxcbiAgbG9hZEltYWdlLFxufTtcbiIsImNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuXG4vKipcbiAqIHJlYWRGcm9tQmxvYk9yRmlsZVxuICpcbiAqIEBuYW1lIHJlYWRGcm9tQmxvYk9yRmlsZVxuICogQGZ1bmN0aW9uXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqL1xuY29uc3QgcmVhZEZyb21CbG9iT3JGaWxlID0gKGJsb2IpID0+IChcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShmaWxlUmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSAoeyB0YXJnZXQ6IHsgZXJyb3I6IHsgY29kZSB9IH0gfSkgPT4ge1xuICAgICAgcmVqZWN0KEVycm9yKGBGaWxlIGNvdWxkIG5vdCBiZSByZWFkISBDb2RlPSR7Y29kZX1gKSk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICB9KVxuKTtcblxuLyoqXG4gKiBsb2FkSW1hZ2VcbiAqXG4gKiBAbmFtZSBsb2FkSW1hZ2VcbiAqIEBmdW5jdGlvbiBsb2FkIGltYWdlIGZyb20gZGlmZmVyZW50IHNvdXJjZVxuICogQGFjY2VzcyBwcml2YXRlXG4gKi9cbmNvbnN0IGxvYWRJbWFnZSA9IGFzeW5jIChpbWFnZSkgPT4ge1xuICBsZXQgZGF0YSA9IGltYWdlO1xuICBpZiAodHlwZW9mIGltYWdlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gQmFzZTY0IEltYWdlXG4gICAgaWYgKC9kYXRhOmltYWdlXFwvKFthLXpBLVpdKik7YmFzZTY0LChbXlwiXSopLy50ZXN0KGltYWdlKSkge1xuICAgICAgZGF0YSA9IGF0b2IoaW1hZ2Uuc3BsaXQoJywnKVsxXSlcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2gocmVzb2x2ZVVSTChpbWFnZSkpO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3AuYXJyYXlCdWZmZXIoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChpbWFnZS50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgZGF0YSA9IGF3YWl0IGxvYWRJbWFnZShpbWFnZS5zcmMpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UudGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgZGF0YSA9IGF3YWl0IGxvYWRJbWFnZShpbWFnZS5wb3N0ZXIpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UudGFnTmFtZSA9PT0gJ0NBTlZBUycpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGltYWdlLnRvQmxvYihhc3luYyAoYmxvYikgPT4ge1xuICAgICAgICAgIGRhdGEgPSBhd2FpdCByZWFkRnJvbUJsb2JPckZpbGUoYmxvYik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbWFnZSBpbnN0YW5jZW9mIEZpbGUgfHwgaW1hZ2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgZGF0YSA9IGF3YWl0IHJlYWRGcm9tQmxvYk9yRmlsZShpbWFnZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRJbWFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKHdvcmtlciwgaGFuZGxlcikgPT4ge1xuICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBoYW5kbGVyKGRhdGEpO1xuICB9O1xufTtcbiIsIi8qKlxuICogc2VuZFxuICpcbiAqIEBuYW1lIHNlbmRcbiAqIEBmdW5jdGlvbiBzZW5kIHBhY2tldCB0byB3b3JrZXIgYW5kIGNyZWF0ZSBhIGpvYlxuICogQGFjY2VzcyBwdWJsaWNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAod29ya2VyLCBwYWNrZXQpID0+IHtcbiAgd29ya2VyLnBvc3RNZXNzYWdlKHBhY2tldCk7XG59O1xuIiwiLyoqXG4gKiBzcGF3bldvcmtlclxuICpcbiAqIEBuYW1lIHNwYXduV29ya2VyXG4gKiBAZnVuY3Rpb24gY3JlYXRlIGEgbmV3IFdvcmtlciBpbiBicm93c2VyXG4gKiBAYWNjZXNzIHB1YmxpY1xuICovXG5tb2R1bGUuZXhwb3J0cyA9ICh7IHdvcmtlclBhdGgsIHdvcmtlckJsb2JVUkwgfSkgPT4ge1xuICBsZXQgd29ya2VyO1xuICBpZiAoQmxvYiAmJiBVUkwgJiYgd29ya2VyQmxvYlVSTCkge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYGltcG9ydFNjcmlwdHMoXCIke3dvcmtlclBhdGh9XCIpO2BdLCB7XG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgfSk7XG4gICAgd29ya2VyID0gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgfSBlbHNlIHtcbiAgICB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlclBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHdvcmtlcjtcbn07XG4iLCIvKipcbiAqIHRlcm1pbmF0ZVdvcmtlclxuICpcbiAqIEBuYW1lIHRlcm1pbmF0ZVdvcmtlclxuICogQGZ1bmN0aW9uIHRlcm1pbmF0ZSB3b3JrZXJcbiAqIEBhY2Nlc3MgcHVibGljXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKHdvcmtlcikgPT4ge1xuICB3b3JrZXIudGVybWluYXRlKCk7XG59O1xuIiwiaW1wb3J0IHRlc3NlcmFjdCBmcm9tICd0ZXNzZXJhY3QuanMnXG5cbmNvbnN0IHNldEltYWdlU3JjID0gKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCBpbWFnZUZpbGU6IEZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0eXBlb2YgZnIucmVzdWx0ICE9PSAnc3RyaW5nJykgcmV0dXJuIHJlamVjdChudWxsKTtcbiAgICAgIGltYWdlLnNyYyA9IGZyLnJlc3VsdDtcbiAgICAgIHJldHVybiByZXNvbHZlKCcnKTtcbiAgICB9O1xuICAgIGZyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgZnIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjb2duaXRpb24taW1hZ2UtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgcmVjb2duaXRpb25Db25maWRlbmNlSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY29nbml0aW9uLWNvbmZpZGVuY2UtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgcmVjb2duaXRpb25Qcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjb2duaXRpb24tcHJvZ3Jlc3MnKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuY29uc3QgcmVjb2duaXRpb25UZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNvZ25pdGlvbi10ZXh0JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBvcmlnaW5hbEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmlnaW5hbC1pbWFnZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgbGFiZWxlZEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbGVkLWltYWdlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbmlmIChcbiAgIXJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQgfHxcbiAgIXJlY29nbml0aW9uVGV4dEVsZW1lbnQgfHxcbiAgIW9yaWdpbmFsSW1hZ2VFbGVtZW50IHx8XG4gICFsYWJlbGVkSW1hZ2VFbGVtZW50IHx8XG4gICFyZWNvZ25pdGlvblByb2dyZXNzRWxlbWVudCB8fFxuICAhcmVjb2duaXRpb25Db25maWRlbmNlSW5wdXRFbGVtZW50XG4pIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnRzJyk7XG59XG5cbnJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBpZiAoIXJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQuZmlsZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZpbGUgPSByZWNvZ25pdGlvbkltYWdlSW5wdXRFbGVtZW50LmZpbGVzWzBdO1xuXG4gIHJldHVybiB0ZXNzZXJhY3RcbiAgICAucmVjb2duaXplKGZpbGUsICdlbmcnLCB7XG4gICAgICBsb2dnZXI6ICh7IHByb2dyZXNzLCBzdGF0dXMgfSkgPT4ge1xuICAgICAgICBpZiAoIXByb2dyZXNzIHx8ICFzdGF0dXMgfHwgc3RhdHVzICE9PSAncmVjb2duaXppbmcgdGV4dCcpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBwID0gIHByb2dyZXNzICogMTAwO1xuICAgICAgICByZWNvZ25pdGlvblByb2dyZXNzRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3N0YXR1c306ICR7cC50b0ZpeGVkKDIpfSVgO1xuICAgICAgICByZWNvZ25pdGlvblByb2dyZXNzRWxlbWVudC52YWx1ZSA9IHA7XG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oYXN5bmMgKHsgZGF0YTogcmVzIH0pID0+IHtcbiAgICAgIG9yaWdpbmFsSW1hZ2VFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgbGFiZWxlZEltYWdlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlY29nbml0aW9uVGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIGNvbnN0IHBhcmFncmFwaHNFbGVtZW50cyA9IHJlcy5wYXJhZ3JhcGhzLm1hcCgoeyB0ZXh0IH0pID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSk7XG5cbiAgICAgIHJlY29nbml0aW9uVGV4dEVsZW1lbnQuYXBwZW5kKC4uLnBhcmFncmFwaHNFbGVtZW50cyk7XG5cbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgYXdhaXQgc2V0SW1hZ2VTcmMob3JpZ2luYWxJbWFnZSwgZmlsZSk7XG5cbiAgICAgIGNvbnN0IGxhYmVsZWRJbWFnZSA9IG9yaWdpbmFsSW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBjb25zdCB3b3Jkc0VsZW1lbnRzID0gcmVzLndvcmRzXG4gICAgICAgIC5maWx0ZXIoKHsgY29uZmlkZW5jZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZGVuY2UgPiBwYXJzZUludChyZWNvZ25pdGlvbkNvbmZpZGVuY2VJbnB1dEVsZW1lbnQudmFsdWUsIDEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgod29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNvbnN0IHsgeDAsIHgxLCB5MCwgeTEgfSA9IHdvcmQuYmJveDtcblxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd3b3JkLWVsZW1lbnQnKTtcblxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGl2LnN0eWxlLCB7XG4gICAgICAgICAgICB0b3A6IGAke3kwfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3gwfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt4MSAtIHgwfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7eTEgLSB5MH1weGAsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9KTtcblxuICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQob3JpZ2luYWxJbWFnZSk7XG4gICAgICBsYWJlbGVkSW1hZ2VFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsZWRJbWFnZSk7XG4gICAgICBsYWJlbGVkSW1hZ2VFbGVtZW50LmFwcGVuZCguLi53b3Jkc0VsZW1lbnRzKTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==