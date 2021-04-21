(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order-add"],{

/***/ 75:
/*!***********************************************************************************!*\
  !*** F:/wechat/uniApp/uni-app-uview/main.js?{"page":"pages%2Forder%2Forder-add"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderAdd = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order-add.vue */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderAdd.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 76:
/*!****************************************************************!*\
  !*** F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-add.vue?vue&type=template&id=4e475f90& */ 77);
/* harmony import */ var _order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-add.vue?vue&type=script&lang=js& */ 79);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-add.vue?vue&type=style&index=0&lang=scss& */ 81);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/order-add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/*!***********************************************************************************************!*\
  !*** F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=template&id=4e475f90& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-add.vue?vue&type=template&id=4e475f90& */ 78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_template_id_4e475f90___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 78:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=template&id=4e475f90& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uForm: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-form/u-form */ "uview-ui/components/u-form/u-form").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-form/u-form.vue */ 141))
    },
    uFormItem: function() {
      return Promise.all(/*! import() | uview-ui/components/u-form-item/u-form-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-form-item/u-form-item")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-form-item/u-form-item.vue */ 148))
    },
    uInput: function() {
      return Promise.all(/*! import() | uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-input/u-input.vue */ 159))
    },
    uSelect: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-select/u-select */ "uview-ui/components/u-select/u-select").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-select/u-select.vue */ 166))
    },
    uButton: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-button/u-button */ "uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-button/u-button.vue */ 127))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.selectShow = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 79:
/*!*****************************************************************************************!*\
  !*** F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-add.vue?vue&type=script&lang=js& */ 80);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { mapGetters } from 'vuex'
var _default = {
  data: function data() {var _this = this;
    return {
      pageType: '',
      detailId: '',
      array: [{ name: '中国' }, { name: '美国' }, { name: '巴西' }, { name: '日本' }],
      selectList: [
      {
        value: '1',
        label: '身份证' },

      {
        value: '2',
        label: '护照' },

      {
        value: '3',
        label: '港澳台通行证' }],


      cardItem: {
        value: '1',
        label: '身份证' },

      selectShow: false,
      index: 0,
      form: {
        name: '',
        phone: '',
        identificationNumber: '',
        typeName: '身份证' },

      formData: {
        name: 'LiMin',
        email: '13563256321',
        identificationNumber: '' },

      rules: {
        name: [
        {
          required: true,
          message: '请填写真实姓名',
          trigger: 'blur' },

        {
          min: 3,
          max: 5,
          message: '姓名长度在3到5个字符',
          trigger: ['change', 'blur'] },

        {
          // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
          validator: function validator(rule, value, callback) {
            // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
            return _this.$u.test.chinese(value);
          },
          message: '姓名必须为中文',
          // 触发器可以同时用blur和change，二者之间用英文逗号隔开
          trigger: ['change', 'blur'] }

        // 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
        // {
        // 	trigger: ['blur'],
        // 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
        // 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
        // 	asyncValidator: (rule, value, callback) => {
        // 		this.$u.post('/ebapi/public_api/index').then(res => {
        // 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
        // 			if(res.error) {
        // 				callback(new Error('姓名重复'));
        // 			} else {
        // 				// 如果没有错误，也要执行callback()回调
        // 				callback();
        // 			}
        // 		})
        // 	},
        // }
        ],
        phone: [
        {
          required: true,
          message: '请填写真实手机号',
          trigger: ['change', 'blur'] },

        {
          validator: function validator(rule, value, callback) {
            // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
            return _this.$u.test.mobile(value);
          },
          message: '手机号码不正确',
          // 触发器可以同时用blur和change，二者之间用英文逗号隔开
          trigger: ['change', 'blur'] }],


        goodsType: [
        {
          required: true,
          message: '请选择证件类型',
          trigger: ['change', 'blur'] }],


        identificationNumber: [
        {
          required: true,
          message: '请输入真实有效证件号码',
          trigger: ['change', 'blur'] },

        {
          validator: function validator(rule, value, callback) {
            console.log(11, value);
            // console.log(rule)
            // console.log(222, this.form.goodsType)
            // return this.$u.test.idCard(value);
            if (_this.cardItem.value == '1') {
              return _this.$u.test.idCard(value);
            } else {
              var re1 = /^[a-zA-Z]{5,17}$/;
              var re2 = /^[a-zA-Z0-9]{5,17}$/;
              return re1.test(value) || re2.test(value);
            }
          },
          message: '证件格式错误',
          // 触发器可以同时用blur和change，二者之间用英文逗号隔开
          trigger: ['change', 'blur'] }] },



      rules1: {
        // 对name字段进行必填验证
        name: {
          rules: [{
            required: true,
            errorMessage: '请输入姓名' },

          {
            minLength: 3,
            maxLength: 5,
            errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符' }] },



        // 对email字段进行必填验证
        email: {
          rules: [{
            // format: 'email',
            // pattern: /^1[3456789]\d{9}$/,
            // pattern: /^1(1|2|3|4|5|6|7|8|9)\d{9}$/,
            pattern: "^1[3456789]\\d{9}$", //必须加引号的才生效注意带引号需要使用 \ 转义
            errorMessage: '手机号格式错误' }] },


        identificationNumber: {
          rules: [{
            required: true,
            errorMessage: '请选择兴趣' },
          {
            // 不生效 todo 
            validateFunction: function validateFunction(rule, value, data, callback) {
              console.log(11, value);
              if (value.length < 2) {
                callback('请至少勾选两个兴趣爱好');
              }
              return true;
            } }] } } };




  },
  onLoad: function onLoad(event) {
    console.log(event);
    this.pageType = event.type;
    if (event.data) {
      this.formData = JSON.parse(event.data);
    } else {
      this.formData = {};
    }
  },
  onReady: function onReady() {
    // 使用validateFunction需要在onReady中设置规则
    // this.$refs.form.setRules(this.rules)

    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    // 选择商品类型回调
    selectConfirm: function selectConfirm(e) {var _this2 = this;
      console.log(e);
      // this.form.typeName = '';
      e.map(function (val, index) {
        _this2.cardItem = val;
        _this2.form.typeName = val.label;
        // this.form.typeName += this.form.typeName == '' ? val.label : '-' + val.label;
      });
    },
    bindPickerChange: function bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为：' + e.detail.value);
      this.index = e.detail.value;
    },
    // 确定
    sure: function sure() {var _this3 = this;
      console.log(this.cardItem);
      console.log(11, this.form);
      this.$refs.uForm.validate(function (valid) {
        if (valid) {
          // if(!this.model.agreement) return this.$u.toast('请勾选协议');
          console.log('验证通过', _this3.form);
        } else {
          console.log('验证失败');
        }
      });
      // this.$refs.form.submit().then(res=>{
      // 	console.log('表单数据信息：', res);
      // }).catch(err =>{
      // 	console.log('表单错误信息：', err);
      // })
    },
    submit: function submit() {
      this.$refs.uForm.validate(function (valid) {
        if (valid) {
          // if(!this.model.agreement) return this.$u.toast('请勾选协议');
          console.log('验证通过');
        } else {
          console.log('验证失败');
        }
      });
      // this.$refs.form.submit().then(res=>{
      // 	console.log('表单数据信息：', res);
      // }).catch(err =>{
      // 	console.log('表单错误信息：', err);
      // })
    },
    saveContact: function saveContact() {
      this.$refs.uForm.validate(function (valid) {
        if (valid) {
          // if(!this.model.agreement) return this.$u.toast('请勾选协议');
          console.log('验证通过');
        } else {
          console.log('验证失败');
        }
      });
      // console.log('保存联系人')
      // this.$refs.form.submit().then(res=>{
      // 	console.log('表单数据信息：', res);
      // }).catch(err =>{
      // 	console.log('表单错误信息：', err);
      // })
    } } };exports.default = _default;

/***/ }),

/***/ 81:
/*!**************************************************************************************************!*\
  !*** F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-add.vue?vue&type=style&index=0&lang=scss& */ 82);
/* harmony import */ var _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_tools_HBuilderX_3_0_7_20210123_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_add_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/wechat/uniApp/uni-app-uview/pages/order/order-add.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[75,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order-add.js.map