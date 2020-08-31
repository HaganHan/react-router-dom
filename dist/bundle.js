(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('history'), require('path-to-regexp')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'history', 'path-to-regexp'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['react-router-dom'] = {}, global.React, global.history, global.pathToRegexp));
}(this, (function (exports, React, history, pathToRegexp) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var ContextBrowserRouter = React.createContext({});

  var BrowserRouter = function (props) {
      var history$1 = history.createBrowserHistory();
      var Provider = ContextBrowserRouter.Provider;
      var _a = React.useState(history$1.location), location = _a[0], setLocation = _a[1];
      history$1.listen(function (history) {
          setLocation(history.location);
      });
      var match = {
          path: '/',
          url: '/',
          params: {},
          isExact: location.pathname === '/'
      };
      return (React__default['default'].createElement(Provider, { value: { history: history$1, location: location, match: match } }, props.children));
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function matchPath(pathname, option) {
      var path = option.path, _a = option.exact, exact = _a === void 0 ? false : _a, _b = option.strict, strict = _b === void 0 ? false : _b, _c = option.sensitive, sensitive = _c === void 0 ? false : _c;
      var keys = [];
      var regexp = pathToRegexp.pathToRegexp(path, keys, { end: exact, strict: strict, sensitive: sensitive });
      var match = regexp.exec(pathname);
      if (!match)
          return null;
      var url = match[0], queryValues = match.slice(1);
      var isExact = url === pathname;
      if (exact && !isExact)
          return null;
      return {
          path: path,
          url: url,
          isExact: isExact,
          params: keys.reduce(function (obj, query, index) {
              obj[query.name] = queryValues[index];
              return obj;
          }, {})
      };
  }

  var Route = function (props) {
      var exact = props.exact, path = props.path, component = props.component, render = props.render, children = props.children, strict = props.strict, sensitive = props.sensitive, computedMatch = props.computedMatch;
      var contextBrowserRouter = React.useContext(ContextBrowserRouter);
      var Provider = ContextBrowserRouter.Provider;
      var history = contextBrowserRouter.history;
      var location = props.location || contextBrowserRouter.location;
      var match = computedMatch || (path
          ? (matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }))
          : contextBrowserRouter.match);
      var newProps = { history: history, location: location, match: match };
      return (React__default['default'].createElement(Provider, { value: { history: history, location: location, match: match } }, match
          ? children
              ? typeof children === 'function'
                  ? children(newProps)
                  : children
              : component
                  ? React.createElement(component, __assign(__assign({}, newProps), { key: "" + Date.now() + Math.random() }))
                  : render
                      ? render(newProps)
                      : null
          : typeof children === 'function'
              ? children(newProps)
              : null));
  };

  var NavLink = function (props) {
      var contextBrowserRouter = React.useContext(ContextBrowserRouter);
      var history = contextBrowserRouter.history;
      function onClick(event) {
          event.preventDefault();
          if (history.location.pathname === props.to)
              return;
          history.push(props.to);
      }
      return (React__default['default'].createElement("a", { href: props.to, onClick: onClick }, props.children));
  };

  var Switch = function (props) {
      var contextBrowserRouter = React.useContext(ContextBrowserRouter);
      var location = props.location || contextBrowserRouter.location;
      var element;
      var match = null;
      React__default['default'].Children.forEach(props.children, function (child) {
          if (match === null && React__default['default'].isValidElement(child)) {
              element = child;
              var path = child.props.path || child.props.from;
              var _a = child.props, exact = _a.exact, strict = _a.strict, sensitive = _a.sensitive;
              match = path
                  ? matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive })
                  : contextBrowserRouter.match;
          }
      });
      return match
          ? React__default['default'].cloneElement(element, { location: location, computedMatch: match })
          : null;
  };

  exports.BrowserRouter = BrowserRouter;
  exports.NavLink = NavLink;
  exports.Route = Route;
  exports.Switch = Switch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
