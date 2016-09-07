/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const potamus = __webpack_require__(1);

	potamus.button('button', 'ripple');

	potamus.checkbox('checkbox');
	potamus.textField('text-field', '-label', '-input');


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const buttonComponent    = __webpack_require__(2)
	    , checkboxComponent  = __webpack_require__(3)
	    , textFieldComponent = __webpack_require__(4);

	module.exports = {
	  button: buttonComponent,
	  checkbox: checkboxComponent,
	  textField: textFieldComponent
	};



/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function button(buttonClass, rippleClass) {

	    function createRipple(rect) {

	        var ripple = document.createElement('span');

	        ripple.classList.add(rippleClass);
	        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';

	        return ripple;
	    }

	    function positionateRipple(ripple, top, left) {

	        ripple.style.top = top + 'px';
	        ripple.style.left = left + 'px';
	        ripple.classList.add('show');
	    }

	    var getHalf = function getHalf(n) {
	        return n / 2;
	    };

	    function btnsRipple(e) {

	        if (!e.target.classList.contains(buttonClass)) return false;

	        var btn = e.target,
	            rect = btn.getBoundingClientRect();

	        var ripple = btn.querySelector('.' + rippleClass);

	        if (!ripple) {

	            ripple = createRipple(rect);
	            btn.appendChild(ripple);
	        }

	        ripple.classList.remove('show');

	        var left = e.pageX - rect.left - getHalf(ripple.offsetWidth) - document.body.scrollLeft,
	            top = e.pageY - rect.top - getHalf(ripple.offsetHeight) - document.body.scrollTop;

	        positionateRipple(ripple, top, left);

	        return false;
	    }

	    document.addEventListener('click', btnsRipple, false);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	function checkboxBehavior() {

	  if (!this.classList.contains('disabled')) {

	    var checkboxNode = this.parentNode.querySelector('[type=checkbox]');

	    this.classList.toggle('checked');

	    if (checkboxNode.hasAttribute('checked')) checkboxNode.removeAttribute('checked');else checkboxNode.setAttribute('checked', '');
	  }
	}

	function firefoxCompat(checkboxClass) {

	  [].slice.call(document.querySelectorAll('.' + checkboxClass)).forEach(function (node) {

	    node.style.display = 'none';

	    var span = document.createElement('span');

	    span.classList.add(checkboxClass.toString());
	    if (node.checked) span.classList.add('checked');
	    if (node.disabled) span.classList.add('disabled');
	    span.addEventListener('click', checkboxBehavior);

	    node.parentNode.insertBefore(span, node);
	  });
	}

	module.exports = function checkbox(checkboxClass) {

	  if (navigator.userAgent.search('Firefox') > -1) firefoxCompat(checkboxClass);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function textField(textFieldClass, labelSufix, inputSufix) {

	  function validate(condition, classElement, className) {

	    if (condition && !classElement.contains(className)) classElement.add(className);

	    if (!condition && classElement.contains(className)) classElement.remove(className);
	  }

	  function leavingInput() {

	    this.value ? this.classList.add('used') : this.classList.remove('used');
	    this.parentNode.classList.remove('is-active');

	    if (!this.value) this.parentNode.querySelector('.' + textFieldClass + labelSufix).classList.add('is-closed');
	  }

	  function focusingInput() {

	    this.parentNode.classList.add('is-active');
	    this.parentNode.querySelector('.' + textFieldClass + labelSufix).classList.remove('is-closed');
	  }

	  function typingInput() {

	    var groupClass = this.parentNode.classList,
	        labelClass = this.parentNode.querySelector('.' + textFieldClass + labelSufix).classList,
	        valid = this.checkValidity(),
	        validClass = 'is-valid';

	    validate(valid, groupClass, validClass);
	    validate(valid, labelClass, validClass);
	  }

	  function eventHandler(input) {

	    input.parentNode.querySelector('.' + textFieldClass + labelSufix).classList.add('is-closed');

	    input.addEventListener('blur', leavingInput, true);
	    input.addEventListener('focus', focusingInput);
	    input.addEventListener('input', typingInput);
	  }

	  [].slice.call(document.querySelectorAll('.' + textFieldClass + inputSufix)).forEach(eventHandler);
	};

/***/ }
/******/ ]);