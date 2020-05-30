"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var greet = function greet(name) {
  console.log("hello ".concat(name));
};

greet('mario');
greet('luigi');
greet('yoyo');

var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);

    this.score = 0;
  }

  _createClass(User, [{
    key: "showScore",
    value: function showScore() {
      console.log(this.score++);
    }
  }]);

  return User;
}();

var user1 = new User();
user1.showScore();
