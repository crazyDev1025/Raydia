(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [608],
  {
    5765: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 2697));
    },
    2697: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ea;
          },
        });
      var a = s(7437),
        n = s(2265),
        l = s(9376);
      let r = "HomeStarlight",
        i = "HomeRoadmap",
        o = "HomeProject",
        c = "HomeOurProjects",
        d = "HomeForStartups",
        x = "HomePartners",
        m = "HomeNewWay",
        p = "HomeInfluencersEarn",
        u = "HomeEarn",
        h = "HomeFAQ",
        f = [
          { key: r, name: "Ecosystem" },
          { key: c, name: "Projects" },
          { key: x, name: "Partners" },
          { key: d, name: "For Startups" },
        ],
        g = [
          { key: p, name: "Influencers" },
          { key: o, name: "Projects" },
          { key: i, name: "Roadmap" },
          { key: h, name: "FAQ" },
        ],
        j = [
          { key: r, name: "Ecosystem" },
          { key: x, name: "Partners" },
          { key: "", name: "Star of the day" },
          { key: "", name: "Ket features" },
        ];
      var b = s(5433);
      let w = (e) => {
        var t;
        e.preventDefault();
        let s =
            null === (t = e.currentTarget.getAttribute("href")) || void 0 === t
              ? void 0
              : t.slice(1),
          a = "".concat(s).replace("#", ""),
          n = s ? document.getElementById(a) : null;
        s && n && n.scrollIntoView({});
      };
      var v = s(3145);
      function y(e) {
        let { headerClasses: t, classes: s } = e;
        return (
          s ||
            (s =
              "rounded-full flex md:w-[30px] md:h-[30px] w-[54px] h-[54px] p-[15px] md:p-2 items-center justify-center "),
          t || (t = "flex gap-[12px] md:gap-[6px]"),
          (0, a.jsx)("nav", {
            className: t,
            children: [
              {
                href: "https://x.com/Raydia_defi",
                src: "/assets/x.svg",
                alt: "twitter",
              },
              {
                href: "https://t.me/Raydia_defi",
                src: "/assets/tg.svg",
                alt: "telegram",
              },
            ].map((e, t) =>
              (0, a.jsx)(
                "a",
                {
                  href: e.href,
                  className: "".concat(
                    s,
                    " bg-[#2C2C2C] hover:bg-[#202020] transition-all"
                  ),
                  target: "_blank",
                  rel: "noreferrer",
                  children: (0, a.jsx)(v.default, {
                    src: e.src,
                    alt: e.alt,
                    className: "flex w-full h-full",
                    width: 12,
                    height: 12,
                  }),
                },
                "social_".concat(t)
              )
            ),
          })
        );
      }
      function N() {
        let [e, t] = (0, n.useState)(!1),
          [s, r] = (0, n.useState)(!1),
          { scrollPosition: i } = (0, n.useContext)(b.$),
          o = (0, l.usePathname)(),
          c = (e) => {
            w(e), setTimeout(() => r(!1), 350);
          };
        return (
          (0, n.useEffect)(() => {
            if ("/" === o) {
              let e = setTimeout(() => {
                t(!0);
              }, 500);
              return () => clearTimeout(e);
            }
          }, [o]),
          (0, n.useEffect)(
            () => (
              s
                ? (document.body.classList.add("overflow-hidden"),
                  document.documentElement.classList.add("overflow-hidden"))
                : (document.body.classList.remove("overflow-hidden"),
                  document.documentElement.classList.remove("overflow-hidden")),
              () => {
                document.body.classList.remove("overflow-hidden"),
                  document.documentElement.classList.remove("overflow-hidden");
              }
            ),
            [s]
          ),
          (0, a.jsx)("header", {
            className:
              "flex justify-between items-center transition-all bg-header fixed top-0 w-full z-50 ".concat(
                e ? "opacity-100" : "opacity-0"
              ),
            children: (0, a.jsxs)("div", {
              className: "container-def p-4 flex justify-between items-center",
              children: [
                (0, a.jsx)("a", {
                  href: "/#",
                  className: "flex mr-auto z-10",
                  children: (0, a.jsx)(v.default, {
                    src: "/assets/logo.png",
                    alt: "Starlight",
                    height: 32,
                    width: 114,
                    className: "w-auto h-[34px]",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "\n						flex flex-col lg:flex-row items-center fixed left-0 top-0 backdrop-blur-lg pb-14 lg:pb-0 lg:backdrop-filter-none h-full w-full lg:w-auto lg:h-auto lg:relative lg:flex justify-between\n						".concat(
                      s ? "" : "hidden",
                      "\n					"
                    ),
                  children: [
                    (0, a.jsx)("nav", {
                      className:
                        "flex flex-col items-center lg:flex-row lg:space-x-4 mx-auto mt-[184px] lg:mt-0 lg:ml-auto lg:mr-5",
                      children: f.map((e, t) =>
                        (0, a.jsx)(
                          "a",
                          {
                            href: "/#".concat(e.key),
                            onClick: (e) => c(e),
                            className:
                              "text-[18px] leading-[22px] lg:leading-[15.4px] mb-5 lg:mb-0 transition-all hover:text-[#D2C7FF]",
                            children: e.name,
                          },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)(y, {
                      headerClasses: "flex gap-[12px]",
                      classes:
                        "rounded-full flex lg:w-[30px] lg:h-[30px] w-[64px] h-[64px] p-[18px] lg:p-2 items-center justify-center",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "space-x-4 lg:flex hidden ml-[20px]",
                  children: [
                    (0, a.jsx)("a", {
                      href: "https://app.raydiadefi.org",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "px-4 text-base py-2 btn-def font-semibold",
                      children: (0, a.jsx)("span", { children: "Open App" }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xe5713940c09b46a15899f12951f684dd54d760ab",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "px-4 text-base py-2 btn-def font-semibold",
                      children: (0, a.jsx)("span", {
                        children: "Buy $RAYDIA",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "relative lg:hidden flex justify-between items-center",
                  children: (0, a.jsxs)("button", {
                    className:
                      "relative w-8 h-8 flex flex-col justify-center items-center gap-1.5",
                    onClick: () => r(!s),
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "block w-full h-[2px] bg-white absolute left-0 transition-transform ".concat(
                            s ? "rotate-45 mt-0" : "-mt-[10px]"
                          ),
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "block w-full h-[2px] bg-white absolute left-0 transition-transform ".concat(
                            s ? "-rotate-45 mb-0" : "-mb-[10px]"
                          ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      function F() {
        let e = (0, n.useRef)(null),
          [t, s] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let a = new IntersectionObserver(
              (e) => {
                let [t] = e;
                s(t.intersectionRatio >= 0.25);
              },
              { threshold: [0.25] }
            );
            return a.observe(t), () => a.disconnect();
          }, []),
          (0, a.jsx)("footer", {
            ref: e,
            className:
              "container-def px-4 md:mt-[100px] mb-[64px] md:mb-[74px] ".concat(
                t ? "opacity-100" : "opacity-0",
                " transition-opacity duration-500"
              ),
            children: (0, a.jsxs)("div", {
              className:
                "flex-col flex md:flex-row justify-between md:max-w-1240 gap-[30px] md:gap-2 mx-auto bg-[#191919] px-5 md:px-[40px] py-[30px] rounded-[40px]",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "md:w-[25%] h-[120px] md:h-[140px] max-w-96 flex flex-col justify-between md:items-start mx-auto md:mx-0 items-center",
                  children: [
                    (0, a.jsx)(v.default, {
                      src: "/assets/logo.png",
                      alt: "Raydia",
                      height: 32,
                      width: 114,
                      className:
                        "inline-flex self-baseline mx-auto md:mx-0 w-auto h-[34px]",
                    }),
                    (0, a.jsx)(y, {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex justify-between w-full max-w-96 mx-auto md:mx-0 md:w-[40%] xl:w-full md:max-w-[434px] xl:mr-auto",
                  children: [
                    (0, a.jsx)("nav", {
                      className: "flex flex-col gap-5 min-w-[124px]",
                      children: j.map((e, t) =>
                        (0, a.jsx)(
                          "a",
                          {
                            href: "/#".concat(e.key),
                            onClick: w,
                            className: "text-sm font-normal leading-[20px]",
                            children: e.name,
                          },
                          "".concat(t, "_menu1")
                        )
                      ),
                    }),
                    (0, a.jsx)("nav", {
                      className: "flex flex-col gap-5 min-w-[124px]",
                      children: g.map((e, t) =>
                        (0, a.jsx)(
                          "a",
                          {
                            href: "/#".concat(e.key),
                            onClick: w,
                            className: "text-sm font-normal leading-[20px]",
                            children: e.name,
                          },
                          "".concat(t, "_menu2")
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var k = JSON.parse(
          '{"User":[{"question":"How to earn Rewards?","answer":"Go to Quest or Task pages in the app and participate in various activities to earn valuable rewards from us and other projects."},{"question":"How to participate in Deals?","answer":"For investments up to $100 you can just go to the Deal Page once the deal is open and buy any allocation within that limit. For investment larger than that you need to obtain an OG Pass or Token Tier."},{"question":"How to claim the Allocation?","answer":"Go to the deal page on the day of the first distribution (usually listing date) and press the Claim Button."},{"question":"How to Trade the tokens?","answer":"Token trading functionality within our app will be added soon. For now, you can claim your tokens and trade them on any available exchange for that token."},{"question":"How is the price calculated during the Sale?","answer":"At the moment, the project price is fixed on the value set by the project. Later we will add a dutch auction model where the price starts high and drops each minute by a certain percentage until all allocations are sold out. The price for all participants will be recalculated based on the price of the last entry. Unused funds will be deposited into your Balance."},{"question":"How to spend your Deposit?","answer":"You can spend unused tokens from previous sales in any upcoming sales. Later, we will add extra options."}],"KOL":[{"question":"How to join our KOL Network?","answer":"Go to our app or the header of the main page and click the \'Become Ambassador\' Button. Fill out the form and wait for approval."},{"question":"What do I get by becoming an Ambassador?","answer":"KOLs get constant offers from top projects to promote them in exchange for tokens, stablecoins, referral fees, or revenue shares. Most of our offers are in tokens under vesting. We select only the most promising projects, so tokens can significantly grow in price after listing."},{"question":"Who can apply to be an Ambassador?","answer":"We try to be as open as possible. You can apply to be a KOL if you have at least 1K followers. Although our entry barrier is low, projects can set their own filters and onboard only those KOLs that are suitable for them based on various metrics. Still, some projects will be willing to work with small but good KOLs."}],"Project":[{"question":"How to apply for the Incubation or the Launch?","answer":"Apply through the form on the main page. If you want to clarify something, send an email to project@starlight.foundation."},{"question":"How to reach us for Partnerships?","answer":"Send an email to project@starlight.foundation."}]}'
        ),
        E = s(8698),
        S = s(1622);
      function T() {
        let e = (0, n.useRef)(null),
          t = ["User", "KOL", "Project"],
          [s, l] = (0, n.useState)(t[0]),
          [r, i] = (0, n.useState)(!1),
          [o, c] = (0, n.useState)(
            () =>
              t.reduce(
                (e, t) => {
                  let s = k[t].map((s) => ({
                    ...s,
                    type: t,
                    isOpen: !1,
                    id: e.idCounter++,
                  }));
                  return e.data.push(...s), e;
                },
                { idCounter: 0, data: [] }
              ).data
          ),
          d = (e) => {
            c((t) =>
              t.map((t, s) => (s === e ? { ...t, isOpen: !t.isOpen } : t))
            );
          };
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let s = new IntersectionObserver(
              (e) => {
                let [t] = e;
                i(t.intersectionRatio >= 0.2);
              },
              { threshold: [0.2] }
            );
            return s.observe(t), () => s.disconnect();
          }, []),
          (0, a.jsxs)("div", {
            ref: e,
            id: h,
            className:
              "container-def px-4 mb-[150px] md:mb-[250px] flex flex-col transition-all duration-700 ease-out transform ".concat(
                r
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              ),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center max-w-1240 mx-auto w-full",
                children: [
                  (0, a.jsx)("h3", {
                    className:
                      "text-[52px] leading-[52px] md:text-[9vw] xl:text-[120px] text-center",
                    children: "FAQ",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "inline-flex justify-center items-center my-5 sm:mb-[50px] w-full sm:w-auto rounded-full bg-[#191919] mx-auto border border-solid border-[#3414DA]",
                    children: t.map((e, t) =>
                      (0, a.jsx)(
                        "button",
                        {
                          className:
                            "flex px-6 py-2 text-white justify-center items-center transition-all rounded-full w-full sm:w-[179px] h-[40px] border border-solid border-[#191919] leading-normal ".concat(
                              s === e ? "bg-[#3414DA]" : ""
                            ),
                          onClick: () => l(e),
                          children: e,
                        },
                        "btn_".concat(t)
                      )
                    ),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "max-w-[900px] mx-auto w-full",
                children: o
                  .filter((e) => e.type === s)
                  .map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "border-b border-solid border-[#2a2a2a] py-[20px] md:py-[27px] px-0 md:px-[30px] cursor-pointer",
                        onClick: () => d(e.id),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                              (0, a.jsx)("h2", {
                                className:
                                  "text-2xl leading-[34px] sm:text-[30px] sm:leading-[34px] font-semibold",
                                children: e.question,
                              }),
                              (0, a.jsx)(v.default, {
                                src: "/assets/arrow.svg",
                                alt: "Arrow",
                                className:
                                  "transition-all mt-[3px] mb-auto ".concat(
                                    e.isOpen ? "" : "rotate-180"
                                  ),
                                height: 24,
                                width: 24,
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "\n								overflow-hidden transition-all duration-500 ease-in-out flex\n								".concat(
                                e.isOpen
                                  ? "max-h-[200px] opacity-100"
                                  : "max-h-[0px] opacity-0",
                                "\n							"
                              ),
                            children: (0, a.jsx)("span", {
                              className: "text-[16px] leading-[20px] mt-3",
                              children: e.answer,
                            }),
                          }),
                        ],
                      },
                      t
                    )
                  ),
              }),
            ],
          })
        );
      }
      E.p8.registerPlugin(S.i);
      let O = [
        {
          quarter: "Q1",
          year: "2026",
          items: [
            "Telegram super app V1",
            "KOL Platform 2.0",
            "Community Rewards",
            "CEX & DEX Listing",
          ],
        },
        {
          quarter: "Q2",
          year: "2026",
          items: [
            "AI KOL Analytics",
            "Investment features",
            "First Community Sales",
            "Major super app update",
          ],
        },
        {
          quarter: "Q3",
          year: "2025",
          items: [
            "AI optimization features",
            "OTC Platform release",
            "Auction-model deals",
            "Community growth",
          ],
        },
        {
          quarter: "Q4",
          year: "2025",
          items: [
            "Ecosystem development",
            "Projects incubation",
            "Community Tools",
            "Full project supervision",
          ],
        },
      ];
      function R() {
        let e = (0, n.useRef)(null),
          [t, s] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let a = new IntersectionObserver(
              (e) => {
                let [t] = e;
                s(t.intersectionRatio >= 0.25);
              },
              { threshold: [0.25] }
            );
            return a.observe(t), () => a.disconnect();
          }, []),
          (0, a.jsx)("div", {
            ref: e,
            id: i,
            className:
              "relative justify-center flex items-center pt-[100px] pb-[100px] md:pt-[200px] md:pb-[200px] transition-all duration-700 ease-out transform ".concat(
                t
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              ),
            children: (0, a.jsxs)("div", {
              className:
                "container-def px-4 flex flex-col justify-center items-center relative z-10",
              children: [
                (0, a.jsx)("h3", {
                  className:
                    "text-[52px] md:text-[9vw] xl:text-[140px] text-center mb-[10px] md:mb-[40px]",
                  children: "ROADMAP",
                }),
                (0, a.jsx)("div", {
                  className:
                    "max-w-[480px] md:max-w-[680px] lg:max-w-1240 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4",
                  children: O.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "rounded-xl shadow-md p-6 relative overflow-hidden roadmap-block w-full md:max-w-[330px]",
                        children: [
                          (0, a.jsxs)("h2", {
                            className:
                              "h-[47px] flex items-start justify-start relative z-10 border-b border-[#FFFFFF1A]",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "text-[34px] leading-[37px] -tracking-[0.05em]",
                                children: e.quarter,
                              }),
                              (0, a.jsxs)("span", {
                                className: "text-[16px] opacity-40",
                                children: ["\xa0", e.year],
                              }),
                            ],
                          }),
                          (0, a.jsx)("ul", {
                            className: "relative mt-[20px] z-10",
                            children: e.items.map((e, t) =>
                              (0, a.jsxs)(
                                "li",
                                {
                                  className: "mb-2 flex",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "inline-flex ml-1 mr-2",
                                      children: "•",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "whitespace-nowrap text-[16px] leading-[20px] -tracking-[0.05em]",
                                      children: e,
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          })
        );
      }
      function A(e) {
        let { block: t, index: s } = e,
          l = (0, n.useRef)(null),
          [r, i] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = l.current;
            if (!e) return;
            let t = new IntersectionObserver(
              (e) => {
                let [t] = e;
                i(t.intersectionRatio >= 0.2);
              },
              { threshold: [0.2] }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, a.jsx)("div", {
            ref: l,
            className:
              "slide flex justify-center w-screen lg:px-4 pb-[60px] lg:pb-0 ".concat(
                r ? "opacity-100" : "opacity-0",
                " transition-opacity duration-500"
              ),
            children: (0, a.jsx)("div", {
              className:
                "earn-fon w-full rounded-[40px] flex-shrink-0 mx-auto max-w-1240 px-4 lg:min-h-screen flex items-center justify-between\n					lg:justify-center lg:pt-[97px] lg:pb-8 max-h-screen lg:bg-transparent bg-[#191919] ".concat(
                  2 === s ? "min-h-[700px]" : "min-h-[820px]"
                ),
              children: (0, a.jsxs)("div", {
                className:
                  "flex lg:flex-row flex-col justify-between gap-4 items-center lg:justify-center lg:max-h-[604px] h-full w-full",
                children: [
                  (0, a.jsxs)("section", {
                    className:
                      "flex flex-col lg:h-full justify-center sm:mr-auto lg:mt-0 mt-[80px] lg:mb-auto",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "text-[72px] lg:text-[140px] leading-[23px] lg:leading-[104px] lg:mt-6",
                        children: t.section.title,
                      }),
                      (0, a.jsx)("h3", {
                        className:
                          "pl-1 text-[18px] lg:text-[32px] mt-5 lg:mt-0 leading-[30px] lg:leading-[17px] lg:mb-auto",
                        children: t.section.subtitle,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-full h-[389px] lg:h-full md:max-w-[420px] max-w-[320px] lg:pb-8 flex items-center justify-center absolute",
                    children: (0, a.jsx)(v.default, {
                      src: "/assets/earn/".concat(s + 1, "-min.png"),
                      alt: t.section.title,
                      width: 604,
                      height: 489,
                      className:
                        "w-full h-auto md:max-h-full mt-[230px] sm:mt-[144px] lg:mt-0 object-contain md:max-w-[604px] sm:max-w-[320px] max-w-[280px]",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col lg:h-full w-[281px] items-center justify-center relative z-10 lg:mb-0 mb-10 lg:mr-[84px]",
                    children: [
                      t.title &&
                        (0, a.jsxs)("div", {
                          className:
                            "w-full flex items-center justify-between mt-auto mb-[30px] py-[20px]",
                          children: [
                            (0, a.jsx)(v.default, {
                              src: "/assets/star.svg",
                              alt: "star",
                              height: 16,
                              width: 13,
                            }),
                            (0, a.jsxs)("section", {
                              className:
                                "flex flex-col items-center justify-center",
                              children: [
                                (0, a.jsx)("h4", {
                                  className:
                                    "inline-flex text-[32px] leading-[35px] font-semibold",
                                  children: t.count,
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-[#878D92]",
                                  children: t.title,
                                }),
                              ],
                            }),
                            (0, a.jsx)(v.default, {
                              src: "/assets/star.svg",
                              alt: "star",
                              height: 16,
                              width: 13,
                            }),
                          ],
                        }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[18px] leading-[26px] mb-[30px] ".concat(
                            t.title ? "" : "mt-auto"
                          ),
                        children: t.text,
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative w-full",
                        children: [
                          (0, a.jsx)("a", {
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xe5713940c09b46a15899f12951f684dd54d760ab",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "px-4 py-2 btn-def h-9 w-full",
                            children: (0, a.jsx)("span", { children: t.btn }),
                          }),
                          t.isSoon &&
                            (0, a.jsx)("span", {
                              className:
                                "absolute -right-[10px] -top-[10px] rounded-[30px] -leading-2 flex items-center justify-center text-sm font-semibold bg-[#E732ED] h-[23px] w-[63px]",
                              children: (0, a.jsx)("span", {
                                className: "h-[12px] mb-[5%]",
                                children: "SOON",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function P(e) {
        let { blocks: t } = e,
          s = (0, n.useRef)(null),
          l = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = l.current;
            if (!e) return;
            let t = E.p8.context(() => {
              E.p8.fromTo(
                e,
                { opacity: 0, y: 150 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: 1,
                    onEnter: () => E.p8.to(e, { opacity: 1 }),
                    onEnterBack: () => E.p8.to(e, { opacity: 1 }),
                  },
                }
              );
            }, l);
            return () => t.revert();
          }, []),
          (0, n.useEffect)(() => {
            let e = s.current;
            if (!e) return;
            let t = E.p8.utils.toArray(".slide"),
              a = t.length;
            if (a < 2) return;
            let n = E.p8.context(() => {
              E.p8.to(t, {
                xPercent: -100 * (a - 1),
                ease: "none",
                scrollTrigger: {
                  trigger: e,
                  pin: !0,
                  scrub: 1,
                  snap: {
                    snapTo: 1 / (a - 1),
                    duration: 0.3,
                    ease: "power1.inOut",
                  },
                  start: "top top",
                  end: () => "+=".concat(window.innerWidth * (a - 1)),
                },
              });
            }, s);
            return () => n.revert();
          }, []),
          (0, a.jsx)("div", {
            id: u,
            ref: s,
            className: "min-h-screen overflow-hidden flex",
            children: (0, a.jsx)("div", {
              ref: l,
              className: "flex min-h-screen relative",
              children: t.map((e, t) =>
                (0, a.jsx)(A, { index: t, block: e }, t + "_card")
              ),
            }),
          })
        );
      }
      function L(e) {
        let { blocks: t } = e;
        return (0, a.jsx)("div", {
          id: u,
          className: "min-h-screen overflow-hidden flex",
          children: (0, a.jsx)("div", {
            className: "flex flex-col relative box-border w-full",
            children: t.map((e, t) =>
              (0, a.jsx)(A, { index: t, block: e }, t + "_card")
            ),
          }),
        });
      }
      E.p8.registerPlugin(S.i), E.p8.registerPlugin(S.i);
      let I = [
        {
          title: "Prize Pool",
          count: "$10,000",
          text: "Earn tokens and other valuable rewards from the top projects by playing games, doing social activities & engaging with their product.",
          btn: "Start earning",
          section: { title: "EARN", subtitle: "FROM TOP PROJECTS" },
          isSoon: !0,
        },
        {
          title: "Most Accessible Crypto deals",
          count: "$100",
          text: "- No Tokens for up $100 investment\n- Directly in Telegram\n- Pay by card, TON or any EVM Wallet",
          btn: "Start investing",
          section: { title: "INVEST", subtitle: "WITH NO BARRIERS" },
          isSoon: !0,
        },
        {
          text: "Instantly trade tokens without the need to wait for the listing and full duration of vesting.",
          btn: "Start trading",
          section: { title: "TRADE", subtitle: "WITHOUT LIMITS" },
          isSoon: !0,
        },
      ];
      function C() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            t(window.innerWidth >= 1024);
          }, []),
          e ? (0, a.jsx)(P, { blocks: I }) : (0, a.jsx)(L, { blocks: I })
        );
      }
      E.p8.registerPlugin(S.i);
      let _ = (e) => {
        let { value: t } = e,
          [s, a] = (0, n.useState)(null),
          l = (e) => e.toString().padStart(2, "0");
        return (
          (0, n.useEffect)(() => {
            a(l(t));
          }, [t]),
          s
        );
      };
      var W = () => {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          s = (0, n.useRef)(null),
          [l, r] = (0, n.useState)(!1),
          i = () => {
            let e = new Date(new Date("2025-07-01T00:00:00").getTime() + 432e7),
              t = new Date(),
              s = e.getTime() - t.getTime();
            return s > 0
              ? {
                  days: Math.floor(s / 864e5),
                  hours: Math.floor((s / 36e5) % 24),
                  minutes: Math.floor((s / 6e4) % 60),
                  seconds: Math.floor((s / 1e3) % 60),
                }
              : { days: 0, hours: 0, minutes: 0, seconds: 0 };
          },
          [o, d] = (0, n.useState)(i());
        return (
          (0, n.useEffect)(() => {
            let s = e.current,
              a = t.current;
            setTimeout(() => {
              if (!s || !a) return;
              let e = E.p8.context(() => {
                E.p8.fromTo(
                  a,
                  { opacity: 0, y: 50, scale: 0.9 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: a,
                      start: "top 80%",
                      onEnter: () => E.p8.to(a, { opacity: 1, scale: 1 }),
                      onLeave: () => E.p8.to(a, { opacity: 0, scale: 0.9 }),
                      onEnterBack: () => E.p8.to(a, { opacity: 1, scale: 1 }),
                      onLeaveBack: () => E.p8.to(a, { opacity: 0, scale: 0.9 }),
                    },
                  }
                );
              });
              return () => e.kill();
            }, 500);
          }, []),
          (0, n.useEffect)(() => {
            let e = s.current;
            if (!e) return;
            let t = new IntersectionObserver(
              (e) => {
                let [t] = e;
                r(t.intersectionRatio >= 0.25);
              },
              { threshold: [0.25] }
            );
            return t.observe(e), () => t.disconnect();
          }, []),
          (0, n.useEffect)(() => {
            let e = setInterval(() => {
              d(i());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          (0, a.jsxs)("section", {
            ref: e,
            id: c,
            className:
              "container-def px-4 h-screen min-h-screen-custom-reverse flex flex-col justify-center items-center lg:mt-[-106px] lg:pt-[106px] transition-all duration-700 ease-out transform ".concat(
                l
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              ),
            children: [
              (0, a.jsxs)("h3", {
                ref: t,
                className: "flex flex-col leading-0 mt-0",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-[18px] mx-auto leading-[17px] md:text-[32px] md:leading-[30px] mb-[22px]",
                    children: "UPCOMING",
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "text-[52px] leading-[52px] md:text-[9vw] md:leading-normal xl:text-[100px] text-center mb-4",
                    children: "PROJECT",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                ref: s,
                className:
                  "md:max-w-1240 w-full mx-auto flex flex-col-reverse md:flex-row justify-between  bg-[#191919] gap-6 p-5 sm:p-[40px] rounded-[30px] mb-[74px] lg:mb-auto bg-no-repeat projects-background",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col md:max-w-[520px] max-w-[570px] w-full mx-auto",
                    children: [
                      (0, a.jsxs)("figure", {
                        className: "flex p-1",
                        children: [
                          (0, a.jsx)(v.default, {
                            src: "/assets/logo_arena_new.png",
                            alt: "rays",
                            className: "rounded-full flex h-auto self-baseline",
                            height: 62,
                            width: 62,
                          }),
                          (0, a.jsx)("figcaption", {
                            className:
                              "ml-4 sm:ml-6 flex items-center font-semibold",
                            children: (0, a.jsx)("span", {
                              className:
                                "text-[52px] leading-[57px] -tracking-[0.05em] -mb-4 whitespace-nowrap",
                              children: "Arena VS",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[#bcbcbc] mt-5 mb-6 md:max-w-[445px] w-full",
                        children:
                          "An open WEB3 gaming ecosystem for gamers and game developers. We transform and distribute traditional games to the blockchain in just 2 days.",
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col gap-2 mt-auto mb-5 w-full",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex gap-5 justify-between w-full flex-col sm:flex-row",
                        children: [
                          (0, a.jsx)("button", {
                            rel: "noreferrer",
                            className:
                              "px-4 py-2 btn-def flex w-full disabled:opacity-50 disabled:pointer-events-none",
                            disabled: !0,
                            children: (0, a.jsx)("span", {
                              children: "Participate",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex text-white text-center mx-auto w-full",
                            children: Object.entries(o).map((e, t) => {
                              let [s, l] = e;
                              return (0, a.jsxs)(
                                n.Fragment,
                                {
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col items-center justify-center border border-solid border-[#545A5F] rounded-lg h-[52px] sm:w-[50px] w-full min-w-[20%]",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-[20px] leading-[20px] font-bold mb-[2px]",
                                          children: (0, a.jsx)(_, { value: l }),
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-[12px] leading-[12px] -tracking-[0.005em] capitalize text-[#545A5F]",
                                          children: s,
                                        }),
                                      ],
                                    }),
                                    3 !== t &&
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col gap-[6px] items-center justify-center text-[#545A5F] mx-2",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "leading-[2px]",
                                            children: "•",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "leading-[2px]",
                                            children: "•",
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                s
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(v.default, {
                      src: "/assets/arena.png",
                      alt: "arena games",
                      className: "rounded-[32px] flex mx-auto",
                      height: 453,
                      width: 570,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      let H = async () => {
        let e = await fetch("/api/projects");
        if (!e.ok)
          throw Error("Failed to fetch projects: ".concat(e.statusText));
        return e.json();
      };
      var z = () => {
          let e = (0, n.useRef)(null),
            [t, s] = (0, n.useState)([]),
            [l, r] = (0, n.useState)(!1),
            [i, c] = (0, n.useState)(!1),
            d = (e) => (e ? new Intl.NumberFormat().format(e) : "N/A");
          return (
            (0, n.useEffect)(() => {
              H().then((e) => {
                var t;
                s(
                  (null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.docs) || []
                );
              });
            }, []),
            (0, n.useEffect)(() => {
              let t = e.current;
              if (!t) return;
              let s = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  r(t.intersectionRatio >= 0.25);
                },
                { threshold: [0.25] }
              );
              return s.observe(t), () => s.disconnect();
            }, []),
            (0, a.jsx)("div", {
              ref: e,
              id: o,
              className:
                "container-def px-4 flex items-center justify-center transition-all duration-700 ease-out transform ".concat(
                  l
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-10"
                ),
              children: (0, a.jsxs)("section", {
                className:
                  "flex flex-col max-w-1240 w-full mx-auto items-center pt-[100px] md:pt-[200px]",
                children: [
                  (0, a.jsxs)("h3", {
                    className: "flex flex-col justify-center items-center",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[18px] leading-[17px] md:text-[32px] md:leading-[30px] mb-[22px] xl:mb-[21px]",
                        children: "ACCOMPLISHED",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-[52px] leading-[52px] md:text-[9vw] md:leading-[95px] xl:text-[100px] mb-6",
                        children: "PROJECTS",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("table", {
                    className: "min-w-full rounded-lg shadow-lg",
                    children: [
                      (0, a.jsx)("thead", {
                        className: "sticky top-[67px] z-10",
                        children: (0, a.jsxs)("tr", {
                          className: "h-[42px] text-[#FFFFFF99] text-left",
                          children: [
                            (0, a.jsx)("th", {
                              className:
                                "font-normal text-[14px] leading-[20px]",
                              children: (0, a.jsx)("span", {
                                className:
                                  "backdrop-blur-md p-2 rounded-md inline-flex -ml-2",
                                children: "Project",
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className:
                                "font-normal text-[14px] leading-[20px]",
                              children: (0, a.jsx)("span", {
                                className:
                                  "backdrop-blur-md p-2 rounded-md inline-flex -ml-2",
                                children: "ATH",
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className:
                                "font-normal text-[14px] leading-[20px] text-right sm:text-left",
                              children: (0, a.jsx)("span", {
                                className:
                                  "backdrop-blur-md p-2 rounded-md inline-flex -ml-2",
                                children: "Allocation",
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className:
                                "font-normal text-[14px] leading-[20px] sm:table-cell hidden",
                              children: (0, a.jsx)("span", {
                                className:
                                  "backdrop-blur-md p-2 rounded-md inline-flex -ml-2",
                                children: "Exposure",
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className:
                                "font-normal text-[14px] leading-[20px] text-right sm:table-cell hidden",
                              children: (0, a.jsx)("span", {
                                className:
                                  "backdrop-blur-md p-2 rounded-md inline-flex -mr-2",
                                children: "Finished",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("tbody", {
                        children: (i
                          ? [...t].reverse()
                          : [...t]
                              .sort(
                                (e, t) =>
                                  +new Date(e.endTime) - +new Date(t.endTime)
                              )
                              .slice(0, 5)
                        ).map((e, t) =>
                          (0, a.jsxs)(
                            "tr",
                            {
                              className:
                                "border-b border-solid border-[#FFFFFF1A] h-[80px]",
                              children: [
                                (0, a.jsx)("td", {
                                  className: "text-left align-middle",
                                  children: (0, a.jsxs)("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (null == e ? void 0 : e.icon_s3) &&
                                        (0, a.jsx)("img", {
                                          src: e.icon,
                                          alt: "".concat(
                                            (null == e ? void 0 : e.name) ||
                                              "icon_s3",
                                            " icon"
                                          ),
                                          className: "rounded-full",
                                          height: 36,
                                          width: 36,
                                        }),
                                      (0, a.jsx)("span", {
                                        className: "leading-normal",
                                        children: null == e ? void 0 : e.name,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("td", {
                                  className: "text-left align-middle",
                                  children:
                                    (null == e ? void 0 : e.ath) || "N/A",
                                }),
                                (0, a.jsx)("td", {
                                  className:
                                    "text-right sm:text-left align-middle",
                                  children: d(e.raise),
                                }),
                                (0, a.jsx)("td", {
                                  className:
                                    "text-left sm:table-cell hidden align-middle",
                                  children: d(e.publicSale),
                                }),
                                (0, a.jsx)("td", {
                                  className:
                                    "text-right sm:table-cell hidden align-middle",
                                  children:
                                    (null == e ? void 0 : e.endTime) &&
                                    new Date(e.endTime).toLocaleDateString(
                                      "en-US",
                                      {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                      }
                                    ),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  !i &&
                    (0, a.jsx)("a", {
                      href: "https://docs.raydiadefi.org",
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "px-4 min-w-[240px] py-2 text-center mt-10 border border-solid border-[#FFFFFF33] transition-all leading-normal rounded-full hover:bg-[#FFFFFF0D]",
                      children: "Document",
                    }),
                ],
              }),
            })
          );
        },
        D = s(3207);
      let M = [
        { name: "Eywa", logo: "/assets/invest-logos/eywa.png" },
        { name: "Intract", logo: "/assets/invest-logos/intract.png" },
        { name: "Magic Square", logo: "/assets/invest-logos/magic-square.svg" },
        { name: "Arena Games", logo: "/assets/invest-logos/arena-games.png" },
        {
          name: "Alvara Protocol",
          logo: "/assets/invest-logos/alvara-protocol.png",
        },
        { name: "Litentry", logo: "/assets/invest-logos/litentry.png" },
        { name: "", logo: "/assets/invest-logos/primex.png" },
        { name: "", logo: "/assets/invest-logos/skale.png" },
        { name: "", logo: "/assets/invest-logos/vemp-horizon.png" },
      ];
      function K(e) {
        let { partner: t } = e,
          [s, l] = (0, n.useState)({ width: 100, height: 100 });
        return (0, a.jsx)(v.default, {
          src: t.logo,
          alt: t.name,
          height: s.height,
          width: s.width,
          onLoad: (e) => {
            let t = e.target;
            l({ width: t.naturalWidth, height: t.naturalHeight });
          },
          className: "object-contain z-1 relative ".concat(
            t.name ? "rounded-full" : ""
          ),
        });
      }
      var q = () => {
          let [e, t] = (0, n.useState)(!1),
            [s, l] = (0, n.useState)(0),
            [r, i] = (0, n.useState)(!1),
            o = (0, n.useRef)(null),
            c = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = o.current;
              if (!e) return;
              let s = new IntersectionObserver(
                (e) => {
                  let [s] = e;
                  t(s.isIntersecting),
                    console.log(
                      "Partners is ".concat(
                        s.isIntersecting ? "visible" : "not visible"
                      )
                    );
                },
                { threshold: 0.1 }
              );
              return (
                s.observe(e),
                () => {
                  s.unobserve(e);
                }
              );
            }, [o]),
            (0, n.useEffect)(() => {
              e &&
                s < 50 &&
                setInterval(() => {
                  l((e) => (e >= 50 ? e : e + 1));
                }, Math.abs(Math.floor(40)));
            }, [e, s]),
            (0, n.useEffect)(() => {
              i(window.innerWidth >= 1024);
            }, []),
            (0, a.jsxs)("section", {
              id: x,
              className:
                "partners-fon lg:min-h-screen relative w-full py-10 pt-[140px]",
              children: [
                (0, a.jsx)("h2", {
                  className:
                    "text-center text-[32px] leading-[30px] text-white",
                  children: "PARTNERS",
                }),
                (0, a.jsx)("p", {
                  ref: o,
                  className:
                    "text-center text-[200px] mt-6 h-[154px] overflow-hidden",
                  children: (0, a.jsxs)("span", {
                    className:
                      "w-[340px] pt-[7px] leading-none whitespace-nowrap flex justify-end mx-auto",
                    children: [s, "+"],
                  }),
                }),
                (0, a.jsx)(n.Suspense, {
                  fallback: "...Loading",
                  children: (0, a.jsxs)("div", {
                    ref: c,
                    className: "w-full",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "relative overflow-hidden flex items-center justify-center mt-10",
                        children: (0, a.jsx)(D.Z, {
                          speed: r ? 50 : 75,
                          gradient: !1,
                          children: (0, a.jsx)("div", {
                            className: "flex",
                            children: [...M, ...M].map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className:
                                    "h-[90px] gap-[10px] border border-solid border-[#FFFFFF33] hover:border-transparent overflow-hidden before-partner-tag relative transition-all rounded-full ml-4 flex items-center justify-center p-5",
                                  children: [
                                    (0, a.jsx)(K, { partner: e }),
                                    e.name &&
                                      (0, a.jsx)("span", {
                                        className:
                                          "flex z-1 relative text-[24px] leading-7 whitespace-nowrap",
                                        children: e.name,
                                      }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "relative mt-8 overflow-hidden flex items-center justify-center mb-[100px]",
                        children: (0, a.jsx)(D.Z, {
                          direction: "right",
                          speed: r ? 50 : 75,
                          gradient: !1,
                          children: (0, a.jsx)("div", {
                            className: "flex",
                            children: [...M, ...M]
                              .reverse()
                              .map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "h-[90px] gap-[10px] border border-solid border-[#FFFFFF33] hover:border-transparent overflow-hidden before-partner-tag relative transition-all rounded-full ml-4 flex items-center justify-center p-5",
                                    children: [
                                      (0, a.jsx)(K, { partner: e }),
                                      e.name &&
                                        (0, a.jsx)("span", {
                                          className:
                                            "flex z-1 relative text-[24px] leading-7 whitespace-nowrap",
                                          children: e.name,
                                        }),
                                    ],
                                  },
                                  t
                                )
                              ),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        B = () => {
          let e = (0, n.useRef)(null),
            [t, s] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              let t = e.current;
              if (!t) return;
              let a = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  s(t.intersectionRatio >= 0.25);
                },
                { threshold: [0.25] }
              );
              return a.observe(t), () => a.disconnect();
            }, []),
            (0, a.jsx)("div", {
              id: "HomeLaunchProject",
              ref: e,
              className:
                "container-def px-4 pb-[100px] flex flex-col justify-center items-center transition-all duration-700 ease-out transform ".concat(
                  t
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-10"
                ),
              children: (0, a.jsx)("div", {
                className:
                  "relative z-[1] max-w-1240 mx-auto rounded-[40px] gradient-border border-solid p-2 w-full",
                children: (0, a.jsxs)("div", {
                  className:
                    "blended-background relative rounded-[35px] min-h-[474px] px-2 py-[50px] md:p-[50px] flex items-center flex-col overflow-hidden",
                  children: [
                    (0, a.jsx)("h3", {
                      className:
                        "text-5 md:text-[24px] relative z-[1] mb-5 md:mb-0 font-normal leading-[29px] md:leading-[24px] tracking-[-0.05em] text-center",
                      children:
                        "Start your journey to become the Web3 Superstar!",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "whitespace-normal md:whitespace-nowrap max-w-[340px] md:leading-normal md:max-w-none w-full text-[52px] leading-[52px] md:text-[9vw] xl:text-[120px] relative z-[1] text-center",
                      children: "LAUNCH PROJECT",
                    }),
                    (0, a.jsx)("figure", {
                      className: "runa-launch mt-auto relative z-[2]",
                      children: (0, a.jsx)(v.default, {
                        src: "/assets/rune_big.png",
                        alt: "Runa",
                        className:
                          "position -mt-[146px] relative z-[1] object-cover",
                        height: 320,
                        width: 210,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      let G = [
        {
          tag: "FOR KOLS",
          title: "Ambassador Programs",
          describtion:
            "Profitable, secure & convenient. Ultimate platform to earn by supporting next generation of web3 projects.",
          btn: "Apply",
          isSoon: !1,
        },
        {
          tag: "FOR USERS",
          title: "Web3 Super App",
          describtion:
            "Your personalized feed of opportunities to earn from the most promising projects in the space.",
          btn: "Choose project",
          isSoon: !0,
        },
        {
          tag: "FOR PROJECTS",
          title: "Full Supervision Growth",
          describtion:
            "AI-powered tools to find perfect-fit KOLs, onboard users, build engagement & raise funds.",
          btn: "Launch project",
          isSoon: !0,
        },
      ];
      function U() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          s = (0, n.useRef)([]),
          [l, i] = (0, n.useState)(!1),
          [o, c] = (0, n.useState)(!1),
          [d, x] = (0, n.useState)([]);
        return (
          (0, n.useEffect)(() => {
            E.ZP.registerPlugin(S.Z);
            let e = () => {
              var e;
              (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) >
              1024
                ? (17.31 * window.innerHeight) / 100 <= 211
                  ? x(["27.59vh", "17.31vh", "32.41vh"])
                  : x(["306px", "211px", "364px"])
                : x(["0px", "20px", "20px"]);
            };
            e();
            let t = () => {
              e();
            };
            return (
              window.addEventListener("resize", t),
              () => {
                window.removeEventListener("resize", t);
              }
            );
          }, []),
          (0, n.useEffect)(() => {
            if (e.current && t.current)
              return (
                E.ZP.fromTo(
                  t.current,
                  { scale: 0.5, opacity: 0, y: -200 },
                  {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top 70%",
                      end: "top 20%",
                      scrub: !0,
                    },
                  }
                ),
                s.current.forEach((e, t) => {
                  var s;
                  let a = 1 !== t ? 0.15 : 0.3,
                    n =
                      (null === (s = window) || void 0 === s
                        ? void 0
                        : s.innerWidth) > 1024
                        ? "top 60%"
                        : "top 85%";
                  S.Z.create({
                    trigger: e,
                    start: n,
                    end: "bottom top",
                    onEnter: () => {
                      E.ZP.to(e, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: a,
                        ease: "power3.out",
                      });
                    },
                    onLeaveBack: () => {
                      E.ZP.to(e, {
                        opacity: 0,
                        y: 50,
                        duration: 0.6,
                        ease: "power3.in",
                      });
                    },
                  });
                }),
                () => {
                  S.Z.getAll().forEach((e) => e.kill());
                }
              );
          }, []),
          (0, n.useEffect)(() => {
            i(window.innerWidth >= 1024), c(window.innerWidth <= 480);
          }, []),
          (0, a.jsxs)("div", {
            id: r,
            ref: e,
            className:
              "relative flex flex-col items-center min-h-[1850px] xl:min-h-[150vh] overflow-hidden",
            children: [
              (0, a.jsx)("div", {
                className: "relative z-0 mt-20 flex",
                children: o
                  ? (0, a.jsx)("h3", {
                      className: "text-[52px] text-center",
                      children: "STARLIGHT ECOSYSTEM",
                    })
                  : (0, a.jsx)(D.Z, {
                      speed: l ? 50 : 75,
                      gradient: !1,
                      children: (0, a.jsx)("h3", {
                        className:
                          "before-startups-eco text-[72px] md:text-[9vw] xl:text-[100px]",
                        children: "STARLIGHT ECOSYSTEM",
                      }),
                    }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "max-w-[320px] relative lg:max-w-[1124px] w-full pt-[280px] lg:pt-0 mx-auto mt-0 lg:-mt-[27px] flex flex-col lg:flex-row z-10 justify-between px-4",
                children: [
                  (0, a.jsx)("picture", {
                    ref: t,
                    className:
                      "absolute top-0 lg:-top-[100px] left-0 w-full flex justify-center transition-opacity duration-700",
                    children: (0, a.jsx)(v.default, {
                      src: "/assets/STARLIGHT_LOGO_BIG.png",
                      alt: "STARLIGHT",
                      height: 520,
                      width: 531,
                    }),
                  }),
                  G.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        ref: (e) => {
                          s.current[t] = e;
                        },
                        className:
                          "flex flex-col w-[300px] min-h-[438px] h-full px-[30px] pt-[40px] pb-[30px] bg-[#222222] rounded-[30px] bg-cover bg-no-repeat lg:opacity-0 transform translate-y-10",
                        style: {
                          backgroundImage: "url(/assets/eco/ellipse-".concat(
                            t + 1,
                            ".svg)"
                          ),
                          marginTop: d[t],
                        },
                        children: [
                          (0, a.jsxs)("span", {
                            className: "flex items-center p-1 relative",
                            children: [
                              (0, a.jsx)(v.default, {
                                src: "/assets/star.svg",
                                alt: "star",
                                className: "absolute flex mb-1",
                                height: 16,
                                width: 13,
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "ml-[17px] flex text-sm -tracking-[0.05em] leading-[20px]",
                                children: e.tag,
                              }),
                            ],
                          }),
                          (0, a.jsx)("h4", {
                            className:
                              "text-[30px] leading-9 -tracking-[0.05em] mt-auto",
                            children: e.title,
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-[18px] leading-[26px] py-[20px] opacity-70",
                            children: e.describtion,
                          }),
                          (0, a.jsxs)("div", {
                            className: "relative w-full",
                            children: [
                              (0, a.jsx)("a", {
                                href: "https://app.raydiadefi.org",
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "h-9 w-full btn-def relative transition-all opacity-100 disabled:opacity-50 disabled:pointer-events-none",
                                children: (0, a.jsx)("span", {
                                  children: e.btn,
                                }),
                              }),
                              e.isSoon &&
                                (0, a.jsx)("span", {
                                  className:
                                    "-right-[10px] -top-[10px] rounded-[30px] absolute -leading-2 flex items-center justify-center text-sm font-semibold bg-[#E732ED] h-[23px] w-[63px]",
                                  children: (0, a.jsx)("span", {
                                    className: "h-[12px] mb-[5%]",
                                    children: "SOON",
                                  }),
                                }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                ],
              }),
            ],
          })
        );
      }
      function Z() {
        let [e, t] = (0, n.useState)(!1),
          s = (0, l.usePathname)();
        return (
          (0, n.useEffect)(() => {
            if ("/" === s) {
              let e = setTimeout(() => {
                t(!0);
              }, 1e3);
              return () => clearTimeout(e);
            }
          }, [s]),
          (0, a.jsx)("div", {
            id: "HomeWeb3",
            className: "relative min-h-[200vh] w-full transition-all ".concat(
              e ? "opacity-100" : "opacity-0"
            ),
            children: (0, a.jsx)("div", {
              className:
                "w-full sticky top-0 pt-16 min-h-screen bg-cover bg-center",
              children: (0, a.jsxs)("div", {
                className: "container-def text-center mt-[40px]",
                children: [
                  (0, a.jsx)("p", {
                    className: "font-normal mb-6 md:text-[32px] text-[18px]",
                    children: "RAISING NEXT GENERATION OF",
                  }),
                  (0, a.jsx)("h2", {
                    className:
                      "font-normal leading-none xl:text-[100px] sm:text-[80px] xs:text-[12vw] text-[14vw]",
                    children: "WEB3 SUPERSTARS",
                  }),
                  (0, a.jsx)("a", {
                    href: "/#".concat(r),
                    onClick: (e) => {
                      e.preventDefault();
                      let t = document.getElementById(r);
                      if (t) {
                        let e = t.getBoundingClientRect().top + window.scrollY,
                          s = window.scrollY,
                          a = e - s,
                          n = null,
                          l = (e) =>
                            e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
                          r = (e) => {
                            null === n && (n = e);
                            let t = Math.min((e - n) / 1400, 1),
                              i = l(t);
                            window.scrollTo(0, s + a * i),
                              t < 1 && requestAnimationFrame(r);
                          };
                        requestAnimationFrame(r);
                      }
                    },
                    children: (0, a.jsxs)("figure", {
                      className:
                        "group flex flex-row-reverse justify-center items-center mt-[50px] rounded-full mx-auto w-[70px] h-[70px] border border-solid border-[#FFFFFF4D] transition-all hover:border-[#D2C7FF]",
                      children: [
                        (0, a.jsx)("svg", {
                          width: "26",
                          height: "24",
                          viewBox: "0 0 26 24",
                          className:
                            "mt-3 transition-all animate-bounce fill-current text-white group-hover:text-[#D2C7FF]",
                          children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.7955 23.2229C13.3562 23.6744 12.6438 23.6744 12.2045 23.2229L0.9545 11.6604C0.51516 11.2088 0.51516 10.4767 0.9545 10.0252C1.39384 9.57364 2.10615 9.57364 2.54549 10.0252L13 20.7701L23.4545 10.0252C23.8938 9.57364 24.6062 9.57364 25.0455 10.0252C25.4848 10.4767 25.4848 11.2088 25.0455 11.6604L13.7955 23.2229ZM13 11.5201L23.4545 0.775183C23.8938 0.323639 24.6062 0.323639 25.0455 0.775183C25.4848 1.22673 25.4848 1.95882 25.0455 2.41037L13.7955 13.9729C13.3562 14.4244 12.6438 14.4244 12.2045 13.9729L0.954501 2.41037C0.515161 1.95882 0.515161 1.22673 0.954501 0.775181C1.39384 0.323637 2.10615 0.323637 2.54549 0.775181L13 11.5201Z",
                          }),
                        }),
                        (0, a.jsx)("figcaption", {
                          className:
                            "-mt-24 transition-all absolute text-white group-hover:text-[#D2C7FF]",
                          children: "CA: 0xe5713940c09b46a15899f12951f684dd54d760ab",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      var Y = () => {
        let e = (0, n.useRef)(null),
          [t, s] = (0, n.useState)(0),
          l = Array.from({ length: 124 }, (e, t) =>
            "/models/videoWebp/".concat(String(t).padStart(3, "0"), ".webp")
          );
        return (
          (0, n.useEffect)(() => {
            if ((E.p8.registerPlugin(S.i), e.current)) {
              let t = S.i.create({
                trigger: e.current,
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
                pin: !0,
                onUpdate: (e) => {
                  s(Math.min(Math.floor(124 * e.progress), 123));
                },
              });
              return (
                E.p8.to(".video-frame", {
                  opacity: 0,
                  scrollTrigger: {
                    trigger: e.current,
                    start: "50vh top",
                    end: "175vh top",
                    scrub: !0,
                    markers: !1,
                  },
                }),
                setTimeout(() => {
                  var e;
                  let t =
                    null === (e = document) || void 0 === e
                      ? void 0
                      : e.querySelector(".pin-spacer");
                  if (t) {
                    let e = t.offsetHeight;
                    document.documentElement.style.setProperty(
                      "--pin-spacer-height",
                      "".concat(e, "px")
                    );
                  }
                }, 0),
                () => {
                  t.kill(), S.i.getAll().forEach((e) => e.kill());
                }
              );
            }
          }, [124]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                ref: e,
                className: "video-scroll-container",
                children: (0, a.jsx)("div", {
                  className: "video-frame",
                  children: l.map((e, s) =>
                    (0, a.jsx)(
                      v.default,
                      {
                        src: e,
                        className:
                          "absolute w-full h-full object-cover ".concat(
                            s === t ? "opacity-100" : "opacity-0"
                          ),
                        alt: "Frame ".concat(s + 1),
                        height: 1080,
                        width: 1920,
                      },
                      s
                    )
                  ),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "absolute top-0 left-0 z-[1] min-h-[300vh] w-full",
                children: [(0, a.jsx)(Z, {}), (0, a.jsx)(U, {})],
              }),
            ],
          })
        );
      };
      function V() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          [s, l] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let s = new IntersectionObserver(
              (e) => {
                let [s] = e,
                  a = s.isIntersecting;
                l(s.intersectionRatio >= 0.25),
                  a
                    ? (t.classList.add("in-view"),
                      t.classList.remove("out-view"))
                    : (t.classList.remove("in-view"),
                      t.classList.add("out-view"));
              },
              { threshold: [0.25, 0.5, 0.75] }
            );
            return (
              s.observe(t),
              () => {
                s.disconnect();
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            id: d,
            ref: e,
            className:
              "container-def min-h-screen-c-big flex flex-col items-center ".concat(
                s ? "opacity-100" : "opacity-0",
                " transition-opacity duration-500"
              ),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "sticky top-0 w-full flex justify-center items-center min-h-screen",
                children: [
                  (0, a.jsx)("h3", {
                    ref: t,
                    className:
                      "text-[32px] leading-[32px] md:text-[72px] md:leading-[72px] -tracking-[0.05em] text-center mt-[80px] md:mt-[120px] mb-auto max-w-[1024px] relative z-10",
                    children: "POWEHOUSE FOR WEB3 SUPERSTARS",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-full min-h-screen powehouse-fon absolute left-0 top-10 sm:top-[100px] flex justify-center items-center z-0",
                    children: (0, a.jsx)(v.default, {
                      src: "/assets/rune_big.png",
                      alt: "rune",
                      height: 636,
                      width: 413,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "flex flex-col justify-between w-full max-w-[1024px] mx-auto",
                children: [
                  {
                    title: "Onboard KOLs",
                    text: "AI-powered matching, automatic campaign launches, reward distribution & optimisation provides a best tool on the market to effectively reach desired communities.",
                  },
                  {
                    title: "Raise Funds",
                    text: "Convert your active community members & network of Ambassadors into loyal investors, clients and long-term supporters in a right way.",
                  },
                  {
                    title: "Grow Community",
                    text: "Result-oriented complex engagement system helps you grow the community and automatically rewards the most active members.",
                  },
                ].map((e, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "relative z-20 bg-[FFFFFF0D] w-full sm:w-[330px] p-[40px] rounded-[30px] backdrop-blur-md\n							".concat(
                          1 === t ? "ml-auto my-5 sm:my-40" : "",
                          "\n						"
                        ),
                      children: [
                        (0, a.jsx)("h4", {
                          className:
                            "text-[24px] leading-[26px] -tracking-[5%] mb-5",
                          children: e.title,
                        }),
                        (0, a.jsx)("p", {
                          className: "text-normal",
                          children: e.text,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          })
        );
      }
      let $ = [
        { name: "Campaign management", image: "campaign-management.jpg" },
        { name: "KOLs", image: "kols.jpg" },
        { name: "Partnerships", image: "partnerships.jpg" },
        { name: "Resources", image: "resources.jpg" },
        { name: "Fundraising", image: "fundraising.jpg" },
        { name: "Community", image: "community.jpg" },
        { name: "On-chain activity", image: "on-chain-activity.jpg" },
        { name: "Advisory", image: "advisory.jpg" },
        { name: "Marketing", image: "marketing.jpg" },
        { name: "Engagement", image: "engagement.jpg" },
        { name: "Go-to-Market Strategy", image: "go-to-market-strategy.jpg" },
      ];
      function J() {
        let e = (0, n.useRef)(null),
          [t, s] = (0, n.useState)(!1),
          [l, r] = (0, n.useState)(!1),
          [i, o] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            s(window.innerWidth >= 1024), r(window.innerWidth <= 480);
          }, []),
          (0, n.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let s = new IntersectionObserver(
              (e) => {
                let [t] = e;
                o(t.intersectionRatio >= 0.2);
              },
              { threshold: [0.2] }
            );
            return s.observe(t), () => s.disconnect();
          }, []),
          (0, a.jsxs)("div", {
            id: "HomeThrive",
            ref: e,
            className:
              "min-h-[240px] h-[50vh] flex flex-col justify-center items-center relative mb-[70px] transition-all duration-700 ease-out transform ".concat(
                i
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              ),
            children: [
              (0, a.jsx)(D.Z, {
                gradient: !1,
                speed: t ? 50 : 75,
                children: (0, a.jsx)("div", {
                  className: "flex relative z-10 mb-[50px] md:mb-[60px]",
                  children: $.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "h-[80px] md:h-[90px] flex-shrink-0 bg-[#090909] border border-solid border-[#FFFFFF33] rounded-full flex ml-[163px] items-center justify-center px-5",
                        children: [
                          (0, a.jsx)(v.default, {
                            src: "/assets/star.svg",
                            alt: "star",
                            height: 16,
                            width: 13,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "md:text-[24px] text-[18px] leading-[24px] ml-2 tracking-[-0.05em]",
                            children: e.name,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
              (0, a.jsx)("div", {
                className: "absolute h-14 w-full z-0 -mt-[295px] md:-mt-6",
                children: l
                  ? (0, a.jsx)("h3", {
                      className:
                        "text-[72px] leading-[126px] text-center px-4 overflow-hidden w-full",
                      children: "WE HELP STARTUPS THRIVE",
                    })
                  : (0, a.jsx)(D.Z, {
                      speed: t ? 30 : 50,
                      gradient: !1,
                      children: (0, a.jsx)("h3", {
                        className:
                          "text-[72px] md:text-[90px] text-center px-4 overflow-hidden w-full",
                        children: (0, a.jsx)("span", {
                          className: "before-startups whitespace-nowrap -my-16",
                          children: "WE HELP STARTUPS THRIVE",
                        }),
                      }),
                    }),
              }),
              (0, a.jsx)(D.Z, {
                speed: t ? 50 : 75,
                direction: "right",
                gradient: !1,
                children: (0, a.jsx)("div", {
                  className: "flex",
                  children: $.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "h-[80px] md:h-[90px] flex-shrink-0 bg-[#090909] border border-solid border-[#FFFFFF33] rounded-full flex ml-[163px] items-center justify-center px-5",
                        children: [
                          (0, a.jsx)(v.default, {
                            src: "/assets/star.svg",
                            alt: "star",
                            height: 16,
                            width: 13,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "md:text-[24px] text-[18px] leading-[24px] ml-2 tracking-[-0.05em]",
                            children: e.name,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          })
        );
      }
      function Q(e) {
        let { blocks: t } = e,
          s = (0, n.useRef)(null),
          l = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            E.p8.registerPlugin(S.i);
            let e = E.p8.context(() => {
              let e = document.querySelector(".cards-wrapper"),
                t = window.innerWidth <= 1920 ? 1920 : 2560,
                a = window.innerWidth <= 1920 ? 476 : 1073;
              e &&
                E.p8.to(e, {
                  x: () => {
                    let s = 0;
                    window.innerWidth <= t && window.innerWidth > 1440
                      ? (s = ((window.innerWidth - 1440) / (t - 1440)) * a)
                      : window.innerWidth > t &&
                        (s = a + (window.innerWidth - t) * 0.2),
                      console.log("Dynamic Offset:", s);
                    let n = window.innerWidth - e.scrollWidth - 36;
                    return n < 0 ? n + -s : -(e.scrollWidth - 1240);
                  },
                  ease: "none",
                  scrollTrigger: {
                    trigger: s.current,
                    start: "top top",
                    end: () => "+=".concat(e.scrollWidth),
                    scrub: !0,
                    pin: !0,
                  },
                }),
                l.current &&
                  E.p8.to(l.current, {
                    y: -200,
                    scrollTrigger: {
                      trigger: s.current,
                      start: "top top",
                      end: "bottom top",
                      scrub: !0,
                    },
                  });
            }, s);
            return () => e.revert();
          }, []),
          (0, a.jsx)("div", {
            ref: s,
            className:
              "invest-fon flex flex-col justify-center items-center overflow-hidden min-w-screen",
            children: (0, a.jsx)("div", {
              className: "min-h-screen flex justify-center items-center w-full",
              children: (0, a.jsxs)("section", {
                id: m,
                className:
                  "container-def px-4 bg-center bg-cover pt-2 horizontal-scroll min-h-[753px]",
                children: [
                  (0, a.jsxs)("h3", {
                    ref: l,
                    className:
                      "flex flex-col mt-[297px] -mb-[225px] leading-0 mx-auto",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[18px] mx-auto leading-[17px] md:text-[32px] md:leading-[30px] mb-2 xl:-mb-[7px]",
                        children: "NEW WAY",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-[10.5vw] sm:text-[9vw] leading-normal xl:text-[100px] text-center whitespace-nowrap",
                        children: "OF INVESTMENT",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "cards-wrapper flex gap-[60px] w-[1500px] mt-[28px] mx-auto",
                    children: t.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "relative z-20 bg-[#191919] min-w-[330px] p-5 rounded-[30px] ".concat(
                              0 === t ? "ml-[100vw]" : ""
                            ),
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "bg-[#7E7E7E4D] leading-[17px] w-[33px] h-[26px] mb-4 flex justify-center items-center rounded-full",
                              children: (0, a.jsxs)("span", {
                                className: "mt-1",
                                children: ["0", t + 1],
                              }),
                            }),
                            (0, a.jsx)(v.default, {
                              src: "/assets/invest/form(".concat(t, ").svg"),
                              alt: e.title,
                              width: 290,
                              height: 202,
                              className: "mb-10 rounded-3xl",
                            }),
                            (0, a.jsx)("h4", {
                              className:
                                "text-[24px] leading-[26px] -tracking-[5%] mb-5",
                              children: e.title,
                            }),
                            (0, a.jsx)("p", {
                              className: "text-normal opacity-70 pb-2",
                              children: e.text,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function X(e) {
        let { blocks: t } = e;
        return (0, a.jsx)("div", {
          className: "invest-fon overflow-hidden pt-28 min-w-screen",
          children: (0, a.jsxs)("div", {
            id: m,
            className:
              "max-w-1240 container-def bg-center bg-cover pt-2 pb-5 relative z-10",
            children: [
              (0, a.jsxs)("h3", {
                className: "flex flex-col leading-0 px-4",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-[18px] mx-auto leading-[17px] md:text-[32px] md:leading-[30px] mb-2 xl:-mb-[7px]",
                    children: "NEW WAY",
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "text-[10.5vw] sm:text-[9vw] leading-normal xl:text-[100px] text-center whitespace-nowrap",
                    children: "OF INVESTMENT",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "cards-wrapper flex w-full mx-auto pr-5 overflow-x-auto whitespace-nowrap no-scrollbar",
                children: t.map((e, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "relative z-20 bg-[#191919] min-w-[300px] max-w-[300px] ml-5 p-5 rounded-[30px] shrink-0",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "bg-[#7E7E7E4D] leading-[17px] w-[33px] h-[26px] mb-4 flex justify-center items-center rounded-full",
                          children: (0, a.jsxs)("span", {
                            className: "mt-1",
                            children: ["0", t + 1],
                          }),
                        }),
                        (0, a.jsx)(v.default, {
                          src: "/assets/invest/form(".concat(t, ").svg"),
                          alt: e.title,
                          width: 290,
                          height: 202,
                          className: "mb-10 rounded-3xl",
                        }),
                        (0, a.jsx)("h4", {
                          className:
                            "text-[24px] leading-[26px] -tracking-[5%] mb-5",
                          children: e.title,
                        }),
                        (0, a.jsx)("p", {
                          className: "text-normal opacity-70 pb-2",
                          children: e.text,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      function ee() {
        let [e, t] = (0, n.useState)(!1),
          s = [
            {
              title: "Dynamic Pricing",
              text: "Auction starts at a higher price than the project's minimum. Price drops every minute until allocation is sold or reaches the project's IDO price.",
              image: "",
            },
            {
              title: "No barriers",
              text: "No tokens or passes needed to access the deals. Invest up to $100 in any project you like. Enter the deals at a price that suits you.",
              image: "",
            },
            {
              title: "Equal Opportunity",
              text: "Each investor can buy up to a certain % of the total allocation. This % may be adjusted to ensure fairness and sold-out.",
              image: "",
            },
            {
              title: "Return of funds",
              text: "Unused funds are deposited into your wallet for future deals. In the next deal this amount is used prior to the new payment.",
              image: "",
            },
          ];
        return (
          (0, n.useEffect)(() => {
            t(window.innerWidth >= 1024);
          }, []),
          e ? (0, a.jsx)(Q, { blocks: s }) : (0, a.jsx)(X, { blocks: s })
        );
      }
      var et = JSON.parse(
        '[{"nickname":"Whale_Guru","avatar":"/assets/twitter/image_1.jpg","subscr":"319.7K"},{"nickname":"GemBooster","avatar":"/assets/twitter/image_3.jpg","subscr":"107.5K"},{"nickname":"IkoWEB3","avatar":"/assets/twitter/image_5.jpg","subscr":"138.7K"},{"nickname":"SuzzyDefi","avatar":"/assets/twitter/image_7.jpg","subscr":"83.5K"},{"nickname":"bitkoinist","avatar":"/assets/twitter/image_9.jpg","subscr":"220.3K"},{"nickname":"GenuineDegen","avatar":"/assets/twitter/image_11.jpg","subscr":"72.5K"},{"nickname":"NFTOdettes","avatar":"/assets/twitter/image_13.jpg","subscr":"39K"},{"nickname":"caps_eth","avatar":"/assets/twitter/image_15.jpg","subscr":"129.3K"},{"nickname":"JefferyCrypt","avatar":"/assets/twitter/image_17.jpg","subscr":"70.9K"},{"nickname":"Hodl_says","avatar":"/assets/twitter/image_19.jpg","subscr":"70.3K"},{"nickname":"only1mrwhite","avatar":"/assets/twitter/image_20.jpg","subscr":"105K"}]'
      );
      function es() {
        let e = (0, n.useRef)(null),
          [t, s] = (0, n.useState)(!1),
          [l, r] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          let t = e.current;
          if (!t) return;
          let s = new IntersectionObserver(
            (e) => {
              let [t] = e;
              r(t.intersectionRatio >= 0.25);
            },
            { threshold: [0.25] }
          );
          return s.observe(t), () => s.disconnect();
        }, []);
        let i = [
          {
            count: "+$1.5M",
            text: "Tokens are allocated in all the campaigns",
          },
          {
            count: "$3M",
            text: "Raised via our own KOL and investment DAO networkTokens are allocated in all the campaigns",
          },
          {
            count: "+120M",
            text: "Audience reached with ambasssadors’ endorsement",
          },
        ];
        return (
          (0, n.useEffect)(() => {
            s(window.innerWidth >= 1024);
          }, []),
          (0, a.jsxs)("div", {
            id: p,
            ref: e,
            className:
              "invest-fon relative min-h-screen-custom flex flex-col justify-center items-center transition-all duration-700 ease-out transform ".concat(
                l
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              ),
            children: [
              (0, a.jsxs)("h3", {
                className:
                  "container-def flex flex-col justify-center items-center px-4 mb-[11px]",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-[18px] leading-[17px] md:text-[32px] md:leading-[30px] mb-[21px] xl:mb-[15px]",
                    children: "TOP",
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "text-[52px] leading-[52px] md:text-[9vw] md:leading-[95px] xl:text-[90px]",
                    children: "INFLUENCERS",
                  }),
                ],
              }),
              (0, a.jsx)("picture", {
                className:
                  "absolute z-0 top-56 left-0 w-full flex justify-center transition-opacity duration-700",
                children: (0, a.jsx)(v.default, {
                  src: "/assets/STARLIGHT_LOGO_BIG.png",
                  alt: "STARLIGHT",
                  className: "h-auto w-[373px] lg:w-[404px]",
                  height: 373,
                  width: 404,
                }),
              }),
              (0, a.jsx)(n.Suspense, {
                fallback: "...Loading",
                children: (0, a.jsx)(D.Z, {
                  direction: "left",
                  pauseOnHover: !0,
                  gradient: !1,
                  speed: t ? 50 : 75,
                  children: (0, a.jsx)("div", {
                    className: "flex",
                    children: et.map((e, t) =>
                      (0, a.jsxs)(
                        "a",
                        {
                          className:
                            "h-16 flex ml-16 items-center justify-center gap-2",
                          href: "https://x.com/@".concat(e.nickname),
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "relative w-16 h-16 border-[3px] border-solid border-transparent bg-clip-border           bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(188,156,255,0.3)] rounded-full flex items-center justify-center",
                              children: (0, a.jsx)(v.default, {
                                src: e.avatar,
                                alt: e.nickname,
                                className: "w-full h-full rounded-full",
                                height: 62,
                                width: 62,
                              }),
                            }),
                            (0, a.jsxs)("span", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, a.jsxs)("span", {
                                  className:
                                    "opacity-70 leading-[17px] -tracking-[0.05em]",
                                  children: ["@", e.nickname],
                                }),
                                (0, a.jsxs)("span", {
                                  className: "flex gap-1",
                                  children: [
                                    (0, a.jsx)(v.default, {
                                      src: "/assets/user.svg",
                                      alt: "user",
                                      height: 12,
                                      width: 12,
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "text-[26px] leading-[28px]",
                                      children: e.subscr,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "max-w-[960px] pb-4 pt-[200px] lg:pt-4 mt-[200px] gap-[40px] lg:gap-0 mb-[30px] lg:mb-[79px] flex lg:flex-row flex-col justify-between z-10",
                children: [
                  (0, a.jsxs)("div", {
                    className: "w-[280px]",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[72px] leading-[68px] border-b border-[#FFFFFF33]",
                        children: i[0].count,
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[18px] leading-[26px] mt-[20px] opacity-70",
                        children: i[0].text,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-[280px] lg:mt-48",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[72px] leading-[68px] border-b border-[#FFFFFF33]",
                        children: i[1].count,
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[18px] leading-[26px] mt-[20px] opacity-70",
                        children: i[1].text,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-[280px]",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[72px] leading-[68px] border-b border-[#FFFFFF33]",
                        children: i[2].count,
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[18px] leading-[26px] mt-[20px] opacity-70",
                        children: i[2].text,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex xs:flex-row flex-col w-full xs:w-auto mx-auto gap-4 mt-2 px-4",
                children: [
                  (0, a.jsx)("a", {
                    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xe5713940c09b46a15899f12951f684dd54d760ab",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "px-4 py-2 h-[40px] btn-def leading-normal",
                    children: (0, a.jsx)("span", {
                      children: "Chart",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function ea() {
        let e = (0, l.usePathname)();
        return (
          (0, n.useEffect)(() => {
            if ("/" === e) {
              document.body.style.overflow = "hidden";
              let e = setTimeout(() => {
                document.body.style.overflow = "";
              }, 1500);
              return () => clearTimeout(e);
            }
          }, [e]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(N, {}),
              (0, a.jsxs)("main", {
                className: "scroll-section",
                children: [
                  (0, a.jsx)(Y, {}),
                  (0, a.jsx)(q, {}),
                  (0, a.jsx)(C, {}),
                  (0, a.jsx)(W, {}),
                  (0, a.jsx)(ee, {}),
                  (0, a.jsx)(V, {}),
                  (0, a.jsx)(J, {}),
                  (0, a.jsx)(es, {}),
                  (0, a.jsx)(z, {}),
                  (0, a.jsxs)("div", {
                    className: "roadmap-fon",
                    children: [(0, a.jsx)(R, {}), (0, a.jsx)(T, {})],
                  }),
                  (0, a.jsx)(B, {}),
                ],
              }),
              (0, a.jsx)(F, {}),
            ],
          })
        );
      }
    },
    5433: function (e, t, s) {
      "use strict";
      s.d(t, {
        $: function () {
          return l;
        },
        I: function () {
          return r;
        },
      });
      var a = s(7437),
        n = s(2265);
      let l = (0, n.createContext)({
          scrollPosition: 0,
          setScrollPosition: () => {},
        }),
        r = (e) => {
          let { children: t } = e,
            [s, r] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                r(window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, a.jsx)(l.Provider, {
              value: { scrollPosition: s, setScrollPosition: r },
              children: t,
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [523, 851, 971, 117, 744], function () {
      return e((e.s = 5765));
    }),
      (_N_E = e.O());
  },
]);
