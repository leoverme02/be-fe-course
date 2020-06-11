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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _module = __webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// export default function hello() {
//   console.log('Hello from JS Module');
// }

function checkValid(chkField) {
    var fieldToCheck = document.getElementById(chkField).value;
    if (!fieldToCheck || fieldToCheck.length < 5) {
        errorMsg = "Field must be at least 5 characters";
    } else {
        errorMsg = '';
    }
    displayError(errorMsg);
}

function checkIsbn() {
    var isbnText = document.getElementById("book_isbn");
    if (isValidIsbn(isbnText.value)) {
        console.log("Valid ISBN");
        errorMsg = "";
    } else {
        console.log("Invalid ISBN");
        errorMsg = "Invalid ISBN number";
    }
    displayError(errorMsg);
}

function displayError(errorMsg) {
    var errorField = document.getElementById('errorfield');
    errorField.innerHTML = errorMsg;
}

// stolen the algorithm off the internet
var isValidIsbn = function isValidIsbn(str) {

    var sum, weight, digit, check, i;

    str = str.toString();

    str = str.replace(/[^0-9X]/gi, '');

    if (str.length != 10 && str.length != 13) {
        return false;
    }

    if (str.length == 13) {
        sum = 0;
        for (i = 0; i < 12; i++) {
            digit = parseInt(str[i]);
            if (i % 2 == 1) {
                sum += 3 * digit;
            } else {
                sum += digit;
            }
        }
        check = (10 - sum % 10) % 10;
        return check == str[str.length - 1];
    }

    if (str.length == 10) {
        weight = 10;
        sum = 0;
        for (i = 0; i < 9; i++) {
            digit = parseInt(str[i]);
            sum += weight * digit;
            weight--;
        }
        check = 11 - sum % 11;
        if (check == 10) {
            check = 'X';
        }
        return check == str[str.length - 1].toUpperCase();
    }
};
exports.checkValid = checkValid;
exports.checkIsbn = checkIsbn;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWQzYmIyN2EzNjljMzUwMjhhY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJjaGVja1ZhbGlkIiwiY2hrRmllbGQiLCJmaWVsZFRvQ2hlY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJsZW5ndGgiLCJlcnJvck1zZyIsImRpc3BsYXlFcnJvciIsImNoZWNrSXNibiIsImlzYm5UZXh0IiwiaXNWYWxpZElzYm4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3JGaWVsZCIsImlubmVySFRNTCIsInN0ciIsInN1bSIsIndlaWdodCIsImRpZ2l0IiwiY2hlY2siLCJpIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7O0FDN0RBOztBQUVBLHFDOzs7Ozs7QUNGQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCO0FBQzVCLFFBQUlDLGVBQWVDLFNBQVNDLGNBQVQsQ0FBd0JILFFBQXhCLEVBQWtDSSxLQUFyRDtBQUNBLFFBQUssQ0FBQ0gsWUFBRCxJQUFpQkEsYUFBYUksTUFBYixHQUFzQixDQUE1QyxFQUFnRDtBQUM1Q0MsbUJBQVcscUNBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsbUJBQVcsRUFBWDtBQUNIO0FBQ0RDLGlCQUFhRCxRQUFiO0FBQ0Q7O0FBRUQsU0FBU0UsU0FBVCxHQUFxQjtBQUNuQixRQUFJQyxXQUFXUCxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWY7QUFDQSxRQUFJTyxZQUFZRCxTQUFTTCxLQUFyQixDQUFKLEVBQWlDO0FBQzdCTyxnQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQU4sbUJBQVcsRUFBWDtBQUNILEtBSEQsTUFHTztBQUNISyxnQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQU4sbUJBQVcscUJBQVg7QUFDSDtBQUNEQyxpQkFBYUQsUUFBYjtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JELFFBQXRCLEVBQStCO0FBQzdCLFFBQUlPLGFBQWFYLFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQVUsZUFBV0MsU0FBWCxHQUF1QlIsUUFBdkI7QUFDRDs7QUFFRDtBQUNBLElBQUlJLGNBQWMsU0FBZEEsV0FBYyxDQUFTSyxHQUFULEVBQWM7O0FBRTlCLFFBQUlDLEdBQUosRUFDSUMsTUFESixFQUVJQyxLQUZKLEVBR0lDLEtBSEosRUFJSUMsQ0FKSjs7QUFNQUwsVUFBTUEsSUFBSU0sUUFBSixFQUFOOztBQUVBTixVQUFNQSxJQUFJTyxPQUFKLENBQVksV0FBWixFQUF5QixFQUF6QixDQUFOOztBQUVBLFFBQUlQLElBQUlWLE1BQUosSUFBYyxFQUFkLElBQW9CVSxJQUFJVixNQUFKLElBQWMsRUFBdEMsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSVUsSUFBSVYsTUFBSixJQUFjLEVBQWxCLEVBQXNCO0FBQ2xCVyxjQUFNLENBQU47QUFDQSxhQUFLSSxJQUFJLENBQVQsRUFBWUEsSUFBSSxFQUFoQixFQUFvQkEsR0FBcEIsRUFBeUI7QUFDckJGLG9CQUFRSyxTQUFTUixJQUFJSyxDQUFKLENBQVQsQ0FBUjtBQUNBLGdCQUFJQSxJQUFJLENBQUosSUFBUyxDQUFiLEVBQWdCO0FBQ1pKLHVCQUFPLElBQUVFLEtBQVQ7QUFDSCxhQUZELE1BRU87QUFDSEYsdUJBQU9FLEtBQVA7QUFDSDtBQUNKO0FBQ0RDLGdCQUFRLENBQUMsS0FBTUgsTUFBTSxFQUFiLElBQW9CLEVBQTVCO0FBQ0EsZUFBUUcsU0FBU0osSUFBSUEsSUFBSVYsTUFBSixHQUFXLENBQWYsQ0FBakI7QUFDSDs7QUFFRCxRQUFJVSxJQUFJVixNQUFKLElBQWMsRUFBbEIsRUFBc0I7QUFDbEJZLGlCQUFTLEVBQVQ7QUFDQUQsY0FBTSxDQUFOO0FBQ0EsYUFBS0ksSUFBSSxDQUFULEVBQVlBLElBQUksQ0FBaEIsRUFBbUJBLEdBQW5CLEVBQXdCO0FBQ3BCRixvQkFBUUssU0FBU1IsSUFBSUssQ0FBSixDQUFULENBQVI7QUFDQUosbUJBQU9DLFNBQU9DLEtBQWQ7QUFDQUQ7QUFDSDtBQUNERSxnQkFBUSxLQUFNSCxNQUFNLEVBQXBCO0FBQ0EsWUFBSUcsU0FBUyxFQUFiLEVBQWlCO0FBQ2JBLG9CQUFRLEdBQVI7QUFDSDtBQUNELGVBQVFBLFNBQVNKLElBQUlBLElBQUlWLE1BQUosR0FBVyxDQUFmLEVBQWtCbUIsV0FBbEIsRUFBakI7QUFDSDtBQUNGLENBNUNEO1FBNkNRekIsVSxHQUFBQSxVO1FBQVlTLFMsR0FBQUEsUyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWQzYmIyN2EzNjljMzUwMjhhY2MiLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbi8vIGltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQge2NoZWNrVmFsaWQsIGNoZWNrSXNibiB9IGZyb20gJy4vanMvbW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbGxvKCkge1xuLy8gICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBKUyBNb2R1bGUnKTtcbi8vIH1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZChjaGtGaWVsZCkge1xuICB2YXIgZmllbGRUb0NoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hrRmllbGQpLnZhbHVlO1xuICBpZiAoICFmaWVsZFRvQ2hlY2sgfHwgZmllbGRUb0NoZWNrLmxlbmd0aCA8IDUgKSB7XG4gICAgICBlcnJvck1zZyA9IFwiRmllbGQgbXVzdCBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnNcIjtcbiAgfSBlbHNlIHtcbiAgICAgIGVycm9yTXNnID0gJyc7XG4gIH1cbiAgZGlzcGxheUVycm9yKGVycm9yTXNnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJc2JuKCkge1xuICB2YXIgaXNiblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tfaXNiblwiKTtcbiAgaWYgKGlzVmFsaWRJc2JuKGlzYm5UZXh0LnZhbHVlKSkge1xuICAgICAgY29uc29sZS5sb2coXCJWYWxpZCBJU0JOXCIpO1xuICAgICAgZXJyb3JNc2cgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIElTQk5cIik7XG4gICAgICBlcnJvck1zZyA9IFwiSW52YWxpZCBJU0JOIG51bWJlclwiO1xuICB9XG4gIGRpc3BsYXlFcnJvcihlcnJvck1zZyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihlcnJvck1zZyl7XG4gIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yZmllbGQnKTtcbiAgZXJyb3JGaWVsZC5pbm5lckhUTUwgPSBlcnJvck1zZztcbn1cblxuLy8gc3RvbGVuIHRoZSBhbGdvcml0aG0gb2ZmIHRoZSBpbnRlcm5ldFxudmFyIGlzVmFsaWRJc2JuID0gZnVuY3Rpb24oc3RyKSB7XG5cbiAgdmFyIHN1bSxcbiAgICAgIHdlaWdodCxcbiAgICAgIGRpZ2l0LFxuICAgICAgY2hlY2ssXG4gICAgICBpO1xuXG4gIHN0ciA9IHN0ci50b1N0cmluZygpO1xuXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9bXjAtOVhdL2dpLCAnJyk7XG5cbiAgaWYgKHN0ci5sZW5ndGggIT0gMTAgJiYgc3RyLmxlbmd0aCAhPSAxMykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0ci5sZW5ndGggPT0gMTMpIHtcbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgIGRpZ2l0ID0gcGFyc2VJbnQoc3RyW2ldKTtcbiAgICAgICAgICBpZiAoaSAlIDIgPT0gMSkge1xuICAgICAgICAgICAgICBzdW0gKz0gMypkaWdpdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdW0gKz0gZGlnaXQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2sgPSAoMTAgLSAoc3VtICUgMTApKSAlIDEwO1xuICAgICAgcmV0dXJuIChjaGVjayA9PSBzdHJbc3RyLmxlbmd0aC0xXSk7XG4gIH1cblxuICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgd2VpZ2h0ID0gMTA7XG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgIGRpZ2l0ID0gcGFyc2VJbnQoc3RyW2ldKTtcbiAgICAgICAgICBzdW0gKz0gd2VpZ2h0KmRpZ2l0O1xuICAgICAgICAgIHdlaWdodC0tO1xuICAgICAgfVxuICAgICAgY2hlY2sgPSAxMSAtIChzdW0gJSAxMSk7XG4gICAgICBpZiAoY2hlY2sgPT0gMTApIHtcbiAgICAgICAgICBjaGVjayA9ICdYJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAoY2hlY2sgPT0gc3RyW3N0ci5sZW5ndGgtMV0udG9VcHBlckNhc2UoKSk7XG4gIH1cbn1cbmV4cG9ydCB7Y2hlY2tWYWxpZCwgY2hlY2tJc2JufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGUuanMiXSwic291cmNlUm9vdCI6IiJ9