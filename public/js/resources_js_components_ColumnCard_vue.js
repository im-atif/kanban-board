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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColumnCard",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  components: {
    ColumnEdit: function ColumnEdit() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_ColumnEdit_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ColumnEdit.vue */ "./resources/js/components/ColumnEdit.vue"));
    },
    AddCard: function AddCard() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_AddCard_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./AddCard.vue */ "./resources/js/components/AddCard.vue"));
    },
    CardItem: function CardItem() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CardItem_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CardItem.vue */ "./resources/js/components/CardItem.vue"));
    },
    Draggable: function Draggable() {
      return __webpack_require__.e(/*! import() */ "node_modules_vuedraggable_dist_vuedraggable_umd_js").then(__webpack_require__.t.bind(__webpack_require__, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js", 23));
    }
  },
  data: function data() {
    return {
      title: '',
      editColumn: false,
      addCard: false,
      columnCards: []
    };
  },
  mounted: function mounted() {
    this.title = this.column.title;
    this.columnCards = _toConsumableArray(this.column.cards);
    // this.columnCards = [...this.cards]
  },
  // watch: {
  //     column: {
  //         handler(col, oc) {
  //             this.title = col.title;
  //         },
  //         deep: true,
  //     }
  // },
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
    },
    onCardCreate: function onCardCreate(data) {
      this.cards.push(data);
    },
    onDeleteCard: function onDeleteCard(data) {
      var cIndex = this.cards.findIndex(function (c) {
        return c.id === data.id;
      });
      this.cards.splice(cIndex, 1);
    },
    onCardUpdate: function onCardUpdate(data) {
      var cIndex = this.cards.findIndex(function (c) {
        return c.id === data.id;
      });
      this.cards[cIndex].title = data.title;
      this.cards[cIndex].description = data.description;
    },
    handleLog: function handleLog(e) {
      console.log(e);
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
  return _c("draggable", {
    staticClass: "column",
    attrs: {
      tag: "div",
      list: _vm.columnCards,
      group: {
        name: "card"
      },
      draggable: ".item"
    },
    on: {
      change: _vm.handleLog
    }
  }, [_c("column-edit", {
    attrs: {
      column: _vm.column
    }
  }), _vm._v(" "), _vm._l(_vm.columnCards, function (c, index) {
    return _c("card-item", {
      key: index,
      attrs: {
        card: c,
        columnId: _vm.column.id
      },
      on: {
        "delete-card": _vm.onDeleteCard,
        "update-card": _vm.onCardUpdate
      }
    });
  }), _vm._v(" "), _c("add-card", {
    attrs: {
      columnId: _vm.column.id
    },
    on: {
      "card-create": _vm.onCardCreate
    }
  })], 2);
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