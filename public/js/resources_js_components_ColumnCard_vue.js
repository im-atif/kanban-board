"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ColumnCard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColumnCard",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      title: '',
      editColumn: false,
      addCard: false
    };
  },
  mounted: function mounted() {
    this.title = this.column.title;
  },
  watch: {
    column: {
      handler: function handler(col, oc) {
        this.title = col.title;
      },
      deep: true
    }
  },
  methods: {
    updateColumn: function updateColumn() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().put("columns/".concat(this.column.id), {
        title: this.title
      }).then(function (res) {
        _this.$emit('update', _this.column, res.data.data);
        _this.editColumn = false;
      });
    },
    cancelColumnUpdate: function cancelColumnUpdate() {
      this.title = this.column.title;
      this.editColumn = false;
    },
    deleteColumn: function deleteColumn() {
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("columns/".concat(this.column.id));
      this.$emit('delete', this.column);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "column-head"
  }, [_vm.editColumn ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    attrs: {
      type: "text",
      placeholder: "Enter column title..."
    },
    domProps: {
      value: _vm.title
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.updateColumn.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.cancelColumnUpdate.apply(null, arguments);
      }],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), !_vm.editColumn ? _c("h4", {
    staticClass: "column-head__title",
    on: {
      click: function click($event) {
        _vm.editColumn = true;
      }
    }
  }, [_vm._v(_vm._s(this.column.title))]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-icon ml-5",
    on: {
      click: _vm.deleteColumn
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-trash-can"
    }
  })], 1)]), _vm._v(" "), !_vm.addCard ? _c("button", {
    staticClass: "btn btn-add",
    on: {
      click: function click($event) {
        _vm.addCard = true;
      }
    }
  }, [_c("font-awesome-icon", {
    attrs: {
      icon: "fa-solid fa-circle-plus"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Add a card")])], 1) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/ColumnCard.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ColumnCard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnCard.vue?vue&type=template&id=56b7a131 */ "./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131");
/* harmony import */ var _ColumnCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnCard.vue?vue&type=script&lang=js */ "./resources/js/components/ColumnCard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ColumnCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__.render,
  _ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ColumnCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ColumnCard.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/ColumnCard.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnCard_vue_vue_type_template_id_56b7a131__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnCard.vue?vue&type=template&id=56b7a131 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ColumnCard.vue?vue&type=template&id=56b7a131");


/***/ })

}]);