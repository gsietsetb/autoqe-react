! function() {
    for (var t, e = function() {}, o = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = o.length, s = window.console = window.console || {}; i--;) t = o[i], s[t] || (s[t] = e)
}(),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e = -1,
            o = -1,
            i = function(t) {
                return parseFloat(t) || 0
            },
            s = function(e) {
                var o = 1,
                    s = t(e),
                    n = null,
                    r = [];
                return s.each(function() {
                    var e = t(this),
                        s = e.offset().top - i(e.css("margin-top")),
                        a = r.length > 0 ? r[r.length - 1] : null;
                    null === a ? r.push(e) : Math.floor(Math.abs(n - s)) <= o ? r[r.length - 1] = a.add(e) : r.push(e), n = s
                }), r
            },
            n = function(e) {
                var o = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
            },
            r = t.fn.matchHeight = function(e) {
                var o = n(e);
                if (o.remove) {
                    var i = this;
                    return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                        e.elements = e.elements.not(i)
                    }), this
                }
                return this.length <= 1 && !o.target ? this : (r._groups.push({
                    elements: this,
                    options: o
                }), r._apply(this, o), this)
            };
        r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = s, r._parse = i, r._parseOptions = n, r._apply = function(e, o) {
            var a = n(o),
                h = t(e),
                c = [h],
                l = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return u.each(function() {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), u.css("display", "block"), a.byRow && !a.target && (h.each(function() {
                var e = t(this),
                    o = e.css("display");
                "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = s(h), h.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(c, function(e, o) {
                var s = t(o),
                    n = 0;
                if (a.target) n = a.target.outerHeight(!1);
                else {
                    if (a.byRow && s.length <= 1) return void s.css(a.property, "");
                    s.each(function() {
                        var e = t(this),
                            o = e.attr("style"),
                            i = e.css("display");
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                        var s = {
                            display: i
                        };
                        s[a.property] = "", e.css(s), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                    })
                }
                s.each(function() {
                    var e = t(this),
                        o = 0;
                    a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(a.property, n - o + "px"))
                })
            }), u.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    i = o.attr("data-mh") || o.attr("data-match-height");
                i in e ? e[i] = e[i].add(o) : e[i] = o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function(i, s) {
            if (s && "resize" === s.type) {
                var n = t(window).width();
                if (n === e) return;
                e = n
            }
            i ? o === -1 && (o = setTimeout(function() {
                    a(s), o = -1
                }, r._throttle)) : a(s)
        }, t(r._applyDataApi);
        var h = t.fn.on ? "on" : "bind";
        t(window)[h]("load", function(t) {
            r._update(!1, t)
        }), t(window)[h]("resize orientationchange", function(t) {
            r._update(!0, t)
        })
    }), ! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("scrollMonitor", [], e) : "object" == typeof exports ? exports.scrollMonitor = e() : t.scrollMonitor = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (o[i]) return o[i].exports;
            var s = o[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
        }
        var o = {};
        return e.m = t, e.c = o, e.p = "", e(0)
    }([function(t, e, o) {
        "use strict";
        var i = o(1),
            s = i.isInBrowser,
            n = o(2),
            r = new n(s ? document.body : null);
        r.setStateFromDOM(null), r.listenToDOM(), s && (window.scrollMonitor = r), t.exports = r
    }, function(t, e) {
        "use strict";
        e.VISIBILITYCHANGE = "visibilityChange", e.ENTERVIEWPORT = "enterViewport", e.FULLYENTERVIEWPORT = "fullyEnterViewport", e.EXITVIEWPORT = "exitViewport", e.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", e.LOCATIONCHANGE = "locationChange", e.STATECHANGE = "stateChange", e.eventTypes = [e.VISIBILITYCHANGE, e.ENTERVIEWPORT, e.FULLYENTERVIEWPORT, e.EXITVIEWPORT, e.PARTIALLYEXITVIEWPORT, e.LOCATIONCHANGE, e.STATECHANGE], e.isOnServer = "undefined" == typeof window, e.isInBrowser = !e.isOnServer, e.defaultOffsets = {
            top: 0,
            bottom: 0
        }
    }, function(t, e, o) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t) {
            return h ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight
        }

        function n(t) {
            return h ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight
        }

        function r(t) {
            return h ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop
        }
        var a = o(1),
            h = a.isOnServer,
            c = a.isInBrowser,
            l = a.eventTypes,
            p = o(3),
            u = function() {
                function t(e, o) {
                    function a() {
                        if (c.viewportTop = r(e), c.viewportBottom = c.viewportTop + c.viewportHeight, c.documentHeight = n(e), c.documentHeight !== p) {
                            for (u = c.watchers.length; u--;) c.watchers[u].recalculateLocation();
                            p = c.documentHeight
                        }
                    }

                    function h() {
                        for (d = c.watchers.length; d--;) c.watchers[d].update();
                        for (d = c.watchers.length; d--;) c.watchers[d].triggerCallbacks()
                    }
                    i(this, t);
                    var c = this;
                    this.item = e, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = n(e), this.viewportHeight = s(e), this.DOMListener = function() {
                        t.prototype.DOMListener.apply(c, arguments)
                    }, this.eventTypes = l, o && (this.containerWatcher = o.create(e));
                    var p, u, d;
                    this.update = function() {
                        a(), h()
                    }, this.recalculateLocations = function() {
                        this.documentHeight = 0, this.update()
                    }
                }
                return t.prototype.listenToDOM = function() {
                    c && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener) : this.item.addEventListener("scroll", this.DOMListener), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function() {
                        window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener))
                    })
                }, t.prototype.destroy = function() {}, t.prototype.DOMListener = function(t) {
                    this.setStateFromDOM(t), this.updateAndTriggerWatchers(t)
                }, t.prototype.setStateFromDOM = function(t) {
                    var e = r(this.item),
                        o = s(this.item),
                        i = n(this.item);
                    this.setState(e, o, i, t)
                }, t.prototype.setState = function(t, e, o, i) {
                    var s = e !== this.viewportHeight || o !== this.contentHeight;
                    if (this.latestEvent = i, this.viewportTop = t, this.viewportHeight = e, this.viewportBottom = t + e, this.contentHeight = o, s)
                        for (var n = this.watchers.length; n--;) this.watchers[n].recalculateLocation();
                    this.updateAndTriggerWatchers(i)
                }, t.prototype.updateAndTriggerWatchers = function(t) {
                    for (var e = this.watchers.length; e--;) this.watchers[e].update();
                    for (e = this.watchers.length; e--;) this.watchers[e].triggerCallbacks(t)
                }, t.prototype.createCustomContainer = function() {
                    return new t
                }, t.prototype.createContainer = function(e) {
                    "string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);
                    var o = new t(e, this);
                    return o.setStateFromDOM(), o.listenToDOM(), o
                }, t.prototype.create = function(t, e) {
                    "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
                    var o = new p(this, t, e);
                    return this.watchers.push(o), o
                }, t.prototype.beget = function(t, e) {
                    return this.create(t, e)
                }, t
            }();
        t.exports = u
    }, function(t, e, o) {
        "use strict";

        function i(t, e, o) {
            function i(t, e) {
                if (0 !== t.length)
                    for (b = t.length; b--;) T = t[b], T.callback.call(s, e, s), T.isOne && t.splice(b, 1)
            }
            var s = this;
            this.watchItem = e, this.container = t, o ? o === +o ? this.offsets = {
                top: o,
                bottom: o
            } : this.offsets = {
                top: o.top || d.top,
                bottom: o.bottom || d.bottom
            } : this.offsets = d, this.callbacks = {};
            for (var f = 0, m = u.length; f < m; f++) s.callbacks[u[f]] = [];
            this.locked = !1;
            var w, y, g, v, b, T;
            this.triggerCallbacks = function(t) {
                switch (this.isInViewport && !w && i(this.callbacks[r], t), this.isFullyInViewport && !y && i(this.callbacks[a], t), this.isAboveViewport !== g && this.isBelowViewport !== v && (i(this.callbacks[n], t), y || this.isFullyInViewport || (i(this.callbacks[a], t), i(this.callbacks[c], t)), w || this.isInViewport || (i(this.callbacks[r], t), i(this.callbacks[h], t))), !this.isFullyInViewport && y && i(this.callbacks[c], t), !this.isInViewport && w && i(this.callbacks[h], t), this.isInViewport !== w && i(this.callbacks[n], t), !0) {
                    case w !== this.isInViewport:
                    case y !== this.isFullyInViewport:
                    case g !== this.isAboveViewport:
                    case v !== this.isBelowViewport:
                        i(this.callbacks[p], t)
                }
                w = this.isInViewport, y = this.isFullyInViewport, g = this.isAboveViewport, v = this.isBelowViewport
            }, this.recalculateLocation = function() {
                if (!this.locked) {
                    var t = this.top,
                        e = this.bottom;
                    if (this.watchItem.nodeName) {
                        var o = this.watchItem.style.display;
                        "none" === o && (this.watchItem.style.display = "");
                        for (var s = 0, n = this.container; n.containerWatcher;) s += n.containerWatcher.top - n.containerWatcher.container.viewportTop, n = n.containerWatcher.container;
                        var r = this.watchItem.getBoundingClientRect();
                        this.top = r.top + this.container.viewportTop - s, this.bottom = r.bottom + this.container.viewportTop - s, "none" === o && (this.watchItem.style.display = o)
                    } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || i(this.callbacks[l], null)
                }
            }, this.recalculateLocation(), this.update(), w = this.isInViewport, y = this.isFullyInViewport, g = this.isAboveViewport, v = this.isBelowViewport
        }
        var s = o(1),
            n = s.VISIBILITYCHANGE,
            r = s.ENTERVIEWPORT,
            a = s.FULLYENTERVIEWPORT,
            h = s.EXITVIEWPORT,
            c = s.PARTIALLYEXITVIEWPORT,
            l = s.LOCATIONCHANGE,
            p = s.STATECHANGE,
            u = s.eventTypes,
            d = s.defaultOffsets;
        i.prototype = {
            on: function(t, e, o) {
                switch (!0) {
                    case t === n && !this.isInViewport && this.isAboveViewport:
                    case t === r && this.isInViewport:
                    case t === a && this.isFullyInViewport:
                    case t === h && this.isAboveViewport && !this.isInViewport:
                    case t === c && this.isAboveViewport:
                        if (e.call(this, this.container.latestEvent, this), o) return
                }
                if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));
                this.callbacks[t].push({
                    callback: e,
                    isOne: o || !1
                })
            },
            off: function(t, e) {
                if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));
                for (var o, i = 0; o = this.callbacks[t][i]; i++)
                    if (o.callback === e) {
                        this.callbacks[t].splice(i, 1);
                        break
                    }
            },
            one: function(t, e) {
                this.on(t, e, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var t = this.container.watchers.indexOf(this),
                    e = this;
                this.container.watchers.splice(t, 1);
                for (var o = 0, i = u.length; o < i; o++) e.callbacks[u[o]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var f = function(t) {
            return function(e, o) {
                this.on.call(this, t, e, o)
            }
        }, m = 0, w = u.length; m < w; m++) {
            var y = u[m];
            i.prototype[y] = f(y)
        }
        t.exports = i
    }])
}), ! function(t) {
    "use strict";
    var e = function(e, o) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, o), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var e = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var o = this.stringsElement.children();
                t.each(o, function(o, i) {
                    e.strings.push(t(i).html())
                })
            }
            this.init()
        },
        typewrite: function(t, e) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var o = 0,
                        s = t.substr(e);
                    if ("^" === s.charAt(0)) {
                        var n = 1;
                        /^\^\d+/.test(s) && (s = /\d+/.exec(s)[0], n += s.length, o = parseInt(s)), t = t.substring(0, e) + t.substring(e + n)
                    }
                    if ("html" === i.contentType) {
                        var r = t.substr(e).charAt(0);
                        if ("<" === r || "&" === r) {
                            var a = "",
                                h = "";
                            for (h = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== h && (a += t.substr(e).charAt(0), e++, !(e + 1 > t.length)););
                            e++, a += h
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (e === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(t, e)
                            }, i.backDelay)
                        } else {
                            0 === e && i.options.preStringTyped(i.arrayPos);
                            var o = t.substr(0, e + 1);
                            i.attr ? i.el.attr(i.attr, o) : i.isInput ? i.el.val(o) : "html" === i.contentType ? i.el.html(o) : i.el.text(o), e++, i.typewrite(t, e)
                        }
                    }, o)
                }, o)
            }
        },
        backspace: function(t, e) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    if ("html" === i.contentType && ">" === t.substr(e).charAt(0)) {
                        for (var o = "";
                             "<" !== t.substr(e - 1).charAt(0) && (o -= t.substr(e).charAt(0), e--, !(e < 0)););
                        e--, o += "<"
                    }
                    var s = t.substr(0, e);
                    i.attr ? i.el.attr(i.attr, s) : i.isInput ? i.el.val(s) : "html" === i.contentType ? i.el.html(s) : i.el.text(s), e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
                }, o)
            }
        },
        shuffleArray: function(t) {
            var e, o, i = t.length;
            if (i)
                for (; --i;) o = Math.floor(Math.random() * (i + 1)), e = t[o], t[o] = t[i], t[i] = e;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function(o) {
        return this.each(function() {
            var i = t(this),
                s = i.data("typed"),
                n = "object" == typeof o && o;
            s && s.reset(), i.data("typed", s = new e(this, n)), "string" == typeof o && s[o]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery), jQuery.fn.decodeEffect = function(t) {
    function e(t, e) {
        var o, i, s = "";
        for (o = 0; o < e; o++) i = Math.random() * t.length, s += t[0 | i];
        return s
    }

    function o(o, i) {
        var s = o.data('text'),
            n = t("<span/>").addClass(i.className).insertAfter(o),
            r = i.duration / (s.length * i.stepsPerGlyph),
            a = 0,
            h = 0,
            c = function() {
                ++a % i.stepsPerGlyph === 0 && (h++, o.text(s.slice(0, h))), h <= s.length ? (n.text(e(i.codeGlyphs, s.length - h)), setTimeout(c, r)) : n.remove()
            };
        o.text(""), c()
    }
    var i = {
        duration: 3e3,
        stepsPerGlyph: 10,
        codeGlyphs: "█▓▒░█▓▒░█▓▒░<>/",
        className: "code"
    };
    return function(e) {
        return e = t.extend({}, i, e || {}), this.each(function() {
            o(t(this), e)
        })
    }
}(jQuery), $(document).ready(function() {
    $(".match-height").matchHeight(), $(".mobile-nav-trigger").click(function() {
        console.log("clicked"), $("body").toggleClass("mobile-nav-active")
    }), $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html, body").animate({
                scrollTop: t.offset().top
            }, 500), !1
        }
    });
    var t = $(".hero-search-example");
    var strings = ['<span class="hero-search-string" data-search="hero-search-shirts"><span class="tooltip tooltip-above tooltip-magenta tooltip-attribute">blue</span> <span class="tooltip tooltip-below tooltip-tomato tooltip-utilization">dress</span> <span class="tooltip tooltip-above tooltip-orange tooltip-category">shirt</span></span>', '<span class="hero-search-string" data-search="hero-search-chairs"><span class="tooltip tooltip-above tooltip-orange tooltip-category">chair</span> <span class="tooltip tooltip-below tooltip-orange-dark tooltip-existent-marker">with</span> <span class="tooltip tooltip-above tooltip-tomato tooltip-attribute">wooden</span> <span class="tooltip tooltip-below tooltip-magenta tooltip-component">legs</span></span>', '<span class="hero-search-string" data-search="hero-search-phones"><span class="tooltip tooltip-above tooltip-magenta tooltip-attribute">5 inch</span> <span class="tooltip tooltip-below tooltip-tomato tooltip-attribute">android</span> <span class="tooltip tooltip-above tooltip-orange tooltip-category">phone</span></span>'].sort(function() {
        return .5 - Math.random()
    });
    $(t).addClass("hero-search-example-animated"), $(".hero-search-box-string").typed({
        strings: strings,
        contentType: "html",
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 4e3,
        loop: !0,
        onStringTyped: function() {
            var t = $(".hero-search-string"),
                e = t.attr("data-search");
            $(t).addClass("hero-search-string-animated"), $("#" + e).addClass("hero-search-items-animated"), setTimeout(function() {
                $(t).removeClass("hero-search-string-animated"), $("#" + e).removeClass("hero-search-items-animated")
            }, 5e3)
        }
    });
    var o = $(".search-item-details"),
        i = scrollMonitor.create(o, 100);
    i.enterViewport(function() {
        $(".search-item-detail").each(function() {
            $(".string", this).decodeEffect()
        })
    }), $(".question").each(function() {
        $(".question-title", this).click(function() {
            $(this).parents(".question").toggleClass("question-active")
        })
    })
});