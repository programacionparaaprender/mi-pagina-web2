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

/***/ "./src/app/agencia-emprendedores/agencia-emprendedores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/agencia-emprendedores/agencia-emprendedores.component.ts ***!
  \**************************************************************************/
/*! exports provided: AgenciaEmprendedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaEmprendedoresComponent", function() { return AgenciaEmprendedoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AgenciaEmprendedoresComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r1.nombre);
} }
class AgenciaEmprendedoresComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
    }
    ngOnInit() {
    }
}
AgenciaEmprendedoresComponent.ɵfac = function AgenciaEmprendedoresComponent_Factory(t) { return new (t || AgenciaEmprendedoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgenciaEmprendedoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgenciaEmprendedoresComponent, selectors: [["app-agencia-emprendedores"]], decls: 14, vars: 1, consts: [[2, "width", "100%", "height", "1rem", "display", "block"], [1, "container-fluid", 2, "max-width", "1564px"], [1, "card", 2, "width", "100%"], [1, "card-body"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-secondary"], ["id", "collapseExample", 1, "collapse"], [1, "card", "card-body"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"]], template: function AgenciaEmprendedoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ejemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AgenciaEmprendedoresComponent_div_11_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprender_internetjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmNpYS1lbXByZW5kZWRvcmVzL2FnZW5jaWEtZW1wcmVuZGVkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvYWdlbmNpYS1lbXByZW5kZWRvcmVzL2FnZW5jaWEtZW1wcmVuZGVkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgenciaEmprendedoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agencia-emprendedores',
                templateUrl: './agencia-emprendedores.component.html',
                styleUrls: ['./agencia-emprendedores.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agencia-empresas/agencia-empresas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/agencia-empresas/agencia-empresas.component.ts ***!
  \****************************************************************/
/*! exports provided: AgenciaEmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaEmpresasComponent", function() { return AgenciaEmpresasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AgenciaEmpresasComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgenciaEmpresasComponent_div_45_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const casa_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.obtenerDetalleTrabajoGrado(casa_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r4.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r4.nombre);
} }
function AgenciaEmpresasComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgenciaEmpresasComponent_div_72_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const casa_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.obtenerDetalle(casa_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r7.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r7.nombre);
} }
function AgenciaEmpresasComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r10.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AgenciaEmpresasComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "progress", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tecnologia_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tecnologia_r11.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tecnologia_r11.porcentaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", tecnologia_r11.nombre, " - ", tecnologia_r11.porcentaje, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tecnologia_r11.porcentaje, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tecnologia_r11.porcentaje, "% ");
} }
class AgenciaEmpresasComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
        this.trabajo_grado_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["trabajo_grado_luis"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
        this.proyectos = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos"];
    }
    obtenerDetalleTrabajoGrado(id) {
        console.log('obtenerDetalleTrabajoGrado');
        var proyecto;
        for (let proyecto2 of this.trabajo_grado_luis) {
            if (proyecto2.id == id) {
                proyecto = proyecto2;
            }
        }
        this.tecnologia = proyecto.tecnologia;
    }
    obtenerDetalle(id) {
        console.log('obtenerDetalle');
        var proyecto;
        for (let proyecto2 of this.proyectos_realizados_luis) {
            if (proyecto2.id == id) {
                proyecto = proyecto2;
            }
        }
        this.tecnologia = proyecto.tecnologia;
    }
    ;
    ngOnInit() {
    }
}
AgenciaEmpresasComponent.ɵfac = function AgenciaEmpresasComponent_Factory(t) { return new (t || AgenciaEmpresasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgenciaEmpresasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgenciaEmpresasComponent, selectors: [["app-agencia-empresas"]], decls: 110, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", "href", "https://www.linkedin.com/in/luis-correa-36477a1b7/"], ["src", "./assets/images/Luis_Correa.jpeg", 2, "width", "100%"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "card", 2, "width", "100%"], [1, "card-body"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapTapGrado", "aria-expanded", "false", "aria-controls", "collapTapGrado", 1, "btn", "btn-secondary"], ["id", "collapTapGrado", 1, "collapse"], [1, "card", "card-body"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapTapExperiencia", "aria-expanded", "false", "aria-controls", "collapTapExperiencia", 1, "btn", "btn-secondary", "btn-lg", "mx-auto"], ["id", "collapTapExperiencia", 1, "collapse"], ["target", "_blank", "href", "https://www.facebook.com/PdvsaROriente/"], ["src", "./assets/proyectos/pdvsa.svg", 2, "width", "100%"], [1, "w3-display-topleft", "w3-black", "w3-padding"], ["target", "_blank", "href", "https://www.facebook.com/Ricana-Tours-107912725995677/"], ["src", "./assets/proyectos/ricana-tours.svg", 2, "width", "100%"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapTapProyectos", "aria-expanded", "false", "aria-controls", "collapTapProyectos", 1, "btn", "btn-secondary", "btn-lg", "mx-auto"], ["id", "collapTapProyectos", 1, "collapse"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapTapSoporteTecnico", "aria-expanded", "false", "aria-controls", "collapTapSoporteTecnico", 1, "btn", "btn-secondary", "btn-lg", "mx-auto"], ["id", "collapTapSoporteTecnico", 1, "collapse"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapTapServicioComunitario", "aria-expanded", "false", "aria-controls", "collapTapServicioComunitario", 1, "btn", "btn-secondary", "btn-lg", "mx-auto"], ["id", "collapTapServicioComunitario", 1, "collapse"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info", 3, "click"], [2, "width", "100%", 3, "src"], [1, "col-sm-3", "col-md-3"], ["id", "file", "max", "100", 3, "value", "title"]], template: function AgenciaEmpresasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Luis Correa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingeniero en Computaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Soy un ingeniero en computaci\u00F3n. Mis objetivos son responsabilidad, creatividad, voluntad de saber, proactividad y trabajo en equipo..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ingenier\u00EDa en Computaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dise\u00F1o de diagramas UML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Trabajo de grado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AgenciaEmpresasComponent_div_45_Template, 7, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Experiencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Proyecto de grado en PDVSA Refinaci\u00F3n Oriente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Proyectos para la empresa ricana tours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Proyectos realizados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AgenciaEmpresasComponent_div_72_Template, 7, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Soporte tecnico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Summer House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Servicio comunitario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AgenciaEmpresasComponent_div_93_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Tecnolog\u00EDas empleadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AgenciaEmpresasComponent_div_106_Template, 9, 6, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trabajo_grado_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos_realizados_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tecnologia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmNpYS1lbXByZXNhcy9hZ2VuY2lhLWVtcHJlc2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9hZ2VuY2lhLWVtcHJlc2FzL2FnZW5jaWEtZW1wcmVzYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgenciaEmpresasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agencia-empresas',
                templateUrl: './agencia-empresas.component.html',
                styleUrls: ['./agencia-empresas.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agencia-profesionales/agencia-profesionales.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/agencia-profesionales/agencia-profesionales.component.ts ***!
  \**************************************************************************/
/*! exports provided: AgenciaProfesionalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaProfesionalesComponent", function() { return AgenciaProfesionalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AgenciaProfesionalesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r1.nombre);
} }
class AgenciaProfesionalesComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
    }
    ngOnInit() {
    }
}
AgenciaProfesionalesComponent.ɵfac = function AgenciaProfesionalesComponent_Factory(t) { return new (t || AgenciaProfesionalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgenciaProfesionalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgenciaProfesionalesComponent, selectors: [["app-agencia-profesionales"]], decls: 14, vars: 1, consts: [[2, "width", "100%", "height", "1rem", "display", "block"], [1, "container-fluid", 2, "max-width", "1564px"], [1, "card", 2, "width", "100%"], [1, "card-body"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-secondary"], ["id", "collapseExample", 1, "collapse"], [1, "card", "card-body"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"]], template: function AgenciaProfesionalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ejemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AgenciaProfesionalesComponent_div_11_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprender_internetjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmNpYS1wcm9mZXNpb25hbGVzL2FnZW5jaWEtcHJvZmVzaW9uYWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvYWdlbmNpYS1wcm9mZXNpb25hbGVzL2FnZW5jaWEtcHJvZmVzaW9uYWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgenciaProfesionalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agencia-profesionales',
                templateUrl: './agencia-profesionales.component.html',
                styleUrls: ['./agencia-profesionales.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juegos/vieja/vieja.component */ "./src/app/juegos/vieja/vieja.component.ts");
/* harmony import */ var _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geocerca-google/geocerca-google.component */ "./src/app/geocerca-google/geocerca-google.component.ts");
/* harmony import */ var _emprender_internet_emprender_internet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emprender-internet/emprender-internet.component */ "./src/app/emprender-internet/emprender-internet.component.ts");
/* harmony import */ var _agencia_empresas_agencia_empresas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agencia-empresas/agencia-empresas.component */ "./src/app/agencia-empresas/agencia-empresas.component.ts");
/* harmony import */ var _agencia_profesionales_agencia_profesionales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agencia-profesionales/agencia-profesionales.component */ "./src/app/agencia-profesionales/agencia-profesionales.component.ts");
/* harmony import */ var _agencia_emprendedores_agencia_emprendedores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agencia-emprendedores/agencia-emprendedores.component */ "./src/app/agencia-emprendedores/agencia-emprendedores.component.ts");
/* harmony import */ var _contacto_luis_contacto_luis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacto-luis/contacto-luis.component */ "./src/app/contacto-luis/contacto-luis.component.ts");
/* harmony import */ var _contacto_percy_contacto_percy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacto-percy/contacto-percy.component */ "./src/app/contacto-percy/contacto-percy.component.ts");
/* harmony import */ var _contacto_empresa_contacto_empresa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacto-empresa/contacto-empresa.component */ "./src/app/contacto-empresa/contacto-empresa.component.ts");
/* harmony import */ var _contacto_juan_contacto_juan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacto-juan/contacto-juan.component */ "./src/app/contacto-juan/contacto-juan.component.ts");
/* harmony import */ var _contacto_yolanda_contacto_yolanda_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contacto-yolanda/contacto-yolanda.component */ "./src/app/contacto-yolanda/contacto-yolanda.component.ts");
/* harmony import */ var _contacto_patricia_contacto_patricia_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacto-patricia/contacto-patricia.component */ "./src/app/contacto-patricia/contacto-patricia.component.ts");
/* harmony import */ var _contacto_ana_contacto_ana_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacto-ana/contacto-ana.component */ "./src/app/contacto-ana/contacto-ana.component.ts");
/* harmony import */ var _contacto_jermany_contacto_jermany_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacto-jermany/contacto-jermany.component */ "./src/app/contacto-jermany/contacto-jermany.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _maestria_sanmarcos_maestria_sanmarcos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./maestria-sanmarcos/maestria-sanmarcos.component */ "./src/app/maestria-sanmarcos/maestria-sanmarcos.component.ts");




















var usuario = {
    id: 1,
    nombre: "error",
    password: "123456",
    email: "error@gmail.com"
};
const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"] },
    { path: 'maestria-sanmarcos', component: _maestria_sanmarcos_maestria_sanmarcos_component__WEBPACK_IMPORTED_MODULE_17__["MaestriaSanMarcosComponent"] },
    { path: 'agencia_empresas', component: _agencia_empresas_agencia_empresas_component__WEBPACK_IMPORTED_MODULE_5__["AgenciaEmpresasComponent"] },
    { path: 'agencia_profesionales', component: _agencia_profesionales_agencia_profesionales_component__WEBPACK_IMPORTED_MODULE_6__["AgenciaProfesionalesComponent"] },
    { path: 'agencia_emprendedores', component: _agencia_emprendedores_agencia_emprendedores_component__WEBPACK_IMPORTED_MODULE_7__["AgenciaEmprendedoresComponent"] },
    { path: 'emprender', component: _emprender_internet_emprender_internet_component__WEBPACK_IMPORTED_MODULE_4__["EmprenderInternetComponent"] },
    { path: 'contacto_luis', component: _contacto_luis_contacto_luis_component__WEBPACK_IMPORTED_MODULE_8__["ContactoLuisComponent"] },
    { path: 'contacto_percy', component: _contacto_percy_contacto_percy_component__WEBPACK_IMPORTED_MODULE_9__["ContactoPercyComponent"] },
    { path: 'contacto_juan', component: _contacto_juan_contacto_juan_component__WEBPACK_IMPORTED_MODULE_11__["ContactoJuanComponent"] },
    { path: 'contacto_yolanda', component: _contacto_yolanda_contacto_yolanda_component__WEBPACK_IMPORTED_MODULE_12__["ContactoYolandaComponent"] },
    { path: 'contacto_patricia', component: _contacto_patricia_contacto_patricia_component__WEBPACK_IMPORTED_MODULE_13__["ContactoPatriciaComponent"] },
    { path: 'contacto_ana', component: _contacto_ana_contacto_ana_component__WEBPACK_IMPORTED_MODULE_14__["ContactoAnaComponent"] },
    { path: 'contacto_jermany', component: _contacto_jermany_contacto_jermany_component__WEBPACK_IMPORTED_MODULE_15__["ContactoJermanyComponent"] },
    { path: 'contacto_empresa', component: _contacto_empresa_contacto_empresa_component__WEBPACK_IMPORTED_MODULE_10__["ContactoEmpresaComponent"] },
    {
        path: 'vieja', component: _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_2__["ViejaComponent"]
    },
    {
        path: 'geocerca', component: _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_3__["GeocercaGoogleComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'angularrouter';
        this.brandControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.brands = [
            { value: 1, viewValue: 'Louis Vuitton' },
            { value: 2, viewValue: 'Gucci' },
            { value: 3, viewValue: 'Prada' },
            { value: 4, viewValue: 'Chanel' },
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./juegos/vieja/vieja.component */ "./src/app/juegos/vieja/vieja.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geocerca-google/geocerca-google.component */ "./src/app/geocerca-google/geocerca-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _emprender_internet_emprender_internet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emprender-internet/emprender-internet.component */ "./src/app/emprender-internet/emprender-internet.component.ts");
/* harmony import */ var _agencia_empresas_agencia_empresas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agencia-empresas/agencia-empresas.component */ "./src/app/agencia-empresas/agencia-empresas.component.ts");
/* harmony import */ var _agencia_profesionales_agencia_profesionales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agencia-profesionales/agencia-profesionales.component */ "./src/app/agencia-profesionales/agencia-profesionales.component.ts");
/* harmony import */ var _agencia_emprendedores_agencia_emprendedores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./agencia-emprendedores/agencia-emprendedores.component */ "./src/app/agencia-emprendedores/agencia-emprendedores.component.ts");
/* harmony import */ var _contacto_luis_contacto_luis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacto-luis/contacto-luis.component */ "./src/app/contacto-luis/contacto-luis.component.ts");
/* harmony import */ var _contacto_percy_contacto_percy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacto-percy/contacto-percy.component */ "./src/app/contacto-percy/contacto-percy.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contacto_juan_contacto_juan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacto-juan/contacto-juan.component */ "./src/app/contacto-juan/contacto-juan.component.ts");
/* harmony import */ var _contacto_empresa_contacto_empresa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacto-empresa/contacto-empresa.component */ "./src/app/contacto-empresa/contacto-empresa.component.ts");
/* harmony import */ var _contacto_yolanda_contacto_yolanda_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contacto-yolanda/contacto-yolanda.component */ "./src/app/contacto-yolanda/contacto-yolanda.component.ts");
/* harmony import */ var _contacto_patricia_contacto_patricia_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contacto-patricia/contacto-patricia.component */ "./src/app/contacto-patricia/contacto-patricia.component.ts");
/* harmony import */ var _contacto_ana_contacto_ana_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contacto-ana/contacto-ana.component */ "./src/app/contacto-ana/contacto-ana.component.ts");
/* harmony import */ var _contacto_jermany_contacto_jermany_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contacto-jermany/contacto-jermany.component */ "./src/app/contacto-jermany/contacto-jermany.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _servicios_contacto_servicios_contacto_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./servicios-contacto/servicios-contacto.component */ "./src/app/servicios-contacto/servicios-contacto.component.ts");
/* harmony import */ var _carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./carrusel/carrusel.component */ "./src/app/carrusel/carrusel.component.ts");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nosotros/nosotros.component */ "./src/app/nosotros/nosotros.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _maestria_sanmarcos_maestria_sanmarcos_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./maestria-sanmarcos/maestria-sanmarcos.component */ "./src/app/maestria-sanmarcos/maestria-sanmarcos.component.ts");

































localStorage.setItem('URL', 'https://localhost:44382/');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_4__["ViejaComponent"],
        _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_8__["GeocercaGoogleComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
        _emprender_internet_emprender_internet_component__WEBPACK_IMPORTED_MODULE_11__["EmprenderInternetComponent"],
        _agencia_empresas_agencia_empresas_component__WEBPACK_IMPORTED_MODULE_12__["AgenciaEmpresasComponent"],
        _agencia_profesionales_agencia_profesionales_component__WEBPACK_IMPORTED_MODULE_13__["AgenciaProfesionalesComponent"],
        _agencia_emprendedores_agencia_emprendedores_component__WEBPACK_IMPORTED_MODULE_14__["AgenciaEmprendedoresComponent"],
        _contacto_luis_contacto_luis_component__WEBPACK_IMPORTED_MODULE_15__["ContactoLuisComponent"],
        _contacto_percy_contacto_percy_component__WEBPACK_IMPORTED_MODULE_16__["ContactoPercyComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _contacto_empresa_contacto_empresa_component__WEBPACK_IMPORTED_MODULE_19__["ContactoEmpresaComponent"],
        _contacto_juan_contacto_juan_component__WEBPACK_IMPORTED_MODULE_18__["ContactoJuanComponent"],
        _contacto_yolanda_contacto_yolanda_component__WEBPACK_IMPORTED_MODULE_20__["ContactoYolandaComponent"],
        _contacto_patricia_contacto_patricia_component__WEBPACK_IMPORTED_MODULE_21__["ContactoPatriciaComponent"],
        _contacto_ana_contacto_ana_component__WEBPACK_IMPORTED_MODULE_22__["ContactoAnaComponent"],
        _contacto_jermany_contacto_jermany_component__WEBPACK_IMPORTED_MODULE_23__["ContactoJermanyComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_25__["BannerComponent"],
        _servicios_contacto_servicios_contacto_component__WEBPACK_IMPORTED_MODULE_26__["ServiciosContactoComponent"],
        _carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_27__["CarruselComponent"],
        _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_28__["NosotrosComponent"],
        _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_29__["ProyectosComponent"],
        _maestria_sanmarcos_maestria_sanmarcos_component__WEBPACK_IMPORTED_MODULE_30__["MaestriaSanMarcosComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_4__["ViejaComponent"],
                    _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_8__["GeocercaGoogleComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                    _emprender_internet_emprender_internet_component__WEBPACK_IMPORTED_MODULE_11__["EmprenderInternetComponent"],
                    _agencia_empresas_agencia_empresas_component__WEBPACK_IMPORTED_MODULE_12__["AgenciaEmpresasComponent"],
                    _agencia_profesionales_agencia_profesionales_component__WEBPACK_IMPORTED_MODULE_13__["AgenciaProfesionalesComponent"],
                    _agencia_emprendedores_agencia_emprendedores_component__WEBPACK_IMPORTED_MODULE_14__["AgenciaEmprendedoresComponent"],
                    _contacto_luis_contacto_luis_component__WEBPACK_IMPORTED_MODULE_15__["ContactoLuisComponent"],
                    _contacto_percy_contacto_percy_component__WEBPACK_IMPORTED_MODULE_16__["ContactoPercyComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _contacto_empresa_contacto_empresa_component__WEBPACK_IMPORTED_MODULE_19__["ContactoEmpresaComponent"],
                    _contacto_juan_contacto_juan_component__WEBPACK_IMPORTED_MODULE_18__["ContactoJuanComponent"],
                    _contacto_yolanda_contacto_yolanda_component__WEBPACK_IMPORTED_MODULE_20__["ContactoYolandaComponent"],
                    _contacto_patricia_contacto_patricia_component__WEBPACK_IMPORTED_MODULE_21__["ContactoPatriciaComponent"],
                    _contacto_ana_contacto_ana_component__WEBPACK_IMPORTED_MODULE_22__["ContactoAnaComponent"],
                    _contacto_jermany_contacto_jermany_component__WEBPACK_IMPORTED_MODULE_23__["ContactoJermanyComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_25__["BannerComponent"],
                    _servicios_contacto_servicios_contacto_component__WEBPACK_IMPORTED_MODULE_26__["ServiciosContactoComponent"],
                    _carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_27__["CarruselComponent"],
                    _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_28__["NosotrosComponent"],
                    _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_29__["ProyectosComponent"],
                    _maestria_sanmarcos_maestria_sanmarcos_component__WEBPACK_IMPORTED_MODULE_30__["MaestriaSanMarcosComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
                    }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.state.ts":
/*!******************************!*\
  !*** ./src/app/app.state.ts ***!
  \******************************/
/*! exports provided: serviciosjs, cursosjs, ventas_madrejs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviciosjs", function() { return serviciosjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cursosjs", function() { return cursosjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ventas_madrejs", function() { return ventas_madrejs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencia_luis", function() { return experiencia_luis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactosjs", function() { return contactosjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emprender_internetjs", function() { return emprender_internetjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trabajo_grado_luis", function() { return trabajo_grado_luis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proyectos_realizados_luis", function() { return proyectos_realizados_luis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proyectos", function() { return proyectos; });
const serviciosjs = [
    {
        nombre: "Asesoria para avanzar y crecer en las redes sociales",
        descripcion: "Tips y estrategias para crecer y monetizar en las redes sociales."
    },
    {
        nombre: "Instalación y configuración de servidores",
        descripcion: "Configuración de DNS, Directorio Activo, Impresión, Web, FTP."
    },
    {
        id: "fondo1",
        class: "carousel-item active",
        data_bs_interval: "2000",
        nombre: "Diseño y Desarrollo web",
        descripcion: "Diseño, desarrollo y creación de aplicaciones web.",
        alt: "des1"
    },
    {
        id: "fondo2",
        class: "carousel-item",
        nombre: "Diseño de app para ventas online",
        descripcion: "Diseño, desarrollo y creación de aplicativo para ventas online, para poder vender productos por internet.",
        alt: "des2"
    },
    {
        id: "fondo3",
        class: "carousel-item",
        nombre: "eMarketing Digital",
        descripcion: "La publicidad por correo o email comercial, es enviar un mensaje comercial directamente utilizando como canal el correo electrónico. Envía a un cliente potencial anuncios, peticiones de negocios, solicitar ventas o donaciones publicidad.",
        alt: "des3"
    },
    {
        id: "fondo4",
        class: "carousel-item",
        nombre: "Posicionamiento en buscadores",
        descripcion: "Posicionamiento en buscadores, optimización en motores de búsqueda o SEO, mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.",
        alt: "des4"
    },
    {
        id: "fondo5",
        class: "carousel-item",
        nombre: "SEO & SEM & SMM & Analítica",
        descripcion: "Mercadotecnia en buscadores web (SEM) promovemos el contenido digital para aumentar la visibilidad y posicionamiento en las páginas de resultados del motor de búsqueda. El posicionamiento en motores de búsqueda (SEO), móviles.",
        alt: "des5"
    },
    {
        id: "fondo5",
        class: "carousel-item",
        nombre: "SMM",
        descripcion: "Social Media Marqueting (SMM) mercadotecnia viral para crear una idea, posicionar una marca, incrementar la visibilidad e incluso aumentar las ventas de productos.",
        alt: "des5"
    },
    {
        id: "fondo6",
        class: "carousel-item",
        nombre: "Diseño Gráfico",
        descripcion: "Diseño y creación de logotipos, imagen corporativa, branding, diseño de impresión, rebranding, creamos diseño gráfico para aplicaciones web.",
        alt: "des6"
    },
    {
        id: "fondo7",
        class: "carousel-item",
        nombre: "Diseño y Desarrollo Aplicativos Móviles",
        descripcion: "Diseño, desarrollo y creación de aplicaciones móviles para Android.",
        alt: "des7"
    },
    {
        class: "carousel-item",
        nombre: "Mantenimiento y gestión de aplicaciones",
        descripcion: "Servicio, soporte y mantenimiento  de escritorio, móviles y web.",
        alt: "des8"
    },
    {
        class: "carousel-item",
        nombre: "Alojamiento web",
        descripcion: "Alojamiento web (hosting) para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.",
        alt: "des9"
    },
    {
        nombre: "Diseño responsive",
        descripcion: "Adaptable a todas las pantallas: pc, laptop, tabletas y smartphone.",
    },
    {
        nombre: "Certificado SSL",
        descripcion: "Tus usuarios pueden navegar de manera segura.",
    },
    {
        nombre: "Redes sociales",
        descripcion: "Integración a redes sociales y botón de whatsapp."
    },
];
const cursosjs = [
    {
        target: "_self",
        class: "dropdown-item",
        href: "emprender",
        nombre: "Emprender por internet"
    },
    {
        target: "_blank",
        class: "dropdown-item",
        href: "https://www.instagram.com/p/CK1OWPGnd3m/",
        nombre: "Geocercas con el lenguaje kotlin y google maps"
    },
    {
        target: "_blank",
        class: "dropdown-item",
        href: "https://www.instagram.com/p/CKrHNDmn-8s/",
        nombre: "Geocerca Ionic"
    },
];
const ventas_madrejs = [
    {
        id: 1,
        href: "https://www.instagram.com/p/CD5PPbAjfDq/",
        src: "./assets/images/michi/michi.PNG",
        alt: "First slide",
    },
    {
        id: 2,
        href: "https://www.instagram.com/p/CD5OZ1sjs2-/",
        src: "./assets/images/michi/michi2.PNG",
        alt: "Second slide"
    },
    {
        id: 3,
        href: "https://www.instagram.com/p/CDfLDYPDqXq/",
        src: "./assets/images/michi/michi3.PNG",
        alt: "Third slide",
    },
];
const experiencia_luis = [
    {
        id: 1,
        href: "https://www.facebook.com/SeidorPeru",
        src: "./assets/images/seidor.png",
        nombre: "Desarrollo de software con los lenguajes c#, server-script y sql hana, aplicación sap business one",
        tecnologia: [
            {
                id: 1,
                nombre: "C#",
                porcentaje: 80,
            },
            {
                id: 2,
                nombre: "server-javascript",
                porcentaje: 60,
            },
            {
                id: 3,
                nombre: "sql hana",
                porcentaje: 60,
            },
            {
                id: 4,
                nombre: "sap business one client",
                porcentaje: 80,
            },
            {
                id: 5,
                nombre: "sap business one studio",
                porcentaje: 60,
            },
            {
                id: 6,
                nombre: "sap hana studio",
                porcentaje: 80,
            }
        ],
    },
    {
        id: 2,
        href: "https://www.facebook.com/Ricana-Tours-107912725995677/",
        src: "./assets/proyectos/ricana-tours.svg",
        nombre: "Desarrollo de software con los lenguajes javascript, php5, css3 y html5",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 10,
            },
            {
                id: 2,
                nombre: "php",
                porcentaje: 10,
            },
            {
                id: 3,
                nombre: "javascript",
                porcentaje: 10,
            },
            {
                id: 4,
                nombre: "css",
                porcentaje: 10,
            },
            {
                id: 5,
                nombre: "bootstrap",
                porcentaje: 10,
            },
            {
                id: 6,
                nombre: "jquery",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "codeigniter",
                porcentaje: 10,
            },
            {
                id: 8,
                nombre: "git",
                porcentaje: 10,
            },
            {
                id: 9,
                nombre: "UML",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "cakePHP",
                porcentaje: 10,
            },
        ],
    },
    {
        id: 3,
        href: "https://www.facebook.com/PdvsaROriente/",
        src: "./assets/proyectos/pdvsa.svg",
        nombre: "Migración del servicio de impresión a tecnología tecnología de información libre",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 40,
            },
            {
                id: 2,
                nombre: "samba",
                porcentaje: 20,
            },
            {
                id: 3,
                nombre: "cups",
                porcentaje: 20,
            },
            {
                id: 4,
                nombre: "Debian",
                porcentaje: 20,
            },
        ],
    },
];
const contactosjs = [
    {
        id: 1,
        href: "contacto_luis",
        img: "./assets/images/Luis_Correa.webp",
        alt: "Luis",
        nombre: "Luis Correa",
        titulo: "Ingeniero en Computación",
        descripcion: "Desarrollador Semisenior .Net Full Stack",
        url: "https://www.linkedin.com/in/luis-correa-36477a1b7/"
    },
];
const emprender_internetjs = [
    {
        id: 1,
        target: "_blank",
        class: "dropdown-item",
        href: "https://www.youtube.com/watch?v=1lfbTa32MEk",
        nombre: "Crear un bot para tu página web con chatfuel",
        src: "./assets/proyectos/ricana-tours.svg",
    },
    {
        id: 2,
        target: "_blank",
        class: "dropdown-item",
        href: "https://www.udemy.com/course/adp-bonao-facebook-como-herramienta-educativa/learn/lecture/13147022?start=0#overview",
        nombre: "Crea tu página en facebook",
        src: "./assets/proyectos/ricana-tours.svg",
    },
];
const trabajo_grado_luis = [
    {
        id: 1,
        href: "https://www.facebook.com/PdvsaROriente/",
        src: "./assets/proyectos/pdvsa.svg",
        nombre: "Migración del servicio de impresión a tecnología tecnología de información libre",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 40,
            },
            {
                id: 2,
                nombre: "samba",
                porcentaje: 20,
            },
            {
                id: 3,
                nombre: "cups",
                porcentaje: 20,
            },
            {
                id: 4,
                nombre: "Debian",
                porcentaje: 20,
            },
        ],
    },
];
const proyectos_realizados_luis = [
    {
        id: 1,
        href: "#",
        src: "./assets/proyectos/ricana-tours.svg",
        nombre: "Aplicación web con primefaces para venta de boletos de viaje",
        tecnologia: [
            {
                id: 2,
                nombre: "java",
                porcentaje: 10,
            },
            {
                id: 3,
                nombre: "javascript",
                porcentaje: 10,
            },
            {
                id: 4,
                nombre: "css",
                porcentaje: 10,
            },
            {
                id: 5,
                nombre: "bootstrap",
                porcentaje: 10,
            },
            {
                id: 6,
                nombre: "jquery",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "primefaces",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "springframework",
                porcentaje: 10,
            },
            {
                id: 8,
                nombre: "sqlserver",
                porcentaje: 10,
            },
            {
                id: 9,
                nombre: "git",
                porcentaje: 20,
            }
        ],
    },
    {
        id: 2,
        href: "#",
        src: "./assets/proyectos/ricana-tours.svg",
        nombre: "Aplicación web con laravel para clinica",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 10,
            },
            {
                id: 2,
                nombre: "php",
                porcentaje: 10,
            },
            {
                id: 3,
                nombre: "javascript",
                porcentaje: 10,
            },
            {
                id: 4,
                nombre: "css",
                porcentaje: 10,
            },
            {
                id: 5,
                nombre: "bootstrap",
                porcentaje: 10,
            },
            {
                id: 6,
                nombre: "jquery",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "laravel",
                porcentaje: 10,
            },
            {
                id: 8,
                nombre: "git",
                porcentaje: 20,
            }
        ],
    },
    {
        id: 3,
        href: "https://www.facebook.com/Ricana-Tours-107912725995677/",
        src: "./assets/proyectos/ricana-tours.svg",
        nombre: "Aplicación web con codeigniter en ricana tours",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 10,
            },
            {
                id: 2,
                nombre: "php",
                porcentaje: 10,
            },
            {
                id: 3,
                nombre: "javascript",
                porcentaje: 10,
            },
            {
                id: 4,
                nombre: "css",
                porcentaje: 10,
            },
            {
                id: 5,
                nombre: "bootstrap",
                porcentaje: 10,
            },
            {
                id: 6,
                nombre: "jquery",
                porcentaje: 10,
            },
            {
                id: 7,
                nombre: "codeigniter",
                porcentaje: 10,
            },
            {
                id: 8,
                nombre: "git",
                porcentaje: 20,
            },
            {
                id: 9,
                nombre: "UML",
                porcentaje: 10,
            },
        ],
    },
    {
        id: 4,
        href: "https://www.facebook.com/Ricana-Tours-107912725995677/",
        src: "./assets/proyectos/ricana-tours.svg",
        nombre: "Aplicación web con cakePHP en ricana tours",
        tecnologia: [
            {
                nombre: "bash",
                porcentaje: 60,
            },
        ],
    },
    {
        id: 5,
        href: "https://www.facebook.com/PdvsaROriente/",
        src: "./assets/proyectos/pdvsa.svg",
        nombre: "Migración del servicio de impresión a tecnología tecnología de información libre",
        tecnologia: [
            {
                id: 1,
                nombre: "bash",
                porcentaje: 40,
            },
            {
                id: 2,
                nombre: "samba",
                porcentaje: 20,
            },
            {
                id: 3,
                nombre: "cups",
                porcentaje: 20,
            },
            {
                id: 4,
                nombre: "Debian",
                porcentaje: 20,
            },
        ],
    },
];
const proyectos = [
    {
        nombre: "Geocercas con el lenguaje kotlin y google maps",
        imagen: "./assets/proyectos/kotlinmaps.png",
        url: "https://www.instagram.com/p/CK1OWPGnd3m/"
    },
    {
        nombre: "Geocercas con los frameworks ionic y angular",
        imagen: "./assets/proyectos/geocercaionic.png",
        url: "https://www.instagram.com/p/CKrHNDmn-8s/"
    },
    {
        nombre: "Geocercas con los frameworks nativescript, vuejs y google maps api",
        imagen: "./assets/proyectos/tns-geocerca.png",
        url: "https://www.instagram.com/p/CK9FdpJH96N/"
    },
];


/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 7, vars: 0, consts: [[1, "container-fluid"], [1, "jumbotron", "p-0"], [1, "banner"], [2, "color", "white", "font-weight", "bold", "font-style", "italic", "display", "flex", "justify-content", "center", "align-items", "center"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Promoci\u00F3n y desarrollo web de aplicaciones de calidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */", ".banner[_ngcontent-%COMP%]{\n      background: url(./assets/images/banner\\ web2.jpg);\n      height: 30rem;\n      width: 100%;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/carrusel/carrusel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carrusel/carrusel.component.ts ***!
  \************************************************/
/*! exports provided: CarruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarruselComponent", function() { return CarruselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CarruselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", contacto_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
class CarruselComponent {
    constructor() {
        this.servicios = _app_state__WEBPACK_IMPORTED_MODULE_1__["serviciosjs"];
    }
    ngOnInit() {
    }
}
CarruselComponent.ɵfac = function CarruselComponent_Factory(t) { return new (t || CarruselComponent)(); };
CarruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarruselComponent, selectors: [["app-carrusel"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-sm-6 col-md-3 py-2", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3", "py-2", 3, "id"]], template: function CarruselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarruselComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycnVzZWwvY2FycnVzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCOztFQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NhcnJ1c2VsL2NhcnJ1c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH0iXX0= */", "@keyframes miAnimacion{\n      0%{\n        opacity: 1;\n      }\n      20%{\n        opacity: 1;\n      }\n      30%{\n        opacity: 0;\n      }\n      90%{\n        opacity: 0;\n      }\n      100%{\n        opacity: 1;\n      }\n    }\n    \n    @-webkit-keyframes miAnimacion{\n      0%{\n        opacity: 1;\n      }\n      20%{\n        opacity: 1;\n      }\n      30%{\n        opacity: 0;\n      }\n      90%{\n        opacity: 0;\n      }\n      100%{\n        opacity: 1;\n      }\n    }\n    \n    @-moz-keyframes miAnimacion{\n      0%{\n        opacity: 1;\n      }\n      20%{\n        opacity: 1;\n      }\n      30%{\n        opacity: 0;\n      }\n      90%{\n        opacity: 0;\n      }\n      100%{\n        opacity: 1;\n      }\n    }\n    \n    #fondo1[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 18s infinite;\n      -webkit-animation:miAnimacion 10s linear 18s infinite;\n      -moz-animation:miAnimacion 10s linear 18s infinite;\n    }\n    \n    \n    #fondo2[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 12s infinite;\n      -webkit-animation:miAnimacion 10s linear 12s infinite;\n      -moz-animation:miAnimacion 10s linear 12s infinite;\n    }\n    \n    \n    #fondo3[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 6s infinite;\n      -webkit-animation:miAnimacion 10s linear 6s infinite;\n      -moz-animation:miAnimacion 10s linear 6s infinite;\n    }\n    \n    \n    #fondo4[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 0s infinite;\n      -webkit-animation:miAnimacion 10s linear 0s infinite;\n      -moz-animation:miAnimacion 10s linear 0s infinite;\n    }\n    \n    #fondo5[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 24s infinite;\n      -webkit-animation:miAnimacion 10s linear 24s infinite;\n      -moz-animation:miAnimacion 10s linear 24s infinite;\n    }\n    \n    #fondo6[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 28s infinite;\n      -webkit-animation:miAnimacion 10s linear 28s infinite;\n      -moz-animation:miAnimacion 10s linear 28s infinite;\n    }\n    \n    #fondo7[_ngcontent-%COMP%]{\n      animation:miAnimacion 10s linear 32s infinite;\n      -webkit-animation:miAnimacion 10s linear 32s infinite;\n      -moz-animation:miAnimacion 10s linear 32s infinite;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarruselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carrusel',
                templateUrl: './carrusel.component.html',
                styleUrls: ['./carrusel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contacto-ana/contacto-ana.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contacto-ana/contacto-ana.component.ts ***!
  \********************************************************/
/*! exports provided: ContactoAnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoAnaComponent", function() { return ContactoAnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ContactoAnaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
function ContactoAnaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoAnaComponent_div_1_div_1_Template, 9, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r1.id == 6);
} }
class ContactoAnaComponent {
    constructor() {
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
ContactoAnaComponent.ɵfac = function ContactoAnaComponent_Factory(t) { return new (t || ContactoAnaComponent)(); };
ContactoAnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoAnaComponent, selectors: [["app-contacto-ana"]], decls: 25, vars: 1, consts: [[1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"]], template: function ContactoAnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoAnaComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ingenieria Quimica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tYW5hL2NvbnRhY3RvLWFuYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdG8tYW5hL2NvbnRhY3RvLWFuYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoAnaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-ana',
                templateUrl: './contacto-ana.component.html',
                styleUrls: ['./contacto-ana.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contacto-empresa/contacto-empresa.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contacto-empresa/contacto-empresa.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactoEmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoEmpresaComponent", function() { return ContactoEmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ContactoEmpresaComponent {
    constructor(location, router) {
        this.router = router;
        //@ViewChild(LoginUsuariosComponent) child;
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.usuariologeado = false;
        this.cursosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["cursosjs"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
    }
    ngOnInit() {
    }
}
ContactoEmpresaComponent.ɵfac = function ContactoEmpresaComponent_Factory(t) { return new (t || ContactoEmpresaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactoEmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoEmpresaComponent, selectors: [["app-contacto-empresa"]], decls: 13, vars: 0, consts: [[1, "container-fluid", 2, "max-width", "1564px", "font-style", "italic"], [1, "card", 2, "width", "100%"], [1, "card-body"], [1, "mx-auto"]], template: function ContactoEmpresaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Somos actualmente una organizaci\u00F3n que se encarga de difundir el conocimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cede Cercado de Lima Per\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pendiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvLWVtcHJlc2EvY29udGFjdG8tZW1wcmVzYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoEmpresaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-empresa',
                templateUrl: './contacto-empresa.component.html',
                styleUrls: ['./contacto-empresa.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto-jermany/contacto-jermany.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contacto-jermany/contacto-jermany.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactoJermanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoJermanyComponent", function() { return ContactoJermanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ContactoJermanyComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
function ContactoJermanyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoJermanyComponent_div_2_div_1_Template, 9, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r1.id == 7);
} }
class ContactoJermanyComponent {
    constructor() {
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
ContactoJermanyComponent.ɵfac = function ContactoJermanyComponent_Factory(t) { return new (t || ContactoJermanyComponent)(); };
ContactoJermanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoJermanyComponent, selectors: [["app-contacto-jermany"]], decls: 26, vars: 1, consts: [[1, "container-fluid"], [2, "display", "block", "height", "5rem"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"]], template: function ContactoJermanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactoJermanyComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tamVybWFueS9jb250YWN0by1qZXJtYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by1qZXJtYW55L2NvbnRhY3RvLWplcm1hbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoJermanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-jermany',
                templateUrl: './contacto-jermany.component.html',
                styleUrls: ['./contacto-jermany.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contacto-juan/contacto-juan.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contacto-juan/contacto-juan.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactoJuanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoJuanComponent", function() { return ContactoJuanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactoJuanComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
function ContactoJuanComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoJuanComponent_div_1_div_1_Template, 9, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r1.id == 3);
} }
class ContactoJuanComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.trabajo_grado_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["trabajo_grado_luis"];
        this.experiencia_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["experiencia_luis"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
        this.proyectos = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos"];
    }
    ngOnInit() {
    }
}
ContactoJuanComponent.ɵfac = function ContactoJuanComponent_Factory(t) { return new (t || ContactoJuanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactoJuanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoJuanComponent, selectors: [["app-contacto-juan"]], decls: 11, vars: 1, consts: [[1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"]], template: function ContactoJuanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoJuanComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ASESOR COMERCIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tanVhbi9jb250YWN0by1qdWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by1qdWFuL2NvbnRhY3RvLWp1YW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoJuanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-juan',
                templateUrl: './contacto-juan.component.html',
                styleUrls: ['./contacto-juan.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto-luis/contacto-luis.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contacto-luis/contacto-luis.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactoLuisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoLuisComponent", function() { return ContactoLuisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactoLuisComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r6.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r6.descripcion);
} }
function ContactoLuisComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoLuisComponent_div_2_div_1_Template, 9, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r6.id == 1);
} }
function ContactoLuisComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactoLuisComponent_div_35_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const casa_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.obtenerDetalleTrabajoGrado(casa_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r9.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r9.nombre);
} }
function ContactoLuisComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r12.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r12.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r12.nombre);
} }
function ContactoLuisComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r13.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r13.nombre);
} }
function ContactoLuisComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r14.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r14.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContactoLuisComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tec_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tec_r15.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tec_r15.porcentaje, "% ");
} }
class ContactoLuisComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.trabajo_grado_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["trabajo_grado_luis"];
        this.experiencia_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["experiencia_luis"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
        this.proyectos = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos"];
    }
    obtenerDetalleTrabajoGrado(id) {
    }
    ngOnInit() {
    }
}
ContactoLuisComponent.ɵfac = function ContactoLuisComponent_Factory(t) { return new (t || ContactoLuisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactoLuisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoLuisComponent, selectors: [["app-contacto-luis"]], decls: 91, vars: 6, consts: [[2, "width", "100%", "height", "1rem", "display", "block"], [1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "card", 2, "width", "100%"], [1, "card-body"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapTapGrado", "aria-expanded", "false", "aria-controls", "collapTapGrado", 1, "btn", "btn-secondary"], ["id", "collapTapGrado", 1, "collapse", "show"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapTapExperiencia", "aria-expanded", "false", "aria-controls", "collapTapExperiencia", 1, "btn", "btn-secondary"], ["id", "collapTapExperiencia", 1, "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapTapProyectos", "aria-expanded", "false", "aria-controls", "collapTapProyectos", 1, "btn", "btn-secondary"], ["id", "collapTapProyectos", 1, "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapTapSoporteTecnico", "aria-expanded", "false", "aria-controls", "collapTapSoporteTecnico", 1, "btn", "btn-secondary"], ["id", "collapTapSoporteTecnico", 1, "collapse"], [1, "col-sm-6", "col-md-3"], ["src", "w3images/house5.jpg", 2, "width", "100%"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapTapServicioComunitario", "aria-expanded", "false", "aria-controls", "collapTapServicioComunitario", 1, "btn", "btn-secondary"], ["id", "collapTapServicioComunitario", 1, "collapse"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"], ["target", "_blank", 1, "dropdown-item", 3, "title", "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-info", 3, "click"], ["ng-click", "obtenerDetalleExperiencia(casa.id)", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-info"], ["target", "_blank", 1, "dropdown-item", 3, "href"], ["ng-click", "obtenerDetalle(casa.id)", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-info"], [1, "col-sm-3", "col-md-3"]], template: function ContactoLuisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactoLuisComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ingenier\u00EDa en Computaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\nPROYECTOS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dise\u00F1o de diagramas UML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\nASESOR\u00CDA (A nivel nacional)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Trabajo de grado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContactoLuisComponent_div_35_Template, 7, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Experiencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ContactoLuisComponent_div_44_Template, 7, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Proyectos realizados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ContactoLuisComponent_div_53_Template, 7, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Soporte tecnico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Summer House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Servicio comunitario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ContactoLuisComponent_div_76_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Tecnolog\u00EDas empleadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ContactoLuisComponent_div_87_Template, 7, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trabajo_grado_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencia_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos_realizados_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tecnologia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tbHVpcy9jb250YWN0by1sdWlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by1sdWlzL2NvbnRhY3RvLWx1aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoLuisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-luis',
                templateUrl: './contacto-luis.component.html',
                styleUrls: ['./contacto-luis.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto-patricia/contacto-patricia.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/contacto-patricia/contacto-patricia.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactoPatriciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPatriciaComponent", function() { return ContactoPatriciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactoPatriciaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
function ContactoPatriciaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoPatriciaComponent_div_1_div_1_Template, 9, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r1.id == 5);
} }
class ContactoPatriciaComponent {
    constructor(router) {
        this.router = router;
        this.ventas_madre = _app_state__WEBPACK_IMPORTED_MODULE_1__["ventas_madrejs"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
ContactoPatriciaComponent.ɵfac = function ContactoPatriciaComponent_Factory(t) { return new (t || ContactoPatriciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactoPatriciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoPatriciaComponent, selectors: [["app-contacto-patricia"]], decls: 25, vars: 1, consts: [[1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"]], template: function ContactoPatriciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoPatriciaComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Medico Cirujano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tcGF0cmljaWEvY29udGFjdG8tcGF0cmljaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCOztFQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvLXBhdHJpY2lhL2NvbnRhY3RvLXBhdHJpY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoPatriciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-patricia',
                templateUrl: './contacto-patricia.component.html',
                styleUrls: ['./contacto-patricia.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto-percy/contacto-percy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contacto-percy/contacto-percy.component.ts ***!
  \************************************************************/
/*! exports provided: ContactoPercyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPercyComponent", function() { return ContactoPercyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactoPercyComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
function ContactoPercyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoPercyComponent_div_1_div_1_Template, 9, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r1.id == 2);
} }
class ContactoPercyComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.trabajo_grado_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["trabajo_grado_luis"];
        this.experiencia_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["experiencia_luis"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
        this.proyectos = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos"];
    }
    ngOnInit() {
    }
}
ContactoPercyComponent.ɵfac = function ContactoPercyComponent_Factory(t) { return new (t || ContactoPercyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactoPercyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoPercyComponent, selectors: [["app-contacto-percy"]], decls: 70, vars: 1, consts: [[1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], ["align", "center"], [1, "row"], [1, "col-sm-6", "col-md-3"], ["src", "w3images/house5.jpg", 2, "width", "100%"], ["src", "w3images/house2.jpg", 2, "width", "100%"], [1, "w3-display-topleft", "w3-black", "w3-padding"], ["src", "w3images/house3.jpg", 2, "width", "100%"], ["src", "w3images/house4.jpg", 2, "width", "100%"], ["src", "w3images/house2.jpg", 2, "width", "99%"], ["src", "w3images/house5.jpg", 2, "width", "99%"], ["src", "w3images/house4.jpg", 2, "width", "99%"], ["src", "w3images/house3.jpg", 2, "width", "99%"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"]], template: function ContactoPercyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoPercyComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "INGENIER\u00CDA CIVIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dise\u00F1o y C\u00E1lculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Planos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Precios Unitarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Programas de Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Obras en Ejecuci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Proyectos Realizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Summer House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Brick House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Renovated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Barn House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Summer House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Brick House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Renovated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Barn House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8tcGVyY3kvY29udGFjdG8tcGVyY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCOztFQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvLXBlcmN5L2NvbnRhY3RvLXBlcmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoPercyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-percy',
                templateUrl: './contacto-percy.component.html',
                styleUrls: ['./contacto-percy.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacto-yolanda/contacto-yolanda.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contacto-yolanda/contacto-yolanda.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactoYolandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoYolandaComponent", function() { return ContactoYolandaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactoYolandaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r2.descripcion);
} }
function ContactoYolandaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoYolandaComponent_div_1_div_1_Template, 9, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contacto_r2.id == 4);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ContactoYolandaComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, casa_r5.id == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r5.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", casa_r5.alt);
} }
class ContactoYolandaComponent {
    constructor(router) {
        this.router = router;
        this.ventas_madre = _app_state__WEBPACK_IMPORTED_MODULE_1__["ventas_madrejs"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
ContactoYolandaComponent.ɵfac = function ContactoYolandaComponent_Factory(t) { return new (t || ContactoYolandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactoYolandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoYolandaComponent, selectors: [["app-contacto-yolanda"]], decls: 32, vars: 2, consts: [[1, "container-fluid"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "max-width", "1564px"], [2, "text-align", "center"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "col-xl-6", "col-md-6", "col-lg-6", "col-sm-12", "col-xs-12"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngIf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], [2, "width", "100%", 3, "src"], [1, "carousel-item", 3, "ngClass"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [1, "d-block", "w-100", 3, "src", "alt"]], template: function ContactoYolandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactoYolandaComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contador publico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PROYECTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ASESOR\u00CDA (A nivel nacional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Levantamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Presupuestos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programas de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactoYolandaComponent_div_31_Template, 3, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ventas_madre);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8teW9sYW5kYS9jb250YWN0by15b2xhbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by15b2xhbmRhL2NvbnRhY3RvLXlvbGFuZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoYolandaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto-yolanda',
                templateUrl: './contacto-yolanda.component.html',
                styleUrls: ['./contacto-yolanda.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/emprender-internet/emprender-internet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/emprender-internet/emprender-internet.component.ts ***!
  \********************************************************************/
/*! exports provided: EmprenderInternetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprenderInternetComponent", function() { return EmprenderInternetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function EmprenderInternetComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r1.nombre);
} }
class EmprenderInternetComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
    }
    ngOnInit() {
    }
}
EmprenderInternetComponent.ɵfac = function EmprenderInternetComponent_Factory(t) { return new (t || EmprenderInternetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmprenderInternetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmprenderInternetComponent, selectors: [["app-emprender-internet"]], decls: 14, vars: 1, consts: [[2, "width", "100%", "height", "1rem", "display", "block"], [1, "container-fluid", 2, "max-width", "1564px"], [1, "card", 2, "width", "100%"], [1, "card-body"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-secondary"], ["id", "collapseExample", 1, "collapse", "show"], [1, "card", "card-body"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"]], template: function EmprenderInternetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ejemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmprenderInternetComponent_div_11_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprender_internetjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wcmVuZGVyLWludGVybmV0L2VtcHJlbmRlci1pbnRlcm5ldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvZW1wcmVuZGVyLWludGVybmV0L2VtcHJlbmRlci1pbnRlcm5ldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprenderInternetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emprender-internet',
                templateUrl: './emprender-internet.component.html',
                styleUrls: ['./emprender-internet.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function FooterComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", casa_r1.nombre, " - ", casa_r1.titulo, " ");
} }
class FooterComponent {
    constructor(location, router) {
        this.router = router;
        //@ViewChild(LoginUsuariosComponent) child;
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.usuariologeado = false;
        this.cursosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["cursosjs"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 60, vars: 1, consts: [[1, "footer", "py-2", "text-xs-center", "text-light", "bg-dark"], [1, "container", 2, "font-style", "italic"], ["id", "none", 1, "zolo_footer_container_area"], ["data-parallax", "", 1, "footer"], [1, "footer-widgets", "footer_layout_columns_3"], [1, "zolo-container"], [1, "zolo_footer_padding"], [1, "row"], [1, "col-xl-4", "col-sm-6", "col-md-3"], ["id", "zolo_about_me-widget-2", 1, "widget", "zolo_about_info"], [1, "zolo-title", "widget-title"], [1, "zolo-about-me", "style-default", "avtar-style-circle"], [1, "zolo-about-me-header", "clr"], [1, "zolo-about-me-name"], [1, "zolo-about-me-text", "clr"], [1, "navbar", "navbar-expand-lg"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "text-light"], [1, "nav-item", "col-xl-2", "col-md-2", "col-lg-2", "col-sm-2", "col-xs-2"], ["target", "_blank", "href", "https://www.facebook.com/ProgramacionParaAprender"], [1, "fab", "fa-facebook-f"], ["target", "_blank", "href", "https://twitter.com/ProgramacionPa1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://www.instagram.com/programacionparaaprender/"], [1, "fab", "fa-instagram"], ["target", "_blank", "href", "https://www.linkedin.com/company/programacionparaaprender/?viewAsMember=true"], [1, "fab", "fa-linkedin-in"], ["target", "_blank", "href", "https://programacionparaaprender.wordpress.com/"], [1, "fab", "fa-wordpress"], ["id", "zolo_custom_menu-widget-2", 1, "widget", "zolo_custom_menu"], [1, "apress-widget-menu-vertical", "one"], ["id", "menu-diseno-web", 1, "menu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "contact_info-widget-2", 1, "widget", "contact_info_widget"], [1, "widget-title", "footer_widget_title"], [1, "copyright_wrap"], [1, "copyright"], [1, "zolo_copyright_padding"], [1, "copyright_social"], [1, "zolo-social"], [1, "text-center"], [1, "nav-item"], [1, "nav-link", "text-light", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aside", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bienvenidos a Programaci\u00F3n para aprender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nuestras redes sociales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "aside", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bienvenidos a Programaci\u00F3n para aprender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, FooterComponent_li_45_Template, 3, 3, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "aside", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bienvenidos a Programaci\u00F3n para aprender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2021 \u00A9 Programaci\u00F3n para aprender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/geocerca-google/geocerca-google.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/geocerca-google/geocerca-google.component.ts ***!
  \**************************************************************/
/*! exports provided: GeocercaGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocercaGoogleComponent", function() { return GeocercaGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function GeocercaGoogleComponent_agm_marker_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 5);
} if (rf & 2) {
    const marker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", marker_r1.lat)("longitude", marker_r1.lng);
} }
class GeocercaGoogleComponent {
    /* paths: Array<LatLngLiteral> = [
      {lat:51.69612661762577,lng:6.756516564459343},
      {lat:51.9710789023937,lng:7.025681603521843},
      {lat:52.00490726563561,lng:7.811204064459343},
      {lat:51.87961464450517,lng:8.228684533209343},
      {lat:51.699531328872304,lng:8.096848595709343},
      {lat:51.52556429514715,lng:7.448655236334343}] */
    //paths: LatLngLiteral[] = []
    /* paths: Array<LatLngLiteral> = [
      *     { lat: 0,  lng: 10 },
      *     { lat: 0,  lng: 20 },
      *     { lat: 10, lng: 20 },
      *     { lat: 10, lng: 10 },
      *     { lat: 0,  lng: 10 }
      *   ] */
    constructor(router) {
        this.router = router;
        this.title = 'Ejemplo simpre de usar Google maps en angular';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.clickeable = true;
        this.draggable = true;
        this.map = null;
        this.tituloMarker = 'Titulo marker';
        this.markers = [];
        this.color = "black";
        this.visible = true;
        this.paths = [];
    }
    ngOnInit() {
    }
    limpiar() {
        this.markers = [];
        this.paths = [];
    }
    //google.maps.MouseEvent
    mapClick(event) {
        //console.log(JSON.stringify(event.coords));
        let position = {
            lat: event.coords.lat,
            lng: event.coords.lng
        };
        this.markers.push(position);
        this.paths = Object.values(this.markers);
        /* this.paths.push({
          lat: event.coords.lat,
          lng: event.coords.lng
        }); */
        console.log(this.paths);
    }
}
GeocercaGoogleComponent.ɵfac = function GeocercaGoogleComponent_Factory(t) { return new (t || GeocercaGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GeocercaGoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeocercaGoogleComponent, selectors: [["app-geocerca-google"]], decls: 8, vars: 12, consts: [["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [2, "width", "100%", "height", "1rem", "display", "block"], [3, "latitude", "longitude", "clickableIcons", "draggable", "mapClick"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [3, "clickable", "visible", "editable", "zIndex", "draggable", "paths"], [3, "latitude", "longitude"]], template: function GeocercaGoogleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeocercaGoogleComponent_Template_button_click_2_listener() { return ctx.limpiar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Limpiar\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function GeocercaGoogleComponent_Template_agm_map_mapClick_5_listener($event) { return ctx.mapClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeocercaGoogleComponent_agm_marker_6_Template, 1, 2, "agm-marker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "agm-polygon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("clickableIcons", ctx.clickeable)("draggable", ctx.draggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickable", true)("visible", true)("editable", true)("zIndex", 1)("draggable", true)("paths", ctx.paths);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolygon"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvY2VyY2EtZ29vZ2xlL2dlb2NlcmNhLWdvb2dsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvZ2VvY2VyY2EtZ29vZ2xlL2dlb2NlcmNhLWdvb2dsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeocercaGoogleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-geocerca-google',
                templateUrl: './geocerca-google.component.html',
                styleUrls: ['./geocerca-google.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/juegos/vieja/vieja.component.ts":
/*!*************************************************!*\
  !*** ./src/app/juegos/vieja/vieja.component.ts ***!
  \*************************************************/
/*! exports provided: ViejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViejaComponent", function() { return ViejaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ViejaComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_li_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.jumpTo(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Go to move #", i_r2, "");
} }
class ViejaComponent {
    constructor() {
        this.quiengano = 'Next player: X';
        this.squares = Array(9).fill(null);
        this.hayganador = 0;
        this.contador = 0;
        this.history = [
            {
                squares: Array(9).fill(null)
            }
        ];
        this.stepNumber = 0;
        this.xIsNext = true;
        //this.state.hayganador = 0;
        //this.state.xIsNext = true;
        //this.state.contador = 0;
        //this.state.stepNumber = 0;
        //var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
        //this.state.history.push(squares);
    }
    ngOnInit() {
        /* var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
        this.state.history.push(squares); */
    }
    quiengano2() {
        const squares = this.history[this.stepNumber];
        if (this.hayganador == 1) {
            return 'Winner: ' + (this.xIsNext ? 'O' : 'X');
        }
        else {
            return 'Next player: ' + (this.xIsNext ? 'X' : 'O');
        }
    }
    mostrarSquares(i) {
        /* const current = this.history[history.length - 1];
        return current.squares[i] == null ? ' ':current.squares[i].toString(); */
        return this.squares[i];
    }
    handleClick(i) {
        this.quiengano = this.quiengano2();
        if (this.hayganador == 1) {
            return;
        }
        //console.log(i);
        //console.log(this.squares[i])
        const history = this.history.slice(0, this.stepNumber + 1);
        //const current = history[history.length - 1];
        //const squares = current.squares.slice();
        const squares = this.squares.slice();
        const caracter = this.xIsNext ? 'X' : 'O';
        this.squares[i] = caracter.toString();
        //this.state.history.push({squares: squares});
        //this.state.stepNumber++;
        this.history = history.concat([{ squares: squares }]),
            this.stepNumber = history.length;
        this.xIsNext = !this.xIsNext;
        console.log(this.squares);
        if (this.calculateWinner(this.squares)) {
            this.hayganador = 1;
        }
        else {
            this.hayganador = 0;
        }
    }
    jumpTo(step) {
        this.stepNumber = 0;
        this.xIsNext = (step % 2) === 0;
        this.squares = this.history[step].squares;
        this.history = [
            {
                squares: Array(9).fill(null)
            }
        ];
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}
ViejaComponent.ɵfac = function ViejaComponent_Factory(t) { return new (t || ViejaComponent)(); };
ViejaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViejaComponent, selectors: [["app-vieja"]], decls: 42, vars: 11, consts: [["className", "game"], ["className", "game-board"], [2, "float", "left", "width", "300px", "display", "block"], ["className", "board-row", 2, "float", "left", "width", "100%"], [2, "float", "left", "width", "33.33%"], ["className", "square", 2, "margin", "0", "padding-left", "0", "list-style", "none", "width", "100px", "height", "100px", 3, "click"], ["className", "game-info", 2, "float", "left", "width", "100%"], [2, "float", "left", "width", "100%"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function ViejaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vieja works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_8_listener() { return ctx.handleClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_11_listener() { return ctx.handleClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_14_listener() { return ctx.handleClick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_18_listener() { return ctx.handleClick(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_21_listener() { return ctx.handleClick(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_24_listener() { return ctx.handleClick(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_28_listener() { return ctx.handleClick(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_31_listener() { return ctx.handleClick(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_34_listener() { return ctx.handleClick(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ViejaComponent_li_41_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[0], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[1], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[2], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[3], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[4], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[5], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[6], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[7], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[8], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quiengano, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.history);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy92aWVqYS92aWVqYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViejaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vieja',
                templateUrl: './vieja.component.html',
                styleUrls: ['./vieja.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/maestria-sanmarcos/maestria-sanmarcos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/maestria-sanmarcos/maestria-sanmarcos.component.ts ***!
  \********************************************************************/
/*! exports provided: MaestriaSanMarcosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaestriaSanMarcosComponent", function() { return MaestriaSanMarcosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MaestriaSanMarcosComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](casa_r1.nombre);
} }
class MaestriaSanMarcosComponent {
    constructor(router) {
        this.router = router;
        this.emprender_internetjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["emprender_internetjs"];
    }
    ngOnInit() {
    }
}
MaestriaSanMarcosComponent.ɵfac = function MaestriaSanMarcosComponent_Factory(t) { return new (t || MaestriaSanMarcosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MaestriaSanMarcosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaestriaSanMarcosComponent, selectors: [["app-maestria-sanmarcos"]], decls: 19, vars: 1, consts: [[2, "width", "100%", "height", "5rem", "display", "block"], [1, "container-fluid", 2, "max-width", "1564px"], [1, "card", 2, "width", "100%"], [1, "card-body"], [1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-secondary"], ["id", "collapseExample", 1, "collapse", "show"], [1, "card", "card-body"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [2, "width", "100%", 3, "src", "title"], [2, "overflow", "hidden"]], template: function MaestriaSanMarcosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Maestria Ingenier\u00EDa de Sistemas e Informatica menci\u00F3n Ingenier\u00EDa de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ejemplos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MaestriaSanMarcosComponent_div_16_Template, 5, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprender_internetjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFlc3RyaWEtc2FubWFyY29zL21hZXN0cmlhLXNhbm1hcmNvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvbWFlc3RyaWEtc2FubWFyY29zL21hZXN0cmlhLXNhbm1hcmNvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaestriaSanMarcosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maestria-sanmarcos',
                templateUrl: './maestria-sanmarcos.component.html',
                styleUrls: ['./maestria-sanmarcos.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _servicios_contacto_servicios_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios-contacto/servicios-contacto.component */ "./src/app/servicios-contacto/servicios-contacto.component.ts");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nosotros/nosotros.component */ "./src/app/nosotros/nosotros.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");






class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-servicios-contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-proyectos");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _servicios_contacto_servicios_contacto_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosContactoComponent"], _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_3__["NosotrosComponent"], _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function MenuComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", casa_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r3.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", casa_r3.nombre, " ");
} }
function MenuComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r4.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", casa_r4.nombre, " ");
} }
function MenuComponent_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r5.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", casa_r5.nombre, " - ", casa_r5.titulo, "");
} }
class MenuComponent {
    constructor(location, router) {
        this.router = router;
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.usuariologeado = false;
        this.cursosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["cursosjs"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
        this.contactosjs = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 47, vars: 3, consts: [[1, "container-fluid", 2, "font-style", "italic"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "container-fluid"], ["href", "/", 1, "navbar-brand"], ["src", "./assets/images/principal.jpg", "width", "50", "height", "50", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "/", 1, "nav-link", "active"], ["aria-current", "page", "href", "/maestria-sanmarcos", 1, "nav-link", "active"], [1, "nav-item", "dropdown"], ["href", "/", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "target", "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "class", "dropdown-item", 3, "href", 4, "ngFor", "ngForOf"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["href", "agencia_empresas", 1, "dropdown-item"], ["href", "agencia_profesionales", 1, "dropdown-item"], ["href", "agencia_emprendedores", 1, "dropdown-item"], ["id", "headerContactosId", "aria-labelledby", "navbarDpdContactos", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "href", 4, "ngFor", "ngForOf"], ["href", "contacto_empresa", 1, "nav-link"], [1, "d-flex", "fst-italic"], ["id", "iBuscar", "name", "nBuscar", "type", "search", "placeholder", "Buscar", "aria-label", "Search", 1, "form-control", "me-2", "fst-italic"], ["type", "submit", 1, "btn", "btn-outline-secondary", "fst-italic"], [1, "dropdown-item", 3, "target", "href"], ["target", "_blank", 1, "dropdown-item", 3, "href"], [1, "dropdown-item", 3, "href"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Maestr\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cursos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_a_19_Template, 2, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Proyectos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MenuComponent_a_24_Template, 2, 2, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Agencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Profesionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Emprendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Contactos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MenuComponent_a_39_Template, 2, 3, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cursosjs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos_realizados_luis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactosjs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nosotros/nosotros.component.ts":
/*!************************************************!*\
  !*** ./src/app/nosotros/nosotros.component.ts ***!
  \************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NosotrosComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contacto_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
class NosotrosComponent {
    constructor() {
        this.servicios = _app_state__WEBPACK_IMPORTED_MODULE_1__["serviciosjs"];
        this.contactos = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
    }
    ngOnInit() {
    }
}
NosotrosComponent.ɵfac = function NosotrosComponent_Factory(t) { return new (t || NosotrosComponent)(); };
NosotrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NosotrosComponent, selectors: [["app-nosotros"]], decls: 9, vars: 1, consts: [[1, "container-fluid"], [2, "text-align", "center", "font-style", "italic"], [1, "row"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 3, "href"], ["width", "250", "height", "250", 3, "src"], [2, "font-style", "italic !important"]], template: function NosotrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NosotrosComponent_div_8_Template, 9, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCOztFQUV2QiIsImZpbGUiOiJzcmMvYXBwL25vc290cm9zL25vc290cm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NosotrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nosotros',
                templateUrl: './nosotros.component.html',
                styleUrls: ['./nosotros.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/proyectos/proyectos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.ts ***!
  \**************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProyectosComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", casa_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", casa_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", casa_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProyectosComponent {
    constructor() {
        this.descripcion_p = {
            titulo: "Proyectos",
            descripcion: "Los siguientes proyectos fueron desarrollados"
        };
        this.servicios = _app_state__WEBPACK_IMPORTED_MODULE_1__["serviciosjs"];
        this.contactos = _app_state__WEBPACK_IMPORTED_MODULE_1__["contactosjs"];
        this.proyectos_realizados_luis = _app_state__WEBPACK_IMPORTED_MODULE_1__["proyectos_realizados_luis"];
    }
    ngOnInit() {
    }
}
ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) { return new (t || ProyectosComponent)(); };
ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectosComponent, selectors: [["app-proyectos"]], decls: 12, vars: 1, consts: [[1, "container-fluid", 2, "font-style", "italic !important"], [2, "text-align", "center"], [1, "row", 2, "font-style", "italic !important"], ["class", "col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3"], ["target", "_blank", 1, "dropdown-item", 2, "font-style", "italic !important", 3, "title", "href"], ["data-src", "images/principal.jpg", "width", "100%", "height", "100%", 2, "width", "100%", 3, "src"]], template: function ProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Los siguientes proyectos fueron desarrollados o se realizaron mejoras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProyectosComponent_div_11_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos_realizados_luis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proyectos',
                templateUrl: './proyectos.component.html',
                styleUrls: ['./proyectos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicios-contacto/servicios-contacto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/servicios-contacto/servicios-contacto.component.ts ***!
  \********************************************************************/
/*! exports provided: ServiciosContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosContactoComponent", function() { return ServiciosContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.state */ "./src/app/app.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ServiciosContactoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contacto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", contacto_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", contacto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contacto_r1.descripcion);
} }
class ServiciosContactoComponent {
    constructor() {
        this.servicios = _app_state__WEBPACK_IMPORTED_MODULE_1__["serviciosjs"];
    }
    ngOnInit() {
    }
}
ServiciosContactoComponent.ɵfac = function ServiciosContactoComponent_Factory(t) { return new (t || ServiciosContactoComponent)(); };
ServiciosContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosContactoComponent, selectors: [["app-servicios-contacto"]], decls: 9, vars: 1, consts: [[1, "container-fluid"], [2, "font-style", "italic"], [1, "row"], ["class", "col-sm-6 col-md-3 py-2", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3", "py-2"], [1, "card", "caja", 2, "height", "14rem", "overflow", "hidden", "font-style", "italic"], [1, "card-body"], ["target", "_blank", "data-toggle", "tooltip", "data-placement", "top", 2, "text-decoration", "none !important", "color", "black !important", 3, "title", "href"]], template: function ServiciosContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuestros servicios profesionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dise\u00F1o, desarrollo y creaci\u00F3n de aplicaciones web en Programaci\u00F3n para aprender - Blog personales, Comunidades o Empresas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiciosContactoComponent_div_8_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljaW9zLWNvbnRhY3RvL3NlcnZpY2lvcy1jb250YWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljaW9zLWNvbnRhY3RvL3NlcnZpY2lvcy1jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */", ".cards[_ngcontent-%COMP%] {\n   transition: all 0.2s ease;\n   cursor: pointer\n   }\n\n   .cards[_ngcontent-%COMP%]:hover {\n       box-shadow: 5px 6px 6px 2px #e9ecef;\n       transform: scale(1.1)\n   }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiciosContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicios-contacto',
                templateUrl: './servicios-contacto.component.html',
                styleUrls: ['./servicios-contacto.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
// main.ts persisted
/* import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';
 
getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'user',
    'posts',
    'tasks',
    'users',
    'login'
  ],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}); */ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bus209\Documents\htdocs\mi-pagina-web2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map