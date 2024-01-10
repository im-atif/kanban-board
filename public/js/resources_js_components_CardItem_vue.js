"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CardItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CardItem",
  props: {
    columnId: {
      type: Number,
      required: true
    },
    card: {
      type: Object,
      required: true
    }
  },
  mounted: function mounted() {
    this.title = this.card.title;
    this.description = this.card.description;
  },
  data: function data() {
    return {
      title: null,
      description: null,
      editCard: false
    };
  },
  watch: {
    card: {
      handler: function handler(card, oc) {
        this.title = card.title;
        this.description = card.description;
      },
      deep: true
    }
  },
  methods: {
    close: function close() {
      this.title = this.card.title;
      this.description = this.card.description;
      this.editCard = false;
    },
    deleteCard: function deleteCard() {
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("cards/".concat(this.card.id));
      this.$modal.hide(this.card.id.toString());
      this.$emit('delete', this.card, this.columnId);
    },
    update: function update() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().put("cards/".concat(this.card.id), {
        title: this.title,
        description: this.description
      }).then(function (res) {
        _this.editCard = false;
        _this.$modal.hide(_this.card.id.toString());
        _this.$emit('update', res.data.data, _this.columnId);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$card$description;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card",
    on: {
      click: function click($event) {
        _vm.$modal.show(_vm.card.id.toString());
      }
    }
  }, [_c("h5", [_vm._v(_vm._s(_vm.card.title))]), _vm._v(" "), _c("modal", {
    staticClass: "card__modal",
    attrs: {
      name: _vm.card.id.toString()
    }
  }, [_c("div", {
    staticClass: "card__modal--title"
  }, [!_vm.editCard ? _c("h4", [_vm._v(_vm._s(_vm.card.title))]) : _vm._e(), _vm._v(" "), _vm.editCard ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    staticClass: "mr-5",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.title
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.update.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.close.apply(null, arguments);
      }],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), !_vm.editCard ? _c("button", {
    staticClass: "btn btn-icon ml-auto",
    on: {
      click: function click($event) {
        _vm.editCard = true;
      }
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-pen-to-square"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.editCard ? _c("button", {
    staticClass: "btn btn-icon ml-5",
    on: {
      click: _vm.deleteCard
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-trash-can"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.editCard ? _c("button", {
    staticClass: "btn btn-icon ml-5",
    on: {
      click: function click($event) {
        _vm.$modal.hide(_vm.card.id.toString());
      }
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-xmark"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.editCard ? _c("button", {
    staticClass: "btn btn-sm mr-0",
    on: {
      click: _vm.update
    }
  }, [_vm._v("Update")]) : _vm._e(), _vm._v(" "), _vm.editCard ? _c("button", {
    staticClass: "btn btn-icon ml-5",
    on: {
      click: _vm.close
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-xmark"
    }
  })], 1) : _vm._e()]), _vm._v(" "), !_vm.editCard ? _c("p", [_vm._v(_vm._s((_vm$card$description = _vm.card.description) !== null && _vm$card$description !== void 0 ? _vm$card$description : "Not available!"))]) : _vm._e(), _vm._v(" "), _vm.editCard ? _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.description,
      expression: "description"
    }],
    attrs: {
      placeholder: "Type your description here...",
      rows: "6"
    },
    domProps: {
      value: _vm.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.description = $event.target.value;
      }
    }
  }) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/CardItem.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/CardItem.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardItem.vue?vue&type=template&id=7c039e2e */ "./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e");
/* harmony import */ var _CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardItem.vue?vue&type=script&lang=js */ "./resources/js/components/CardItem.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__.render,
  _CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardItem.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/CardItem.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e":
/*!****************************************************************************!*\
  !*** ./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_7c039e2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardItem.vue?vue&type=template&id=7c039e2e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardItem.vue?vue&type=template&id=7c039e2e");


/***/ })

}]);