(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    19: function(e, a, t) {
      e.exports = t(27)
    },
    24: function(e, a, t) {},
    25: function(e, a, t) {},
    26: function(e, a, t) {},
    27: function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        c = t.n(l),
        n = t(15),
        i = t.n(n),
        r = (t(24), t(3)),
        s = t(4),
        o = t(7),
        u = t(5),
        d = t(6),
        k = t(10),
        y = t(29),
        p = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        h = ["/", "*", "-", "+", "="],
        m = 6,
        C = "scale(0.36)",
        v = 16;

      function b(e) {
        var a, t = e.value,
          l = "".concat(t).indexOf("."),
          n = t.substring(l, Object(y.a)(t.length)),
          i = -1 === l ? 0 : Object(y.a)(n.length - 1),
          r = null,
          s = null;
        return "NaN" === (r = parseFloat(t).toLocaleString(void 0, {
          minimumFractionDigits: i
        })) ? r = "Error" : r.length > v - 1 && ("e+0" === (s = parseFloat(t).toExponential(v - 4)).substring(s.length - 3, s.length) && (s = (s = parseFloat(t).toExponential(v - 1)).substring(0, s.length - 3)), "NaN" === (r = s) && (r = "Overflow\xa0Error")), a = "".concat(r).length > m ? C : "scale(1)", c.a.createElement("div", {
          className: "calculator-display"
        }, c.a.createElement("div", {
          className: "auto-scaling-text",
          style: {
            transform: a
          }
        }, r))
      }
      var E = function(e) {
          function a(e) {
            var t;
            return Object(r.a)(this, a), (t = Object(o.a)(this, Object(u.a)(a).call(this, e))).state = {
              displayValue: "0",
              operator: null,
              waitingForOperand: !1,
              firstOperand: "0",
              clearAll: !0
            }, t.handleClick = t.handleClick.bind(Object(k.a)(t)), t
          }
          return Object(d.a)(a, e), Object(s.a)(a, [{
            key: "processDigit",
            value: function(e) {
              var a = this.state,
                t = a.displayValue;
              if (a.waitingForOperand) this.setState({
                displayValue: "".concat(e),
                waitingForOperand: !1,
                clearAll: !1
              });
              else {
                var l = "0" === t ? "".concat(e) : "".concat(t).concat(e);
                this.setState({
                  displayValue: "".concat(l),
                  waitingForOperand: !1,
                  clearAll: !1
                })
              }
            }
          }, {
            key: "processOperator",
            value: function(e) {
              var a = this.state,
                t = a.displayValue,
                l = a.operator,
                c = a.waitingForOperand,
                n = a.firstOperand,
                i = null,
                r = null,
                s = null;
              if ("0" === n || null == l || c) this.setState({
                waitingForOperand: !0,
                firstOperand: t,
                operator: e,
                clearAll: !1
              });
              else {
                s = "".concat(n).concat(l).concat(t);
                try {
                  i = "".concat(Object(y.a)(s))
                } catch (o) {
                  i = "Error"
                }
                "Infinity" === i && (i = "Error"), r = "=" === e ? null : e, this.setState({
                  displayValue: "".concat(i),
                  waitingForOperand: !0,
                  firstOperand: "".concat(i),
                  operator: r,
                  clearAll: !1
                })
              }
            }
          }, {
            key: "processPoint",
            value: function(e) {
              var a = this.state,
                t = a.displayValue,
                l = a.waitingForOperand,
                c = -1 === "".concat(t).indexOf("."),
                n = null;
              l ? this.setState({
                displayValue: "0.",
                waitingForOperand: !1,
                clearAll: !1
              }) : c && (n = "".concat(t).concat(e), this.setState({
                displayValue: "".concat(n),
                waitingForOperand: !1,
                clearAll: !1
              }))
            }
          }, {
            key: "processPercentage",
            value: function(e) {
              var a = this.state.displayValue,
                t = parseFloat(a).toPrecision(v) / 100;
              this.setState({
                displayValue: "".concat(t),
                waitingForOperand: !1,
                clearAll: !1
              })
            }
          }, {
            key: "processPlusMinusToggle",
            value: function(e) {
              var a = this.state.displayValue,
                t = -1 * parseFloat(a).toPrecision(v);
              this.setState({
                displayValue: "".concat(t),
                waitingForOperand: !1,
                clearAll: !1
              })
            }
          }, {
            key: "processClear",
            value: function() {
              var e = this.state.clearAll;
              console.log("clearAll", e), e ? this.setState({
                displayValue: "0",
                firstOperand: "0",
                operator: null,
                waitingForOperand: !1,
                clearAll: !0
              }) : this.setState({
                displayValue: "0",
                clearAll: !0
              })
            }
          }, {
            key: "processUnknownKey",
            value: function(e) {
              console.log("Unexpected input: ", e)
            }
          }, {
            key: "processFunctionKey",
            value: function(e) {
              switch (e) {
                case "C":
                  this.processClear(e);
                  break;
                case "\xb1":
                  this.processPlusMinusToggle(e);
                  break;
                case ".":
                  this.processPoint(e);
                  break;
                case "%":
                  this.processPercentage(e);
                  break;
                default:
                  this.processUnknownKey(e)
              }
            }
          }, {
            key: "handleClick",
            value: function(e) {
              this.processNewKey("".concat(e.target.value))
            }
          }, {
            key: "processNewKey",
            value: function(e) {
              var a = p.includes(e),
                t = h.includes(e);
              a ? this.processDigit(e) : t ? this.processOperator(e) : this.processFunctionKey(e)
            }
          }, {
            key: "render",
            value: function() {
              return c.a.createElement("div", {
                className: "calculator"
              }, c.a.createElement(b, {
                value: this.state.displayValue
              }), c.a.createElement("div", {
                className: "calculator-keypad"
              }, c.a.createElement("div", {
                className: "input-keys"
              }, c.a.createElement("div", {
                className: "function-keys"
              }, c.a.createElement("button", {
                id: "key-clear",
                value: "C",
                className: "calculator-key key-clear",
                onClick: this.handleClick
              }, this.state.clearAll ? "AC" : "C"), c.a.createElement("button", {
                id: "key-sign",
                value: "\xb1",
                className: "calculator-key key-sign",
                onClick: this.handleClick
              }, "\xb1"), c.a.createElement("button", {
                id: "key-percent",
                value: "%",
                className: "calculator-key key-percent",
                onClick: this.handleClick
              }, "%")), c.a.createElement("div", {
                className: "digit-keys"
              }, c.a.createElement("button", {
                id: "key-0",
                value: "0",
                className: "calculator-key key-0",
                onClick: this.handleClick
              }, "0"), c.a.createElement("button", {
                id: "key-dot",
                value: ".",
                className: "calculator-key key-dot",
                onClick: this.handleClick
              }, "\xb7"), c.a.createElement("button", {
                id: "key-1",
                value: "1",
                className: "calculator-key key-1",
                onClick: this.handleClick
              }, "1"), c.a.createElement("button", {
                id: "key-2",
                value: "2",
                className: "calculator-key key-2",
                onClick: this.handleClick
              }, "2"), c.a.createElement("button", {
                id: "key-3",
                value: "3",
                className: "calculator-key key-3",
                onClick: this.handleClick
              }, "3"), c.a.createElement("button", {
                id: "key-4",
                value: "4",
                className: "calculator-key key-4",
                onClick: this.handleClick
              }, "4"), c.a.createElement("button", {
                id: "key-5",
                value: "5",
                className: "calculator-key key-5",
                onClick: this.handleClick
              }, "5"), c.a.createElement("button", {
                id: "key-6",
                value: "6",
                className: "calculator-key key-6",
                onClick: this.handleClick
              }, "6"), c.a.createElement("button", {
                id: "key-7",
                value: "7",
                className: "calculator-key key-7",
                onClick: this.handleClick
              }, "7"), c.a.createElement("button", {
                id: "key-8",
                value: "8",
                className: "calculator-key key-8",
                onClick: this.handleClick
              }, "8"), c.a.createElement("button", {
                id: "key-9",
                value: "9",
                className: "calculator-key key-9",
                onClick: this.handleClick
              }, "9"))), c.a.createElement("div", {
                className: "operator-keys"
              }, c.a.createElement("button", {
                id: "key-divide",
                value: "/",
                className: "calculator-key key-divide",
                onClick: this.handleClick
              }, "\xf7"), c.a.createElement("button", {
                id: "key-multiply",
                value: "*",
                className: "calculator-key key-multiply",
                onClick: this.handleClick
              }, "\xd7"), c.a.createElement("button", {
                id: "key-subtract",
                value: "-",
                className: "calculator-key key-subtract",
                onClick: this.handleClick
              }, "\u2013"), c.a.createElement("button", {
                id: "key-add",
                value: "+",
                className: "calculator-key key-add",
                onClick: this.handleClick
              }, "+"), c.a.createElement("button", {
                id: "key-equals",
                value: "=",
                className: "calculator-key key-equals",
                onClick: this.handleClick
              }, "="))))
            }
          }]), a
        }(l.Component),
        O = (t(25), function(e) {
          function a() {
            return Object(r.a)(this, a), Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
          }
          return Object(d.a)(a, e), Object(s.a)(a, [{
            key: "render",
            value: function() {
              return c.a.createElement("div", {
                className: "version"
              }, c.a.createElement("div", {
                className: "demo version-section"
              }, c.a.createElement("a", {
                href: "",
                className: "github-corner"
              }, c.a.createElement("svg", {
                width: "80",
                height: "80",
                viewBox: ""
              }, c.a.createElement("path", {
                d: ""
              }), c.a.createElement("path", {
                d: "",
                fill: "currentColor",
                className: "octo-arm"
              }), c.a.createElement("path", {
                d: "",
                fill: "currentColor",
                className: "octo-body"
              })))))
            }
          }]), a
        }(l.Component)),
        g = function(e) {
          function a() {
            return Object(r.a)(this, a), Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
          }
          return Object(d.a)(a, e), Object(s.a)(a, [{
            key: "render",
            value: function() {
              return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", null, c.a.createElement(O, null), c.a.createElement("h1", {
                className: "App-title"
              }, ""), c.a.createElement("div", {
                id: "intro",
                className: "App-intro"
              }, "")))
            }
          }]), a
        }(l.Component),
        f = (t(26), function(e) {
          function a() {
            return Object(r.a)(this, a), Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
          }
          return Object(d.a)(a, e), Object(s.a)(a, [{
            key: "render",
            value: function() {
              return c.a.createElement("div", {
                className: "App"
              }, c.a.createElement(g, null), c.a.createElement("div", {
                id: "wrapper"
              }, c.a.createElement("div", {
                id: "calculator-wrapper"
              }, c.a.createElement(E, null))))
            }
          }]), a
        }(l.Component));
      i.a.render(c.a.createElement(f, null), document.getElementById("root"))
    }
  },
  [
    [19, 1, 2]
  ]
]);
//# sourceMappingURL=main.af8029c4.chunk.js.map
