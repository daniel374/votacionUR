(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");


var ɵ0 = function () { return __webpack_require__.e(/*! import() | componentes-login-login-module-ngfactory */ "componentes-login-login-module-ngfactory").then(__webpack_require__.bind(null, /*! ./componentes/login/login.module.ngfactory */ "./src/app/componentes/login/login.module.ngfactory.js")).then(function (mod) { return mod.LoginModuleNgFactory; }); }, ɵ1 = function () { return Promise.all(/*! import() | componentes-consejos-consejos-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("componentes-consejos-consejos-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./componentes/consejos/consejos.module.ngfactory */ "./src/app/componentes/consejos/consejos.module.ngfactory.js")).then(function (mod) { return mod.ConsejosModuleNgFactory; }); }, ɵ2 = function () { return Promise.all(/*! import() | componentes-formulas-consejo-formulas-consejo-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("componentes-formulas-consejo-formulas-consejo-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./componentes/formulas-consejo/formulas-consejo.module.ngfactory */ "./src/app/componentes/formulas-consejo/formulas-consejo.module.ngfactory.js")).then(function (mod) { return mod.FormulasConsejoModuleNgFactory; }); }, ɵ3 = function () { return Promise.all(/*! import() | componentes-representantes-consejo-representantes-consejo-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("componentes-representantes-consejo-representantes-consejo-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./componentes/representantes-consejo/representantes-consejo.module.ngfactory */ "./src/app/componentes/representantes-consejo/representantes-consejo.module.ngfactory.js")).then(function (mod) { return mod.RepresentantesConsejoModuleNgFactory; }); }, ɵ4 = function () { return Promise.all(/*! import() | componentes-resumen-voto-resumen-voto-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("componentes-resumen-voto-resumen-voto-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./componentes/resumen-voto/resumen-voto.module.ngfactory */ "./src/app/componentes/resumen-voto/resumen-voto.module.ngfactory.js")).then(function (mod) { return mod.ResumenVotoModuleNgFactory; }); };
var routes = [
    {
        path: 'votacion',
        loadChildren: ɵ0
    },
    {
        path: 'votacion/consejo',
        loadChildren: ɵ1,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'votacion/consejo/formulas',
        loadChildren: ɵ2,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'votacion/consejo/formulas/representantes',
        loadChildren: ɵ3,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'votacion/consejo/formulas/representantes/resumenVoto',
        loadChildren: ɵ4,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/votacion',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/ngx-spinner/ngx-spinner.ngfactory */ "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_datos_component_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/datos-component.service */ "./src/app/services/datos-component.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ngx-spinner", [["bdColor", "rgba(51,51,51,0.8)"], ["color", "#fff"], ["size", "medium"], ["type", "ball-scale-multiple"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { bdColor: [0, "bdColor"], size: [1, "size"], color: [2, "color"], type: [3, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "p", [["style", "font-size: 20px; color: white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_0 = "rgba(51,51,51,0.8)"; var currVal_1 = "medium"; var currVal_2 = "#fff"; var currVal_3 = "ball-scale-multiple"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); _ck(_v, 5, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.mensaje; _ck(_v, 3, 0, currVal_4); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _services_datos_component_service__WEBPACK_IMPORTED_MODULE_7__["DatosComponentService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent(authService, spinner, datosComponentService) {
        this.authService = authService;
        this.spinner = spinner;
        this.datosComponentService = datosComponentService;
        this.titulo = 'votaciones';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuth();
        this.mensaje = this.datosComponentService.mensajeSpinner();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_estudiante_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/estudiante.service */ "./src/app/services/estudiante.service.ts");
/* harmony import */ var _services_consejos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/consejos.service */ "./src/app/services/consejos.service.ts");
/* harmony import */ var _services_representantes_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/representantes.service */ "./src/app/services/representantes.service.ts");
/* harmony import */ var _services_formulas_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/formulas.service */ "./src/app/services/formulas.service.ts");
/* harmony import */ var _services_datos_component_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/datos-component.service */ "./src/app/services/datos-component.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵxNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵnNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_10__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_10__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_10__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_10__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ɵy"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_14__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"], _services_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _services_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_estudiante_service__WEBPACK_IMPORTED_MODULE_17__["EstudianteService"], _services_estudiante_service__WEBPACK_IMPORTED_MODULE_17__["EstudianteService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_consejos_service__WEBPACK_IMPORTED_MODULE_18__["ConsejosService"], _services_consejos_service__WEBPACK_IMPORTED_MODULE_18__["ConsejosService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_representantes_service__WEBPACK_IMPORTED_MODULE_19__["RepresentantesService"], _services_representantes_service__WEBPACK_IMPORTED_MODULE_19__["RepresentantesService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_formulas_service__WEBPACK_IMPORTED_MODULE_20__["FormulasService"], _services_formulas_service__WEBPACK_IMPORTED_MODULE_20__["FormulasService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_datos_component_service__WEBPACK_IMPORTED_MODULE_21__["DatosComponentService"], _services_datos_component_service__WEBPACK_IMPORTED_MODULE_21__["DatosComponentService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_10__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () { return [[{ path: "votacion", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ0"] }, { path: "votacion/consejo", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ1"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }, { path: "votacion/consejo/formulas", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ2"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }, { path: "votacion/consejo/formulas/representantes", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ3"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }, { path: "votacion/consejo/formulas/representantes/resumenVoto", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["ɵ4"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }, { path: "", redirectTo: "/votacion", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
function tokenGetter() {
    return localStorage.getItem("meToken");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = localStorage.getItem("meToken");
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/lib/config.ts":
/*!*******************************!*\
  !*** ./src/app/lib/config.ts ***!
  \*******************************/
/*! exports provided: Configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configs", function() { return Configs; });
/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/
var Configs = {
    //appId: 'b67d71d2-117a-4112-b972-e69aab49b497',//casaur-uniquelogin-prod
    //appId: 'a266588c-94d1-45c3-a63c-0af950b6dbac',//Rosario
    //appId: '7f1d1eaa-59b3-4ba0-9109-748f7bb1a8f4',//casaur-uniquelogin-dev
    appId: '5847a953-467b-4af5-b119-75a031595a91',
    scope: 'User.Read',
    url: 'https://serveless.proximateapps-services.com.mx/casaur/prod/'
};


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ "./node_modules/@microsoft/microsoft-graph-client/lib/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/config */ "./src/app/lib/config.ts");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hellojs/dist/hello.all.js */ "./node_modules/hellojs/dist/hello.all.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__);
/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/





var AuthService = /** @class */ (function () {
    function AuthService(http, httpService, zone, router) {
        this.http = http;
        this.httpService = httpService;
        this.zone = zone;
        this.router = router;
        this.url = 'https://graph.microsoft.com/v1.0';
        this.file = 'demo.xlsx';
        this.table = 'Table1';
    }
    AuthService.prototype.initAuth = function () {
        hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__["init"]({
            msft: {
                id: _lib_config__WEBPACK_IMPORTED_MODULE_3__["Configs"].appId,
                oauth: {
                    version: 2,
                    auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
                },
                scope_delim: ' ',
                form: false
            },
        }, { redirect_uri: window.location.href });
    };
    AuthService.prototype.login = function (callback) {
        hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__('msft').login({ scope: _lib_config__WEBPACK_IMPORTED_MODULE_3__["Configs"].scope }).then(callback, function (e) { return console.error(e.error.message); });
    };
    AuthService.prototype.logout = function () {
        this.http.post(_lib_config__WEBPACK_IMPORTED_MODULE_3__["Configs"].url + "webadmin/utils/urlslogout", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) { return response.json(); })).subscribe(function (response) {
            console.log(response.data);
            window.open(response.data.url_agendamate);
            window.open(response.data.url_backend);
            window.open(response.data.url_videomate);
        });
        hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__('msft').logout().then(function () { }, function (e) { return console.error(e.error.message); });
    };
    AuthService.prototype.hasSessiontoken = function () {
        var msft = hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_4__('msft').getAuthResponse();
        if (msft == null) {
            return null;
        }
        else {
            var accessToken = msft.access_token;
            return accessToken;
        }
    };
    AuthService.prototype.getClient = function () {
        var _this = this;
        var client = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_1__["Client"].init({
            authProvider: function (done) {
                done(null, _this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
            }
        });
        return client;
    };
    AuthService.prototype.getMe = function (callbackSuccess, callbackFail) {
        var client = this.getClient();
        if (client) {
            client.api('me').get(function (err, res) {
                if (res == null) {
                    callbackFail();
                }
                else if (res.id) {
                    callbackSuccess(res);
                }
            });
        }
        else {
            return null;
        }
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/consejos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/consejos.service.ts ***!
  \**********************************************/
/*! exports provided: ConsejosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsejosService", function() { return ConsejosService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConsejosService = /** @class */ (function () {
    function ConsejosService(http) {
        this.http = http;
        /* Servicos AWS */
        this.project = "casaur";
        this.enviroment = "dev";
        this.Data_Est = "https://serveless.proximateapps-services.com.mx/" + this.project + "/" + this.enviroment + "/webadmin/voting/savestudent";
    }
    /* Servicos AWS */
    ConsejosService.prototype.getConsejos = function (tpDoc, numDoc, esNom, email, infoPlanes) {
        var newToken = localStorage.getItem('newToken');
        console.log('token new ' + newToken);
        if (newToken === '') {
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': newToken
        });
        console.log('headers:');
        console.log(headers);
        var arrPlanes = JSON.parse(infoPlanes);
        /* console.log('arrPlanes' + arrPlanes);
        console.log(typeof(arrPlanes)); */
        var xmlBody;
        xmlBody = {
            VresTipoDocumento: tpDoc,
            VresNumDocumento: "" + numDoc,
            VesNombre: esNom,
            VesEmail: email,
            infoPlanes: arrPlanes,
        };
        var xmlBody2 = JSON.stringify(xmlBody);
        console.log('body service Lambda: ');
        console.log(xmlBody);
        console.log(xmlBody2);
        return this.http.post(this.Data_Est, xmlBody2, { headers: headers });
    };
    ConsejosService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ConsejosService_Factory() { return new ConsejosService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: ConsejosService, providedIn: "root" });
    return ConsejosService;
}());



/***/ }),

/***/ "./src/app/services/datos-component.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/datos-component.service.ts ***!
  \*****************************************************/
/*! exports provided: DatosComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosComponentService", function() { return DatosComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DatosComponentService = /** @class */ (function () {
    function DatosComponentService() {
        this.resDatos = [];
        this.msjSpinner = 'Cargando...';
    }
    DatosComponentService.prototype.cambiaSpinner = function (msj) {
        this.msjSpinner = msj;
        return this.msjSpinner;
    };
    DatosComponentService.prototype.mensajeSpinner = function () {
        //this.msjSpinner = mensaje;
        return this.msjSpinner;
    };
    DatosComponentService.prototype.guarDatosConsejo = function (datosConsejo) {
        this.resDatos = datosConsejo;
        //console.log("res datos "+this.resDatos);
        return this.resDatos;
    };
    DatosComponentService.prototype.guarDatosFormula = function (datosFormula) {
        this.resDatos = this.resDatos.concat(datosFormula);
        //console.log("res datos "+this.resDatos);
        return this.resDatos;
    };
    DatosComponentService.prototype.guarDatosRepre = function (datosRepresen) {
        this.resDatos = this.resDatos.concat(datosRepresen);
        console.log("res datos " + this.resDatos);
        return this.resDatos;
    };
    DatosComponentService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function DatosComponentService_Factory() { return new DatosComponentService(); }, token: DatosComponentService, providedIn: "root" });
    return DatosComponentService;
}());



/***/ }),

/***/ "./src/app/services/estudiante.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/estudiante.service.ts ***!
  \************************************************/
/*! exports provided: EstudianteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudianteService", function() { return EstudianteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EstudianteService = /** @class */ (function () {
    function EstudianteService(http) {
        this.http = http;
        this.project = "casaur";
        this.enviroment = "dev";
        this.Data_Est = "https://serveless.proximateapps-services.com.mx/" + this.project + "/" + this.enviroment + "/webadmin/utils/postsoapgeneric";
    }
    EstudianteService.prototype.dataEstudiante = function () {
        var meTokens = localStorage.getItem('meToken');
        if (meTokens === '') {
        }
        console.log("meToken es  " + meTokens);
        var newToken = meTokens.replace(/['"]+/g, '');
        console.log("token new " + newToken);
        localStorage.setItem('newToken', newToken);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': newToken
        });
        var numDocEstu = localStorage.getItem('numDoc');
        var xmlBody = { "body": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:wss=\"http://wsservicios.urosario.edu.co\"><soapenv:Header/><soapenv:Body><wss:getProgramas><wss:identification>" + numDocEstu + "</wss:identification></wss:getProgramas></soapenv:Body></soapenv:Envelope>" };
        console.log(JSON.stringify(xmlBody));
        return this.http.post(this.Data_Est, xmlBody, { headers: headers });
    };
    EstudianteService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function EstudianteService_Factory() { return new EstudianteService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: EstudianteService, providedIn: "root" });
    return EstudianteService;
}());



/***/ }),

/***/ "./src/app/services/formulas.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/formulas.service.ts ***!
  \**********************************************/
/*! exports provided: FormulasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulasService", function() { return FormulasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FormulasService = /** @class */ (function () {
    function FormulasService(http) {
        this.http = http;
        this.project = "casaur";
        this.enviroment = "dev";
        this.Data_Est = "https://serveless.proximateapps-services.com.mx/" + this.project + "/" + this.enviroment + "/webadmin/generic/gettable";
    }
    /* Servicos AWS */
    FormulasService.prototype.formulasConse = function (vcId, vfSemestre, codPlan) {
        var newToken = localStorage.getItem('newToken');
        console.log("token new " + newToken);
        if (newToken === '') {
        }
        if (vfSemestre != '' && codPlan == '') {
            this.xmlBody = {
                "fields": "*",
                "table": "vot_formula_consejo",
                "wheres": [
                    {
                        "type": "where",
                        "conditions": { "VfSemestre": null }
                    },
                    {
                        "type": "where",
                        "conditions": { "VfPlanCode": null }
                    },
                    {
                        "type": "where",
                        "conditions": { "VfConsejo": "" + vcId }
                    },
                    {
                        "type": "whereOR",
                        "key": "VfSemestre",
                        "value": "" + vfSemestre
                    },
                    {
                        "type": "where",
                        "conditions": { "VfConsejo": "" + vcId }
                    }
                ]
            };
        }
        else if (codPlan != '' && vfSemestre == '') {
            this.xmlBody = {
                "fields": "*",
                "table": "vot_formula_consejo",
                "wheres": [
                    {
                        "type": "where",
                        "conditions": { "VfSemestre": null }
                    },
                    {
                        "type": "where",
                        "conditions": { "VfPlanCode": null }
                    },
                    {
                        "type": "where",
                        "conditions": { "VfConsejo": "" + vcId }
                    },
                    {
                        "type": "whereOR",
                        "key": "VfPlanCode",
                        "value": "" + codPlan
                    },
                    {
                        "type": "where",
                        "conditions": { "VfConsejo": "" + vcId }
                    }
                ]
            };
        }
        else {
            this.xmlBody = {
                "fields": "*",
                "table": "vot_formula_consejo",
                "wheres": [
                    {
                        "type": "where",
                        "conditions": { "VfConsejo": "" + vcId }
                    }
                ]
            };
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': newToken
        });
        console.log("headers:");
        console.log(headers);
        console.log("body serviceFormula: ");
        console.log(JSON.stringify(this.xmlBody));
        return this.http.post(this.Data_Est, this.xmlBody, { headers: headers });
    };
    FormulasService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function FormulasService_Factory() { return new FormulasService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: FormulasService, providedIn: "root" });
    return FormulasService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hellojs/dist/hello.all.js */ "./node_modules/hellojs/dist/hello.all.js");
/* harmony import */ var hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_0__);
/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService.prototype.getAccessToken = function () {
        var msft = hellojs_dist_hello_all_js__WEBPACK_IMPORTED_MODULE_0__('msft').getAuthResponse();
        var accessToken = msft.access_token;
        return accessToken;
    };
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/representantes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/representantes.service.ts ***!
  \****************************************************/
/*! exports provided: RepresentantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentantesService", function() { return RepresentantesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RepresentantesService = /** @class */ (function () {
    function RepresentantesService(http) {
        this.http = http;
        /* Servicos AWS */
        this.project = "casaur";
        this.enviroment = "dev";
        this.Data_Est = "https://serveless.proximateapps-services.com.mx/" + this.project + "/" + this.enviroment + "/webadmin/generic/gettable";
    }
    /* service AWS */
    RepresentantesService.prototype.representConse = function (vcId, vfSemestre, codPlan) {
        var newToken = localStorage.getItem('newToken');
        console.log("token new " + newToken);
        if (newToken === '') {
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': newToken
        });
        console.log("headers:");
        console.log(headers);
        if (vcId < 5) {
            this.xmlBody = {
                "fields": "*",
                "table": "vot_representantes",
                "joins": [
                    {
                        "table": "vot_plan",
                        "on": "vot_representantes.VrepPlan = vot_plan.VplId",
                        "type": "left"
                    }
                ],
                "wheres": [
                    {
                        "type": "where",
                        "conditions": { "VplConsejo": "" + vcId }
                    },
                    {
                        "type": "where",
                        "conditions": { "VrepPeriodo !=": null }
                    },
                    {
                        "type": "whereOR",
                        "key": "VrepSemestre",
                        "value": "" + vfSemestre
                    },
                    {
                        "type": "where",
                        "conditions": { "VplConsejo": "" + vcId }
                    },
                    {
                        "type": "where",
                        "conditions": { "VrepPeriodo": null }
                    }
                ]
            };
        }
        else if (vcId > 4 && vcId < 8) {
            if (vfSemestre < 5) {
                this.xmlBody = {
                    "fields": "*",
                    "table": "vot_representantes",
                    "joins": [
                        {
                            "table": "vot_plan",
                            "on": "vot_representantes.VrepPlan = vot_plan.VplId",
                            "type": "left"
                        }
                    ],
                    "wheres": [
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepSemestre": "" + vfSemestre
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo !=": null
                            }
                        },
                        {
                            "type": "whereOR",
                            "key": "VrepSemestre",
                            "value": "" + vfSemestre
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo": null
                            }
                        }
                    ]
                };
            }
            else {
                this.xmlBody = {
                    "fields": "*",
                    "table": "vista_vot_repre_codigo",
                    "wheres": [
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo !=": null
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplCodigo": "" + codPlan
                            }
                        },
                        {
                            "type": "whereOR",
                            "key": "VrepSemestre",
                            "value": null
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo": null
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplCodigo": "" + codPlan
                            }
                        }
                    ]
                };
            }
        }
        else if (vcId == 8) {
            if (vfSemestre < 4) {
                this.xmlBody = {
                    "fields": "*",
                    "table": "vot_representantes",
                    "joins": [
                        {
                            "table": "vot_plan",
                            "on": "vot_representantes.VrepPlan = vot_plan.VplId",
                            "type": "left"
                        }
                    ],
                    "wheres": [
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepSemestre": "" + vfSemestre
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo !=": null
                            }
                        },
                        {
                            "type": "whereOR",
                            "key": "VrepSemestre",
                            "value": "" + vfSemestre
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo": null
                            }
                        }
                    ]
                };
            }
            else {
                this.xmlBody = {
                    "fields": "*",
                    "table": "vista_vot_repre_codigo",
                    "wheres": [
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo !=": null
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplCodigo": "" + codPlan
                            }
                        },
                        {
                            "type": "whereOR",
                            "key": "VrepSemestre",
                            "value": null
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplConsejo": "" + vcId
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VrepPeriodo": null
                            }
                        },
                        {
                            "type": "where",
                            "conditions": {
                                "VplCodigo": "" + codPlan
                            }
                        }
                    ]
                };
            }
        }
        else {
            this.xmlBody = {
                "fields": "*",
                "table": "vot_representantes",
                "joins": [
                    {
                        "table": "vot_plan",
                        "on": "vot_representantes.VrepPlan = vot_plan.VplId",
                        "type": "left"
                    }
                ],
                "wheres": [
                    {
                        "type": "where",
                        "conditions": {
                            "VplConsejo": "" + vcId
                        }
                    },
                    {
                        "type": "where",
                        "conditions": {
                            "VrepSemestre": "" + vfSemestre
                        }
                    },
                    {
                        "type": "where",
                        "conditions": {
                            "VrepPeriodo !=": null
                        }
                    },
                    {
                        "type": "whereOR",
                        "key": "VrepSemestre",
                        "value": "" + vfSemestre
                    },
                    {
                        "type": "where",
                        "conditions": {
                            "VplConsejo": "" + vcId
                        }
                    },
                    {
                        "type": "where",
                        "conditions": {
                            "VrepPeriodo": null
                        }
                    }
                ]
            };
        }
        console.log("body serviceRepresentantes: ");
        console.log(JSON.stringify(this.xmlBody));
        return this.http.post(this.Data_Est, this.xmlBody, { headers: headers });
    };
    RepresentantesService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function RepresentantesService_Factory() { return new RepresentantesService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: RepresentantesService, providedIn: "root" });
    return RepresentantesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/disenoyproximate/Desktop/Proyectos/ANGULAR/votacionUR/clienteAWS2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map