(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-propietarios-propietarios-module"],{

/***/ "84Vf":
/*!*****************************************************!*\
  !*** ./src/app/propietarios/propietarios.module.ts ***!
  \*****************************************************/
/*! exports provided: PropietariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosModule", function() { return PropietariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propietarios-routing.module */ "D60g");
/* harmony import */ var _propietarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propietarios.component */ "W+rx");





class PropietariosModule {
}
PropietariosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PropietariosModule });
PropietariosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PropietariosModule_Factory(t) { return new (t || PropietariosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PropietariosModule, { declarations: [_propietarios_component__WEBPACK_IMPORTED_MODULE_3__["PropietariosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_propietarios_component__WEBPACK_IMPORTED_MODULE_3__["PropietariosComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "D60g":
/*!*************************************************************!*\
  !*** ./src/app/propietarios/propietarios-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PropietariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosRoutingModule", function() { return PropietariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _propietarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propietarios.component */ "W+rx");





const routes = [
    {
        path: 'propietario/:id',
        component: _propietarios_component__WEBPACK_IMPORTED_MODULE_2__["PropietariosComponent"]
    }
];
class PropietariosRoutingModule {
}
PropietariosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PropietariosRoutingModule });
PropietariosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PropietariosRoutingModule_Factory(t) { return new (t || PropietariosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PropietariosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KwdF":
/*!********************************************************!*\
  !*** ./src/app/propietarios/model/propietario-impl.ts ***!
  \********************************************************/
/*! exports provided: PropietarioImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietarioImpl", function() { return PropietarioImpl; });
class PropietarioImpl {
}


/***/ }),

/***/ "W+rx":
/*!********************************************************!*\
  !*** ./src/app/propietarios/propietarios.component.ts ***!
  \********************************************************/
/*! exports provided: PropietariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosComponent", function() { return PropietariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_propietario_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/propietario-impl */ "KwdF");
/* harmony import */ var _service_propietario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/propietario.service */ "7eT4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class PropietariosComponent {
    constructor(propietarioService, activateRoute) {
        this.propietarioService = propietarioService;
        this.activateRoute = activateRoute;
        this.propietario = new _model_propietario_impl__WEBPACK_IMPORTED_MODULE_1__["PropietarioImpl"]();
    }
    ngOnInit() {
        this.activateRoute.params.subscribe((params) => {
            const id = params.id;
            console.log(id);
            if (id) {
                this.propietarioService.getPropietario(params.id).subscribe(response => this.propietario = response);
            }
        });
    }
}
PropietariosComponent.ɵfac = function PropietariosComponent_Factory(t) { return new (t || PropietariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_propietario_service__WEBPACK_IMPORTED_MODULE_2__["PropietarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PropietariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropietariosComponent, selectors: [["app-propietarios"]], decls: 3, vars: 3, template: function PropietariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.propietario));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propietarios',
                templateUrl: './propietarios.component.html',
                styles: []
            }]
    }], function () { return [{ type: _service_propietario_service__WEBPACK_IMPORTED_MODULE_2__["PropietarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-propietarios-propietarios-module.js.map