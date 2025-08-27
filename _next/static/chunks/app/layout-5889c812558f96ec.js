(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    4100: function (t, e, n) {
      Promise.resolve().then(n.bind(n, 6219));
    },
    6219: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return s;
          },
        });
      var o = n(7437);
      n(2265);
      var r = n(5433);
      let i =
          "https://framerusercontent.com/images/mQOnxirqnohCjecjMtYl558Uw.png",
        a = "Raydia: The Ultimate Super App for Web3 Success",
        c =
          "Revolutionize your Web3 project with Raydia, the automated solution for KOL management, community growth, and market launches on Telegram. Simplify finding KOLs, building communities, and ensuring a successful launch effortlessly.",
        l = [
          { name: "theme-color", content: "#000000" },
          { name: '"mobile-web-app-capable', content: "yes" },
          { name: "apple-mobile-web-app-capable", content: "yes" },
          { name: "description", content: c },
          { name: "twitter:title", content: a },
          { name: "twitter:description", content: c },
          { property: "twitter:image", content: i },
          { property: "og:title", content: a },
          { property: "og:description", content: c },
          { property: "og:image", content: i },
          { name: "twitter:image:alt", content: a },
          { property: "og:url", content: "https://starlight.foundation/" },
          { name: "DC.title", content: a },
          { name: "DC.creator", content: "plan9" },
        ];
      function s(t) {
        let { children: e } = t;
        return (0, o.jsxs)("html", {
          lang: "en",
          children: [
            (0, o.jsxs)("head", {
              children: [
                (0, o.jsx)("title", { children: a }),
                l.map((t, e) =>
                  t.name
                    ? (0, o.jsx)(
                        "meta",
                        { name: t.name, content: t.content },
                        e
                      )
                    : (0, o.jsx)(
                        "meta",
                        { property: t.property, content: t.content },
                        e
                      )
                ),
              ],
            }),
            (0, o.jsx)("body", {
              "data-barba": "container",
              className:
                "font-mersad antialiased text-white bg-fon bg-blend-multiply bg-[#151618]",
              children: (0, o.jsx)(r.I, { children: e }),
            }),
          ],
        });
      }
      n(5215), n(2778);
    },
    5433: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return i;
        },
        I: function () {
          return a;
        },
      });
      var o = n(7437),
        r = n(2265);
      let i = (0, r.createContext)({
          scrollPosition: 0,
          setScrollPosition: () => {},
        }),
        a = (t) => {
          let { children: e } = t,
            [n, a] = (0, r.useState)(0);
          return (
            (0, r.useEffect)(() => {
              let t = () => {
                a(window.scrollY);
              };
              return (
                window.addEventListener("scroll", t),
                () => {
                  window.removeEventListener("scroll", t);
                }
              );
            }, []),
            (0, o.jsx)(i.Provider, {
              value: { scrollPosition: n, setScrollPosition: a },
              children: e,
            })
          );
        };
    },
    2778: function () {},
    5215: function () {},
  },
  function (t) {
    t.O(0, [920, 971, 117, 744], function () {
      return t((t.s = 4100));
    }),
      (_N_E = t.O());
  },
]);
