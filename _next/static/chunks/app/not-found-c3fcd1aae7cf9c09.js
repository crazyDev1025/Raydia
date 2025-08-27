(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    7894: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 5292));
    },
    9376: function (e, n, t) {
      "use strict";
      var r = t(5475);
      t.o(r, "redirect") &&
        t.d(n, {
          redirect: function () {
            return r.redirect;
          },
        }),
        t.o(r, "usePathname") &&
          t.d(n, {
            usePathname: function () {
              return r.usePathname;
            },
          });
    },
    5292: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return i;
          },
        });
      var r = t(7437),
        u = t(9376),
        c = t(2265);
      function i() {
        return (
          (0, c.useEffect)(() => {
            (0, u.redirect)("/");
          }, []),
          (0, r.jsx)("div", {
            children: (0, r.jsx)("h2", { children: "Not Found" }),
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [971, 117, 744], function () {
      return e((e.s = 7894));
    }),
      (_N_E = e.O());
  },
]);
