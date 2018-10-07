(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".span {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    width: 115px;\r\n}\r\n\r\n.text {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n\r\nh1 {\r\n    display: table;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n  <title>INPOL</title>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.4/css/bulma.min.css\">\n</head>\n<body>\n<div>\n  <section class=\"section\">\n    <div class=\"header\">\n      <h1 class=\"title\">\n        <span class=\"span\"><img src=\"https://images.sport1.de/imagix/4a998d25-6306-11e7-b3ce-f80f41fc6a62\" width=\"100px\"></span>\n        <span class=\"text\">Bundesliga Tippspiel</span>\n      </h1>\n    </div>\n    <hr>\n    <app-main-form></app-main-form>\n  </section>\n</div>\n<!-- built files will be auto injected -->\n</body>\n</html>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bl-tip';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_form_main_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-form/main-form.component */ "./src/app/main-form/main-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_form_main_form_component__WEBPACK_IMPORTED_MODULE_3__["MainFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-form/main-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-form/main-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#game td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.control select {\r\n    display: inline-block;\r\n}\r\n\r\n.control button {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-left: 5px;\r\n}\r\n\r\n#icon1, #team1 {\r\n    text-align: left;\r\n}\r\n\r\n#icon2, #team2 {\r\n    text-align: right;\r\n}\r\n\r\n#team1, #team2 {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#input1, #input2, #colon {\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 2rem;\r\n}\r\n\r\n#game-table {\r\n    width: 70%;\r\n}"

/***/ }),

/***/ "./src/app/main-form/main-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-form/main-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"control\">\n  <div class=\"select is-primary\">\n    <select class=\"form-control\" [(ngModel)]=\"selectedDay\" (ngModelChange)=\"selectDay($event)\">\n      <option *ngFor=\"let day of gameArray\">{{day}}. Spieltag</option>\n    </select>\n  </div>\n  <button class=\"button is-primary\" style=\"background-color:#d00614\">Abschicken</button>\n  <button class=\"button is-primary\" style=\"background-color:#d00614\">Verwerfen</button>\n</div>\n<hr>\n<div class=\"table\">\n  <table id=\"game-table\">\n    <tbody>\n      <tr id=\"game\" *ngFor=\"let game of weekGames\">\n        <td width=\"7%\" id=\"icon1\"><img src={{game.Team1.TeamIconUrl}} width=\"40\"></td>\n        <td width=\"35%\"><label id=\"team1\" class=\"label\">{{game.Team1.TeamName}}</label></td>\n        <td><label id=\"input1\" class=\"label\" contenteditable=\"true\">-</label></td>\n        <td width=\"5%\"><label id=\"colon\" class=\"label\">:</label></td>\n        <td><label id=\"input2\" class=\"label\" contenteditable=\"true\">-</label></td>\n        <td width=\"35%\"><label id=\"team2\" class=\"label\">{{game.Team2.TeamName}}</label></td>\n        <td width=\"7%\" id=\"icon2\"><img src={{game.Team2.TeamIconUrl}} width=\"40\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/main-form/main-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-form/main-form.component.ts ***!
  \**************************************************/
/*! exports provided: MainFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFormComponent", function() { return MainFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainFormComponent = /** @class */ (function () {
    function MainFormComponent(http) {
        this.http = http;
        this.weekGames = [];
        this.currentDay = 7;
        this.gameArray = [];
        this.maxGames = 34;
        this.selectedDay = this.currentDay;
    }
    MainFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://www.openligadb.de/api/getmatchdata/bl1/2018/' + this.currentDay, { observe: 'response' }).toPromise().then(function (response) {
            _this.weekGames = response.body;
        });
        this.gameArray = Array.from(new Array(this.maxGames - this.currentDay + 1), function (val, index) { return index + _this.currentDay; });
    };
    MainFormComponent.prototype.selectDay = function (day) {
        var _this = this;
        this.http.get('https://www.openligadb.de/api/getmatchdata/bl1/2018/' + day.charAt(0), { observe: 'response' }).toPromise().then(function (response) {
            _this.weekGames = response.body;
        });
    };
    MainFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-form',
            template: __webpack_require__(/*! ./main-form.component.html */ "./src/app/main-form/main-form.component.html"),
            styles: [__webpack_require__(/*! ./main-form.component.css */ "./src/app/main-form/main-form.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainFormComponent);
    return MainFormComponent;
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\bl-tip\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map