parcelRequire = (function(e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[n][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
        ? define(function() {
            return c;
          })
        : t && (this[t] = c);
  }
  return u;
})(
  {
    qtBL: [
      function(require, module, exports) {
        "use strict";
        function r(r) {
          return n(r) || t(r) || e();
        }
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }
        function t(r) {
          if (
            Symbol.iterator in Object(r) ||
            "[object Arguments]" === Object.prototype.toString.call(r)
          )
            return Array.from(r);
        }
        function n(r) {
          if (Array.isArray(r)) {
            for (var e = 0, t = new Array(r.length); e < r.length; e++)
              t[e] = r[e];
            return t;
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.equals = exports.operatorEnd = exports.secondOperators = exports.initialOperators = exports.calculate = void 0);
        var o = function(r, e, t) {
          var n = Number(r),
            o = Number(t);
          switch (e) {
            case "+":
              return n + o;
            case "-":
              return n - o;
            case "x":
              return n * o;
            case "÷":
              return n / o;
            default:
              return;
          }
        };
        exports.calculate = o;
        var a = function(r) {
          return r.findIndex(function(r) {
            return "x" === r || "÷" === r;
          });
        };
        exports.initialOperators = a;
        var i = function(r) {
          return r.findIndex(function(r) {
            return "+" === r || "-" === r;
          });
        };
        exports.secondOperators = i;
        var s = function(r) {
          var e = r[r.length - 1];
          return "+" === e || "-" === e || "x" === e || "÷" === e;
        };
        exports.operatorEnd = s;
        var u = function(e) {
          for (s(e) && e.splice(e.length - 1, 1); -1 !== a(e); ) {
            var t = a(e),
              n = e.slice(t - 1, t + 2),
              u = o.apply(void 0, r(n));
            e.splice(t - 1, 3, u);
          }
          for (; -1 !== i(e); ) {
            var c = i(e),
              p = e.slice(c - 1, c + 2),
              l = o.apply(void 0, r(p));
            e.splice(c - 1, 3, l);
          }
          return e[0];
        };
        exports.equals = u;
      },
      {}
    ],
    Focm: [
      function(require, module, exports) {
        "use strict";
        var e = require("./calculate"),
          n = "",
          t = [],
          r = "",
          i = "",
          a = "",
          u = document.getElementById("display"),
          c = document.getElementById("running"),
          l = function(e) {
            o(), (a = ""), (u.innerHTML = n), (c.innerHTML = t);
          },
          d = document.getElementById("clear");
        d.addEventListener("click", l);
        for (
          var o = function() {
              (n = ""), (t = []), (r = ""), (i = "");
            },
            s = function(e) {
              return "+" === e || "-" === e || "x" === e || "÷" === e;
            },
            v = function(e) {
              var i = e.target.value;
              (r = ""),
                s(a) && (n = ""),
                "=" === a && (o(), (u.innerHTML = n), (c.innerHTML = t)),
                "0" === n && (n = ""),
                n.length < 10 && (n += i),
                (a = i),
                (u.innerHTML = n),
                (c.innerHTML = t.join(" ") + n);
            },
            m = document.getElementsByClassName("number"),
            g = 0;
          g < m.length;
          g++
        )
          m[g].addEventListener("click", v);
        for (
          var L = function(e) {
              s(a) || t.push(n);
              var l = e.target.value;
              (a = l),
                "" === r && ((n = r = l), (i = ""), t.push(l)),
                (u.innerHTML = n),
                (c.innerHTML = t.join(" "));
            },
            E = document.getElementsByClassName("action"),
            H = 0;
          H < E.length;
          H++
        )
          E[H].addEventListener("click", L);
        var M = function(e) {
            "" === n
              ? ((a = e.target.value),
                (i += e.target.value),
                (n += 0),
                (n += i))
              : "" === i &&
                ((a = e.target.value), (i += e.target.value), (n += i)),
              (u.innerHTML = n),
              (c.innerHTML = t.join(" ") + n);
          },
          T = document.getElementById("point");
        T.addEventListener("click", M);
        var f = function(c) {
            (a = c.target.value), t.push(n), (n = (0, e.equals)(t));
            var l = Number(n).toFixed(8);
            (u.innerHTML = Number(l).toPrecision()),
              (t = []),
              (r = ""),
              (i = "");
          },
          y = document.getElementById("equals");
        y.addEventListener("click", f);
      },
      { "./calculate": "qtBL" }
    ]
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=Calculator.9b6005c1.map
