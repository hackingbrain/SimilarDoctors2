webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_doctor_list_doctor_list_component__ = __webpack_require__("../../../../../src/app/components/doctor-list/doctor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_doctor_detail_doctor_detail_component__ = __webpack_require__("../../../../../src/app/components/doctor-detail/doctor-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_doctor_list_doctor_list_component__["a" /* DoctorListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_doctor_detail_doctor_detail_component__["a" /* DoctorDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["OrderModule"]
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_doctor_list_doctor_list_component__ = __webpack_require__("../../../../../src/app/components/doctor-list/doctor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_doctor_detail_doctor_detail_component__ = __webpack_require__("../../../../../src/app/components/doctor-detail/doctor-detail.component.ts");



var routes = [
    {
        path: '',
        redirectTo: 'doctors',
        pathMatch: 'full'
    },
    {
        path: 'doctors',
        component: __WEBPACK_IMPORTED_MODULE_1__components_doctor_list_doctor_list_component__["a" /* DoctorListComponent */]
    },
    {
        path: 'doctors/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_doctor_detail_doctor_detail_component__["a" /* DoctorDetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'doctors'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/doctor-detail/doctor-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/doctor-detail/doctor-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"doctor\">\n   <div class=\"col-xs-12 col-md-4\">\n    <h2>\n      {{doctor.name}}\n    </h2>\n    <p>\n      {{doctor.specialty}}   {{doctor.reviewScore}}\n    </p>\n  </div> \n   <a *ngFor=\"let other of similarDoctors | orderBy: order\"\n    [routerLink]=\"['/doctors', other.id]\">\n    <div class=\"col-xs-12 col-md-4\">\n      <div class=\"thumbnail\">\n        <div class=\"thumbnail\">\n          <div class=\"caption\">\n            <p>{{other.name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </a>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/doctor-detail/doctor-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DoctorDetailComponent = (function () {
    function DoctorDetailComponent(route, data) {
        this.route = route;
        this.data = data;
        this.order = 'reviewScore';
    }
    DoctorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.doctor = _this.data.getDoctor(+params['id']);
            _this.similarDoctors = _this.data.getSimilar(+params['id']);
        });
        //  this.getSimilarDoctors(this.doctor);
    };
    return DoctorDetailComponent;
}());
DoctorDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-doctor-detail',
        template: __webpack_require__("../../../../../src/app/components/doctor-detail/doctor-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/doctor-detail/doctor-detail.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], DoctorDetailComponent);

var _a;
//# sourceMappingURL=doctor-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/doctor-list/doctor-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/doctor-list/doctor-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"jumbotron\">\n    <h1>Find Your Doctor</h1>\n  </div>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\" let doctor of doctors | orderBy: order\" [routerLink]=\"['/doctors', doctor.id]\"> \n      \n      <strong>{{doctor.name}}</strong>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/doctor-list/doctor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DoctorListComponent = (function () {
    function DoctorListComponent(dataService) {
        this.dataService = dataService;
        this.order = 'name';
    }
    DoctorListComponent.prototype.ngOnInit = function () {
        this.getDoctors();
    };
    DoctorListComponent.prototype.getDoctors = function () {
        this.doctors = this.dataService.getDoctors();
    };
    return DoctorListComponent;
}());
DoctorListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-doctor-list',
        template: __webpack_require__("../../../../../src/app/components/doctor-list/doctor-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/doctor-list/doctor-list.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], DoctorListComponent);

//# sourceMappingURL=doctor-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mock-doctors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOCTORS; });
var DOCTORS = [
    {
        id: 1,
        name: "Johnson Smith",
        specialty: "Acupuncture",
        area: "Seattle, Washington",
        reviewScore: 5.0
    },
    {
        id: 2,
        name: "Raza Black",
        specialty: "Internal Medicine",
        area: "Oakland, California",
        reviewScore: 5.0
    },
    {
        id: 3,
        name: "Zack Hong",
        specialty: "Naturopathy",
        area: "San Mateo, California",
        reviewScore: 2.0
    },
    {
        id: 4,
        name: "Kavita Wei",
        specialty: "Infectious Disease",
        area: "Palo Alto, California",
        reviewScore: 5.0
    },
    {
        id: 5,
        name: "Elwin Bustos",
        specialty: "Chiropractic",
        area: "San Jose, California",
        reviewScore: 4.0
    },
    {
        id: 6,
        name: "Amir Jundi",
        specialty: "Cardiology",
        area: "Pleasanto, California",
        reviewScore: 3.0
    },
    {
        id: 7,
        name: "Mandy Wang",
        specialty: "Anesthesiology",
        area: "Buffalo, New York",
        reviewScore: 5.0
    },
    {
        id: 8,
        name: "Jon Wong",
        specialty: "Hepatology",
        area: "Syracuse, New York",
        reviewScore: 5.0
    },
    {
        id: 9,
        name: "Angel Zong",
        specialty: "Diagnostic Radiology",
        area: "Ithaca, New York",
        reviewScore: 2.0
    },
    {
        id: 10,
        name: "Vivian Chow",
        specialty: "Endocrinology",
        area: "Rochester, New York",
        reviewScore: 5.0
    },
    {
        id: 11,
        name: "Appa Prada",
        specialty: "Hematology",
        area: "Pittsburgh, Pennsylvania",
        reviewScore: 4.0
    },
    {
        id: 12,
        name: "Jennifer Smith",
        specialty: "Nephrology",
        area: "Richmond, Virginia",
        reviewScore: 3.0
    },
    {
        id: 13,
        name: "Christine Shin",
        specialty: "Internal Medicine",
        area: "Oakland, California",
        reviewScore: 5.0
    },
    {
        id: 14,
        name: "Sally Dan",
        specialty: "Internal Medicine",
        area: "Oakland, California",
        reviewScore: 3.0
    }
];
//# sourceMappingURL=mock-doctors.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_doctors__ = __webpack_require__("../../../../../src/app/mock-doctors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.doctors = __WEBPACK_IMPORTED_MODULE_1__mock_doctors__["a" /* DOCTORS */];
    }
    DataService.prototype.getDoctors = function () {
        return this.doctors;
    };
    DataService.prototype.getDoctor = function (id) {
        return this.doctors.find(function (doctor) { return doctor.id === id; });
    };
    DataService.prototype.getSimilar = function (id) {
        var specialty = this.doctors.find(function (doctor) { return doctor.id === id; }).specialty;
        var name = this.doctors.find(function (doctor) { return doctor.id === id; }).name;
        return this.doctors.filter(function (doctor) { return doctor.specialty === specialty && doctor.name !== name; });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map