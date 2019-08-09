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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container p-4\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game-form/game-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game-form/game-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 offset-md-2 p-5\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <form action=\"\">\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"title\"  [(ngModel)]=\"game.title\" placeholder=\"title\" class=\"form-control\" autofocus>\n                </div>\n                <div class=\"form-group\">\n                    <textarea name=\"description\" rows=\"2\" [(ngModel)]=\"game.description\" placeholder=\"Description\" class=\"form-control\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"url\" [(ngModel)]=\"game.image\" placeholder=\"Image Url\" name=\"image\" class=\"form-control\">\n                </div>\n                <button class=\"btn btn-success btn-block\" (click)=\"edit ? updateGame() : saveNewGame()\">Save</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <img [src]=\"game.image == '' ? '/assets/no-image-icon.png' : game.image \" alt=\"\" class=\"card-img-top\">\n            <h3>{{game.title == '' ? 'Game title' : game.title}}</h3>\n            <p>{{game.description == '' ? 'Game description' : game.description}}</p>\n            <p>{{game.created_at | date: 'yyyy-MM-dd'}}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game-list/game-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game-list/game-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" *ngFor=\"let game of games\">\r\n    <div class=\"card text-center m-2\">\r\n        <div class=\"card-header bg-dark text-white d-flex justify-content-between align-items-center\">\r\n            {{game.title}}\r\n            <button class=\"btn btn-danger\" (click)=\"deleteGame(game.id)\">\r\n                <i class=\"far fa-trash-alt\"></i>\r\n            </button>\r\n        </div>\r\n        <img [src]=\"game.image\" class=\"card-img-top\" alt=\"\">\r\n        <div class=\"card-body\">\r\n            <p> {{game.description}} </p>\r\n            <a [routerLink]=\"['/games/edit',game.id]\" class=\"btn btn-info btn-block\">\r\n                EDIT GAME\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">NgMysqlCrud</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/games\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\"><i class=\"fas fa-gamepad\"></i> Games</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/games/add\" routerLinkActive=\"active\"><i class=\"fas fa-plus-circle\"></i> Add game</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
/* harmony import */ var _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-form/game-form.component */ "./src/app/components/game-form/game-form.component.ts");





var routes = [
    {
        path: '',
        redirectTo: '/games',
        pathMatch: 'full'
    },
    {
        path: 'games',
        component: _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__["GameListComponent"]
    },
    {
        path: 'games/add',
        component: _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"]
    },
    {
        path: 'games/edit/:id',
        component: _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-form/game-form.component */ "./src/app/components/game-form/game-form.component.ts");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_9__["GameFormComponent"],
                _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_10__["GameListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_games_service__WEBPACK_IMPORTED_MODULE_4__["GamesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game-form/game-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/game-form/game-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/game-form/game-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-form/game-form.component.ts ***!
  \*************************************************************/
/*! exports provided: GameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");




var GameFormComponent = /** @class */ (function () {
    function GameFormComponent(gameService, router, activeRoute) {
        this.gameService = gameService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.clases = 'row';
        this.edit = false;
        this.game = {
            id: 0,
            title: '',
            description: '',
            image: '',
            created_at: new Date()
        };
    }
    GameFormComponent.prototype.saveNewGame = function () {
        var _this = this;
        delete this.game.created_at;
        delete this.game.id;
        this.gameService.saveGame(this.game)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/games']);
        }, function (err) { return console.error(err); });
    };
    ;
    GameFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activeRoute.snapshot.params;
        if (params.id) {
            this.gameService.getGame(params.id).subscribe(function (res) {
                console.log(res);
                _this.game = res;
                _this.edit = true;
            }, function (err) { return console.error(err); });
        }
    };
    GameFormComponent.prototype.updateGame = function () {
        var _this = this;
        delete this.game.created_at;
        this.gameService.updateGame(this.game.id, this.game)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/games']);
        }, function (err) { return console.log(err); });
    };
    GameFormComponent.ctorParameters = function () { return [
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], GameFormComponent.prototype, "clases", void 0);
    GameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-form',
            template: __webpack_require__(/*! raw-loader!./game-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game-form/game-form.component.html"),
            styles: [__webpack_require__(/*! ./game-form.component.css */ "./src/app/components/game-form/game-form.component.css")]
        })
    ], GameFormComponent);
    return GameFormComponent;
}());



/***/ }),

/***/ "./src/app/components/game-list/game-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    box-shadow: 10px 5px 5px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWxpc3QvZ2FtZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbGlzdC9nYW1lLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/game-list/game-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");



var GameListComponent = /** @class */ (function () {
    function GameListComponent(gamesService) {
        this.gamesService = gamesService;
        this.clases = 'row';
        this.games = [];
    }
    GameListComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GameListComponent.prototype.deleteGame = function (id) {
        var _this = this;
        this.gamesService.deleteGame(id).subscribe(function (res) {
            _this.getGames();
        }, function (err) { return console.error(err); });
    };
    GameListComponent.prototype.getGames = function () {
        var _this = this;
        this.gamesService.getGames().subscribe(function (res) {
            _this.games = res;
        }, function (err) { return console.error(err); });
    };
    GameListComponent.ctorParameters = function () { return [
        { type: _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], GameListComponent.prototype, "clases", void 0);
    GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-list',
            template: __webpack_require__(/*! raw-loader!./game-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game-list/game-list.component.html"),
            styles: [__webpack_require__(/*! ./game-list.component.css */ "./src/app/components/game-list/game-list.component.css")]
        })
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GamesService = /** @class */ (function () {
    function GamesService(http) {
        this.http = http;
        this.API_URI = "http://localhost:3000/api";
    }
    GamesService.prototype.getGames = function () {
        return this.http.get(this.API_URI + '/games');
    };
    GamesService.prototype.getGame = function (id) {
        return this.http.get(this.API_URI + '/games/' + id);
    };
    GamesService.prototype.deleteGame = function (id) {
        return this.http.delete(this.API_URI + '/games/' + id);
    };
    GamesService.prototype.saveGame = function (game) {
        return this.http.post(this.API_URI + '/games', game);
    };
    GamesService.prototype.updateGame = function (id, game) {
        return this.http.put(this.API_URI + '/games/' + id, game);
    };
    GamesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GamesService);
    return GamesService;
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

module.exports = __webpack_require__(/*! C:\Users\maria\Desktop\angular-mysql\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map