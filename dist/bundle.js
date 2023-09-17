/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      186: (e, t, n) => {
        var r = n(698),
          o = n(505),
          i = n(417),
          s = Function.bind,
          a = s.bind(s);
        function l(e, t, n) {
          var r = a(i, null).apply(null, n ? [t, n] : [t]);
          (e.api = { remove: r }),
            (e.remove = r),
            ['before', 'error', 'after', 'wrap'].forEach(function (r) {
              var i = n ? [t, r, n] : [t, r];
              e[r] = e.api[r] = a(o, null).apply(null, i);
            });
        }
        function u() {
          var e = { registry: {} },
            t = r.bind(null, e);
          return l(t, e), t;
        }
        var c = !1;
        function p() {
          return (
            c ||
              (console.warn(
                '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4',
              ),
              (c = !0)),
            u()
          );
        }
        (p.Singular = function () {
          var e = { registry: {} },
            t = r.bind(null, e, 'h');
          return l(t, e, 'h'), t;
        }.bind()),
          (p.Collection = u.bind()),
          (e.exports = p),
          (e.exports.Hook = p),
          (e.exports.Singular = p.Singular),
          (e.exports.Collection = p.Collection);
      },
      505: e => {
        e.exports = function (e, t, n, r) {
          var o = r;
          e.registry[n] || (e.registry[n] = []),
            'before' === t &&
              (r = function (e, t) {
                return Promise.resolve().then(o.bind(null, t)).then(e.bind(null, t));
              }),
            'after' === t &&
              (r = function (e, t) {
                var n;
                return Promise.resolve()
                  .then(e.bind(null, t))
                  .then(function (e) {
                    return o((n = e), t);
                  })
                  .then(function () {
                    return n;
                  });
              }),
            'error' === t &&
              (r = function (e, t) {
                return Promise.resolve()
                  .then(e.bind(null, t))
                  .catch(function (e) {
                    return o(e, t);
                  });
              }),
            e.registry[n].push({ hook: r, orig: o });
        };
      },
      698: e => {
        e.exports = function e(t, n, r, o) {
          if ('function' != typeof r) throw new Error('method for before hook must be a function');
          return (
            o || (o = {}),
            Array.isArray(n)
              ? n.reverse().reduce(function (n, r) {
                  return e.bind(null, t, r, n, o);
                }, r)()
              : Promise.resolve().then(function () {
                  return t.registry[n]
                    ? t.registry[n].reduce(function (e, t) {
                        return t.hook.bind(null, e, o);
                      }, r)()
                    : r(o);
                })
          );
        };
      },
      417: e => {
        e.exports = function (e, t, n) {
          if (e.registry[t]) {
            var r = e.registry[t]
              .map(function (e) {
                return e.orig;
              })
              .indexOf(n);
            -1 !== r && e.registry[t].splice(r, 1);
          }
        };
      },
      424: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => a });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          s = n.n(i)()(o());
        s.push([
          e.id,
          "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\ninput {\n  font-family: 'Apple SD Gothic Neo';\n}\n",
          '',
        ]);
        const a = s;
      },
      645: e => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (s[l] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                (r && s[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = i)),
                  n &&
                    (c[2]
                      ? ((c[1] = '@media '.concat(c[2], ' {').concat(c[1], '}')), (c[2] = n))
                      : (c[2] = n)),
                  o &&
                    (c[4]
                      ? ((c[1] = '@supports ('.concat(c[4], ') {').concat(c[1], '}')), (c[4] = o))
                      : (c[4] = ''.concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      81: e => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      470: e => {
        'use strict';
        var t = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          r = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          i = function (e) {
            return 'function' == typeof Array.isArray
              ? Array.isArray(e)
              : '[object Array]' === n.call(e);
          },
          s = function (e) {
            if (!e || '[object Object]' !== n.call(e)) return !1;
            var r,
              o = t.call(e, 'constructor'),
              i =
                e.constructor &&
                e.constructor.prototype &&
                t.call(e.constructor.prototype, 'isPrototypeOf');
            if (e.constructor && !o && !i) return !1;
            for (r in e);
            return void 0 === r || t.call(e, r);
          },
          a = function (e, t) {
            r && '__proto__' === t.name
              ? r(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 })
              : (e[t.name] = t.newValue);
          },
          l = function (e, n) {
            if ('__proto__' === n) {
              if (!t.call(e, n)) return;
              if (o) return o(e, n).value;
            }
            return e[n];
          };
        e.exports = function e() {
          var t,
            n,
            r,
            o,
            u,
            c,
            p = arguments[0],
            d = 1,
            f = arguments.length,
            h = !1;
          for (
            'boolean' == typeof p && ((h = p), (p = arguments[1] || {}), (d = 2)),
              (null == p || ('object' != typeof p && 'function' != typeof p)) && (p = {});
            d < f;
            ++d
          )
            if (null != (t = arguments[d]))
              for (n in t)
                (r = l(p, n)),
                  p !== (o = l(t, n)) &&
                    (h && o && (s(o) || (u = i(o)))
                      ? (u ? ((u = !1), (c = r && i(r) ? r : [])) : (c = r && s(r) ? r : {}),
                        a(p, { name: n, newValue: e(h, c, o) }))
                      : void 0 !== o && a(p, { name: n, newValue: o }));
          return p;
        };
      },
      139: e => {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
          n = /\n/g,
          r = /^\s*/,
          o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
          i = /^:\s*/,
          s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
          a = /^[;\s]*/,
          l = /^\s+|\s+$/g,
          u = '';
        function c(e) {
          return e ? e.replace(l, u) : u;
        }
        e.exports = function (e, l) {
          if ('string' != typeof e) throw new TypeError('First argument must be a string');
          if (!e) return [];
          l = l || {};
          var p = 1,
            d = 1;
          function f(e) {
            var t = e.match(n);
            t && (p += t.length);
            var r = e.lastIndexOf('\n');
            d = ~r ? e.length - r : d + e.length;
          }
          function h() {
            var e = { line: p, column: d };
            return function (t) {
              return (t.position = new m(e)), b(), t;
            };
          }
          function m(e) {
            (this.start = e), (this.end = { line: p, column: d }), (this.source = l.source);
          }
          m.prototype.content = e;
          var g = [];
          function y(t) {
            var n = new Error(l.source + ':' + p + ':' + d + ': ' + t);
            if (
              ((n.reason = t),
              (n.filename = l.source),
              (n.line = p),
              (n.column = d),
              (n.source = e),
              !l.silent)
            )
              throw n;
            g.push(n);
          }
          function v(t) {
            var n = t.exec(e);
            if (n) {
              var r = n[0];
              return f(r), (e = e.slice(r.length)), n;
            }
          }
          function b() {
            v(r);
          }
          function w(e) {
            var t;
            for (e = e || []; (t = k()); ) !1 !== t && e.push(t);
            return e;
          }
          function k() {
            var t = h();
            if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
              for (var n = 2; u != e.charAt(n) && ('*' != e.charAt(n) || '/' != e.charAt(n + 1)); )
                ++n;
              if (((n += 2), u === e.charAt(n - 1))) return y('End of comment missing');
              var r = e.slice(2, n - 2);
              return (d += 2), f(r), (e = e.slice(n)), (d += 2), t({ type: 'comment', comment: r });
            }
          }
          function E() {
            var e = h(),
              n = v(o);
            if (n) {
              if ((k(), !v(i))) return y("property missing ':'");
              var r = v(s),
                l = e({
                  type: 'declaration',
                  property: c(n[0].replace(t, u)),
                  value: r ? c(r[0].replace(t, u)) : u,
                });
              return v(a), l;
            }
          }
          return (
            b(),
            (function () {
              var e,
                t = [];
              for (w(t); (e = E()); ) !1 !== e && (t.push(e), w(t));
              return t;
            })()
          );
        };
      },
      738: e => {
        e.exports = function (e) {
          return (
            null != e &&
            null != e.constructor &&
            'function' == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        };
      },
      778: (e, t, n) => {
        var r = n(479);
        function o(e) {
          var t = function () {
            return t.called ? t.value : ((t.called = !0), (t.value = e.apply(this, arguments)));
          };
          return (t.called = !1), t;
        }
        function i(e) {
          var t = function () {
              if (t.called) throw new Error(t.onceError);
              return (t.called = !0), (t.value = e.apply(this, arguments));
            },
            n = e.name || 'Function wrapped with `once`';
          return (t.onceError = n + " shouldn't be called more than once"), (t.called = !1), t;
        }
        (e.exports = r(o)),
          (e.exports.strict = r(i)),
          (o.proto = o(function () {
            Object.defineProperty(Function.prototype, 'once', {
              value: function () {
                return o(this);
              },
              configurable: !0,
            }),
              Object.defineProperty(Function.prototype, 'onceStrict', {
                value: function () {
                  return i(this);
                },
                configurable: !0,
              });
          }));
      },
      703: (e, t, n) => {
        'use strict';
        var r = n(414);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, i, s) {
              if (s !== r) {
                var a = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((a.name = 'Invariant Violation'), a);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: e => {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      448: (e, t, n) => {
        'use strict';
        var r = n(294),
          o = n(840);
        function i(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var s = new Set(),
          a = {};
        function l(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
        }
        var c = !(
            'undefined' == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          p = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          h = {};
        function m(e, t, n, r, o, i, s) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = s);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e, null, !1, !1);
            },
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(h, e) ||
                    (!p.call(f, e) && (d.test(e) ? (h[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for('react.element'),
          E = Symbol.for('react.portal'),
          T = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          _ = Symbol.for('react.profiler'),
          x = Symbol.for('react.provider'),
          P = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          O = Symbol.for('react.suspense'),
          A = Symbol.for('react.suspense_list'),
          F = Symbol.for('react.memo'),
          R = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var D = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var L = Symbol.iterator;
        function G(e) {
          return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = (L && e[L]) || e['@@iterator'])
            ? e
            : null;
        }
        var I,
          U = Object.assign;
        function z(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || '';
            }
          return '\n' + I + e;
        }
        var j = !1;
        function N(e, t) {
          if (!e || j) return '';
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && 'string' == typeof t.stack) {
              for (
                var o = t.stack.split('\n'),
                  i = r.stack.split('\n'),
                  s = o.length - 1,
                  a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

              )
                a--;
              for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                  if (1 !== s || 1 !== a)
                    do {
                      if ((s--, 0 > --a || o[s] !== i[a])) {
                        var l = '\n' + o[s].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            l.includes('<anonymous>') &&
                            (l = l.replace('<anonymous>', e.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= a);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? z(e) : '';
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z('Lazy');
            case 13:
              return z('Suspense');
            case 19:
              return z('SuspenseList');
            case 0:
            case 2:
            case 15:
              return N(e.type, !1);
            case 11:
              return N(e.type.render, !1);
            case 1:
              return N(e.type, !0);
            default:
              return '';
          }
        }
        function B(e) {
          if (null == e) return null;
          if ('function' == typeof e) return e.displayName || e.name || null;
          if ('string' == typeof e) return e;
          switch (e) {
            case T:
              return 'Fragment';
            case E:
              return 'Portal';
            case _:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case O:
              return 'Suspense';
            case A:
              return 'SuspenseList';
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || 'Context') + '.Consumer';
              case x:
                return (e._context.displayName || 'Context') + '.Provider';
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case F:
                return null !== (t = e.displayName || null) ? t : B(e.type) || 'Memo';
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (e) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return B(t);
            case 8:
              return t === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' == typeof t) return t.displayName || t.name || null;
              if ('string' == typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                'function' == typeof n.get &&
                'function' == typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function V(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = H(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0)))
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + q(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ie(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function ae(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function le(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ae(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          pe =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' == typeof t || '' === t
            ? ''
            : n || 'number' != typeof t || 0 === t || (fe.hasOwnProperty(e) && fe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(fe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fe[t] = fe[e]);
          });
        });
        var ye = U(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ve(e, t) {
          if (t) {
            if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                'object' != typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && 'object' != typeof t.style) throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          Te = null,
          Se = null;
        function _e(e) {
          if ((e = wo(e))) {
            if ('function' != typeof Ee) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Eo(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function xe(e) {
          Te ? (Se ? Se.push(e) : (Se = [e])) : (Te = e);
        }
        function Pe() {
          if (Te) {
            var e = Te,
              t = Se;
            if (((Se = Te = null), _e(e), t)) for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Oe() {}
        var Ae = !1;
        function Fe(e, t, n) {
          if (Ae) return e(t, n);
          Ae = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Ae = !1), (null !== Te || null !== Se) && (Oe(), Pe());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Eo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var De = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, 'passive', {
              get: function () {
                De = !0;
              },
            }),
              window.addEventListener('test', Le, Le),
              window.removeEventListener('test', Le, Le);
          } catch (ce) {
            De = !1;
          }
        function Ge(e, t, n, r, o, i, s, a, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ie = !1,
          Ue = null,
          ze = !1,
          je = null,
          Ne = {
            onError: function (e) {
              (Ie = !0), (Ue = e);
            },
          };
        function Me(e, t, n, r, o, i, s, a, l) {
          (Ie = !1), (Ue = null), Ge.apply(Ne, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var s = o.alternate;
                if (null === s) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === s.child) {
                  for (s = o.child; s; ) {
                    if (s === n) return qe(o), e;
                    if (s === r) return qe(o), t;
                    s = s.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = s);
                else {
                  for (var a = !1, l = o.child; l; ) {
                    if (l === n) {
                      (a = !0), (n = o), (r = s);
                      break;
                    }
                    if (l === r) {
                      (a = !0), (r = o), (n = s);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!a) {
                    for (l = s.child; l; ) {
                      if (l === n) {
                        (a = !0), (n = s), (r = o);
                        break;
                      }
                      if (l === r) {
                        (a = !0), (r = s), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!a) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? We(e)
            : null;
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = We(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ve = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Je = o.unstable_now,
          Xe = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          it = null,
          st = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((at(e) / lt) | 0)) | 0;
              },
          at = Math.log,
          lt = Math.LN2,
          ut = 64,
          ct = 4194304;
        function pt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            s = 268435455 & n;
          if (0 !== s) {
            var a = s & ~o;
            0 !== a ? (r = pt(a)) : 0 != (i &= s) && (r = pt(i));
          } else 0 != (s = n & ~o) ? (r = pt(s)) : 0 !== i && (r = pt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 != (4194240 & i)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - st(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = ut;
          return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - st(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - st(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var kt,
          Et,
          Tt,
          St,
          _t,
          xt = !1,
          Pt = [],
          Ct = null,
          Ot = null,
          At = null,
          Ft = new Map(),
          Rt = new Map(),
          Dt = [],
          Lt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function Gt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Ct = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Ot = null;
              break;
            case 'mouseover':
            case 'mouseout':
              At = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Ft.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Rt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && Et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ut(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      Tt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = wo(n)) && Et(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Nt() {
          (xt = !1),
            null !== Ct && zt(Ct) && (Ct = null),
            null !== Ot && zt(Ot) && (Ot = null),
            null !== At && zt(At) && (At = null),
            Ft.forEach(jt),
            Rt.forEach(jt);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            xt || ((xt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Nt)));
        }
        function Bt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Pt.length) {
            Mt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Mt(Ct, e),
              null !== Ot && Mt(Ot, e),
              null !== At && Mt(At, e),
              Ft.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Dt.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          qt = !0;
        function Ht(e, t, n, r) {
          var o = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Vt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = i);
          }
        }
        function Wt(e, t, n, r) {
          var o = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Vt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = i);
          }
        }
        function Vt(e, t, n, r) {
          if (qt) {
            var o = Qt(e, t, n, r);
            if (null === o) qr(e, t, r, Kt, n), Gt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (Ct = It(Ct, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Ot = It(Ot, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (At = It(At, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var i = o.pointerId;
                    return Ft.set(i, It(Ft.get(i) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (i = o.pointerId), Rt.set(i, It(Rt.get(i) || null, e, t, n, r, o)), !0;
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Gt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== o; ) {
                var i = wo(o);
                if (
                  (null !== i && kt(i),
                  null === (i = Qt(e, t, n, r)) && qr(e, t, r, Kt, n),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Qt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = ke(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            o = 'value' in Jt ? Jt.value : Jt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var s = r - e;
          for (t = 1; t <= s && n[r - t] === o[i - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, i) {
            for (var s in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(o) : o[s]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var sn,
          an,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          pn = U({}, un, { view: 0, detail: 0 }),
          dn = on(pn),
          fn = U({}, pn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== ln &&
                    (ln && 'mousemove' === e.type
                      ? ((sn = e.screenX - ln.screenX), (an = e.screenY - ln.screenY))
                      : (an = sn = 0),
                    (ln = e)),
                  sn);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : an;
            },
          }),
          hn = on(fn),
          mn = on(U({}, fn, { dataTransfer: 0 })),
          gn = on(U({}, pn, { relatedTarget: 0 })),
          yn = on(U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          vn = U({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = on(vn),
          wn = on(U({}, un, { data: 0 })),
          kn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          En = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Tn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Tn[e]) && !!t[e];
        }
        function _n() {
          return Sn;
        }
        var xn = U({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? En[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = on(xn),
          Cn = on(
            U({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          On = on(
            U({}, pn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            }),
          ),
          An = on(U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Fn = U({}, fn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = on(Fn),
          Dn = [9, 13, 27, 32],
          Ln = c && 'CompositionEvent' in window,
          Gn = null;
        c && 'documentMode' in document && (Gn = document.documentMode);
        var In = c && 'TextEvent' in window && !Gn,
          Un = c && (!Ln || (Gn && 8 < Gn && 11 >= Gn)),
          zn = String.fromCharCode(32),
          jn = !1;
        function Nn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Dn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Bn = !1,
          $n = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!$n[e.type] : 'textarea' === t;
        }
        function Hn(e, t, n, r) {
          xe(r),
            0 < (t = Wr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          Vn = null;
        function Kn(e) {
          zr(e, 0);
        }
        function Qn(e) {
          if (V(ko(e))) return e;
        }
        function Yn(e, t) {
          if ('change' === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = 'oninput' in document;
            if (!Zn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Zn = 'function' == typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Wn && (Wn.detachEvent('onpropertychange', nr), (Vn = Wn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Qn(Vn)) {
            var t = [];
            Hn(t, Vn, e, ke(e)), Fe(Kn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Vn = n), (Wn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Qn(Vn);
        }
        function ir(e, t) {
          if ('click' === e) return Qn(t);
        }
        function sr(e, t) {
          if ('input' === e || 'change' === e) return Qn(t);
        }
        var ar =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              };
        function lr(e, t) {
          if (ar(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!p.call(t, o) || !ar(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function pr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && pr(n.ownerDocument.documentElement, n)) {
            if (null !== r && fr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !e.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = cr(n, i));
                var s = cr(n, r);
                o &&
                  s &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== s.node ||
                    e.focusOffset !== s.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(s.node, s.offset))
                    : (t.setEnd(s.node, s.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ((r =
              'selectionStart' in (r = gr) && fr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = Wr(yr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var Er = {
            animationend: kr('Animation', 'AnimationEnd'),
            animationiteration: kr('Animation', 'AnimationIteration'),
            animationstart: kr('Animation', 'AnimationStart'),
            transitionend: kr('Transition', 'TransitionEnd'),
          },
          Tr = {},
          Sr = {};
        function _r(e) {
          if (Tr[e]) return Tr[e];
          if (!Er[e]) return e;
          var t,
            n = Er[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Sr) return (Tr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
          'TransitionEvent' in window || delete Er.transitionend.transition);
        var xr = _r('animationend'),
          Pr = _r('animationiteration'),
          Cr = _r('animationstart'),
          Or = _r('transitionend'),
          Ar = new Map(),
          Fr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Rr(e, t) {
          Ar.set(e, t), l(t, [e]);
        }
        for (var Dr = 0; Dr < Fr.length; Dr++) {
          var Lr = Fr[Dr];
          Rr(Lr.toLowerCase(), 'on' + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Rr(xr, 'onAnimationEnd'),
          Rr(Pr, 'onAnimationIteration'),
          Rr(Cr, 'onAnimationStart'),
          Rr('dblclick', 'onDoubleClick'),
          Rr('focusin', 'onFocus'),
          Rr('focusout', 'onBlur'),
          Rr(Or, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          l(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' '),
          ),
          l(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          l('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          l(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' '),
          ),
          l(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
          ),
          l(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
          );
        var Gr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Ir = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Gr));
        function Ur(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, s, a, l, u) {
              if ((Me.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(i(198));
                var c = Ue;
                (Ie = !1), (Ue = null), ze || ((ze = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                  var a = r[s],
                    l = a.instance,
                    u = a.currentTarget;
                  if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
                  Ur(o, a, u), (i = l);
                }
              else
                for (s = 0; s < r.length; s++) {
                  if (
                    ((l = (a = r[s]).instance),
                    (u = a.currentTarget),
                    (a = a.listener),
                    l !== i && o.isPropagationStopped())
                  )
                    break e;
                  Ur(o, a, u), (i = l);
                }
            }
          }
          if (ze) throw ((e = je), (ze = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + '__bubble';
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Nr(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Mr = '_reactListening' + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              s.forEach(function (t) {
                'selectionchange' !== t && (Ir.has(t) || Nr(t, !1, e), Nr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Nr('selectionchange', !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = Ht;
              break;
            case 4:
              o = Wt;
              break;
            default:
              o = Vt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !De || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, o) {
          var i = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var s = r.tag;
              if (3 === s || 4 === s) {
                var a = r.stateNode.containerInfo;
                if (a === o || (8 === a.nodeType && a.parentNode === o)) break;
                if (4 === s)
                  for (s = r.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== a; ) {
                  if (null === (s = bo(a))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    r = i = s;
                    continue e;
                  }
                  a = a.parentNode;
                }
              }
              r = r.return;
            }
          Fe(function () {
            var r = i,
              o = ke(n),
              s = [];
            e: {
              var a = Ar.get(e);
              if (void 0 !== a) {
                var l = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    l = Pn;
                    break;
                  case 'focusin':
                    (u = 'focus'), (l = gn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (l = gn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = On;
                    break;
                  case xr:
                  case Pr:
                  case Cr:
                    l = yn;
                    break;
                  case Or:
                    l = An;
                    break;
                  case 'scroll':
                    l = dn;
                    break;
                  case 'wheel':
                    l = Rn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = Cn;
                }
                var c = 0 != (4 & t),
                  p = !c && 'scroll' === e,
                  d = c ? (null !== a ? a + 'Capture' : null) : a;
                c = [];
                for (var f, h = r; null !== h; ) {
                  var m = (f = h).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m), null !== d && null != (m = Re(h, d)) && c.push(Hr(h, m, f))),
                    p)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((a = new l(a, u, null, n, o)), s.push({ event: a, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((l = 'mouseout' === e || 'pointerout' === e),
                (!(a = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || a) &&
                  ((a =
                    o.window === o
                      ? o
                      : (a = o.ownerDocument)
                      ? a.defaultView || a.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) &&
                        (u !== (p = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Cn), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                  (p = null == l ? a : ko(l)),
                  (f = null == u ? a : ko(u)),
                  ((a = new c(m, h + 'leave', l, n, o)).target = p),
                  (a.relatedTarget = f),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + 'enter', u, n, o)).target = f),
                    (c.relatedTarget = p),
                    (m = c)),
                  (p = m),
                  l && u)
                )
                  e: {
                    for (d = u, h = 0, f = c = l; f; f = Vr(f)) h++;
                    for (f = 0, m = d; m; m = Vr(m)) f++;
                    for (; 0 < h - f; ) (c = Vr(c)), h--;
                    for (; 0 < f - h; ) (d = Vr(d)), f--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Vr(c)), (d = Vr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(s, a, l, c, !1), null !== u && null !== p && Kr(s, p, u, c, !0);
              }
              if (
                'select' === (l = (a = r ? ko(r) : window).nodeName && a.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === a.type)
              )
                var g = Yn;
              else if (qn(a))
                if (Jn) g = sr;
                else {
                  g = or;
                  var y = rr;
                }
              else
                (l = a.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === a.type || 'radio' === a.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Hn(s, g, n, o)
                  : (y && y(e, a, r),
                    'focusout' === e &&
                      (y = a._wrapperState) &&
                      y.controlled &&
                      'number' === a.type &&
                      ee(a, 'number', a.value)),
                (y = r ? ko(r) : window),
                e)
              ) {
                case 'focusin':
                  (qn(y) || 'true' === y.contentEditable) && ((gr = y), (yr = r), (vr = null));
                  break;
                case 'focusout':
                  vr = yr = gr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), wr(s, n, o);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  wr(s, n, o);
              }
              var v;
              if (Ln)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Nn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (Un &&
                  'ko' !== n.locale &&
                  (Bn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Bn && (v = en())
                    : ((Xt = 'value' in (Jt = o) ? Jt.value : Jt.textContent), (Bn = !0))),
                0 < (y = Wr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  s.push({ event: b, listeners: y }),
                  (v || null !== (v = Mn(n))) && (b.data = v))),
                (v = In
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Mn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((jn = !0), zn);
                        case 'textInput':
                          return (e = t.data) === zn && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return 'compositionend' === e || (!Ln && Nn(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Un && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, 'onBeforeInput')).length &&
                  ((o = new wn('onBeforeInput', 'beforeinput', null, n, o)),
                  s.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            zr(s, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Wr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Re(e, n)) && r.unshift(Hr(e, i, o)),
              null != (i = Re(e, t)) && r.push(Hr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Vr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var i = t._reactName, s = []; null !== n && n !== r; ) {
            var a = n,
              l = a.alternate,
              u = a.stateNode;
            if (null !== l && l === r) break;
            5 === a.tag &&
              null !== u &&
              ((a = u),
              o
                ? null != (l = Re(n, i)) && s.unshift(Hr(n, l, a))
                : o || (null != (l = Re(n, i)) && s.push(Hr(n, l, a)))),
              (n = n.return);
          }
          0 !== s.length && e.push({ event: t, listeners: s });
        }
        var Qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ('string' == typeof e ? e : '' + e).replace(Qr, '\n').replace(Yr, '');
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' == typeof t.children ||
            'number' == typeof t.children ||
            ('object' == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' == typeof setTimeout ? setTimeout : void 0,
          oo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
          io = 'function' == typeof Promise ? Promise : void 0,
          so =
            'function' == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== io
              ? function (e) {
                  return io.resolve(null).then(e).catch(ao);
                }
              : ro;
        function ao(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Bt(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = o;
          } while (n);
          Bt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var po = Math.random().toString(36).slice(2),
          fo = '__reactFiber$' + po,
          ho = '__reactProps$' + po,
          mo = '__reactContainer$' + po,
          go = '__reactEvents$' + po,
          yo = '__reactListeners$' + po,
          vo = '__reactHandles$' + po;
        function bo(e) {
          var t = e[fo];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[fo])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = co(e); null !== e; ) {
                  if ((n = e[fo])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[fo] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ko(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Eo(e) {
          return e[ho] || null;
        }
        var To = [],
          So = -1;
        function _o(e) {
          return { current: e };
        }
        function xo(e) {
          0 > So || ((e.current = To[So]), (To[So] = null), So--);
        }
        function Po(e, t) {
          So++, (To[So] = e.current), (e.current = t);
        }
        var Co = {},
          Oo = _o(Co),
          Ao = _o(!1),
          Fo = Co;
        function Ro(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Co;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Do(e) {
          return null != e.childContextTypes;
        }
        function Lo() {
          xo(Ao), xo(Oo);
        }
        function Go(e, t, n) {
          if (Oo.current !== Co) throw Error(i(168));
          Po(Oo, t), Po(Ao, n);
        }
        function Io(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, $(e) || 'Unknown', o));
          return U({}, n, r);
        }
        function Uo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Co),
            (Fo = Oo.current),
            Po(Oo, e),
            Po(Ao, Ao.current),
            !0
          );
        }
        function zo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Io(e, t, Fo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xo(Ao),
              xo(Oo),
              Po(Oo, e))
            : xo(Ao),
            Po(Ao, n);
        }
        var jo = null,
          No = !1,
          Mo = !1;
        function Bo(e) {
          null === jo ? (jo = [e]) : jo.push(e);
        }
        function $o() {
          if (!Mo && null !== jo) {
            Mo = !0;
            var e = 0,
              t = bt;
            try {
              var n = jo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (jo = null), (No = !1);
            } catch (t) {
              throw (null !== jo && (jo = jo.slice(e + 1)), Ve(Ze, $o), t);
            } finally {
              (bt = t), (Mo = !1);
            }
          }
          return null;
        }
        var qo = [],
          Ho = 0,
          Wo = null,
          Vo = 0,
          Ko = [],
          Qo = 0,
          Yo = null,
          Jo = 1,
          Xo = '';
        function Zo(e, t) {
          (qo[Ho++] = Vo), (qo[Ho++] = Wo), (Wo = e), (Vo = t);
        }
        function ei(e, t, n) {
          (Ko[Qo++] = Jo), (Ko[Qo++] = Xo), (Ko[Qo++] = Yo), (Yo = e);
          var r = Jo;
          e = Xo;
          var o = 32 - st(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - st(t) + o;
          if (30 < i) {
            var s = o - (o % 5);
            (i = (r & ((1 << s) - 1)).toString(32)),
              (r >>= s),
              (o -= s),
              (Jo = (1 << (32 - st(t) + o)) | (n << o) | r),
              (Xo = i + e);
          } else (Jo = (1 << i) | (n << o) | r), (Xo = e);
        }
        function ti(e) {
          null !== e.return && (Zo(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === Wo; ) (Wo = qo[--Ho]), (qo[Ho] = null), (Vo = qo[--Ho]), (qo[Ho] = null);
          for (; e === Yo; )
            (Yo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Xo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Jo = Ko[--Qo]),
              (Ko[Qo] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          si = null;
        function ai(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Jo, overflow: Xo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ri = e),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ui(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function ci(e) {
          if (ii) {
            var t = oi;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (ui(e)) throw Error(i(418));
                t = uo(n.nextSibling);
                var r = ri;
                t && li(e, t) ? ai(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e));
              }
            } else {
              if (ui(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e);
            }
          }
        }
        function pi(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          ri = e;
        }
        function di(e) {
          if (e !== ri) return !1;
          if (!ii) return pi(e), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !no(e.type, e.memoizedProps)),
            t && (t = oi))
          ) {
            if (ui(e)) throw (fi(), Error(i(418)));
            for (; t; ) ai(e, t), (t = uo(t.nextSibling));
          }
          if ((pi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      oi = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = oi; e; ) e = uo(e.nextSibling);
        }
        function hi() {
          (oi = ri = null), (ii = !1);
        }
        function mi(e) {
          null === si ? (si = [e]) : si.push(e);
        }
        var gi = w.ReactCurrentBatchConfig;
        function yi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vi = _o(null),
          bi = null,
          wi = null,
          ki = null;
        function Ei() {
          ki = wi = bi = null;
        }
        function Ti(e) {
          var t = vi.current;
          xo(vi), (e._currentValue = t);
        }
        function Si(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _i(e, t) {
          (bi = e),
            (ki = wi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (wa = !0), (e.firstContext = null));
        }
        function xi(e) {
          var t = e._currentValue;
          if (ki !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === wi)) {
              if (null === bi) throw Error(i(308));
              (wi = e), (bi.dependencies = { lanes: 0, firstContext: e });
            } else wi = wi.next = e;
          return t;
        }
        var Pi = null;
        function Ci(e) {
          null === Pi ? (Pi = [e]) : Pi.push(e);
        }
        function Oi(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o ? ((n.next = n), Ci(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ai(e, r)
          );
        }
        function Ai(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fi = !1;
        function Ri(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Di(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Li(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Gi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Ol))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ai(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ci(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ai(e, n)
          );
        }
        function Ii(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Ui(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = s) : (i = i.next = s), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zi(e, t, n, r) {
          var o = e.updateQueue;
          Fi = !1;
          var i = o.firstBaseUpdate,
            s = o.lastBaseUpdate,
            a = o.shared.pending;
          if (null !== a) {
            o.shared.pending = null;
            var l = a,
              u = l.next;
            (l.next = null), null === s ? (i = u) : (s.next = u), (s = l);
            var c = e.alternate;
            null !== c &&
              (a = (c = c.updateQueue).lastBaseUpdate) !== s &&
              (null === a ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var p = o.baseState;
            for (s = 0, c = u = l = null, a = i; ; ) {
              var d = a.lane,
                f = a.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = a;
                  switch (((d = t), (f = n), m.tag)) {
                    case 1:
                      if ('function' == typeof (h = m.payload)) {
                        p = h.call(f, p, d);
                        break e;
                      }
                      p = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (null == (d = 'function' == typeof (h = m.payload) ? h.call(f, p, d) : h))
                        break e;
                      p = U({}, p, d);
                      break e;
                    case 2:
                      Fi = !0;
                  }
                }
                null !== a.callback &&
                  0 !== a.lane &&
                  ((e.flags |= 64), null === (d = o.effects) ? (o.effects = [a]) : d.push(a));
              } else
                (f = {
                  eventTime: f,
                  lane: d,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (l = p)) : (c = c.next = f),
                  (s |= d);
              if (null === (a = a.next)) {
                if (null === (a = o.shared.pending)) break;
                (a = (d = a).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = p),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (s |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (Ul |= s), (e.lanes = s), (e.memoizedState = p);
          }
        }
        function ji(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' != typeof o)) throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var Ni = new r.Component().refs;
        function Mi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              i = Li(r, o);
            (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Gi(e, i, o)) && (ru(t, e, o, r), Ii(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              i = Li(r, o);
            (i.tag = 1),
              (i.payload = t),
              null != n && (i.callback = n),
              null !== (t = Gi(e, i, o)) && (ru(t, e, o, r), Ii(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Li(n, r);
            (o.tag = 2),
              null != t && (o.callback = t),
              null !== (t = Gi(e, o, r)) && (ru(t, e, r, n), Ii(t, e, r));
          },
        };
        function $i(e, t, n, r, o, i, s) {
          return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, s)
            : !(t.prototype && t.prototype.isPureReactComponent && lr(n, r) && lr(o, i));
        }
        function qi(e, t, n) {
          var r = !1,
            o = Co,
            i = t.contextType;
          return (
            'object' == typeof i && null !== i
              ? (i = xi(i))
              : ((o = Do(t) ? Fo : Oo.current),
                (i = (r = null != (r = t.contextTypes)) ? Ro(e, o) : Co)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
        }
        function Wi(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ni), Ri(e);
          var i = t.contextType;
          'object' == typeof i && null !== i
            ? (o.context = xi(i))
            : ((i = Do(t) ? Fo : Oo.current), (o.context = Ro(e, i))),
            (o.state = e.memoizedState),
            'function' == typeof (i = t.getDerivedStateFromProps) &&
              (Mi(e, t, i, n), (o.state = e.memoizedState)),
            'function' == typeof t.getDerivedStateFromProps ||
              'function' == typeof o.getSnapshotBeforeUpdate ||
              ('function' != typeof o.UNSAFE_componentWillMount &&
                'function' != typeof o.componentWillMount) ||
              ((t = o.state),
              'function' == typeof o.componentWillMount && o.componentWillMount(),
              'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && Bi.enqueueReplaceState(o, o.state, null),
              zi(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' == typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Vi(e, t, n) {
          if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = r,
                s = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' == typeof t.ref &&
                t.ref._stringRef === s
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ni && (t = o.refs = {}), null === e ? delete t[s] : (t[s] = e);
                  }),
                  (t._stringRef = s),
                  t);
            }
            if ('string' != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Ki(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          );
        }
        function Qi(e) {
          return (0, e._init)(e._payload);
        }
        function Yi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function s(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function a(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === T
              ? p(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ('object' == typeof i && null !== i && i.$$typeof === R && Qi(i) === t.type))
              ? (((r = o(t, n.props)).ref = Vi(e, t, n)), (r.return = e), r)
              : (((r = Gu(n.type, n.key, n.props, null, e.mode, r)).ref = Vi(e, t, n)),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = ju(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function p(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' == typeof t && '' !== t) || 'number' == typeof t)
              return ((t = zu('' + t, e.mode, n)).return = e), t;
            if ('object' == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Gu(t.type, t.key, t.props, null, e.mode, n)).ref = Vi(e, null, t)),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = ju(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || G(t)) return ((t = Iu(t, e.mode, n, null)).return = e), t;
              Ki(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' == typeof n && '' !== n) || 'number' == typeof n)
              return null !== o ? null : l(e, t, '' + n, r);
            if ('object' == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? u(e, t, n, r) : null;
                case E:
                  return n.key === o ? c(e, t, n, r) : null;
                case R:
                  return f(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || G(n)) return null !== o ? null : p(e, t, n, r, null);
              Ki(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (('string' == typeof r && '' !== r) || 'number' == typeof r)
              return l(t, (e = e.get(n) || null), '' + r, o);
            if ('object' == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case E:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || G(r)) return p(t, (e = e.get(n) || null), r, o, null);
              Ki(t, r);
            }
            return null;
          }
          function m(o, i, a, l) {
            for (
              var u = null, c = null, p = i, m = (i = 0), g = null;
              null !== p && m < a.length;
              m++
            ) {
              p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
              var y = f(o, p, a[m], l);
              if (null === y) {
                null === p && (p = g);
                break;
              }
              e && p && null === y.alternate && t(o, p),
                (i = s(y, i, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (p = g);
            }
            if (m === a.length) return n(o, p), ii && Zo(o, m), u;
            if (null === p) {
              for (; m < a.length; m++)
                null !== (p = d(o, a[m], l)) &&
                  ((i = s(p, i, m)), null === c ? (u = p) : (c.sibling = p), (c = p));
              return ii && Zo(o, m), u;
            }
            for (p = r(o, p); m < a.length; m++)
              null !== (g = h(p, o, m, a[m], l)) &&
                (e && null !== g.alternate && p.delete(null === g.key ? m : g.key),
                (i = s(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                p.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, m),
              u
            );
          }
          function g(o, a, l, u) {
            var c = G(l);
            if ('function' != typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var p = (c = null), m = a, g = (a = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = f(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (a = s(b, a, g)),
                null === p ? (c = b) : (p.sibling = b),
                (p = b),
                (m = y);
            }
            if (v.done) return n(o, m), ii && Zo(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = d(o, v.value, u)) &&
                  ((a = s(v, a, g)), null === p ? (c = v) : (p.sibling = v), (p = v));
              return ii && Zo(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = l.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e && null !== v.alternate && m.delete(null === v.key ? g : v.key),
                (a = s(v, a, g)),
                null === p ? (c = v) : (p.sibling = v),
                (p = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, g),
              c
            );
          }
          return function e(r, i, s, l) {
            if (
              ('object' == typeof s &&
                null !== s &&
                s.type === T &&
                null === s.key &&
                (s = s.props.children),
              'object' == typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case k:
                  e: {
                    for (var u = s.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = s.type) === T) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((i = o(c, s.props.children)).return = r), (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' == typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Qi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = o(c, s.props)).ref = Vi(r, c, s)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    s.type === T
                      ? (((i = Iu(s.props.children, r.mode, l, s.key)).return = r), (r = i))
                      : (((l = Gu(s.type, s.key, s.props, null, r.mode, l)).ref = Vi(r, i, s)),
                        (l.return = r),
                        (r = l));
                  }
                  return a(r);
                case E:
                  e: {
                    for (c = s.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === s.containerInfo &&
                          i.stateNode.implementation === s.implementation
                        ) {
                          n(r, i.sibling), ((i = o(i, s.children || [])).return = r), (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = ju(s, r.mode, l)).return = r), (r = i);
                  }
                  return a(r);
                case R:
                  return e(r, i, (c = s._init)(s._payload), l);
              }
              if (te(s)) return m(r, i, s, l);
              if (G(s)) return g(r, i, s, l);
              Ki(r, s);
            }
            return ('string' == typeof s && '' !== s) || 'number' == typeof s
              ? ((s = '' + s),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, s)).return = r), (r = i))
                  : (n(r, i), ((i = zu(s, r.mode, l)).return = r), (r = i)),
                a(r))
              : n(r, i);
          };
        }
        var Ji = Yi(!0),
          Xi = Yi(!1),
          Zi = {},
          es = _o(Zi),
          ts = _o(Zi),
          ns = _o(Zi);
        function rs(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function os(e, t) {
          switch ((Po(ns, t), Po(ts, e), Po(es, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, '');
              break;
            default:
              t = le((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          xo(es), Po(es, t);
        }
        function is() {
          xo(es), xo(ts), xo(ns);
        }
        function ss(e) {
          rs(ns.current);
          var t = rs(es.current),
            n = le(t, e.type);
          t !== n && (Po(ts, e), Po(es, n));
        }
        function as(e) {
          ts.current === e && (xo(es), xo(ts));
        }
        var ls = _o(0);
        function us(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cs = [];
        function ps() {
          for (var e = 0; e < cs.length; e++) cs[e]._workInProgressVersionPrimary = null;
          cs.length = 0;
        }
        var ds = w.ReactCurrentDispatcher,
          fs = w.ReactCurrentBatchConfig,
          hs = 0,
          ms = null,
          gs = null,
          ys = null,
          vs = !1,
          bs = !1,
          ws = 0,
          ks = 0;
        function Es() {
          throw Error(i(321));
        }
        function Ts(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ar(e[n], t[n])) return !1;
          return !0;
        }
        function Ss(e, t, n, r, o, s) {
          if (
            ((hs = s),
            (ms = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ds.current = null === e || null === e.memoizedState ? aa : la),
            (e = n(r, o)),
            bs)
          ) {
            s = 0;
            do {
              if (((bs = !1), (ws = 0), 25 <= s)) throw Error(i(301));
              (s += 1), (ys = gs = null), (t.updateQueue = null), (ds.current = ua), (e = n(r, o));
            } while (bs);
          }
          if (
            ((ds.current = sa),
            (t = null !== gs && null !== gs.next),
            (hs = 0),
            (ys = gs = ms = null),
            (vs = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function _s() {
          var e = 0 !== ws;
          return (ws = 0), e;
        }
        function xs() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === ys ? (ms.memoizedState = ys = e) : (ys = ys.next = e), ys;
        }
        function Ps() {
          if (null === gs) {
            var e = ms.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gs.next;
          var t = null === ys ? ms.memoizedState : ys.next;
          if (null !== t) (ys = t), (gs = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (gs = e).memoizedState,
              baseState: gs.baseState,
              baseQueue: gs.baseQueue,
              queue: gs.queue,
              next: null,
            }),
              null === ys ? (ms.memoizedState = ys = e) : (ys = ys.next = e);
          }
          return ys;
        }
        function Cs(e, t) {
          return 'function' == typeof t ? t(e) : t;
        }
        function Os(e) {
          var t = Ps(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = gs,
            o = r.baseQueue,
            s = n.pending;
          if (null !== s) {
            if (null !== o) {
              var a = o.next;
              (o.next = s.next), (s.next = a);
            }
            (r.baseQueue = o = s), (n.pending = null);
          }
          if (null !== o) {
            (s = o.next), (r = r.baseState);
            var l = (a = null),
              u = null,
              c = s;
            do {
              var p = c.lane;
              if ((hs & p) === p)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: p,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (a = r)) : (u = u.next = d), (ms.lanes |= p), (Ul |= p);
              }
              c = c.next;
            } while (null !== c && c !== s);
            null === u ? (a = r) : (u.next = l),
              ar(r, t.memoizedState) || (wa = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (s = o.lane), (ms.lanes |= s), (Ul |= s), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function As(e) {
          var t = Ps(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            s = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var a = (o = o.next);
            do {
              (s = e(s, a.action)), (a = a.next);
            } while (a !== o);
            ar(s, t.memoizedState) || (wa = !0),
              (t.memoizedState = s),
              null === t.baseQueue && (t.baseState = s),
              (n.lastRenderedState = s);
          }
          return [s, r];
        }
        function Fs() {}
        function Rs(e, t) {
          var n = ms,
            r = Ps(),
            o = t(),
            s = !ar(r.memoizedState, o);
          if (
            (s && ((r.memoizedState = o), (wa = !0)),
            (r = r.queue),
            qs(Gs.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || s || (null !== ys && 1 & ys.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), js(9, Ls.bind(null, n, r, o, t), void 0, null), null === Al))
              throw Error(i(349));
            0 != (30 & hs) || Ds(n, t, o);
          }
          return o;
        }
        function Ds(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ms.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (ms.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ls(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Is(t) && Us(e);
        }
        function Gs(e, t, n) {
          return n(function () {
            Is(t) && Us(e);
          });
        }
        function Is(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ar(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Us(e) {
          var t = Ai(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function zs(e) {
          var t = xs();
          return (
            'function' == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Cs,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = na.bind(null, ms, e)),
            [t.memoizedState, e]
          );
        }
        function js(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ms.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ms.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ns() {
          return Ps().memoizedState;
        }
        function Ms(e, t, n, r) {
          var o = xs();
          (ms.flags |= e), (o.memoizedState = js(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bs(e, t, n, r) {
          var o = Ps();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== gs) {
            var s = gs.memoizedState;
            if (((i = s.destroy), null !== r && Ts(r, s.deps)))
              return void (o.memoizedState = js(t, n, i, r));
          }
          (ms.flags |= e), (o.memoizedState = js(1 | t, n, i, r));
        }
        function $s(e, t) {
          return Ms(8390656, 8, e, t);
        }
        function qs(e, t) {
          return Bs(2048, 8, e, t);
        }
        function Hs(e, t) {
          return Bs(4, 2, e, t);
        }
        function Ws(e, t) {
          return Bs(4, 4, e, t);
        }
        function Vs(e, t) {
          return 'function' == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ks(e, t, n) {
          return (n = null != n ? n.concat([e]) : null), Bs(4, 4, Vs.bind(null, t, e), n);
        }
        function Qs() {}
        function Ys(e, t) {
          var n = Ps();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ts(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Js(e, t) {
          var n = Ps();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ts(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xs(e, t, n) {
          return 0 == (21 & hs)
            ? (e.baseState && ((e.baseState = !1), (wa = !0)), (e.memoizedState = n))
            : (ar(n, t) || ((n = mt()), (ms.lanes |= n), (Ul |= n), (e.baseState = !0)), t);
        }
        function Zs(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fs.transition;
          fs.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fs.transition = r);
          }
        }
        function ea() {
          return Ps().memoizedState;
        }
        function ta(e, t, n) {
          var r = nu(e);
          (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
            ra(e) ? oa(t, n) : null !== (n = Oi(e, t, n, r)) && (ru(n, e, r, tu()), ia(n, t, r));
        }
        function na(e, t, n) {
          var r = nu(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (ra(e)) oa(t, o);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var s = t.lastRenderedState,
                  a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), ar(a, s))) {
                  var l = t.interleaved;
                  return (
                    null === l ? ((o.next = o), Ci(t)) : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (e) {}
            null !== (n = Oi(e, t, o, r)) && (ru(n, e, r, (o = tu())), ia(n, t, r));
          }
        }
        function ra(e) {
          var t = e.alternate;
          return e === ms || (null !== t && t === ms);
        }
        function oa(e, t) {
          bs = vs = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function ia(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var sa = {
            readContext: xi,
            useCallback: Es,
            useContext: Es,
            useEffect: Es,
            useImperativeHandle: Es,
            useInsertionEffect: Es,
            useLayoutEffect: Es,
            useMemo: Es,
            useReducer: Es,
            useRef: Es,
            useState: Es,
            useDebugValue: Es,
            useDeferredValue: Es,
            useTransition: Es,
            useMutableSource: Es,
            useSyncExternalStore: Es,
            useId: Es,
            unstable_isNewReconciler: !1,
          },
          aa = {
            readContext: xi,
            useCallback: function (e, t) {
              return (xs().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xi,
            useEffect: $s,
            useImperativeHandle: function (e, t, n) {
              return (n = null != n ? n.concat([e]) : null), Ms(4194308, 4, Vs.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return Ms(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ms(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = xs();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = xs();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ta.bind(null, ms, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (xs().memoizedState = e);
            },
            useState: zs,
            useDebugValue: Qs,
            useDeferredValue: function (e) {
              return (xs().memoizedState = e);
            },
            useTransition: function () {
              var e = zs(!1),
                t = e[0];
              return (e = Zs.bind(null, e[1])), (xs().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ms,
                o = xs();
              if (ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Al)) throw Error(i(349));
                0 != (30 & hs) || Ds(r, t, n);
              }
              o.memoizedState = n;
              var s = { value: n, getSnapshot: t };
              return (
                (o.queue = s),
                $s(Gs.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                js(9, Ls.bind(null, r, s, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = xs(),
                t = Al.identifierPrefix;
              if (ii) {
                var n = Xo;
                (t = ':' + t + 'R' + (n = (Jo & ~(1 << (32 - st(Jo) - 1))).toString(32) + n)),
                  0 < (n = ws++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = ks++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          la = {
            readContext: xi,
            useCallback: Ys,
            useContext: xi,
            useEffect: qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Hs,
            useLayoutEffect: Ws,
            useMemo: Js,
            useReducer: Os,
            useRef: Ns,
            useState: function () {
              return Os(Cs);
            },
            useDebugValue: Qs,
            useDeferredValue: function (e) {
              return Xs(Ps(), gs.memoizedState, e);
            },
            useTransition: function () {
              return [Os(Cs)[0], Ps().memoizedState];
            },
            useMutableSource: Fs,
            useSyncExternalStore: Rs,
            useId: ea,
            unstable_isNewReconciler: !1,
          },
          ua = {
            readContext: xi,
            useCallback: Ys,
            useContext: xi,
            useEffect: qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Hs,
            useLayoutEffect: Ws,
            useMemo: Js,
            useReducer: As,
            useRef: Ns,
            useState: function () {
              return As(Cs);
            },
            useDebugValue: Qs,
            useDeferredValue: function (e) {
              var t = Ps();
              return null === gs ? (t.memoizedState = e) : Xs(t, gs.memoizedState, e);
            },
            useTransition: function () {
              return [As(Cs)[0], Ps().memoizedState];
            },
            useMutableSource: Fs,
            useSyncExternalStore: Rs,
            useId: ea,
            unstable_isNewReconciler: !1,
          };
        function ca(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = '\nError generating stack: ' + e.message + '\n' + e.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function pa(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function da(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var fa = 'function' == typeof WeakMap ? WeakMap : Map;
        function ha(e, t, n) {
          ((n = Li(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hl || ((Hl = !0), (Wl = r)), da(0, t);
            }),
            n
          );
        }
        function ma(e, t, n) {
          (n = Li(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' == typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                da(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              'function' == typeof i.componentDidCatch &&
              (n.callback = function () {
                da(0, t),
                  'function' != typeof r && (null === Vl ? (Vl = new Set([this])) : Vl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function ga(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fa();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e));
        }
        function ya(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function va(e, t, n, r, o) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Li(-1, 1)).tag = 2), Gi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var ba = w.ReactCurrentOwner,
          wa = !1;
        function ka(e, t, n, r) {
          t.child = null === e ? Xi(t, null, n, r) : Ji(t, e.child, n, r);
        }
        function Ea(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            _i(t, o),
            (r = Ss(e, t, n, r, i, o)),
            (n = _s()),
            null === e || wa
              ? (ii && n && ti(t), (t.flags |= 1), ka(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ha(e, t, o))
          );
        }
        function Ta(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return 'function' != typeof i ||
              Du(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Gu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Sa(e, t, i, r, o));
          }
          if (((i = e.child), 0 == (e.lanes & o))) {
            var s = i.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : lr)(s, r) && e.ref === t.ref)
              return Ha(e, t, o);
          }
          return (t.flags |= 1), ((e = Lu(i, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Sa(e, t, n, r, o) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((wa = !1), (t.pendingProps = r = i), 0 == (e.lanes & o)))
                return (t.lanes = e.lanes), Ha(e, t, o);
              0 != (131072 & e.flags) && (wa = !0);
            }
          }
          return Pa(e, t, n, r, o);
        }
        function _a(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Po(Ll, Dl),
                (Dl |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Po(Ll, Dl),
                  (Dl |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                Po(Ll, Dl),
                (Dl |= r);
            }
          else
            null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Po(Ll, Dl),
              (Dl |= r);
          return ka(e, t, o, n), t.child;
        }
        function xa(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pa(e, t, n, r, o) {
          var i = Do(n) ? Fo : Oo.current;
          return (
            (i = Ro(t, i)),
            _i(t, o),
            (n = Ss(e, t, n, r, i, o)),
            (r = _s()),
            null === e || wa
              ? (ii && r && ti(t), (t.flags |= 1), ka(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ha(e, t, o))
          );
        }
        function Ca(e, t, n, r, o) {
          if (Do(n)) {
            var i = !0;
            Uo(t);
          } else i = !1;
          if ((_i(t, o), null === t.stateNode)) qa(e, t), qi(t, n, r), Wi(t, n, r, o), (r = !0);
          else if (null === e) {
            var s = t.stateNode,
              a = t.memoizedProps;
            s.props = a;
            var l = s.context,
              u = n.contextType;
            u = 'object' == typeof u && null !== u ? xi(u) : Ro(t, (u = Do(n) ? Fo : Oo.current));
            var c = n.getDerivedStateFromProps,
              p = 'function' == typeof c || 'function' == typeof s.getSnapshotBeforeUpdate;
            p ||
              ('function' != typeof s.UNSAFE_componentWillReceiveProps &&
                'function' != typeof s.componentWillReceiveProps) ||
              ((a !== r || l !== u) && Hi(t, s, r, u)),
              (Fi = !1);
            var d = t.memoizedState;
            (s.state = d),
              zi(t, r, s, o),
              (l = t.memoizedState),
              a !== r || d !== l || Ao.current || Fi
                ? ('function' == typeof c && (Mi(t, n, c, r), (l = t.memoizedState)),
                  (a = Fi || $i(t, n, a, r, d, l, u))
                    ? (p ||
                        ('function' != typeof s.UNSAFE_componentWillMount &&
                          'function' != typeof s.componentWillMount) ||
                        ('function' == typeof s.componentWillMount && s.componentWillMount(),
                        'function' == typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      'function' == typeof s.componentDidMount && (t.flags |= 4194308))
                    : ('function' == typeof s.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : ('function' == typeof s.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (s = t.stateNode),
              Di(e, t),
              (a = t.memoizedProps),
              (u = t.type === t.elementType ? a : yi(t.type, a)),
              (s.props = u),
              (p = t.pendingProps),
              (d = s.context),
              (l =
                'object' == typeof (l = n.contextType) && null !== l
                  ? xi(l)
                  : Ro(t, (l = Do(n) ? Fo : Oo.current)));
            var f = n.getDerivedStateFromProps;
            (c = 'function' == typeof f || 'function' == typeof s.getSnapshotBeforeUpdate) ||
              ('function' != typeof s.UNSAFE_componentWillReceiveProps &&
                'function' != typeof s.componentWillReceiveProps) ||
              ((a !== p || d !== l) && Hi(t, s, r, l)),
              (Fi = !1),
              (d = t.memoizedState),
              (s.state = d),
              zi(t, r, s, o);
            var h = t.memoizedState;
            a !== p || d !== h || Ao.current || Fi
              ? ('function' == typeof f && (Mi(t, n, f, r), (h = t.memoizedState)),
                (u = Fi || $i(t, n, u, r, d, h, l) || !1)
                  ? (c ||
                      ('function' != typeof s.UNSAFE_componentWillUpdate &&
                        'function' != typeof s.componentWillUpdate) ||
                      ('function' == typeof s.componentWillUpdate && s.componentWillUpdate(r, h, l),
                      'function' == typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(r, h, l)),
                    'function' == typeof s.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof s.componentDidUpdate ||
                      (a === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' != typeof s.getSnapshotBeforeUpdate ||
                      (a === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (s.props = r),
                (s.state = h),
                (s.context = l),
                (r = u))
              : ('function' != typeof s.componentDidUpdate ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof s.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Oa(e, t, n, r, i, o);
        }
        function Oa(e, t, n, r, o, i) {
          xa(e, t);
          var s = 0 != (128 & t.flags);
          if (!r && !s) return o && zo(t, n, !1), Ha(e, t, i);
          (r = t.stateNode), (ba.current = t);
          var a = s && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && s
              ? ((t.child = Ji(t, e.child, null, i)), (t.child = Ji(t, null, a, i)))
              : ka(e, t, a, i),
            (t.memoizedState = r.state),
            o && zo(t, n, !0),
            t.child
          );
        }
        function Aa(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Go(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Go(0, t.context, !1),
            os(e, t.containerInfo);
        }
        function Fa(e, t, n, r, o) {
          return hi(), mi(o), (t.flags |= 256), ka(e, t, n, r), t.child;
        }
        var Ra,
          Da,
          La,
          Ga,
          Ia = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ua(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function za(e, t, n) {
          var r,
            o = t.pendingProps,
            s = ls.current,
            a = !1,
            l = 0 != (128 & t.flags);
          if (
            ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & s)),
            r
              ? ((a = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (s |= 1),
            Po(ls, 1 & s),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  a
                    ? ((o = t.mode),
                      (a = t.child),
                      (l = { mode: 'hidden', children: l }),
                      0 == (1 & o) && null !== a
                        ? ((a.childLanes = 0), (a.pendingProps = l))
                        : (a = Uu(l, o, 0, null)),
                      (e = Iu(e, o, n, null)),
                      (a.return = t),
                      (e.return = t),
                      (a.sibling = e),
                      (t.child = a),
                      (t.child.memoizedState = Ua(n)),
                      (t.memoizedState = Ia),
                      e)
                    : ja(t, l))
            );
          if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated))
            return (function (e, t, n, r, o, s, a) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Na(e, t, a, (r = pa(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = r.fallback),
                    (o = t.mode),
                    (r = Uu({ mode: 'visible', children: r.children }, o, 0, null)),
                    ((s = Iu(s, o, a, null)).flags |= 2),
                    (r.return = t),
                    (s.return = t),
                    (r.sibling = s),
                    (t.child = r),
                    0 != (1 & t.mode) && Ji(t, e.child, null, a),
                    (t.child.memoizedState = Ua(a)),
                    (t.memoizedState = Ia),
                    s);
              if (0 == (1 & t.mode)) return Na(e, t, a, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var l = r.dgst;
                return (r = l), Na(e, t, a, (r = pa((s = Error(i(419))), r, void 0)));
              }
              if (((l = 0 != (a & e.childLanes)), wa || l)) {
                if (null !== (r = Al)) {
                  switch (a & -a) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 != (o & (r.suspendedLanes | a)) ? 0 : o) &&
                    o !== s.retryLane &&
                    ((s.retryLane = o), Ai(e, o), ru(r, e, o, -1));
                }
                return gu(), Na(e, t, a, (r = pa(Error(i(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = s.treeContext),
                  (oi = uo(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (si = null),
                  null !== e &&
                    ((Ko[Qo++] = Jo),
                    (Ko[Qo++] = Xo),
                    (Ko[Qo++] = Yo),
                    (Jo = e.id),
                    (Xo = e.overflow),
                    (Yo = t)),
                  ((t = ja(t, r.children)).flags |= 4096),
                  t);
            })(e, t, l, o, r, s, n);
          if (a) {
            (a = o.fallback), (l = t.mode), (r = (s = e.child).sibling);
            var u = { mode: 'hidden', children: o.children };
            return (
              0 == (1 & l) && t.child !== s
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = Lu(s, u)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== r ? (a = Lu(r, a)) : ((a = Iu(a, l, n, null)).flags |= 2),
              (a.return = t),
              (o.return = t),
              (o.sibling = a),
              (t.child = o),
              (o = a),
              (a = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ua(n)
                  : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
              (a.memoizedState = l),
              (a.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ia),
              o
            );
          }
          return (
            (e = (a = e.child).sibling),
            (o = Lu(a, { mode: 'visible', children: o.children })),
            0 == (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function ja(e, t) {
          return (
            ((t = Uu({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Na(e, t, n, r) {
          return (
            null !== r && mi(r),
            Ji(t, e.child, null, n),
            ((e = ja(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ma(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Ba(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function $a(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((ka(e, t, r.children, n), 0 != (2 & (r = ls.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ma(e, n, t);
                else if (19 === e.tag) Ma(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Po(ls, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === us(e) && (o = n), (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ba(t, !1, o, n, i);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === us(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ba(t, !0, n, null, i);
                break;
              case 'together':
                Ba(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function qa(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ha(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ul |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wa(e, t) {
          if (!ii)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Va(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ka(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Va(t), null;
            case 1:
            case 17:
              return Do(t.type) && Lo(), Va(t), null;
            case 3:
              return (
                (r = t.stateNode),
                is(),
                xo(Ao),
                xo(Oo),
                ps(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== si && (au(si), (si = null)))),
                Da(e, t),
                Va(t),
                null
              );
            case 5:
              as(t);
              var o = rs(ns.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                La(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Va(t), null;
                }
                if (((e = rs(es.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var s = t.memoizedProps;
                  switch (((r[fo] = t), (r[ho] = s), (e = 0 != (1 & t.mode)), n)) {
                    case 'dialog':
                      jr('cancel', r), jr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      jr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Gr.length; o++) jr(Gr[o], r);
                      break;
                    case 'source':
                      jr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      jr('error', r), jr('load', r);
                      break;
                    case 'details':
                      jr('toggle', r);
                      break;
                    case 'input':
                      Y(r, s), jr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!s.multiple }), jr('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, s), jr('invalid', r);
                  }
                  for (var l in (ve(n, s), (o = null), s))
                    if (s.hasOwnProperty(l)) {
                      var u = s[l];
                      'children' === l
                        ? 'string' == typeof u
                          ? r.textContent !== u &&
                            (!0 !== s.suppressHydrationWarning && Xr(r.textContent, u, e),
                            (o = ['children', u]))
                          : 'number' == typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== s.suppressHydrationWarning && Xr(r.textContent, u, e),
                            (o = ['children', '' + u]))
                        : a.hasOwnProperty(l) && null != u && 'onScroll' === l && jr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      W(r), Z(r, s, !0);
                      break;
                    case 'textarea':
                      W(r), se(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' == typeof s.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ae(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = l.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' == typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          'select' === n &&
                            ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fo] = t),
                    (e[ho] = r),
                    Ra(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case 'dialog':
                        jr('cancel', e), jr('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        jr('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Gr.length; o++) jr(Gr[o], e);
                        o = r;
                        break;
                      case 'source':
                        jr('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        jr('error', e), jr('load', e), (o = r);
                        break;
                      case 'details':
                        jr('toggle', e), (o = r);
                        break;
                      case 'input':
                        Y(e, r), (o = Q(e, r)), jr('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = U({}, r, { value: void 0 })),
                          jr('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), jr('invalid', e);
                    }
                    for (s in (ve(n, o), (u = o)))
                      if (u.hasOwnProperty(s)) {
                        var c = u[s];
                        'style' === s
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === s
                          ? null != (c = c ? c.__html : void 0) && pe(e, c)
                          : 'children' === s
                          ? 'string' == typeof c
                            ? ('textarea' !== n || '' !== c) && de(e, c)
                            : 'number' == typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (a.hasOwnProperty(s)
                              ? null != c && 'onScroll' === s && jr('scroll', e)
                              : null != c && b(e, s, c, l));
                      }
                    switch (n) {
                      case 'input':
                        W(e), Z(e, r, !1);
                        break;
                      case 'textarea':
                        W(e), se(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + q(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (s = r.value)
                            ? ne(e, !!r.multiple, s, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' == typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Va(t), null;
            case 6:
              if (e && null != t.stateNode) Ga(e, t, e.memoizedProps, r);
              else {
                if ('string' != typeof r && null === t.stateNode) throw Error(i(166));
                if (((n = rs(ns.current)), rs(es.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fo] = t),
                    (s = r.nodeValue !== n) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  s && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fo] = t),
                    (t.stateNode = r);
              }
              return Va(t), null;
            case 13:
              if (
                (xo(ls),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ii && null !== oi && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                  fi(), hi(), (t.flags |= 98560), (s = !1);
                else if (((s = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!s) throw Error(i(318));
                    if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null))
                      throw Error(i(317));
                    s[fo] = t;
                  } else hi(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Va(t), (s = !1);
                } else null !== si && (au(si), (si = null)), (s = !0);
                if (!s) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & ls.current) ? 0 === Gl && (Gl = 3) : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Va(t),
                  null);
            case 4:
              return is(), Da(e, t), null === e && Br(t.stateNode.containerInfo), Va(t), null;
            case 10:
              return Ti(t.type._context), Va(t), null;
            case 19:
              if ((xo(ls), null === (s = t.memoizedState))) return Va(t), null;
              if (((r = 0 != (128 & t.flags)), null === (l = s.rendering)))
                if (r) Wa(s, !1);
                else {
                  if (0 !== Gl || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = us(e))) {
                        for (
                          t.flags |= 128,
                            Wa(s, !1),
                            null !== (r = l.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((s = n).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = e),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (e = l.dependencies),
                                (s.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Po(ls, (1 & ls.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== s.tail &&
                    Je() > $l &&
                    ((t.flags |= 128), (r = !0), Wa(s, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = us(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Wa(s, !0),
                      null === s.tail && 'hidden' === s.tailMode && !l.alternate && !ii)
                    )
                      return Va(t), null;
                  } else
                    2 * Je() - s.renderingStartTime > $l &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Wa(s, !1), (t.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = s.last) ? (n.sibling = l) : (t.child = l), (s.last = l));
              }
              return null !== s.tail
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ls.current),
                  Po(ls, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Va(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & Dl) && (Va(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Va(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Qa(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return (
                Do(t.type) && Lo(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                is(),
                xo(Ao),
                xo(Oo),
                ps(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return as(t), null;
            case 13:
              if ((xo(ls), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return xo(ls), null;
            case 4:
              return is(), null;
            case 10:
              return Ti(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ra = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Da = function () {}),
          (La = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), rs(es.current);
              var i,
                s = null;
              switch (n) {
                case 'input':
                  (o = Q(e, o)), (r = Q(e, r)), (s = []);
                  break;
                case 'select':
                  (o = U({}, o, { value: void 0 })), (r = U({}, r, { value: void 0 })), (s = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (s = []);
                  break;
                default:
                  'function' != typeof o.onClick &&
                    'function' == typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var l = o[c];
                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (a.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ('style' === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ''));
                      for (i in u)
                        u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
                    } else n || (s || (s = []), s.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (s = s || []).push(c, u))
                      : 'children' === c
                      ? ('string' != typeof u && 'number' != typeof u) ||
                        (s = s || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (a.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && jr('scroll', e),
                            s || l === u || (s = []))
                          : (s = s || []).push(c, u));
              }
              n && (s = s || []).push('style', n);
              var c = s;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ga = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ya = !1,
          Ja = !1,
          Xa = 'function' == typeof WeakSet ? WeakSet : Set,
          Za = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' == typeof n)
              try {
                n(null);
              } catch (n) {
                _u(e, t, n);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (n) {
            _u(e, t, n);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && tl(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ol(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
          }
        }
        function sl(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), sl(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fo], delete t[ho], delete t[go], delete t[yo], delete t[vo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function al(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || al(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; ) ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; ) cl(e, t, n), (e = e.sibling);
        }
        var pl = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (it && 'function' == typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Ja || el(n, t);
            case 6:
              var r = pl,
                o = dl;
              (pl = null),
                fl(e, t, n),
                (dl = o),
                null !== (pl = r) &&
                  (dl
                    ? ((e = pl),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : pl.removeChild(n.stateNode));
              break;
            case 18:
              null !== pl &&
                (dl
                  ? ((e = pl),
                    (n = n.stateNode),
                    8 === e.nodeType ? lo(e.parentNode, n) : 1 === e.nodeType && lo(e, n),
                    Bt(e))
                  : lo(pl, n.stateNode));
              break;
            case 4:
              (r = pl),
                (o = dl),
                (pl = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (pl = r),
                (dl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Ja && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                  var i = o,
                    s = i.destroy;
                  (i = i.tag),
                    void 0 !== s && (0 != (2 & i) || 0 != (4 & i)) && tl(n, t, s),
                    (o = o.next);
                } while (o !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (!Ja && (el(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  _u(n, t, e);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ja = (r = Ja) || null !== n.memoizedState), fl(e, t, n), (Ja = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xa()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var s = e,
                  a = t,
                  l = a;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (pl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (pl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === pl) throw Error(i(160));
                hl(s, a, o), (pl = null), (dl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (e) {
                _u(o, t, e);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), vl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), ol(3, e);
                } catch (t) {
                  _u(e, e.return, t);
                }
                try {
                  rl(5, e, e.return);
                } catch (t) {
                  _u(e, e.return, t);
                }
              }
              break;
            case 1:
              gl(t, e), vl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if ((gl(t, e), vl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  de(o, '');
                } catch (t) {
                  _u(e, e.return, t);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var s = e.memoizedProps,
                  a = null !== n ? n.memoizedProps : s,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === l && 'radio' === s.type && null != s.name && J(o, s), be(l, a);
                    var c = be(l, s);
                    for (a = 0; a < u.length; a += 2) {
                      var p = u[a],
                        d = u[a + 1];
                      'style' === p
                        ? ge(o, d)
                        : 'dangerouslySetInnerHTML' === p
                        ? pe(o, d)
                        : 'children' === p
                        ? de(o, d)
                        : b(o, p, d, c);
                    }
                    switch (l) {
                      case 'input':
                        X(o, s);
                        break;
                      case 'textarea':
                        ie(o, s);
                        break;
                      case 'select':
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        null != h
                          ? ne(o, !!s.multiple, h, !1)
                          : f !== !!s.multiple &&
                            (null != s.defaultValue
                              ? ne(o, !!s.multiple, s.defaultValue, !0)
                              : ne(o, !!s.multiple, s.multiple ? [] : '', !1));
                    }
                    o[ho] = s;
                  } catch (t) {
                    _u(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), vl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (o = e.stateNode), (s = e.memoizedProps);
                try {
                  o.nodeValue = s;
                } catch (t) {
                  _u(e, e.return, t);
                }
              }
              break;
            case 3:
              if ((gl(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Bt(t.containerInfo);
                } catch (t) {
                  _u(e, e.return, t);
                }
              break;
            case 4:
            default:
              gl(t, e), vl(e);
              break;
            case 13:
              gl(t, e),
                vl(e),
                8192 & (o = e.child).flags &&
                  ((s = null !== o.memoizedState),
                  (o.stateNode.isHidden = s),
                  !s ||
                    (null !== o.alternate && null !== o.alternate.memoizedState) ||
                    (Bl = Je())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((p = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ja = (c = Ja) || p), gl(t, e), (Ja = c)) : gl(t, e),
                vl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !p && 0 != (1 & e.mode))
                )
                  for (Za = e, p = e.child; null !== p; ) {
                    for (d = Za = p; null !== Za; ) {
                      switch (((h = (f = Za).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, f, f.return);
                          break;
                        case 1:
                          el(f, f.return);
                          var m = f.stateNode;
                          if ('function' == typeof m.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              _u(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          el(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            El(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = f), (Za = h)) : El(d);
                    }
                    p = p.sibling;
                  }
                e: for (p = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === p) {
                      p = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? 'function' == typeof (s = o.style).setProperty
                              ? s.setProperty('display', 'none', 'important')
                              : (s.display = 'none')
                            : ((l = d.stateNode),
                              (a =
                                null != (u = d.memoizedProps.style) && u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (l.style.display = me('display', a)));
                      } catch (t) {
                        _u(e, e.return, t);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === p)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (t) {
                        _u(e, e.return, t);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    p === d && (p = null), (d = d.return);
                  }
                  p === d && (p = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), vl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function vl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (al(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ''), (r.flags &= -33)), cl(e, ll(e), o);
                  break;
                case 3:
                case 4:
                  var s = r.stateNode.containerInfo;
                  ul(e, ll(e), s);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (t) {
              _u(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Za = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Za; ) {
            var o = Za,
              i = o.child;
            if (22 === o.tag && r) {
              var s = null !== o.memoizedState || Ya;
              if (!s) {
                var a = o.alternate,
                  l = (null !== a && null !== a.memoizedState) || Ja;
                a = Ya;
                var u = Ja;
                if (((Ya = s), (Ja = l) && !u))
                  for (Za = o; null !== Za; )
                    (l = (s = Za).child),
                      22 === s.tag && null !== s.memoizedState
                        ? Tl(o)
                        : null !== l
                        ? ((l.return = s), (Za = l))
                        : Tl(o);
                for (; null !== i; ) (Za = i), wl(i, t, n), (i = i.sibling);
                (Za = o), (Ya = a), (Ja = u);
              }
              kl(e);
            } else 0 != (8772 & o.subtreeFlags) && null !== i ? ((i.return = o), (Za = i)) : kl(e);
          }
        }
        function kl(e) {
          for (; null !== Za; ) {
            var t = Za;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ja || ol(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ja)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var s = t.updateQueue;
                      null !== s && ji(t, s, r);
                      break;
                    case 3:
                      var a = t.updateQueue;
                      if (null !== a) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        ji(t, a, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var p = c.memoizedState;
                          if (null !== p) {
                            var d = p.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Ja || (512 & t.flags && il(t));
              } catch (e) {
                _u(t, t.return, e);
              }
            }
            if (t === e) {
              Za = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Za = n);
              break;
            }
            Za = t.return;
          }
        }
        function El(e) {
          for (; null !== Za; ) {
            var t = Za;
            if (t === e) {
              Za = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Za = n);
              break;
            }
            Za = t.return;
          }
        }
        function Tl(e) {
          for (; null !== Za; ) {
            var t = Za;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ol(4, t);
                  } catch (e) {
                    _u(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' == typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      _u(t, o, e);
                    }
                  }
                  var i = t.return;
                  try {
                    il(t);
                  } catch (e) {
                    _u(t, i, e);
                  }
                  break;
                case 5:
                  var s = t.return;
                  try {
                    il(t);
                  } catch (e) {
                    _u(t, s, e);
                  }
              }
            } catch (e) {
              _u(t, t.return, e);
            }
            if (t === e) {
              Za = null;
              break;
            }
            var a = t.sibling;
            if (null !== a) {
              (a.return = t.return), (Za = a);
              break;
            }
            Za = t.return;
          }
        }
        var Sl,
          _l = Math.ceil,
          xl = w.ReactCurrentDispatcher,
          Pl = w.ReactCurrentOwner,
          Cl = w.ReactCurrentBatchConfig,
          Ol = 0,
          Al = null,
          Fl = null,
          Rl = 0,
          Dl = 0,
          Ll = _o(0),
          Gl = 0,
          Il = null,
          Ul = 0,
          zl = 0,
          jl = 0,
          Nl = null,
          Ml = null,
          Bl = 0,
          $l = 1 / 0,
          ql = null,
          Hl = !1,
          Wl = null,
          Vl = null,
          Kl = !1,
          Ql = null,
          Yl = 0,
          Jl = 0,
          Xl = null,
          Zl = -1,
          eu = 0;
        function tu() {
          return 0 != (6 & Ol) ? Je() : -1 !== Zl ? Zl : (Zl = Je());
        }
        function nu(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Ol) && 0 !== Rl
            ? Rl & -Rl
            : null !== gi.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Jl) throw ((Jl = 0), (Xl = null), Error(i(185)));
          yt(e, n, r),
            (0 != (2 & Ol) && e === Al) ||
              (e === Al && (0 == (2 & Ol) && (zl |= n), 4 === Gl && lu(e, Rl)),
              ou(e, r),
              1 === n && 0 === Ol && 0 == (1 & t.mode) && (($l = Je() + 500), No && $o()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var s = 31 - st(i),
                a = 1 << s,
                l = o[s];
              -1 === l
                ? (0 != (a & n) && 0 == (a & r)) || (o[s] = ft(a, t))
                : l <= t && (e.expiredLanes |= a),
                (i &= ~a);
            }
          })(e, t);
          var r = dt(e, e === Al ? Rl : 0);
          if (0 === r) null !== n && Ke(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (No = !0), Bo(e);
                  })(uu.bind(null, e))
                : Bo(uu.bind(null, e)),
                so(function () {
                  0 == (6 & Ol) && $o();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Au(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Zl = -1), (eu = 0), 0 != (6 & Ol))) throw Error(i(327));
          var n = e.callbackNode;
          if (Tu() && e.callbackNode !== n) return null;
          var r = dt(e, e === Al ? Rl : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var o = Ol;
            Ol |= 2;
            var s = mu();
            for ((Al === e && Rl === t) || ((ql = null), ($l = Je() + 500), fu(e, t)); ; )
              try {
                bu();
                break;
              } catch (t) {
                hu(e, t);
              }
            Ei(),
              (xl.current = s),
              (Ol = o),
              null !== Fl ? (t = 0) : ((Al = null), (Rl = 0), (t = Gl));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = ht(e)) && ((r = o), (t = su(e, o))), 1 === t))
              throw ((n = Il), fu(e, 0), lu(e, r), ou(e, Je()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!ar(i(), o)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yu(e, r)) && 0 !== (s = ht(e)) && ((r = s), (t = su(e, s))), 1 === t))
              )
                throw ((n = Il), fu(e, 0), lu(e, r), ou(e, Je()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Eu(e, Ml, ql);
                  break;
                case 3:
                  if ((lu(e, r), (130023424 & r) === r && 10 < (t = Bl + 500 - Je()))) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Eu.bind(null, e, Ml, ql), t);
                    break;
                  }
                  Eu(e, Ml, ql);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var a = 31 - st(r);
                    (s = 1 << a), (a = t[a]) > o && (o = a), (r &= ~s);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _l(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Eu.bind(null, e, Ml, ql), r);
                    break;
                  }
                  Eu(e, Ml, ql);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ou(e, Je()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function su(e, t) {
          var n = Nl;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ml), (Ml = n), null !== t && au(t)),
            e
          );
        }
        function au(e) {
          null === Ml ? (Ml = e) : Ml.push.apply(Ml, e);
        }
        function lu(e, t) {
          for (
            t &= ~jl, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - st(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 != (6 & Ol)) throw Error(i(327));
          Tu();
          var t = dt(e, 0);
          if (0 == (1 & t)) return ou(e, Je()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = su(e, r)));
          }
          if (1 === n) throw ((n = Il), fu(e, 0), lu(e, t), ou(e, Je()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Eu(e, Ml, ql),
            ou(e, Je()),
            null
          );
        }
        function cu(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && (($l = Je() + 500), No && $o());
          }
        }
        function pu(e) {
          null !== Ql && 0 === Ql.tag && 0 == (6 & Ol) && Tu();
          var t = Ol;
          Ol |= 1;
          var n = Cl.transition,
            r = bt;
          try {
            if (((Cl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cl.transition = n), 0 == (6 & (Ol = t)) && $o();
          }
        }
        function du() {
          (Dl = Ll.current), xo(Ll);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Fl))
            for (n = Fl.return; null !== n; ) {
              var r = n;
              switch ((ni(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && Lo();
                  break;
                case 3:
                  is(), xo(Ao), xo(Oo), ps();
                  break;
                case 5:
                  as(r);
                  break;
                case 4:
                  is();
                  break;
                case 13:
                case 19:
                  xo(ls);
                  break;
                case 10:
                  Ti(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Al = e),
            (Fl = e = Lu(e.current, null)),
            (Rl = Dl = t),
            (Gl = 0),
            (Il = null),
            (jl = zl = Ul = 0),
            (Ml = Nl = null),
            null !== Pi)
          ) {
            for (t = 0; t < Pi.length; t++)
              if (null !== (r = (n = Pi[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var s = i.next;
                  (i.next = o), (r.next = s);
                }
                n.pending = r;
              }
            Pi = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Fl;
            try {
              if ((Ei(), (ds.current = sa), vs)) {
                for (var r = ms.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                vs = !1;
              }
              if (
                ((hs = 0),
                (ys = gs = ms = null),
                (bs = !1),
                (ws = 0),
                (Pl.current = null),
                null === n || null === n.return)
              ) {
                (Gl = 1), (Il = t), (Fl = null);
                break;
              }
              e: {
                var s = e,
                  a = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Rl),
                  (l.flags |= 32768),
                  null !== u && 'object' == typeof u && 'function' == typeof u.then)
                ) {
                  var c = u,
                    p = l,
                    d = p.tag;
                  if (0 == (1 & p.mode) && (0 === d || 11 === d || 15 === d)) {
                    var f = p.alternate;
                    f
                      ? ((p.updateQueue = f.updateQueue),
                        (p.memoizedState = f.memoizedState),
                        (p.lanes = f.lanes))
                      : ((p.updateQueue = null), (p.memoizedState = null));
                  }
                  var h = ya(a);
                  if (null !== h) {
                    (h.flags &= -257), va(h, a, l, 0, t), 1 & h.mode && ga(s, c, t), (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    ga(s, c, t), gu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ii && 1 & l.mode) {
                  var y = ya(a);
                  if (null !== y) {
                    0 == (65536 & y.flags) && (y.flags |= 256), va(y, a, l, 0, t), mi(ca(u, l));
                    break e;
                  }
                }
                (s = u = ca(u, l)),
                  4 !== Gl && (Gl = 2),
                  null === Nl ? (Nl = [s]) : Nl.push(s),
                  (s = a);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536), (t &= -t), (s.lanes |= t), Ui(s, ha(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var v = s.type,
                        b = s.stateNode;
                      if (
                        0 == (128 & s.flags) &&
                        ('function' == typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            'function' == typeof b.componentDidCatch &&
                            (null === Vl || !Vl.has(b))))
                      ) {
                        (s.flags |= 65536), (t &= -t), (s.lanes |= t), Ui(s, ma(s, l, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              ku(n);
            } catch (e) {
              (t = e), Fl === n && null !== n && (Fl = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = xl.current;
          return (xl.current = sa), null === e ? sa : e;
        }
        function gu() {
          (0 !== Gl && 3 !== Gl && 2 !== Gl) || (Gl = 4),
            null === Al || (0 == (268435455 & Ul) && 0 == (268435455 & zl)) || lu(Al, Rl);
        }
        function yu(e, t) {
          var n = Ol;
          Ol |= 2;
          var r = mu();
          for ((Al === e && Rl === t) || ((ql = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (t) {
              hu(e, t);
            }
          if ((Ei(), (Ol = n), (xl.current = r), null !== Fl)) throw Error(i(261));
          return (Al = null), (Rl = 0), Gl;
        }
        function vu() {
          for (; null !== Fl; ) wu(Fl);
        }
        function bu() {
          for (; null !== Fl && !Qe(); ) wu(Fl);
        }
        function wu(e) {
          var t = Sl(e.alternate, e, Dl);
          (e.memoizedProps = e.pendingProps), null === t ? ku(e) : (Fl = t), (Pl.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = Ka(n, t, Dl))) return void (Fl = n);
            } else {
              if (null !== (n = Qa(n, t))) return (n.flags &= 32767), void (Fl = n);
              if (null === e) return (Gl = 6), void (Fl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Fl = t);
            Fl = t = e;
          } while (null !== t);
          0 === Gl && (Gl = 5);
        }
        function Eu(e, t, n) {
          var r = bt,
            o = Cl.transition;
          try {
            (Cl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Tu();
                } while (null !== Ql);
                if (0 != (6 & Ol)) throw Error(i(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var s = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - st(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, s),
                  e === Al && ((Fl = Al = null), (Rl = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    Kl ||
                    ((Kl = !0),
                    Au(tt, function () {
                      return Tu(), null;
                    })),
                  (s = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || s)
                ) {
                  (s = Cl.transition), (Cl.transition = null);
                  var a = bt;
                  bt = 1;
                  var l = Ol;
                  (Ol |= 4),
                    (Pl.current = null),
                    (function (e, t) {
                      if (((eo = qt), fr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                s = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, s.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var a = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                p = 0,
                                d = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n || (0 !== o && 3 !== d.nodeType) || (l = a + o),
                                    d !== s || (0 !== r && 3 !== d.nodeType) || (u = a + r),
                                    3 === d.nodeType && (a += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (f = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (f === n && ++c === o && (l = a),
                                    f === s && ++p === r && (u = a),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  f = (d = f).parentNode;
                                }
                                d = h;
                              }
                              n = -1 === l || -1 === u ? null : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n }, qt = !1, Za = t;
                        null !== Za;

                      )
                        if (((e = (t = Za).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Za = e);
                        else
                          for (; null !== Za; ) {
                            t = Za;
                            try {
                              var m = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? g : yi(t.type, g),
                                          y,
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (e) {
                              _u(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Za = e);
                              break;
                            }
                            Za = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(to),
                    (qt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bl(n, e, o),
                    Ye(),
                    (Ol = l),
                    (bt = a),
                    (Cl.transition = s);
                } else e.current = n;
                if (
                  (Kl && ((Kl = !1), (Ql = e), (Yl = o)),
                  0 === (s = e.pendingLanes) && (Vl = null),
                  (function (e) {
                    if (it && 'function' == typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(ot, e, void 0, 128 == (128 & e.current.flags));
                      } catch (e) {}
                  })(n.stateNode),
                  ou(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((o = t[n]).value, { componentStack: o.stack, digest: o.digest });
                if (Hl) throw ((Hl = !1), (e = Wl), (Wl = null), e);
                0 != (1 & Yl) && 0 !== e.tag && Tu(),
                  0 != (1 & (s = e.pendingLanes))
                    ? e === Xl
                      ? Jl++
                      : ((Jl = 0), (Xl = e))
                    : (Jl = 0),
                  $o();
              })(e, t, n, r);
          } finally {
            (Cl.transition = o), (bt = r);
          }
          return null;
        }
        function Tu() {
          if (null !== Ql) {
            var e = wt(Yl),
              t = Cl.transition,
              n = bt;
            try {
              if (((Cl.transition = null), (bt = 16 > e ? 16 : e), null === Ql)) var r = !1;
              else {
                if (((e = Ql), (Ql = null), (Yl = 0), 0 != (6 & Ol))) throw Error(i(331));
                var o = Ol;
                for (Ol |= 4, Za = e.current; null !== Za; ) {
                  var s = Za,
                    a = s.child;
                  if (0 != (16 & Za.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Za = c; null !== Za; ) {
                          var p = Za;
                          switch (p.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, p, s);
                          }
                          var d = p.child;
                          if (null !== d) (d.return = p), (Za = d);
                          else
                            for (; null !== Za; ) {
                              var f = (p = Za).sibling,
                                h = p.return;
                              if ((sl(p), p === c)) {
                                Za = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = h), (Za = f);
                                break;
                              }
                              Za = h;
                            }
                        }
                      }
                      var m = s.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Za = s;
                    }
                  }
                  if (0 != (2064 & s.subtreeFlags) && null !== a) (a.return = s), (Za = a);
                  else
                    e: for (; null !== Za; ) {
                      if (0 != (2048 & (s = Za).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, s, s.return);
                        }
                      var v = s.sibling;
                      if (null !== v) {
                        (v.return = s.return), (Za = v);
                        break e;
                      }
                      Za = s.return;
                    }
                }
                var b = e.current;
                for (Za = b; null !== Za; ) {
                  var w = (a = Za).child;
                  if (0 != (2064 & a.subtreeFlags) && null !== w) (w.return = a), (Za = w);
                  else
                    e: for (a = b; null !== Za; ) {
                      if (0 != (2048 & (l = Za).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ol(9, l);
                          }
                        } catch (e) {
                          _u(l, l.return, e);
                        }
                      if (l === a) {
                        Za = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Za = k);
                        break e;
                      }
                      Za = l.return;
                    }
                }
                if (((Ol = o), $o(), it && 'function' == typeof it.onPostCommitFiberRoot))
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cl.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Gi(e, (t = ha(0, (t = ca(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), ou(e, t));
        }
        function _u(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' == typeof t.type.getDerivedStateFromError ||
                  ('function' == typeof r.componentDidCatch && (null === Vl || !Vl.has(r)))
                ) {
                  (t = Gi(t, (e = ma(t, (e = ca(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Al === e &&
              (Rl & n) === n &&
              (4 === Gl || (3 === Gl && (130023424 & Rl) === Rl && 500 > Je() - Bl)
                ? fu(e, 0)
                : (jl |= n)),
            ou(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ai(e, t)) && (yt(e, t, n), ou(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Au(e, t) {
          return Ve(e, t);
        }
        function Fu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Fu(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Gu(e, t, n, r, o, s) {
          var a = 2;
          if (((r = e), 'function' == typeof e)) Du(e) && (a = 1);
          else if ('string' == typeof e) a = 5;
          else
            e: switch (e) {
              case T:
                return Iu(n.children, o, s, t);
              case S:
                (a = 8), (o |= 8);
                break;
              case _:
                return ((e = Ru(12, n, t, 2 | o)).elementType = _), (e.lanes = s), e;
              case O:
                return ((e = Ru(13, n, t, o)).elementType = O), (e.lanes = s), e;
              case A:
                return ((e = Ru(19, n, t, o)).elementType = A), (e.lanes = s), e;
              case D:
                return Uu(n, o, s, t);
              default:
                if ('object' == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case x:
                      a = 10;
                      break e;
                    case P:
                      a = 9;
                      break e;
                    case C:
                      a = 11;
                      break e;
                    case F:
                      a = 14;
                      break e;
                    case R:
                      (a = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ru(a, n, t, o)).elementType = e), (t.type = r), (t.lanes = s), t;
        }
        function Iu(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Uu(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = D),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zu(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function ju(e, t, n) {
          return (
            ((t = Ru(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Nu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Mu(e, t, n, r, o, i, s, a, l) {
          return (
            (e = new Nu(e, t, n, a, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ru(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ri(i),
            e
          );
        }
        function Bu(e) {
          if (!e) return Co;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Do(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Do(n)) return Io(e, n, t);
          }
          return t;
        }
        function $u(e, t, n, r, o, i, s, a, l) {
          return (
            ((e = Mu(n, r, !0, e, 0, i, 0, a, l)).context = Bu(null)),
            (n = e.current),
            ((i = Li((r = tu()), (o = nu(n)))).callback = null != t ? t : null),
            Gi(n, i, o),
            (e.current.lanes = o),
            yt(e, o, r),
            ou(e, r),
            e
          );
        }
        function qu(e, t, n, r) {
          var o = t.current,
            i = tu(),
            s = nu(o);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Li(i, s)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Gi(o, t, s)) && (ru(e, o, s, i), Ii(e, o, s)),
            s
          );
        }
        function Hu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Vu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ao.current) wa = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (wa = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Aa(t), hi();
                        break;
                      case 5:
                        ss(t);
                        break;
                      case 1:
                        Do(t.type) && Uo(t);
                        break;
                      case 4:
                        os(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Po(vi, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Po(ls, 1 & ls.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? za(e, t, n)
                            : (Po(ls, 1 & ls.current),
                              null !== (e = Ha(e, t, n)) ? e.sibling : null);
                        Po(ls, 1 & ls.current);
                        break;
                      case 19:
                        if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                          if (r) return $a(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          Po(ls, ls.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _a(e, t, n);
                    }
                    return Ha(e, t, n);
                  })(e, t, n)
                );
              wa = 0 != (131072 & e.flags);
            }
          else (wa = !1), ii && 0 != (1048576 & t.flags) && ei(t, Vo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              qa(e, t), (e = t.pendingProps);
              var o = Ro(t, Oo.current);
              _i(t, n), (o = Ss(null, t, r, e, o, n));
              var s = _s();
              return (
                (t.flags |= 1),
                'object' == typeof o &&
                null !== o &&
                'function' == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Do(r) ? ((s = !0), Uo(t)) : (s = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    Ri(t),
                    (o.updater = Bi),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Wi(t, r, e, n),
                    (t = Oa(null, t, r, !0, s, n)))
                  : ((t.tag = 0), ii && s && ti(t), ka(null, t, o, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (qa(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' == typeof e) return Du(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === F) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yi(r, e)),
                  o)
                ) {
                  case 0:
                    t = Pa(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ca(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ea(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ta(null, t, r, yi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Pa(e, t, r, (o = t.elementType === r ? o : yi(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ca(e, t, r, (o = t.elementType === r ? o : yi(r, o)), n)
              );
            case 3:
              e: {
                if ((Aa(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (s = t.memoizedState).element),
                  Di(e, t),
                  zi(t, r, null, n);
                var a = t.memoizedState;
                if (((r = a.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: r,
                      isDehydrated: !1,
                      cache: a.cache,
                      pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                      transitions: a.transitions,
                    }),
                    (t.updateQueue.baseState = s),
                    (t.memoizedState = s),
                    256 & t.flags)
                  ) {
                    t = Fa(e, t, r, n, (o = ca(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Fa(e, t, r, n, (o = ca(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    oi = uo(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      si = null,
                      n = Xi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((hi(), r === o)) {
                    t = Ha(e, t, n);
                    break e;
                  }
                  ka(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ss(t),
                null === e && ci(t),
                (r = t.type),
                (o = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (a = o.children),
                no(r, o) ? (a = null) : null !== s && no(r, s) && (t.flags |= 32),
                xa(e, t),
                ka(e, t, a, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return za(e, t, n);
            case 4:
              return (
                os(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ji(t, null, r, n)) : ka(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ea(e, t, r, (o = t.elementType === r ? o : yi(r, o)), n)
              );
            case 7:
              return ka(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ka(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (s = t.memoizedProps),
                  (a = o.value),
                  Po(vi, r._currentValue),
                  (r._currentValue = a),
                  null !== s)
                )
                  if (ar(s.value, a)) {
                    if (s.children === o.children && !Ao.current) {
                      t = Ha(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        a = s.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === s.tag) {
                              (u = Li(-1, n & -n)).tag = 2;
                              var c = s.updateQueue;
                              if (null !== c) {
                                var p = (c = c.shared).pending;
                                null === p ? (u.next = u) : ((u.next = p.next), (p.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (s.lanes |= n),
                              null !== (u = s.alternate) && (u.lanes |= n),
                              Si(s.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === s.tag) a = s.type === t.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (a = s.return)) throw Error(i(341));
                        (a.lanes |= n),
                          null !== (l = a.alternate) && (l.lanes |= n),
                          Si(a, n, t),
                          (a = s.sibling);
                      } else a = s.child;
                      if (null !== a) a.return = s;
                      else
                        for (a = s; null !== a; ) {
                          if (a === t) {
                            a = null;
                            break;
                          }
                          if (null !== (s = a.sibling)) {
                            (s.return = a.return), (a = s);
                            break;
                          }
                          a = a.return;
                        }
                      s = a;
                    }
                ka(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                _i(t, n),
                (r = r((o = xi(o)))),
                (t.flags |= 1),
                ka(e, t, r, n),
                t.child
              );
            case 14:
              return (o = yi((r = t.type), t.pendingProps)), Ta(e, t, r, (o = yi(r.type, o)), n);
            case 15:
              return Sa(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : yi(r, o)),
                qa(e, t),
                (t.tag = 1),
                Do(r) ? ((e = !0), Uo(t)) : (e = !1),
                _i(t, n),
                qi(t, r, o),
                Wi(t, r, o, n),
                Oa(null, t, r, !0, e, n)
              );
            case 19:
              return $a(e, t, n);
            case 22:
              return _a(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Ku =
          'function' == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var s = i;
            if ('function' == typeof o) {
              var a = o;
              o = function () {
                var e = Hu(s);
                a.call(e);
              };
            }
            qu(t, s, e, o);
          } else
            s = (function (e, t, n, r, o) {
              if (o) {
                if ('function' == typeof r) {
                  var i = r;
                  r = function () {
                    var e = Hu(s);
                    i.call(e);
                  };
                }
                var s = $u(t, r, e, 0, null, !1, 0, '', Zu);
                return (
                  (e._reactRootContainer = s),
                  (e[mo] = s.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  pu(),
                  s
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' == typeof r) {
                var a = r;
                r = function () {
                  var e = Hu(l);
                  a.call(e);
                };
              }
              var l = Mu(e, 0, !1, null, 0, !1, 0, '', Zu);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                pu(function () {
                  qu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Hu(s);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            qu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                pu(function () {
                  qu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++);
              Dt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = pt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n), ou(t, Je()), 0 == (6 & Ol) && (($l = Je() + 500), $o()));
                }
                break;
              case 13:
                pu(function () {
                  var t = Ai(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Vu(e, 1);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = Ai(e, 134217728);
              null !== t && ru(t, e, 134217728, tu()), Vu(e, 134217728);
            }
          }),
          (Tt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ai(e, t);
              null !== n && ru(n, e, t, tu()), Vu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((X(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = Eo(r);
                      if (!o) throw Error(i(90));
                      V(r), X(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ie(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = cu),
          (Oe = pu);
        var tc = { usingClientEntryPoint: !1, Events: [wo, ko, Eo, xe, Pe, cu] },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (it = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Ju(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: E,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(i(299));
            var n = !1,
              r = '',
              o = Ku;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Mu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' == typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(',')), Error(i(268, e)));
            }
            return null === (e = He(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e) {
            return pu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              s = '',
              a = Ku;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (s = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (t = $u(t, null, e, 1, null != n ? n : null, o, 0, s, a)),
              (e[mo] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (pu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      745: (e, t, n) => {
        'use strict';
        var r = n(935);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      935: (e, t, n) => {
        'use strict';
        !(function e() {
          if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      471: (e, t) => {
        'use strict';
        var n,
          r = Symbol.for('react.element'),
          o = Symbol.for('react.portal'),
          i = Symbol.for('react.fragment'),
          s = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          c = Symbol.for('react.server_context'),
          p = Symbol.for('react.forward_ref'),
          d = Symbol.for('react.suspense'),
          f = Symbol.for('react.suspense_list'),
          h = Symbol.for('react.memo'),
          m = Symbol.for('react.lazy'),
          g = Symbol.for('react.offscreen');
        function y(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case i:
                  case a:
                  case s:
                  case d:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case u:
                      case p:
                      case m:
                      case h:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for('react.module.reference')),
          (t.ContextConsumer = u),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = p),
          (t.Fragment = i),
          (t.Lazy = m),
          (t.Memo = h),
          (t.Portal = o),
          (t.Profiler = a),
          (t.StrictMode = s),
          (t.Suspense = d),
          (t.SuspenseList = f),
          (t.isAsyncMode = function () {
            return !1;
          }),
          (t.isConcurrentMode = function () {
            return !1;
          }),
          (t.isContextConsumer = function (e) {
            return y(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return y(e) === l;
          }),
          (t.isElement = function (e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return y(e) === p;
          }),
          (t.isFragment = function (e) {
            return y(e) === i;
          }),
          (t.isLazy = function (e) {
            return y(e) === m;
          }),
          (t.isMemo = function (e) {
            return y(e) === h;
          }),
          (t.isPortal = function (e) {
            return y(e) === o;
          }),
          (t.isProfiler = function (e) {
            return y(e) === a;
          }),
          (t.isStrictMode = function (e) {
            return y(e) === s;
          }),
          (t.isSuspense = function (e) {
            return y(e) === d;
          }),
          (t.isSuspenseList = function (e) {
            return y(e) === f;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === i ||
              e === a ||
              e === s ||
              e === d ||
              e === f ||
              e === g ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === h ||
                  e.$$typeof === l ||
                  e.$$typeof === u ||
                  e.$$typeof === p ||
                  e.$$typeof === n ||
                  void 0 !== e.getModuleId))
            );
          }),
          (t.typeOf = y);
      },
      143: (e, t, n) => {
        'use strict';
        e.exports = n(471);
      },
      251: (e, t, n) => {
        'use strict';
        var r = n(294),
          o = Symbol.for('react.element'),
          i = Symbol.for('react.fragment'),
          s = Object.prototype.hasOwnProperty,
          a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            s.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return { $$typeof: o, type: e, key: u, ref: c, props: i, _owner: a.current };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      408: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          i = Symbol.for('react.strict_mode'),
          s = Symbol.for('react.profiler'),
          a = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          p = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          f = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          E = Object.prototype.hasOwnProperty,
          T = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var o,
            i = {},
            s = null,
            a = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = '' + t.key), t))
              E.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps) for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
          return { $$typeof: n, type: e, key: s, ref: a, props: i, _owner: T.current };
        }
        function x(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function C(e, t) {
          return 'object' == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function O(e, t, o, i, s) {
          var a = typeof e;
          ('undefined' !== a && 'boolean' !== a) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (a) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = e))),
              (e = '' === i ? '.' + C(l, 0) : i),
              k(s)
                ? ((o = ''),
                  null != e && (o = e.replace(P, '$&/') + '/'),
                  O(s, t, o, '', function (e) {
                    return e;
                  }))
                : null != s &&
                  (x(s) &&
                    (s = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      s,
                      o +
                        (!s.key || (l && l.key === s.key)
                          ? ''
                          : ('' + s.key).replace(P, '$&/') + '/') +
                        e,
                    )),
                  t.push(s)),
              1
            );
          if (((l = 0), (i = '' === i ? '.' : i + ':'), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + C((a = e[u]), u);
              l += O(a, t, o, c, s);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (f && e[f]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' == typeof c)
          )
            for (e = c.call(e), u = 0; !(a = e.next()).done; )
              l += O((a = a.value), t, o, (c = i + C(a, u++)), s);
          else if ('object' === a)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            );
          return l;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function F(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          D = { transition: null },
          L = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: D, ReactCurrentOwner: T };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!x(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = s),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              );
            var o = m({}, e.props),
              i = e.key,
              s = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (a = T.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                E.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return { $$typeof: n, type: e.type, key: i, ref: s, props: o, _owner: a };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: F };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = D.transition;
            D.transition = {};
            try {
              e();
            } finally {
              D.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      294: (e, t, n) => {
        'use strict';
        e.exports = n(408);
      },
      893: (e, t, n) => {
        'use strict';
        e.exports = n(251);
      },
      53: (e, t) => {
        'use strict';
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < i(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, s = o >>> 1; r < s; ) {
              var a = 2 * (r + 1) - 1,
                l = e[a],
                u = a + 1,
                c = e[u];
              if (0 > i(l, n))
                u < o && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[a] = n), (r = a));
              else {
                if (!(u < o && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' == typeof performance && 'function' == typeof performance.now) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var a = Date,
            l = a.now();
          t.unstable_now = function () {
            return a.now() - l;
          };
        }
        var u = [],
          c = [],
          p = 1,
          d = null,
          f = 3,
          h = !1,
          m = !1,
          g = !1,
          y = 'function' == typeof setTimeout ? setTimeout : null,
          v = 'function' == typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), D(E);
            else {
              var t = r(c);
              null !== t && L(k, t.startTime - e);
            }
        }
        function E(e, n) {
          (m = !1), g && ((g = !1), v(x), (x = -1)), (h = !0);
          var i = f;
          try {
            for (w(n), d = r(u); null !== d && (!(d.expirationTime > n) || (e && !O())); ) {
              var s = d.callback;
              if ('function' == typeof s) {
                (d.callback = null), (f = d.priorityLevel);
                var a = s(d.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' == typeof a ? (d.callback = a) : d === r(u) && o(u),
                  w(n);
              } else o(u);
              d = r(u);
            }
            if (null !== d) var l = !0;
            else {
              var p = r(c);
              null !== p && L(k, p.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (f = i), (h = !1);
          }
        }
        'undefined' != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var T,
          S = !1,
          _ = null,
          x = -1,
          P = 5,
          C = -1;
        function O() {
          return !(t.unstable_now() - C < P);
        }
        function A() {
          if (null !== _) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? T() : ((S = !1), (_ = null));
            }
          } else S = !1;
        }
        if ('function' == typeof b)
          T = function () {
            b(A);
          };
        else if ('undefined' != typeof MessageChannel) {
          var F = new MessageChannel(),
            R = F.port2;
          (F.port1.onmessage = A),
            (T = function () {
              R.postMessage(null);
            });
        } else
          T = function () {
            y(A, 0);
          };
        function D(e) {
          (_ = e), S || ((S = !0), T());
        }
        function L(e, n) {
          x = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), D(E));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var s = t.unstable_now();
            switch (
              ((i =
                'object' == typeof i && null !== i && 'number' == typeof (i = i.delay) && 0 < i
                  ? s + i
                  : s),
              e)
            ) {
              case 1:
                var a = -1;
                break;
              case 2:
                a = 250;
                break;
              case 5:
                a = 1073741823;
                break;
              case 4:
                a = 1e4;
                break;
              default:
                a = 5e3;
            }
            return (
              (e = {
                id: p++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (a = i + a),
                sortIndex: -1,
              }),
              i > s
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) && e === r(c) && (g ? (v(x), (x = -1)) : (g = !0), L(k, i - s)))
                : ((e.sortIndex = a), n(u, e), m || h || ((m = !0), D(E))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        'use strict';
        e.exports = n(53);
      },
      774: e => {
        e.exports = function (e, t, n, r) {
          var o = n ? n.call(r, e, t) : void 0;
          if (void 0 !== o) return !!o;
          if (e === t) return !0;
          if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
          var i = Object.keys(e),
            s = Object.keys(t);
          if (i.length !== s.length) return !1;
          for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
            var u = i[l];
            if (!a(u)) return !1;
            var c = e[u],
              p = t[u];
            if (!1 === (o = n ? n.call(r, c, p, u) : void 0) || (void 0 === o && c !== p))
              return !1;
          }
          return !0;
        };
      },
      379: e => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, s = [], a = 0; a < e.length; a++) {
            var l = e[a],
              u = r.base ? l[0] + r.base : l[0],
              c = i[u] || 0,
              p = ''.concat(u, ' ').concat(c);
            i[u] = c + 1;
            var d = n(p),
              f = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
            if (-1 !== d) t[d].references++, t[d].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = a), t.splice(a, 0, { identifier: p, updater: h, references: 1 });
            }
            s.push(p);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < i.length; s++) {
              var a = n(i[s]);
              t[a].references--;
            }
            for (var l = r(e, o), u = 0; u < i.length; u++) {
              var c = n(i[u]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = l;
          };
        };
      },
      569: e => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: e => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: e => {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */',
                  )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: e => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      848: (e, t, n) => {
        var r = n(139);
        function o(e, t) {
          var n,
            o = null;
          if (!e || 'string' != typeof e) return o;
          for (var i, s, a = r(e), l = 'function' == typeof t, u = 0, c = a.length; u < c; u++)
            (i = (n = a[u]).property),
              (s = n.value),
              l ? t(i, s, n) : s && (o || (o = {}), (o[i] = s));
          return o;
        }
        (e.exports = o), (e.exports.default = o);
      },
      479: e => {
        e.exports = function e(t, n) {
          if (t && n) return e(t)(n);
          if ('function' != typeof t) throw new TypeError('need wrapper function');
          return (
            Object.keys(t).forEach(function (e) {
              r[e] = t[e];
            }),
            r
          );
          function r() {
            for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
            var r = t.apply(this, e),
              o = e[e.length - 1];
            return (
              'function' == typeof r &&
                r !== o &&
                Object.keys(o).forEach(function (e) {
                  r[e] = o[e];
                }),
              r
            );
          }
        };
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { id: e, exports: {} });
    return n[e](i, i.exports, o), i.exports;
  }
  (o.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (o.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ('object' == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && 'function' == typeof n.then) return n;
      }
      var i = Object.create(null);
      o.r(i);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & r && n; 'object' == typeof a && !~e.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach(e => (s[e] = () => n[e]));
      return (s.default = () => n), o.d(i, s), i;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.nc = void 0),
    (() => {
      'use strict';
      var e = {};
      o.r(e),
        o.d(e, {
          attentionMarkers: () => ma,
          contentInitial: () => ua,
          disable: () => ga,
          document: () => la,
          flow: () => pa,
          flowInitial: () => ca,
          insideSpan: () => ha,
          string: () => da,
          text: () => fa,
        });
      var t = {};
      o.r(t),
        o.d(t, {
          boolean: () => al,
          booleanish: () => ll,
          commaOrSpaceSeparated: () => fl,
          commaSeparated: () => dl,
          number: () => cl,
          overloadedBoolean: () => ul,
          spaceSeparated: () => pl,
        });
      var n,
        r = o(294),
        i = o.t(r, 2),
        s = o(745),
        a = o(379),
        l = o.n(a),
        u = o(795),
        c = o.n(u),
        p = o(569),
        d = o.n(p),
        f = o(565),
        h = o.n(f),
        m = o(216),
        g = o.n(m),
        y = o(589),
        v = o.n(y),
        b = o(424),
        w = {};
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      (w.styleTagTransform = v()),
        (w.setAttributes = h()),
        (w.insert = d().bind(null, 'head')),
        (w.domAPI = c()),
        (w.insertStyleElement = g()),
        l()(b.Z, w),
        b.Z && b.Z.locals && b.Z.locals,
        (function (e) {
          (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
        })(n || (n = {}));
      const E = 'popstate';
      function T(e, t) {
        if (!1 === e || null == e) throw new Error(t);
      }
      function S(e, t) {
        if (!e) {
          'undefined' != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      function _(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function x(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          k(
            { pathname: 'string' == typeof e ? e : e.pathname, search: '', hash: '' },
            'string' == typeof t ? C(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) },
          )
        );
      }
      function P(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function C(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      var O;
      function A(e, t, n) {
        void 0 === n && (n = '/');
        let r = q(('string' == typeof t ? C(t) : t).pathname || '/', n);
        if (null == r) return null;
        let o = F(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map(e => e.childrenIndex),
                  t.routesMeta.map(e => e.childrenIndex),
                ),
          );
        })(o);
        let i = null;
        for (let e = 0; null == i && e < o.length; ++e) i = M(o[e], $(r));
        return i;
      }
      function F(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let o = (e, o, i) => {
          let s = {
            relativePath: void 0 === i ? e.path || '' : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          s.relativePath.startsWith('/') &&
            (T(
              s.relativePath.startsWith(r),
              'Absolute route path "' +
                s.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (s.relativePath = s.relativePath.slice(r.length)));
          let a = K([r, s.relativePath]),
            l = n.concat(s);
          e.children &&
            e.children.length > 0 &&
            (T(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                a +
                '".',
            ),
            F(e.children, t, l, a)),
            (null != e.path || e.index) && t.push({ path: a, score: N(a, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let n of R(e.path)) o(e, t, n);
            else o(e, t);
          }),
          t
        );
      }
      function R(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith('?'),
          i = n.replace(/\?$/, '');
        if (0 === r.length) return o ? [i, ''] : [i];
        let s = R(r.join('/')),
          a = [];
        return (
          a.push(...s.map(e => ('' === e ? i : [i, e].join('/')))),
          o && a.push(...s),
          a.map(t => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(O || (O = {})),
        new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      const D = /^:\w+$/,
        L = 3,
        G = 2,
        I = 1,
        U = 10,
        z = -2,
        j = e => '*' === e;
      function N(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(j) && (r += z),
          t && (r += G),
          n.filter(e => !j(e)).reduce((e, t) => e + (D.test(t) ? L : '' === t ? I : U), r)
        );
      }
      function M(e, t) {
        let { routesMeta: n } = e,
          r = {},
          o = '/',
          i = [];
        for (let e = 0; e < n.length; ++e) {
          let s = n[e],
            a = e === n.length - 1,
            l = '/' === o ? t : t.slice(o.length) || '/',
            u = B({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, l);
          if (!u) return null;
          Object.assign(r, u.params);
          let c = s.route;
          i.push({
            params: r,
            pathname: K([o, u.pathname]),
            pathnameBase: Q(K([o, u.pathnameBase])),
            route: c,
          }),
            '/' !== u.pathnameBase && (o = K([o, u.pathnameBase]));
        }
        return i;
      }
      function B(e, t) {
        'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1),
              void 0 === n && (n = !0),
              S(
                '*' === e || !e.endsWith('*') || e.endsWith('/*'),
                'Route path "' +
                  e +
                  '" will be treated as if it were "' +
                  e.replace(/\*$/, '/*') +
                  '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                  e.replace(/\*$/, '/*') +
                  '".',
              );
            let r = [],
              o =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/\/:(\w+)/g, (e, t) => (r.push(t), '/([^\\/]+)'));
            return (
              e.endsWith('*')
                ? (r.push('*'), (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
                : n
                ? (o += '\\/*$')
                : '' !== e && '/' !== e && (o += '(?:(?=\\/|$))'),
              [new RegExp(o, t ? void 0 : 'i'), r]
            );
          })(e.path, e.caseSensitive, e.end),
          o = t.match(n);
        if (!o) return null;
        let i = o[0],
          s = i.replace(/(.)\/+$/, '$1'),
          a = o.slice(1),
          l = r.reduce((e, t, n) => {
            if ('*' === t) {
              let e = a[n] || '';
              s = i.slice(0, i.length - e.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    S(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ').',
                    ),
                    e
                  );
                }
              })(a[n] || '', t)),
              e
            );
          }, {});
        return { params: l, pathname: i, pathnameBase: s, pattern: e };
      }
      function $(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            S(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          );
        }
      }
      function q(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function H(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function W(e) {
        return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      }
      function V(e, t, n, r) {
        let o;
        void 0 === r && (r = !1),
          'string' == typeof e
            ? (o = C(e))
            : ((o = k({}, e)),
              T(!o.pathname || !o.pathname.includes('?'), H('?', 'pathname', 'search', o)),
              T(!o.pathname || !o.pathname.includes('#'), H('#', 'pathname', 'hash', o)),
              T(!o.search || !o.search.includes('#'), H('#', 'search', 'hash', o)));
        let i,
          s = '' === e || '' === o.pathname,
          a = s ? '/' : o.pathname;
        if (r || null == a) i = n;
        else {
          let e = t.length - 1;
          if (a.startsWith('..')) {
            let t = a.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            o.pathname = t.join('/');
          }
          i = e >= 0 ? t[e] : '/';
        }
        let l = (function (e, t) {
            void 0 === t && (t = '/');
            let { pathname: n, search: r = '', hash: o = '' } = 'string' == typeof e ? C(e) : e,
              i = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach(e => {
                          '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: i, search: Y(r), hash: J(o) };
          })(o, i),
          u = a && '/' !== a && a.endsWith('/'),
          c = (s || '.' === a) && n.endsWith('/');
        return l.pathname.endsWith('/') || (!u && !c) || (l.pathname += '/'), l;
      }
      const K = e => e.join('/').replace(/\/\/+/g, '/'),
        Q = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        Y = e => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        J = e => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      const X = ['post', 'put', 'patch', 'delete'],
        Z = (new Set(X), ['get', ...X]);
      function ee() {
        return (
          (ee = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ee.apply(this, arguments)
        );
      }
      new Set(Z), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), Symbol('deferred');
      const te = r.createContext(null),
        ne = r.createContext(null),
        re = r.createContext(null),
        oe = r.createContext(null),
        ie = r.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        se = r.createContext(null);
      function ae() {
        return null != r.useContext(oe);
      }
      function le() {
        return ae() || T(!1), r.useContext(oe).location;
      }
      function ue(e) {
        r.useContext(re).static || r.useLayoutEffect(e);
      }
      function ce() {
        let { isDataRoute: e } = r.useContext(ie);
        return e
          ? (function () {
              let { router: e } = (function (e) {
                  let t = r.useContext(te);
                  return t || T(!1), t;
                })(ye.UseNavigateStable),
                t = be(ve.UseNavigateStable),
                n = r.useRef(!1);
              ue(() => {
                n.current = !0;
              });
              let o = r.useCallback(
                function (r, o) {
                  void 0 === o && (o = {}),
                    n.current &&
                      ('number' == typeof r
                        ? e.navigate(r)
                        : e.navigate(r, ee({ fromRouteId: t }, o)));
                },
                [e, t],
              );
              return o;
            })()
          : (function () {
              ae() || T(!1);
              let e = r.useContext(te),
                { basename: t, navigator: n } = r.useContext(re),
                { matches: o } = r.useContext(ie),
                { pathname: i } = le(),
                s = JSON.stringify(W(o).map(e => e.pathnameBase)),
                a = r.useRef(!1);
              ue(() => {
                a.current = !0;
              });
              let l = r.useCallback(
                function (r, o) {
                  if ((void 0 === o && (o = {}), !a.current)) return;
                  if ('number' == typeof r) return void n.go(r);
                  let l = V(r, JSON.parse(s), i, 'path' === o.relative);
                  null == e &&
                    '/' !== t &&
                    (l.pathname = '/' === l.pathname ? t : K([t, l.pathname])),
                    (o.replace ? n.replace : n.push)(l, o.state, o);
                },
                [t, n, s, i, e],
              );
              return l;
            })();
      }
      function pe(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { matches: o } = r.useContext(ie),
          { pathname: i } = le(),
          s = JSON.stringify(W(o).map(e => e.pathnameBase));
        return r.useMemo(() => V(e, JSON.parse(s), i, 'path' === n), [e, s, i, n]);
      }
      function de(e, t, o) {
        ae() || T(!1);
        let { navigator: i } = r.useContext(re),
          { matches: s } = r.useContext(ie),
          a = s[s.length - 1],
          l = a ? a.params : {},
          u = (a && a.pathname, a ? a.pathnameBase : '/');
        a && a.route;
        let c,
          p = le();
        if (t) {
          var d;
          let e = 'string' == typeof t ? C(t) : t;
          '/' === u || (null == (d = e.pathname) ? void 0 : d.startsWith(u)) || T(!1), (c = e);
        } else c = p;
        let f = c.pathname || '/',
          h = A(e, { pathname: '/' === u ? f : f.slice(u.length) || '/' }),
          m = (function (e, t, n) {
            var o;
            if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
              var i;
              if (null == (i = n) || !i.errors) return null;
              e = n.matches;
            }
            let s = e,
              a = null == (o = n) ? void 0 : o.errors;
            if (null != a) {
              let e = s.findIndex(e => e.route.id && (null == a ? void 0 : a[e.route.id]));
              e >= 0 || T(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
            }
            return s.reduceRight((e, o, i) => {
              let l = o.route.id ? (null == a ? void 0 : a[o.route.id]) : null,
                u = null;
              n && (u = o.route.errorElement || he);
              let c = t.concat(s.slice(0, i + 1)),
                p = () => {
                  let t;
                  return (
                    (t = l
                      ? u
                      : o.route.Component
                      ? r.createElement(o.route.Component, null)
                      : o.route.element
                      ? o.route.element
                      : e),
                    r.createElement(ge, {
                      match: o,
                      routeContext: { outlet: e, matches: c, isDataRoute: null != n },
                      children: t,
                    })
                  );
                };
              return n && (o.route.ErrorBoundary || o.route.errorElement || 0 === i)
                ? r.createElement(me, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: u,
                    error: l,
                    children: p(),
                    routeContext: { outlet: null, matches: c, isDataRoute: !0 },
                  })
                : p();
            }, null);
          })(
            h &&
              h.map(e =>
                Object.assign({}, e, {
                  params: Object.assign({}, l, e.params),
                  pathname: K([
                    u,
                    i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname,
                  ]),
                  pathnameBase:
                    '/' === e.pathnameBase
                      ? u
                      : K([
                          u,
                          i.encodeLocation
                            ? i.encodeLocation(e.pathnameBase).pathname
                            : e.pathnameBase,
                        ]),
                }),
              ),
            s,
            o,
          );
        return t && m
          ? r.createElement(
              oe.Provider,
              {
                value: {
                  location: ee(
                    { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                    c,
                  ),
                  navigationType: n.Pop,
                },
              },
              m,
            )
          : m;
      }
      function fe() {
        let e = (function () {
            var e;
            let t = r.useContext(se),
              n = (function (e) {
                let t = r.useContext(ne);
                return t || T(!1), t;
              })(ve.UseRouteError),
              o = be(ve.UseRouteError);
            return t || (null == (e = n.errors) ? void 0 : e[o]);
          })(),
          t = (function (e) {
            return (
              null != e &&
              'number' == typeof e.status &&
              'string' == typeof e.statusText &&
              'boolean' == typeof e.internal &&
              'data' in e
            );
          })(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement('h2', null, 'Unexpected Application Error!'),
          r.createElement('h3', { style: { fontStyle: 'italic' } }, t),
          n ? r.createElement('pre', { style: o }, n) : null,
          null,
        );
      }
      const he = r.createElement(fe, null);
      class me extends r.Component {
        constructor(e) {
          super(e),
            (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error('React Router caught the following error during render', e, t);
        }
        render() {
          return this.state.error
            ? r.createElement(
                ie.Provider,
                { value: this.props.routeContext },
                r.createElement(se.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function ge(e) {
        let { routeContext: t, match: n, children: o } = e,
          i = r.useContext(te);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
          r.createElement(ie.Provider, { value: t }, o)
        );
      }
      var ye = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(ye || {}),
        ve = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(ve || {});
      function be(e) {
        let t = (function (e) {
            let t = r.useContext(ie);
            return t || T(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || T(!1), n.route.id;
      }
      function we(e) {
        T(!1);
      }
      function ke(e) {
        let {
          basename: t = '/',
          children: o = null,
          location: i,
          navigationType: s = n.Pop,
          navigator: a,
          static: l = !1,
        } = e;
        ae() && T(!1);
        let u = t.replace(/^\/*/, '/'),
          c = r.useMemo(() => ({ basename: u, navigator: a, static: l }), [u, a, l]);
        'string' == typeof i && (i = C(i));
        let {
            pathname: p = '/',
            search: d = '',
            hash: f = '',
            state: h = null,
            key: m = 'default',
          } = i,
          g = r.useMemo(() => {
            let e = q(p, u);
            return null == e
              ? null
              : {
                  location: { pathname: e, search: d, hash: f, state: h, key: m },
                  navigationType: s,
                };
          }, [u, p, d, f, h, m, s]);
        return null == g
          ? null
          : r.createElement(
              re.Provider,
              { value: c },
              r.createElement(oe.Provider, { children: o, value: g }),
            );
      }
      function Ee(e) {
        let { children: t, location: n } = e;
        return (function (e, t) {
          return de(e, t);
        })(Te(t), n);
      }
      function Te(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          r.Children.forEach(e, (e, o) => {
            if (!r.isValidElement(e)) return;
            let i = [...t, o];
            if (e.type === r.Fragment) return void n.push.apply(n, Te(e.props.children, i));
            e.type !== we && T(!1), e.props.index && e.props.children && T(!1);
            let s = {
              id: e.props.id || i.join('-'),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (s.children = Te(e.props.children, i)), n.push(s);
          }),
          n
        );
      }
      function Se() {
        return (
          (Se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Se.apply(this, arguments)
        );
      }
      i.startTransition,
        new Promise(() => {}),
        r.Component,
        new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      const _e = [
          'onClick',
          'relative',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
          'preventScrollReset',
        ],
        xe = i.startTransition;
      function Pe(e) {
        let { basename: t, children: o, future: i, window: s } = e,
          a = r.useRef();
        null == a.current &&
          (a.current = (function (e) {
            return (
              void 0 === e && (e = {}),
              (function (e, t, r, o) {
                void 0 === o && (o = {});
                let { window: i = document.defaultView, v5Compat: s = !1 } = o,
                  a = i.history,
                  l = n.Pop,
                  u = null,
                  c = p();
                function p() {
                  return (a.state || { idx: null }).idx;
                }
                function d() {
                  l = n.Pop;
                  let e = p(),
                    t = null == e ? null : e - c;
                  (c = e), u && u({ action: l, location: h.location, delta: t });
                }
                function f(e) {
                  let t = 'null' !== i.location.origin ? i.location.origin : i.location.href,
                    n = 'string' == typeof e ? e : P(e);
                  return (
                    T(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
                    new URL(n, t)
                  );
                }
                null == c && ((c = 0), a.replaceState(k({}, a.state, { idx: c }), ''));
                let h = {
                  get action() {
                    return l;
                  },
                  get location() {
                    return e(i, a);
                  },
                  listen(e) {
                    if (u) throw new Error('A history only accepts one active listener');
                    return (
                      i.addEventListener(E, d),
                      (u = e),
                      () => {
                        i.removeEventListener(E, d), (u = null);
                      }
                    );
                  },
                  createHref: e => t(i, e),
                  createURL: f,
                  encodeLocation(e) {
                    let t = f(e);
                    return { pathname: t.pathname, search: t.search, hash: t.hash };
                  },
                  push: function (e, t) {
                    l = n.Push;
                    let o = x(h.location, e, t);
                    r && r(o, e), (c = p() + 1);
                    let d = _(o, c),
                      f = h.createHref(o);
                    try {
                      a.pushState(d, '', f);
                    } catch (e) {
                      if (e instanceof DOMException && 'DataCloneError' === e.name) throw e;
                      i.location.assign(f);
                    }
                    s && u && u({ action: l, location: h.location, delta: 1 });
                  },
                  replace: function (e, t) {
                    l = n.Replace;
                    let o = x(h.location, e, t);
                    r && r(o, e), (c = p());
                    let i = _(o, c),
                      d = h.createHref(o);
                    a.replaceState(i, '', d),
                      s && u && u({ action: l, location: h.location, delta: 0 });
                  },
                  go: e => a.go(e),
                };
                return h;
              })(
                function (e, t) {
                  let {
                    pathname: n = '/',
                    search: r = '',
                    hash: o = '',
                  } = C(e.location.hash.substr(1));
                  return (
                    n.startsWith('/') || n.startsWith('.') || (n = '/' + n),
                    x(
                      '',
                      { pathname: n, search: r, hash: o },
                      (t.state && t.state.usr) || null,
                      (t.state && t.state.key) || 'default',
                    )
                  );
                },
                function (e, t) {
                  let n = e.document.querySelector('base'),
                    r = '';
                  if (n && n.getAttribute('href')) {
                    let t = e.location.href,
                      n = t.indexOf('#');
                    r = -1 === n ? t : t.slice(0, n);
                  }
                  return r + '#' + ('string' == typeof t ? t : P(t));
                },
                function (e, t) {
                  S(
                    '/' === e.pathname.charAt(0),
                    'relative pathnames are not supported in hash history.push(' +
                      JSON.stringify(t) +
                      ')',
                  );
                },
                e,
              )
            );
          })({ window: s, v5Compat: !0 }));
        let l = a.current,
          [u, c] = r.useState({ action: l.action, location: l.location }),
          { v7_startTransition: p } = i || {},
          d = r.useCallback(
            e => {
              p && xe ? xe(() => c(e)) : c(e);
            },
            [c, p],
          );
        return (
          r.useLayoutEffect(() => l.listen(d), [l, d]),
          r.createElement(ke, {
            basename: t,
            children: o,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      const Ce =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        Oe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ae = r.forwardRef(function (e, t) {
          let n,
            {
              onClick: o,
              relative: i,
              reloadDocument: s,
              replace: a,
              state: l,
              target: u,
              to: c,
              preventScrollReset: p,
            } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, _e),
            { basename: f } = r.useContext(re),
            h = !1;
          if ('string' == typeof c && Oe.test(c) && ((n = c), Ce))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith('//') ? new URL(e.protocol + c) : new URL(c),
                n = q(t.pathname, f);
              t.origin === e.origin && null != n ? (c = n + t.search + t.hash) : (h = !0);
            } catch (e) {}
          let m = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              ae() || T(!1);
              let { basename: o, navigator: i } = r.useContext(re),
                { hash: s, pathname: a, search: l } = pe(e, { relative: n }),
                u = a;
              return (
                '/' !== o && (u = '/' === a ? o : K([o, a])),
                i.createHref({ pathname: u, search: l, hash: s })
              );
            })(c, { relative: i }),
            g = (function (e, t) {
              let {
                  target: n,
                  replace: o,
                  state: i,
                  preventScrollReset: s,
                  relative: a,
                } = void 0 === t ? {} : t,
                l = ce(),
                u = le(),
                c = pe(e, { relative: a });
              return r.useCallback(
                t => {
                  if (
                    (function (e, t) {
                      return !(
                        0 !== e.button ||
                        (t && '_self' !== t) ||
                        (function (e) {
                          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== o ? o : P(u) === P(c);
                    l(e, { replace: n, state: i, preventScrollReset: s, relative: a });
                  }
                },
                [u, l, c, o, i, n, e, s, a],
              );
            })(c, { replace: a, state: l, target: u, preventScrollReset: p, relative: i });
          return r.createElement(
            'a',
            Se({}, d, {
              href: n || m,
              onClick:
                h || s
                  ? o
                  : function (e) {
                      o && o(e), e.defaultPrevented || g(e);
                    },
              ref: t,
              target: u,
            }),
          );
        });
      var Fe, Re;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher');
      })(Fe || (Fe = {})),
        (function (e) {
          (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
        })(Re || (Re = {}));
      var De = function () {
        return (
          (De =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          De.apply(this, arguments)
        );
      };
      function Le(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create, Object.create, 'function' == typeof SuppressedError && SuppressedError;
      var Ge = o(774),
        Ie = o.n(Ge),
        Ue = '-ms-',
        ze = '-moz-',
        je = '-webkit-',
        Ne = 'comm',
        Me = 'rule',
        Be = 'decl',
        $e = '@import',
        qe = '@keyframes',
        He = '@layer',
        We = Math.abs,
        Ve = String.fromCharCode,
        Ke = Object.assign;
      function Qe(e) {
        return e.trim();
      }
      function Ye(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function Je(e, t, n) {
        return e.replace(t, n);
      }
      function Xe(e, t) {
        return e.indexOf(t);
      }
      function Ze(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function et(e, t, n) {
        return e.slice(t, n);
      }
      function tt(e) {
        return e.length;
      }
      function nt(e) {
        return e.length;
      }
      function rt(e, t) {
        return t.push(e), e;
      }
      function ot(e, t) {
        return e.filter(function (e) {
          return !Ye(e, t);
        });
      }
      var it = 1,
        st = 1,
        at = 0,
        lt = 0,
        ut = 0,
        ct = '';
      function pt(e, t, n, r, o, i, s, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: i,
          line: it,
          column: st,
          length: s,
          return: '',
          siblings: a,
        };
      }
      function dt(e, t) {
        return Ke(pt('', null, null, '', null, null, 0, e.siblings), e, { length: -e.length }, t);
      }
      function ft(e) {
        for (; e.root; ) e = dt(e.root, { children: [e] });
        rt(e, e.siblings);
      }
      function ht() {
        return (ut = lt > 0 ? Ze(ct, --lt) : 0), st--, 10 === ut && ((st = 1), it--), ut;
      }
      function mt() {
        return (ut = lt < at ? Ze(ct, lt++) : 0), st++, 10 === ut && ((st = 1), it++), ut;
      }
      function gt() {
        return Ze(ct, lt);
      }
      function yt() {
        return lt;
      }
      function vt(e, t) {
        return et(ct, e, t);
      }
      function bt(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function wt(e) {
        return Qe(vt(lt - 1, Tt(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function kt(e) {
        for (; (ut = gt()) && ut < 33; ) mt();
        return bt(e) > 2 || bt(ut) > 3 ? '' : ' ';
      }
      function Et(e, t) {
        for (
          ;
          --t && mt() && !(ut < 48 || ut > 102 || (ut > 57 && ut < 65) || (ut > 70 && ut < 97));

        );
        return vt(e, yt() + (t < 6 && 32 == gt() && 32 == mt()));
      }
      function Tt(e) {
        for (; mt(); )
          switch (ut) {
            case e:
              return lt;
            case 34:
            case 39:
              34 !== e && 39 !== e && Tt(ut);
              break;
            case 40:
              41 === e && Tt(e);
              break;
            case 92:
              mt();
          }
        return lt;
      }
      function St(e, t) {
        for (; mt() && e + ut !== 57 && (e + ut !== 84 || 47 !== gt()); );
        return '/*' + vt(t, lt - 1) + '*' + Ve(47 === e ? e : mt());
      }
      function _t(e) {
        for (; !bt(gt()); ) mt();
        return vt(e, lt);
      }
      function xt(e, t) {
        for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
        return n;
      }
      function Pt(e, t, n, r) {
        switch (e.type) {
          case He:
            if (e.children.length) break;
          case $e:
          case Be:
            return (e.return = e.return || e.value);
          case Ne:
            return '';
          case qe:
            return (e.return = e.value + '{' + xt(e.children, r) + '}');
          case Me:
            if (!tt((e.value = e.props.join(',')))) return '';
        }
        return tt((n = xt(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
      }
      function Ct(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ Ze(e, 0)
              ? (((((((t << 2) ^ Ze(e, 0)) << 2) ^ Ze(e, 1)) << 2) ^ Ze(e, 2)) << 2) ^ Ze(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return je + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return je + e + e;
          case 4789:
            return ze + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return je + e + ze + e + Ue + e + e;
          case 5936:
            switch (Ze(e, t + 11)) {
              case 114:
                return je + e + Ue + Je(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return je + e + Ue + Je(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return je + e + Ue + Je(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return je + e + Ue + e + e;
          case 6165:
            return je + e + Ue + 'flex-' + e + e;
          case 5187:
            return je + e + Je(e, /(\w+).+(:[^]+)/, je + 'box-$1$2' + Ue + 'flex-$1$2') + e;
          case 5443:
            return (
              je +
              e +
              Ue +
              'flex-item-' +
              Je(e, /flex-|-self/g, '') +
              (Ye(e, /flex-|baseline/) ? '' : Ue + 'grid-row-' + Je(e, /flex-|-self/g, '')) +
              e
            );
          case 4675:
            return je + e + Ue + 'flex-line-pack' + Je(e, /align-content|flex-|-self/g, '') + e;
          case 5548:
            return je + e + Ue + Je(e, 'shrink', 'negative') + e;
          case 5292:
            return je + e + Ue + Je(e, 'basis', 'preferred-size') + e;
          case 6060:
            return je + 'box-' + Je(e, '-grow', '') + je + e + Ue + Je(e, 'grow', 'positive') + e;
          case 4554:
            return je + Je(e, /([^-])(transform)/g, '$1' + je + '$2') + e;
          case 6187:
            return Je(Je(Je(e, /(zoom-|grab)/, je + '$1'), /(image-set)/, je + '$1'), e, '') + e;
          case 5495:
          case 3959:
            return Je(e, /(image-set\([^]*)/, je + '$1$`$1');
          case 4968:
            return (
              Je(
                Je(e, /(.+:)(flex-)?(.*)/, je + 'box-pack:$3' + Ue + 'flex-pack:$3'),
                /s.+-b[^;]+/,
                'justify',
              ) +
              je +
              e +
              e
            );
          case 4200:
            if (!Ye(e, /flex-|baseline/)) return Ue + 'grid-column-align' + et(e, t) + e;
            break;
          case 2592:
          case 3360:
            return Ue + Je(e, 'template-', '') + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), Ye(e.props, /grid-\w+-end/);
              })
              ? ~Xe(e + (n = n[t].value), 'span')
                ? e
                : Ue +
                  Je(e, '-start', '') +
                  e +
                  Ue +
                  'grid-row-span:' +
                  (~Xe(n, 'span') ? Ye(n, /\d+/) : +Ye(n, /\d+/) - +Ye(e, /\d+/)) +
                  ';'
              : Ue + Je(e, '-start', '') + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return Ye(e.props, /grid-\w+-start/);
              })
              ? e
              : Ue + Je(Je(e, '-end', '-span'), 'span ', '') + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Je(e, /(.+)-inline(.+)/, je + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (tt(e) - 1 - t > 6)
              switch (Ze(e, t + 1)) {
                case 109:
                  if (45 !== Ze(e, t + 4)) break;
                case 102:
                  return (
                    Je(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' + je + '$2-$3$1' + ze + (108 == Ze(e, t + 3) ? '$3' : '$2-$3'),
                    ) + e
                  );
                case 115:
                  return ~Xe(e, 'stretch') ? Ct(Je(e, 'stretch', 'fill-available'), t, n) + e : e;
              }
            break;
          case 5152:
          case 5920:
            return Je(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, o, i, s, a) {
                return (
                  Ue + n + ':' + r + a + (o ? Ue + n + '-span:' + (i ? s : +s - +r) + a : '') + e
                );
              },
            );
          case 4949:
            if (121 === Ze(e, t + 6)) return Je(e, ':', ':' + je) + e;
            break;
          case 6444:
            switch (Ze(e, 45 === Ze(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  Je(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    '$1' +
                      je +
                      (45 === Ze(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      je +
                      '$2$3$1' +
                      Ue +
                      '$2box$3',
                  ) + e
                );
              case 100:
                return Je(e, ':', ':' + Ue) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return Je(e, 'scroll-', 'scroll-snap-') + e;
        }
        return e;
      }
      function Ot(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Be:
              return void (e.return = Ct(e.value, e.length, n));
            case qe:
              return xt([dt(e, { value: Je(e.value, '@', '@' + je) })], r);
            case Me:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join('');
                })((n = e.props), function (t) {
                  switch (Ye(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ':read-only':
                    case ':read-write':
                      ft(dt(e, { props: [Je(t, /:(read-\w+)/, ':' + ze + '$1')] })),
                        ft(dt(e, { props: [t] })),
                        Ke(e, { props: ot(n, r) });
                      break;
                    case '::placeholder':
                      ft(dt(e, { props: [Je(t, /:(plac\w+)/, ':' + je + 'input-$1')] })),
                        ft(dt(e, { props: [Je(t, /:(plac\w+)/, ':' + ze + '$1')] })),
                        ft(dt(e, { props: [Je(t, /:(plac\w+)/, Ue + 'input-$1')] })),
                        ft(dt(e, { props: [t] })),
                        Ke(e, { props: ot(n, r) });
                  }
                  return '';
                });
          }
      }
      function At(e) {
        return (function (e) {
          return (ct = ''), e;
        })(
          Ft(
            '',
            null,
            null,
            null,
            [''],
            (e = (function (e) {
              return (it = st = 1), (at = tt((ct = e))), (lt = 0), [];
            })(e)),
            0,
            [0],
            e,
          ),
        );
      }
      function Ft(e, t, n, r, o, i, s, a, l) {
        for (
          var u = 0,
            c = 0,
            p = s,
            d = 0,
            f = 0,
            h = 0,
            m = 1,
            g = 1,
            y = 1,
            v = 0,
            b = '',
            w = o,
            k = i,
            E = r,
            T = b;
          g;

        )
          switch (((h = v), (v = mt()))) {
            case 40:
              if (108 != h && 58 == Ze(T, p - 1)) {
                -1 != Xe((T += Je(wt(v), '&', '&\f')), '&\f') && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              T += wt(v);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              T += kt(h);
              break;
            case 92:
              T += Et(yt() - 1, 7);
              continue;
            case 47:
              switch (gt()) {
                case 42:
                case 47:
                  rt(Dt(St(mt(), yt()), t, n, l), l);
                  break;
                default:
                  T += '/';
              }
              break;
            case 123 * m:
              a[u++] = tt(T) * y;
            case 125 * m:
            case 59:
            case 0:
              switch (v) {
                case 0:
                case 125:
                  g = 0;
                case 59 + c:
                  -1 == y && (T = Je(T, /\f/g, '')),
                    f > 0 &&
                      tt(T) - p &&
                      rt(
                        f > 32
                          ? Lt(T + ';', r, n, p - 1, l)
                          : Lt(Je(T, ' ', '') + ';', r, n, p - 2, l),
                        l,
                      );
                  break;
                case 59:
                  T += ';';
                default:
                  if (
                    (rt((E = Rt(T, t, n, u, c, o, a, b, (w = []), (k = []), p, i)), i), 123 === v)
                  )
                    if (0 === c) Ft(T, t, E, E, w, i, p, a, k);
                    else
                      switch (99 === d && 110 === Ze(T, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Ft(
                            e,
                            E,
                            E,
                            r && rt(Rt(e, E, E, 0, 0, o, a, b, o, (w = []), p, k), k),
                            o,
                            k,
                            p,
                            a,
                            r ? w : k,
                          );
                          break;
                        default:
                          Ft(T, E, E, E, [''], k, 0, a, k);
                      }
              }
              (u = c = f = 0), (m = y = 1), (b = T = ''), (p = s);
              break;
            case 58:
              (p = 1 + tt(T)), (f = h);
            default:
              if (m < 1)
                if (123 == v) --m;
                else if (125 == v && 0 == m++ && 125 == ht()) continue;
              switch (((T += Ve(v)), v * m)) {
                case 38:
                  y = c > 0 ? 1 : ((T += '\f'), -1);
                  break;
                case 44:
                  (a[u++] = (tt(T) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === gt() && (T += wt(mt())),
                    (d = gt()),
                    (c = p = tt((b = T += _t(yt())))),
                    v++;
                  break;
                case 45:
                  45 === h && 2 == tt(T) && (m = 0);
              }
          }
        return i;
      }
      function Rt(e, t, n, r, o, i, s, a, l, u, c, p) {
        for (var d = o - 1, f = 0 === o ? i : [''], h = nt(f), m = 0, g = 0, y = 0; m < r; ++m)
          for (var v = 0, b = et(e, d + 1, (d = We((g = s[m])))), w = e; v < h; ++v)
            (w = Qe(g > 0 ? f[v] + ' ' + b : Je(b, /&\f/g, f[v]))) && (l[y++] = w);
        return pt(e, t, n, 0 === o ? Me : a, l, u, c, p);
      }
      function Dt(e, t, n, r) {
        return pt(e, t, n, Ne, Ve(ut), et(e, 2, -2), 0, r);
      }
      function Lt(e, t, n, r, o) {
        return pt(e, t, n, Be, et(e, 0, r), et(e, r + 1, -1), r, o);
      }
      var Gt = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        It =
          ('undefined' != typeof process &&
            ('MISSING_ENV_VAR'.REACT_APP_SC_ATTR || 'MISSING_ENV_VAR'.SC_ATTR)) ||
          'data-styled',
        Ut = 'undefined' != typeof window && 'HTMLElement' in window,
        zt = Boolean(
          'boolean' == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : 'undefined' != typeof process &&
              void 0 !== 'MISSING_ENV_VAR'.REACT_APP_SC_DISABLE_SPEEDY &&
              '' !== 'MISSING_ENV_VAR'.REACT_APP_SC_DISABLE_SPEEDY
            ? 'false' !== 'MISSING_ENV_VAR'.REACT_APP_SC_DISABLE_SPEEDY &&
              'MISSING_ENV_VAR'.REACT_APP_SC_DISABLE_SPEEDY
            : 'undefined' != typeof process &&
              void 0 !== 'MISSING_ENV_VAR'.SC_DISABLE_SPEEDY &&
              '' !== 'MISSING_ENV_VAR'.SC_DISABLE_SPEEDY &&
              'false' !== 'MISSING_ENV_VAR'.SC_DISABLE_SPEEDY &&
              'MISSING_ENV_VAR'.SC_DISABLE_SPEEDY,
        ),
        jt = (new Set(), Object.freeze([])),
        Nt = Object.freeze({});
      var Mt = new Set([
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'use',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'marker',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ]),
        Bt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        $t = /(^-|-$)/g;
      function qt(e) {
        return e.replace(Bt, '-').replace($t, '');
      }
      var Ht = /(a)(d)/gi,
        Wt = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Vt(e) {
        var t,
          n = '';
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Wt(t % 52) + n;
        return (Wt(t % 52) + n).replace(Ht, '$1-$2');
      }
      var Kt,
        Qt = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Yt = function (e) {
          return Qt(5381, e);
        };
      function Jt(e) {
        return 'string' == typeof e && !0;
      }
      var Xt = 'function' == typeof Symbol && Symbol.for,
        Zt = Xt ? Symbol.for('react.memo') : 60115,
        en = Xt ? Symbol.for('react.forward_ref') : 60112,
        tn = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        nn = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        rn = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        on =
          (((Kt = {})[en] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Kt[Zt] = rn),
          Kt);
      function sn(e) {
        return ('type' in (t = e) && t.type.$$typeof) === Zt
          ? rn
          : '$$typeof' in e
          ? on[e.$$typeof]
          : tn;
        var t;
      }
      var an = Object.defineProperty,
        ln = Object.getOwnPropertyNames,
        un = Object.getOwnPropertySymbols,
        cn = Object.getOwnPropertyDescriptor,
        pn = Object.getPrototypeOf,
        dn = Object.prototype;
      function fn(e, t, n) {
        if ('string' != typeof t) {
          if (dn) {
            var r = pn(t);
            r && r !== dn && fn(e, r, n);
          }
          var o = ln(t);
          un && (o = o.concat(un(t)));
          for (var i = sn(e), s = sn(t), a = 0; a < o.length; ++a) {
            var l = o[a];
            if (!(l in nn || (n && n[l]) || (s && l in s) || (i && l in i))) {
              var u = cn(t, l);
              try {
                an(e, l, u);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function hn(e) {
        return 'function' == typeof e;
      }
      function mn(e) {
        return 'object' == typeof e && 'styledComponentId' in e;
      }
      function gn(e, t) {
        return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
      }
      function yn(e, t) {
        if (0 === e.length) return '';
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function vn(e) {
        return (
          null !== e &&
          'object' == typeof e &&
          e.constructor.name === Object.name &&
          !('props' in e && e.$$typeof)
        );
      }
      function bn(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !vn(e) && !Array.isArray(e))) return t;
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = bn(e[r], t[r]);
        else if (vn(t)) for (var r in t) e[r] = bn(e[r], t[r]);
        return e;
      }
      function wn(e, t) {
        Object.defineProperty(e, 'toString', { value: t });
      }
      function kn(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new Error(
          'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
            .concat(e, ' for more information.')
            .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : ''),
        );
      }
      var En = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                  if ((o <<= 1) < 0) throw kn(16, ''.concat(e));
                (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(n), (this.length = o);
                for (var i = r; i < o; i++) this.groupSizes[i] = 0;
              }
              for (var s = this.indexOfGroup(e + 1), a = ((i = 0), t.length); i < a; i++)
                this.tag.insertRule(s, t[i]) && (this.groupSizes[e]++, s++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < r; o++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = '';
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r;
                i < o;
                i++
              )
                t += ''.concat(this.tag.getRule(i)).concat('/*!sc*/\n');
              return t;
            }),
            e
          );
        })(),
        Tn = new Map(),
        Sn = new Map(),
        _n = 1,
        xn = function (e) {
          if (Tn.has(e)) return Tn.get(e);
          for (; Sn.has(_n); ) _n++;
          var t = _n++;
          return Tn.set(e, t), Sn.set(t, e), t;
        },
        Pn = function (e, t) {
          Tn.set(e, t), Sn.set(t, e);
        },
        Cn = 'style['.concat(It, '][').concat('data-styled-version', '="').concat('6.0.7', '"]'),
        On = new RegExp('^'.concat(It, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
        An = function (e, t, n) {
          for (var r, o = n.split(','), i = 0, s = o.length; i < s; i++)
            (r = o[i]) && e.registerName(t, r);
        },
        Fn = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : '').split('/*!sc*/\n'),
              o = [],
              i = 0,
              s = r.length;
            i < s;
            i++
          ) {
            var a = r[i].trim();
            if (a) {
              var l = a.match(On);
              if (l) {
                var u = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== u && (Pn(c, u), An(e, c, l[3]), e.getTag().insertRules(u, o)), (o.length = 0);
              } else o.push(a);
            }
          }
        };
      function Rn() {
        return o.nc;
      }
      var Dn = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement('style'),
            o = (function (e) {
              var t = Array.from(e.querySelectorAll('style['.concat(It, ']')));
              return t[t.length - 1];
            })(n),
            i = void 0 !== o ? o.nextSibling : null;
          r.setAttribute(It, 'active'), r.setAttribute('data-styled-version', '6.0.7');
          var s = Rn();
          return s && r.setAttribute('nonce', s), n.insertBefore(r, i), r;
        },
        Ln = (function () {
          function e(e) {
            (this.element = Dn(e)),
              this.element.appendChild(document.createTextNode('')),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                throw kn(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : '';
            }),
            e
          );
        })(),
        Gn = (function () {
          function e(e) {
            (this.element = Dn(e)), (this.nodes = this.element.childNodes), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : '';
            }),
            e
          );
        })(),
        In = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : '';
            }),
            e
          );
        })(),
        Un = Ut,
        zn = { isServer: !Ut, useCSSOMInjection: !zt },
        jn = (function () {
          function e(e, t, n) {
            void 0 === e && (e = Nt), void 0 === t && (t = {});
            var r = this;
            (this.options = De(De({}, zn), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                Ut &&
                Un &&
                ((Un = !1),
                (function (e) {
                  for (var t = document.querySelectorAll(Cn), n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    o &&
                      'active' !== o.getAttribute(It) &&
                      (Fn(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this)),
              wn(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = '',
                      o = function (n) {
                        var o = (function (e) {
                          return Sn.get(e);
                        })(n);
                        if (void 0 === o) return 'continue';
                        var i = e.names.get(o),
                          s = t.getGroup(n);
                        if (void 0 === i || 0 === s.length) return 'continue';
                        var a = ''.concat(It, '.g').concat(n, '[id="').concat(o, '"]'),
                          l = '';
                        void 0 !== i &&
                          i.forEach(function (e) {
                            e.length > 0 && (l += ''.concat(e, ','));
                          }),
                          (r += ''
                            .concat(s)
                            .concat(a, '{content:"')
                            .concat(l, '"}')
                            .concat('/*!sc*/\n'));
                      },
                      i = 0;
                    i < n;
                    i++
                  )
                    o(i);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return xn(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(De(De({}, this.options), t), this.gs, (n && this.names) || void 0)
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new In(n) : t ? new Ln(n) : new Gn(n);
                  })(this.options)),
                  new En(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((xn(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(xn(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(xn(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        Nn = /&/g,
        Mn = /^\s*\/\/.*$/gm;
      function Bn(e, t) {
        return e.map(function (e) {
          return (
            'rule' === e.type &&
              ((e.value = ''.concat(t, ' ').concat(e.value)),
              (e.value = e.value.replaceAll(',', ','.concat(t, ' '))),
              (e.props = e.props.map(function (e) {
                return ''.concat(t, ' ').concat(e);
              }))),
            Array.isArray(e.children) &&
              '@keyframes' !== e.type &&
              (e.children = Bn(e.children, t)),
            e
          );
        });
      }
      function $n(e) {
        var t,
          n,
          r,
          o = void 0 === e ? Nt : e,
          i = o.options,
          s = void 0 === i ? Nt : i,
          a = o.plugins,
          l = void 0 === a ? jt : a,
          u = function (e, r, o) {
            return o === n || (o.startsWith(n) && o.endsWith(n) && o.replaceAll(n, '').length > 0)
              ? '.'.concat(t)
              : e;
          },
          c = l.slice();
        c.push(function (e) {
          e.type === Me &&
            e.value.includes('&') &&
            (e.props[0] = e.props[0].replace(Nn, n).replace(r, u));
        }),
          s.prefix && c.push(Ot),
          c.push(Pt);
        var p = function (e, o, i, a) {
          void 0 === o && (o = ''),
            void 0 === i && (i = ''),
            void 0 === a && (a = '&'),
            (t = a),
            (n = o),
            (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
          var l = e.replace(Mn, ''),
            u = At(i || o ? ''.concat(i, ' ').concat(o, ' { ').concat(l, ' }') : l);
          s.namespace && (u = Bn(u, s.namespace));
          var p,
            d,
            f,
            h = [];
          return (
            xt(
              u,
              ((p = c.concat(
                ((f = function (e) {
                  return h.push(e);
                }),
                function (e) {
                  e.root || ((e = e.return) && f(e));
                }),
              )),
              (d = nt(p)),
              function (e, t, n, r) {
                for (var o = '', i = 0; i < d; i++) o += p[i](e, t, n, r) || '';
                return o;
              }),
            ),
            h
          );
        };
        return (
          (p.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || kn(15), Qt(e, t.name);
                }, 5381)
                .toString()
            : ''),
          p
        );
      }
      var qn = new jn(),
        Hn = $n(),
        Wn = r.createContext({ shouldForwardProp: void 0, styleSheet: qn, stylis: Hn }),
        Vn = (Wn.Consumer, r.createContext(void 0));
      function Kn() {
        return (0, r.useContext)(Wn);
      }
      function Qn(e) {
        var t = (0, r.useState)(e.stylisPlugins),
          n = t[0],
          o = t[1],
          i = Kn().styleSheet,
          s = (0, r.useMemo)(
            function () {
              var t = i;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, i],
          ),
          a = (0, r.useMemo)(
            function () {
              return $n({
                options: { namespace: e.namespace, prefix: e.enableVendorPrefixes },
                plugins: n,
              });
            },
            [e.enableVendorPrefixes, e.namespace, n],
          );
        return (
          (0, r.useEffect)(
            function () {
              Ie()(n, e.stylisPlugins) || o(e.stylisPlugins);
            },
            [e.stylisPlugins],
          ),
          r.createElement(
            Wn.Provider,
            { value: { shouldForwardProp: e.shouldForwardProp, styleSheet: s, stylis: a } },
            r.createElement(Vn.Provider, { value: a }, e.children),
          )
        );
      }
      var Yn = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = Hn);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
            }),
              (this.name = e),
              (this.id = 'sc-keyframes-'.concat(e)),
              (this.rules = t),
              wn(this, function () {
                throw kn(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Hn), this.name + e.hash;
            }),
            e
          );
        })(),
        Jn = function (e) {
          return e >= 'A' && e <= 'Z';
        };
      function Xn(e) {
        for (var t = '', n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && '-' === r && '-' === e[0]) return e;
          Jn(r) ? (t += '-' + r.toLowerCase()) : (t += r);
        }
        return t.startsWith('ms-') ? '-' + t : t;
      }
      var Zn = function (e) {
          return null == e || !1 === e || '' === e;
        },
        er = function (e) {
          var t,
            n,
            r = [];
          for (var o in e) {
            var i = e[o];
            e.hasOwnProperty(o) &&
              !Zn(i) &&
              ((Array.isArray(i) && i.isCss) || hn(i)
                ? r.push(''.concat(Xn(o), ':'), i, ';')
                : vn(i)
                ? r.push.apply(r, Le(Le([''.concat(o, ' {')], er(i), !1), ['}'], !1))
                : r.push(
                    ''
                      .concat(Xn(o), ': ')
                      .concat(
                        ((t = o),
                        null == (n = i) || 'boolean' == typeof n || '' === n
                          ? ''
                          : 'number' != typeof n || 0 === n || t in Gt || t.startsWith('--')
                          ? String(n).trim()
                          : ''.concat(n, 'px')),
                        ';',
                      ),
                  ));
          }
          return r;
        };
      function tr(e, t, n, r) {
        return Zn(e)
          ? []
          : mn(e)
          ? ['.'.concat(e.styledComponentId)]
          : hn(e)
          ? !hn((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t
            ? [e]
            : tr(e(t), t, n, r)
          : e instanceof Yn
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : vn(e)
          ? er(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              jt,
              e.map(function (e) {
                return tr(e, t, n, r);
              }),
            )
          : [e.toString()];
        var o;
      }
      function nr(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (hn(n) && !mn(n)) return !1;
        }
        return !0;
      }
      var rr = Yt('6.0.7'),
        or = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ''),
              (this.isStatic = (void 0 === n || n.isStatic) && nr(e)),
              (this.componentId = t),
              (this.baseHash = Qt(rr, t)),
              (this.baseStyle = n),
              jn.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : '';
              if (this.isStatic && !n.hash)
                if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
                  r = gn(r, this.staticRulesId);
                else {
                  var o = yn(tr(this.rules, e, t, n)),
                    i = Vt(Qt(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(this.componentId, i)) {
                    var s = n(o, '.'.concat(i), void 0, this.componentId);
                    t.insertRules(this.componentId, i, s);
                  }
                  (r = gn(r, i)), (this.staticRulesId = i);
                }
              else {
                for (var a = Qt(this.baseHash, n.hash), l = '', u = 0; u < this.rules.length; u++) {
                  var c = this.rules[u];
                  if ('string' == typeof c) l += c;
                  else if (c) {
                    var p = yn(tr(c, e, t, n));
                    (a = Qt(a, p)), (l += p);
                  }
                }
                if (l) {
                  var d = Vt(a >>> 0);
                  t.hasNameForId(this.componentId, d) ||
                    t.insertRules(
                      this.componentId,
                      d,
                      n(l, '.'.concat(d), void 0, this.componentId),
                    ),
                    (r = gn(r, d));
                }
              }
              return r;
            }),
            e
          );
        })(),
        ir = r.createContext(void 0);
      ir.Consumer;
      var sr = {};
      function ar(e, t, n) {
        var o = mn(e),
          i = e,
          s = !Jt(e),
          a = t.attrs,
          l = void 0 === a ? jt : a,
          u = t.componentId,
          c =
            void 0 === u
              ? (function (e, t) {
                  var n = 'string' != typeof e ? 'sc' : qt(e);
                  sr[n] = (sr[n] || 0) + 1;
                  var r = ''.concat(n, '-').concat(
                    (function (e) {
                      return Vt(Yt(e) >>> 0);
                    })('6.0.7' + n + sr[n]),
                  );
                  return t ? ''.concat(t, '-').concat(r) : r;
                })(t.displayName, t.parentComponentId)
              : u,
          p =
            (void 0 === t.displayName &&
              (function (e) {
                Jt(e)
                  ? 'styled.'.concat(e)
                  : 'Styled('.concat(
                      (function (e) {
                        return e.displayName || e.name || 'Component';
                      })(e),
                      ')',
                    );
              })(e),
            t.displayName && t.componentId
              ? ''.concat(qt(t.displayName), '-').concat(t.componentId)
              : t.componentId || c),
          d = o && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
          f = t.shouldForwardProp;
        if (o && i.shouldForwardProp) {
          var h = i.shouldForwardProp;
          if (t.shouldForwardProp) {
            var m = t.shouldForwardProp;
            f = function (e, t) {
              return h(e, t) && m(e, t);
            };
          } else f = h;
        }
        var g = new or(n, p, o ? i.componentStyle : void 0),
          y = r.forwardRef(function (e, t) {
            return (function (e, t, n) {
              var o = e.attrs,
                i = e.componentStyle,
                s = e.defaultProps,
                a = e.foldedComponentIds,
                l = e.styledComponentId,
                u = e.target,
                c = r.useContext(ir),
                p = Kn(),
                d = e.shouldForwardProp || p.shouldForwardProp,
                f = (function (e, t, n) {
                  for (
                    var r, o = De(De({}, t), { className: void 0, theme: n }), i = 0;
                    i < e.length;
                    i += 1
                  ) {
                    var s = hn((r = e[i])) ? r(o) : r;
                    for (var a in s)
                      o[a] =
                        'className' === a
                          ? gn(o[a], s[a])
                          : 'style' === a
                          ? De(De({}, o[a]), s[a])
                          : s[a];
                  }
                  return t.className && (o.className = gn(o.className, t.className)), o;
                })(
                  o,
                  t,
                  (function (e, t, n) {
                    return (
                      void 0 === n && (n = Nt), (e.theme !== n.theme && e.theme) || t || n.theme
                    );
                  })(t, c, s) || Nt,
                ),
                h = f.as || u,
                m = {};
              for (var g in f)
                void 0 === f[g] ||
                  '$' === g[0] ||
                  'as' === g ||
                  'theme' === g ||
                  ('forwardedAs' === g ? (m.as = f.forwardedAs) : (d && !d(g, h)) || (m[g] = f[g]));
              var y = (function (e, t) {
                  var n = Kn();
                  return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
                })(i, f),
                v = gn(a, l);
              return (
                y && (v += ' ' + y),
                f.className && (v += ' ' + f.className),
                (m[Jt(h) && !Mt.has(h) ? 'class' : 'className'] = v),
                (m.ref = n),
                (0, r.createElement)(h, m)
              );
            })(y, e, t);
          });
        return (
          (y.attrs = d),
          (y.componentStyle = g),
          (y.shouldForwardProp = f),
          (y.foldedComponentIds = o ? gn(i.foldedComponentIds, i.styledComponentId) : ''),
          (y.styledComponentId = p),
          (y.target = o ? i.target : e),
          Object.defineProperty(y, 'defaultProps', {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = o
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    for (var r = 0, o = t; r < o.length; r++) bn(e, o[r], !0);
                    return e;
                  })({}, i.defaultProps, e)
                : e;
            },
          }),
          wn(y, function () {
            return '.'.concat(y.styledComponentId);
          }),
          s &&
            fn(y, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          y
        );
      }
      function lr(e, t) {
        for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
        return n;
      }
      new Set();
      var ur = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function cr(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (hn(e) || vn(e)) return ur(tr(lr(jt, Le([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && 'string' == typeof r[0]
          ? tr(r)
          : ur(tr(lr(r, t)));
      }
      function pr(e, t, n) {
        if ((void 0 === n && (n = Nt), !t)) throw kn(1, t);
        var r = function (r) {
          for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
          return e(t, n, cr.apply(void 0, Le([r], o, !1)));
        };
        return (
          (r.attrs = function (r) {
            return pr(
              e,
              t,
              De(De({}, n), { attrs: Array.prototype.concat(n.attrs, r).filter(Boolean) }),
            );
          }),
          (r.withConfig = function (r) {
            return pr(e, t, De(De({}, n), r));
          }),
          r
        );
      }
      var dr = function (e) {
          return pr(ar, e);
        },
        fr = dr;
      function hr() {
        return 'object' == typeof navigator && 'userAgent' in navigator
          ? navigator.userAgent
          : 'object' == typeof process && 'version' in process
          ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`
          : '<environment undetectable>';
      }
      Mt.forEach(function (e) {
        fr[e] = dr(e);
      }),
        (function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = nr(e)),
              jn.registerId(this.componentId + 1);
          }
          (e.prototype.createStyles = function (e, t, n, r) {
            var o = r(yn(tr(this.rules, t, n, r)), ''),
              i = this.componentId + e;
            n.insertRules(i, i, o);
          }),
            (e.prototype.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (e.prototype.renderStyles = function (e, t, n, r) {
              e > 2 && jn.registerId(this.componentId + e),
                this.removeStyles(e, n),
                this.createStyles(e, t, n, r);
            });
        })(),
        (function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString(),
                n = Rn(),
                r = yn(
                  [
                    n && 'nonce="'.concat(n, '"'),
                    ''.concat(It, '="true"'),
                    ''.concat('data-styled-version', '="').concat('6.0.7', '"'),
                  ].filter(Boolean),
                  ' ',
                );
              return '<style '.concat(r, '>').concat(t, '</style>');
            }),
              (this.getStyleTags = function () {
                if (e.sealed) throw kn(2);
                return e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) throw kn(2);
                var n =
                    (((t = {})[It] = ''),
                    (t['data-styled-version'] = '6.0.7'),
                    (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                    t),
                  o = Rn();
                return o && (n.nonce = o), [r.createElement('style', De({}, n, { key: 'sc-0-0' }))];
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new jn({ isServer: !0 })),
              (this.sealed = !1);
          }
          (e.prototype.collectStyles = function (e) {
            if (this.sealed) throw kn(2);
            return r.createElement(Qn, { sheet: this.instance }, e);
          }),
            (e.prototype.interleaveWithNodeStream = function (e) {
              throw kn(3);
            });
        })(),
        '__sc-'.concat(It, '__');
      var mr = o(186);
      function gr(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      var yr = `octokit-endpoint.js/9.0.0 ${hr()}`;
      function vr(e, t) {
        const n = Object.assign({}, e);
        return (
          Object.keys(t).forEach(r => {
            var o, i, s;
            !1 === gr((o = t[r])) ||
            (void 0 !== (i = o.constructor) &&
              (!1 === gr((s = i.prototype)) || !1 === s.hasOwnProperty('isPrototypeOf')))
              ? Object.assign(n, { [r]: t[r] })
              : r in e
              ? (n[r] = vr(e[r], t[r]))
              : Object.assign(n, { [r]: t[r] });
          }),
          n
        );
      }
      function br(e) {
        for (const t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      function wr(e, t, n) {
        if ('string' == typeof t) {
          let [e, r] = t.split(' ');
          n = Object.assign(r ? { method: e, url: r } : { url: e }, n);
        } else n = Object.assign({}, t);
        var r;
        (n.headers = (r = n.headers)
          ? Object.keys(r).reduce((e, t) => ((e[t.toLowerCase()] = r[t]), e), {})
          : {}),
          br(n),
          br(n.headers);
        const o = vr(e || {}, n);
        return (
          '/graphql' === n.url &&
            (e &&
              e.mediaType.previews?.length &&
              (o.mediaType.previews = e.mediaType.previews
                .filter(e => !o.mediaType.previews.includes(e))
                .concat(o.mediaType.previews)),
            (o.mediaType.previews = (o.mediaType.previews || []).map(e =>
              e.replace(/-preview/, ''),
            ))),
          o
        );
      }
      var kr = /\{[^}]+\}/g;
      function Er(e) {
        return e.replace(/^\W+|\W+$/g, '').split(/,/);
      }
      function Tr(e, t) {
        return Object.keys(e)
          .filter(e => !t.includes(e))
          .reduce((t, n) => ((t[n] = e[n]), t), {});
      }
      function Sr(e) {
        return e
          .split(/(%[0-9A-Fa-f]{2})/g)
          .map(function (e) {
            return (
              /%[0-9A-Fa-f]/.test(e) ||
                (e = encodeURI(e).replace(/%5B/g, '[').replace(/%5D/g, ']')),
              e
            );
          })
          .join('');
      }
      function _r(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function xr(e, t, n) {
        return (t = '+' === e || '#' === e ? Sr(t) : _r(t)), n ? _r(n) + '=' + t : t;
      }
      function Pr(e) {
        return null != e;
      }
      function Cr(e) {
        return ';' === e || '&' === e || '?' === e;
      }
      function Or(e, t) {
        var n = ['+', '#', '.', '/', ';', '?', '&'];
        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, r, o) {
          if (r) {
            let e = '';
            const o = [];
            if (
              (-1 !== n.indexOf(r.charAt(0)) && ((e = r.charAt(0)), (r = r.substr(1))),
              r.split(/,/g).forEach(function (n) {
                var r = /([^:\*]*)(?::(\d+)|(\*))?/.exec(n);
                o.push(
                  (function (e, t, n, r) {
                    var o = e[n],
                      i = [];
                    if (Pr(o) && '' !== o)
                      if ('string' == typeof o || 'number' == typeof o || 'boolean' == typeof o)
                        (o = o.toString()),
                          r && '*' !== r && (o = o.substring(0, parseInt(r, 10))),
                          i.push(xr(t, o, Cr(t) ? n : ''));
                      else if ('*' === r)
                        Array.isArray(o)
                          ? o.filter(Pr).forEach(function (e) {
                              i.push(xr(t, e, Cr(t) ? n : ''));
                            })
                          : Object.keys(o).forEach(function (e) {
                              Pr(o[e]) && i.push(xr(t, o[e], e));
                            });
                      else {
                        const e = [];
                        Array.isArray(o)
                          ? o.filter(Pr).forEach(function (n) {
                              e.push(xr(t, n));
                            })
                          : Object.keys(o).forEach(function (n) {
                              Pr(o[n]) && (e.push(_r(n)), e.push(xr(t, o[n].toString())));
                            }),
                          Cr(t)
                            ? i.push(_r(n) + '=' + e.join(','))
                            : 0 !== e.length && i.push(e.join(','));
                      }
                    else
                      ';' === t
                        ? Pr(o) && i.push(_r(n))
                        : '' !== o || ('&' !== t && '?' !== t)
                        ? '' === o && i.push('')
                        : i.push(_r(n) + '=');
                    return i;
                  })(t, e, r[1], r[2] || r[3]),
                );
              }),
              e && '+' !== e)
            ) {
              var i = ',';
              return (
                '?' === e ? (i = '&') : '#' !== e && (i = e), (0 !== o.length ? e : '') + o.join(i)
              );
            }
            return o.join(',');
          }
          return Sr(o);
        });
      }
      function Ar(e) {
        let t,
          n = e.method.toUpperCase(),
          r = (e.url || '/').replace(/:([a-z]\w+)/g, '{$1}'),
          o = Object.assign({}, e.headers),
          i = Tr(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType']);
        const s = (function (e) {
          const t = e.match(kr);
          return t ? t.map(Er).reduce((e, t) => e.concat(t), []) : [];
        })(r);
        var a;
        (r = ((a = r), { expand: Or.bind(null, a) }).expand(i)),
          /^http/.test(r) || (r = e.baseUrl + r);
        const l = Tr(
          i,
          Object.keys(e)
            .filter(e => s.includes(e))
            .concat('baseUrl'),
        );
        if (
          !/application\/octet-stream/i.test(o.accept) &&
          (e.mediaType.format &&
            (o.accept = o.accept
              .split(/,/)
              .map(t =>
                t.replace(
                  /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                  `application/vnd$1$2.${e.mediaType.format}`,
                ),
              )
              .join(',')),
          r.endsWith('/graphql') && e.mediaType.previews?.length)
        ) {
          const t = o.accept.match(/[\w-]+(?=-preview)/g) || [];
          o.accept = t
            .concat(e.mediaType.previews)
            .map(
              t =>
                `application/vnd.github.${t}-preview${
                  e.mediaType.format ? `.${e.mediaType.format}` : '+json'
                }`,
            )
            .join(',');
        }
        return (
          ['GET', 'HEAD'].includes(n)
            ? (r = (function (e, t) {
                const n = /\?/.test(e) ? '&' : '?',
                  r = Object.keys(t);
                return 0 === r.length
                  ? e
                  : e +
                      n +
                      r
                        .map(e =>
                          'q' === e
                            ? 'q=' + t.q.split('+').map(encodeURIComponent).join('+')
                            : `${e}=${encodeURIComponent(t[e])}`,
                        )
                        .join('&');
              })(r, l))
            : 'data' in l
            ? (t = l.data)
            : Object.keys(l).length && (t = l),
          o['content-type'] ||
            void 0 === t ||
            (o['content-type'] = 'application/json; charset=utf-8'),
          ['PATCH', 'PUT'].includes(n) && void 0 === t && (t = ''),
          Object.assign(
            { method: n, url: r, headers: o },
            void 0 !== t ? { body: t } : null,
            e.request ? { request: e.request } : null,
          )
        );
      }
      function Fr(e, t, n) {
        return Ar(wr(e, t, n));
      }
      var Rr = (function e(t, n) {
        const r = wr(t, n),
          o = Fr.bind(null, r);
        return Object.assign(o, {
          DEFAULTS: r,
          defaults: e.bind(null, r),
          merge: wr.bind(null, r),
          parse: Ar,
        });
      })(null, {
        method: 'GET',
        baseUrl: 'https://api.github.com',
        headers: { accept: 'application/vnd.github.v3+json', 'user-agent': yr },
        mediaType: { format: '' },
      });
      function Dr(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      class Lr extends Error {
        constructor(e) {
          super(e),
            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
            (this.name = 'Deprecation');
        }
      }
      var Gr = o(778),
        Ir = o.n(Gr),
        Ur = Ir()(e => console.warn(e)),
        zr = Ir()(e => console.warn(e)),
        jr = class extends Error {
          constructor(e, t, n) {
            let r;
            super(e),
              Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
              (this.name = 'HttpError'),
              (this.status = t),
              'headers' in n && void 0 !== n.headers && (r = n.headers),
              'response' in n && ((this.response = n.response), (r = n.response.headers));
            const o = Object.assign({}, n.request);
            n.request.headers.authorization &&
              (o.headers = Object.assign({}, n.request.headers, {
                authorization: n.request.headers.authorization.replace(/ .*$/, ' [REDACTED]'),
              })),
              (o.url = o.url
                .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
                .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')),
              (this.request = o),
              Object.defineProperty(this, 'code', {
                get: () => (
                  Ur(
                    new Lr(
                      '[@octokit/request-error] `error.code` is deprecated, use `error.status`.',
                    ),
                  ),
                  t
                ),
              }),
              Object.defineProperty(this, 'headers', {
                get: () => (
                  zr(
                    new Lr(
                      '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.',
                    ),
                  ),
                  r || {}
                ),
              });
          }
        };
      function Nr(e) {
        const t = e.request && e.request.log ? e.request.log : console,
          n = !1 !== e.request?.parseSuccessResponseBody;
        var r, o, i;
        ((!1 !== Dr((r = e.body)) &&
          (void 0 === (o = r.constructor) ||
            (!1 !== Dr((i = o.prototype)) && !1 !== i.hasOwnProperty('isPrototypeOf')))) ||
          Array.isArray(e.body)) &&
          (e.body = JSON.stringify(e.body));
        let s,
          a,
          l = {},
          { fetch: u } = globalThis;
        if ((e.request?.fetch && (u = e.request.fetch), !u))
          throw new Error(
            'fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing',
          );
        return u(e.url, {
          method: e.method,
          body: e.body,
          headers: e.headers,
          signal: e.request?.signal,
          ...(e.body && { duplex: 'half' }),
        })
          .then(async r => {
            (a = r.url), (s = r.status);
            for (const e of r.headers) l[e[0]] = e[1];
            if ('deprecation' in l) {
              const n = l.link && l.link.match(/<([^>]+)>; rel="deprecation"/),
                r = n && n.pop();
              t.warn(
                `[@octokit/request] "${e.method} ${
                  e.url
                }" is deprecated. It is scheduled to be removed on ${l.sunset}${
                  r ? `. See ${r}` : ''
                }`,
              );
            }
            if (204 !== s && 205 !== s) {
              if ('HEAD' === e.method) {
                if (s < 400) return;
                throw new jr(r.statusText, s, {
                  response: { url: a, status: s, headers: l, data: void 0 },
                  request: e,
                });
              }
              if (304 === s)
                throw new jr('Not modified', s, {
                  response: { url: a, status: s, headers: l, data: await Mr(r) },
                  request: e,
                });
              if (s >= 400) {
                const t = await Mr(r),
                  n = new jr(
                    (function (e) {
                      return 'string' == typeof e
                        ? e
                        : 'message' in e
                        ? Array.isArray(e.errors)
                          ? `${e.message}: ${e.errors.map(JSON.stringify).join(', ')}`
                          : e.message
                        : `Unknown error: ${JSON.stringify(e)}`;
                    })(t),
                    s,
                    { response: { url: a, status: s, headers: l, data: t }, request: e },
                  );
                throw n;
              }
              return n ? await Mr(r) : r.body;
            }
          })
          .then(e => ({ status: s, url: a, headers: l, data: e }))
          .catch(t => {
            if (t instanceof jr) throw t;
            if ('AbortError' === t.name) throw t;
            throw new jr(t.message, 500, { request: e });
          });
      }
      async function Mr(e) {
        const t = e.headers.get('content-type');
        return /application\/json/.test(t)
          ? e.json()
          : !t || /^text\/|charset=utf-8$/.test(t)
          ? e.text()
          : (function (e) {
              return e.arrayBuffer();
            })(e);
      }
      var Br = (function e(t, n) {
          const r = t.defaults(n);
          return Object.assign(
            function (t, n) {
              const o = r.merge(t, n);
              if (!o.request || !o.request.hook) return Nr(r.parse(o));
              const i = (e, t) => Nr(r.parse(r.merge(e, t)));
              return (
                Object.assign(i, { endpoint: r, defaults: e.bind(null, r) }), o.request.hook(i, o)
              );
            },
            { endpoint: r, defaults: e.bind(null, r) },
          );
        })(Rr, { headers: { 'user-agent': `octokit-request.js/8.1.1 ${hr()}` } }),
        $r = class extends Error {
          constructor(e, t, n) {
            super(
              'Request failed due to following response errors:\n' +
                n.errors.map(e => ` - ${e.message}`).join('\n'),
            ),
              (this.request = e),
              (this.headers = t),
              (this.response = n),
              (this.name = 'GraphqlResponseError'),
              (this.errors = n.errors),
              (this.data = n.data),
              Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
          }
        },
        qr = ['method', 'baseUrl', 'url', 'headers', 'request', 'query', 'mediaType'],
        Hr = ['query', 'method', 'url'],
        Wr = /\/api\/v3\/?$/;
      function Vr(e, t) {
        const n = e.defaults(t);
        return Object.assign(
          (e, t) =>
            (function (e, t, n) {
              if (n) {
                if ('string' == typeof t && 'query' in n)
                  return Promise.reject(
                    new Error('[@octokit/graphql] "query" cannot be used as variable name'),
                  );
                for (const e in n)
                  if (Hr.includes(e))
                    return Promise.reject(
                      new Error(`[@octokit/graphql] "${e}" cannot be used as variable name`),
                    );
              }
              const r = 'string' == typeof t ? Object.assign({ query: t }, n) : t,
                o = Object.keys(r).reduce(
                  (e, t) =>
                    qr.includes(t)
                      ? ((e[t] = r[t]), e)
                      : (e.variables || (e.variables = {}), (e.variables[t] = r[t]), e),
                  {},
                ),
                i = r.baseUrl || e.endpoint.DEFAULTS.baseUrl;
              return (
                Wr.test(i) && (o.url = i.replace(Wr, '/api/graphql')),
                e(o).then(e => {
                  if (e.data.errors) {
                    const t = {};
                    for (const n of Object.keys(e.headers)) t[n] = e.headers[n];
                    throw new $r(o, t, e.data);
                  }
                  return e.data.data;
                })
              );
            })(n, e, t),
          { defaults: Vr.bind(null, n), endpoint: n.endpoint },
        );
      }
      Vr(Br, {
        headers: { 'user-agent': `octokit-graphql.js/7.0.1 ${hr()}` },
        method: 'POST',
        url: '/graphql',
      });
      var Kr = /^v1\./,
        Qr = /^ghs_/,
        Yr = /^ghu_/;
      async function Jr(e) {
        const t = 3 === e.split(/\./).length,
          n = Kr.test(e) || Qr.test(e),
          r = Yr.test(e);
        return {
          type: 'token',
          token: e,
          tokenType: t ? 'app' : n ? 'installation' : r ? 'user-to-server' : 'oauth',
        };
      }
      async function Xr(e, t, n, r) {
        const o = t.endpoint.merge(n, r);
        return (
          (o.headers.authorization = (function (e) {
            return 3 === e.split(/\./).length ? `bearer ${e}` : `token ${e}`;
          })(e)),
          t(o)
        );
      }
      var Zr = function (e) {
          if (!e) throw new Error('[@octokit/auth-token] No token passed to createTokenAuth');
          if ('string' != typeof e)
            throw new Error(
              '[@octokit/auth-token] Token passed to createTokenAuth is not a string',
            );
          return (
            (e = e.replace(/^(token|bearer) +/i, '')),
            Object.assign(Jr.bind(null, e), { hook: Xr.bind(null, e) })
          );
        },
        eo = '5.0.0',
        to = class {
          static {
            this.VERSION = eo;
          }
          static defaults(e) {
            return class extends this {
              constructor(...t) {
                const n = t[0] || {};
                super(
                  'function' != typeof e
                    ? Object.assign(
                        {},
                        e,
                        n,
                        n.userAgent && e.userAgent
                          ? { userAgent: `${n.userAgent} ${e.userAgent}` }
                          : null,
                      )
                    : e(n),
                );
              }
            };
          }
          static {
            this.plugins = [];
          }
          static plugin(...e) {
            const t = this.plugins;
            return class extends this {
              static {
                this.plugins = t.concat(e.filter(e => !t.includes(e)));
              }
            };
          }
          constructor(e = {}) {
            const t = new mr.Collection(),
              n = {
                baseUrl: Br.endpoint.DEFAULTS.baseUrl,
                headers: {},
                request: Object.assign({}, e.request, { hook: t.bind(null, 'request') }),
                mediaType: { previews: [], format: '' },
              };
            var r;
            if (
              ((n.headers['user-agent'] = [e.userAgent, `octokit-core.js/${eo} ${hr()}`]
                .filter(Boolean)
                .join(' ')),
              e.baseUrl && (n.baseUrl = e.baseUrl),
              e.previews && (n.mediaType.previews = e.previews),
              e.timeZone && (n.headers['time-zone'] = e.timeZone),
              (this.request = Br.defaults(n)),
              (this.graphql = ((r = this.request),
              Vr(r, { method: 'POST', url: '/graphql' })).defaults(n)),
              (this.log = Object.assign(
                {
                  debug: () => {},
                  info: () => {},
                  warn: console.warn.bind(console),
                  error: console.error.bind(console),
                },
                e.log,
              )),
              (this.hook = t),
              e.authStrategy)
            ) {
              const { authStrategy: n, ...r } = e,
                o = n(
                  Object.assign(
                    { request: this.request, log: this.log, octokit: this, octokitOptions: r },
                    e.auth,
                  ),
                );
              t.wrap('request', o.hook), (this.auth = o);
            } else if (e.auth) {
              const n = Zr(e.auth);
              t.wrap('request', n.hook), (this.auth = n);
            } else this.auth = async () => ({ type: 'unauthenticated' });
            this.constructor.plugins.forEach(t => {
              Object.assign(this, t(this, e));
            });
          }
        };
      function no(e) {
        e.hook.wrap('request', (t, n) => {
          e.log.debug('request', n);
          const r = Date.now(),
            o = e.request.endpoint.parse(n),
            i = o.url.replace(n.baseUrl, '');
          return t(n)
            .then(t => (e.log.info(`${o.method} ${i} - ${t.status} in ${Date.now() - r}ms`), t))
            .catch(t => {
              throw (e.log.info(`${o.method} ${i} - ${t.status} in ${Date.now() - r}ms`), t);
            });
        });
      }
      function ro(e, t, n) {
        const r = 'function' == typeof t ? t.endpoint(n) : e.request.endpoint(t, n),
          o = 'function' == typeof t ? t : e.request,
          i = r.method,
          s = r.headers;
        let a = r.url;
        return {
          [Symbol.asyncIterator]: () => ({
            async next() {
              if (!a) return { done: !0 };
              try {
                const e = (function (e) {
                  if (!e.data) return { ...e, data: [] };
                  if (!('total_count' in e.data) || 'url' in e.data) return e;
                  const t = e.data.incomplete_results,
                    n = e.data.repository_selection,
                    r = e.data.total_count;
                  delete e.data.incomplete_results,
                    delete e.data.repository_selection,
                    delete e.data.total_count;
                  const o = Object.keys(e.data)[0],
                    i = e.data[o];
                  return (
                    (e.data = i),
                    void 0 !== t && (e.data.incomplete_results = t),
                    void 0 !== n && (e.data.repository_selection = n),
                    (e.data.total_count = r),
                    e
                  );
                })(await o({ method: i, url: a, headers: s }));
                return (
                  (a = ((e.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1]),
                  { value: e }
                );
              } catch (e) {
                if (409 !== e.status) throw e;
                return (a = ''), { value: { status: 200, headers: {}, data: [] } };
              }
            },
          }),
        };
      }
      function oo(e, t, n, r) {
        return (
          'function' == typeof n && ((r = n), (n = void 0)),
          io(e, [], ro(e, t, n)[Symbol.asyncIterator](), r)
        );
      }
      function io(e, t, n, r) {
        return n.next().then(o => {
          if (o.done) return t;
          let i = !1;
          return (
            (t = t.concat(
              r
                ? r(o.value, function () {
                    i = !0;
                  })
                : o.value.data,
            )),
            i ? t : io(e, t, n, r)
          );
        });
      }
      function so(e) {
        return { paginate: Object.assign(oo.bind(null, e), { iterator: ro.bind(null, e) }) };
      }
      (no.VERSION = '4.0.0'), Object.assign(oo, { iterator: ro }), (so.VERSION = '8.0.0');
      var ao = new Map();
      for (const [e, t] of Object.entries({
        actions: {
          addCustomLabelsToSelfHostedRunnerForOrg: [
            'POST /orgs/{org}/actions/runners/{runner_id}/labels',
          ],
          addCustomLabelsToSelfHostedRunnerForRepo: [
            'POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
          ],
          addSelectedRepoToOrgSecret: [
            'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
          ],
          addSelectedRepoToOrgVariable: [
            'PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}',
          ],
          addSelectedRepoToRequiredWorkflow: [
            'PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}',
          ],
          approveWorkflowRun: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'],
          cancelWorkflowRun: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'],
          createEnvironmentVariable: [
            'POST /repositories/{repository_id}/environments/{environment_name}/variables',
          ],
          createOrUpdateEnvironmentSecret: [
            'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
          ],
          createOrUpdateOrgSecret: ['PUT /orgs/{org}/actions/secrets/{secret_name}'],
          createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
          createOrgVariable: ['POST /orgs/{org}/actions/variables'],
          createRegistrationTokenForOrg: ['POST /orgs/{org}/actions/runners/registration-token'],
          createRegistrationTokenForRepo: [
            'POST /repos/{owner}/{repo}/actions/runners/registration-token',
          ],
          createRemoveTokenForOrg: ['POST /orgs/{org}/actions/runners/remove-token'],
          createRemoveTokenForRepo: ['POST /repos/{owner}/{repo}/actions/runners/remove-token'],
          createRepoVariable: ['POST /repos/{owner}/{repo}/actions/variables'],
          createRequiredWorkflow: ['POST /orgs/{org}/actions/required_workflows'],
          createWorkflowDispatch: [
            'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
          ],
          deleteActionsCacheById: ['DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}'],
          deleteActionsCacheByKey: ['DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}'],
          deleteArtifact: ['DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'],
          deleteEnvironmentSecret: [
            'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
          ],
          deleteEnvironmentVariable: [
            'DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}',
          ],
          deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
          deleteOrgVariable: ['DELETE /orgs/{org}/actions/variables/{name}'],
          deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
          deleteRepoVariable: ['DELETE /repos/{owner}/{repo}/actions/variables/{name}'],
          deleteRequiredWorkflow: [
            'DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}',
          ],
          deleteSelfHostedRunnerFromOrg: ['DELETE /orgs/{org}/actions/runners/{runner_id}'],
          deleteSelfHostedRunnerFromRepo: [
            'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}',
          ],
          deleteWorkflowRun: ['DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'],
          deleteWorkflowRunLogs: ['DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'],
          disableSelectedRepositoryGithubActionsOrganization: [
            'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}',
          ],
          disableWorkflow: ['PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'],
          downloadArtifact: [
            'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
          ],
          downloadJobLogsForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'],
          downloadWorkflowRunAttemptLogs: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs',
          ],
          downloadWorkflowRunLogs: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'],
          enableSelectedRepositoryGithubActionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}',
          ],
          enableWorkflow: ['PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'],
          generateRunnerJitconfigForOrg: ['POST /orgs/{org}/actions/runners/generate-jitconfig'],
          generateRunnerJitconfigForRepo: [
            'POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig',
          ],
          getActionsCacheList: ['GET /repos/{owner}/{repo}/actions/caches'],
          getActionsCacheUsage: ['GET /repos/{owner}/{repo}/actions/cache/usage'],
          getActionsCacheUsageByRepoForOrg: ['GET /orgs/{org}/actions/cache/usage-by-repository'],
          getActionsCacheUsageForOrg: ['GET /orgs/{org}/actions/cache/usage'],
          getAllowedActionsOrganization: ['GET /orgs/{org}/actions/permissions/selected-actions'],
          getAllowedActionsRepository: [
            'GET /repos/{owner}/{repo}/actions/permissions/selected-actions',
          ],
          getArtifact: ['GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'],
          getEnvironmentPublicKey: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key',
          ],
          getEnvironmentSecret: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
          ],
          getEnvironmentVariable: [
            'GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}',
          ],
          getGithubActionsDefaultWorkflowPermissionsOrganization: [
            'GET /orgs/{org}/actions/permissions/workflow',
          ],
          getGithubActionsDefaultWorkflowPermissionsRepository: [
            'GET /repos/{owner}/{repo}/actions/permissions/workflow',
          ],
          getGithubActionsPermissionsOrganization: ['GET /orgs/{org}/actions/permissions'],
          getGithubActionsPermissionsRepository: ['GET /repos/{owner}/{repo}/actions/permissions'],
          getJobForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/jobs/{job_id}'],
          getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
          getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
          getOrgVariable: ['GET /orgs/{org}/actions/variables/{name}'],
          getPendingDeploymentsForRun: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
          ],
          getRepoPermissions: [
            'GET /repos/{owner}/{repo}/actions/permissions',
            {},
            { renamed: ['actions', 'getGithubActionsPermissionsRepository'] },
          ],
          getRepoPublicKey: ['GET /repos/{owner}/{repo}/actions/secrets/public-key'],
          getRepoRequiredWorkflow: [
            'GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}',
          ],
          getRepoRequiredWorkflowUsage: [
            'GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing',
          ],
          getRepoSecret: ['GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
          getRepoVariable: ['GET /repos/{owner}/{repo}/actions/variables/{name}'],
          getRequiredWorkflow: [
            'GET /orgs/{org}/actions/required_workflows/{required_workflow_id}',
          ],
          getReviewsForRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'],
          getSelfHostedRunnerForOrg: ['GET /orgs/{org}/actions/runners/{runner_id}'],
          getSelfHostedRunnerForRepo: ['GET /repos/{owner}/{repo}/actions/runners/{runner_id}'],
          getWorkflow: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'],
          getWorkflowAccessToRepository: ['GET /repos/{owner}/{repo}/actions/permissions/access'],
          getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
          getWorkflowRunAttempt: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}',
          ],
          getWorkflowRunUsage: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'],
          getWorkflowUsage: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'],
          listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
          listEnvironmentSecrets: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
          ],
          listEnvironmentVariables: [
            'GET /repositories/{repository_id}/environments/{environment_name}/variables',
          ],
          listJobsForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'],
          listJobsForWorkflowRunAttempt: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
          ],
          listLabelsForSelfHostedRunnerForOrg: [
            'GET /orgs/{org}/actions/runners/{runner_id}/labels',
          ],
          listLabelsForSelfHostedRunnerForRepo: [
            'GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
          ],
          listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
          listOrgVariables: ['GET /orgs/{org}/actions/variables'],
          listRepoOrganizationSecrets: ['GET /repos/{owner}/{repo}/actions/organization-secrets'],
          listRepoOrganizationVariables: [
            'GET /repos/{owner}/{repo}/actions/organization-variables',
          ],
          listRepoRequiredWorkflows: ['GET /repos/{org}/{repo}/actions/required_workflows'],
          listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
          listRepoVariables: ['GET /repos/{owner}/{repo}/actions/variables'],
          listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
          listRequiredWorkflowRuns: [
            'GET /repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs',
          ],
          listRequiredWorkflows: ['GET /orgs/{org}/actions/required_workflows'],
          listRunnerApplicationsForOrg: ['GET /orgs/{org}/actions/runners/downloads'],
          listRunnerApplicationsForRepo: ['GET /repos/{owner}/{repo}/actions/runners/downloads'],
          listSelectedReposForOrgSecret: [
            'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
          ],
          listSelectedReposForOrgVariable: [
            'GET /orgs/{org}/actions/variables/{name}/repositories',
          ],
          listSelectedRepositoriesEnabledGithubActionsOrganization: [
            'GET /orgs/{org}/actions/permissions/repositories',
          ],
          listSelectedRepositoriesRequiredWorkflow: [
            'GET /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories',
          ],
          listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
          listSelfHostedRunnersForRepo: ['GET /repos/{owner}/{repo}/actions/runners'],
          listWorkflowRunArtifacts: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'],
          listWorkflowRuns: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'],
          listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
          reRunJobForWorkflowRun: ['POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun'],
          reRunWorkflow: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun'],
          reRunWorkflowFailedJobs: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs',
          ],
          removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
            'DELETE /orgs/{org}/actions/runners/{runner_id}/labels',
          ],
          removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
            'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
          ],
          removeCustomLabelFromSelfHostedRunnerForOrg: [
            'DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}',
          ],
          removeCustomLabelFromSelfHostedRunnerForRepo: [
            'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}',
          ],
          removeSelectedRepoFromOrgSecret: [
            'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
          ],
          removeSelectedRepoFromOrgVariable: [
            'DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}',
          ],
          removeSelectedRepoFromRequiredWorkflow: [
            'DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}',
          ],
          reviewCustomGatesForRun: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule',
          ],
          reviewPendingDeploymentsForRun: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
          ],
          setAllowedActionsOrganization: ['PUT /orgs/{org}/actions/permissions/selected-actions'],
          setAllowedActionsRepository: [
            'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions',
          ],
          setCustomLabelsForSelfHostedRunnerForOrg: [
            'PUT /orgs/{org}/actions/runners/{runner_id}/labels',
          ],
          setCustomLabelsForSelfHostedRunnerForRepo: [
            'PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
          ],
          setGithubActionsDefaultWorkflowPermissionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/workflow',
          ],
          setGithubActionsDefaultWorkflowPermissionsRepository: [
            'PUT /repos/{owner}/{repo}/actions/permissions/workflow',
          ],
          setGithubActionsPermissionsOrganization: ['PUT /orgs/{org}/actions/permissions'],
          setGithubActionsPermissionsRepository: ['PUT /repos/{owner}/{repo}/actions/permissions'],
          setSelectedReposForOrgSecret: [
            'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories',
          ],
          setSelectedReposForOrgVariable: ['PUT /orgs/{org}/actions/variables/{name}/repositories'],
          setSelectedReposToRequiredWorkflow: [
            'PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories',
          ],
          setSelectedRepositoriesEnabledGithubActionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/repositories',
          ],
          setWorkflowAccessToRepository: ['PUT /repos/{owner}/{repo}/actions/permissions/access'],
          updateEnvironmentVariable: [
            'PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}',
          ],
          updateOrgVariable: ['PATCH /orgs/{org}/actions/variables/{name}'],
          updateRepoVariable: ['PATCH /repos/{owner}/{repo}/actions/variables/{name}'],
          updateRequiredWorkflow: [
            'PATCH /orgs/{org}/actions/required_workflows/{required_workflow_id}',
          ],
        },
        activity: {
          checkRepoIsStarredByAuthenticatedUser: ['GET /user/starred/{owner}/{repo}'],
          deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
          deleteThreadSubscription: ['DELETE /notifications/threads/{thread_id}/subscription'],
          getFeeds: ['GET /feeds'],
          getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
          getThread: ['GET /notifications/threads/{thread_id}'],
          getThreadSubscriptionForAuthenticatedUser: [
            'GET /notifications/threads/{thread_id}/subscription',
          ],
          listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
          listNotificationsForAuthenticatedUser: ['GET /notifications'],
          listOrgEventsForAuthenticatedUser: ['GET /users/{username}/events/orgs/{org}'],
          listPublicEvents: ['GET /events'],
          listPublicEventsForRepoNetwork: ['GET /networks/{owner}/{repo}/events'],
          listPublicEventsForUser: ['GET /users/{username}/events/public'],
          listPublicOrgEvents: ['GET /orgs/{org}/events'],
          listReceivedEventsForUser: ['GET /users/{username}/received_events'],
          listReceivedPublicEventsForUser: ['GET /users/{username}/received_events/public'],
          listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
          listRepoNotificationsForAuthenticatedUser: ['GET /repos/{owner}/{repo}/notifications'],
          listReposStarredByAuthenticatedUser: ['GET /user/starred'],
          listReposStarredByUser: ['GET /users/{username}/starred'],
          listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
          listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
          listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
          listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
          markNotificationsAsRead: ['PUT /notifications'],
          markRepoNotificationsAsRead: ['PUT /repos/{owner}/{repo}/notifications'],
          markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
          setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
          setThreadSubscription: ['PUT /notifications/threads/{thread_id}/subscription'],
          starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
          unstarRepoForAuthenticatedUser: ['DELETE /user/starred/{owner}/{repo}'],
        },
        apps: {
          addRepoToInstallation: [
            'PUT /user/installations/{installation_id}/repositories/{repository_id}',
            {},
            { renamed: ['apps', 'addRepoToInstallationForAuthenticatedUser'] },
          ],
          addRepoToInstallationForAuthenticatedUser: [
            'PUT /user/installations/{installation_id}/repositories/{repository_id}',
          ],
          checkToken: ['POST /applications/{client_id}/token'],
          createFromManifest: ['POST /app-manifests/{code}/conversions'],
          createInstallationAccessToken: [
            'POST /app/installations/{installation_id}/access_tokens',
          ],
          deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
          deleteInstallation: ['DELETE /app/installations/{installation_id}'],
          deleteToken: ['DELETE /applications/{client_id}/token'],
          getAuthenticated: ['GET /app'],
          getBySlug: ['GET /apps/{app_slug}'],
          getInstallation: ['GET /app/installations/{installation_id}'],
          getOrgInstallation: ['GET /orgs/{org}/installation'],
          getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
          getSubscriptionPlanForAccount: ['GET /marketplace_listing/accounts/{account_id}'],
          getSubscriptionPlanForAccountStubbed: [
            'GET /marketplace_listing/stubbed/accounts/{account_id}',
          ],
          getUserInstallation: ['GET /users/{username}/installation'],
          getWebhookConfigForApp: ['GET /app/hook/config'],
          getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
          listAccountsForPlan: ['GET /marketplace_listing/plans/{plan_id}/accounts'],
          listAccountsForPlanStubbed: ['GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'],
          listInstallationReposForAuthenticatedUser: [
            'GET /user/installations/{installation_id}/repositories',
          ],
          listInstallationRequestsForAuthenticatedApp: ['GET /app/installation-requests'],
          listInstallations: ['GET /app/installations'],
          listInstallationsForAuthenticatedUser: ['GET /user/installations'],
          listPlans: ['GET /marketplace_listing/plans'],
          listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
          listReposAccessibleToInstallation: ['GET /installation/repositories'],
          listSubscriptionsForAuthenticatedUser: ['GET /user/marketplace_purchases'],
          listSubscriptionsForAuthenticatedUserStubbed: ['GET /user/marketplace_purchases/stubbed'],
          listWebhookDeliveries: ['GET /app/hook/deliveries'],
          redeliverWebhookDelivery: ['POST /app/hook/deliveries/{delivery_id}/attempts'],
          removeRepoFromInstallation: [
            'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
            {},
            { renamed: ['apps', 'removeRepoFromInstallationForAuthenticatedUser'] },
          ],
          removeRepoFromInstallationForAuthenticatedUser: [
            'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
          ],
          resetToken: ['PATCH /applications/{client_id}/token'],
          revokeInstallationAccessToken: ['DELETE /installation/token'],
          scopeToken: ['POST /applications/{client_id}/token/scoped'],
          suspendInstallation: ['PUT /app/installations/{installation_id}/suspended'],
          unsuspendInstallation: ['DELETE /app/installations/{installation_id}/suspended'],
          updateWebhookConfigForApp: ['PATCH /app/hook/config'],
        },
        billing: {
          getGithubActionsBillingOrg: ['GET /orgs/{org}/settings/billing/actions'],
          getGithubActionsBillingUser: ['GET /users/{username}/settings/billing/actions'],
          getGithubPackagesBillingOrg: ['GET /orgs/{org}/settings/billing/packages'],
          getGithubPackagesBillingUser: ['GET /users/{username}/settings/billing/packages'],
          getSharedStorageBillingOrg: ['GET /orgs/{org}/settings/billing/shared-storage'],
          getSharedStorageBillingUser: ['GET /users/{username}/settings/billing/shared-storage'],
        },
        checks: {
          create: ['POST /repos/{owner}/{repo}/check-runs'],
          createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
          get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
          getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
          listAnnotations: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'],
          listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
          listForSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'],
          listSuitesForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-suites'],
          rerequestRun: ['POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest'],
          rerequestSuite: ['POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'],
          setSuitesPreferences: ['PATCH /repos/{owner}/{repo}/check-suites/preferences'],
          update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}'],
        },
        codeScanning: {
          deleteAnalysis: [
            'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}',
          ],
          getAlert: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
            {},
            { renamedParameters: { alert_id: 'alert_number' } },
          ],
          getAnalysis: ['GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'],
          getCodeqlDatabase: [
            'GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}',
          ],
          getDefaultSetup: ['GET /repos/{owner}/{repo}/code-scanning/default-setup'],
          getSarif: ['GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'],
          listAlertInstances: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
          ],
          listAlertsForOrg: ['GET /orgs/{org}/code-scanning/alerts'],
          listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
          listAlertsInstances: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
            {},
            { renamed: ['codeScanning', 'listAlertInstances'] },
          ],
          listCodeqlDatabases: ['GET /repos/{owner}/{repo}/code-scanning/codeql/databases'],
          listRecentAnalyses: ['GET /repos/{owner}/{repo}/code-scanning/analyses'],
          updateAlert: ['PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'],
          updateDefaultSetup: ['PATCH /repos/{owner}/{repo}/code-scanning/default-setup'],
          uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs'],
        },
        codesOfConduct: {
          getAllCodesOfConduct: ['GET /codes_of_conduct'],
          getConductCode: ['GET /codes_of_conduct/{key}'],
        },
        codespaces: {
          addRepositoryForSecretForAuthenticatedUser: [
            'PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
          ],
          addSelectedRepoToOrgSecret: [
            'PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}',
          ],
          codespaceMachinesForAuthenticatedUser: ['GET /user/codespaces/{codespace_name}/machines'],
          createForAuthenticatedUser: ['POST /user/codespaces'],
          createOrUpdateOrgSecret: ['PUT /orgs/{org}/codespaces/secrets/{secret_name}'],
          createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
          createOrUpdateSecretForAuthenticatedUser: ['PUT /user/codespaces/secrets/{secret_name}'],
          createWithPrForAuthenticatedUser: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces',
          ],
          createWithRepoForAuthenticatedUser: ['POST /repos/{owner}/{repo}/codespaces'],
          deleteCodespacesBillingUsers: ['DELETE /orgs/{org}/codespaces/billing/selected_users'],
          deleteForAuthenticatedUser: ['DELETE /user/codespaces/{codespace_name}'],
          deleteFromOrganization: [
            'DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}',
          ],
          deleteOrgSecret: ['DELETE /orgs/{org}/codespaces/secrets/{secret_name}'],
          deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
          deleteSecretForAuthenticatedUser: ['DELETE /user/codespaces/secrets/{secret_name}'],
          exportForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/exports'],
          getCodespacesForUserInOrg: ['GET /orgs/{org}/members/{username}/codespaces'],
          getExportDetailsForAuthenticatedUser: [
            'GET /user/codespaces/{codespace_name}/exports/{export_id}',
          ],
          getForAuthenticatedUser: ['GET /user/codespaces/{codespace_name}'],
          getOrgPublicKey: ['GET /orgs/{org}/codespaces/secrets/public-key'],
          getOrgSecret: ['GET /orgs/{org}/codespaces/secrets/{secret_name}'],
          getPublicKeyForAuthenticatedUser: ['GET /user/codespaces/secrets/public-key'],
          getRepoPublicKey: ['GET /repos/{owner}/{repo}/codespaces/secrets/public-key'],
          getRepoSecret: ['GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
          getSecretForAuthenticatedUser: ['GET /user/codespaces/secrets/{secret_name}'],
          listDevcontainersInRepositoryForAuthenticatedUser: [
            'GET /repos/{owner}/{repo}/codespaces/devcontainers',
          ],
          listForAuthenticatedUser: ['GET /user/codespaces'],
          listInOrganization: [
            'GET /orgs/{org}/codespaces',
            {},
            { renamedParameters: { org_id: 'org' } },
          ],
          listInRepositoryForAuthenticatedUser: ['GET /repos/{owner}/{repo}/codespaces'],
          listOrgSecrets: ['GET /orgs/{org}/codespaces/secrets'],
          listRepoSecrets: ['GET /repos/{owner}/{repo}/codespaces/secrets'],
          listRepositoriesForSecretForAuthenticatedUser: [
            'GET /user/codespaces/secrets/{secret_name}/repositories',
          ],
          listSecretsForAuthenticatedUser: ['GET /user/codespaces/secrets'],
          listSelectedReposForOrgSecret: [
            'GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories',
          ],
          preFlightWithRepoForAuthenticatedUser: ['GET /repos/{owner}/{repo}/codespaces/new'],
          publishForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/publish'],
          removeRepositoryForSecretForAuthenticatedUser: [
            'DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
          ],
          removeSelectedRepoFromOrgSecret: [
            'DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}',
          ],
          repoMachinesForAuthenticatedUser: ['GET /repos/{owner}/{repo}/codespaces/machines'],
          setCodespacesBilling: ['PUT /orgs/{org}/codespaces/billing'],
          setCodespacesBillingUsers: ['POST /orgs/{org}/codespaces/billing/selected_users'],
          setRepositoriesForSecretForAuthenticatedUser: [
            'PUT /user/codespaces/secrets/{secret_name}/repositories',
          ],
          setSelectedReposForOrgSecret: [
            'PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories',
          ],
          startForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/start'],
          stopForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/stop'],
          stopInOrganization: [
            'POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop',
          ],
          updateForAuthenticatedUser: ['PATCH /user/codespaces/{codespace_name}'],
        },
        dependabot: {
          addSelectedRepoToOrgSecret: [
            'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
          ],
          createOrUpdateOrgSecret: ['PUT /orgs/{org}/dependabot/secrets/{secret_name}'],
          createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
          deleteOrgSecret: ['DELETE /orgs/{org}/dependabot/secrets/{secret_name}'],
          deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
          getAlert: ['GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}'],
          getOrgPublicKey: ['GET /orgs/{org}/dependabot/secrets/public-key'],
          getOrgSecret: ['GET /orgs/{org}/dependabot/secrets/{secret_name}'],
          getRepoPublicKey: ['GET /repos/{owner}/{repo}/dependabot/secrets/public-key'],
          getRepoSecret: ['GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
          listAlertsForEnterprise: ['GET /enterprises/{enterprise}/dependabot/alerts'],
          listAlertsForOrg: ['GET /orgs/{org}/dependabot/alerts'],
          listAlertsForRepo: ['GET /repos/{owner}/{repo}/dependabot/alerts'],
          listOrgSecrets: ['GET /orgs/{org}/dependabot/secrets'],
          listRepoSecrets: ['GET /repos/{owner}/{repo}/dependabot/secrets'],
          listSelectedReposForOrgSecret: [
            'GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
          ],
          removeSelectedRepoFromOrgSecret: [
            'DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
          ],
          setSelectedReposForOrgSecret: [
            'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
          ],
          updateAlert: ['PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}'],
        },
        dependencyGraph: {
          createRepositorySnapshot: ['POST /repos/{owner}/{repo}/dependency-graph/snapshots'],
          diffRange: ['GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}'],
          exportSbom: ['GET /repos/{owner}/{repo}/dependency-graph/sbom'],
        },
        emojis: { get: ['GET /emojis'] },
        gists: {
          checkIsStarred: ['GET /gists/{gist_id}/star'],
          create: ['POST /gists'],
          createComment: ['POST /gists/{gist_id}/comments'],
          delete: ['DELETE /gists/{gist_id}'],
          deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
          fork: ['POST /gists/{gist_id}/forks'],
          get: ['GET /gists/{gist_id}'],
          getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
          getRevision: ['GET /gists/{gist_id}/{sha}'],
          list: ['GET /gists'],
          listComments: ['GET /gists/{gist_id}/comments'],
          listCommits: ['GET /gists/{gist_id}/commits'],
          listForUser: ['GET /users/{username}/gists'],
          listForks: ['GET /gists/{gist_id}/forks'],
          listPublic: ['GET /gists/public'],
          listStarred: ['GET /gists/starred'],
          star: ['PUT /gists/{gist_id}/star'],
          unstar: ['DELETE /gists/{gist_id}/star'],
          update: ['PATCH /gists/{gist_id}'],
          updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}'],
        },
        git: {
          createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
          createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
          createRef: ['POST /repos/{owner}/{repo}/git/refs'],
          createTag: ['POST /repos/{owner}/{repo}/git/tags'],
          createTree: ['POST /repos/{owner}/{repo}/git/trees'],
          deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
          getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
          getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
          getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
          getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
          getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
          listMatchingRefs: ['GET /repos/{owner}/{repo}/git/matching-refs/{ref}'],
          updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}'],
        },
        gitignore: {
          getAllTemplates: ['GET /gitignore/templates'],
          getTemplate: ['GET /gitignore/templates/{name}'],
        },
        interactions: {
          getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
          getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
          getRestrictionsForRepo: ['GET /repos/{owner}/{repo}/interaction-limits'],
          getRestrictionsForYourPublicRepos: [
            'GET /user/interaction-limits',
            {},
            { renamed: ['interactions', 'getRestrictionsForAuthenticatedUser'] },
          ],
          removeRestrictionsForAuthenticatedUser: ['DELETE /user/interaction-limits'],
          removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
          removeRestrictionsForRepo: ['DELETE /repos/{owner}/{repo}/interaction-limits'],
          removeRestrictionsForYourPublicRepos: [
            'DELETE /user/interaction-limits',
            {},
            { renamed: ['interactions', 'removeRestrictionsForAuthenticatedUser'] },
          ],
          setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
          setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
          setRestrictionsForRepo: ['PUT /repos/{owner}/{repo}/interaction-limits'],
          setRestrictionsForYourPublicRepos: [
            'PUT /user/interaction-limits',
            {},
            { renamed: ['interactions', 'setRestrictionsForAuthenticatedUser'] },
          ],
        },
        issues: {
          addAssignees: ['POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'],
          addLabels: ['POST /repos/{owner}/{repo}/issues/{issue_number}/labels'],
          checkUserCanBeAssigned: ['GET /repos/{owner}/{repo}/assignees/{assignee}'],
          checkUserCanBeAssignedToIssue: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}',
          ],
          create: ['POST /repos/{owner}/{repo}/issues'],
          createComment: ['POST /repos/{owner}/{repo}/issues/{issue_number}/comments'],
          createLabel: ['POST /repos/{owner}/{repo}/labels'],
          createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
          deleteComment: ['DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'],
          deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
          deleteMilestone: ['DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'],
          get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
          getComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}'],
          getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
          getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
          getMilestone: ['GET /repos/{owner}/{repo}/milestones/{milestone_number}'],
          list: ['GET /issues'],
          listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
          listComments: ['GET /repos/{owner}/{repo}/issues/{issue_number}/comments'],
          listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
          listEvents: ['GET /repos/{owner}/{repo}/issues/{issue_number}/events'],
          listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
          listEventsForTimeline: ['GET /repos/{owner}/{repo}/issues/{issue_number}/timeline'],
          listForAuthenticatedUser: ['GET /user/issues'],
          listForOrg: ['GET /orgs/{org}/issues'],
          listForRepo: ['GET /repos/{owner}/{repo}/issues'],
          listLabelsForMilestone: [
            'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
          ],
          listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
          listLabelsOnIssue: ['GET /repos/{owner}/{repo}/issues/{issue_number}/labels'],
          listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
          lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
          removeAllLabels: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'],
          removeAssignees: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'],
          removeLabel: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'],
          setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
          unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
          update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
          updateComment: ['PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'],
          updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
          updateMilestone: ['PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'],
        },
        licenses: {
          get: ['GET /licenses/{license}'],
          getAllCommonlyUsed: ['GET /licenses'],
          getForRepo: ['GET /repos/{owner}/{repo}/license'],
        },
        markdown: {
          render: ['POST /markdown'],
          renderRaw: [
            'POST /markdown/raw',
            { headers: { 'content-type': 'text/plain; charset=utf-8' } },
          ],
        },
        meta: {
          get: ['GET /meta'],
          getAllVersions: ['GET /versions'],
          getOctocat: ['GET /octocat'],
          getZen: ['GET /zen'],
          root: ['GET /'],
        },
        migrations: {
          cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
          deleteArchiveForAuthenticatedUser: ['DELETE /user/migrations/{migration_id}/archive'],
          deleteArchiveForOrg: ['DELETE /orgs/{org}/migrations/{migration_id}/archive'],
          downloadArchiveForOrg: ['GET /orgs/{org}/migrations/{migration_id}/archive'],
          getArchiveForAuthenticatedUser: ['GET /user/migrations/{migration_id}/archive'],
          getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
          getImportStatus: ['GET /repos/{owner}/{repo}/import'],
          getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
          getStatusForAuthenticatedUser: ['GET /user/migrations/{migration_id}'],
          getStatusForOrg: ['GET /orgs/{org}/migrations/{migration_id}'],
          listForAuthenticatedUser: ['GET /user/migrations'],
          listForOrg: ['GET /orgs/{org}/migrations'],
          listReposForAuthenticatedUser: ['GET /user/migrations/{migration_id}/repositories'],
          listReposForOrg: ['GET /orgs/{org}/migrations/{migration_id}/repositories'],
          listReposForUser: [
            'GET /user/migrations/{migration_id}/repositories',
            {},
            { renamed: ['migrations', 'listReposForAuthenticatedUser'] },
          ],
          mapCommitAuthor: ['PATCH /repos/{owner}/{repo}/import/authors/{author_id}'],
          setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
          startForAuthenticatedUser: ['POST /user/migrations'],
          startForOrg: ['POST /orgs/{org}/migrations'],
          startImport: ['PUT /repos/{owner}/{repo}/import'],
          unlockRepoForAuthenticatedUser: [
            'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock',
          ],
          unlockRepoForOrg: ['DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock'],
          updateImport: ['PATCH /repos/{owner}/{repo}/import'],
        },
        orgs: {
          addSecurityManagerTeam: ['PUT /orgs/{org}/security-managers/teams/{team_slug}'],
          blockUser: ['PUT /orgs/{org}/blocks/{username}'],
          cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
          checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
          checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
          checkPublicMembershipForUser: ['GET /orgs/{org}/public_members/{username}'],
          convertMemberToOutsideCollaborator: ['PUT /orgs/{org}/outside_collaborators/{username}'],
          createInvitation: ['POST /orgs/{org}/invitations'],
          createWebhook: ['POST /orgs/{org}/hooks'],
          delete: ['DELETE /orgs/{org}'],
          deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
          enableOrDisableSecurityProductOnAllOrgRepos: [
            'POST /orgs/{org}/{security_product}/{enablement}',
          ],
          get: ['GET /orgs/{org}'],
          getMembershipForAuthenticatedUser: ['GET /user/memberships/orgs/{org}'],
          getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
          getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
          getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
          getWebhookDelivery: ['GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'],
          list: ['GET /organizations'],
          listAppInstallations: ['GET /orgs/{org}/installations'],
          listBlockedUsers: ['GET /orgs/{org}/blocks'],
          listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
          listForAuthenticatedUser: ['GET /user/orgs'],
          listForUser: ['GET /users/{username}/orgs'],
          listInvitationTeams: ['GET /orgs/{org}/invitations/{invitation_id}/teams'],
          listMembers: ['GET /orgs/{org}/members'],
          listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
          listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
          listPatGrantRepositories: [
            'GET /organizations/{org}/personal-access-tokens/{pat_id}/repositories',
          ],
          listPatGrantRequestRepositories: [
            'GET /organizations/{org}/personal-access-token-requests/{pat_request_id}/repositories',
          ],
          listPatGrantRequests: ['GET /organizations/{org}/personal-access-token-requests'],
          listPatGrants: ['GET /organizations/{org}/personal-access-tokens'],
          listPendingInvitations: ['GET /orgs/{org}/invitations'],
          listPublicMembers: ['GET /orgs/{org}/public_members'],
          listSecurityManagerTeams: ['GET /orgs/{org}/security-managers'],
          listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
          listWebhooks: ['GET /orgs/{org}/hooks'],
          pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
          redeliverWebhookDelivery: [
            'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
          ],
          removeMember: ['DELETE /orgs/{org}/members/{username}'],
          removeMembershipForUser: ['DELETE /orgs/{org}/memberships/{username}'],
          removeOutsideCollaborator: ['DELETE /orgs/{org}/outside_collaborators/{username}'],
          removePublicMembershipForAuthenticatedUser: [
            'DELETE /orgs/{org}/public_members/{username}',
          ],
          removeSecurityManagerTeam: ['DELETE /orgs/{org}/security-managers/teams/{team_slug}'],
          reviewPatGrantRequest: [
            'POST /organizations/{org}/personal-access-token-requests/{pat_request_id}',
          ],
          reviewPatGrantRequestsInBulk: [
            'POST /organizations/{org}/personal-access-token-requests',
          ],
          setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
          setPublicMembershipForAuthenticatedUser: ['PUT /orgs/{org}/public_members/{username}'],
          unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
          update: ['PATCH /orgs/{org}'],
          updateMembershipForAuthenticatedUser: ['PATCH /user/memberships/orgs/{org}'],
          updatePatAccess: ['POST /organizations/{org}/personal-access-tokens/{pat_id}'],
          updatePatAccesses: ['POST /organizations/{org}/personal-access-tokens'],
          updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
          updateWebhookConfigForOrg: ['PATCH /orgs/{org}/hooks/{hook_id}/config'],
        },
        packages: {
          deletePackageForAuthenticatedUser: [
            'DELETE /user/packages/{package_type}/{package_name}',
          ],
          deletePackageForOrg: ['DELETE /orgs/{org}/packages/{package_type}/{package_name}'],
          deletePackageForUser: ['DELETE /users/{username}/packages/{package_type}/{package_name}'],
          deletePackageVersionForAuthenticatedUser: [
            'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          deletePackageVersionForOrg: [
            'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          deletePackageVersionForUser: [
            'DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          getAllPackageVersionsForAPackageOwnedByAnOrg: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
            {},
            { renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg'] },
          ],
          getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions',
            {},
            { renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'] },
          ],
          getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions',
          ],
          getAllPackageVersionsForPackageOwnedByOrg: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
          ],
          getAllPackageVersionsForPackageOwnedByUser: [
            'GET /users/{username}/packages/{package_type}/{package_name}/versions',
          ],
          getPackageForAuthenticatedUser: ['GET /user/packages/{package_type}/{package_name}'],
          getPackageForOrganization: ['GET /orgs/{org}/packages/{package_type}/{package_name}'],
          getPackageForUser: ['GET /users/{username}/packages/{package_type}/{package_name}'],
          getPackageVersionForAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          getPackageVersionForOrganization: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          getPackageVersionForUser: [
            'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
          ],
          listDockerMigrationConflictingPackagesForAuthenticatedUser: [
            'GET /user/docker/conflicts',
          ],
          listDockerMigrationConflictingPackagesForOrganization: [
            'GET /orgs/{org}/docker/conflicts',
          ],
          listDockerMigrationConflictingPackagesForUser: ['GET /users/{username}/docker/conflicts'],
          listPackagesForAuthenticatedUser: ['GET /user/packages'],
          listPackagesForOrganization: ['GET /orgs/{org}/packages'],
          listPackagesForUser: ['GET /users/{username}/packages'],
          restorePackageForAuthenticatedUser: [
            'POST /user/packages/{package_type}/{package_name}/restore{?token}',
          ],
          restorePackageForOrg: [
            'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}',
          ],
          restorePackageForUser: [
            'POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}',
          ],
          restorePackageVersionForAuthenticatedUser: [
            'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
          ],
          restorePackageVersionForOrg: [
            'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
          ],
          restorePackageVersionForUser: [
            'POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
          ],
        },
        projects: {
          addCollaborator: ['PUT /projects/{project_id}/collaborators/{username}'],
          createCard: ['POST /projects/columns/{column_id}/cards'],
          createColumn: ['POST /projects/{project_id}/columns'],
          createForAuthenticatedUser: ['POST /user/projects'],
          createForOrg: ['POST /orgs/{org}/projects'],
          createForRepo: ['POST /repos/{owner}/{repo}/projects'],
          delete: ['DELETE /projects/{project_id}'],
          deleteCard: ['DELETE /projects/columns/cards/{card_id}'],
          deleteColumn: ['DELETE /projects/columns/{column_id}'],
          get: ['GET /projects/{project_id}'],
          getCard: ['GET /projects/columns/cards/{card_id}'],
          getColumn: ['GET /projects/columns/{column_id}'],
          getPermissionForUser: ['GET /projects/{project_id}/collaborators/{username}/permission'],
          listCards: ['GET /projects/columns/{column_id}/cards'],
          listCollaborators: ['GET /projects/{project_id}/collaborators'],
          listColumns: ['GET /projects/{project_id}/columns'],
          listForOrg: ['GET /orgs/{org}/projects'],
          listForRepo: ['GET /repos/{owner}/{repo}/projects'],
          listForUser: ['GET /users/{username}/projects'],
          moveCard: ['POST /projects/columns/cards/{card_id}/moves'],
          moveColumn: ['POST /projects/columns/{column_id}/moves'],
          removeCollaborator: ['DELETE /projects/{project_id}/collaborators/{username}'],
          update: ['PATCH /projects/{project_id}'],
          updateCard: ['PATCH /projects/columns/cards/{card_id}'],
          updateColumn: ['PATCH /projects/columns/{column_id}'],
        },
        pulls: {
          checkIfMerged: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
          create: ['POST /repos/{owner}/{repo}/pulls'],
          createReplyForReviewComment: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies',
          ],
          createReview: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
          createReviewComment: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'],
          deletePendingReview: [
            'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}',
          ],
          deleteReviewComment: ['DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
          dismissReview: [
            'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals',
          ],
          get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
          getReview: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'],
          getReviewComment: ['GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
          list: ['GET /repos/{owner}/{repo}/pulls'],
          listCommentsForReview: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
          ],
          listCommits: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'],
          listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
          listRequestedReviewers: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
          ],
          listReviewComments: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'],
          listReviewCommentsForRepo: ['GET /repos/{owner}/{repo}/pulls/comments'],
          listReviews: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
          merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
          removeRequestedReviewers: [
            'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
          ],
          requestReviewers: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'],
          submitReview: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events',
          ],
          update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
          updateBranch: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch'],
          updateReview: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'],
          updateReviewComment: ['PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
        },
        rateLimit: { get: ['GET /rate_limit'] },
        reactions: {
          createForCommitComment: ['POST /repos/{owner}/{repo}/comments/{comment_id}/reactions'],
          createForIssue: ['POST /repos/{owner}/{repo}/issues/{issue_number}/reactions'],
          createForIssueComment: [
            'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
          ],
          createForPullRequestReviewComment: [
            'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
          ],
          createForRelease: ['POST /repos/{owner}/{repo}/releases/{release_id}/reactions'],
          createForTeamDiscussionCommentInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
          ],
          createForTeamDiscussionInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
          ],
          deleteForCommitComment: [
            'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}',
          ],
          deleteForIssue: [
            'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}',
          ],
          deleteForIssueComment: [
            'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}',
          ],
          deleteForPullRequestComment: [
            'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}',
          ],
          deleteForRelease: [
            'DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}',
          ],
          deleteForTeamDiscussion: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}',
          ],
          deleteForTeamDiscussionComment: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}',
          ],
          listForCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}/reactions'],
          listForIssue: ['GET /repos/{owner}/{repo}/issues/{issue_number}/reactions'],
          listForIssueComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'],
          listForPullRequestReviewComment: [
            'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
          ],
          listForRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}/reactions'],
          listForTeamDiscussionCommentInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
          ],
          listForTeamDiscussionInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
          ],
        },
        repos: {
          acceptInvitation: [
            'PATCH /user/repository_invitations/{invitation_id}',
            {},
            { renamed: ['repos', 'acceptInvitationForAuthenticatedUser'] },
          ],
          acceptInvitationForAuthenticatedUser: [
            'PATCH /user/repository_invitations/{invitation_id}',
          ],
          addAppAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            { mapToData: 'apps' },
          ],
          addCollaborator: ['PUT /repos/{owner}/{repo}/collaborators/{username}'],
          addStatusCheckContexts: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            { mapToData: 'contexts' },
          ],
          addTeamAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            { mapToData: 'teams' },
          ],
          addUserAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            { mapToData: 'users' },
          ],
          checkCollaborator: ['GET /repos/{owner}/{repo}/collaborators/{username}'],
          checkVulnerabilityAlerts: ['GET /repos/{owner}/{repo}/vulnerability-alerts'],
          codeownersErrors: ['GET /repos/{owner}/{repo}/codeowners/errors'],
          compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
          compareCommitsWithBasehead: ['GET /repos/{owner}/{repo}/compare/{basehead}'],
          createAutolink: ['POST /repos/{owner}/{repo}/autolinks'],
          createCommitComment: ['POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'],
          createCommitSignatureProtection: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
          ],
          createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
          createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
          createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
          createDeploymentBranchPolicy: [
            'POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies',
          ],
          createDeploymentProtectionRule: [
            'POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules',
          ],
          createDeploymentStatus: [
            'POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
          ],
          createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
          createForAuthenticatedUser: ['POST /user/repos'],
          createFork: ['POST /repos/{owner}/{repo}/forks'],
          createInOrg: ['POST /orgs/{org}/repos'],
          createOrUpdateEnvironment: ['PUT /repos/{owner}/{repo}/environments/{environment_name}'],
          createOrUpdateFileContents: ['PUT /repos/{owner}/{repo}/contents/{path}'],
          createOrgRuleset: ['POST /orgs/{org}/rulesets'],
          createPagesDeployment: ['POST /repos/{owner}/{repo}/pages/deployment'],
          createPagesSite: ['POST /repos/{owner}/{repo}/pages'],
          createRelease: ['POST /repos/{owner}/{repo}/releases'],
          createRepoRuleset: ['POST /repos/{owner}/{repo}/rulesets'],
          createTagProtection: ['POST /repos/{owner}/{repo}/tags/protection'],
          createUsingTemplate: ['POST /repos/{template_owner}/{template_repo}/generate'],
          createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
          declineInvitation: [
            'DELETE /user/repository_invitations/{invitation_id}',
            {},
            { renamed: ['repos', 'declineInvitationForAuthenticatedUser'] },
          ],
          declineInvitationForAuthenticatedUser: [
            'DELETE /user/repository_invitations/{invitation_id}',
          ],
          delete: ['DELETE /repos/{owner}/{repo}'],
          deleteAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
          ],
          deleteAdminBranchProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
          ],
          deleteAnEnvironment: ['DELETE /repos/{owner}/{repo}/environments/{environment_name}'],
          deleteAutolink: ['DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}'],
          deleteBranchProtection: ['DELETE /repos/{owner}/{repo}/branches/{branch}/protection'],
          deleteCommitComment: ['DELETE /repos/{owner}/{repo}/comments/{comment_id}'],
          deleteCommitSignatureProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
          ],
          deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
          deleteDeployment: ['DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'],
          deleteDeploymentBranchPolicy: [
            'DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
          ],
          deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
          deleteInvitation: ['DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'],
          deleteOrgRuleset: ['DELETE /orgs/{org}/rulesets/{ruleset_id}'],
          deletePagesSite: ['DELETE /repos/{owner}/{repo}/pages'],
          deletePullRequestReviewProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
          ],
          deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
          deleteReleaseAsset: ['DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'],
          deleteRepoRuleset: ['DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}'],
          deleteTagProtection: ['DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}'],
          deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
          disableAutomatedSecurityFixes: ['DELETE /repos/{owner}/{repo}/automated-security-fixes'],
          disableDeploymentProtectionRule: [
            'DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}',
          ],
          disableLfsForRepo: ['DELETE /repos/{owner}/{repo}/lfs'],
          disableVulnerabilityAlerts: ['DELETE /repos/{owner}/{repo}/vulnerability-alerts'],
          downloadArchive: [
            'GET /repos/{owner}/{repo}/zipball/{ref}',
            {},
            { renamed: ['repos', 'downloadZipballArchive'] },
          ],
          downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
          downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
          enableAutomatedSecurityFixes: ['PUT /repos/{owner}/{repo}/automated-security-fixes'],
          enableLfsForRepo: ['PUT /repos/{owner}/{repo}/lfs'],
          enableVulnerabilityAlerts: ['PUT /repos/{owner}/{repo}/vulnerability-alerts'],
          generateReleaseNotes: ['POST /repos/{owner}/{repo}/releases/generate-notes'],
          get: ['GET /repos/{owner}/{repo}'],
          getAccessRestrictions: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
          ],
          getAdminBranchProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
          ],
          getAllDeploymentProtectionRules: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules',
          ],
          getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
          getAllStatusCheckContexts: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          ],
          getAllTopics: ['GET /repos/{owner}/{repo}/topics'],
          getAppsWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          ],
          getAutolink: ['GET /repos/{owner}/{repo}/autolinks/{autolink_id}'],
          getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
          getBranchProtection: ['GET /repos/{owner}/{repo}/branches/{branch}/protection'],
          getBranchRules: ['GET /repos/{owner}/{repo}/rules/branches/{branch}'],
          getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
          getCodeFrequencyStats: ['GET /repos/{owner}/{repo}/stats/code_frequency'],
          getCollaboratorPermissionLevel: [
            'GET /repos/{owner}/{repo}/collaborators/{username}/permission',
          ],
          getCombinedStatusForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/status'],
          getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
          getCommitActivityStats: ['GET /repos/{owner}/{repo}/stats/commit_activity'],
          getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
          getCommitSignatureProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
          ],
          getCommunityProfileMetrics: ['GET /repos/{owner}/{repo}/community/profile'],
          getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
          getContributorsStats: ['GET /repos/{owner}/{repo}/stats/contributors'],
          getCustomDeploymentProtectionRule: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}',
          ],
          getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
          getDeployment: ['GET /repos/{owner}/{repo}/deployments/{deployment_id}'],
          getDeploymentBranchPolicy: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
          ],
          getDeploymentStatus: [
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}',
          ],
          getEnvironment: ['GET /repos/{owner}/{repo}/environments/{environment_name}'],
          getLatestPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/latest'],
          getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
          getOrgRuleset: ['GET /orgs/{org}/rulesets/{ruleset_id}'],
          getOrgRulesets: ['GET /orgs/{org}/rulesets'],
          getPages: ['GET /repos/{owner}/{repo}/pages'],
          getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
          getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
          getParticipationStats: ['GET /repos/{owner}/{repo}/stats/participation'],
          getPullRequestReviewProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
          ],
          getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
          getReadme: ['GET /repos/{owner}/{repo}/readme'],
          getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
          getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
          getReleaseAsset: ['GET /repos/{owner}/{repo}/releases/assets/{asset_id}'],
          getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
          getRepoRuleset: ['GET /repos/{owner}/{repo}/rulesets/{ruleset_id}'],
          getRepoRulesets: ['GET /repos/{owner}/{repo}/rulesets'],
          getStatusChecksProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          ],
          getTeamsWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          ],
          getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
          getTopReferrers: ['GET /repos/{owner}/{repo}/traffic/popular/referrers'],
          getUsersWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          ],
          getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
          getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
          getWebhookConfigForRepo: ['GET /repos/{owner}/{repo}/hooks/{hook_id}/config'],
          getWebhookDelivery: [
            'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}',
          ],
          listAutolinks: ['GET /repos/{owner}/{repo}/autolinks'],
          listBranches: ['GET /repos/{owner}/{repo}/branches'],
          listBranchesForHeadCommit: [
            'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
          ],
          listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
          listCommentsForCommit: ['GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'],
          listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
          listCommitStatusesForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/statuses'],
          listCommits: ['GET /repos/{owner}/{repo}/commits'],
          listContributors: ['GET /repos/{owner}/{repo}/contributors'],
          listCustomDeploymentRuleIntegrations: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps',
          ],
          listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
          listDeploymentBranchPolicies: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies',
          ],
          listDeploymentStatuses: [
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
          ],
          listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
          listForAuthenticatedUser: ['GET /user/repos'],
          listForOrg: ['GET /orgs/{org}/repos'],
          listForUser: ['GET /users/{username}/repos'],
          listForks: ['GET /repos/{owner}/{repo}/forks'],
          listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
          listInvitationsForAuthenticatedUser: ['GET /user/repository_invitations'],
          listLanguages: ['GET /repos/{owner}/{repo}/languages'],
          listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
          listPublic: ['GET /repositories'],
          listPullRequestsAssociatedWithCommit: [
            'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
          ],
          listReleaseAssets: ['GET /repos/{owner}/{repo}/releases/{release_id}/assets'],
          listReleases: ['GET /repos/{owner}/{repo}/releases'],
          listTagProtection: ['GET /repos/{owner}/{repo}/tags/protection'],
          listTags: ['GET /repos/{owner}/{repo}/tags'],
          listTeams: ['GET /repos/{owner}/{repo}/teams'],
          listWebhookDeliveries: ['GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'],
          listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
          merge: ['POST /repos/{owner}/{repo}/merges'],
          mergeUpstream: ['POST /repos/{owner}/{repo}/merge-upstream'],
          pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
          redeliverWebhookDelivery: [
            'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
          ],
          removeAppAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            { mapToData: 'apps' },
          ],
          removeCollaborator: ['DELETE /repos/{owner}/{repo}/collaborators/{username}'],
          removeStatusCheckContexts: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            { mapToData: 'contexts' },
          ],
          removeStatusCheckProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          ],
          removeTeamAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            { mapToData: 'teams' },
          ],
          removeUserAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            { mapToData: 'users' },
          ],
          renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
          replaceAllTopics: ['PUT /repos/{owner}/{repo}/topics'],
          requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
          setAdminBranchProtection: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
          ],
          setAppAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            { mapToData: 'apps' },
          ],
          setStatusCheckContexts: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            { mapToData: 'contexts' },
          ],
          setTeamAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            { mapToData: 'teams' },
          ],
          setUserAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            { mapToData: 'users' },
          ],
          testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
          transfer: ['POST /repos/{owner}/{repo}/transfer'],
          update: ['PATCH /repos/{owner}/{repo}'],
          updateBranchProtection: ['PUT /repos/{owner}/{repo}/branches/{branch}/protection'],
          updateCommitComment: ['PATCH /repos/{owner}/{repo}/comments/{comment_id}'],
          updateDeploymentBranchPolicy: [
            'PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}',
          ],
          updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
          updateInvitation: ['PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'],
          updateOrgRuleset: ['PUT /orgs/{org}/rulesets/{ruleset_id}'],
          updatePullRequestReviewProtection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
          ],
          updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
          updateReleaseAsset: ['PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'],
          updateRepoRuleset: ['PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}'],
          updateStatusCheckPotection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
            {},
            { renamed: ['repos', 'updateStatusCheckProtection'] },
          ],
          updateStatusCheckProtection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          ],
          updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
          updateWebhookConfigForRepo: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'],
          uploadReleaseAsset: [
            'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
            { baseUrl: 'https://uploads.github.com' },
          ],
        },
        search: {
          code: ['GET /search/code'],
          commits: ['GET /search/commits'],
          issuesAndPullRequests: ['GET /search/issues'],
          labels: ['GET /search/labels'],
          repos: ['GET /search/repositories'],
          topics: ['GET /search/topics'],
          users: ['GET /search/users'],
        },
        secretScanning: {
          getAlert: ['GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'],
          listAlertsForEnterprise: ['GET /enterprises/{enterprise}/secret-scanning/alerts'],
          listAlertsForOrg: ['GET /orgs/{org}/secret-scanning/alerts'],
          listAlertsForRepo: ['GET /repos/{owner}/{repo}/secret-scanning/alerts'],
          listLocationsForAlert: [
            'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations',
          ],
          updateAlert: ['PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'],
        },
        securityAdvisories: {
          createPrivateVulnerabilityReport: [
            'POST /repos/{owner}/{repo}/security-advisories/reports',
          ],
          createRepositoryAdvisory: ['POST /repos/{owner}/{repo}/security-advisories'],
          getRepositoryAdvisory: ['GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}'],
          listRepositoryAdvisories: ['GET /repos/{owner}/{repo}/security-advisories'],
          updateRepositoryAdvisory: ['PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}'],
        },
        teams: {
          addOrUpdateMembershipForUserInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}',
          ],
          addOrUpdateProjectPermissionsInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}',
          ],
          addOrUpdateRepoPermissionsInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}',
          ],
          checkPermissionsForProjectInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}',
          ],
          checkPermissionsForRepoInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'],
          create: ['POST /orgs/{org}/teams'],
          createDiscussionCommentInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
          ],
          createDiscussionInOrg: ['POST /orgs/{org}/teams/{team_slug}/discussions'],
          deleteDiscussionCommentInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
          ],
          deleteDiscussionInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
          ],
          deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
          getByName: ['GET /orgs/{org}/teams/{team_slug}'],
          getDiscussionCommentInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
          ],
          getDiscussionInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'],
          getMembershipForUserInOrg: ['GET /orgs/{org}/teams/{team_slug}/memberships/{username}'],
          list: ['GET /orgs/{org}/teams'],
          listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
          listDiscussionCommentsInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
          ],
          listDiscussionsInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions'],
          listForAuthenticatedUser: ['GET /user/teams'],
          listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
          listPendingInvitationsInOrg: ['GET /orgs/{org}/teams/{team_slug}/invitations'],
          listProjectsInOrg: ['GET /orgs/{org}/teams/{team_slug}/projects'],
          listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
          removeMembershipForUserInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}',
          ],
          removeProjectInOrg: ['DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'],
          removeRepoInOrg: ['DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'],
          updateDiscussionCommentInOrg: [
            'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
          ],
          updateDiscussionInOrg: [
            'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
          ],
          updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}'],
        },
        users: {
          addEmailForAuthenticated: [
            'POST /user/emails',
            {},
            { renamed: ['users', 'addEmailForAuthenticatedUser'] },
          ],
          addEmailForAuthenticatedUser: ['POST /user/emails'],
          addSocialAccountForAuthenticatedUser: ['POST /user/social_accounts'],
          block: ['PUT /user/blocks/{username}'],
          checkBlocked: ['GET /user/blocks/{username}'],
          checkFollowingForUser: ['GET /users/{username}/following/{target_user}'],
          checkPersonIsFollowedByAuthenticated: ['GET /user/following/{username}'],
          createGpgKeyForAuthenticated: [
            'POST /user/gpg_keys',
            {},
            { renamed: ['users', 'createGpgKeyForAuthenticatedUser'] },
          ],
          createGpgKeyForAuthenticatedUser: ['POST /user/gpg_keys'],
          createPublicSshKeyForAuthenticated: [
            'POST /user/keys',
            {},
            { renamed: ['users', 'createPublicSshKeyForAuthenticatedUser'] },
          ],
          createPublicSshKeyForAuthenticatedUser: ['POST /user/keys'],
          createSshSigningKeyForAuthenticatedUser: ['POST /user/ssh_signing_keys'],
          deleteEmailForAuthenticated: [
            'DELETE /user/emails',
            {},
            { renamed: ['users', 'deleteEmailForAuthenticatedUser'] },
          ],
          deleteEmailForAuthenticatedUser: ['DELETE /user/emails'],
          deleteGpgKeyForAuthenticated: [
            'DELETE /user/gpg_keys/{gpg_key_id}',
            {},
            { renamed: ['users', 'deleteGpgKeyForAuthenticatedUser'] },
          ],
          deleteGpgKeyForAuthenticatedUser: ['DELETE /user/gpg_keys/{gpg_key_id}'],
          deletePublicSshKeyForAuthenticated: [
            'DELETE /user/keys/{key_id}',
            {},
            { renamed: ['users', 'deletePublicSshKeyForAuthenticatedUser'] },
          ],
          deletePublicSshKeyForAuthenticatedUser: ['DELETE /user/keys/{key_id}'],
          deleteSocialAccountForAuthenticatedUser: ['DELETE /user/social_accounts'],
          deleteSshSigningKeyForAuthenticatedUser: [
            'DELETE /user/ssh_signing_keys/{ssh_signing_key_id}',
          ],
          follow: ['PUT /user/following/{username}'],
          getAuthenticated: ['GET /user'],
          getByUsername: ['GET /users/{username}'],
          getContextForUser: ['GET /users/{username}/hovercard'],
          getGpgKeyForAuthenticated: [
            'GET /user/gpg_keys/{gpg_key_id}',
            {},
            { renamed: ['users', 'getGpgKeyForAuthenticatedUser'] },
          ],
          getGpgKeyForAuthenticatedUser: ['GET /user/gpg_keys/{gpg_key_id}'],
          getPublicSshKeyForAuthenticated: [
            'GET /user/keys/{key_id}',
            {},
            { renamed: ['users', 'getPublicSshKeyForAuthenticatedUser'] },
          ],
          getPublicSshKeyForAuthenticatedUser: ['GET /user/keys/{key_id}'],
          getSshSigningKeyForAuthenticatedUser: ['GET /user/ssh_signing_keys/{ssh_signing_key_id}'],
          list: ['GET /users'],
          listBlockedByAuthenticated: [
            'GET /user/blocks',
            {},
            { renamed: ['users', 'listBlockedByAuthenticatedUser'] },
          ],
          listBlockedByAuthenticatedUser: ['GET /user/blocks'],
          listEmailsForAuthenticated: [
            'GET /user/emails',
            {},
            { renamed: ['users', 'listEmailsForAuthenticatedUser'] },
          ],
          listEmailsForAuthenticatedUser: ['GET /user/emails'],
          listFollowedByAuthenticated: [
            'GET /user/following',
            {},
            { renamed: ['users', 'listFollowedByAuthenticatedUser'] },
          ],
          listFollowedByAuthenticatedUser: ['GET /user/following'],
          listFollowersForAuthenticatedUser: ['GET /user/followers'],
          listFollowersForUser: ['GET /users/{username}/followers'],
          listFollowingForUser: ['GET /users/{username}/following'],
          listGpgKeysForAuthenticated: [
            'GET /user/gpg_keys',
            {},
            { renamed: ['users', 'listGpgKeysForAuthenticatedUser'] },
          ],
          listGpgKeysForAuthenticatedUser: ['GET /user/gpg_keys'],
          listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
          listPublicEmailsForAuthenticated: [
            'GET /user/public_emails',
            {},
            { renamed: ['users', 'listPublicEmailsForAuthenticatedUser'] },
          ],
          listPublicEmailsForAuthenticatedUser: ['GET /user/public_emails'],
          listPublicKeysForUser: ['GET /users/{username}/keys'],
          listPublicSshKeysForAuthenticated: [
            'GET /user/keys',
            {},
            { renamed: ['users', 'listPublicSshKeysForAuthenticatedUser'] },
          ],
          listPublicSshKeysForAuthenticatedUser: ['GET /user/keys'],
          listSocialAccountsForAuthenticatedUser: ['GET /user/social_accounts'],
          listSocialAccountsForUser: ['GET /users/{username}/social_accounts'],
          listSshSigningKeysForAuthenticatedUser: ['GET /user/ssh_signing_keys'],
          listSshSigningKeysForUser: ['GET /users/{username}/ssh_signing_keys'],
          setPrimaryEmailVisibilityForAuthenticated: [
            'PATCH /user/email/visibility',
            {},
            { renamed: ['users', 'setPrimaryEmailVisibilityForAuthenticatedUser'] },
          ],
          setPrimaryEmailVisibilityForAuthenticatedUser: ['PATCH /user/email/visibility'],
          unblock: ['DELETE /user/blocks/{username}'],
          unfollow: ['DELETE /user/following/{username}'],
          updateAuthenticated: ['PATCH /user'],
        },
      }))
        for (const [n, r] of Object.entries(t)) {
          const [t, o, i] = r,
            [s, a] = t.split(/ /),
            l = Object.assign({ method: s, url: a }, o);
          ao.has(e) || ao.set(e, new Map()),
            ao.get(e).set(n, { scope: e, methodName: n, endpointDefaults: l, decorations: i });
        }
      var lo = {
        get({ octokit: e, scope: t, cache: n }, r) {
          if (n[r]) return n[r];
          const { decorations: o, endpointDefaults: i } = ao.get(t).get(r);
          return (
            (n[r] = o
              ? (function (e, t, n, r, o) {
                  const i = e.request.defaults(r);
                  return Object.assign(function (...r) {
                    let s = i.endpoint.merge(...r);
                    if (o.mapToData)
                      return (
                        (s = Object.assign({}, s, { data: s[o.mapToData], [o.mapToData]: void 0 })),
                        i(s)
                      );
                    if (o.renamed) {
                      const [r, i] = o.renamed;
                      e.log.warn(`octokit.${t}.${n}() has been renamed to octokit.${r}.${i}()`);
                    }
                    if ((o.deprecated && e.log.warn(o.deprecated), o.renamedParameters)) {
                      const s = i.endpoint.merge(...r);
                      for (const [r, i] of Object.entries(o.renamedParameters))
                        r in s &&
                          (e.log.warn(
                            `"${r}" parameter is deprecated for "octokit.${t}.${n}()". Use "${i}" instead`,
                          ),
                          i in s || (s[i] = s[r]),
                          delete s[r]);
                      return i(s);
                    }
                    return i(...r);
                  }, i);
                })(e, t, r, i, o)
              : e.request.defaults(i)),
            n[r]
          );
        },
      };
      function uo(e) {
        const t = (function (e) {
          const t = {};
          for (const n of ao.keys()) t[n] = new Proxy({ octokit: e, scope: n, cache: {} }, lo);
          return t;
        })(e);
        return { ...t, rest: t };
      }
      uo.VERSION = '9.0.0';
      const co = new (to.plugin(no, uo, so).defaults({ userAgent: 'octokit-rest.js/20.0.1' }))({
          auth: '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',
        }),
        po = () => {
          const [e, t] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                try {
                  const e = await (async (e, t) =>
                    (await co.repos.get({ owner: e, repo: t })).data)('facebook', 'react');
                  t(e);
                } catch (e) {
                  console.error('RepoData를 가져오는데 실패했습니다. :', e.message);
                }
              })();
            }, []),
            e
          );
        },
        fo = '#5C4B99',
        ho = '#F5F5F5',
        mo = '#fff';
      var go = o(893);
      const yo = () => {
          const e = po(),
            t = ce();
          return (0, go.jsx)(vo, {
            children: (0, go.jsx)(bo, {
              onClick: () => {
                t('/');
              },
              children: e ? `${e.owner.login} / ${e.name}` : null,
            }),
          });
        },
        vo = fr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${fo};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`,
        bo = fr.h1`
  font-size: 24px;
  color: ${mo};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`,
        wo = ({ children: e }) =>
          (0, go.jsxs)(go.Fragment, {
            children: [
              (0, go.jsx)(yo, {}),
              (0, go.jsx)(ko, { children: (0, go.jsx)('main', { children: e }) }),
            ],
          }),
        ko = fr.div`
  margin: 70px auto 0 auto;
  padding: 40px 20px 20px 20px;
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 70px);
`,
        Eo = () => {
          const [e, t] = (0, r.useState)([]),
            [n, o] = (0, r.useState)(null),
            [i, s] = (0, r.useState)(1),
            [a, l] = (0, r.useState)(!0),
            { loading: u, setLoading: c } = (() => {
              const [e, t] = (0, r.useState)(!1),
                [n, o] = (0, r.useState)('Loading...');
              return { loading: e, setLoading: t, loadingMessage: n, setLoadingMessage: o };
            })(),
            {
              error: p,
              setError: d,
              isError: f,
              setIsError: h,
            } = (() => {
              const [e, t] = (0, r.useState)(null),
                [n, o] = (0, r.useState)(!1);
              return { error: e, setError: t, isError: n, setIsError: o };
            })(),
            m = async () => {
              c(!0);
              try {
                const e = await (async (e, t, n) =>
                  (
                    await co.issues.listForRepo({
                      owner: 'facebook',
                      repo: 'react',
                      state: 'open',
                      sort: 'comments',
                      direction: 'desc',
                      per_page: 100,
                      page: n,
                    })
                  ).data)(0, 0, i);
                if (0 === e.length) return void l(!1);
                t(t => [...t, ...e]), s(e => e + 1);
              } catch (e) {
                console.error('이슈 데이터를 불러오는데 실패했습니다. : ', e),
                  h(!0),
                  d({
                    message: e.message || '이슈 데이터를 불러오는데 실패했습니다.',
                    code: e.response?.status,
                  });
              } finally {
                c(!1);
              }
            };
          return (
            (0, r.useEffect)(() => {
              m();
            }, []),
            {
              issues: e,
              loading: u,
              loadMoreIssues: m,
              hasMore: a,
              isError: f,
              error: p,
              loadIssueById: async e => {
                c(!0);
                try {
                  const t = await (async (e, t, n) => {
                    const r = await co.issues.get({
                      owner: 'facebook',
                      repo: 'react',
                      issue_number: n,
                    });
                    return console.log('API Response:', r), r.data;
                  })(0, 0, e);
                  return o(t || null), t || null;
                } catch (e) {
                  return (
                    console.error('이슈 데이터를 불러오는데 실패했습니다. : ', e),
                    h(!0),
                    d({
                      message: e.message || '이슈 데이터를 불러오는데 실패했습니다.',
                      code: e.response?.status,
                    }),
                    null
                  );
                } finally {
                  c(!1);
                }
              },
              issue: n,
              setIssue: o,
            }
          );
        },
        To = ({ issue: e }) =>
          (0, go.jsx)(Ae, {
            to: `/issue/${e.number}`,
            style: { textDecoration: 'none', color: 'inherit' },
            children: (0, go.jsxs)(So, {
              children: [
                (0, go.jsxs)(_o, {
                  children: [
                    (0, go.jsxs)(xo, {
                      children: [
                        (0, go.jsxs)('span', { children: ['#', e.number] }),
                        (0, go.jsx)('span', { children: e.title }),
                      ],
                    }),
                    (0, go.jsx)(Co, {
                      children: (0, go.jsxs)('span', { children: ['코멘트: ', e.comments] }),
                    }),
                  ],
                }),
                (0, go.jsxs)(Po, {
                  children: [
                    (0, go.jsxs)('span', { children: ['작성자: ', e.user?.login] }),
                    (0, go.jsxs)('span', {
                      children: ['작성일: ', new Date(e.created_at).toLocaleDateString('ko-KR')],
                    }),
                  ],
                }),
              ],
            }),
          }),
        So = fr.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;

  &:hover {
    background-color: ${ho};
  }
`,
        _o = fr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,
        xo = fr.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  max-width: calc(100% - 100px);

  & > span:first-child {
    font-weight: bold;
    width: 50px;
    text-align: right;
  }

  & > span:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 70px);
  }
`,
        Po = fr.div`
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  gap: 10px;
`,
        Co = fr.div`
  display: flex;
  gap: 10px;
  width: 80px;
`,
        Oo = () =>
          (0, go.jsx)(Ao, {
            children: (0, go.jsx)('a', {
              href: 'https://www.wanted.co.kr/',
              target: '_blank',
              rel: 'noopener noreferrer',
              children: (0, go.jsx)('img', {
                src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
                alt: '광고 배너',
                style: { width: '100%', height: '100px', objectFit: 'cover', cursor: 'pointer' },
              }),
            }),
          }),
        Ao = fr.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
      var Fo = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        Ro = r.createContext && r.createContext(Fo),
        Do = function () {
          return (
            (Do =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Do.apply(this, arguments)
          );
        },
        Lo = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function Go(e) {
        return (
          e &&
          e.map(function (e, t) {
            return r.createElement(e.tag, Do({ key: t }, e.attr), Go(e.child));
          })
        );
      }
      function Io(e) {
        return function (t) {
          return r.createElement(Uo, Do({ attr: Do({}, e.attr) }, t), Go(e.child));
        };
      }
      function Uo(e) {
        var t = function (t) {
          var n,
            o = e.attr,
            i = e.size,
            s = e.title,
            a = Lo(e, ['attr', 'size', 'title']),
            l = i || t.size || '1em';
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + ' ' : '') + e.className),
            r.createElement(
              'svg',
              Do({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, o, a, {
                className: n,
                style: Do(Do({ color: e.color || t.color }, t.style), e.style),
                height: l,
                width: l,
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              s && r.createElement('title', null, s),
              e.children,
            )
          );
        };
        return void 0 !== Ro
          ? r.createElement(Ro.Consumer, null, function (e) {
              return t(e);
            })
          : t(Fo);
      }
      function zo(e) {
        return Io({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z',
              },
            },
          ],
        })(e);
      }
      const jo = () =>
          (0, go.jsx)(go.Fragment, {
            children: (0, go.jsxs)(No, {
              children: [
                (0, go.jsx)(zo, { className: 'spinner' }),
                (0, go.jsx)('span', { children: 'Loading...' }),
              ],
            }),
          }),
        No = fr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;

  .spinner {
    margin-right: 10px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,
        Mo = () => {
          const { issues: e, loading: t, loadMoreIssues: n, hasMore: o } = Eo(),
            i = (0, r.useRef)(null),
            s = (0, r.useCallback)(
              e => {
                t ||
                  (i.current && i.current.disconnect(),
                  (i.current = new IntersectionObserver(e => {
                    e[0].isIntersecting && o && n();
                  })),
                  e && i.current.observe(e));
              },
              [t, o, n],
            );
          return (
            (0, r.useEffect)(
              () => () => {
                i.current && i.current.disconnect();
              },
              [],
            ),
            (0, go.jsxs)('div', {
              children: [
                e.map((t, n) =>
                  (0, go.jsxs)(
                    'div',
                    {
                      ref: n === e.length - 1 ? s : void 0,
                      children: [
                        n % 4 == 0 && 0 !== n && (0, go.jsx)(Oo, {}),
                        (0, go.jsx)(To, { issue: t }),
                      ],
                    },
                    t.id,
                  ),
                ),
                t && (0, go.jsx)(jo, {}),
              ],
            })
          );
        },
        Bo = () => (0, go.jsx)('div', { children: (0, go.jsx)(Mo, {}) }),
        $o = ({
          children: e,
          variant: t = 'primary',
          size: n = 'medium',
          isFullWidth: r,
          disabled: o,
          ...i
        }) =>
          (0, go.jsx)(Wo, { variant: t, size: n, isFullWidth: r, disabled: o, ...i, children: e }),
        qo = {
          primary: {
            border: `1px solid ${fo}`,
            backgroundColor: fo,
            color: mo,
            hover: { backgroundColor: ho, border: `1px solid ${ho}` },
          },
          secondary: {
            border: `1px solid ${fo}`,
            backgroundColor: 'transparent',
            color: fo,
            hover: { backgroundColor: fo, color: mo },
          },
          textOnly: { border: '1px solid transparent', backgroundColor: 'transparent', color: fo },
        },
        Ho = {
          small: { fontSize: '13px', padding: '3px 9px', fontWeight: '500' },
          medium: { fontSize: '16px', padding: '8px 16px', fontWeight: '600' },
          large: { fontSize: '20px', padding: '10px 20px', fontWeight: '700' },
        },
        Wo = fr.button`
  font-family: inherit;
  outline: none;
  line-height: 24px;
  border-radius: 10px;
  transition: all 0.4s ease;
  width: ${e => (e.isFullWidth ? '100%' : 'auto')};
  cursor: ${e => (e.disabled ? 'not-allowed' : 'pointer')};
  filter: ${e => (e.disabled ? 'opacity(0.5)' : 'none')};
  
  border: ${e => qo[e.variant].border};
  background-color: ${e => qo[e.variant].backgroundColor};
  color: ${e => qo[e.variant].color};
  font-size: ${e => Ho[e.size].fontSize};
  padding: ${e => Ho[e.size].padding};
  font-weight: ${e => Ho[e.size].fontWeight};

  &:hover {
  background-color: ${e =>
    !e.disabled && (qo[e.variant].hover?.backgroundColor || qo[e.variant].backgroundColor)};
  border: ${e => !e.disabled && (qo[e.variant].hover?.border || qo[e.variant].border)};
  color: ${e => qo[e.variant].hover?.color || qo[e.variant].color};
}

  }
`,
        Vo = ({ error: e }) =>
          (0, go.jsxs)(Ko, {
            children: [
              (0, go.jsx)(Qo, { children: e.code }),
              (0, go.jsx)(Yo, { children: e.message }),
              (0, go.jsx)($o, { onClick: () => window.location.reload(), children: '다시 시도' }),
            ],
          }),
        Ko = fr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 40px);
  padding: 20px;
  box-sizing: border-box;
`,
        Qo = fr.span`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
`,
        Yo = fr.span`
  font-size: 24px;
  margin-bottom: 24px;
`,
        Jo = ({ message: e, code: t }) =>
          (0, go.jsx)('div', { children: (0, go.jsx)(Vo, { error: { message: e, code: t } }) }),
        Xo = ({ author: e, created_at: t, commentCount: n }) =>
          e
            ? (0, go.jsxs)(Zo, {
                children: [
                  (0, go.jsx)(ei, { src: e.avatar_url, alt: e.login }),
                  (0, go.jsxs)(ti, {
                    children: [
                      (0, go.jsx)(ni, { children: e.login }),
                      (0, go.jsx)(ri, { children: new Date(t).toLocaleDateString() }),
                    ],
                  }),
                  (0, go.jsxs)(oi, { children: ['코멘트: ', n] }),
                ],
              })
            : null,
        Zo = fr.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`,
        ei = fr.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`,
        ti = fr.div`
  display: flex;
  flex-direction: column;
`,
        ni = fr.span`
  font-weight: bold;
`,
        ri = fr.span`
  font-size: 15px;
  color: #666;
`,
        oi = fr.span`
  margin-left: auto;
  font-weight: bold;
`;
      var ii = o(738);
      function si(e) {
        return e && 'object' == typeof e
          ? 'position' in e || 'type' in e
            ? li(e.position)
            : 'start' in e || 'end' in e
            ? li(e)
            : 'line' in e || 'column' in e
            ? ai(e)
            : ''
          : '';
      }
      function ai(e) {
        return ui(e && e.line) + ':' + ui(e && e.column);
      }
      function li(e) {
        return ai(e && e.start) + '-' + ai(e && e.end);
      }
      function ui(e) {
        return e && 'number' == typeof e ? e : 1;
      }
      class ci extends Error {
        constructor(e, t, n) {
          const r = [null, null];
          let o = { start: { line: null, column: null }, end: { line: null, column: null } };
          if ((super(), 'string' == typeof t && ((n = t), (t = void 0)), 'string' == typeof n)) {
            const e = n.indexOf(':');
            -1 === e ? (r[1] = n) : ((r[0] = n.slice(0, e)), (r[1] = n.slice(e + 1)));
          }
          t &&
            ('type' in t || 'position' in t
              ? t.position && (o = t.position)
              : 'start' in t || 'end' in t
              ? (o = t)
              : ('line' in t || 'column' in t) && (o.start = t)),
            (this.name = si(t) || '1:1'),
            (this.message = 'object' == typeof e ? e.message : e),
            (this.stack = ''),
            'object' == typeof e && e.stack && (this.stack = e.stack),
            (this.reason = this.message),
            this.fatal,
            (this.line = o.start.line),
            (this.column = o.start.column),
            (this.position = o),
            (this.source = r[0]),
            (this.ruleId = r[1]),
            this.file,
            this.actual,
            this.expected,
            this.url,
            this.note;
        }
      }
      (ci.prototype.file = ''),
        (ci.prototype.name = ''),
        (ci.prototype.reason = ''),
        (ci.prototype.message = ''),
        (ci.prototype.stack = ''),
        (ci.prototype.fatal = null),
        (ci.prototype.column = null),
        (ci.prototype.line = null),
        (ci.prototype.source = null),
        (ci.prototype.ruleId = null),
        (ci.prototype.position = null);
      const pi = function (e, t) {
          if (void 0 !== t && 'string' != typeof t)
            throw new TypeError('"ext" argument must be a string');
          gi(e);
          let n,
            r = 0,
            o = -1,
            i = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; i--; )
              if (47 === e.charCodeAt(i)) {
                if (n) {
                  r = i + 1;
                  break;
                }
              } else o < 0 && ((n = !0), (o = i + 1));
            return o < 0 ? '' : e.slice(r, o);
          }
          if (t === e) return '';
          let s = -1,
            a = t.length - 1;
          for (; i--; )
            if (47 === e.charCodeAt(i)) {
              if (n) {
                r = i + 1;
                break;
              }
            } else
              s < 0 && ((n = !0), (s = i + 1)),
                a > -1 &&
                  (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (o = i) : ((a = -1), (o = s)));
          return r === o ? (o = s) : o < 0 && (o = e.length), e.slice(r, o);
        },
        di = function (e) {
          if ((gi(e), 0 === e.length)) return '.';
          let t,
            n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.charCodeAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.charCodeAt(0)
              ? '/'
              : '.'
            : 1 === n && 47 === e.charCodeAt(0)
            ? '//'
            : e.slice(0, n);
        },
        fi = function (e) {
          gi(e);
          let t,
            n = e.length,
            r = -1,
            o = 0,
            i = -1,
            s = 0;
          for (; n--; ) {
            const a = e.charCodeAt(n);
            if (47 !== a)
              r < 0 && ((t = !0), (r = n + 1)),
                46 === a ? (i < 0 ? (i = n) : 1 !== s && (s = 1)) : i > -1 && (s = -1);
            else if (t) {
              o = n + 1;
              break;
            }
          }
          return i < 0 || r < 0 || 0 === s || (1 === s && i === r - 1 && i === o + 1)
            ? ''
            : e.slice(i, r);
        },
        hi = function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; ) gi(e[n]), e[n] && (t = void 0 === t ? e[n] : t + '/' + e[n]);
          return void 0 === t
            ? '.'
            : (function (e) {
                gi(e);
                const t = 47 === e.charCodeAt(0);
                let n = (function (e, t) {
                  let n,
                    r,
                    o = '',
                    i = 0,
                    s = -1,
                    a = 0,
                    l = -1;
                  for (; ++l <= e.length; ) {
                    if (l < e.length) n = e.charCodeAt(l);
                    else {
                      if (47 === n) break;
                      n = 47;
                    }
                    if (47 === n) {
                      if (s === l - 1 || 1 === a);
                      else if (s !== l - 1 && 2 === a) {
                        if (
                          o.length < 2 ||
                          2 !== i ||
                          46 !== o.charCodeAt(o.length - 1) ||
                          46 !== o.charCodeAt(o.length - 2)
                        )
                          if (o.length > 2) {
                            if (((r = o.lastIndexOf('/')), r !== o.length - 1)) {
                              r < 0
                                ? ((o = ''), (i = 0))
                                : ((o = o.slice(0, r)), (i = o.length - 1 - o.lastIndexOf('/'))),
                                (s = l),
                                (a = 0);
                              continue;
                            }
                          } else if (o.length > 0) {
                            (o = ''), (i = 0), (s = l), (a = 0);
                            continue;
                          }
                        t && ((o = o.length > 0 ? o + '/..' : '..'), (i = 2));
                      } else
                        o.length > 0 ? (o += '/' + e.slice(s + 1, l)) : (o = e.slice(s + 1, l)),
                          (i = l - s - 1);
                      (s = l), (a = 0);
                    } else 46 === n && a > -1 ? a++ : (a = -1);
                  }
                  return o;
                })(e, !t);
                return (
                  0 !== n.length || t || (n = '.'),
                  n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += '/'),
                  t ? '/' + n : n
                );
              })(t);
        },
        mi = '/';
      function gi(e) {
        if ('string' != typeof e)
          throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
      }
      const yi = function () {
        return '/';
      };
      function vi(e) {
        return null !== e && 'object' == typeof e && e.href && e.origin;
      }
      const bi = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
      class wi {
        constructor(e) {
          let t;
          (t = e
            ? 'string' == typeof e ||
              (function (e) {
                return ii(e);
              })(e)
              ? { value: e }
              : vi(e)
              ? { path: e }
              : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = yi()),
            this.value,
            this.stored,
            this.result,
            this.map;
          let n,
            r = -1;
          for (; ++r < bi.length; ) {
            const e = bi[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = 'history' === e ? [...t[e]] : t[e]);
          }
          for (n in t) bi.includes(n) || (this[n] = t[n]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          vi(e) &&
            (e = (function (e) {
              if ('string' == typeof e) e = new URL(e);
              else if (!vi(e)) {
                const t = new TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    '`',
                );
                throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
              }
              if ('file:' !== e.protocol) {
                const e = new TypeError('The URL must be of scheme file');
                throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
              }
              return (function (e) {
                if ('' !== e.hostname) {
                  const e = new TypeError('File URL host must be "localhost" or empty on darwin');
                  throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
                }
                const t = e.pathname;
                let n = -1;
                for (; ++n < t.length; )
                  if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                    const e = t.charCodeAt(n + 2);
                    if (70 === e || 102 === e) {
                      const e = new TypeError(
                        'File URL path must not include encoded / characters',
                      );
                      throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            Ei(e, 'path'),
            this.path !== e && this.history.push(e);
        }
        get dirname() {
          return 'string' == typeof this.path ? di(this.path) : void 0;
        }
        set dirname(e) {
          Ti(this.basename, 'dirname'), (this.path = hi(e || '', this.basename));
        }
        get basename() {
          return 'string' == typeof this.path ? pi(this.path) : void 0;
        }
        set basename(e) {
          Ei(e, 'basename'), ki(e, 'basename'), (this.path = hi(this.dirname || '', e));
        }
        get extname() {
          return 'string' == typeof this.path ? fi(this.path) : void 0;
        }
        set extname(e) {
          if ((ki(e, 'extname'), Ti(this.dirname, 'extname'), e)) {
            if (46 !== e.charCodeAt(0)) throw new Error('`extname` must start with `.`');
            if (e.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
          }
          this.path = hi(this.dirname, this.stem + (e || ''));
        }
        get stem() {
          return 'string' == typeof this.path ? pi(this.path, this.extname) : void 0;
        }
        set stem(e) {
          Ei(e, 'stem'),
            ki(e, 'stem'),
            (this.path = hi(this.dirname || '', e + (this.extname || '')));
        }
        toString(e) {
          return (this.value || '').toString(e || void 0);
        }
        message(e, t, n) {
          const r = new ci(e, t, n);
          return (
            this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        info(e, t, n) {
          const r = this.message(e, t, n);
          return (r.fatal = null), r;
        }
        fail(e, t, n) {
          const r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
      }
      function ki(e, t) {
        if (e && e.includes(mi))
          throw new Error('`' + t + '` cannot be a path: did not expect `' + mi + '`');
      }
      function Ei(e, t) {
        if (!e) throw new Error('`' + t + '` cannot be empty');
      }
      function Ti(e, t) {
        if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too');
      }
      function Si(e) {
        if (e) throw e;
      }
      var _i = o(470);
      function xi(e) {
        if ('object' != typeof e || null === e) return !1;
        const t = Object.getPrototypeOf(e);
        return !(
          (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      }
      const Pi = (function e() {
          const t = (function () {
              const e = [],
                t = {
                  run: function (...t) {
                    let n = -1;
                    const r = t.pop();
                    if ('function' != typeof r)
                      throw new TypeError('Expected function as last argument, not ' + r);
                    !(function o(i, ...s) {
                      const a = e[++n];
                      let l = -1;
                      if (i) r(i);
                      else {
                        for (; ++l < t.length; )
                          (null !== s[l] && void 0 !== s[l]) || (s[l] = t[l]);
                        (t = s),
                          a
                            ? (function (e, t) {
                                let n;
                                return function (...t) {
                                  const i = e.length > t.length;
                                  let s;
                                  i && t.push(r);
                                  try {
                                    s = e.apply(this, t);
                                  } catch (e) {
                                    if (i && n) throw e;
                                    return r(e);
                                  }
                                  i ||
                                    (s instanceof Promise
                                      ? s.then(o, r)
                                      : s instanceof Error
                                      ? r(s)
                                      : o(s));
                                };
                                function r(e, ...r) {
                                  n || ((n = !0), t(e, ...r));
                                }
                                function o(e) {
                                  r(null, e);
                                }
                              })(
                                a,
                                o,
                              )(...s)
                            : r(null, ...s);
                      }
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ('function' != typeof n)
                      throw new TypeError('Expected `middelware` to be a function, not ' + n);
                    return e.push(n), t;
                  },
                };
              return t;
            })(),
            n = [];
          let r,
            o = {},
            i = -1;
          return (
            (s.data = function (e, t) {
              return 'string' == typeof e
                ? 2 === arguments.length
                  ? (Ri('data', r), (o[e] = t), s)
                  : (Ci.call(o, e) && o[e]) || null
                : e
                ? (Ri('data', r), (o = e), s)
                : o;
            }),
            (s.Parser = void 0),
            (s.Compiler = void 0),
            (s.freeze = function () {
              if (r) return s;
              for (; ++i < n.length; ) {
                const [e, ...r] = n[i];
                if (!1 === r[0]) continue;
                !0 === r[0] && (r[0] = void 0);
                const o = e.call(s, ...r);
                'function' == typeof o && t.use(o);
              }
              return (r = !0), (i = Number.POSITIVE_INFINITY), s;
            }),
            (s.attachers = n),
            (s.use = function (e, ...t) {
              let i;
              if ((Ri('use', r), null == e));
              else if ('function' == typeof e) c(e, ...t);
              else {
                if ('object' != typeof e)
                  throw new TypeError('Expected usable value, not `' + e + '`');
                Array.isArray(e) ? u(e) : l(e);
              }
              return i && (o.settings = Object.assign(o.settings || {}, i)), s;
              function a(e) {
                if ('function' == typeof e) c(e);
                else {
                  if ('object' != typeof e)
                    throw new TypeError('Expected usable value, not `' + e + '`');
                  if (Array.isArray(e)) {
                    const [t, ...n] = e;
                    c(t, ...n);
                  } else l(e);
                }
              }
              function l(e) {
                u(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings));
              }
              function u(e) {
                let t = -1;
                if (null == e);
                else {
                  if (!Array.isArray(e))
                    throw new TypeError('Expected a list of plugins, not `' + e + '`');
                  for (; ++t < e.length; ) a(e[t]);
                }
              }
              function c(e, t) {
                let r,
                  o = -1;
                for (; ++o < n.length; )
                  if (n[o][0] === e) {
                    r = n[o];
                    break;
                  }
                r
                  ? (xi(r[1]) && xi(t) && (t = _i(!0, r[1], t)), (r[1] = t))
                  : n.push([...arguments]);
              }
            }),
            (s.parse = function (e) {
              s.freeze();
              const t = Gi(e),
                n = s.Parser;
              return Ai('parse', n), Oi(n, 'parse') ? new n(String(t), t).parse() : n(String(t), t);
            }),
            (s.stringify = function (e, t) {
              s.freeze();
              const n = Gi(t),
                r = s.Compiler;
              return Fi('stringify', r), Di(e), Oi(r, 'compile') ? new r(e, n).compile() : r(e, n);
            }),
            (s.run = function (e, n, r) {
              if ((Di(e), s.freeze(), r || 'function' != typeof n || ((r = n), (n = void 0)), !r))
                return new Promise(o);
              function o(o, i) {
                t.run(e, Gi(n), function (t, n, s) {
                  (n = n || e), t ? i(t) : o ? o(n) : r(null, n, s);
                });
              }
              o(null, r);
            }),
            (s.runSync = function (e, t) {
              let n, r;
              return (
                s.run(e, t, function (e, t) {
                  Si(e), (n = t), (r = !0);
                }),
                Li('runSync', 'run', r),
                n
              );
            }),
            (s.process = function (e, t) {
              if ((s.freeze(), Ai('process', s.Parser), Fi('process', s.Compiler), !t))
                return new Promise(n);
              function n(n, r) {
                const o = Gi(e);
                function i(e, o) {
                  e || !o ? r(e) : n ? n(o) : t(null, o);
                }
                s.run(s.parse(o), o, (e, t, n) => {
                  if (!e && t && n) {
                    const o = s.stringify(t, n);
                    null == o ||
                      ('string' == typeof (r = o) || ii(r) ? (n.value = o) : (n.result = o)),
                      i(e, n);
                  } else i(e);
                  var r;
                });
              }
              n(null, t);
            }),
            (s.processSync = function (e) {
              let t;
              s.freeze(), Ai('processSync', s.Parser), Fi('processSync', s.Compiler);
              const n = Gi(e);
              return (
                s.process(n, function (e) {
                  (t = !0), Si(e);
                }),
                Li('processSync', 'process', t),
                n
              );
            }),
            s
          );
          function s() {
            const t = e();
            let r = -1;
            for (; ++r < n.length; ) t.use(...n[r]);
            return t.data(_i(!0, {}, o)), t;
          }
        })().freeze(),
        Ci = {}.hasOwnProperty;
      function Oi(e, t) {
        return (
          'function' == typeof e &&
          e.prototype &&
          ((function (e) {
            let t;
            for (t in e) if (Ci.call(e, t)) return !0;
            return !1;
          })(e.prototype) ||
            t in e.prototype)
        );
      }
      function Ai(e, t) {
        if ('function' != typeof t) throw new TypeError('Cannot `' + e + '` without `Parser`');
      }
      function Fi(e, t) {
        if ('function' != typeof t) throw new TypeError('Cannot `' + e + '` without `Compiler`');
      }
      function Ri(e, t) {
        if (t)
          throw new Error(
            'Cannot call `' +
              e +
              '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
          );
      }
      function Di(e) {
        if (!xi(e) || 'string' != typeof e.type)
          throw new TypeError('Expected node, got `' + e + '`');
      }
      function Li(e, t, n) {
        if (!n) throw new Error('`' + e + '` finished async. Use `' + t + '` instead');
      }
      function Gi(e) {
        return (function (e) {
          return Boolean(e && 'object' == typeof e && 'message' in e && 'messages' in e);
        })(e)
          ? e
          : new wi(e);
      }
      const Ii = {};
      function Ui(e, t, n) {
        if (
          (function (e) {
            return Boolean(e && 'object' == typeof e);
          })(e)
        ) {
          if ('value' in e) return 'html' !== e.type || n ? e.value : '';
          if (t && 'alt' in e && e.alt) return e.alt;
          if ('children' in e) return zi(e.children, t, n);
        }
        return Array.isArray(e) ? zi(e, t, n) : '';
      }
      function zi(e, t, n) {
        const r = [];
        let o = -1;
        for (; ++o < e.length; ) r[o] = Ui(e[o], t, n);
        return r.join('');
      }
      function ji(e, t, n, r) {
        const o = e.length;
        let i,
          s = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t), (n = n > 0 ? n : 0), r.length < 1e4)
        )
          (i = Array.from(r)), i.unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); s < r.length; )
            (i = r.slice(s, s + 1e4)), i.unshift(t, 0), e.splice(...i), (s += 1e4), (t += 1e4);
      }
      function Ni(e, t) {
        return e.length > 0 ? (ji(e, e.length, 0, t), e) : t;
      }
      const Mi = {}.hasOwnProperty;
      function Bi(e, t) {
        let n;
        for (n in t) {
          const r = (Mi.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            o = t[n];
          let i;
          if (o)
            for (i in o) {
              Mi.call(r, i) || (r[i] = []);
              const e = o[i];
              $i(r[i], Array.isArray(e) ? e : e ? [e] : []);
            }
        }
      }
      function $i(e, t) {
        let n = -1;
        const r = [];
        for (; ++n < t.length; ) ('after' === t[n].add ? e : r).push(t[n]);
        ji(e, 0, 0, r);
      }
      const qi = ns(/[A-Za-z]/),
        Hi = ns(/[\dA-Za-z]/),
        Wi = ns(/[#-'*+\--9=?A-Z^-~]/);
      function Vi(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      const Ki = ns(/\d/),
        Qi = ns(/[\dA-Fa-f]/),
        Yi = ns(/[!-/:-@[-`{-~]/);
      function Ji(e) {
        return null !== e && e < -2;
      }
      function Xi(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function Zi(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const es = ns(
          /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        ),
        ts = ns(/\s/);
      function ns(e) {
        return function (t) {
          return null !== t && e.test(String.fromCharCode(t));
        };
      }
      function rs(e, t, n, r) {
        const o = r ? r - 1 : Number.POSITIVE_INFINITY;
        let i = 0;
        return function (r) {
          return Zi(r) ? (e.enter(n), s(r)) : t(r);
        };
        function s(r) {
          return Zi(r) && i++ < o ? (e.consume(r), s) : (e.exit(n), t(r));
        }
      }
      const os = {
          tokenize: function (e) {
            const t = e.attempt(
              this.parser.constructs.contentInitial,
              function (n) {
                if (null !== n)
                  return (
                    e.enter('lineEnding'),
                    e.consume(n),
                    e.exit('lineEnding'),
                    rs(e, t, 'linePrefix')
                  );
                e.consume(n);
              },
              function (t) {
                return e.enter('paragraph'), r(t);
              },
            );
            let n;
            return t;
            function r(t) {
              const r = e.enter('chunkText', { contentType: 'text', previous: n });
              return n && (n.next = r), (n = r), o(t);
            }
            function o(t) {
              return null === t
                ? (e.exit('chunkText'), e.exit('paragraph'), void e.consume(t))
                : Ji(t)
                ? (e.consume(t), e.exit('chunkText'), r)
                : (e.consume(t), o);
            }
          },
        },
        is = {
          tokenize: function (e) {
            const t = this,
              n = [];
            let r,
              o,
              i,
              s = 0;
            return a;
            function a(r) {
              if (s < n.length) {
                const o = n[s];
                return (t.containerState = o[1]), e.attempt(o[0].continuation, l, u)(r);
              }
              return u(r);
            }
            function l(e) {
              if ((s++, t.containerState._closeFlow)) {
                (t.containerState._closeFlow = void 0), r && v();
                const n = t.events.length;
                let o,
                  i = n;
                for (; i--; )
                  if ('exit' === t.events[i][0] && 'chunkFlow' === t.events[i][1].type) {
                    o = t.events[i][1].end;
                    break;
                  }
                y(s);
                let a = n;
                for (; a < t.events.length; ) (t.events[a][1].end = Object.assign({}, o)), a++;
                return ji(t.events, i + 1, 0, t.events.slice(n)), (t.events.length = a), u(e);
              }
              return a(e);
            }
            function u(o) {
              if (s === n.length) {
                if (!r) return d(o);
                if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
                t.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
              }
              return (t.containerState = {}), e.check(ss, c, p)(o);
            }
            function c(e) {
              return r && v(), y(s), d(e);
            }
            function p(e) {
              return (t.parser.lazy[t.now().line] = s !== n.length), (i = t.now().offset), h(e);
            }
            function d(n) {
              return (t.containerState = {}), e.attempt(ss, f, h)(n);
            }
            function f(e) {
              return s++, n.push([t.currentConstruct, t.containerState]), d(e);
            }
            function h(n) {
              return null === n
                ? (r && v(), y(0), void e.consume(n))
                : ((r = r || t.parser.flow(t.now())),
                  e.enter('chunkFlow', { contentType: 'flow', previous: o, _tokenizer: r }),
                  m(n));
            }
            function m(n) {
              return null === n
                ? (g(e.exit('chunkFlow'), !0), y(0), void e.consume(n))
                : Ji(n)
                ? (e.consume(n), g(e.exit('chunkFlow')), (s = 0), (t.interrupt = void 0), a)
                : (e.consume(n), m);
            }
            function g(e, n) {
              const a = t.sliceStream(e);
              if (
                (n && a.push(null),
                (e.previous = o),
                o && (o.next = e),
                (o = e),
                r.defineSkip(e.start),
                r.write(a),
                t.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < i &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > i)
                  )
                    return;
                const n = t.events.length;
                let o,
                  a,
                  l = n;
                for (; l--; )
                  if ('exit' === t.events[l][0] && 'chunkFlow' === t.events[l][1].type) {
                    if (o) {
                      a = t.events[l][1].end;
                      break;
                    }
                    o = !0;
                  }
                for (y(s), e = n; e < t.events.length; )
                  (t.events[e][1].end = Object.assign({}, a)), e++;
                ji(t.events, l + 1, 0, t.events.slice(n)), (t.events.length = e);
              }
            }
            function y(r) {
              let o = n.length;
              for (; o-- > r; ) {
                const r = n[o];
                (t.containerState = r[1]), r[0].exit.call(t, e);
              }
              n.length = r;
            }
            function v() {
              r.write([null]), (o = void 0), (r = void 0), (t.containerState._closeFlow = void 0);
            }
          },
        },
        ss = {
          tokenize: function (e, t, n) {
            return rs(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              'linePrefix',
              this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
            );
          },
        },
        as = {
          tokenize: function (e, t, n) {
            return function (t) {
              return Zi(t) ? rs(e, r, 'linePrefix')(t) : r(t);
            };
            function r(e) {
              return null === e || Ji(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function ls(e) {
        const t = {};
        let n,
          r,
          o,
          i,
          s,
          a,
          l,
          u = -1;
        for (; ++u < e.length; ) {
          for (; u in t; ) u = t[u];
          if (
            ((n = e[u]),
            u &&
              'chunkFlow' === n[1].type &&
              'listItemPrefix' === e[u - 1][1].type &&
              ((a = n[1]._tokenizer.events),
              (o = 0),
              o < a.length && 'lineEndingBlank' === a[o][1].type && (o += 2),
              o < a.length && 'content' === a[o][1].type))
          )
            for (; ++o < a.length && 'content' !== a[o][1].type; )
              'chunkText' === a[o][1].type && ((a[o][1]._isInFirstContentOfListItem = !0), o++);
          if ('enter' === n[0])
            n[1].contentType && (Object.assign(t, us(e, u)), (u = t[u]), (l = !0));
          else if (n[1]._container) {
            for (
              o = u, r = void 0;
              o-- && ((i = e[o]), 'lineEnding' === i[1].type || 'lineEndingBlank' === i[1].type);

            )
              'enter' === i[0] &&
                (r && (e[r][1].type = 'lineEndingBlank'), (i[1].type = 'lineEnding'), (r = o));
            r &&
              ((n[1].end = Object.assign({}, e[r][1].start)),
              (s = e.slice(r, u)),
              s.unshift(n),
              ji(e, r, u - r + 1, s));
          }
        }
        return !l;
      }
      function us(e, t) {
        const n = e[t][1],
          r = e[t][2];
        let o = t - 1;
        const i = [],
          s = n._tokenizer || r.parser[n.contentType](n.start),
          a = s.events,
          l = [],
          u = {};
        let c,
          p,
          d = -1,
          f = n,
          h = 0,
          m = 0;
        const g = [m];
        for (; f; ) {
          for (; e[++o][1] !== f; );
          i.push(o),
            f._tokenizer ||
              ((c = r.sliceStream(f)),
              f.next || c.push(null),
              p && s.defineSkip(f.start),
              f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0),
              s.write(c),
              f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)),
            (p = f),
            (f = f.next);
        }
        for (f = n; ++d < a.length; )
          'exit' === a[d][0] &&
            'enter' === a[d - 1][0] &&
            a[d][1].type === a[d - 1][1].type &&
            a[d][1].start.line !== a[d][1].end.line &&
            ((m = d + 1), g.push(m), (f._tokenizer = void 0), (f.previous = void 0), (f = f.next));
        for (
          s.events = [],
            f ? ((f._tokenizer = void 0), (f.previous = void 0)) : g.pop(),
            d = g.length;
          d--;

        ) {
          const t = a.slice(g[d], g[d + 1]),
            n = i.pop();
          l.unshift([n, n + t.length - 1]), ji(e, n, 2, t);
        }
        for (d = -1; ++d < l.length; ) (u[h + l[d][0]] = h + l[d][1]), (h += l[d][1] - l[d][0] - 1);
        return u;
      }
      const cs = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter('content'), (n = e.enter('chunkContent', { contentType: 'content' })), r(t)
              );
            };
            function r(t) {
              return null === t ? o(t) : Ji(t) ? e.check(ps, i, o)(t) : (e.consume(t), r);
            }
            function o(n) {
              return e.exit('chunkContent'), e.exit('content'), t(n);
            }
            function i(t) {
              return (
                e.consume(t),
                e.exit('chunkContent'),
                (n.next = e.enter('chunkContent', { contentType: 'content', previous: n })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return ls(e), e;
          },
        },
        ps = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.exit('chunkContent'),
                e.enter('lineEnding'),
                e.consume(t),
                e.exit('lineEnding'),
                rs(e, o, 'linePrefix')
              );
            };
            function o(o) {
              if (null === o || Ji(o)) return n(o);
              const i = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes('codeIndented') &&
                i &&
                'linePrefix' === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(o)
                : e.interrupt(r.parser.constructs.flow, n, t)(o);
            }
          },
          partial: !0,
        },
        ds = {
          tokenize: function (e) {
            const t = this,
              n = e.attempt(
                as,
                function (r) {
                  if (null !== r)
                    return (
                      e.enter('lineEndingBlank'),
                      e.consume(r),
                      e.exit('lineEndingBlank'),
                      (t.currentConstruct = void 0),
                      n
                    );
                  e.consume(r);
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  rs(e, e.attempt(this.parser.constructs.flow, r, e.attempt(cs, r)), 'linePrefix'),
                ),
              );
            return n;
            function r(r) {
              if (null !== r)
                return (
                  e.enter('lineEnding'),
                  e.consume(r),
                  e.exit('lineEnding'),
                  (t.currentConstruct = void 0),
                  n
                );
              e.consume(r);
            }
          },
        },
        fs = { resolveAll: ys() },
        hs = gs('string'),
        ms = gs('text');
      function gs(e) {
        return {
          tokenize: function (t) {
            const n = this,
              r = this.parser.constructs[e],
              o = t.attempt(r, i, s);
            return i;
            function i(e) {
              return l(e) ? o(e) : s(e);
            }
            function s(e) {
              if (null !== e) return t.enter('data'), t.consume(e), a;
              t.consume(e);
            }
            function a(e) {
              return l(e) ? (t.exit('data'), o(e)) : (t.consume(e), a);
            }
            function l(e) {
              if (null === e) return !0;
              const t = r[e];
              let o = -1;
              if (t)
                for (; ++o < t.length; ) {
                  const e = t[o];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: ys('text' === e ? vs : void 0),
        };
      }
      function ys(e) {
        return function (t, n) {
          let r,
            o = -1;
          for (; ++o <= t.length; )
            void 0 === r
              ? t[o] && 'data' === t[o][1].type && ((r = o), o++)
              : (t[o] && 'data' === t[o][1].type) ||
                (o !== r + 2 &&
                  ((t[r][1].end = t[o - 1][1].end), t.splice(r + 2, o - r - 2), (o = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function vs(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if ((n === e.length || 'lineEnding' === e[n][1].type) && 'data' === e[n - 1][1].type) {
            const r = e[n - 1][1],
              o = t.sliceStream(r);
            let i,
              s = o.length,
              a = -1,
              l = 0;
            for (; s--; ) {
              const e = o[s];
              if ('string' == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) l++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (i = !0), l++;
              else if (-1 !== e) {
                s++;
                break;
              }
            }
            if (l) {
              const o = {
                type: n === e.length || i || l < 2 ? 'lineSuffix' : 'hardBreakTrailing',
                start: {
                  line: r.end.line,
                  column: r.end.column - l,
                  offset: r.end.offset - l,
                  _index: r.start._index + s,
                  _bufferIndex: s ? a : r.start._bufferIndex + a,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, o.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, o)
                  : (e.splice(n, 0, ['enter', o, t], ['exit', o, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      function bs(e, t, n) {
        const r = [];
        let o = -1;
        for (; ++o < e.length; ) {
          const i = e[o].resolveAll;
          i && !r.includes(i) && ((t = i(t, n)), r.push(i));
        }
        return t;
      }
      function ws(e, t, n) {
        let r = Object.assign(n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 }, {
          _index: 0,
          _bufferIndex: -1,
        });
        const o = {},
          i = [];
        let s = [],
          a = [],
          l = !0;
        const u = {
            consume: function (e) {
              Ji(e)
                ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), b())
                : -1 !== e && (r.column++, r.offset++),
                r._bufferIndex < 0
                  ? r._index++
                  : (r._bufferIndex++,
                    r._bufferIndex === s[r._index].length && ((r._bufferIndex = -1), r._index++)),
                (c.previous = e),
                (l = !0);
            },
            enter: function (e, t) {
              const n = t || {};
              return (n.type = e), (n.start = h()), c.events.push(['enter', n, c]), a.push(n), n;
            },
            exit: function (e) {
              const t = a.pop();
              return (t.end = h()), c.events.push(['exit', t, c]), t;
            },
            attempt: y(function (e, t) {
              v(e, t.from);
            }),
            check: y(g),
            interrupt: y(g, { interrupt: !0 }),
          },
          c = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: f,
            sliceSerialize: function (e, t) {
              return (function (e, t) {
                let n = -1;
                const r = [];
                let o;
                for (; ++n < e.length; ) {
                  const i = e[n];
                  let s;
                  if ('string' == typeof i) s = i;
                  else
                    switch (i) {
                      case -5:
                        s = '\r';
                        break;
                      case -4:
                        s = '\n';
                        break;
                      case -3:
                        s = '\r\n';
                        break;
                      case -2:
                        s = t ? ' ' : '\t';
                        break;
                      case -1:
                        if (!t && o) continue;
                        s = ' ';
                        break;
                      default:
                        s = String.fromCharCode(i);
                    }
                  (o = -2 === i), r.push(s);
                }
                return r.join('');
              })(f(e), t);
            },
            now: h,
            defineSkip: function (e) {
              (o[e.line] = e.column), b();
            },
            write: function (e) {
              return (
                (s = Ni(s, e)),
                (function () {
                  let e;
                  for (; r._index < s.length; ) {
                    const t = s[r._index];
                    if ('string' == typeof t)
                      for (
                        e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                        r._index === e && r._bufferIndex < t.length;

                      )
                        m(t.charCodeAt(r._bufferIndex));
                    else m(t);
                  }
                })(),
                null !== s[s.length - 1] ? [] : (v(t, 0), (c.events = bs(i, c.events, c)), c.events)
              );
            },
          };
        let p,
          d = t.tokenize.call(c, u);
        return t.resolveAll && i.push(t), c;
        function f(e) {
          return (function (e, t) {
            const n = t.start._index,
              r = t.start._bufferIndex,
              o = t.end._index,
              i = t.end._bufferIndex;
            let s;
            if (n === o) s = [e[n].slice(r, i)];
            else {
              if (((s = e.slice(n, o)), r > -1)) {
                const e = s[0];
                'string' == typeof e ? (s[0] = e.slice(r)) : s.shift();
              }
              i > 0 && s.push(e[o].slice(0, i));
            }
            return s;
          })(s, e);
        }
        function h() {
          const { line: e, column: t, offset: n, _index: o, _bufferIndex: i } = r;
          return { line: e, column: t, offset: n, _index: o, _bufferIndex: i };
        }
        function m(e) {
          (l = void 0), (p = e), (d = d(e));
        }
        function g(e, t) {
          t.restore();
        }
        function y(e, t) {
          return function (n, o, i) {
            let s, p, d, f;
            return Array.isArray(n)
              ? g(n)
              : 'tokenize' in n
              ? g([n])
              : ((m = n),
                function (e) {
                  const t = null !== e && m[e],
                    n = null !== e && m.null;
                  return g([
                    ...(Array.isArray(t) ? t : t ? [t] : []),
                    ...(Array.isArray(n) ? n : n ? [n] : []),
                  ])(e);
                });
            var m;
            function g(e) {
              return (s = e), (p = 0), 0 === e.length ? i : y(e[p]);
            }
            function y(e) {
              return function (n) {
                return (
                  (f = (function () {
                    const e = h(),
                      t = c.previous,
                      n = c.currentConstruct,
                      o = c.events.length,
                      i = Array.from(a);
                    return {
                      restore: function () {
                        (r = e),
                          (c.previous = t),
                          (c.currentConstruct = n),
                          (c.events.length = o),
                          (a = i),
                          b();
                      },
                      from: o,
                    };
                  })()),
                  (d = e),
                  e.partial || (c.currentConstruct = e),
                  e.name && c.parser.constructs.disable.null.includes(e.name)
                    ? w()
                    : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, u, v, w)(n)
                );
              };
            }
            function v(t) {
              return (l = !0), e(d, f), o;
            }
            function w(e) {
              return (l = !0), f.restore(), ++p < s.length ? y(s[p]) : i;
            }
          };
        }
        function v(e, t) {
          e.resolveAll && !i.includes(e) && i.push(e),
            e.resolve && ji(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)),
            e.resolveTo && (c.events = e.resolveTo(c.events, c));
        }
        function b() {
          r.line in o && r.column < 2 && ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
        }
      }
      const ks = {
          name: 'thematicBreak',
          tokenize: function (e, t, n) {
            let r,
              o = 0;
            return function (t) {
              return (
                e.enter('thematicBreak'),
                (function (e) {
                  return (r = e), i(e);
                })(t)
              );
            };
            function i(i) {
              return i === r
                ? (e.enter('thematicBreakSequence'), s(i))
                : o >= 3 && (null === i || Ji(i))
                ? (e.exit('thematicBreak'), t(i))
                : n(i);
            }
            function s(t) {
              return t === r
                ? (e.consume(t), o++, s)
                : (e.exit('thematicBreakSequence'), Zi(t) ? rs(e, i, 'whitespace')(t) : i(t));
            }
          },
        },
        Es = {
          name: 'list',
          tokenize: function (e, t, n) {
            const r = this,
              o = r.events[r.events.length - 1];
            let i = o && 'linePrefix' === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
              s = 0;
            return function (t) {
              const o =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t ? 'listUnordered' : 'listOrdered');
              if (
                'listUnordered' === o
                  ? !r.containerState.marker || t === r.containerState.marker
                  : Ki(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = o), e.enter(o, { _container: !0 })),
                  'listUnordered' === o)
                )
                  return (
                    e.enter('listItemPrefix'), 42 === t || 45 === t ? e.check(ks, n, l)(t) : l(t)
                  );
                if (!r.interrupt || 49 === t)
                  return e.enter('listItemPrefix'), e.enter('listItemValue'), a(t);
              }
              return n(t);
            };
            function a(t) {
              return Ki(t) && ++s < 10
                ? (e.consume(t), a)
                : (!r.interrupt || s < 2) &&
                  (r.containerState.marker ? t === r.containerState.marker : 41 === t || 46 === t)
                ? (e.exit('listItemValue'), l(t))
                : n(t);
            }
            function l(t) {
              return (
                e.enter('listItemMarker'),
                e.consume(t),
                e.exit('listItemMarker'),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(as, r.interrupt ? n : u, e.attempt(Ts, p, c))
              );
            }
            function u(e) {
              return (r.containerState.initialBlankLine = !0), i++, p(e);
            }
            function c(t) {
              return Zi(t)
                ? (e.enter('listItemPrefixWhitespace'),
                  e.consume(t),
                  e.exit('listItemPrefixWhitespace'),
                  p)
                : n(t);
            }
            function p(n) {
              return (
                (r.containerState.size = i + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              const r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  as,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
                      rs(e, t, 'listItemIndent', r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !Zi(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        o(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(Ss, t, o)(n));
                  },
                )
              );
              function o(o) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  rs(
                    e,
                    e.attempt(Es, t, n),
                    'linePrefix',
                    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
                  )(o)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        Ts = {
          tokenize: function (e, t, n) {
            const r = this;
            return rs(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return !Zi(e) && o && 'listItemPrefixWhitespace' === o[1].type ? t(e) : n(e);
              },
              'listItemPrefixWhitespace',
              r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
            );
          },
          partial: !0,
        },
        Ss = {
          tokenize: function (e, t, n) {
            const r = this;
            return rs(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return o &&
                  'listItemIndent' === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              'listItemIndent',
              r.containerState.size + 1,
            );
          },
          partial: !0,
        },
        _s = {
          name: 'blockQuote',
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (62 === t) {
                const n = r.containerState;
                return (
                  n.open || (e.enter('blockQuote', { _container: !0 }), (n.open = !0)),
                  e.enter('blockQuotePrefix'),
                  e.enter('blockQuoteMarker'),
                  e.consume(t),
                  e.exit('blockQuoteMarker'),
                  o
                );
              }
              return n(t);
            };
            function o(n) {
              return Zi(n)
                ? (e.enter('blockQuotePrefixWhitespace'),
                  e.consume(n),
                  e.exit('blockQuotePrefixWhitespace'),
                  e.exit('blockQuotePrefix'),
                  t)
                : (e.exit('blockQuotePrefix'), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              const r = this;
              return function (t) {
                return Zi(t)
                  ? rs(
                      e,
                      o,
                      'linePrefix',
                      r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
                    )(t)
                  : o(t);
              };
              function o(r) {
                return e.attempt(_s, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit('blockQuote');
          },
        };
      function xs(e, t, n, r, o, i, s, a, l) {
        const u = l || Number.POSITIVE_INFINITY;
        let c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(o), e.enter(i), e.consume(t), e.exit(i), p)
            : null === t || 32 === t || 41 === t || Vi(t)
            ? n(t)
            : (e.enter(r),
              e.enter(s),
              e.enter(a),
              e.enter('chunkString', { contentType: 'string' }),
              h(t));
        };
        function p(n) {
          return 62 === n
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(o), e.exit(r), t)
            : (e.enter(a), e.enter('chunkString', { contentType: 'string' }), d(n));
        }
        function d(t) {
          return 62 === t
            ? (e.exit('chunkString'), e.exit(a), p(t))
            : null === t || 60 === t || Ji(t)
            ? n(t)
            : (e.consume(t), 92 === t ? f : d);
        }
        function f(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
        }
        function h(o) {
          return c || (null !== o && 41 !== o && !Xi(o))
            ? c < u && 40 === o
              ? (e.consume(o), c++, h)
              : 41 === o
              ? (e.consume(o), c--, h)
              : null === o || 32 === o || 40 === o || Vi(o)
              ? n(o)
              : (e.consume(o), 92 === o ? m : h)
            : (e.exit('chunkString'), e.exit(a), e.exit(s), e.exit(r), t(o));
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
        }
      }
      function Ps(e, t, n, r, o, i) {
        const s = this;
        let a,
          l = 0;
        return function (t) {
          return e.enter(r), e.enter(o), e.consume(t), e.exit(o), e.enter(i), u;
        };
        function u(p) {
          return l > 999 ||
            null === p ||
            91 === p ||
            (93 === p && !a) ||
            (94 === p && !l && '_hiddenFootnoteSupport' in s.parser.constructs)
            ? n(p)
            : 93 === p
            ? (e.exit(i), e.enter(o), e.consume(p), e.exit(o), e.exit(r), t)
            : Ji(p)
            ? (e.enter('lineEnding'), e.consume(p), e.exit('lineEnding'), u)
            : (e.enter('chunkString', { contentType: 'string' }), c(p));
        }
        function c(t) {
          return null === t || 91 === t || 93 === t || Ji(t) || l++ > 999
            ? (e.exit('chunkString'), u(t))
            : (e.consume(t), a || (a = !Zi(t)), 92 === t ? p : c);
        }
        function p(t) {
          return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, c) : c(t);
        }
      }
      function Cs(e, t, n, r, o, i) {
        let s;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r), e.enter(o), e.consume(t), e.exit(o), (s = 40 === t ? 41 : t), a)
            : n(t);
        };
        function a(n) {
          return n === s ? (e.enter(o), e.consume(n), e.exit(o), e.exit(r), t) : (e.enter(i), l(n));
        }
        function l(t) {
          return t === s
            ? (e.exit(i), a(s))
            : null === t
            ? n(t)
            : Ji(t)
            ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), rs(e, l, 'linePrefix'))
            : (e.enter('chunkString', { contentType: 'string' }), u(t));
        }
        function u(t) {
          return t === s || null === t || Ji(t)
            ? (e.exit('chunkString'), l(t))
            : (e.consume(t), 92 === t ? c : u);
        }
        function c(t) {
          return t === s || 92 === t ? (e.consume(t), u) : u(t);
        }
      }
      function Os(e, t) {
        let n;
        return function r(o) {
          return Ji(o)
            ? (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), (n = !0), r)
            : Zi(o)
            ? rs(e, r, n ? 'linePrefix' : 'lineSuffix')(o)
            : t(o);
        };
      }
      function As(e) {
        return e
          .replace(/[\t\n\r ]+/g, ' ')
          .replace(/^ | $/g, '')
          .toLowerCase()
          .toUpperCase();
      }
      const Fs = {
          name: 'definition',
          tokenize: function (e, t, n) {
            const r = this;
            let o;
            return function (t) {
              return (
                e.enter('definition'),
                (function (t) {
                  return Ps.call(
                    r,
                    e,
                    i,
                    n,
                    'definitionLabel',
                    'definitionLabelMarker',
                    'definitionLabelString',
                  )(t);
                })(t)
              );
            };
            function i(t) {
              return (
                (o = As(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
                58 === t
                  ? (e.enter('definitionMarker'), e.consume(t), e.exit('definitionMarker'), s)
                  : n(t)
              );
            }
            function s(t) {
              return Xi(t) ? Os(e, a)(t) : a(t);
            }
            function a(t) {
              return xs(
                e,
                l,
                n,
                'definitionDestination',
                'definitionDestinationLiteral',
                'definitionDestinationLiteralMarker',
                'definitionDestinationRaw',
                'definitionDestinationString',
              )(t);
            }
            function l(t) {
              return e.attempt(Rs, u, u)(t);
            }
            function u(t) {
              return Zi(t) ? rs(e, c, 'whitespace')(t) : c(t);
            }
            function c(i) {
              return null === i || Ji(i)
                ? (e.exit('definition'), r.parser.defined.push(o), t(i))
                : n(i);
            }
          },
        },
        Rs = {
          tokenize: function (e, t, n) {
            return function (t) {
              return Xi(t) ? Os(e, r)(t) : n(t);
            };
            function r(t) {
              return Cs(
                e,
                o,
                n,
                'definitionTitle',
                'definitionTitleMarker',
                'definitionTitleString',
              )(t);
            }
            function o(t) {
              return Zi(t) ? rs(e, i, 'whitespace')(t) : i(t);
            }
            function i(e) {
              return null === e || Ji(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        Ds = {
          name: 'codeIndented',
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return e.enter('codeIndented'), rs(e, o, 'linePrefix', 5)(t);
            };
            function o(e) {
              const t = r.events[r.events.length - 1];
              return t && 'linePrefix' === t[1].type && t[2].sliceSerialize(t[1], !0).length >= 4
                ? i(e)
                : n(e);
            }
            function i(t) {
              return null === t
                ? a(t)
                : Ji(t)
                ? e.attempt(Ls, i, a)(t)
                : (e.enter('codeFlowValue'), s(t));
            }
            function s(t) {
              return null === t || Ji(t) ? (e.exit('codeFlowValue'), i(t)) : (e.consume(t), s);
            }
            function a(n) {
              return e.exit('codeIndented'), t(n);
            }
          },
        },
        Ls = {
          tokenize: function (e, t, n) {
            const r = this;
            return o;
            function o(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : Ji(t)
                ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o)
                : rs(e, i, 'linePrefix', 5)(t);
            }
            function i(e) {
              const i = r.events[r.events.length - 1];
              return i && 'linePrefix' === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(e)
                : Ji(e)
                ? o(e)
                : n(e);
            }
          },
          partial: !0,
        },
        Gs = {
          name: 'headingAtx',
          tokenize: function (e, t, n) {
            let r = 0;
            return function (t) {
              return (
                e.enter('atxHeading'),
                (function (t) {
                  return e.enter('atxHeadingSequence'), o(t);
                })(t)
              );
            };
            function o(t) {
              return 35 === t && r++ < 6
                ? (e.consume(t), o)
                : null === t || Xi(t)
                ? (e.exit('atxHeadingSequence'), i(t))
                : n(t);
            }
            function i(n) {
              return 35 === n
                ? (e.enter('atxHeadingSequence'), s(n))
                : null === n || Ji(n)
                ? (e.exit('atxHeading'), t(n))
                : Zi(n)
                ? rs(e, i, 'whitespace')(n)
                : (e.enter('atxHeadingText'), a(n));
            }
            function s(t) {
              return 35 === t ? (e.consume(t), s) : (e.exit('atxHeadingSequence'), i(t));
            }
            function a(t) {
              return null === t || 35 === t || Xi(t)
                ? (e.exit('atxHeadingText'), i(t))
                : (e.consume(t), a);
            }
          },
          resolve: function (e, t) {
            let n,
              r,
              o = e.length - 2,
              i = 3;
            return (
              'whitespace' === e[i][1].type && (i += 2),
              o - 2 > i && 'whitespace' === e[o][1].type && (o -= 2),
              'atxHeadingSequence' === e[o][1].type &&
                (i === o - 1 || (o - 4 > i && 'whitespace' === e[o - 2][1].type)) &&
                (o -= i + 1 === o ? 2 : 4),
              o > i &&
                ((n = { type: 'atxHeadingText', start: e[i][1].start, end: e[o][1].end }),
                (r = {
                  type: 'chunkText',
                  start: e[i][1].start,
                  end: e[o][1].end,
                  contentType: 'text',
                }),
                ji(e, i, o - i + 1, [
                  ['enter', n, t],
                  ['enter', r, t],
                  ['exit', r, t],
                  ['exit', n, t],
                ])),
              e
            );
          },
        },
        Is = {
          name: 'setextUnderline',
          tokenize: function (e, t, n) {
            const r = this;
            let o;
            return function (t) {
              let s,
                a = r.events.length;
              for (; a--; )
                if (
                  'lineEnding' !== r.events[a][1].type &&
                  'linePrefix' !== r.events[a][1].type &&
                  'content' !== r.events[a][1].type
                ) {
                  s = 'paragraph' === r.events[a][1].type;
                  break;
                }
              return r.parser.lazy[r.now().line] || (!r.interrupt && !s)
                ? n(t)
                : (e.enter('setextHeadingLine'),
                  (o = t),
                  (function (t) {
                    return e.enter('setextHeadingLineSequence'), i(t);
                  })(t));
            };
            function i(t) {
              return t === o
                ? (e.consume(t), i)
                : (e.exit('setextHeadingLineSequence'), Zi(t) ? rs(e, s, 'lineSuffix')(t) : s(t));
            }
            function s(r) {
              return null === r || Ji(r) ? (e.exit('setextHeadingLine'), t(r)) : n(r);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              o,
              i = e.length;
            for (; i--; )
              if ('enter' === e[i][0]) {
                if ('content' === e[i][1].type) {
                  n = i;
                  break;
                }
                'paragraph' === e[i][1].type && (r = i);
              } else
                'content' === e[i][1].type && e.splice(i, 1),
                  o || 'definition' !== e[i][1].type || (o = i);
            const s = {
              type: 'setextHeading',
              start: Object.assign({}, e[r][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[r][1].type = 'setextHeadingText'),
              o
                ? (e.splice(r, 0, ['enter', s, t]),
                  e.splice(o + 1, 0, ['exit', e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[o][1].end)))
                : (e[n][1] = s),
              e.push(['exit', s, t]),
              e
            );
          },
        },
        Us = [
          'address',
          'article',
          'aside',
          'base',
          'basefont',
          'blockquote',
          'body',
          'caption',
          'center',
          'col',
          'colgroup',
          'dd',
          'details',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hr',
          'html',
          'iframe',
          'legend',
          'li',
          'link',
          'main',
          'menu',
          'menuitem',
          'nav',
          'noframes',
          'ol',
          'optgroup',
          'option',
          'p',
          'param',
          'search',
          'section',
          'summary',
          'table',
          'tbody',
          'td',
          'tfoot',
          'th',
          'thead',
          'title',
          'tr',
          'track',
          'ul',
        ],
        zs = ['pre', 'script', 'style', 'textarea'],
        js = {
          name: 'htmlFlow',
          tokenize: function (e, t, n) {
            const r = this;
            let o, i, s, a, l;
            return function (t) {
              return (function (t) {
                return e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(t), u;
              })(t);
            };
            function u(a) {
              return 33 === a
                ? (e.consume(a), c)
                : 47 === a
                ? (e.consume(a), (i = !0), f)
                : 63 === a
                ? (e.consume(a), (o = 3), r.interrupt ? t : L)
                : qi(a)
                ? (e.consume(a), (s = String.fromCharCode(a)), h)
                : n(a);
            }
            function c(i) {
              return 45 === i
                ? (e.consume(i), (o = 2), p)
                : 91 === i
                ? (e.consume(i), (o = 5), (a = 0), d)
                : qi(i)
                ? (e.consume(i), (o = 4), r.interrupt ? t : L)
                : n(i);
            }
            function p(o) {
              return 45 === o ? (e.consume(o), r.interrupt ? t : L) : n(o);
            }
            function d(o) {
              return o === 'CDATA['.charCodeAt(a++)
                ? (e.consume(o), 6 === a ? (r.interrupt ? t : x) : d)
                : n(o);
            }
            function f(t) {
              return qi(t) ? (e.consume(t), (s = String.fromCharCode(t)), h) : n(t);
            }
            function h(a) {
              if (null === a || 47 === a || 62 === a || Xi(a)) {
                const l = 47 === a,
                  u = s.toLowerCase();
                return l || i || !zs.includes(u)
                  ? Us.includes(s.toLowerCase())
                    ? ((o = 6), l ? (e.consume(a), m) : r.interrupt ? t(a) : x(a))
                    : ((o = 7),
                      r.interrupt && !r.parser.lazy[r.now().line] ? n(a) : i ? g(a) : y(a))
                  : ((o = 1), r.interrupt ? t(a) : x(a));
              }
              return 45 === a || Hi(a) ? (e.consume(a), (s += String.fromCharCode(a)), h) : n(a);
            }
            function m(o) {
              return 62 === o ? (e.consume(o), r.interrupt ? t : x) : n(o);
            }
            function g(t) {
              return Zi(t) ? (e.consume(t), g) : S(t);
            }
            function y(t) {
              return 47 === t
                ? (e.consume(t), S)
                : 58 === t || 95 === t || qi(t)
                ? (e.consume(t), v)
                : Zi(t)
                ? (e.consume(t), y)
                : S(t);
            }
            function v(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || Hi(t)
                ? (e.consume(t), v)
                : b(t);
            }
            function b(t) {
              return 61 === t ? (e.consume(t), w) : Zi(t) ? (e.consume(t), b) : y(t);
            }
            function w(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                ? n(t)
                : 34 === t || 39 === t
                ? (e.consume(t), (l = t), k)
                : Zi(t)
                ? (e.consume(t), w)
                : E(t);
            }
            function k(t) {
              return t === l
                ? (e.consume(t), (l = null), T)
                : null === t || Ji(t)
                ? n(t)
                : (e.consume(t), k);
            }
            function E(t) {
              return null === t ||
                34 === t ||
                39 === t ||
                47 === t ||
                60 === t ||
                61 === t ||
                62 === t ||
                96 === t ||
                Xi(t)
                ? b(t)
                : (e.consume(t), E);
            }
            function T(e) {
              return 47 === e || 62 === e || Zi(e) ? y(e) : n(e);
            }
            function S(t) {
              return 62 === t ? (e.consume(t), _) : n(t);
            }
            function _(t) {
              return null === t || Ji(t) ? x(t) : Zi(t) ? (e.consume(t), _) : n(t);
            }
            function x(t) {
              return 45 === t && 2 === o
                ? (e.consume(t), A)
                : 60 === t && 1 === o
                ? (e.consume(t), F)
                : 62 === t && 4 === o
                ? (e.consume(t), G)
                : 63 === t && 3 === o
                ? (e.consume(t), L)
                : 93 === t && 5 === o
                ? (e.consume(t), D)
                : !Ji(t) || (6 !== o && 7 !== o)
                ? null === t || Ji(t)
                  ? (e.exit('htmlFlowData'), P(t))
                  : (e.consume(t), x)
                : (e.exit('htmlFlowData'), e.check(Ns, I, P)(t));
            }
            function P(t) {
              return e.check(Ms, C, I)(t);
            }
            function C(t) {
              return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), O;
            }
            function O(t) {
              return null === t || Ji(t) ? P(t) : (e.enter('htmlFlowData'), x(t));
            }
            function A(t) {
              return 45 === t ? (e.consume(t), L) : x(t);
            }
            function F(t) {
              return 47 === t ? (e.consume(t), (s = ''), R) : x(t);
            }
            function R(t) {
              if (62 === t) {
                const n = s.toLowerCase();
                return zs.includes(n) ? (e.consume(t), G) : x(t);
              }
              return qi(t) && s.length < 8
                ? (e.consume(t), (s += String.fromCharCode(t)), R)
                : x(t);
            }
            function D(t) {
              return 93 === t ? (e.consume(t), L) : x(t);
            }
            function L(t) {
              return 62 === t ? (e.consume(t), G) : 45 === t && 2 === o ? (e.consume(t), L) : x(t);
            }
            function G(t) {
              return null === t || Ji(t) ? (e.exit('htmlFlowData'), I(t)) : (e.consume(t), G);
            }
            function I(n) {
              return e.exit('htmlFlow'), t(n);
            }
          },
          resolveTo: function (e) {
            let t = e.length;
            for (; t-- && ('enter' !== e[t][0] || 'htmlFlow' !== e[t][1].type); );
            return (
              t > 1 &&
                'linePrefix' === e[t - 2][1].type &&
                ((e[t][1].start = e[t - 2][1].start),
                (e[t + 1][1].start = e[t - 2][1].start),
                e.splice(t - 2, 2)),
              e
            );
          },
          concrete: !0,
        },
        Ns = {
          tokenize: function (e, t, n) {
            return function (r) {
              return e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), e.attempt(as, t, n);
            };
          },
          partial: !0,
        },
        Ms = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return Ji(t) ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o) : n(t);
            };
            function o(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Bs = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o);
            };
            function o(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        $s = {
          name: 'codeFenced',
          tokenize: function (e, t, n) {
            const r = this,
              o = {
                tokenize: function (e, t, n) {
                  let o = 0;
                  return function (t) {
                    return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), s;
                  };
                  function s(t) {
                    return (
                      e.enter('codeFencedFence'),
                      Zi(t)
                        ? rs(
                            e,
                            l,
                            'linePrefix',
                            r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
                          )(t)
                        : l(t)
                    );
                  }
                  function l(t) {
                    return t === i ? (e.enter('codeFencedFenceSequence'), u(t)) : n(t);
                  }
                  function u(t) {
                    return t === i
                      ? (o++, e.consume(t), u)
                      : o >= a
                      ? (e.exit('codeFencedFenceSequence'),
                        Zi(t) ? rs(e, c, 'whitespace')(t) : c(t))
                      : n(t);
                  }
                  function c(r) {
                    return null === r || Ji(r) ? (e.exit('codeFencedFence'), t(r)) : n(r);
                  }
                },
                partial: !0,
              };
            let i,
              s = 0,
              a = 0;
            return function (t) {
              return (function (t) {
                const n = r.events[r.events.length - 1];
                return (
                  (s = n && 'linePrefix' === n[1].type ? n[2].sliceSerialize(n[1], !0).length : 0),
                  (i = t),
                  e.enter('codeFenced'),
                  e.enter('codeFencedFence'),
                  e.enter('codeFencedFenceSequence'),
                  l(t)
                );
              })(t);
            };
            function l(t) {
              return t === i
                ? (a++, e.consume(t), l)
                : a < 3
                ? n(t)
                : (e.exit('codeFencedFenceSequence'), Zi(t) ? rs(e, u, 'whitespace')(t) : u(t));
            }
            function u(n) {
              return null === n || Ji(n)
                ? (e.exit('codeFencedFence'), r.interrupt ? t(n) : e.check(Bs, f, v)(n))
                : (e.enter('codeFencedFenceInfo'),
                  e.enter('chunkString', { contentType: 'string' }),
                  c(n));
            }
            function c(t) {
              return null === t || Ji(t)
                ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), u(t))
                : Zi(t)
                ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), rs(e, p, 'whitespace')(t))
                : 96 === t && t === i
                ? n(t)
                : (e.consume(t), c);
            }
            function p(t) {
              return null === t || Ji(t)
                ? u(t)
                : (e.enter('codeFencedFenceMeta'),
                  e.enter('chunkString', { contentType: 'string' }),
                  d(t));
            }
            function d(t) {
              return null === t || Ji(t)
                ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), u(t))
                : 96 === t && t === i
                ? n(t)
                : (e.consume(t), d);
            }
            function f(t) {
              return e.attempt(o, v, h)(t);
            }
            function h(t) {
              return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), m;
            }
            function m(t) {
              return s > 0 && Zi(t) ? rs(e, g, 'linePrefix', s + 1)(t) : g(t);
            }
            function g(t) {
              return null === t || Ji(t) ? e.check(Bs, f, v)(t) : (e.enter('codeFlowValue'), y(t));
            }
            function y(t) {
              return null === t || Ji(t) ? (e.exit('codeFlowValue'), g(t)) : (e.consume(t), y);
            }
            function v(n) {
              return e.exit('codeFenced'), t(n);
            }
          },
          concrete: !0,
        },
        qs = document.createElement('i');
      function Hs(e) {
        const t = '&' + e + ';';
        qs.innerHTML = t;
        const n = qs.textContent;
        return (59 !== n.charCodeAt(n.length - 1) || 'semi' === e) && n !== t && n;
      }
      const Ws = {
          name: 'characterReference',
          tokenize: function (e, t, n) {
            const r = this;
            let o,
              i,
              s = 0;
            return function (t) {
              return (
                e.enter('characterReference'),
                e.enter('characterReferenceMarker'),
                e.consume(t),
                e.exit('characterReferenceMarker'),
                a
              );
            };
            function a(t) {
              return 35 === t
                ? (e.enter('characterReferenceMarkerNumeric'),
                  e.consume(t),
                  e.exit('characterReferenceMarkerNumeric'),
                  l)
                : (e.enter('characterReferenceValue'), (o = 31), (i = Hi), u(t));
            }
            function l(t) {
              return 88 === t || 120 === t
                ? (e.enter('characterReferenceMarkerHexadecimal'),
                  e.consume(t),
                  e.exit('characterReferenceMarkerHexadecimal'),
                  e.enter('characterReferenceValue'),
                  (o = 6),
                  (i = Qi),
                  u)
                : (e.enter('characterReferenceValue'), (o = 7), (i = Ki), u(t));
            }
            function u(a) {
              if (59 === a && s) {
                const o = e.exit('characterReferenceValue');
                return i !== Hi || Hs(r.sliceSerialize(o))
                  ? (e.enter('characterReferenceMarker'),
                    e.consume(a),
                    e.exit('characterReferenceMarker'),
                    e.exit('characterReference'),
                    t)
                  : n(a);
              }
              return i(a) && s++ < o ? (e.consume(a), u) : n(a);
            }
          },
        },
        Vs = {
          name: 'characterEscape',
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('characterEscape'),
                e.enter('escapeMarker'),
                e.consume(t),
                e.exit('escapeMarker'),
                r
              );
            };
            function r(r) {
              return Yi(r)
                ? (e.enter('characterEscapeValue'),
                  e.consume(r),
                  e.exit('characterEscapeValue'),
                  e.exit('characterEscape'),
                  t)
                : n(r);
            }
          },
        },
        Ks = {
          name: 'lineEnding',
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), rs(e, t, 'linePrefix')
              );
            };
          },
        },
        Qs = {
          name: 'labelEnd',
          tokenize: function (e, t, n) {
            const r = this;
            let o,
              i,
              s = r.events.length;
            for (; s--; )
              if (
                ('labelImage' === r.events[s][1].type || 'labelLink' === r.events[s][1].type) &&
                !r.events[s][1]._balanced
              ) {
                o = r.events[s][1];
                break;
              }
            return function (t) {
              return o
                ? o._inactive
                  ? c(t)
                  : ((i = r.parser.defined.includes(
                      As(r.sliceSerialize({ start: o.end, end: r.now() })),
                    )),
                    e.enter('labelEnd'),
                    e.enter('labelMarker'),
                    e.consume(t),
                    e.exit('labelMarker'),
                    e.exit('labelEnd'),
                    a)
                : n(t);
            };
            function a(t) {
              return 40 === t
                ? e.attempt(Ys, u, i ? u : c)(t)
                : 91 === t
                ? e.attempt(Js, u, i ? l : c)(t)
                : i
                ? u(t)
                : c(t);
            }
            function l(t) {
              return e.attempt(Xs, u, c)(t);
            }
            function u(e) {
              return t(e);
            }
            function c(e) {
              return (o._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              o,
              i,
              s = e.length,
              a = 0;
            for (; s--; )
              if (((n = e[s][1]), r)) {
                if ('link' === n.type || ('labelLink' === n.type && n._inactive)) break;
                'enter' === e[s][0] && 'labelLink' === n.type && (n._inactive = !0);
              } else if (o) {
                if (
                  'enter' === e[s][0] &&
                  ('labelImage' === n.type || 'labelLink' === n.type) &&
                  !n._balanced &&
                  ((r = s), 'labelLink' !== n.type)
                ) {
                  a = 2;
                  break;
                }
              } else 'labelEnd' === n.type && (o = s);
            const l = {
                type: 'labelLink' === e[r][1].type ? 'link' : 'image',
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              u = {
                type: 'label',
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[o][1].end),
              },
              c = {
                type: 'labelText',
                start: Object.assign({}, e[r + a + 2][1].end),
                end: Object.assign({}, e[o - 2][1].start),
              };
            return (
              (i = [
                ['enter', l, t],
                ['enter', u, t],
              ]),
              (i = Ni(i, e.slice(r + 1, r + a + 3))),
              (i = Ni(i, [['enter', c, t]])),
              (i = Ni(i, bs(t.parser.constructs.insideSpan.null, e.slice(r + a + 4, o - 3), t))),
              (i = Ni(i, [['exit', c, t], e[o - 2], e[o - 1], ['exit', u, t]])),
              (i = Ni(i, e.slice(o + 1))),
              (i = Ni(i, [['exit', l, t]])),
              ji(e, r, e.length, i),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              const n = e[t][1];
              ('labelImage' !== n.type && 'labelLink' !== n.type && 'labelEnd' !== n.type) ||
                (e.splice(t + 1, 'labelImage' === n.type ? 4 : 2), (n.type = 'data'), t++);
            }
            return e;
          },
        },
        Ys = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('resource'),
                e.enter('resourceMarker'),
                e.consume(t),
                e.exit('resourceMarker'),
                r
              );
            };
            function r(t) {
              return Xi(t) ? Os(e, o)(t) : o(t);
            }
            function o(t) {
              return 41 === t
                ? u(t)
                : xs(
                    e,
                    i,
                    s,
                    'resourceDestination',
                    'resourceDestinationLiteral',
                    'resourceDestinationLiteralMarker',
                    'resourceDestinationRaw',
                    'resourceDestinationString',
                    32,
                  )(t);
            }
            function i(t) {
              return Xi(t) ? Os(e, a)(t) : u(t);
            }
            function s(e) {
              return n(e);
            }
            function a(t) {
              return 34 === t || 39 === t || 40 === t
                ? Cs(e, l, n, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(t)
                : u(t);
            }
            function l(t) {
              return Xi(t) ? Os(e, u)(t) : u(t);
            }
            function u(r) {
              return 41 === r
                ? (e.enter('resourceMarker'),
                  e.consume(r),
                  e.exit('resourceMarker'),
                  e.exit('resource'),
                  t)
                : n(r);
            }
          },
        },
        Js = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return Ps.call(r, e, o, i, 'reference', 'referenceMarker', 'referenceString')(t);
            };
            function o(e) {
              return r.parser.defined.includes(
                As(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
              )
                ? t(e)
                : n(e);
            }
            function i(e) {
              return n(e);
            }
          },
        },
        Xs = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('reference'),
                e.enter('referenceMarker'),
                e.consume(t),
                e.exit('referenceMarker'),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter('referenceMarker'),
                  e.consume(r),
                  e.exit('referenceMarker'),
                  e.exit('reference'),
                  t)
                : n(r);
            }
          },
        },
        Zs = {
          name: 'labelStartImage',
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.enter('labelImage'),
                e.enter('labelImageMarker'),
                e.consume(t),
                e.exit('labelImageMarker'),
                o
              );
            };
            function o(t) {
              return 91 === t
                ? (e.enter('labelMarker'),
                  e.consume(t),
                  e.exit('labelMarker'),
                  e.exit('labelImage'),
                  i)
                : n(t);
            }
            function i(e) {
              return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? n(e) : t(e);
            }
          },
          resolveAll: Qs.resolveAll,
        };
      function ea(e) {
        return null === e || Xi(e) || ts(e) ? 1 : es(e) ? 2 : void 0;
      }
      const ta = {
        name: 'attention',
        tokenize: function (e, t) {
          const n = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            o = ea(r);
          let i;
          return function (t) {
            return (i = t), e.enter('attentionSequence'), s(t);
          };
          function s(a) {
            if (a === i) return e.consume(a), s;
            const l = e.exit('attentionSequence'),
              u = ea(a),
              c = !u || (2 === u && o) || n.includes(a),
              p = !o || (2 === o && u) || n.includes(r);
            return (
              (l._open = Boolean(42 === i ? c : c && (o || !p))),
              (l._close = Boolean(42 === i ? p : p && (u || !c))),
              t(a)
            );
          }
        },
        resolveAll: function (e, t) {
          let n,
            r,
            o,
            i,
            s,
            a,
            l,
            u,
            c = -1;
          for (; ++c < e.length; )
            if ('enter' === e[c][0] && 'attentionSequence' === e[c][1].type && e[c][1]._close)
              for (n = c; n--; )
                if (
                  'exit' === e[n][0] &&
                  'attentionSequence' === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  a =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  const p = Object.assign({}, e[n][1].end),
                    d = Object.assign({}, e[c][1].start);
                  na(p, -a),
                    na(d, a),
                    (i = {
                      type: a > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: p,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (s = {
                      type: a > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: Object.assign({}, e[c][1].start),
                      end: d,
                    }),
                    (o = {
                      type: a > 1 ? 'strongText' : 'emphasisText',
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[c][1].start),
                    }),
                    (r = {
                      type: a > 1 ? 'strong' : 'emphasis',
                      start: Object.assign({}, i.start),
                      end: Object.assign({}, s.end),
                    }),
                    (e[n][1].end = Object.assign({}, i.start)),
                    (e[c][1].start = Object.assign({}, s.end)),
                    (l = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (l = Ni(l, [
                        ['enter', e[n][1], t],
                        ['exit', e[n][1], t],
                      ])),
                    (l = Ni(l, [
                      ['enter', r, t],
                      ['enter', i, t],
                      ['exit', i, t],
                      ['enter', o, t],
                    ])),
                    (l = Ni(l, bs(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t))),
                    (l = Ni(l, [
                      ['exit', o, t],
                      ['enter', s, t],
                      ['exit', s, t],
                      ['exit', r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((u = 2),
                        (l = Ni(l, [
                          ['enter', e[c][1], t],
                          ['exit', e[c][1], t],
                        ])))
                      : (u = 0),
                    ji(e, n - 1, c - n + 3, l),
                    (c = n + l.length - u - 2);
                  break;
                }
          for (c = -1; ++c < e.length; )
            'attentionSequence' === e[c][1].type && (e[c][1].type = 'data');
          return e;
        },
      };
      function na(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      const ra = {
          name: 'autolink',
          tokenize: function (e, t, n) {
            let r = 0;
            return function (t) {
              return (
                e.enter('autolink'),
                e.enter('autolinkMarker'),
                e.consume(t),
                e.exit('autolinkMarker'),
                e.enter('autolinkProtocol'),
                o
              );
            };
            function o(t) {
              return qi(t) ? (e.consume(t), i) : l(t);
            }
            function i(e) {
              return 43 === e || 45 === e || 46 === e || Hi(e) ? ((r = 1), s(e)) : l(e);
            }
            function s(t) {
              return 58 === t
                ? (e.consume(t), (r = 0), a)
                : (43 === t || 45 === t || 46 === t || Hi(t)) && r++ < 32
                ? (e.consume(t), s)
                : ((r = 0), l(t));
            }
            function a(r) {
              return 62 === r
                ? (e.exit('autolinkProtocol'),
                  e.enter('autolinkMarker'),
                  e.consume(r),
                  e.exit('autolinkMarker'),
                  e.exit('autolink'),
                  t)
                : null === r || 32 === r || 60 === r || Vi(r)
                ? n(r)
                : (e.consume(r), a);
            }
            function l(t) {
              return 64 === t ? (e.consume(t), u) : Wi(t) ? (e.consume(t), l) : n(t);
            }
            function u(e) {
              return Hi(e) ? c(e) : n(e);
            }
            function c(n) {
              return 46 === n
                ? (e.consume(n), (r = 0), u)
                : 62 === n
                ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
                  e.enter('autolinkMarker'),
                  e.consume(n),
                  e.exit('autolinkMarker'),
                  e.exit('autolink'),
                  t)
                : p(n);
            }
            function p(t) {
              if ((45 === t || Hi(t)) && r++ < 63) {
                const n = 45 === t ? p : c;
                return e.consume(t), n;
              }
              return n(t);
            }
          },
        },
        oa = {
          name: 'htmlText',
          tokenize: function (e, t, n) {
            const r = this;
            let o, i, s;
            return function (t) {
              return e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), a;
            };
            function a(t) {
              return 33 === t
                ? (e.consume(t), l)
                : 47 === t
                ? (e.consume(t), w)
                : 63 === t
                ? (e.consume(t), v)
                : qi(t)
                ? (e.consume(t), T)
                : n(t);
            }
            function l(t) {
              return 45 === t
                ? (e.consume(t), u)
                : 91 === t
                ? (e.consume(t), (i = 0), f)
                : qi(t)
                ? (e.consume(t), y)
                : n(t);
            }
            function u(t) {
              return 45 === t ? (e.consume(t), d) : n(t);
            }
            function c(t) {
              return null === t
                ? n(t)
                : 45 === t
                ? (e.consume(t), p)
                : Ji(t)
                ? ((s = c), R(t))
                : (e.consume(t), c);
            }
            function p(t) {
              return 45 === t ? (e.consume(t), d) : c(t);
            }
            function d(e) {
              return 62 === e ? F(e) : 45 === e ? p(e) : c(e);
            }
            function f(t) {
              return t === 'CDATA['.charCodeAt(i++) ? (e.consume(t), 6 === i ? h : f) : n(t);
            }
            function h(t) {
              return null === t
                ? n(t)
                : 93 === t
                ? (e.consume(t), m)
                : Ji(t)
                ? ((s = h), R(t))
                : (e.consume(t), h);
            }
            function m(t) {
              return 93 === t ? (e.consume(t), g) : h(t);
            }
            function g(t) {
              return 62 === t ? F(t) : 93 === t ? (e.consume(t), g) : h(t);
            }
            function y(t) {
              return null === t || 62 === t ? F(t) : Ji(t) ? ((s = y), R(t)) : (e.consume(t), y);
            }
            function v(t) {
              return null === t
                ? n(t)
                : 63 === t
                ? (e.consume(t), b)
                : Ji(t)
                ? ((s = v), R(t))
                : (e.consume(t), v);
            }
            function b(e) {
              return 62 === e ? F(e) : v(e);
            }
            function w(t) {
              return qi(t) ? (e.consume(t), k) : n(t);
            }
            function k(t) {
              return 45 === t || Hi(t) ? (e.consume(t), k) : E(t);
            }
            function E(t) {
              return Ji(t) ? ((s = E), R(t)) : Zi(t) ? (e.consume(t), E) : F(t);
            }
            function T(t) {
              return 45 === t || Hi(t)
                ? (e.consume(t), T)
                : 47 === t || 62 === t || Xi(t)
                ? S(t)
                : n(t);
            }
            function S(t) {
              return 47 === t
                ? (e.consume(t), F)
                : 58 === t || 95 === t || qi(t)
                ? (e.consume(t), _)
                : Ji(t)
                ? ((s = S), R(t))
                : Zi(t)
                ? (e.consume(t), S)
                : F(t);
            }
            function _(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || Hi(t)
                ? (e.consume(t), _)
                : x(t);
            }
            function x(t) {
              return 61 === t
                ? (e.consume(t), P)
                : Ji(t)
                ? ((s = x), R(t))
                : Zi(t)
                ? (e.consume(t), x)
                : S(t);
            }
            function P(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                ? n(t)
                : 34 === t || 39 === t
                ? (e.consume(t), (o = t), C)
                : Ji(t)
                ? ((s = P), R(t))
                : Zi(t)
                ? (e.consume(t), P)
                : (e.consume(t), O);
            }
            function C(t) {
              return t === o
                ? (e.consume(t), (o = void 0), A)
                : null === t
                ? n(t)
                : Ji(t)
                ? ((s = C), R(t))
                : (e.consume(t), C);
            }
            function O(t) {
              return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t
                ? n(t)
                : 47 === t || 62 === t || Xi(t)
                ? S(t)
                : (e.consume(t), O);
            }
            function A(e) {
              return 47 === e || 62 === e || Xi(e) ? S(e) : n(e);
            }
            function F(r) {
              return 62 === r
                ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t)
                : n(r);
            }
            function R(t) {
              return (
                e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), D
              );
            }
            function D(t) {
              return Zi(t)
                ? rs(
                    e,
                    L,
                    'linePrefix',
                    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
                  )(t)
                : L(t);
            }
            function L(t) {
              return e.enter('htmlTextData'), s(t);
            }
          },
        },
        ia = {
          name: 'labelStartLink',
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.enter('labelLink'),
                e.enter('labelMarker'),
                e.consume(t),
                e.exit('labelMarker'),
                e.exit('labelLink'),
                o
              );
            };
            function o(e) {
              return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? n(e) : t(e);
            }
          },
          resolveAll: Qs.resolveAll,
        },
        sa = {
          name: 'hardBreakEscape',
          tokenize: function (e, t, n) {
            return function (t) {
              return e.enter('hardBreakEscape'), e.consume(t), r;
            };
            function r(r) {
              return Ji(r) ? (e.exit('hardBreakEscape'), t(r)) : n(r);
            }
          },
        },
        aa = {
          name: 'codeText',
          tokenize: function (e, t, n) {
            let r,
              o,
              i = 0;
            return function (t) {
              return e.enter('codeText'), e.enter('codeTextSequence'), s(t);
            };
            function s(t) {
              return 96 === t ? (e.consume(t), i++, s) : (e.exit('codeTextSequence'), a(t));
            }
            function a(t) {
              return null === t
                ? n(t)
                : 32 === t
                ? (e.enter('space'), e.consume(t), e.exit('space'), a)
                : 96 === t
                ? ((o = e.enter('codeTextSequence')), (r = 0), u(t))
                : Ji(t)
                ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), a)
                : (e.enter('codeTextData'), l(t));
            }
            function l(t) {
              return null === t || 32 === t || 96 === t || Ji(t)
                ? (e.exit('codeTextData'), a(t))
                : (e.consume(t), l);
            }
            function u(n) {
              return 96 === n
                ? (e.consume(n), r++, u)
                : r === i
                ? (e.exit('codeTextSequence'), e.exit('codeText'), t(n))
                : ((o.type = 'codeTextData'), l(n));
            }
          },
          resolve: function (e) {
            let t,
              n,
              r = e.length - 4,
              o = 3;
            if (
              !(
                ('lineEnding' !== e[o][1].type && 'space' !== e[o][1].type) ||
                ('lineEnding' !== e[r][1].type && 'space' !== e[r][1].type)
              )
            )
              for (t = o; ++t < r; )
                if ('codeTextData' === e[t][1].type) {
                  (e[o][1].type = 'codeTextPadding'),
                    (e[r][1].type = 'codeTextPadding'),
                    (o += 2),
                    (r -= 2);
                  break;
                }
            for (t = o - 1, r++; ++t <= r; )
              void 0 === n
                ? t !== r && 'lineEnding' !== e[t][1].type && (n = t)
                : (t !== r && 'lineEnding' !== e[t][1].type) ||
                  ((e[n][1].type = 'codeTextData'),
                  t !== n + 2 &&
                    ((e[n][1].end = e[t - 1][1].end),
                    e.splice(n + 2, t - n - 2),
                    (r -= t - n - 2),
                    (t = n + 2)),
                  (n = void 0));
            return e;
          },
          previous: function (e) {
            return 96 !== e || 'characterEscape' === this.events[this.events.length - 1][1].type;
          },
        },
        la = {
          42: Es,
          43: Es,
          45: Es,
          48: Es,
          49: Es,
          50: Es,
          51: Es,
          52: Es,
          53: Es,
          54: Es,
          55: Es,
          56: Es,
          57: Es,
          62: _s,
        },
        ua = { 91: Fs },
        ca = { [-2]: Ds, [-1]: Ds, 32: Ds },
        pa = { 35: Gs, 42: ks, 45: [Is, ks], 60: js, 61: Is, 95: ks, 96: $s, 126: $s },
        da = { 38: Ws, 92: Vs },
        fa = {
          [-5]: Ks,
          [-4]: Ks,
          [-3]: Ks,
          33: Zs,
          38: Ws,
          42: ta,
          60: [ra, oa],
          91: ia,
          92: [sa, Vs],
          93: Qs,
          95: ta,
          96: aa,
        },
        ha = { null: [ta, fs] },
        ma = { null: [42, 95] },
        ga = { null: [] };
      const ya = /[\0\t\n\r]/g;
      function va(e, t) {
        const n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          65535 == (65535 & n) ||
          65534 == (65535 & n) ||
          n > 1114111
          ? '�'
          : String.fromCharCode(n);
      }
      const ba = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function wa(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          const e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return va(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return Hs(n) || e;
      }
      const ka = {}.hasOwnProperty,
        Ea = function (t, n, r) {
          return (
            'string' != typeof n && ((r = n), (n = void 0)),
            (function (e) {
              const t = {
                transforms: [],
                canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
                enter: {
                  autolink: s(w),
                  autolinkProtocol: d,
                  autolinkEmail: d,
                  atxHeading: s(y),
                  blockQuote: s(function () {
                    return { type: 'blockquote', children: [] };
                  }),
                  characterEscape: d,
                  characterReference: d,
                  codeFenced: s(g),
                  codeFencedFenceInfo: a,
                  codeFencedFenceMeta: a,
                  codeIndented: s(g, a),
                  codeText: s(function () {
                    return { type: 'inlineCode', value: '' };
                  }, a),
                  codeTextData: d,
                  data: d,
                  codeFlowValue: d,
                  definition: s(function () {
                    return {
                      type: 'definition',
                      identifier: '',
                      label: null,
                      title: null,
                      url: '',
                    };
                  }),
                  definitionDestinationString: a,
                  definitionLabelString: a,
                  definitionTitleString: a,
                  emphasis: s(function () {
                    return { type: 'emphasis', children: [] };
                  }),
                  hardBreakEscape: s(v),
                  hardBreakTrailing: s(v),
                  htmlFlow: s(b, a),
                  htmlFlowData: d,
                  htmlText: s(b, a),
                  htmlTextData: d,
                  image: s(function () {
                    return { type: 'image', title: null, url: '', alt: null };
                  }),
                  label: a,
                  link: s(w),
                  listItem: s(function (e) {
                    return { type: 'listItem', spread: e._spread, checked: null, children: [] };
                  }),
                  listItemValue: function (e) {
                    i('expectingFirstListItemValue') &&
                      ((this.stack[this.stack.length - 2].start = Number.parseInt(
                        this.sliceSerialize(e),
                        10,
                      )),
                      o('expectingFirstListItemValue'));
                  },
                  listOrdered: s(k, function () {
                    o('expectingFirstListItemValue', !0);
                  }),
                  listUnordered: s(k),
                  paragraph: s(function () {
                    return { type: 'paragraph', children: [] };
                  }),
                  reference: function () {
                    o('referenceType', 'collapsed');
                  },
                  referenceString: a,
                  resourceDestinationString: a,
                  resourceTitleString: a,
                  setextHeading: s(y),
                  strong: s(function () {
                    return { type: 'strong', children: [] };
                  }),
                  thematicBreak: s(function () {
                    return { type: 'thematicBreak' };
                  }),
                },
                exit: {
                  atxHeading: u(),
                  atxHeadingSequence: function (e) {
                    const t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      const n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: u(),
                  autolinkEmail: function (e) {
                    f.call(this, e),
                      (this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    f.call(this, e),
                      (this.stack[this.stack.length - 1].url = this.sliceSerialize(e));
                  },
                  blockQuote: u(),
                  characterEscapeValue: f,
                  characterReferenceMarkerHexadecimal: m,
                  characterReferenceMarkerNumeric: m,
                  characterReferenceValue: function (e) {
                    const t = this.sliceSerialize(e),
                      n = i('characterReferenceType');
                    let r;
                    n
                      ? ((r = va(t, 'characterReferenceMarkerNumeric' === n ? 10 : 16)),
                        o('characterReferenceType'))
                      : (r = Hs(t));
                    const s = this.stack.pop();
                    (s.value += r), (s.position.end = Ta(e.end));
                  },
                  codeFenced: u(function () {
                    const e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      '',
                    )),
                      o('flowCodeInside');
                  }),
                  codeFencedFence: function () {
                    i('flowCodeInside') || (this.buffer(), o('flowCodeInside', !0));
                  },
                  codeFencedFenceInfo: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: f,
                  codeIndented: u(function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, '');
                  }),
                  codeText: u(function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: f,
                  data: f,
                  definition: u(),
                  definitionDestinationString: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    const t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t), (n.identifier = As(this.sliceSerialize(e)).toLowerCase());
                  },
                  definitionTitleString: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: u(),
                  hardBreakEscape: u(h),
                  hardBreakTrailing: u(h),
                  htmlFlow: u(function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: f,
                  htmlText: u(function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: f,
                  image: u(function () {
                    const e = this.stack[this.stack.length - 1];
                    if (i('inReference')) {
                      const t = i('referenceType') || 'shortcut';
                      (e.type += 'Reference'), (e.referenceType = t), delete e.url, delete e.title;
                    } else delete e.identifier, delete e.label;
                    o('referenceType');
                  }),
                  label: function () {
                    const e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if ((o('inReference', !0), 'link' === n.type)) {
                      const t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    const t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = (function (e) {
                      return e.replace(ba, wa);
                    })(t)),
                      (n.identifier = As(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    const n = this.stack[this.stack.length - 1];
                    if (i('atHardBreak'))
                      return (
                        (n.children[n.children.length - 1].position.end = Ta(e.end)),
                        void o('atHardBreak')
                      );
                    !i('setextHeadingSlurpLineEnding') &&
                      t.canContainEols.includes(n.type) &&
                      (d.call(this, e), f.call(this, e));
                  },
                  link: u(function () {
                    const e = this.stack[this.stack.length - 1];
                    if (i('inReference')) {
                      const t = i('referenceType') || 'shortcut';
                      (e.type += 'Reference'), (e.referenceType = t), delete e.url, delete e.title;
                    } else delete e.identifier, delete e.label;
                    o('referenceType');
                  }),
                  listItem: u(),
                  listOrdered: u(),
                  listUnordered: u(),
                  paragraph: u(),
                  referenceString: function (e) {
                    const t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = As(this.sliceSerialize(e)).toLowerCase()),
                      o('referenceType', 'full');
                  },
                  resourceDestinationString: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    o('inReference');
                  },
                  setextHeading: u(function () {
                    o('setextHeadingSlurpLineEnding');
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    o('setextHeadingSlurpLineEnding', !0);
                  },
                  strong: u(),
                  thematicBreak: u(),
                },
              };
              Sa(t, (e || {}).mdastExtensions || []);
              const n = {};
              return function (e) {
                let n = { type: 'root', children: [] };
                const s = {
                    stack: [n],
                    tokenStack: [],
                    config: t,
                    enter: l,
                    exit: c,
                    buffer: a,
                    resume: p,
                    setData: o,
                    getData: i,
                  },
                  u = [];
                let d = -1;
                for (; ++d < e.length; )
                  ('listOrdered' !== e[d][1].type && 'listUnordered' !== e[d][1].type) ||
                    ('enter' === e[d][0] ? u.push(d) : (d = r(e, u.pop(), d)));
                for (d = -1; ++d < e.length; ) {
                  const n = t[e[d][0]];
                  ka.call(n, e[d][1].type) &&
                    n[e[d][1].type].call(
                      Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, s),
                      e[d][1],
                    );
                }
                if (s.tokenStack.length > 0) {
                  const e = s.tokenStack[s.tokenStack.length - 1];
                  (e[1] || xa).call(s, void 0, e[0]);
                }
                for (
                  n.position = {
                    start: Ta(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }),
                    end: Ta(
                      e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 },
                    ),
                  },
                    d = -1;
                  ++d < t.transforms.length;

                )
                  n = t.transforms[d](n) || n;
                return n;
              };
              function r(e, t, n) {
                let r,
                  o,
                  i,
                  s,
                  a = t - 1,
                  l = -1,
                  u = !1;
                for (; ++a <= n; ) {
                  const t = e[a];
                  if (
                    ('listUnordered' === t[1].type ||
                    'listOrdered' === t[1].type ||
                    'blockQuote' === t[1].type
                      ? ('enter' === t[0] ? l++ : l--, (s = void 0))
                      : 'lineEndingBlank' === t[1].type
                      ? 'enter' === t[0] && (!r || s || l || i || (i = a), (s = void 0))
                      : 'linePrefix' === t[1].type ||
                        'listItemValue' === t[1].type ||
                        'listItemMarker' === t[1].type ||
                        'listItemPrefix' === t[1].type ||
                        'listItemPrefixWhitespace' === t[1].type ||
                        (s = void 0),
                    (!l && 'enter' === t[0] && 'listItemPrefix' === t[1].type) ||
                      (-1 === l &&
                        'exit' === t[0] &&
                        ('listUnordered' === t[1].type || 'listOrdered' === t[1].type)))
                  ) {
                    if (r) {
                      let s = a;
                      for (o = void 0; s--; ) {
                        const t = e[s];
                        if ('lineEnding' === t[1].type || 'lineEndingBlank' === t[1].type) {
                          if ('exit' === t[0]) continue;
                          o && ((e[o][1].type = 'lineEndingBlank'), (u = !0)),
                            (t[1].type = 'lineEnding'),
                            (o = s);
                        } else if (
                          'linePrefix' !== t[1].type &&
                          'blockQuotePrefix' !== t[1].type &&
                          'blockQuotePrefixWhitespace' !== t[1].type &&
                          'blockQuoteMarker' !== t[1].type &&
                          'listItemIndent' !== t[1].type
                        )
                          break;
                      }
                      i && (!o || i < o) && (r._spread = !0),
                        (r.end = Object.assign({}, o ? e[o][1].start : t[1].end)),
                        e.splice(o || a, 0, ['exit', r, t[2]]),
                        a++,
                        n++;
                    }
                    'listItemPrefix' === t[1].type &&
                      ((r = {
                        type: 'listItem',
                        _spread: !1,
                        start: Object.assign({}, t[1].start),
                        end: void 0,
                      }),
                      e.splice(a, 0, ['enter', r, t[2]]),
                      a++,
                      n++,
                      (i = void 0),
                      (s = !0));
                  }
                }
                return (e[t][1]._spread = u), n;
              }
              function o(e, t) {
                n[e] = t;
              }
              function i(e) {
                return n[e];
              }
              function s(e, t) {
                return function (n) {
                  l.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function a() {
                this.stack.push({ type: 'fragment', children: [] });
              }
              function l(e, t, n) {
                return (
                  this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n]),
                  (e.position = { start: Ta(t.start) }),
                  e
                );
              }
              function u(e) {
                return function (t) {
                  e && e.call(this, t), c.call(this, t);
                };
              }
              function c(e, t) {
                const n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (!r)
                  throw new Error(
                    'Cannot close `' +
                      e.type +
                      '` (' +
                      si({ start: e.start, end: e.end }) +
                      '): it’s not open',
                  );
                return (
                  r[0].type !== e.type &&
                    (t ? t.call(this, e, r[0]) : (r[1] || xa).call(this, e, r[0])),
                  (n.position.end = Ta(e.end)),
                  n
                );
              }
              function p() {
                return (function (e, t) {
                  return Ui(
                    e,
                    'boolean' != typeof Ii.includeImageAlt || Ii.includeImageAlt,
                    'boolean' != typeof Ii.includeHtml || Ii.includeHtml,
                  );
                })(this.stack.pop());
              }
              function d(e) {
                const t = this.stack[this.stack.length - 1];
                let n = t.children[t.children.length - 1];
                (n && 'text' === n.type) ||
                  ((n = { type: 'text', value: '' }),
                  (n.position = { start: Ta(e.start) }),
                  t.children.push(n)),
                  this.stack.push(n);
              }
              function f(e) {
                const t = this.stack.pop();
                (t.value += this.sliceSerialize(e)), (t.position.end = Ta(e.end));
              }
              function h() {
                o('atHardBreak', !0);
              }
              function m(e) {
                o('characterReferenceType', e.type);
              }
              function g() {
                return { type: 'code', lang: null, meta: null, value: '' };
              }
              function y() {
                return { type: 'heading', depth: void 0, children: [] };
              }
              function v() {
                return { type: 'break' };
              }
              function b() {
                return { type: 'html', value: '' };
              }
              function w() {
                return { type: 'link', title: null, url: '', children: [] };
              }
              function k(e) {
                return {
                  type: 'list',
                  ordered: 'listOrdered' === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(r)(
              (function (e) {
                for (; !ls(e); );
                return e;
              })(
                (function (t) {
                  const n = (function (e) {
                      const t = {};
                      let n = -1;
                      for (; ++n < e.length; ) Bi(t, e[n]);
                      return t;
                    })([e, ...((t || {}).extensions || [])]),
                    r = {
                      defined: [],
                      lazy: {},
                      constructs: n,
                      content: o(os),
                      document: o(is),
                      flow: o(ds),
                      string: o(hs),
                      text: o(ms),
                    };
                  return r;
                  function o(e) {
                    return function (t) {
                      return ws(r, e, t);
                    };
                  }
                })(r)
                  .document()
                  .write(
                    (function () {
                      let e,
                        t = 1,
                        n = '',
                        r = !0;
                      return function (o, i, s) {
                        const a = [];
                        let l, u, c, p, d;
                        for (
                          o = n + o.toString(i),
                            c = 0,
                            n = '',
                            r && (65279 === o.charCodeAt(0) && c++, (r = void 0));
                          c < o.length;

                        ) {
                          if (
                            ((ya.lastIndex = c),
                            (l = ya.exec(o)),
                            (p = l && void 0 !== l.index ? l.index : o.length),
                            (d = o.charCodeAt(p)),
                            !l)
                          ) {
                            n = o.slice(c);
                            break;
                          }
                          if (10 === d && c === p && e) a.push(-3), (e = void 0);
                          else
                            switch (
                              (e && (a.push(-5), (e = void 0)),
                              c < p && (a.push(o.slice(c, p)), (t += p - c)),
                              d)
                            ) {
                              case 0:
                                a.push(65533), t++;
                                break;
                              case 9:
                                for (u = 4 * Math.ceil(t / 4), a.push(-2); t++ < u; ) a.push(-1);
                                break;
                              case 10:
                                a.push(-4), (t = 1);
                                break;
                              default:
                                (e = !0), (t = 1);
                            }
                          c = p + 1;
                        }
                        return s && (e && a.push(-5), n && a.push(n), a.push(null)), a;
                      };
                    })()(t, n, !0),
                  ),
              ),
            )
          );
        };
      function Ta(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function Sa(e, t) {
        let n = -1;
        for (; ++n < t.length; ) {
          const r = t[n];
          Array.isArray(r) ? Sa(e, r) : _a(e, r);
        }
      }
      function _a(e, t) {
        let n;
        for (n in t)
          if (ka.call(t, n))
            if ('canContainEols' === n) {
              const r = t[n];
              r && e[n].push(...r);
            } else if ('transforms' === n) {
              const r = t[n];
              r && e[n].push(...r);
            } else if ('enter' === n || 'exit' === n) {
              const r = t[n];
              r && Object.assign(e[n], r);
            }
      }
      function xa(e, t) {
        throw e
          ? new Error(
              'Cannot close `' +
                e.type +
                '` (' +
                si({ start: e.start, end: e.end }) +
                '): a different token (`' +
                t.type +
                '`, ' +
                si({ start: t.start, end: t.end }) +
                ') is open',
            )
          : new Error(
              'Cannot close document, a token (`' +
                t.type +
                '`, ' +
                si({ start: t.start, end: t.end }) +
                ') is still open',
            );
      }
      function Pa(e) {
        Object.assign(this, {
          Parser: t => {
            const n = this.data('settings');
            return Ea(
              t,
              Object.assign({}, n, e, {
                extensions: this.data('micromarkExtensions') || [],
                mdastExtensions: this.data('fromMarkdownExtensions') || [],
              }),
            );
          },
        });
      }
      function Ca(e) {
        const t = [];
        let n = -1,
          r = 0,
          o = 0;
        for (; ++n < e.length; ) {
          const i = e.charCodeAt(n);
          let s = '';
          if (37 === i && Hi(e.charCodeAt(n + 1)) && Hi(e.charCodeAt(n + 2))) o = 2;
          else if (i < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (s = String.fromCharCode(i));
          else if (i > 55295 && i < 57344) {
            const t = e.charCodeAt(n + 1);
            i < 56320 && t > 56319 && t < 57344
              ? ((s = String.fromCharCode(i, t)), (o = 1))
              : (s = '�');
          } else s = String.fromCharCode(i);
          s && (t.push(e.slice(r, n), encodeURIComponent(s)), (r = n + o + 1), (s = '')),
            o && ((n += o), (o = 0));
        }
        return t.join('') + e.slice(r);
      }
      const Oa = function (e) {
        if (null == e) return Fa;
        if ('string' == typeof e)
          return (
            (t = e),
            Aa(function (e) {
              return e && e.type === t;
            })
          );
        var t;
        if ('object' == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const t = [];
                let n = -1;
                for (; ++n < e.length; ) t[n] = Oa(e[n]);
                return Aa(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].call(this, ...e)) return !0;
                  return !1;
                });
              })(e)
            : (function (e) {
                return Aa(function (t) {
                  let n;
                  for (n in e) if (t[n] !== e[n]) return !1;
                  return !0;
                });
              })(e);
        if ('function' == typeof e) return Aa(e);
        throw new Error('Expected function, string, or object as test');
      };
      function Aa(e) {
        return function (t, ...n) {
          return Boolean(
            t && 'object' == typeof t && 'type' in t && Boolean(e.call(this, t, ...n)),
          );
        };
      }
      function Fa() {
        return !0;
      }
      const Ra = function (e, t, n, r) {
          'function' == typeof t && 'function' != typeof n && ((r = n), (n = t), (t = null)),
            (function (e, t, n, r) {
              'function' == typeof t && 'function' != typeof n && ((r = n), (n = t), (t = null));
              const o = Oa(t),
                i = r ? -1 : 1;
              !(function e(s, a, l) {
                const u = s && 'object' == typeof s ? s : {};
                if ('string' == typeof u.type) {
                  const e =
                    'string' == typeof u.tagName
                      ? u.tagName
                      : 'string' == typeof u.name
                      ? u.name
                      : void 0;
                  Object.defineProperty(c, 'name', {
                    value: 'node (' + s.type + (e ? '<' + e + '>' : '') + ')',
                  });
                }
                return c;
                function c() {
                  let u,
                    c,
                    p,
                    d = [];
                  if (
                    (!t || o(s, a, l[l.length - 1] || null)) &&
                    ((d = (function (e) {
                      return Array.isArray(e) ? e : 'number' == typeof e ? [!0, e] : [e];
                    })(n(s, l))),
                    !1 === d[0])
                  )
                    return d;
                  if (s.children && 'skip' !== d[0])
                    for (
                      c = (r ? s.children.length : -1) + i, p = l.concat(s);
                      c > -1 && c < s.children.length;

                    ) {
                      if (((u = e(s.children[c], c, p)()), !1 === u[0])) return u;
                      c = 'number' == typeof u[1] ? u[1] : c + i;
                    }
                  return d;
                }
              })(e, void 0, [])();
            })(
              e,
              t,
              function (e, t) {
                const r = t[t.length - 1];
                return n(e, r ? r.children.indexOf(e) : null, r);
              },
              r,
            );
        },
        Da = Ga('start'),
        La = Ga('end');
      function Ga(e) {
        return function (t) {
          const n = (t && t.position && t.position[e]) || {};
          return {
            line: n.line || null,
            column: n.column || null,
            offset: n.offset > -1 ? n.offset : null,
          };
        };
      }
      const Ia = {}.hasOwnProperty;
      function Ua(e) {
        return String(e || '').toUpperCase();
      }
      function za(e, t) {
        const n = String(t.identifier).toUpperCase(),
          r = Ca(n.toLowerCase()),
          o = e.footnoteOrder.indexOf(n);
        let i;
        -1 === o
          ? (e.footnoteOrder.push(n), (e.footnoteCounts[n] = 1), (i = e.footnoteOrder.length))
          : (e.footnoteCounts[n]++, (i = o + 1));
        const s = e.footnoteCounts[n],
          a = {
            type: 'element',
            tagName: 'a',
            properties: {
              href: '#' + e.clobberPrefix + 'fn-' + r,
              id: e.clobberPrefix + 'fnref-' + r + (s > 1 ? '-' + s : ''),
              dataFootnoteRef: !0,
              ariaDescribedBy: ['footnote-label'],
            },
            children: [{ type: 'text', value: String(i) }],
          };
        e.patch(t, a);
        const l = { type: 'element', tagName: 'sup', properties: {}, children: [a] };
        return e.patch(t, l), e.applyData(t, l);
      }
      function ja(e, t) {
        const n = t.referenceType;
        let r = ']';
        if (
          ('collapsed' === n
            ? (r += '[]')
            : 'full' === n && (r += '[' + (t.label || t.identifier) + ']'),
          'imageReference' === t.type)
        )
          return { type: 'text', value: '![' + t.alt + r };
        const o = e.all(t),
          i = o[0];
        i && 'text' === i.type
          ? (i.value = '[' + i.value)
          : o.unshift({ type: 'text', value: '[' });
        const s = o[o.length - 1];
        return s && 'text' === s.type ? (s.value += r) : o.push({ type: 'text', value: r }), o;
      }
      function Na(e) {
        const t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      const Ma = 9,
        Ba = 32;
      function $a(e) {
        const t = String(e),
          n = /\r?\n|\r/g;
        let r = n.exec(t),
          o = 0;
        const i = [];
        for (; r; )
          i.push(qa(t.slice(o, r.index), o > 0, !0), r[0]),
            (o = r.index + r[0].length),
            (r = n.exec(t));
        return i.push(qa(t.slice(o), o > 0, !1)), i.join('');
      }
      function qa(e, t, n) {
        let r = 0,
          o = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; t === Ma || t === Ba; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(o - 1);
          for (; t === Ma || t === Ba; ) o--, (t = e.codePointAt(o - 1));
        }
        return o > r ? e.slice(r, o) : '';
      }
      const Ha = {
        blockquote: function (e, t) {
          const n = {
            type: 'element',
            tagName: 'blockquote',
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          const n = { type: 'element', tagName: 'br', properties: {}, children: [] };
          return e.patch(t, n), [e.applyData(t, n), { type: 'text', value: '\n' }];
        },
        code: function (e, t) {
          const n = t.value ? t.value + '\n' : '',
            r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
            o = {};
          r && (o.className = ['language-' + r]);
          let i = {
            type: 'element',
            tagName: 'code',
            properties: o,
            children: [{ type: 'text', value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = e.applyData(t, i)),
            (i = { type: 'element', tagName: 'pre', properties: {}, children: [i] }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          const n = { type: 'element', tagName: 'del', properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          const n = { type: 'element', tagName: 'em', properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: za,
        footnote: function (e, t) {
          const n = e.footnoteById;
          let r = 1;
          for (; r in n; ) r++;
          const o = String(r);
          return (
            (n[o] = {
              type: 'footnoteDefinition',
              identifier: o,
              children: [{ type: 'paragraph', children: t.children }],
              position: t.position,
            }),
            za(e, { type: 'footnoteReference', identifier: o, position: t.position })
          );
        },
        heading: function (e, t) {
          const n = { type: 'element', tagName: 'h' + t.depth, properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.dangerous) {
            const n = { type: 'raw', value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
          return null;
        },
        imageReference: function (e, t) {
          const n = e.definition(t.identifier);
          if (!n) return ja(e, t);
          const r = { src: Ca(n.url || ''), alt: t.alt };
          null !== n.title && void 0 !== n.title && (r.title = n.title);
          const o = { type: 'element', tagName: 'img', properties: r, children: [] };
          return e.patch(t, o), e.applyData(t, o);
        },
        image: function (e, t) {
          const n = { src: Ca(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          const r = { type: 'element', tagName: 'img', properties: n, children: [] };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          const n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
          e.patch(t, n);
          const r = { type: 'element', tagName: 'code', properties: {}, children: [n] };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          const n = e.definition(t.identifier);
          if (!n) return ja(e, t);
          const r = { href: Ca(n.url || '') };
          null !== n.title && void 0 !== n.title && (r.title = n.title);
          const o = { type: 'element', tagName: 'a', properties: r, children: e.all(t) };
          return e.patch(t, o), e.applyData(t, o);
        },
        link: function (e, t) {
          const n = { href: Ca(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          const r = { type: 'element', tagName: 'a', properties: n, children: e.all(t) };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          const r = e.all(t),
            o = n
              ? (function (e) {
                  let t = !1;
                  if ('list' === e.type) {
                    t = e.spread || !1;
                    const n = e.children;
                    let r = -1;
                    for (; !t && ++r < n.length; ) t = Na(n[r]);
                  }
                  return t;
                })(n)
              : Na(t),
            i = {},
            s = [];
          if ('boolean' == typeof t.checked) {
            const e = r[0];
            let n;
            e && 'element' === e.type && 'p' === e.tagName
              ? (n = e)
              : ((n = { type: 'element', tagName: 'p', properties: {}, children: [] }),
                r.unshift(n)),
              n.children.length > 0 && n.children.unshift({ type: 'text', value: ' ' }),
              n.children.unshift({
                type: 'element',
                tagName: 'input',
                properties: { type: 'checkbox', checked: t.checked, disabled: !0 },
                children: [],
              }),
              (i.className = ['task-list-item']);
          }
          let a = -1;
          for (; ++a < r.length; ) {
            const e = r[a];
            (o || 0 !== a || 'element' !== e.type || 'p' !== e.tagName) &&
              s.push({ type: 'text', value: '\n' }),
              'element' !== e.type || 'p' !== e.tagName || o ? s.push(e) : s.push(...e.children);
          }
          const l = r[r.length - 1];
          l &&
            (o || 'element' !== l.type || 'p' !== l.tagName) &&
            s.push({ type: 'text', value: '\n' });
          const u = { type: 'element', tagName: 'li', properties: i, children: s };
          return e.patch(t, u), e.applyData(t, u);
        },
        list: function (e, t) {
          const n = {},
            r = e.all(t);
          let o = -1;
          for (
            'number' == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++o < r.length;

          ) {
            const e = r[o];
            if (
              'element' === e.type &&
              'li' === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes('task-list-item')
            ) {
              n.className = ['contains-task-list'];
              break;
            }
          }
          const i = {
            type: 'element',
            tagName: t.ordered ? 'ol' : 'ul',
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, i), e.applyData(t, i);
        },
        paragraph: function (e, t) {
          const n = { type: 'element', tagName: 'p', properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          const n = { type: 'root', children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          const n = { type: 'element', tagName: 'strong', properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          const n = e.all(t),
            r = n.shift(),
            o = [];
          if (r) {
            const n = {
              type: 'element',
              tagName: 'thead',
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), o.push(n);
          }
          if (n.length > 0) {
            const r = {
                type: 'element',
                tagName: 'tbody',
                properties: {},
                children: e.wrap(n, !0),
              },
              i = Da(t.children[1]),
              s = La(t.children[t.children.length - 1]);
            i.line && s.line && (r.position = { start: i, end: s }), o.push(r);
          }
          const i = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(o, !0) };
          return e.patch(t, i), e.applyData(t, i);
        },
        tableCell: function (e, t) {
          const n = { type: 'element', tagName: 'td', properties: {}, children: e.all(t) };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          const r = n ? n.children : void 0,
            o = 0 === (r ? r.indexOf(t) : 1) ? 'th' : 'td',
            i = n && 'table' === n.type ? n.align : void 0,
            s = i ? i.length : t.children.length;
          let a = -1;
          const l = [];
          for (; ++a < s; ) {
            const n = t.children[a],
              r = {},
              s = i ? i[a] : void 0;
            s && (r.align = s);
            let u = { type: 'element', tagName: o, properties: r, children: [] };
            n && ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(t, u))), l.push(u);
          }
          const u = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(l, !0) };
          return e.patch(t, u), e.applyData(t, u);
        },
        text: function (e, t) {
          const n = { type: 'text', value: $a(String(t.value)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          const n = { type: 'element', tagName: 'hr', properties: {}, children: [] };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: Wa,
        yaml: Wa,
        definition: Wa,
        footnoteDefinition: Wa,
      };
      function Wa() {
        return null;
      }
      const Va = {}.hasOwnProperty;
      function Ka(e, t) {
        e.position &&
          (t.position = (function (e) {
            return { start: Da(e), end: La(e) };
          })(e));
      }
      function Qa(e, t) {
        let n = t;
        if (e && e.data) {
          const t = e.data.hName,
            r = e.data.hChildren,
            o = e.data.hProperties;
          'string' == typeof t &&
            ('element' === n.type
              ? (n.tagName = t)
              : (n = { type: 'element', tagName: t, properties: {}, children: [] })),
            'element' === n.type && o && (n.properties = { ...n.properties, ...o }),
            'children' in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function Ya(e, t, n) {
        const r = t && t.type;
        if (!r) throw new Error('Expected node, got `' + t + '`');
        return Va.call(e.handlers, r)
          ? e.handlers[r](e, t, n)
          : e.passThrough && e.passThrough.includes(r)
          ? 'children' in t
            ? { ...t, children: Ja(e, t) }
            : t
          : e.unknownHandler
          ? e.unknownHandler(e, t, n)
          : (function (e, t) {
              const n = t.data || {},
                r =
                  !('value' in t) || Va.call(n, 'hProperties') || Va.call(n, 'hChildren')
                    ? { type: 'element', tagName: 'div', properties: {}, children: Ja(e, t) }
                    : { type: 'text', value: t.value };
              return e.patch(t, r), e.applyData(t, r);
            })(e, t);
      }
      function Ja(e, t) {
        const n = [];
        if ('children' in t) {
          const r = t.children;
          let o = -1;
          for (; ++o < r.length; ) {
            const i = Ya(e, r[o], t);
            if (i) {
              if (
                o &&
                'break' === r[o - 1].type &&
                (Array.isArray(i) || 'text' !== i.type || (i.value = i.value.replace(/^\s+/, '')),
                !Array.isArray(i) && 'element' === i.type)
              ) {
                const e = i.children[0];
                e && 'text' === e.type && (e.value = e.value.replace(/^\s+/, ''));
              }
              Array.isArray(i) ? n.push(...i) : n.push(i);
            }
          }
        }
        return n;
      }
      function Xa(e, t) {
        const n = [];
        let r = -1;
        for (t && n.push({ type: 'text', value: '\n' }); ++r < e.length; )
          r && n.push({ type: 'text', value: '\n' }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: 'text', value: '\n' }), n;
      }
      function Za(e, t) {
        const n = (function (e, t) {
            const n = t || {},
              r = n.allowDangerousHtml || !1,
              o = {};
            return (
              (s.dangerous = r),
              (s.clobberPrefix =
                void 0 === n.clobberPrefix || null === n.clobberPrefix
                  ? 'user-content-'
                  : n.clobberPrefix),
              (s.footnoteLabel = n.footnoteLabel || 'Footnotes'),
              (s.footnoteLabelTagName = n.footnoteLabelTagName || 'h2'),
              (s.footnoteLabelProperties = n.footnoteLabelProperties || { className: ['sr-only'] }),
              (s.footnoteBackLabel = n.footnoteBackLabel || 'Back to content'),
              (s.unknownHandler = n.unknownHandler),
              (s.passThrough = n.passThrough),
              (s.handlers = { ...Ha, ...n.handlers }),
              (s.definition = (function (e) {
                const t = Object.create(null);
                if (!e || !e.type) throw new Error('mdast-util-definitions expected node');
                return (
                  Ra(e, 'definition', e => {
                    const n = Ua(e.identifier);
                    n && !Ia.call(t, n) && (t[n] = e);
                  }),
                  function (e) {
                    const n = Ua(e);
                    return n && Ia.call(t, n) ? t[n] : null;
                  }
                );
              })(e)),
              (s.footnoteById = o),
              (s.footnoteOrder = []),
              (s.footnoteCounts = {}),
              (s.patch = Ka),
              (s.applyData = Qa),
              (s.one = function (e, t) {
                return Ya(s, e, t);
              }),
              (s.all = function (e) {
                return Ja(s, e);
              }),
              (s.wrap = Xa),
              (s.augment = i),
              Ra(e, 'footnoteDefinition', e => {
                const t = String(e.identifier).toUpperCase();
                Va.call(o, t) || (o[t] = e);
              }),
              s
            );
            function i(e, t) {
              if (e && 'data' in e && e.data) {
                const n = e.data;
                n.hName &&
                  ('element' !== t.type &&
                    (t = { type: 'element', tagName: '', properties: {}, children: [] }),
                  (t.tagName = n.hName)),
                  'element' === t.type &&
                    n.hProperties &&
                    (t.properties = { ...t.properties, ...n.hProperties }),
                  'children' in t && t.children && n.hChildren && (t.children = n.hChildren);
              }
              if (e) {
                const n = 'type' in e ? e : { position: e };
                (function (e) {
                  return !(
                    e &&
                    e.position &&
                    e.position.start &&
                    e.position.start.line &&
                    e.position.start.column &&
                    e.position.end &&
                    e.position.end.line &&
                    e.position.end.column
                  );
                })(n) || (t.position = { start: Da(n), end: La(n) });
              }
              return t;
            }
            function s(e, t, n, r) {
              return (
                Array.isArray(n) && ((r = n), (n = {})),
                i(e, { type: 'element', tagName: t, properties: n || {}, children: r || [] })
              );
            }
          })(e, t),
          r = n.one(e, null),
          o = (function (e) {
            const t = [];
            let n = -1;
            for (; ++n < e.footnoteOrder.length; ) {
              const r = e.footnoteById[e.footnoteOrder[n]];
              if (!r) continue;
              const o = e.all(r),
                i = String(r.identifier).toUpperCase(),
                s = Ca(i.toLowerCase());
              let a = 0;
              const l = [];
              for (; ++a <= e.footnoteCounts[i]; ) {
                const t = {
                  type: 'element',
                  tagName: 'a',
                  properties: {
                    href: '#' + e.clobberPrefix + 'fnref-' + s + (a > 1 ? '-' + a : ''),
                    dataFootnoteBackref: !0,
                    className: ['data-footnote-backref'],
                    ariaLabel: e.footnoteBackLabel,
                  },
                  children: [{ type: 'text', value: '↩' }],
                };
                a > 1 &&
                  t.children.push({
                    type: 'element',
                    tagName: 'sup',
                    children: [{ type: 'text', value: String(a) }],
                  }),
                  l.length > 0 && l.push({ type: 'text', value: ' ' }),
                  l.push(t);
              }
              const u = o[o.length - 1];
              if (u && 'element' === u.type && 'p' === u.tagName) {
                const e = u.children[u.children.length - 1];
                e && 'text' === e.type
                  ? (e.value += ' ')
                  : u.children.push({ type: 'text', value: ' ' }),
                  u.children.push(...l);
              } else o.push(...l);
              const c = {
                type: 'element',
                tagName: 'li',
                properties: { id: e.clobberPrefix + 'fn-' + s },
                children: e.wrap(o, !0),
              };
              e.patch(r, c), t.push(c);
            }
            if (0 !== t.length)
              return {
                type: 'element',
                tagName: 'section',
                properties: { dataFootnotes: !0, className: ['footnotes'] },
                children: [
                  {
                    type: 'element',
                    tagName: e.footnoteLabelTagName,
                    properties: {
                      ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                      id: 'footnote-label',
                    },
                    children: [{ type: 'text', value: e.footnoteLabel }],
                  },
                  { type: 'text', value: '\n' },
                  { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(t, !0) },
                  { type: 'text', value: '\n' },
                ],
              };
          })(n);
        return (
          o && r.children.push({ type: 'text', value: '\n' }, o),
          Array.isArray(r) ? { type: 'root', children: r } : r
        );
      }
      const el = function (e, t) {
        return e && 'run' in e
          ? (function (e, t) {
              return (n, r, o) => {
                e.run(Za(n, t), r, e => {
                  o(e);
                });
              };
            })(e, t)
          : (function (e) {
              return t => Za(t, e);
            })(e || t);
      };
      var tl = o(697);
      class nl {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function rl(e, t) {
        const n = {},
          r = {};
        let o = -1;
        for (; ++o < e.length; ) Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
        return new nl(n, r, t);
      }
      function ol(e) {
        return e.toLowerCase();
      }
      (nl.prototype.property = {}), (nl.prototype.normal = {}), (nl.prototype.space = null);
      class il {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (il.prototype.space = null),
        (il.prototype.boolean = !1),
        (il.prototype.booleanish = !1),
        (il.prototype.overloadedBoolean = !1),
        (il.prototype.number = !1),
        (il.prototype.commaSeparated = !1),
        (il.prototype.spaceSeparated = !1),
        (il.prototype.commaOrSpaceSeparated = !1),
        (il.prototype.mustUseProperty = !1),
        (il.prototype.defined = !1);
      let sl = 0;
      const al = hl(),
        ll = hl(),
        ul = hl(),
        cl = hl(),
        pl = hl(),
        dl = hl(),
        fl = hl();
      function hl() {
        return 2 ** ++sl;
      }
      const ml = Object.keys(t);
      class gl extends il {
        constructor(e, n, r, o) {
          let i = -1;
          if ((super(e, n), yl(this, 'space', o), 'number' == typeof r))
            for (; ++i < ml.length; ) {
              const e = ml[i];
              yl(this, ml[i], (r & t[e]) === t[e]);
            }
        }
      }
      function yl(e, t, n) {
        n && (e[t] = n);
      }
      gl.prototype.defined = !0;
      const vl = {}.hasOwnProperty;
      function bl(e) {
        const t = {},
          n = {};
        let r;
        for (r in e.properties)
          if (vl.call(e.properties, r)) {
            const o = e.properties[r],
              i = new gl(r, e.transform(e.attributes || {}, r), o, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0),
              (t[r] = i),
              (n[ol(r)] = r),
              (n[ol(i.attribute)] = r);
          }
        return new nl(t, n, e.space);
      }
      const wl = bl({
          space: 'xlink',
          transform: (e, t) => 'xlink:' + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        kl = bl({
          space: 'xml',
          transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function El(e, t) {
        return t in e ? e[t] : t;
      }
      function Tl(e, t) {
        return El(e, t.toLowerCase());
      }
      const Sl = bl({
          space: 'xmlns',
          attributes: { xmlnsxlink: 'xmlns:xlink' },
          transform: Tl,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        _l = bl({
          transform: (e, t) => ('role' === t ? t : 'aria-' + t.slice(4).toLowerCase()),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: ll,
            ariaAutoComplete: null,
            ariaBusy: ll,
            ariaChecked: ll,
            ariaColCount: cl,
            ariaColIndex: cl,
            ariaColSpan: cl,
            ariaControls: pl,
            ariaCurrent: null,
            ariaDescribedBy: pl,
            ariaDetails: null,
            ariaDisabled: ll,
            ariaDropEffect: pl,
            ariaErrorMessage: null,
            ariaExpanded: ll,
            ariaFlowTo: pl,
            ariaGrabbed: ll,
            ariaHasPopup: null,
            ariaHidden: ll,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: pl,
            ariaLevel: cl,
            ariaLive: null,
            ariaModal: ll,
            ariaMultiLine: ll,
            ariaMultiSelectable: ll,
            ariaOrientation: null,
            ariaOwns: pl,
            ariaPlaceholder: null,
            ariaPosInSet: cl,
            ariaPressed: ll,
            ariaReadOnly: ll,
            ariaRelevant: null,
            ariaRequired: ll,
            ariaRoleDescription: pl,
            ariaRowCount: cl,
            ariaRowIndex: cl,
            ariaRowSpan: cl,
            ariaSelected: ll,
            ariaSetSize: cl,
            ariaSort: null,
            ariaValueMax: cl,
            ariaValueMin: cl,
            ariaValueNow: cl,
            ariaValueText: null,
            role: null,
          },
        }),
        xl = bl({
          space: 'html',
          attributes: {
            acceptcharset: 'accept-charset',
            classname: 'class',
            htmlfor: 'for',
            httpequiv: 'http-equiv',
          },
          transform: Tl,
          mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
          properties: {
            abbr: null,
            accept: dl,
            acceptCharset: pl,
            accessKey: pl,
            action: null,
            allow: null,
            allowFullScreen: al,
            allowPaymentRequest: al,
            allowUserMedia: al,
            alt: null,
            as: null,
            async: al,
            autoCapitalize: null,
            autoComplete: pl,
            autoFocus: al,
            autoPlay: al,
            capture: al,
            charSet: null,
            checked: al,
            cite: null,
            className: pl,
            cols: cl,
            colSpan: null,
            content: null,
            contentEditable: ll,
            controls: al,
            controlsList: pl,
            coords: cl | dl,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: al,
            defer: al,
            dir: null,
            dirName: null,
            disabled: al,
            download: ul,
            draggable: ll,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: al,
            formTarget: null,
            headers: pl,
            height: cl,
            hidden: al,
            high: cl,
            href: null,
            hrefLang: null,
            htmlFor: pl,
            httpEquiv: pl,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: al,
            itemId: null,
            itemProp: pl,
            itemRef: pl,
            itemScope: al,
            itemType: pl,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: al,
            low: cl,
            manifest: null,
            max: null,
            maxLength: cl,
            media: null,
            method: null,
            min: null,
            minLength: cl,
            multiple: al,
            muted: al,
            name: null,
            nonce: null,
            noModule: al,
            noValidate: al,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: al,
            optimum: cl,
            pattern: null,
            ping: pl,
            placeholder: null,
            playsInline: al,
            poster: null,
            preload: null,
            readOnly: al,
            referrerPolicy: null,
            rel: pl,
            required: al,
            reversed: al,
            rows: cl,
            rowSpan: cl,
            sandbox: pl,
            scope: null,
            scoped: al,
            seamless: al,
            selected: al,
            shape: null,
            size: cl,
            sizes: null,
            slot: null,
            span: cl,
            spellCheck: ll,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: cl,
            step: null,
            style: null,
            tabIndex: cl,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: al,
            useMap: null,
            value: ll,
            width: cl,
            wrap: null,
            align: null,
            aLink: null,
            archive: pl,
            axis: null,
            background: null,
            bgColor: null,
            border: cl,
            borderColor: null,
            bottomMargin: cl,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: al,
            declare: al,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: cl,
            leftMargin: cl,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: cl,
            marginWidth: cl,
            noResize: al,
            noHref: al,
            noShade: al,
            noWrap: al,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: cl,
            rules: null,
            scheme: null,
            scrolling: ll,
            standby: null,
            summary: null,
            text: null,
            topMargin: cl,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: cl,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: al,
            disableRemotePlayback: al,
            prefix: null,
            property: null,
            results: cl,
            security: null,
            unselectable: null,
          },
        }),
        Pl = bl({
          space: 'svg',
          attributes: {
            accentHeight: 'accent-height',
            alignmentBaseline: 'alignment-baseline',
            arabicForm: 'arabic-form',
            baselineShift: 'baseline-shift',
            capHeight: 'cap-height',
            className: 'class',
            clipPath: 'clip-path',
            clipRule: 'clip-rule',
            colorInterpolation: 'color-interpolation',
            colorInterpolationFilters: 'color-interpolation-filters',
            colorProfile: 'color-profile',
            colorRendering: 'color-rendering',
            crossOrigin: 'crossorigin',
            dataType: 'datatype',
            dominantBaseline: 'dominant-baseline',
            enableBackground: 'enable-background',
            fillOpacity: 'fill-opacity',
            fillRule: 'fill-rule',
            floodColor: 'flood-color',
            floodOpacity: 'flood-opacity',
            fontFamily: 'font-family',
            fontSize: 'font-size',
            fontSizeAdjust: 'font-size-adjust',
            fontStretch: 'font-stretch',
            fontStyle: 'font-style',
            fontVariant: 'font-variant',
            fontWeight: 'font-weight',
            glyphName: 'glyph-name',
            glyphOrientationHorizontal: 'glyph-orientation-horizontal',
            glyphOrientationVertical: 'glyph-orientation-vertical',
            hrefLang: 'hreflang',
            horizAdvX: 'horiz-adv-x',
            horizOriginX: 'horiz-origin-x',
            horizOriginY: 'horiz-origin-y',
            imageRendering: 'image-rendering',
            letterSpacing: 'letter-spacing',
            lightingColor: 'lighting-color',
            markerEnd: 'marker-end',
            markerMid: 'marker-mid',
            markerStart: 'marker-start',
            navDown: 'nav-down',
            navDownLeft: 'nav-down-left',
            navDownRight: 'nav-down-right',
            navLeft: 'nav-left',
            navNext: 'nav-next',
            navPrev: 'nav-prev',
            navRight: 'nav-right',
            navUp: 'nav-up',
            navUpLeft: 'nav-up-left',
            navUpRight: 'nav-up-right',
            onAbort: 'onabort',
            onActivate: 'onactivate',
            onAfterPrint: 'onafterprint',
            onBeforePrint: 'onbeforeprint',
            onBegin: 'onbegin',
            onCancel: 'oncancel',
            onCanPlay: 'oncanplay',
            onCanPlayThrough: 'oncanplaythrough',
            onChange: 'onchange',
            onClick: 'onclick',
            onClose: 'onclose',
            onCopy: 'oncopy',
            onCueChange: 'oncuechange',
            onCut: 'oncut',
            onDblClick: 'ondblclick',
            onDrag: 'ondrag',
            onDragEnd: 'ondragend',
            onDragEnter: 'ondragenter',
            onDragExit: 'ondragexit',
            onDragLeave: 'ondragleave',
            onDragOver: 'ondragover',
            onDragStart: 'ondragstart',
            onDrop: 'ondrop',
            onDurationChange: 'ondurationchange',
            onEmptied: 'onemptied',
            onEnd: 'onend',
            onEnded: 'onended',
            onError: 'onerror',
            onFocus: 'onfocus',
            onFocusIn: 'onfocusin',
            onFocusOut: 'onfocusout',
            onHashChange: 'onhashchange',
            onInput: 'oninput',
            onInvalid: 'oninvalid',
            onKeyDown: 'onkeydown',
            onKeyPress: 'onkeypress',
            onKeyUp: 'onkeyup',
            onLoad: 'onload',
            onLoadedData: 'onloadeddata',
            onLoadedMetadata: 'onloadedmetadata',
            onLoadStart: 'onloadstart',
            onMessage: 'onmessage',
            onMouseDown: 'onmousedown',
            onMouseEnter: 'onmouseenter',
            onMouseLeave: 'onmouseleave',
            onMouseMove: 'onmousemove',
            onMouseOut: 'onmouseout',
            onMouseOver: 'onmouseover',
            onMouseUp: 'onmouseup',
            onMouseWheel: 'onmousewheel',
            onOffline: 'onoffline',
            onOnline: 'ononline',
            onPageHide: 'onpagehide',
            onPageShow: 'onpageshow',
            onPaste: 'onpaste',
            onPause: 'onpause',
            onPlay: 'onplay',
            onPlaying: 'onplaying',
            onPopState: 'onpopstate',
            onProgress: 'onprogress',
            onRateChange: 'onratechange',
            onRepeat: 'onrepeat',
            onReset: 'onreset',
            onResize: 'onresize',
            onScroll: 'onscroll',
            onSeeked: 'onseeked',
            onSeeking: 'onseeking',
            onSelect: 'onselect',
            onShow: 'onshow',
            onStalled: 'onstalled',
            onStorage: 'onstorage',
            onSubmit: 'onsubmit',
            onSuspend: 'onsuspend',
            onTimeUpdate: 'ontimeupdate',
            onToggle: 'ontoggle',
            onUnload: 'onunload',
            onVolumeChange: 'onvolumechange',
            onWaiting: 'onwaiting',
            onZoom: 'onzoom',
            overlinePosition: 'overline-position',
            overlineThickness: 'overline-thickness',
            paintOrder: 'paint-order',
            panose1: 'panose-1',
            pointerEvents: 'pointer-events',
            referrerPolicy: 'referrerpolicy',
            renderingIntent: 'rendering-intent',
            shapeRendering: 'shape-rendering',
            stopColor: 'stop-color',
            stopOpacity: 'stop-opacity',
            strikethroughPosition: 'strikethrough-position',
            strikethroughThickness: 'strikethrough-thickness',
            strokeDashArray: 'stroke-dasharray',
            strokeDashOffset: 'stroke-dashoffset',
            strokeLineCap: 'stroke-linecap',
            strokeLineJoin: 'stroke-linejoin',
            strokeMiterLimit: 'stroke-miterlimit',
            strokeOpacity: 'stroke-opacity',
            strokeWidth: 'stroke-width',
            tabIndex: 'tabindex',
            textAnchor: 'text-anchor',
            textDecoration: 'text-decoration',
            textRendering: 'text-rendering',
            typeOf: 'typeof',
            underlinePosition: 'underline-position',
            underlineThickness: 'underline-thickness',
            unicodeBidi: 'unicode-bidi',
            unicodeRange: 'unicode-range',
            unitsPerEm: 'units-per-em',
            vAlphabetic: 'v-alphabetic',
            vHanging: 'v-hanging',
            vIdeographic: 'v-ideographic',
            vMathematical: 'v-mathematical',
            vectorEffect: 'vector-effect',
            vertAdvY: 'vert-adv-y',
            vertOriginX: 'vert-origin-x',
            vertOriginY: 'vert-origin-y',
            wordSpacing: 'word-spacing',
            writingMode: 'writing-mode',
            xHeight: 'x-height',
            playbackOrder: 'playbackorder',
            timelineBegin: 'timelinebegin',
          },
          transform: El,
          properties: {
            about: fl,
            accentHeight: cl,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: cl,
            amplitude: cl,
            arabicForm: null,
            ascent: cl,
            attributeName: null,
            attributeType: null,
            azimuth: cl,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: cl,
            by: null,
            calcMode: null,
            capHeight: cl,
            className: pl,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: cl,
            diffuseConstant: cl,
            direction: null,
            display: null,
            dur: null,
            divisor: cl,
            dominantBaseline: null,
            download: al,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: cl,
            enableBackground: null,
            end: null,
            event: null,
            exponent: cl,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: cl,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: dl,
            g2: dl,
            glyphName: dl,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: cl,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: cl,
            horizOriginX: cl,
            horizOriginY: cl,
            id: null,
            ideographic: cl,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: cl,
            k: cl,
            k1: cl,
            k2: cl,
            k3: cl,
            k4: cl,
            kernelMatrix: fl,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: cl,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: cl,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: cl,
            overlineThickness: cl,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: cl,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: pl,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: cl,
            pointsAtY: cl,
            pointsAtZ: cl,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: fl,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: fl,
            rev: fl,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: fl,
            requiredFeatures: fl,
            requiredFonts: fl,
            requiredFormats: fl,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: cl,
            specularExponent: cl,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: cl,
            strikethroughThickness: cl,
            string: null,
            stroke: null,
            strokeDashArray: fl,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: cl,
            strokeOpacity: cl,
            strokeWidth: null,
            style: null,
            surfaceScale: cl,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: fl,
            tabIndex: cl,
            tableValues: null,
            target: null,
            targetX: cl,
            targetY: cl,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: fl,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: cl,
            underlineThickness: cl,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: cl,
            values: null,
            vAlphabetic: cl,
            vMathematical: cl,
            vectorEffect: null,
            vHanging: cl,
            vIdeographic: cl,
            version: null,
            vertAdvY: cl,
            vertOriginX: cl,
            vertOriginY: cl,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: cl,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        Cl = rl([kl, wl, Sl, _l, xl], 'html'),
        Ol = rl([kl, wl, Sl, _l, Pl], 'svg');
      function Al(e) {
        if (e.allowedElements && e.disallowedElements)
          throw new TypeError(
            'Only one of `allowedElements` and `disallowedElements` should be defined',
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return t => {
            Ra(t, 'element', (t, n, r) => {
              const o = r;
              let i;
              if (
                (e.allowedElements
                  ? (i = !e.allowedElements.includes(t.tagName))
                  : e.disallowedElements && (i = e.disallowedElements.includes(t.tagName)),
                !i && e.allowElement && 'number' == typeof n && (i = !e.allowElement(t, n, o)),
                i && 'number' == typeof n)
              )
                return (
                  e.unwrapDisallowed && t.children
                    ? o.children.splice(n, 1, ...t.children)
                    : o.children.splice(n, 1),
                  n
                );
            });
          };
      }
      var Fl = o(143);
      function Rl(e) {
        const t = e && 'object' == typeof e && 'text' === e.type ? e.value || '' : e;
        return 'string' == typeof t && '' === t.replace(/[ \t\n\f\r]/g, '');
      }
      const Dl = /^data[-\w.:]+$/i,
        Ll = /-[a-z]/g,
        Gl = /[A-Z]/g;
      function Il(e) {
        return '-' + e.toLowerCase();
      }
      function Ul(e) {
        return e.charAt(1).toUpperCase();
      }
      const zl = {
          classId: 'classID',
          dataType: 'datatype',
          itemId: 'itemID',
          strokeDashArray: 'strokeDasharray',
          strokeDashOffset: 'strokeDashoffset',
          strokeLineCap: 'strokeLinecap',
          strokeLineJoin: 'strokeLinejoin',
          strokeMiterLimit: 'strokeMiterlimit',
          typeOf: 'typeof',
          xLinkActuate: 'xlinkActuate',
          xLinkArcRole: 'xlinkArcrole',
          xLinkHref: 'xlinkHref',
          xLinkRole: 'xlinkRole',
          xLinkShow: 'xlinkShow',
          xLinkTitle: 'xlinkTitle',
          xLinkType: 'xlinkType',
          xmlnsXLink: 'xmlnsXlink',
        },
        jl = o(848),
        Nl = ['http', 'https', 'mailto', 'tel'];
      function Ml(e) {
        const t = (e || '').trim(),
          n = t.charAt(0);
        if ('#' === n || '/' === n) return t;
        const r = t.indexOf(':');
        if (-1 === r) return t;
        let o = -1;
        for (; ++o < Nl.length; ) {
          const e = Nl[o];
          if (r === e.length && t.slice(0, e.length).toLowerCase() === e) return t;
        }
        return (
          (o = t.indexOf('?')),
          -1 !== o && r > o
            ? t
            : ((o = t.indexOf('#')), -1 !== o && r > o ? t : 'javascript:void(0)')
        );
      }
      const Bl = {}.hasOwnProperty,
        $l = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);
      function ql(e, t) {
        const n = [];
        let r,
          o = -1;
        for (; ++o < t.children.length; )
          (r = t.children[o]),
            'element' === r.type
              ? n.push(Hl(e, r, o, t))
              : 'text' === r.type
              ? ('element' === t.type && $l.has(t.tagName) && Rl(r)) || n.push(r.value)
              : 'raw' !== r.type || e.options.skipHtml || n.push(r.value);
        return n;
      }
      function Hl(e, t, n, o) {
        const i = e.options,
          s = void 0 === i.transformLinkUri ? Ml : i.transformLinkUri,
          a = e.schema,
          l = t.tagName,
          u = {};
        let c,
          p = a;
        if (('html' === a.space && 'svg' === l && ((p = Ol), (e.schema = p)), t.properties))
          for (c in t.properties) Bl.call(t.properties, c) && Vl(u, c, t.properties[c], e);
        ('ol' !== l && 'ul' !== l) || e.listDepth++;
        const d = ql(e, t);
        ('ol' !== l && 'ul' !== l) || e.listDepth--, (e.schema = a);
        const f = t.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          },
          h = i.components && Bl.call(i.components, l) ? i.components[l] : l,
          m = 'string' == typeof h || h === r.Fragment;
        if (!Fl.isValidElementType(h))
          throw new TypeError(`Component for name \`${l}\` not defined or is not renderable`);
        if (
          ((u.key = n),
          'a' === l &&
            i.linkTarget &&
            (u.target =
              'function' == typeof i.linkTarget
                ? i.linkTarget(
                    String(u.href || ''),
                    t.children,
                    'string' == typeof u.title ? u.title : null,
                  )
                : i.linkTarget),
          'a' === l &&
            s &&
            (u.href = s(
              String(u.href || ''),
              t.children,
              'string' == typeof u.title ? u.title : null,
            )),
          m || 'code' !== l || 'element' !== o.type || 'pre' === o.tagName || (u.inline = !0),
          m ||
            ('h1' !== l && 'h2' !== l && 'h3' !== l && 'h4' !== l && 'h5' !== l && 'h6' !== l) ||
            (u.level = Number.parseInt(l.charAt(1), 10)),
          'img' === l &&
            i.transformImageUri &&
            (u.src = i.transformImageUri(
              String(u.src || ''),
              String(u.alt || ''),
              'string' == typeof u.title ? u.title : null,
            )),
          !m && 'li' === l && 'element' === o.type)
        ) {
          const e = (function (e) {
            let t = -1;
            for (; ++t < e.children.length; ) {
              const n = e.children[t];
              if ('element' === n.type && 'input' === n.tagName) return n;
            }
            return null;
          })(t);
          (u.checked = e && e.properties ? Boolean(e.properties.checked) : null),
            (u.index = Wl(o, t)),
            (u.ordered = 'ol' === o.tagName);
        }
        var g;
        return (
          m || ('ol' !== l && 'ul' !== l) || ((u.ordered = 'ol' === l), (u.depth = e.listDepth)),
          ('td' !== l && 'th' !== l) ||
            (u.align && (u.style || (u.style = {}), (u.style.textAlign = u.align), delete u.align),
            m || (u.isHeader = 'th' === l)),
          m || 'tr' !== l || 'element' !== o.type || (u.isHeader = Boolean('thead' === o.tagName)),
          i.sourcePos &&
            (u['data-sourcepos'] = [
              (g = f).start.line,
              ':',
              g.start.column,
              '-',
              g.end.line,
              ':',
              g.end.column,
            ]
              .map(String)
              .join('')),
          !m && i.rawSourcePos && (u.sourcePosition = t.position),
          !m && i.includeElementIndex && ((u.index = Wl(o, t)), (u.siblingCount = Wl(o))),
          m || (u.node = t),
          d.length > 0 ? r.createElement(h, u, d) : r.createElement(h, u)
        );
      }
      function Wl(e, t) {
        let n = -1,
          r = 0;
        for (; ++n < e.children.length && e.children[n] !== t; )
          'element' === e.children[n].type && r++;
        return r;
      }
      function Vl(e, t, n, r) {
        const o = (function (e, t) {
          const n = ol(t);
          let r = t,
            o = il;
          if (n in e.normal) return e.property[e.normal[n]];
          if (n.length > 4 && 'data' === n.slice(0, 4) && Dl.test(t)) {
            if ('-' === t.charAt(4)) {
              const e = t.slice(5).replace(Ll, Ul);
              r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
            } else {
              const e = t.slice(4);
              if (!Ll.test(e)) {
                let n = e.replace(Gl, Il);
                '-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n);
              }
            }
            o = gl;
          }
          return new o(r, t);
        })(r.schema, t);
        let i = n;
        null != i &&
          i == i &&
          (Array.isArray(i) &&
            (i = o.commaSeparated
              ? (function (e, t) {
                  const n = {};
                  return ('' === e[e.length - 1] ? [...e, ''] : e)
                    .join((n.padRight ? ' ' : '') + ',' + (!1 === n.padLeft ? '' : ' '))
                    .trim();
                })(i)
              : i.join(' ').trim()),
          'style' === o.property &&
            'string' == typeof i &&
            (i = (function (e) {
              const t = {};
              try {
                jl(e, function (e, n) {
                  const r = '-ms-' === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                  t[r.replace(/-([a-z])/g, Kl)] = n;
                });
              } catch {}
              return t;
            })(i)),
          o.space && o.property
            ? (e[Bl.call(zl, o.property) ? zl[o.property] : o.property] = i)
            : o.attribute && (e[o.attribute] = i));
      }
      function Kl(e, t) {
        return t.toUpperCase();
      }
      const Ql = {}.hasOwnProperty,
        Yl = {
          plugins: { to: 'remarkPlugins', id: 'change-plugins-to-remarkplugins' },
          renderers: { to: 'components', id: 'change-renderers-to-components' },
          astPlugins: { id: 'remove-buggy-html-in-markdown-parser' },
          allowDangerousHtml: { id: 'remove-buggy-html-in-markdown-parser' },
          escapeHtml: { id: 'remove-buggy-html-in-markdown-parser' },
          source: { to: 'children', id: 'change-source-to-children' },
          allowNode: {
            to: 'allowElement',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
          },
          allowedTypes: {
            to: 'allowedElements',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
          },
          disallowedTypes: {
            to: 'disallowedElements',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
          },
          includeNodeIndex: {
            to: 'includeElementIndex',
            id: 'change-includenodeindex-to-includeelementindex',
          },
        };
      function Jl(e) {
        for (const t in Yl)
          if (Ql.call(Yl, t) && Ql.call(e, t)) {
            const e = Yl[t];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : 'remove'
              } \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`,
            ),
              delete Yl[t];
          }
        const t = Pi()
            .use(Pa)
            .use(e.remarkPlugins || [])
            .use(el, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(Al, e),
          n = new wi();
        'string' == typeof e.children
          ? (n.value = e.children)
          : void 0 !== e.children &&
            null !== e.children &&
            console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`,
            );
        const o = t.runSync(t.parse(n), n);
        if ('root' !== o.type) throw new TypeError('Expected a `root` node');
        let i = r.createElement(r.Fragment, {}, ql({ options: e, schema: Cl, listDepth: 0 }, o));
        return e.className && (i = r.createElement('div', { className: e.className }, i)), i;
      }
      Jl.propTypes = {
        children: tl.string,
        className: tl.string,
        allowElement: tl.func,
        allowedElements: tl.arrayOf(tl.string),
        disallowedElements: tl.arrayOf(tl.string),
        unwrapDisallowed: tl.bool,
        remarkPlugins: tl.arrayOf(
          tl.oneOfType([
            tl.object,
            tl.func,
            tl.arrayOf(tl.oneOfType([tl.bool, tl.string, tl.object, tl.func, tl.arrayOf(tl.any)])),
          ]),
        ),
        rehypePlugins: tl.arrayOf(
          tl.oneOfType([
            tl.object,
            tl.func,
            tl.arrayOf(tl.oneOfType([tl.bool, tl.string, tl.object, tl.func, tl.arrayOf(tl.any)])),
          ]),
        ),
        sourcePos: tl.bool,
        rawSourcePos: tl.bool,
        skipHtml: tl.bool,
        includeElementIndex: tl.bool,
        transformLinkUri: tl.oneOfType([tl.func, tl.bool]),
        linkTarget: tl.oneOfType([tl.func, tl.string]),
        transformImageUri: tl.func,
        components: tl.object,
      };
      const Xl = ({ content: e }) => (0, go.jsx)(Jl, { children: e }),
        Zl = ({ body: e }) => (e ? (0, go.jsx)(Xl, { content: e }) : null),
        eu = () => {
          const { id: e } = (function () {
              let { matches: e } = r.useContext(ie),
                t = e[e.length - 1];
              return t ? t.params : {};
            })(),
            { loadIssueById: t, issue: n, setIssue: o } = Eo();
          return (
            (0, r.useEffect)(() => {
              (async () => {
                const n = await t(Number(e));
                o(n);
              })();
            }, []),
            n
              ? (0, go.jsxs)(tu, {
                  children: [
                    (0, go.jsxs)('h1', { style: { margin: 0 }, children: ['#', n.number] }),
                    (0, go.jsx)('h2', { children: n.title }),
                    (0, go.jsx)(Xo, {
                      author: n.user,
                      created_at: n.created_at,
                      commentCount: n.comments,
                    }),
                    n.body && (0, go.jsx)(Zl, { body: n.body }),
                  ],
                })
              : null
          );
        },
        tu = fr.div`
  padding: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`,
        nu = () =>
          (0, go.jsxs)(Ee, {
            children: [
              (0, go.jsx)(we, { path: '/', Component: Bo }),
              (0, go.jsx)(we, { path: '/issue/:id', Component: eu }),
              (0, go.jsx)(we, { path: '*', Component: Jo }),
            ],
          }),
        ru = () => {
          const { error: e, isError: t, loading: n } = Eo();
          return (0, go.jsx)(Pe, {
            children: (0, go.jsx)(wo, {
              children: t
                ? (0, go.jsx)(Jo, { message: e?.message, code: e?.code })
                : (0, go.jsxs)(go.Fragment, {
                    children: [n && (0, go.jsx)(jo, {}), (0, go.jsx)(nu, {})],
                  }),
            }),
          });
        };
      s.createRoot(document.getElementById('root')).render((0, go.jsx)(ru, {}));
    })();
})();
