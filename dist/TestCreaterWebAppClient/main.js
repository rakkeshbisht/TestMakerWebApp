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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_fetchdata_fetchdata_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fetchdata/fetchdata.component */ "./src/app/components/fetchdata/fetchdata.component.ts");
/* harmony import */ var _components_quiz_create_quiz_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/quiz-create/quiz-create.component */ "./src/app/components/quiz-create/quiz-create.component.ts");
/* harmony import */ var _components_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quiz-list/quiz-list.component */ "./src/app/components/quiz-list/quiz-list.component.ts");
/* harmony import */ var _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/question-list/question-list.component */ "./src/app/components/question-list/question-list.component.ts");
/* harmony import */ var _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/question-edit/question-edit.component */ "./src/app/components/question-edit/question-edit.component.ts");
/* harmony import */ var _components_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/answer-list/answer-list.component */ "./src/app/components/answer-list/answer-list.component.ts");
/* harmony import */ var _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/answer-edit/answer-edit.component */ "./src/app/components/answer-edit/answer-edit.component.ts");
/* harmony import */ var _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/result-list/result-list.component */ "./src/app/components/result-list/result-list.component.ts");
/* harmony import */ var _components_result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/result-edit/result-edit.component */ "./src/app/components/result-edit/result-edit.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                _components_quiz_create_quiz_create_component__WEBPACK_IMPORTED_MODULE_10__["QuizCreateComponent"],
                _components_fetchdata_fetchdata_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_11__["QuizListComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__["QuizComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_12__["QuestionListComponent"],
                _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_13__["QuestionEditComponent"],
                _components_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_14__["AnswerListComponent"],
                _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_15__["AnswerEditComponent"],
                _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_16__["ResultListComponent"],
                _components_result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_17__["ResultEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: 'quiz/create', component: _components_quiz_create_quiz_create_component__WEBPACK_IMPORTED_MODULE_10__["QuizCreateComponent"] },
                    { path: 'quiz/edit/:id', component: _components_quiz_create_quiz_create_component__WEBPACK_IMPORTED_MODULE_10__["QuizCreateComponent"] },
                    { path: 'fetch-data', component: _components_fetchdata_fetchdata_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                    { path: 'quiz/:id', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__["QuizComponent"] },
                    { path: 'question/create/:id', component: _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_13__["QuestionEditComponent"] },
                    { path: 'question/edit/:id', component: _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_13__["QuestionEditComponent"] },
                    { path: 'answer/edit/:id', component: _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_15__["AnswerEditComponent"] },
                    { path: 'answer/create/:id', component: _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_15__["AnswerEditComponent"] },
                    { path: 'result/edit/:id', component: _components_result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_17__["ResultEditComponent"] },
                    { path: 'result/create/:id', component: _components_result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_17__["ResultEditComponent"] },
                    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"] },
                    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
                    { path: '**', component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> {{title}} </h2>\r\n<div>\r\n  TestMakerFree : a production ready, fully featured SPA\r\n  Powered by ASP.Net WebAPI and Angular 6\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = "About";
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "about",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/answer-edit/answer-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/answer-edit/answer-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-edit textarea{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/answer-edit/answer-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/answer-edit/answer-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<div class=\"answer-edit\">\r\n    <div>\r\n        <label for=\"text\">Answer text:</label>\r\n        <br />\r\n        <textarea id=\"text\" [(ngModel)]=\"answer.text\"  placeholder=\"enter a suitable text...\"></textarea>\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"value\">Score Value:</label>\r\n        <br />\r\n        <select name=\"value\" id=\"value\" [(ngModel)]=\"answer.value\">\r\n            <option *ngFor=\"let num of [-5,-4,-3,-2,-1,0,1,2,3,4,5]\" [value]=\"num\">{{num}}</option>\r\n        </select>\r\n    </div>\r\n    <div>\r\n        <input *ngIf=\"editMode\" type=\"button\" value=\"Apply Changes\" (click)=\"onSubmit(answer)\" />\r\n        <input *ngIf=\"!editMode\" type=\"button\" value=\"Create the answer\" (click)=\"onSubmit(answer)\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"onBack()\" />\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/components/answer-edit/answer-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/answer-edit/answer-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnswerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerEditComponent", function() { return AnswerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerEditComponent = /** @class */ (function () {
    function AnswerEditComponent(activatedRoute, router, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.answer = {};
        var id = +this.activatedRoute.snapshot.params["id"];
        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");
        if (this.editMode) {
            var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/answer/" + id;
            this.http.get(url).subscribe(function (result) {
                _this.answer = result;
                _this.title = "Edit - " + _this.answer.text;
            }, function (error) { return console.error(error); });
        }
        else {
            this.answer.questionId = id;
            this.title = "Create a new answer";
        }
    }
    AnswerEditComponent.prototype.onSubmit = function (answer) {
        var _this = this;
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/answer";
        if (this.editMode) {
            this.http.post(url, answer).subscribe(function (result) {
                var v = result;
                console.log("Answer " + v.id + "has been updated");
                _this.router.navigate(["answer/create", v.questionId]);
            }, function (error) { return console.error(error); });
        }
        else {
            this.http.put(url, answer).subscribe(function (result) {
                var v = result;
                console.log("Answer " + v.id + "has been created");
                _this.router.navigate(["answer/edit", v.questionId]);
            }, function (error) { return console.error(error); });
        }
    };
    AnswerEditComponent.prototype.onBack = function () {
        this.router.navigate(["answer/edit", this.answer.questionId]);
    };
    AnswerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'answer-edit',
            template: __webpack_require__(/*! ./answer-edit.component.html */ "./src/app/components/answer-edit/answer-edit.component.html"),
            styles: [__webpack_require__(/*! ./answer-edit.component.css */ "./src/app/components/answer-edit/answer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnswerEditComponent);
    return AnswerEditComponent;
}());



/***/ }),

/***/ "./src/app/components/answer-list/answer-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/answer-list/answer-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.answers{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/answer-list/answer-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/answer-list/answer-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Answers </h3>\r\n<div *ngIf=\"answers.length > 0\">\r\n  <table class=\"answers\">\r\n    <thead>\r\n      <tr>\r\n        <th>Text</th>\r\n        <th>Options</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let answer of answers\">\r\n        <td>{{answer.text}}</td>\r\n        <td><input type=\"button\" value=\"Edit\" (click)=\"onEdit(answer)\"></td>\r\n        <td><input type=\"button\" value=\"Delete\" (click)=\"onDelete(answer)\"></td>        \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div *ngIf=\"answers.length == 0\">\r\n  This question has no answers yet.\r\n  Click the <strong> Add a new Answer</strong> button to addd the first answer !\r\n</div>\r\n<input type=\"button\" value=\"Add a new Answer\" (click)=\"onCreate()\">\r\n\r\n"

/***/ }),

/***/ "./src/app/components/answer-list/answer-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/answer-list/answer-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function() { return AnswerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerListComponent = /** @class */ (function () {
    function AnswerListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.answers = [];
    }
    AnswerListComponent.prototype.ngOnChanges = function (changes) {
        if (typeof changes['question'] != "undefined") {
            //retrieve the question variable change info
            var change = changes['question'];
            //only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                this.loadData();
            }
        }
    };
    AnswerListComponent.prototype.loadData = function () {
        var _this = this;
        var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/question/list/" + this.question.id;
        this.http.get(url).subscribe(function (res) {
            _this.answers = res;
        }, function (error) { return console.error(error); });
    };
    AnswerListComponent.prototype.onCreate = function () {
        this.router.navigate(["/answer/create", this.question.id]);
    };
    AnswerListComponent.prototype.onEdit = function (answer) {
        this.router.navigate(["/answer/edit", answer.id]);
    };
    AnswerListComponent.prototype.onDelete = function (answer) {
        var _this = this;
        if (confirm("Do you really want to delete this answer?")) {
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/answer/" + this.question.id;
            this.http.delete(url).subscribe(function (res) {
                console.log("Answer " + answer.id + "has been deleted");
                //refresh the answer list
                _this.loadData();
            }, function (error) { return console.error(error); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerListComponent.prototype, "question", void 0);
    AnswerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "answer-list",
            template: __webpack_require__(/*! ./answer-list.component.html */ "./src/app/components/answer-list/answer-list.component.html"),
            styles: [__webpack_require__(/*! ./answer-list.component.css */ "./src/app/components/answer-list/answer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AnswerListComponent);
    return AnswerListComponent;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/fetchdata/fetchdata.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/fetchdata/fetchdata.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/fetchdata/fetchdata.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/fetchdata/fetchdata.component.ts ***!
  \*************************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http) {
        var _this = this;
        http.get("" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result;
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fetchdata',
            template: __webpack_require__(/*! ./fetchdata.component.html */ "./src/app/components/fetchdata/fetchdata.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "quiz-list{\r\n    width: 400px;\r\n    display: block;\r\n    padding: 2px 20px;\r\n    margin: 0px 5px;\r\n    float: left;   \r\n}\r\n\r\nquiz-list.latest {\r\n    background-color : lightgray\r\n}\r\n\r\nquiz-list.byTitle {\r\n    background-color: darkgrey;    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Quiz List</h1>\r\n<p>Welcome to Quiz Application</p>\r\n<quiz-list class=\"latest\"></quiz-list>\r\n<quiz-list class=\"byTitle\"></quiz-list>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> {{title}} </h2>\r\n<div>\r\n TODO -Not implemented\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = "Login";
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Create Test For Free</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/quiz/create']\">\r\n                        <span class='glyphicon glyphicon-log-in'></span> Create Quiz\r\n                    </a>\r\n                </li>                \r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/about']\">\r\n                        <span class='glyphicon glyphicon-info-sign'></span> About\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class='glyphicon glyphicon-log-in'></span> Login\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/components/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> {{title}} </h2>\r\n<div>\r\n OOPS... this page does not exist\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.title = "Page not Found";
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "pagenotfound",
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/components/pagenotfound/pagenotfound.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/question-edit/question-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/question-edit/question-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-edit textarea{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/question-edit/question-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/question-edit/question-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<div class=\"question-edit\">\r\n    <div>\r\n        <label for=\"text\">Question text:</label>\r\n        <br />\r\n        <textarea id=\"text\" [(ngModel)]=\"question.text\"  placeholder=\"enter a suitable text...\"></textarea>\r\n    </div>\r\n    <div>\r\n        <input *ngIf=\"editMode\" type=\"button\" value=\"Apply Changes\" (click)=\"onSubmit(question)\" />\r\n        <input *ngIf=\"!editMode\" type=\"button\" value=\"Create the question\" (click)=\"onSubmit(question)\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"onBack()\" />\r\n    </div>\r\n\r\n    <answer-list *ngIf=\"editMode\" [question]=\"question\"></answer-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/question-edit/question-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/question-edit/question-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditComponent", function() { return QuestionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionEditComponent = /** @class */ (function () {
    function QuestionEditComponent(activatedRoute, router, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.question = {};
        var id = +this.activatedRoute.snapshot.params["id"];
        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");
        if (this.editMode) {
            var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/question/" + id;
            this.http.get(url).subscribe(function (result) {
                _this.question = result;
                _this.title = "Edit - " + _this.question.text;
            }, function (error) { return console.error(error); });
        }
        else {
            this.question.quizId = id;
            this.title = "Create a new question";
        }
    }
    QuestionEditComponent.prototype.onSubmit = function (question) {
        var _this = this;
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/question";
        if (this.editMode) {
            this.http.post(url, question).subscribe(function (result) {
                var v = result;
                console.log("Question " + v.id + "has been updated");
                _this.router.navigate(["quiz/edit", v.quizId]);
            }, function (error) { return console.error(error); });
        }
        else {
            this.http.put(url, question).subscribe(function (result) {
                var v = result;
                console.log("Question " + v.id + "has been created");
                _this.router.navigate(["quiz/edit", v.quizId]);
            }, function (error) { return console.error(error); });
        }
    };
    QuestionEditComponent.prototype.onBack = function () {
        this.router.navigate(["quiz/edit", this.question.quizId]);
    };
    QuestionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'question-edit',
            template: __webpack_require__(/*! ./question-edit.component.html */ "./src/app/components/question-edit/question-edit.component.html"),
            styles: [__webpack_require__(/*! ./question-edit.component.css */ "./src/app/components/question-edit/question-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionEditComponent);
    return QuestionEditComponent;
}());



/***/ }),

/***/ "./src/app/components/question-list/question-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/question-list/question-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.questions{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/question-list/question-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/question-list/question-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Questions </h3>\r\n<div *ngIf=\"questions.length > 0\">\r\n  <table class=\"questions\">\r\n    <thead>\r\n      <tr>\r\n        <th>Text</th>\r\n        <th>Options</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let question of questions\">\r\n        <td>{{question.text}}</td>\r\n        <td><input type=\"button\" value=\"Edit\" (click)=\"onEdit(question)\"></td>\r\n        <td><input type=\"button\" value=\"Delete\" (click)=\"onDelete(question)\"></td>        \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div *ngIf=\"questions.length == 0\">\r\n  This quiz has no questions yet.\r\n  Click the <strong> Add a new Question</strong> button to addd the first question !\r\n</div>\r\n<input type=\"button\" value=\"Add a new Question\" (click)=\"onCreate()\">\r\n\r\n"

/***/ }),

/***/ "./src/app/components/question-list/question-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/question-list/question-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.questions = [];
    }
    QuestionListComponent.prototype.ngOnChanges = function (changes) {
        if (typeof changes['quiz'] != "undefined") {
            //retrieve the quiz variable change info
            var change = changes['quiz'];
            //only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                this.loadData();
            }
        }
    };
    QuestionListComponent.prototype.loadData = function () {
        var _this = this;
        var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/question/list/" + this.quiz.id;
        this.http.get(url).subscribe(function (res) {
            _this.questions = res;
        }, function (error) { return console.error(error); });
    };
    QuestionListComponent.prototype.onCreate = function () {
        this.router.navigate(["/question/create", this.quiz.id]);
    };
    QuestionListComponent.prototype.onEdit = function (question) {
        this.router.navigate(["/question/edit", question.id]);
    };
    QuestionListComponent.prototype.onDelete = function (question) {
        var _this = this;
        if (confirm("Do you really want to delete this question?")) {
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/question/" + this.quiz.id;
            this.http.delete(url).subscribe(function (res) {
                console.log("Question " + question.id + "has been deleted");
                //refresh the question list
                _this.loadData();
            }, function (error) { return console.error(error); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionListComponent.prototype, "quiz", void 0);
    QuestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "question-list",
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/components/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/components/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz-create/quiz-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/quiz-create/quiz-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-create input[type=\"text\"],\r\n.quiz-create textarea{\r\n  min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/quiz-create/quiz-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/quiz-create/quiz-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h2>{{title}} </h2>\r\n  <div class=\"quiz-create\">\r\n    <div>\r\n      <label for=\"title\">Quiz title:</label>\r\n      <br />\r\n      <input type=\"text\" id=\"title\" [(ngModel)]=\"quiz.title\" placeholder=\"choose a title...\">\r\n    </div>\r\n    <div>\r\n      <label for=\"description\">Quiz description:</label>\r\n      <br />\r\n      <input type=\"text\" id=\"title\" [(ngModel)]=\"quiz.description\" placeholder=\"enter a description...\" />\r\n    </div>\r\n    <div>\r\n      <label for=\"description\">Quiz Informative text:</label>\r\n      <br />\r\n      <textarea type=\"text\" id=\"title\" [(ngModel)]=\"quiz.text\" placeholder=\"enter a text...\" >\r\n        </textarea>      \r\n    </div>\r\n    <div>\r\n      <input *ngIf=\"editMode\" type=\"button\" value=\"Apply Changes\" (click)=\"onSubmit(quiz)\" />\r\n      <input *ngIf=\"!editMode\" type=\"button\" value=\"Create new Quiz!\" (click)=\"onSubmit(quiz)\" />\r\n      <input type=\"button\" value=\"Cancel\" (click)=\"onBack()\" />\r\n    </div>\r\n    <question-list [quiz]=\"quiz\" *ngIf=\"editMode\"></question-list>\r\n    <result-list *ngIf=\"editMode\" [quiz]=\"quiz\"></result-list>\r\n  </div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/quiz-create/quiz-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/quiz-create/quiz-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: QuizCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCreateComponent", function() { return QuizCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizCreateComponent = /** @class */ (function () {
    function QuizCreateComponent(activatedRoute, router, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.quiz = {};
        var id = +this.activatedRoute.snapshot.params["id"];
        console.log(id);
        if (id) {
            this.editMode = true;
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + 'api/quiz/' + id;
            this.http.get(url).subscribe(function (result) {
                _this.quiz = result;
            }, function (error) { return console.error(error); });
        }
        else {
            this.title = "Create a new Quiz";
        }
    }
    QuizCreateComponent.prototype.onSubmit = function (quiz) {
        var _this = this;
        var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + 'api/quiz/';
        if (this.editMode) {
            this.http.put(url, quiz).subscribe(function (result) {
                var v = result;
                console.log("Quiz " + v.id + " has been created");
                _this.router.navigate(["home"]);
            }, function (error) { return console.log(error); });
        }
        else {
            this.http.post(url, quiz).subscribe(function (result) {
                var v = result;
                console.log("Quiz " + v.id + " has been updated");
                _this.router.navigate(["home"]);
            }, function (error) { return console.log(error); });
        }
    };
    QuizCreateComponent.prototype.onBack = function () {
        this.router.navigate(["home"]);
    };
    QuizCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "quiz-create",
            template: __webpack_require__(/*! ./quiz-create.component.html */ "./src/app/components/quiz-create/quiz-create.component.html"),
            styles: [__webpack_require__(/*! ./quiz-create.component.css */ "./src/app/components/quiz-create/quiz-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuizCreateComponent);
    return QuizCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.quizzes li {\r\n  color : #000acb;\r\n  cursor : pointer;\r\n}\r\n\r\n  ul.quizzes li.selected {\r\n    background-color : #cccccc;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> {{title}} </h2>\r\n<ul class=\"quizzes\">\r\n  <li *ngFor =\"let quiz of quizList\"\r\n      [class.selected]=\"quiz === selectedQuiz\"\r\n      (click) =\"onselect(quiz)\">\r\n    <span>{{quiz.title}}</span>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/quiz-list/quiz-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/quiz-list/quiz-list.component.ts ***!
  \*************************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
        switch (this.class) {
            case 'latest':
            default:
                this.title = "Latest Quiz List";
                url += 'api/quiz/LatestQuizList/10';
                break;
            case 'byTitle':
                this.title = "Quiz List by Title";
                url += 'api/quiz/ByTitle/';
                break;
        }
        this.http.get(url).subscribe(function (result) {
            _this.quizList = result;
        }, function (error) { return console.error(error); });
    };
    QuizListComponent.prototype.onselect = function (quiz) {
        this.selectedQuiz = quiz;
        console.log("quiz with id " + this.selectedQuiz + "has been selected");
        this.router.navigate(["quiz", this.selectedQuiz.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuizListComponent.prototype, "class", void 0);
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "quiz-list",
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/components/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/components/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz{\r\n  margin: 5px;\r\n  padding: 5px 10px;\r\n  border: 1px solid black;\r\n  background-color: #dddddd;\r\n  width: 300px;\r\n}\r\n\r\n.quiz * {\r\n  vertical-align: middle;  \r\n}\r\n\r\n.quiz ul li {\r\n  padding: 5px 0;\r\n}"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\">\r\n  <h2>{{quiz.Title}} </h2>\r\n  <ul>\r\n    <li>\r\n      <label> Title : </label>\r\n      <input [(ngModel)]=\"quiz.title\" placeholder=\"Insert the title\" />\r\n    </li>\r\n    <li>\r\n      <label> Description: </label>\r\n      <textarea [(ngModel)]=\"quiz.description\" placeholder=\"Insert a suitable Description\"></textarea>\r\n    </li>\r\n  </ul>\r\n\r\n  <div>    \r\n    <a [routerLink]=\"['/quiz/edit',quiz.id]\"> \r\n      <span class='glyphicon glyphicon-edit'></span> Edit Quiz\r\n    </a>\r\n  </div>\r\n  <div>\r\n      <a (click)=onDelete()> \r\n        <span class='glyphicon glyphicon-remove'></span> Delete this Quiz\r\n      </a>    \r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(activatedRoute, router, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.quiz = {};
        var id = +this.activatedRoute.snapshot.params["id"];
        console.log(id);
        if (id) {
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + 'api/quiz/' + id;
            this.http.get(url).subscribe(function (result) {
                _this.quiz = result;
            }, function (error) { return console.error(error); });
        }
        else {
            console.log("invalid id: routing back home");
            this.router.navigate(["home"]);
        }
    }
    QuizComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm("Do you really want to delete this quiz?")) {
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + 'api/quiz/' + this.quiz.id;
            this.http.delete(url).subscribe(function (result) {
                console.log("Quiz " + _this.quiz.id + " has been deleted");
                _this.router.navigate(["home"]);
            }, function (error) { return console.error(error); });
        }
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "quiz",
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/result-edit/result-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/result-edit/result-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-edit textarea{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/result-edit/result-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-edit/result-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<div class=\"result-edit\">\r\n    <div>\r\n        <label for=\"text\">Result text:</label>\r\n        <br />\r\n        <textarea id=\"text\" [(ngModel)]=\"result.text\"  placeholder=\"enter a suitable text...\"></textarea>\r\n    </div>\r\n    <div>\r\n        <label for=\"MinValue\">Minimum Score Value: </label>\r\n        <br />\r\n        <input type=\"number\" name=\"MinValue\" id=\"MinValue\" [(ngModel)]=\"result.MinValue\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"MaxValue\">Maximum Score Value: </label>\r\n        <br />\r\n        <input type=\"number\" name=\"MaxValue\" id=\"MaxValue\" [(ngModel)]=\"result.MaxValue\" />\r\n    </div>\r\n    <div>\r\n        <input *ngIf=\"editMode\" type=\"button\" value=\"Apply Changes\" (click)=\"onSubmit(result)\" />\r\n        <input *ngIf=\"!editMode\" type=\"button\" value=\"Create the Result\" (click)=\"onSubmit(result)\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"onBack()\" />\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/result-edit/result-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-edit/result-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultEditComponent", function() { return ResultEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultEditComponent = /** @class */ (function () {
    function ResultEditComponent(activatedRoute, router, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.result = {};
        var id = +this.activatedRoute.snapshot.params["id"];
        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");
        if (this.editMode) {
            var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/question/" + id;
            this.http.get(url).subscribe(function (result) {
                _this.result = result;
                _this.title = "Edit - " + _this.result.text;
            }, function (error) { return console.error(error); });
        }
        else {
            this.result.quizId = id;
            this.title = "Create a new result";
        }
    }
    ResultEditComponent.prototype.onSubmit = function (result) {
        var _this = this;
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "api/result";
        if (this.editMode) {
            this.http.post(url, result).subscribe(function (result) {
                var v = result;
                console.log("Result " + v.id + "has been updated");
                _this.router.navigate(["result/create", v.quizId]);
            }, function (error) { return console.error(error); });
        }
        else {
            this.http.put(url, result).subscribe(function (result) {
                var v = result;
                console.log("Result " + v.id + "has been created");
                _this.router.navigate(["result/edit", v.quizId]);
            }, function (error) { return console.error(error); });
        }
    };
    ResultEditComponent.prototype.onBack = function () {
        this.router.navigate(["result/edit", this.result.quizId]);
    };
    ResultEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'result-edit',
            template: __webpack_require__(/*! ./result-edit.component.html */ "./src/app/components/result-edit/result-edit.component.html"),
            styles: [__webpack_require__(/*! ./result-edit.component.css */ "./src/app/components/result-edit/result-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResultEditComponent);
    return ResultEditComponent;
}());



/***/ }),

/***/ "./src/app/components/result-list/result-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.questions{\r\n    min-width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/result-list/result-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Results </h3>\r\n<div *ngIf=\"results.length > 0\">\r\n  <table class=\"results\">\r\n    <thead>\r\n      <tr>\r\n        <th>Text</th>\r\n        <th>Min. Value</th>\r\n        <th>Max. Value</th>\r\n        <th>Options</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let result of results\">\r\n        <td>{{result.text}}</td>\r\n        <td *ngIf=\"result.minValue === null\">N/A </td>\r\n        <td *ngIf=\"result.minValue !== null\">{{result.minValue}}}</td>\r\n        <td *ngIf=\"result.maxValue === null\">N/A </td>\r\n        <td *ngIf=\"result.maxValue !== null\">{{result.maxValue}}}</td>\r\n        <td><input type=\"button\" value=\"Edit\" (click)=\"onEdit(result)\"></td>\r\n        <td><input type=\"button\" value=\"Delete\" (click)=\"onDelete(result)\"></td>        \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div *ngIf=\"results.length == 0\">\r\n  This quiz has no results yet.\r\n  Click the <strong> Add a new result</strong> button to addd the first result !\r\n</div>\r\n<input type=\"button\" value=\"Add a new result\" (click)=\"onCreate()\">\r\n\r\n"

/***/ }),

/***/ "./src/app/components/result-list/result-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.results = [];
    }
    ResultListComponent.prototype.ngOnChanges = function (changes) {
        if (typeof changes['quiz'] != "undefined") {
            //retrieve the quiz variable change info
            var change = changes['quiz'];
            //only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                this.loadData();
            }
        }
    };
    ResultListComponent.prototype.loadData = function () {
        var _this = this;
        var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/result/list/" + this.quiz.id;
        this.http.get(url).subscribe(function (res) {
            _this.results = res;
        }, function (error) { return console.error(error); });
    };
    ResultListComponent.prototype.onCreate = function () {
        this.router.navigate(["/result/create", this.quiz.id]);
    };
    ResultListComponent.prototype.onEdit = function (quiz) {
        this.router.navigate(["/result/edit", quiz.id]);
    };
    ResultListComponent.prototype.onDelete = function (result) {
        var _this = this;
        if (confirm("Do you really want to delete this result?")) {
            var url = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + "api/result/" + this.quiz.id;
            this.http.delete(url).subscribe(function (res) {
                console.log("Result " + result.id + "has been deleted");
                //refresh the result list
                _this.loadData();
            }, function (error) { return console.error(error); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultListComponent.prototype, "quiz", void 0);
    ResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "result-list",
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/components/result-list/result-list.component.html"),
            styles: [__webpack_require__(/*! ./result-list.component.css */ "./src/app/components/result-list/result-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResultListComponent);
    return ResultListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:5979/',
    weatherforecast_url: 'api/SampleData/WeatherForecasts'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\TestCreaterWebApp\TestCreaterWebAppClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map