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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _submission_submission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submission/submission.component */ "./src/app/submission/submission.component.ts");
/* harmony import */ var _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit/submit.component */ "./src/app/submit/submit.component.ts");
/* harmony import */ var _submission_show_submission_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submission-show/submission-show.component */ "./src/app/submission-show/submission-show.component.ts");
/* harmony import */ var _threads_threads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./threads/threads.component */ "./src/app/threads/threads.component.ts");
/* harmony import */ var _reply_reply_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reply/reply.component */ "./src/app/reply/reply.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'submissions', pathMatch: 'full' },
    { path: 'user/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] },
    { path: 'submissions', component: _submission_submission_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionComponent"] },
    { path: 'newest', component: _submission_submission_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionComponent"] },
    { path: 'ask', component: _submission_submission_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionComponent"] },
    { path: 'submit', component: _submit_submit_component__WEBPACK_IMPORTED_MODULE_4__["SubmitComponent"] },
    { path: 'submission/:id', component: _submission_show_submission_show_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionShowComponent"] },
    { path: 'threads', component: _threads_threads_component__WEBPACK_IMPORTED_MODULE_6__["ThreadsComponent"] },
    { path: 'reply/:id', component: _reply_reply_component__WEBPACK_IMPORTED_MODULE_7__["ReplyComponent"] },
    { path: 'comment/:id', component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_8__["CommentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_bar {\n  float:left;\n  font-size: 14px;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hacker News';
        this.isUserLogged = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _submission_submission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission/submission.component */ "./src/app/submission/submission.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _submit_submit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit/submit.component */ "./src/app/submit/submit.component.ts");
/* harmony import */ var _submission_show_submission_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submission-show/submission-show.component */ "./src/app/submission-show/submission-show.component.ts");
/* harmony import */ var _threads_threads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threads/threads.component */ "./src/app/threads/threads.component.ts");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var _reply_reply_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reply/reply.component */ "./src/app/reply/reply.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { submission_userDataService } from 'src/app/services/submission_user';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _submission_submission_component__WEBPACK_IMPORTED_MODULE_6__["SubmissionComponent"],
                _submit_submit_component__WEBPACK_IMPORTED_MODULE_8__["SubmitComponent"],
                _submission_show_submission_show_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionShowComponent"],
                _threads_threads_component__WEBPACK_IMPORTED_MODULE_10__["ThreadsComponent"],
                _reply_reply_component__WEBPACK_IMPORTED_MODULE_12__["ReplyComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], src_app_globals__WEBPACK_IMPORTED_MODULE_11__["Globals"] /*, submission_userDataService*/],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.comment_attr {\n  font-size: 12px;\n  display: inline;\n}\n\n.comment_row {\n  font-size: 12px;\n  margin-left:5px;\n}\n\n.input_text {\n  height: 90px;\n  width: 413px;\n  font-family: monospace;\n  margin-top: 10px;\n  margin-left:5px;\n}\n\n.error_message {\n  color: red;\n  margin: 4px;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><div id=\"hacker_news_title\">Add Comment</div></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n  <table class=\"common_table\">\n    <div *ngIf=\"comment\">\n\t\t<tr>\n\t\t\t<td *ngIf=\"error_message\">\n\t\t\t\t<p class=\"error_message\">{{error_message}}</p>\n\t\t\t</td>\n\t\t</tr>\n  \t<tr class=\"comment_row\">\n      <div style=\"margin-top:5px\">\n        <td>\n          <div style=\"color:orange; display:inline;\">*</div> <div class=\"comment_attr\"> {{comment[0].user_name}}</div> {{comment[0].created_at | date:'dd/MM/yyyy hh:mm'}} |\n          <div class=\"comment_attr\">parent</div> | on: <div class=\"comment_attr\">{{comment[0].submission_title}}</div>\n        </td>\n      </div>\n    </tr>\n    <tr>\n      <td>\n        <div style=\"margin-left:5px; color: black; font-size: 14px;\">{{comment[0].content}}</div>\n      </td>\n    </tr>\n    <tr>\n      <td><textarea [(ngModel)]=\"reply_text\" class=\"input_text\"></textarea></td>\n    </tr>\n    <tr>\n      <td><button (click)=\"replyButtonPressed(comment[0].id, comment[0].submission_id)\">reply</button></td>\n    </tr>\n  </div>\n  </table>\n</body>\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(http, _router, globals, route) {
        var _this = this;
        this.http = http;
        this._router = _router;
        this.globals = globals;
        this.route = route;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/comment/';
        this.apiCommentPost = 'http://practicaasw-hackernews.herokuapp.com/api/v1/comment/';
        this.error_message = "";
        this.reply_text = "";
        this.route.params.subscribe(function (params) {
            if (window.localStorage.length > 0) {
                _this.globals.user_name = localStorage.getItem("name"),
                    _this.globals.api_key = localStorage.getItem("api_key");
                _this.globals.user_id = localStorage.getItem("id");
                _this.globals.karma = localStorage.getItem("karma");
            }
            _this.getComment(params['id']);
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.getComment = function (comment_id) {
        var _this = this;
        this.http.get(this.apiUrl + comment_id).subscribe(function (result) {
            _this.comment = result.json().data;
        }, function (error) { return console.error(error); });
    };
    CommentComponent.prototype.replyButtonPressed = function (comment_id, submission_id) {
        var _this = this;
        console.log("Comment pressed");
        var newReply = new CommentPost();
        newReply.content = this.reply_text;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.post(this.apiCommentPost + comment_id + "/reply", newReply, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            _this._router.navigate(['submission/' + submission_id]);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "You must login first";
                    break;
                default:
                    _this.error_message = "Error";
            }
        });
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CommentComponent);
    return CommentComponent;
}());

var CommentPost = /** @class */ (function () {
    function CommentPost() {
    }
    return CommentPost;
}());


/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.api_key = '';
        this.user_id = '';
        this.user_name = '';
        this.karma = '';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/reply/reply.component.css":
/*!*******************************************!*\
  !*** ./src/app/reply/reply.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.reply_attr {\n  font-size: 12px;\n  display: inline;\n}\n\n.reply_row {\n  font-size: 12px;\n  margin-left:5px;\n}\n\n.input_text {\n  height: 90px;\n  width: 413px;\n  font-family: monospace;\n  margin-top: 10px;\n  margin-left:5px;\n}\n\n.error_message {\n  color: red;\n  margin: 4px;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/reply/reply.component.html":
/*!********************************************!*\
  !*** ./src/app/reply/reply.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><div id=\"hacker_news_title\">Add Comment</div></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n  <table class=\"common_table\">\n    <div *ngIf=\"reply\">\n\t\t<tr>\n\t\t\t<td *ngIf=\"error_message\">\n\t\t\t\t<p class=\"error_message\">{{error_message}}</p>\n\t\t\t</td>\n\t\t</tr>\n  \t<tr class=\"reply_row\">\n      <div style=\"margin-top:5px\">\n        <td>\n          <div style=\"color:orange; display:inline;\">*</div> <div class=\"reply_attr\"> {{reply[0].user_name}}</div> {{reply[0].created_at | date:'dd/MM/yyyy hh:mm'}} |\n          <div class=\"reply_attr\">parent</div> | on: <div class=\"reply_attr\">{{reply[0].submission_title}}</div>\n        </td>\n      </div>\n    </tr>\n    <tr>\n      <td>\n        <div style=\"margin-left:5px; color: black; font-size: 14px;\">{{reply[0].content}}</div>\n      </td>\n    </tr>\n    <tr>\n      <td><textarea [(ngModel)]=\"reply_text\" class=\"input_text\"></textarea></td>\n    </tr>\n    <tr>\n      <td><button (click)=\"replyButtonPressed(reply[0].id, reply[0].submission_id)\">reply</button></td>\n    </tr>\n  </div>\n  </table>\n</body>\n"

/***/ }),

/***/ "./src/app/reply/reply.component.ts":
/*!******************************************!*\
  !*** ./src/app/reply/reply.component.ts ***!
  \******************************************/
/*! exports provided: ReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyComponent", function() { return ReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReplyComponent = /** @class */ (function () {
    function ReplyComponent(http, _router, globals, route) {
        var _this = this;
        this.http = http;
        this._router = _router;
        this.globals = globals;
        this.route = route;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/replies/';
        this.apiReplyPost = 'http://practicaasw-hackernews.herokuapp.com/api/v1/reply/';
        this.error_message = "";
        this.reply_text = "";
        this.route.params.subscribe(function (params) {
            if (window.localStorage.length > 0) {
                _this.globals.user_name = localStorage.getItem("name"),
                    _this.globals.api_key = localStorage.getItem("api_key");
                _this.globals.user_id = localStorage.getItem("id");
                _this.globals.karma = localStorage.getItem("karma");
            }
            _this.getReply(params['id']);
        });
    }
    ReplyComponent.prototype.ngOnInit = function () {
    };
    ReplyComponent.prototype.getReply = function (reply_id) {
        var _this = this;
        this.http.get(this.apiUrl + reply_id).subscribe(function (result) {
            _this.reply = result.json().data;
            console.log(_this.reply[0]);
        }, function (error) { return console.error(error); });
    };
    ReplyComponent.prototype.replyButtonPressed = function (reply_id, submission_id) {
        var _this = this;
        console.log("Reply pressed");
        var newReply = new ReplyPost();
        newReply.content = this.reply_text;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.post(this.apiReplyPost + reply_id + "/reply", newReply, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            _this._router.navigate(['submission/' + submission_id]);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "You must login first";
                    break;
                default:
                    _this.error_message = "Error";
            }
        });
    };
    ReplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reply',
            template: __webpack_require__(/*! ./reply.component.html */ "./src/app/reply/reply.component.html"),
            styles: [__webpack_require__(/*! ./reply.component.css */ "./src/app/reply/reply.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReplyComponent);
    return ReplyComponent;
}());

var ReplyPost = /** @class */ (function () {
    function ReplyPost() {
    }
    return ReplyPost;
}());


/***/ }),

/***/ "./src/app/submission-show/submission-show.component.css":
/*!***************************************************************!*\
  !*** ./src/app/submission-show/submission-show.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.input_text {\n  margin-top: 10px;\n  font-family:monospace;\n  font-size:10pt;\n  height: 90px;\n  width: 413px;\n}\n\n.button {\n    font-family: monospace;\n    color: #000000;\n}\n\n.replyButton {\n  font-size: 8pt;\n  color: #000000;\n  text-decoration: underline;\n}\n\n.error_message {\n  color: red;\n  margin: 4px;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/submission-show/submission-show.component.html":
/*!****************************************************************!*\
  !*** ./src/app/submission-show/submission-show.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submissions\"><div id=\"hacker_news_title\">Hacker News</div></a></td>\n\t\t\t\t<td class=\"main_bar\" style=\"margin-left: 5px\"><a routerLink=\"/newest\">new</a> |</td>\n\t\t\t\t<div *ngIf=\"globals.api_key != ''\">\n\t\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/threads\">threads</a> |</td>\n\t\t\t\t</div>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/ask\">ask</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submit\">submit</a></td>\n\t\t\t\t<td class=\"last_bar\" *ngIf=\"globals.api_key == ''; else showLogout\"><a style=\"cursor: pointer;\" id=\"googleBtn\">login</a></td>\n\t\t\t\t<ng-template #showLogout>\n\t\t\t\t\t<td style=\"color: #000000\" class=\"last_bar\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{globals.user_id}}\" style=\"font-weight:bold;\">{{globals.user_name}}</a>\n\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"logout()\"> | logout</a></td>\n\t\t\t\t</ng-template>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n<table class=\"common_table\">\n\t<tr>\n\t\t<td *ngIf=\"error_message\">\n\t\t\t<p class=\"error_message\">{{error_message}}</p>\n\t\t</td>\n\t</tr>\n  <div *ngIf=\"submission\">\n    <tr>\n      <td></td>\n\t\t\t<td>\n        <div class=\"submission_title\">\n          {{submission.title}}\n        </div>\n\t\t\t\t<div class=\"submission_url\" *ngIf=\"submission.url\">\n        \t<div class=\"submission_url\">\n          \t<a style=\"color: #828282\" href=\"{{submission.url}}\">({{submission.url}})</a>\n        \t</div>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>\n        <div class=\"submission_underline\">\n          {{submission.votes}} score by\n\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{submission.user_creator_id}}\"> {{submission.user_name}}</a>\n\t\t\t\t\t | {{submission.created_at | date:'dd/MM/yyyy hh:mm'}} |\n\t\t\t\t\t <div style=\"display: inline\" *ngIf=\"submission.comments; else discuss\">\n\t\t\t\t\t \t\t<a style=\"color: #828282\" routerLink=\"/submission/{{submission.id}}\"> {{submission.comments}} comments</a>\n\t\t\t\t\t </div>\n\t\t\t\t\t <ng-template #discuss>\n\t\t\t\t\t\t <a style=\"color: #828282\" routerLink=\"/submission/{{submission.id}}\"> discuss</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t|\n\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteSubmission(submission.id)\"> vote</a>\n\t\t\t\t\t|\n\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteSubmission(submission.id)\"> unvote</a>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><textarea class=\"input_text\" [(ngModel)]=\"textarea_comment\"></textarea></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><button class=\"button\" style=\"margin-top: 10px\" (click)=\"doComment()\">add comment</button></td>\n\t\t</tr>\n\t</div>\n</table>\n<table class=\"common_table\">\n\t\t<div *ngIf=\"comments\">\n\t\t\t<div style=\"margin-top: 20px;\" *ngFor=\"let comment of comments;\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div *ngIf=\"globals.user_id == comment.user_id\" class=\"vote_image\">\n\t\t\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div style=\"font-size: 8pt;\" class=\"submission_underline\">\n\t\t\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{comment.user_id}}\"> {{comment.user_name}}</a>\n\t\t\t\t\t\t\t| {{comment.created_at | date:'dd/MM/yyyy hh:mm'}} | votes: {{comment.votes}}\n\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteComment(comment.id)\"> vote</a>\n\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteComment(comment.id)\"> unvote</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td style=\"font-size: 9pt; color: #000000;\">{{comment.content}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<a routerLink=\"/comment/{{comment.id}}\" class=\"replyButton\"> reply</a>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<div *ngIf=\"comment.replies\">\n\t\t\t\t\t\t<div *ngFor=\"let reply of comment.replies\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"globals.user_id == reply.user_id\" class=\"vote_image\">\n\t\t\t\t\t\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div style=\"font-size: 8pt;\" class=\"submission_underline\">\n\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{reply.user_id}}\"> {{reply.user_name}}</a>\n\t\t\t\t\t\t\t\t\t\t| {{reply.created_at | date:'dd/MM/yyyy hh:mm'}} | votes: {{reply.cached_votes_total}}\n\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteReply(reply.id)\"> vote</a><!--replies-->\n\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteReply(reply.id)\"> unvote</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td style=\"font-size: 9pt; color: #000000;\">{{reply.content}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<a routerLink=\"/reply/{{reply.id}}\" class=\"replyButton\"> reply</a>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<div *ngIf=\"reply.replies\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let reply2 of reply.replies\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"globals.user_id == reply2.user_id\" class=\"vote_image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"font-size: 8pt;\" class=\"submission_underline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{reply2.user_id}}\"> {{reply2.user_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t| {{reply2.created_at | date:'dd/MM/yyyy hh:mm'}} | votes: {{reply2.cached_votes_total}}\n\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteReply(reply2.id)\"> vote</a>\n\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteReply(reply2.id)\"> unvote</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"font-size: 9pt; color: #000000;\">{{reply2.content}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/reply/{{reply2.id}}\" class=\"replyButton\"> reply</a>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"reply2.replies\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let reply3 of reply2.replies\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"globals.user_id == reply3.user_id\" class=\"vote_image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"font-size: 8pt;\" class=\"submission_underline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{reply3.user_id}}\"> {{reply3.user_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t| {{reply3.created_at | date:'dd/MM/yyyy hh:mm'}} | votes: {{reply3.cached_votes_total}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteReply(reply3.id)\"> vote</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteReply(reply3.id)\"> unvote</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"font-size: 9pt; color: #000000;\">{{reply3.content}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/reply/{{reply3.id}}\" class=\"replyButton\"> reply</a>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"reply3.replies\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let reply4 of reply3.replies\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"globals.user_id == reply4.user_id\" class=\"vote_image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"font-size: 8pt;\" class=\"submission_underline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{reply4.user_id}}\"> {{reply4.user_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t| {{reply4.created_at | date:'dd/MM/yyyy hh:mm'}} | votes: {{reply4.cached_votes_total}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVoteReply(reply4.id)\"> vote</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvoteReply(reply4.id)\"> unvote</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"font-size: 9pt; color: #000000;\">{{reply4.content}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</tr>\n\t\t\t</div>\n\t\t</div>\n\t</table>\n</body>\n"

/***/ }),

/***/ "./src/app/submission-show/submission-show.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/submission-show/submission-show.component.ts ***!
  \**************************************************************/
/*! exports provided: SubmissionShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionShowComponent", function() { return SubmissionShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmissionShowComponent = /** @class */ (function () {
    function SubmissionShowComponent(http, route, globals) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.globals = globals;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions/';
        this.apiUrlCommentsSubmission = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submission/';
        this.apiUrlComments = 'http://practicaasw-hackernews.herokuapp.com/api/v1/comments/';
        this.apiUrlReplies = 'http://practicaasw-hackernews.herokuapp.com/api/v1/replies/';
        this.loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin';
        this.textarea_comment = "";
        this.error_message = "";
        this.route.params.subscribe(function (params) { return _this.getSubmission(params['id']); });
        this.route.params.subscribe(function (params) { return _this.getComments(params['id']); });
        if (window.localStorage.length > 0) {
            this.globals.user_name = localStorage.getItem("name"),
                this.globals.api_key = localStorage.getItem("api_key");
            this.globals.user_id = localStorage.getItem("id");
            this.globals.karma = localStorage.getItem("karma");
        }
    }
    SubmissionShowComponent.prototype.ngOnInit = function () {
    };
    SubmissionShowComponent.prototype.ngAfterViewInit = function () {
        if (window.localStorage.length === 0)
            this.googleInit();
    };
    SubmissionShowComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '323632880151-021adosf6m80llcieeba79e4cjvf6kp6.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    SubmissionShowComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            var tokenGoogle = new Login();
            tokenGoogle.token = googleUser.getAuthResponse().id_token;
            var req = _this.http.post(_this.loginUrl, tokenGoogle)
                .subscribe(function (res) {
                _this.info = res.json().data;
                console.log(_this.info);
                localStorage.setItem("name", _this.info['name']);
                localStorage.setItem("api_key", _this.info['api_key']);
                localStorage.setItem("id", _this.info['id'].toString());
                localStorage.setItem("karma", _this.info['karma'].toString());
                window.location.reload();
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    SubmissionShowComponent.prototype.logout = function () {
        this.globals.api_key = '';
        this.globals.user_id = '';
        this.globals.user_name = '';
        this.globals.karma = '';
        localStorage.clear();
        window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
        window.location.reload();
    };
    SubmissionShowComponent.prototype.getSubmission = function (submission_id) {
        var _this = this;
        console.log(submission_id);
        this.http.get(this.apiUrl + submission_id).subscribe(function (result) {
            _this.submission = result.json().data;
            _this.submission = _this.submission[0];
        }, function (error) { return console.error(error); });
    };
    SubmissionShowComponent.prototype.getComments = function (submission_id) {
        var _this = this;
        console.log(submission_id);
        this.http.get(this.apiUrlCommentsSubmission + submission_id + "/comments_replies").subscribe(function (result) {
            _this.comments = result.json().data;
        }, function (error) { return console.error(error); });
    };
    SubmissionShowComponent.prototype.doVoteSubmission = function (submission_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrl + "/" + submission_id + "/vote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload();
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 404:
                    _this.error_message = "Submission does not exist.";
                    break;
                case 422:
                    _this.error_message = "User has not voted previously or User cannot vote own submissions.";
                    break;
                default:
                    _this.error_message = "Error.";
                    break;
            }
        });
    };
    SubmissionShowComponent.prototype.doUnvoteSubmission = function (submission_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrl + "/" + submission_id + "/unvote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload();
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has not voted previously or User cannot unvote own submissions.";
                    break;
                default:
                    _this.error_message = "Error.";
                    break;
            }
        });
    };
    SubmissionShowComponent.prototype.doVoteComment = function (comment_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrlComments + comment_id + "/vote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload(true);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has voted previously or User cannot vote own comments.";
                    break;
                default:
                    _this.error_message = "Error";
            }
        });
    };
    SubmissionShowComponent.prototype.doUnvoteComment = function (comment_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrlComments + comment_id + "/unvote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload(true);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has not voted previously or User cannot unvote own comments.";
                    break;
                default:
                    _this.error_message = "Error.";
                    break;
            }
        });
    };
    SubmissionShowComponent.prototype.doComment = function () {
        var _this = this;
        var commentPost = new CommentPost();
        commentPost.content = this.textarea_comment;
        console.log(this.submission.id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.post(this.apiUrlCommentsSubmission + this.submission.id + "/comment", commentPost, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload(true);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 404:
                    _this.error_message = "Submission does not exist.";
                    break;
                case 422:
                    _this.error_message = "Internal error.";
                    break;
            }
        });
    };
    SubmissionShowComponent.prototype.doVoteReply = function (reply_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrlReplies + reply_id + "/vote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload(true);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has voted previously or User cannot vote own comments.";
                    break;
                default:
                    _this.error_message = "Error";
            }
        });
    };
    SubmissionShowComponent.prototype.doUnvoteReply = function (reply_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrlReplies + reply_id + "/unvote", {}, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            _this.error_message = "";
            window.location.reload(true);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has not voted previously or User cannot unvote own comments.";
                    break;
                default:
                    _this.error_message = "Error.";
                    break;
            }
        });
    };
    SubmissionShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submission-show',
            template: __webpack_require__(/*! ./submission-show.component.html */ "./src/app/submission-show/submission-show.component.html"),
            styles: [__webpack_require__(/*! ./submission-show.component.css */ "./src/app/submission-show/submission-show.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], SubmissionShowComponent);
    return SubmissionShowComponent;
}());

var Reply = /** @class */ (function () {
    function Reply() {
    }
    return Reply;
}());
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());
var CommentPost = /** @class */ (function () {
    function CommentPost() {
    }
    return CommentPost;
}());


/***/ }),

/***/ "./src/app/submission/submission.component.css":
/*!*****************************************************!*\
  !*** ./src/app/submission/submission.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.error_message {\n  color: red;\n  margin: 4px;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/submission/submission.component.html":
/*!******************************************************!*\
  !*** ./src/app/submission/submission.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submissions\"><div id=\"hacker_news_title\">Hacker News</div></a></td>\n\t\t\t\t<td class=\"main_bar\" style=\"margin-left: 5px\"><a routerLink=\"/newest\">new</a> |</td>\n\t\t\t\t<div *ngIf=\"globals.api_key != ''\">\n\t\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/threads\">threads</a> |</td>\n\t\t\t\t</div>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/ask\">ask</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submit\">submit</a></td>\n\t\t\t\t<td class=\"last_bar\" *ngIf=\"globals.api_key == ''; else showLogout\"><a style=\"cursor: pointer;\" id=\"googleBtn\">login</a></td>\n\t\t\t\t<ng-template #showLogout>\n\t\t\t\t\t<td style=\"color: #000000\" class=\"last_bar\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{globals.user_id}}\" style=\"font-weight:bold;\">{{globals.user_name}}</a>\n\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"logout()\"> | logout</a></td>\n\t\t\t\t</ng-template>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n<table class=\"common_table\">\n\t<tr>\n\t\t<td *ngIf=\"error_message\">\n\t\t\t<p class=\"error_message\">{{error_message}}</p>\n\t\t</td>\n\t</tr>\n  <div *ngIf=\"submissions\">\n\t\t<div *ngFor=\"let submission of submissions; let i=index\">\n    <tr>\n      <td>\n\t\t\t\t<div style=\"font-size: 10pt; display: inline;\">{{i + 1}}.</div>\n\t\t\t\t<div *ngIf=\"globals.user_id == submission.user_creator_id\" class=\"vote_image\">\n\t\t\t\t\t<font style=\"color: orange\">*</font>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>\n        <div class=\"submission_title\">\n          {{submission.title}}\n        </div>\n\t\t\t\t<div class=\"submission_url\" *ngIf=\"submission.url\">\n        \t<div class=\"submission_url\">\n          \t<a style=\"color: #828282\" href=\"{{submission.url}}\">({{submission.url}})</a>\n        \t</div>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td>\n        <div class=\"submission_underline\">\n          {{submission.votes}} score by\n\t\t\t\t\t<a style=\"color: #828282\" routerLink=\"/user/{{submission.user_creator_id}}\"> {{submission.user_name}}</a>\n\t\t\t\t\t | {{submission.created_at | date:'dd/MM/yyyy hh:mm'}} |\n\t\t\t\t\t <div style=\"display: inline\" *ngIf=\"submission.comments; else discuss\">\n\t\t\t\t\t \t\t<a style=\"color: #828282\" routerLink=\"/submission/{{submission.id}}\"> {{submission.comments}} comments</a>\n\t\t\t\t\t </div>\n\t\t\t\t\t <ng-template #discuss>\n\t\t\t\t\t\t <a style=\"color: #828282\" routerLink=\"/submission/{{submission.id}}\"> discuss</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t|\n\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\"  (click)=\"doVote(submission.id)\"> vote</a>\n\t\t\t\t\t|\n\t\t\t\t\t<a style=\"color: #828282; cursor: pointer;\" (click)=\"doUnvote(submission.id)\"> unvote</a>\n        </div>\n      </td>\n    </tr>\n\t</div>\n  </div>\n</table>\n</body>\n"

/***/ }),

/***/ "./src/app/submission/submission.component.ts":
/*!****************************************************!*\
  !*** ./src/app/submission/submission.component.ts ***!
  \****************************************************/
/*! exports provided: SubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return SubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmissionComponent = /** @class */ (function () {
    function SubmissionComponent(http, _router, globals) {
        this.http = http;
        this._router = _router;
        this.globals = globals;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions';
        this.loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin';
        this.error_message = "";
        console.log('Constructor');
        this.router = _router;
        if (window.localStorage.length > 0) {
            this.globals.user_name = localStorage.getItem("name"),
                this.globals.api_key = localStorage.getItem("api_key");
            this.globals.user_id = localStorage.getItem("id");
            this.globals.karma = localStorage.getItem("karma");
            console.log("1");
        }
        if (this.router.url == '/submissions') {
            this.getSubmissionsUrl();
        }
        else if (this.router.url == '/newest') {
            this.getAllSubmissions();
        }
        else if (this.router.url == '/ask') {
            this.getSubmissionsAsk();
        }
    }
    SubmissionComponent.prototype.ngOnInit = function () {
    };
    SubmissionComponent.prototype.ngAfterViewInit = function () {
        if (window.localStorage.length == 0)
            this.googleInit();
    };
    SubmissionComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '323632880151-021adosf6m80llcieeba79e4cjvf6kp6.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    SubmissionComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            console.log("3");
            var profile = googleUser.getBasicProfile();
            var tokenGoogle = new Login();
            tokenGoogle.token = googleUser.getAuthResponse().id_token;
            var req = _this.http.post(_this.loginUrl, tokenGoogle)
                .subscribe(function (res) {
                _this.info = res.json().data;
                console.log(_this.info);
                localStorage.setItem("name", _this.info['name']);
                localStorage.setItem("api_key", _this.info['api_key']);
                localStorage.setItem("id", _this.info['id'].toString());
                localStorage.setItem("karma", _this.info['karma'].toString());
                window.location.reload();
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    SubmissionComponent.prototype.getSubmissionsUrl = function () {
        var _this = this;
        this.http.get(this.apiUrl + "/url").subscribe(function (result) {
            _this.submissions = result.json().data;
        }, function (error) { return console.error(error); });
    };
    SubmissionComponent.prototype.getAllSubmissions = function () {
        var _this = this;
        this.http.get(this.apiUrl).subscribe(function (result) {
            _this.submissions = result.json().data;
        }, function (error) { return console.error(error); });
    };
    SubmissionComponent.prototype.getSubmissionsAsk = function () {
        var _this = this;
        this.http.get(this.apiUrl + "/ask").subscribe(function (result) {
            _this.submissions = result.json().data;
        }, function (error) { return console.error(error); });
    };
    SubmissionComponent.prototype.doVote = function (submission_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrl + "/" + submission_id + "/vote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload();
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 404:
                    _this.error_message = "Submission does not exist.";
                    break;
                case 422:
                    _this.error_message = "User has voted previously.";
                    break;
            }
        });
    };
    SubmissionComponent.prototype.doUnvote = function (submission_id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrl + "/" + submission_id + "/unvote", {}, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            window.location.reload();
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "Error in authenticity.";
                    break;
                case 422:
                    _this.error_message = "User has not voted previously or User cannot unvote its own submission";
                    break;
                default:
                    _this.error_message = "Error";
                    break;
            }
        });
    };
    SubmissionComponent.prototype.logout = function () {
        this.globals.api_key = '';
        this.globals.user_id = '';
        this.globals.user_name = '';
        this.globals.karma = '';
        localStorage.clear();
        window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
        window.location.reload();
    };
    SubmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submission',
            template: __webpack_require__(/*! ./submission.component.html */ "./src/app/submission/submission.component.html"),
            styles: [__webpack_require__(/*! ./submission.component.css */ "./src/app/submission/submission.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], SubmissionComponent);
    return SubmissionComponent;
}());

var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());


/***/ }),

/***/ "./src/app/submit/submit.component.css":
/*!*********************************************!*\
  !*** ./src/app/submit/submit.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.param {\n  font-size: 12px;\n}\n\n.input {\n  width: 38%;\n}\n\n.submit_or {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.error_message {\n  color: red;\n  margin: 4px;\n  font-size: 14px;\n}\n\n.input_text {\n  height: 90px;\n  width: 413px;\n  font-family: monospace;\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/submit/submit.component.html":
/*!**********************************************!*\
  !*** ./src/app/submit/submit.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submissions\"><div id=\"hacker_news_title\">Hacker News</div></a></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n  <table class=\"common_table\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td *ngIf=\"error_message\">\n\t\t\t\t\t<p class=\"error_message\">{{error_message}}</p>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n        <td class=\"param\">title</td>\n        <td><input type=\"text\" [(ngModel)]=\"submit_title\" class=\"input\"></td>\n      </tr>\n      <tr>\n        <td class=\"param\">url</td>\n        <td><input type=\"text\" [(ngModel)]=\"submit_url\" class=\"input\"></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class=\"submit_or\">OR</td>\n      </tr>\n      <tr>\n        <td class=\"param\">text</td>\n        <td><textarea [(ngModel)]=\"submit_text\" class=\"input_text\"></textarea></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td><button (click)=\"submitButtonPressed()\">submit</button></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class=\"param\">Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class=\"param\">You can also submit via bookmarklet .</td>\n      </tr>\n  </table>\n</body>\n"

/***/ }),

/***/ "./src/app/submit/submit.component.ts":
/*!********************************************!*\
  !*** ./src/app/submit/submit.component.ts ***!
  \********************************************/
/*! exports provided: SubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return SubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitComponent = /** @class */ (function () {
    function SubmitComponent(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/submissions';
        this.submit_title = "";
        this.submit_url = "";
        this.submit_text = "";
        this.error_message = "";
        if (window.localStorage.length > 0) {
            this.globals.user_name = localStorage.getItem("name"),
                this.globals.api_key = localStorage.getItem("api_key");
            this.globals.user_id = localStorage.getItem("id");
            this.globals.karma = localStorage.getItem("karma");
        }
    }
    SubmitComponent.prototype.ngOnInit = function () {
    };
    SubmitComponent.prototype.submitButtonPressed = function () {
        var _this = this;
        var submit = new SubmitPost();
        submit.title = this.submit_title;
        submit.url = this.submit_url;
        submit.text = this.submit_text;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.post(this.apiUrl, submit, { headers: headers })
            .subscribe(function (res) {
            _this.error_message = "";
            _this.router.navigate(['newest']);
        }, function (err) {
            switch (err.status) {
                case 403:
                    _this.error_message = "You must login first";
                    break;
                case 417:
                    _this.error_message = "You must write a title and an url or a text";
                    break;
                case 422:
                    _this.error_message = "A submission with same url already exists";
                    break;
                case 500:
                    _this.error_message = "Error in data base";
                    break;
            }
        });
    };
    SubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit',
            template: __webpack_require__(/*! ./submit.component.html */ "./src/app/submit/submit.component.html"),
            styles: [__webpack_require__(/*! ./submit.component.css */ "./src/app/submit/submit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], SubmitComponent);
    return SubmitComponent;
}());

var SubmitPost = /** @class */ (function () {
    function SubmitPost() {
    }
    return SubmitPost;
}());


/***/ }),

/***/ "./src/app/threads/threads.component.css":
/*!***********************************************!*\
  !*** ./src/app/threads/threads.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.submission_title {\n  color: #111111;\n  font-size: 10pt;\n  display:inline;\n}\n\n.vote_image {\n  width:      10px;\n  height:     10px;\n  border:     0px;\n  display: inline;\n}\n\n.submission_url {\n  color: #828282;\n  font-size: 8pt;\n  display: inline;\n}\n\n.submission_url a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.submission_underline {\n  color: #828282;\n  font-size: 7pt;\n}\n\n.submission_underline a:hover {\n  text-decoration: underline;\n  color: #828282;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.threads_table {\n  font-size: 12px;\n  margin:8px;\n}\n\n.thread_user {\n  color: green;\n  display:inline;\n}\n\n.thread_user:hover {\n  text-decoration: underline;\n}\n\n.thread_link {\n  color:#828282;\n}\n\n.thread_link:hover {\n  text-decoration: underline;\n}\n"

/***/ }),

/***/ "./src/app/threads/threads.component.html":
/*!************************************************!*\
  !*** ./src/app/threads/threads.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submissions\"><div id=\"hacker_news_title\">Hacker News</div></a></td>\n\t\t\t\t<td class=\"main_bar\" style=\"margin-left: 5px\"><a routerLink=\"/newest\">new</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/threads\">threads</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/ask\">ask</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submit\">submit</a></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n<table class=\"common_table\">\n  <div *ngFor=\"let thread of threads\" class=\"threads_table\">\n  <tr>\n    <td style=\"color: orange\">*</td>\n    <td>\n      {{thread.votes}} points by <a routerLink=\"/user/{{thread.user_id}}\" class=\"thread_user\">{{thread.user_name}}</a> on\n      {{thread.created_at | date:'dd/MM/yyyy hh:mm'}} |\n      <a routerLink=\"/submission/{{thread.submission_id}}\" class=\"thread_link\">parent</a> on:\n      <a routerLink=\"/submission/{{thread.submission_id}}\" class=\"thread_link\">{{thread.submission_title}}</a>\n    </td>\n  </tr>\n  <tr>\n    <td></td>\n    <td style=\"font-size: 14px\">{{thread.content}}</td>\n  </tr>\n</div>\n</table>\n</body>\n"

/***/ }),

/***/ "./src/app/threads/threads.component.ts":
/*!**********************************************!*\
  !*** ./src/app/threads/threads.component.ts ***!
  \**********************************************/
/*! exports provided: ThreadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadsComponent", function() { return ThreadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThreadsComponent = /** @class */ (function () {
    function ThreadsComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/';
        if (window.localStorage.length > 0) {
            this.globals.user_name = localStorage.getItem("name"),
                this.globals.api_key = localStorage.getItem("api_key");
            this.globals.user_id = localStorage.getItem("id");
            this.globals.karma = localStorage.getItem("karma");
        }
        this.getThreads();
    }
    ThreadsComponent.prototype.ngOnInit = function () {
    };
    ThreadsComponent.prototype.getThreads = function () {
        var _this = this;
        this.http.get(this.apiUrl + this.globals.user_id + "/comments").subscribe(function (result) {
            _this.threads = result.json().data;
        }, function (error) { return console.error(error); });
    };
    ThreadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-threads',
            template: __webpack_require__(/*! ./threads.component.html */ "./src/app/threads/threads.component.html"),
            styles: [__webpack_require__(/*! ./threads.component.css */ "./src/app/threads/threads.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], ThreadsComponent);
    return ThreadsComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Verdana, Arial, Geneva, sans-serif;\n}\n\n.user_params {\n  color: #828282;\n  font-size: 14px;\n  margin-left: 5px;\n  margin-top: 6px;\n}\n\n.user_name {\n  color: green;\n  font-size: 14px;\n  margin-left: 5px;\n  margin-top: 6px;\n}\n\n.row_space {\n  margin: 100px;\n}\n\n.main_bar {\n  float:left;\n  font-size: 10pt;\n  color:#111111;\n  line-height: 16pt;\n  height: 10px;\n  margin-right: 2px;\n}\n\na {\n  text-decoration: none;\n  color:#111111;\n}\n\n#hacker_news_title {\n  color:#111111;\n  font-weight: bold;\n}\n\n#navigation_bar {\n  background-color: #ff6600;\n  width: 100%;\n}\n\n.last_bar {\n  text-align:right;\n  font-size: 10pt;\n  margin-right: 5px;\n}\n\n.bar_image {\n  width: 18px;\n  padding-right: 4px;\n}\n\n.image_y {\n  border: 1px #ffffff solid;\n  width:18px;\n  height: 18px;\n}\n\n.input_text {\n  height: 90px;\n  width: 413px;\n  font-family: monospace;\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div>\n\t\t<table id=\"navigation_bar\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"bar_image\"><a routerLink=\"/submissions\"><img class=\"image_y\" src=\"/assets\\logo.gif\"></a></td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submissions\"><div id=\"hacker_news_title\">Hacker News</div></a></td>\n\t\t\t\t<td class=\"main_bar\"style=\"margin-left: 5px\"><a routerLink=\"/newest\">new</a> |</td>\n\t\t\t\t<div *ngIf=\"globals.api_key != ''\">\n\t\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/threads\">threads</a> |</td>\n\t\t\t\t</div>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/ask\">ask</a> |</td>\n\t\t\t\t<td class=\"main_bar\"><a routerLink=\"/submit\">submit</a></td>\n\t\t\t\t<td class=\"last_bar\" *ngIf=\"globals.api_key == ''; else showLogout\"><a style=\"cursor: pointer;\" id=\"googleBtn\">login</a></td>\n\t\t\t\t<ng-template #showLogout>\n\t\t\t\t\t<td style=\"color: #000000\" class=\"last_bar\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{globals.user_id}}\" style=\"font-weight:bold;\">{{globals.user_name}}</a>\n\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"logout()\"> | logout</a></td>\n\t\t\t\t</ng-template>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n<table class=\"common_table\">\n\t<div *ngIf=\"user\">\n\t\t<tr>\n\t\t\t<td><div class=\"user_params\">name: </div></td>\n\t\t\t<td><div class=\"user_name\">{{user.name}}</div></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><div class=\"user_params\">created: </div></td>\n\t\t\t<td><div class=\"user_params\">{{user.created_at | date:'dd/MM/yyyy'}}</div></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><div class=\"user_params\">karma: </div></td>\n\t\t\t<td><div class=\"user_params\">{{user.karma}}</div></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><div class=\"user_params\">email: </div></td>\n\t\t\t<td><div class=\"user_params\">{{user.email}}</div></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><div class=\"user_params\">about: </div></td>\n\t\t\t<td *ngIf=\"userCanUpdate; else cannot_update\">\n\t\t\t\t<textarea [(ngModel)]=\"user_about\" class=\"input_text\"></textarea>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<ng-template #cannot_update>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"user_params\">{{user.about}}</div>\n\t\t\t\t</td>\n\t\t\t</ng-template>\n\t\t</tr>\n\t\t<tr *ngIf=\"userCanUpdate\">\n\t\t\t<td></td>\n\t\t\t<td><button (click)=\"updateButtonPressed()\">update</button></td>\n\t\t</tr>\n\t</div>\n</table>\n</body>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(http, route, globals) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.globals = globals;
        this.apiUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/users/';
        this.apiUrlId = 'http://practicaasw-hackernews.herokuapp.com/api/v1/userid';
        this.loginUrl = 'http://practicaasw-hackernews.herokuapp.com/api/v1/user/signin';
        this.user_about = "";
        this.userCanUpdate = false;
        if (window.localStorage.length > 0) {
            this.globals.user_name = localStorage.getItem("name"),
                this.globals.api_key = localStorage.getItem("api_key");
            this.globals.user_id = localStorage.getItem("id");
            this.globals.karma = localStorage.getItem("karma");
        }
        this.route.params.subscribe(function (params) {
            _this.getUser(params['id']);
            _this.userCanUpdate = params['id'] == _this.globals.user_id;
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        if (window.localStorage.length == 0)
            this.googleInit();
    };
    UserComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '323632880151-021adosf6m80llcieeba79e4cjvf6kp6.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    UserComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            var tokenGoogle = new Login();
            tokenGoogle.token = googleUser.getAuthResponse().id_token;
            var req = _this.http.post(_this.loginUrl, tokenGoogle)
                .subscribe(function (res) {
                _this.info = res.json().data;
                console.log(_this.info);
                localStorage.setItem("name", _this.info['name']);
                localStorage.setItem("api_key", _this.info['api_key']);
                localStorage.setItem("id", _this.info['id'].toString());
                localStorage.setItem("karma", _this.info['karma'].toString());
                window.location.reload();
            }, function (err) {
                console.log(err);
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    UserComponent.prototype.logout = function () {
        this.globals.api_key = '';
        this.globals.user_id = '';
        this.globals.user_name = '';
        this.globals.karma = '';
        localStorage.clear();
        window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
        window.location.reload();
    };
    UserComponent.prototype.getUser = function (user_id) {
        var _this = this;
        this.http.get(this.apiUrl + user_id).subscribe(function (result) {
            _this.user = result.json().data;
            _this.user_about = _this.user.about;
        }, function (error) { return console.error(error); });
    };
    UserComponent.prototype.updateButtonPressed = function () {
        var userUpdate = new UserUpdatePost();
        userUpdate.about = this.user_about;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.globals.api_key);
        var req = this.http.put(this.apiUrl + this.globals.user_id + "/update", userUpdate, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            window.location.reload(true);
        }, function (err) {
            console.log(err);
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], UserComponent);
    return UserComponent;
}());

var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());
var UserUpdatePost = /** @class */ (function () {
    function UserUpdatePost() {
    }
    return UserUpdatePost;
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/alexvinas/Desktop/aux/angular/practicaasw-entrega3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map