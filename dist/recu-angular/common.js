(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "7eT4":
/*!*************************************************************!*\
  !*** ./src/app/propietarios/service/propietario.service.ts ***!
  \*************************************************************/
/*! exports provided: PropietarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietarioService", function() { return PropietarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PropietarioService {
    //private urlPropietario: string = `${this.host}pedidos/`;
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host;
    }
    getPropietario(id) {
        return this.http.get(`${this.host}/pedidos/${id}/propietario`);
    }
    extraerNombrePropietario(respuestaApi) {
        let nombre;
        nombre = respuestaApi.nombre;
        return nombre;
    }
}
PropietarioService.ɵfac = function PropietarioService_Factory(t) { return new (t || PropietarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PropietarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PropietarioService, factory: PropietarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map