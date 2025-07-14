/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/game.ts":
/*!*********************!*\
  !*** ./app/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
var utility_1 = __webpack_require__(/*! ./utility */ "./app/utility.ts");
var scoreboard_1 = __webpack_require__(/*! ./scoreboard */ "./app/scoreboard.ts");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1.Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm +=
                '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm +=
                '<div class="col-sm-1"><input type="text" class="form-control" id="answer' +
                    i +
                    '" size="5" /></div>';
            gameForm += '</div>';
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number((0, utility_1.getValue)('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor,
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./app/player.ts":
/*!***********************!*\
  !*** ./app/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "./app/scoreboard.ts":
/*!***************************!*\
  !*** ./app/scoreboard.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scoreboard = void 0;
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var result = _a[_i];
            output += '<h4>';
            output += "".concat(result.playerName, ": ").concat(result.score, "/").concat(result.problemCount, " for factor ").concat(result.factor);
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;


/***/ }),

/***/ "./app/utility.ts":
/*!************************!*\
  !*** ./app/utility.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = exports.getValue = void 0;
function getInputValue(elementID) {
    var inputElement = (document.getElementById(elementID));
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var player_1 = __webpack_require__(/*! ./player */ "./app/player.ts");
var game_1 = __webpack_require__(/*! ./game */ "./app/game.ts");
var utility_1 = __webpack_require__(/*! ./utility */ "./app/utility.ts");
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var playerName = (0, utility_1.getValue)('playername');
    var player = new player_1.Player(playerName);
    var problemCount = Number((0, utility_1.getValue)('problemCount'));
    var factor = Number((0, utility_1.getValue)('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM5RCxJQUFNLFVBQVUsR0FBRyxzQkFBUSxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLElBQU0sTUFBTSxHQUFXLElBQUksZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTlDLElBQU0sWUFBWSxHQUFXLE1BQU0sQ0FBQyxzQkFBUSxFQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsSUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLHNCQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsRCxPQUFPLEdBQUcsSUFBSSxXQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFHSCxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM5RCxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDM0IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aW1hdGgvLi9hcHAvZ2FtZS50cyIsIndlYnBhY2s6Ly9tdWx0aW1hdGgvLi9hcHAvcGxheWVyLnRzIiwid2VicGFjazovL211bHRpbWF0aC8uL2FwcC9zY29yZWJvYXJkLnRzIiwid2VicGFjazovL211bHRpbWF0aC8uL2FwcC91dGlsaXR5LnRzIiwid2VicGFjazovL211bHRpbWF0aC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tdWx0aW1hdGgvLi9hcHAvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vcmVzdWx0JztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IFNjb3JlYm9hcmQgfSBmcm9tICcuL3Njb3JlYm9hcmQnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIHByaXZhdGUgc2NvcmVib2FyZDogU2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBsYXllcjogUGxheWVyLFxuICAgIHB1YmxpYyBwcm9ibGVtQ291bnQ6IG51bWJlcixcbiAgICBwdWJsaWMgZmFjdG9yOiBudW1iZXJcbiAgKSB7fVxuXG4gIGRpc3BsYXlHYW1lKCk6IHZvaWQge1xuICAgIC8vIGNyZWF0ZSB0aGUgaHRtbCBmb3IgdGhlIGN1cnJlbnQgZ2FtZVxuICAgIGxldCBnYW1lRm9ybTogc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5wcm9ibGVtQ291bnQ7IGkrKykge1xuICAgICAgZ2FtZUZvcm0gKz0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JztcbiAgICAgIGdhbWVGb3JtICs9XG4gICAgICAgICc8bGFiZWwgZm9yPVwiYW5zd2VyJyArIGkgKyAnXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCI+JztcbiAgICAgIGdhbWVGb3JtICs9IFN0cmluZyh0aGlzLmZhY3RvcikgKyAnIHggJyArIGkgKyAnID0gPC9sYWJlbD4nO1xuICAgICAgZ2FtZUZvcm0gKz1cbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJhbnN3ZXInICtcbiAgICAgICAgaSArXG4gICAgICAgICdcIiBzaXplPVwiNVwiIC8+PC9kaXY+JztcbiAgICAgIGdhbWVGb3JtICs9ICc8L2Rpdj4nO1xuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgbmV3IGdhbWUgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBnYW1lRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpITtcbiAgICBnYW1lRWxlbWVudC5pbm5lckhUTUwgPSBnYW1lRm9ybTtcblxuICAgIC8vIGVuYWJsZSB0aGUgY2FsY3VsYXRlIHNjb3JlIGJ1dHRvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxjdWxhdGUnKSEucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgY2FsY3VsYXRlU2NvcmUoKTogdm9pZCB7XG4gICAgbGV0IHNjb3JlOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIHRoZSB0ZXh0IGJveGVzIGFuZCBjYWxjdWxhdGUgdGhlIG51bWJlciB0aGF0IGFyZSBjb3JyZWN0XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5wcm9ibGVtQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgYW5zd2VyOiBudW1iZXIgPSBOdW1iZXIoZ2V0VmFsdWUoJ2Fuc3dlcicgKyBpKSk7XG4gICAgICBpZiAoaSAqIHRoaXMuZmFjdG9yID09PSBhbnN3ZXIpIHtcbiAgICAgICAgc2NvcmUrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSBuZXcgcmVzdWx0IG9iamVjdCB0byBwYXNzIHRvIHRoZSBzY29yZWJvYXJkXG4gICAgY29uc3QgcmVzdWx0OiBSZXN1bHQgPSB7XG4gICAgICBwbGF5ZXJOYW1lOiB0aGlzLnBsYXllci5uYW1lLFxuICAgICAgc2NvcmU6IHNjb3JlLFxuICAgICAgcHJvYmxlbUNvdW50OiB0aGlzLnByb2JsZW1Db3VudCxcbiAgICAgIGZhY3RvcjogdGhpcy5mYWN0b3IsXG4gICAgfTtcblxuICAgIC8vIGFkZCB0aGUgcmVzdWx0IGFuZCB1cGRhdGUgdGhlIHNjb3JlYm9hcmRcbiAgICB0aGlzLnNjb3JlYm9hcmQuYWRkUmVzdWx0KHJlc3VsdCk7XG4gICAgdGhpcy5zY29yZWJvYXJkLnVwZGF0ZVNjb3JlYm9hcmQoKTtcblxuICAgIC8vIGRpc2FibGUgdGhlIGNhbGN1bGF0ZSBzY29yZSBidXR0b25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsY3VsYXRlJykhLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuL3BlcnNvbic7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7fVxuICBmb3JtYXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi9yZXN1bHQnO1xuXG5leHBvcnQgY2xhc3MgU2NvcmVib2FyZCB7XG4gIHByaXZhdGUgcmVzdWx0czogUmVzdWx0W10gPSBbXTtcblxuICBhZGRSZXN1bHQobmV3UmVzdWx0OiBSZXN1bHQpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3VsdHMucHVzaChuZXdSZXN1bHQpO1xuICB9XG5cbiAgdXBkYXRlU2NvcmVib2FyZCgpOiB2b2lkIHtcbiAgICBsZXQgb3V0cHV0ID0gJzxoMj5TY29yZWJvYXJkPC9oMj4nO1xuXG4gICAgZm9yIChjb25zdCByZXN1bHQgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBvdXRwdXQgKz0gJzxoND4nO1xuICAgICAgb3V0cHV0ICs9IGAke3Jlc3VsdC5wbGF5ZXJOYW1lfTogJHtyZXN1bHQuc2NvcmV9LyR7cmVzdWx0LnByb2JsZW1Db3VudH0gZm9yIGZhY3RvciAke3Jlc3VsdC5mYWN0b3J9YDtcbiAgICAgIG91dHB1dCArPSAnPC9oND4nO1xuICAgIH1cblxuICAgIGNvbnN0IHNjb3Jlc0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlcycpITtcbiAgICBzY29yZXNFbGVtZW50LmlubmVySFRNTCA9IG91dHB1dDtcbiAgfVxufVxuIiwiZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbGVtZW50SUQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PihcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpXG4gICk7XG4gIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGxvZ2dlcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG5cbmV4cG9ydCB7IGdldElucHV0VmFsdWUgYXMgZ2V0VmFsdWUsIGxvZ2dlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgZ2V0VmFsdWUgfSBmcm9tICcuL3V0aWxpdHknO1xuXG5sZXQgbmV3R2FtZTogR2FtZTtcblxuLy8gYWRkIGNsaWNrIGhhbmRsZXIgdG8gdGhlIHN0YXJ0IGdhbWUgYnV0dG9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lJykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZ2V0VmFsdWUoJ3BsYXllcm5hbWUnKTtcbiAgY29uc3QgcGxheWVyOiBQbGF5ZXIgPSBuZXcgUGxheWVyKHBsYXllck5hbWUpO1xuXG4gIGNvbnN0IHByb2JsZW1Db3VudDogbnVtYmVyID0gTnVtYmVyKGdldFZhbHVlKCdwcm9ibGVtQ291bnQnKSk7XG4gIGNvbnN0IGZhY3RvcjogbnVtYmVyID0gTnVtYmVyKGdldFZhbHVlKCdmYWN0b3InKSk7XG5cbiAgbmV3R2FtZSA9IG5ldyBHYW1lKHBsYXllciwgcHJvYmxlbUNvdW50LCBmYWN0b3IpO1xuICBuZXdHYW1lLmRpc3BsYXlHYW1lKCk7XG59KTtcblxuLy8gYWRkIGNsaWNrIGhhbmRsZXIgdG8gdGhlIGNhbGN1bGF0ZSBzY29yZSBidXR0b25cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxjdWxhdGUnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5ld0dhbWUuY2FsY3VsYXRlU2NvcmUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9