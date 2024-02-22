!(() => {
		function e(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				"value" in n && (n.writable = !0),
				Object.defineProperty(e, n.key, n);
		}
	}
	function t(e, r) {
		return (
			(t = Object.setPrototypeOf
				? Object.setPrototypeOf.bind()
				: ((e, t) => ((e.__proto__ = t), e))),
			t(e, r)
		);
	}
	function r(e) {
		return (
			(r = Object.setPrototypeOf
				? Object.getPrototypeOf.bind()
				: ((e) => e.__proto__ || Object.getPrototypeOf(e))),
			r(e)
		);
	}
	function n() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return (
				Boolean.prototype.valueOf.call(
					Reflect.construct(Boolean, [], () => {}),
				),
				!0
			);
		} catch (e) {
			return !1;
		}
	}
	function i(e) {
		return (
			(i =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? ((e) => typeof e)
					: ((e) => e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e)),
			i(e)
		);
	}
	function o(e, t) {
		if (t && ("object" === i(t) || "function" == typeof t)) return t;
		if (void 0 !== t)
			throw new TypeError(
				"Derived constructors may only return object or undefined",
			);
		return ((e) => {
			if (void 0 === e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called",
				);
			return e;
		})(e);
	}
	function s() {
		return (
			(s = n()
				? Reflect.construct.bind()
				: ((e, r, n) => {
						var i = [null];
						i.push.apply(i, r);
						var o = new (Function.bind.apply(e, i))();
						return n && t(o, n.prototype), o;
				  })),
			s.apply(null, arguments)
		);
	}
	function a(e) {
		var n = "function" == typeof Map ? new Map() : void 0;
		return (
			(a = (e) => {
				function i() {
					return s(e, arguments, r(this).constructor);
				}
				if (
					null === e ||
					((o = e), -1 === Function.toString.call(o).indexOf("[native code]"))
				)
					return e;
				var o;
				if ("function" != typeof e)
					throw new TypeError(
						"Super expression must either be null or a function",
					);
				if (void 0 !== n) {
					if (n.has(e)) return n.get(e);
					n.set(e, i);
				}
				return (
					(i.prototype = Object.create(e.prototype, {
						constructor: {
							value: i,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
					t(i, e)
				);
			}),
			a(e)
		);
	}
	function u(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n;
	}
	function c(e, t) {
		return (
			((e) => {
				if (Array.isArray(e)) return e;
			})(e) ||
			((e, t) => {
				var r =
					null == e
						? null
						: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						  e["@@iterator"];
				if (null != r) {
					var n,
						i,
						o = [],
						s = !0,
						a = !1;
					try {
						for (
							r = r.call(e);
							!(s = (n = r.next()).done) &&
							(o.push(n.value), !t || o.length !== t);
							s = !0
						);
					} catch (e) {
						(a = !0), (i = e);
					} finally {
						try {
							s || null == r.return || r.return();
						} finally {
							if (a) throw i;
						}
					}
					return o;
				}
			})(e, t) ||
			((e, t) => {
				if (e) {
					if ("string" == typeof e) return u(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return (
						"Object" === r && e.constructor && (r = e.constructor.name),
						"Map" === r || "Set" === r
							? Array.from(e)
							: "Arguments" === r ||
								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
							  ? u(e, t)
							  : void 0
					);
				}
			})(e, t) ||
			(() => {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
				);
			})()
		);
	}
	var l,
		f = /^(http(s)?):\/\//,
		h = (e) => {
			if (
				!((e) => f.test(e))(e)
			)
				return null;
			var t;
			try {
				t = new URL(e);
			} catch (r) {
				(t = document.createElement("a")).href = e;
			}
			var r = t.protocol,
				n = t.host,
				i = t.pathname,
				o = t.hash,
				s = /:80$/,
				a = /:443$/;
			return (
				"http:" === r && s.test(n)
					? (n = n.replace(s, ""))
					: "https:" === r && a.test(n) && (n = n.replace(a, "")),
				{
					host: n,
					protocol: r,
					origin: "".concat(r, "//").concat(n),
					pathname: i,
					hash: o,
				}
			);
		},
		m = (e) => {
			var t = h(e);
			return t ? t.origin : null;
		},
		p = h("https://payments.stripe.com"),
		d =
			(p && p.origin,
			new Set([
				"https://checkout.stripe.com",
				"https://checkout.link.com",
				"https://buy.stripe.com",
				"https://book.stripe.com",
				"https://donate.stripe.com",
				"https://js.stripe.com",
			]),
			(e, t) => {
				var r = h(e),
					n = h(t);
				return !(!r || !n) && r.origin === n.origin;
			}),
		y = (e) => d(e, "https://js.stripe.com/v3/"),
		b = "buy-button-app-34f0ce9682127a3eeb36fe0c1c0575de9a3108ac.html",
		v = "https://js.stripe.com/v3/",
		g =
			((l = []),
			{
				addEventListener: (e, t, r, n) => {
					e.addEventListener(t, r, n), l.push([e, t, r, n]);
				},
				removeEventListener: (e, t, r, n) => {
					e.removeEventListener(t, r, n),
						(l = l.filter((i) => ((e, t) => {
								var r = c(e, 4),
									n = r[0],
									i = r[1],
									o = r[2],
									s = r[3],
									a = c(t, 4),
									u = a[0],
									l = a[1],
									f = a[2],
									h = a[3];
								return (
									u !== n ||
									l !== i ||
									f !== o ||
									(!0 === ("object" == typeof s && s ? s.capture : s)) !=
										(!0 === ("object" == typeof h && h ? h.capture : h))
								);
							})([e, t, r, n], i)));
				},
			}),
		I = g.addEventListener,
		w = g.removeEventListener,
		L = document.location.href,
		S = ((i) => {
			function s() {
				var e;
				return (
					((e = h.call(this)).uniqueId = null),
					(e.frame = e.createIframeElement()),
					e.attachShadowDom(),
					e
				);
			}
			!((e, r) => {
				if ("function" != typeof r && null !== r)
					throw new TypeError(
						"Super expression must either be null or a function",
					);
				(e.prototype = Object.create(r && r.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					r && t(e, r);
			})(s, i);
			var a,
				u,
				c,
				l,
				f,
				h =
					((a = s),
					(u = n()),
					function () {
						var e,
							t = r(a);
						if (u) {
							var n = r(this).constructor;
							e = Reflect.construct(t, arguments, n);
						} else e = t.apply(this, arguments);
						return o(this, e);
					});
			return (
				(c = s),
				(f = [
					{
						key: "observedAttributes",
						get: () => [
								"client-reference-id",
								"buy-button-id",
								"publishable-key",
								"__locale-override",
								"customer-email",
								"customer-session-client-secret",
							],
					},
				]),
				(l = [
					{
						key: "connectedCallback",
						value: function () {
							(this.buyButtonId = this.getAttribute("buy-button-id") || void 0),
								(this.publishableApiKey =
									this.getAttribute("publishable-key") || void 0),
								(this.clientReferenceId =
									this.getAttribute("client-reference-id") || void 0),
								(this.customerEmail =
									this.getAttribute("customer-email") || void 0),
								(this.__localeOverride =
									this.getAttribute("__locale-override") || void 0),
								(this.uniqueId = this.createUniqueId()),
								this.setIframeSrc(),
								this.addFrameLoadListener(),
								this.addPostMessageListener(),
								this.addPageShowListener();
						},
					},
					{
						key: "disconnectedCallback",
						value: function () {
							this.removeFrameLoadListener(),
								this.removePostMessageListener(),
								this.removePageShowListener();
						},
					},
					{
						key: "createUniqueId",
						value: () => Math.random().toString(16).slice(2),
					},
					{
						key: "setIframeSrc",
						value: function () {
							var e = this.customerEmail
									? encodeURIComponent(this.customerEmail)
									: void 0,
								t = "#buyButtonId="
									.concat(this.buyButtonId, "&publishableApiKey=")
									.concat(this.publishableApiKey, "&uuid=")
									.concat(this.uniqueId, "&lo=")
									.concat(this.__localeOverride, "&customerEmail=")
									.concat(e),
								r = "";
							(r = "".concat(v).concat(b).concat(t)), (this.frame.src = r);
						},
					},
					{
						key: "frameLoadListenerFunc",
						value: function () {
							this.messageAttributesToIframe();
						},
					},
					{
						key: "messageAttributesToIframe",
						value: function () {
							this.clientReferenceId &&
								this.messageIframe({
									event: "buy-button-client-reference-id",
									data: { clientReferenceId: this.clientReferenceId },
								}),
								this.customerEmail &&
									this.messageIframe({
										event: "buy-button-customer-email",
										data: { customerEmail: this.customerEmail },
									}),
								this.customerSessionClientSecret &&
									this.messageIframe({
										event: "buy-button-customer-session-client-secret",
										data: {
											customerSessionClientSecret:
												this.customerSessionClientSecret,
										},
									});
						},
					},
					{
						key: "addFrameLoadListener",
						value: function () {
							(this.frameLoadListener = this.frameLoadListenerFunc.bind(this)),
								I(this.frame, "load", this.frameLoadListener, !1);
						},
					},
					{
						key: "removeFrameLoadListener",
						value: function () {
							w(this.frame, "load", this.frameLoadListener, !1);
						},
					},
					{
						key: "postMessageListenerFunc",
						value: function (e) {
							if (y(e.origin)) {
								var t = e.data,
									r = t.message.payload.data,
									n = t.message.payload.event,
									i = r.uuid;
								if (null !== r && "object" == typeof r && i === this.uniqueId)
									switch (n) {
										case "buy-button-init":
											this.messageIframe({
												event: "buy-button-outer-data",
												data: { embedLocation: L },
											}),
												this.messageAttributesToIframe();
											break;
										case "buy-button-resize":
											"buy-button-resize" === n &&
												"number" == typeof r.height &&
												r.height &&
												this.frame.height !== r.height &&
												(this.frame.style.setProperty(
													"height",
													"".concat(r.height, "px"),
													"important",
												),
												this.messageIframe({
													event: "buy-button-frame-resize",
												}));
									}
							}
						},
					},
					{
						key: "addPostMessageListener",
						value: function () {
							(this.postMessageListener =
								this.postMessageListenerFunc.bind(this)),
								I(window, "message", this.postMessageListener, !1);
						},
					},
					{
						key: "removePostMessageListener",
						value: function () {
							w(window, "message", this.postMessageListener, !1);
						},
					},
					{
						key: "attachShadowDom",
						value: function () {
							this.attachShadow({ mode: "open" }).appendChild(this.frame);
						},
					},
					{
						key: "reInitializeIframeFunc",
						value: function () {
							this.messageIframe({
								event: "buy-button-outer-data",
								data: { embedLocation: L },
							}),
								this.messageIframe({ event: "buy-button-frame-resize" });
						},
					},
					{
						key: "pageShowListenerFunc",
						value: function (e) {
							e.persisted &&
								(I(this.frame, "load", this.reInitializeIframe, !1),
								(this.frame.src = this.frame.src));
						},
					},
					{
						key: "addPageShowListener",
						value: function () {
							(this.pageShowListener = this.pageShowListenerFunc.bind(this)),
								(this.reInitializeIframe =
									this.reInitializeIframeFunc.bind(this)),
								I(window, "pageshow", this.pageShowListener);
						},
					},
					{
						key: "removePageShowListener",
						value: function () {
							w(window, "pageshow", this.pageShowListener),
								w(this.frame, "load", this.reInitializeIframe, !1);
						},
					},
					{
						key: "createIframeElement",
						value: () => {
							var e = document.createElement("iframe");
							return (
								e.style.setProperty("display", "inline-block", "important"),
								e.style.setProperty("margin", "0px", "important"),
								e.style.setProperty("padding", "0px", "important"),
								e.style.setProperty("userSelect", "none", "important"),
								e.style.setProperty("willChange", "transform", "important"),
								e.style.setProperty("border", "none", "important"),
								e.style.setProperty("margin", "0px", "important"),
								e.style.setProperty("width", "288px", "important"),
								e.style.setProperty("height", "44px", "important"),
								e.style.setProperty(
									"transition",
									"height 0.01s linear",
									"important",
								),
								e.style.setProperty("color-scheme", "only light", "important"),
								e.setAttribute("scrolling", "no"),
								e
							);
						},
					},
					{
						key: "messageIframe",
						value: function (e) {
							var t = m(v);
							if (!t) throw Error("stripe-buy-button: target origin is null");
							this.frame.contentWindow &&
								this.frame.contentWindow.postMessage(
									{ type: "outer", message: { payload: e } },
									t,
								);
						},
					},
					{
						key: "reloadIframe",
						value: function () {
							this.setIframeSrc();
						},
					},
					{
						key: "attributeChangedCallback",
						value: function (e, t, r) {
							switch (e) {
								case "client-reference-id":
									this.messageIframe({
										event: "buy-button-client-reference-id",
										data: { clientReferenceId: r },
									}),
										(this.clientReferenceId = r);
									break;
								case "customer-email":
									this.messageIframe({
										event: "buy-button-customer-email",
										data: { customerEmail: r },
									}),
										(this.customerEmail = r);
									break;
								case "customer-session-client-secret":
									this.messageIframe({
										event: "buy-button-customer-session-client-secret",
										data: { customerSessionClientSecret: r },
									}),
										(this.customerSessionClientSecret = r);
									break;
								case "buy-button-id":
									(this.buyButtonId = r), this.reloadIframe();
									break;
								case "publishable-key":
									(this.publishableApiKey = r), this.reloadIframe();
									break;
								case "__locale-override":
									(this.__localeOverride = r), this.reloadIframe();
							}
						},
					},
				]) && e(c.prototype, l),
				f && e(c, f),
				Object.defineProperty(c, "prototype", { writable: !1 }),
				s
			);
		})(a(HTMLElement)),
		k = S;
	void 0 === customElements.get("stripe-buy-button") &&
		customElements.define("stripe-buy-button", k);
})();
