/* @ds-bundle: {"format":4,"namespace":"PulsarMediaDesignSystem_2a6ee6","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"db4f2f6e64e1","components/core/Badge.jsx":"c57d5e2cbffc","components/core/Button.jsx":"98792ee08bcb","components/core/Card.jsx":"faab46556bcd","components/core/Icon.jsx":"9de1785a1fa2","components/core/Stat.jsx":"af71cee87871","components/core/Tag.jsx":"f44b7f093e65","components/forms/Input.jsx":"4da4d8ffb007","ui_kits/website/Site.jsx":"09386705e421"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PulsarMediaDesignSystem_2a6ee6 = window.PulsarMediaDesignSystem_2a6ee6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Logo — composes the vector symbol with the wordmark.
 *
 * The symbol is a crisp SVG in /assets. Pass `symbolSrc` with the correct
 * relative path to /assets for your page depth. Colors: green (default, the
 * primary lockup), navy, white, amber. The wordmark defaults to navy (light
 * surfaces); pass wordmarkColor="white" (or color="white") on dark blocks.
 * When `symbolSrc` is omitted the mark falls back to the wordmark alone.
 */
function Logo({
  variant = 'lockup',
  // 'lockup' | 'symbol' | 'stacked'
  color = 'green',
  // 'green' | 'navy' | 'white' | 'amber'
  descriptor = false,
  // append "MEDIA"
  height = 40,
  symbolSrc,
  wordmarkColor,
  style,
  ...rest
}) {
  const file = {
    amber: 'pulsar-symbol-amber.svg',
    green: 'pulsar-symbol-green.svg',
    white: 'pulsar-symbol-white.svg',
    navy: 'pulsar-symbol-navy.svg'
  }[color] || 'pulsar-symbol-green.svg';
  const base = symbolSrc ? symbolSrc.replace(/\/$/, '') : null;
  const src = base ? `${base}/${file}` : null;
  // Official vector wordmark (PULSAR MEDIA). Navy on light (default), white on dark.
  const wmFile = wordmarkColor === 'white' || color === 'white' ? 'pulsar-wordmark-white.svg' : 'pulsar-wordmark-navy.svg';
  const wmSrc = base ? `${base}/${wmFile}` : null;
  const symbol = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Pulsar",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }) : null;

  // Real vector wordmark inherits the lockup's own proportions (~0.6× symbol height).
  const wordmark = wmSrc ? /*#__PURE__*/React.createElement("img", {
    src: wmSrc,
    alt: "PULSAR MEDIA",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }) : null;
  if (variant === 'symbol') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), symbol);
  }
  if (variant === 'stacked') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: height * 0.22,
        ...style
      }
    }, rest), symbol, wordmark);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: height * 0.32,
      ...style
    }
  }, rest), symbol, wordmark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Badge — status indicator with a leading dot.
 */
function Badge({
  children,
  status = 'neutral',
  style,
  ...rest
}) {
  const map = {
    neutral: 'var(--text-faint)',
    success: 'var(--status-success)',
    info: 'var(--status-info)',
    warning: 'var(--status-warning)',
    danger: 'var(--status-danger)'
  };
  const c = map[status] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${c} 22%, transparent)`
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Button — the brand's action control.
 * `primary` is the institutional navy (flips to signature-green inside a
 * .pulsar-invert dark block). `signature` is the green that sings — reserve
 * it for the one hero CTA. Keep one primary per view.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '0 14px',
      height: 34,
      gap: 7
    },
    md: {
      fontSize: 15,
      padding: '0 20px',
      height: 42,
      gap: 9
    },
    lg: {
      fontSize: 16,
      padding: '0 28px',
      height: 52,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--primary-ink)',
      border: '1px solid transparent'
    },
    signature: {
      background: 'var(--pulsar-green)',
      color: 'var(--pulsar-navy)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--pulsar-blue)',
      color: 'var(--pulsar-white)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 600,
      letterSpacing: '0.01em',
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = variant === 'ghost' ? 'brightness(1.2)' : 'brightness(1.06)';
    }
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Card — surface container. Flat by default (the brand prefers
 * poster-like blocks over heavy shadow); adapts to light or .pulsar-invert
 * dark blocks via tokens. `accent` paints a thin top keyline; `hover` lifts
 * with a green border echoing the signal accent.
 */
function Card({
  children,
  accent,
  hover = false,
  padding = 24,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const accentColor = accent === 'green' ? 'var(--pulsar-green)' : accent === 'cyan' ? 'var(--pulsar-cyan)' : accent === 'amber' ? 'var(--pulsar-amber)' : accent === 'periwinkle' ? 'var(--pulsar-periwinkle)' : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      color: 'var(--text-body)',
      transition: 'transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      transform: h ? 'translateY(-2px)' : 'none',
      borderColor: h ? 'color-mix(in srgb, var(--pulsar-green) 45%, var(--border-subtle))' : 'var(--border-subtle)',
      overflow: 'hidden',
      ...style
    }
  }, rest), accentColor ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: accentColor
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Icon — thin monoline glyphs (Lucide) matching the symbol's stroke feel.
 * Renders a Lucide <i data-lucide> node and (re)hydrates it via the global
 * `lucide` UMD script. Consumers must load Lucide once on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 */
function Icon({
  name = 'circle',
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Lucide REPLACES the <i data-lucide> placeholder with an <svg>. That node
    // must not be React-owned, or React throws "removeChild … is not a child"
    // on the next re-render — so the placeholder lives inside this wrapper,
    // injected via innerHTML where the reconciler never looks.
    el.innerHTML = '<i data-lucide="' + String(name).replace(/[^a-z0-9-]/gi, '') + '" style="display:inline-flex;width:100%;height:100%"></i>';
    const draw = () => {
      if (window.lucide && el.isConnected) {
        try {
          window.lucide.createIcons({
            nameAttr: 'data-lucide',
            root: el
          });
        } catch (e) {}
      }
    };
    draw();
    const t = setTimeout(draw, 60); // in case the UMD script loads late
    return () => clearTimeout(t);
  }, [name]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      strokeWidth,
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Stat — a big KPI figure with label. The brand shows data/reach with
 * confidence: large display numerals in navy ink, a quiet label. Use tone
 * 'green'/'cyan' on dark or color blocks where the accent can sing.
 */
function Stat({
  value,
  label,
  prefix,
  suffix,
  tone = 'ink',
  align = 'left',
  style,
  ...rest
}) {
  const color = tone === 'green' ? 'var(--pulsar-green)' : tone === 'cyan' ? 'var(--pulsar-cyan)' : tone === 'white' ? 'var(--pulsar-white)' : tone === 'amber' ? 'var(--pulsar-amber)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-lg)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6em',
      verticalAlign: '0.15em',
      marginRight: 2
    }
  }, prefix) : null, value, suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6em',
      verticalAlign: '0.15em',
      marginLeft: 2
    }
  }, suffix) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Tag — small pill for categories, media types, filters.
 * `solid` fills with the brand color (navy/white text); the default soft
 * variant is a low-alpha tint with an AA-safe ink so it reads on white.
 */
function Tag({
  children,
  tone = 'neutral',
  solid = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      fill: 'var(--pulsar-slate-200)',
      ink: 'var(--text-body)',
      on: 'var(--pulsar-ink)'
    },
    green: {
      fill: 'var(--pulsar-green)',
      ink: 'var(--status-success)',
      on: 'var(--pulsar-navy)'
    },
    cyan: {
      fill: 'var(--pulsar-cyan)',
      ink: '#0E7C8C',
      on: 'var(--pulsar-navy)'
    },
    periwinkle: {
      fill: 'var(--pulsar-periwinkle)',
      ink: '#3D4ECB',
      on: 'var(--pulsar-white)'
    },
    amber: {
      fill: 'var(--pulsar-amber)',
      ink: '#A85E00',
      on: 'var(--pulsar-navy)'
    },
    purple: {
      fill: 'var(--pulsar-purple)',
      ink: '#6A21D6',
      on: 'var(--pulsar-white)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const base = solid ? {
    background: t.fill,
    color: t.on,
    border: '1px solid transparent'
  } : {
    background: `color-mix(in srgb, ${t.fill} 16%, transparent)`,
    color: t.ink,
    border: `1px solid color-mix(in srgb, ${t.fill} 40%, transparent)`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pulsar Input — text field. White fill with a hairline border on light;
 * green focus ring echoes the brand's signal accent. Adapts inside a
 * .pulsar-invert dark block via tokens.
 */
function Input({
  label,
  hint,
  leftIcon,
  invalid = false,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 44,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--pulsar-orange)' : focus ? 'var(--pulsar-green)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--pulsar-green) 22%, transparent)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)'
    }
  }, leftIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, rest))), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: invalid ? 'var(--pulsar-orange)' : 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
/* Pulsar Media — institutional website UI kit.
   Composes design-system primitives (Button, Tag, Stat, Card, Icon, Logo).
   Light-first, airy; one dark hero moment. Cosmetic recreation, not production. */

const NS = window.PulsarMediaDesignSystem_2a6ee6;
const {
  Button,
  Tag,
  Stat,
  Card,
  Icon,
  Logo
} = NS;
const A = "../../assets";
function Header({
  onNav
}) {
  const links = ['Empresa', 'Mídia', 'Produtos', 'Cases'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '18px 48px',
      background: 'color-mix(in srgb, var(--pulsar-white) 82%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    color: "green",
    symbolSrc: A,
    height: 30
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 20
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l);
    },
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      fontWeight: 500,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-strong)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "\xC1rea do cliente"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Fale com a Pulsar")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pulsar-invert",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '104px 48px 112px',
      background: 'var(--pulsar-petrol)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/fibre-optic.jpg`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, var(--pulsar-petrol) 32%, color-mix(in srgb, var(--pulsar-petrol) 45%, transparent) 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pulsar-eyebrow",
    style: {
      marginBottom: 20,
      color: 'var(--pulsar-green)'
    }
  }, "Intelig\xEAncia \xB7 M\xEDdia \xB7 Presen\xE7a"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 66,
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      margin: 0,
      color: 'var(--pulsar-white)'
    }
  }, "Transformamos comunica\xE7\xE3o em ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pulsar-green)'
    }
  }, "presen\xE7a"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--pulsar-ink-100)',
      maxWidth: 560,
      marginTop: 22
    }
  }, "Representamos ve\xEDculos, ampliamos marcas e conectamos oportunidades com intelig\xEAncia estrat\xE9gica \u2014 do mercado publicit\xE1rio \xE0 administra\xE7\xE3o p\xFAblica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Conhe\xE7a a Pulsar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Baixar m\xEDdia kit"))));
}
function StatsBand() {
  const items = [{
    v: '320',
    s: '+',
    l: 'Veículos representados'
  }, {
    v: '128',
    s: 'M',
    l: 'Impressões / mês'
  }, {
    v: '4,2',
    s: 'x',
    l: 'Alcance ampliado'
  }, {
    v: '17',
    s: '',
    l: 'Praças no país'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40,
      padding: '56px 48px',
      background: 'var(--pulsar-paper)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: 'var(--pulsar-green)',
      borderRadius: 2,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: i.v,
    suffix: i.s,
    label: i.l
  }))));
}
function Offering() {
  const cards = [{
    icon: 'radio',
    tone: 'green',
    tag: 'Representação',
    title: 'Mídia off & on',
    body: 'Rádio, TV, OOH e portais — planejamento e negociação com inteligência de dados.'
  }, {
    icon: 'sparkles',
    tone: 'cyan',
    tag: 'Produtos próprios',
    title: 'Mídia digital',
    body: 'Display, vídeo e áudio programático desenvolvidos pela Pulsar.'
  }, {
    icon: 'landmark',
    tone: 'periwinkle',
    tag: 'Setor público',
    title: 'Contas públicas',
    body: 'Processos claros e responsáveis, adequados a órgãos e licitações.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pulsar-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "O que fazemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 42,
      letterSpacing: '-0.02em',
      maxWidth: 640,
      margin: '0 0 44px',
      color: 'var(--text-strong)'
    }
  }, "Presen\xE7a que conecta marcas, ve\xEDculos e institui\xE7\xF5es."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    accent: c.tone,
    hover: true,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `color-mix(in srgb, var(--pulsar-${c.tone}) 16%, transparent)`,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    color: "var(--text-strong)"
  })), /*#__PURE__*/React.createElement(Tag, {
    tone: c.tone,
    style: {
      marginBottom: 12
    }
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      margin: '4px 0 8px',
      color: 'var(--text-strong)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      margin: 0,
      lineHeight: 1.55
    }
  }, c.body)))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 16,
      padding: '68px 56px',
      background: 'var(--pulsar-royal)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/pulsar-symbol-white.svg`,
    alt: "",
    style: {
      position: 'absolute',
      right: -30,
      top: -40,
      height: 360,
      opacity: 0.14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 580
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      color: '#fff',
      margin: '0 0 12px',
      letterSpacing: '-0.02em'
    }
  }, "Vamos dar ritmo \xE0 sua m\xEDdia?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.82)',
      fontSize: 17,
      margin: '0 0 28px',
      lineHeight: 1.55
    }
  }, "M\xEDdia \xE9 ritmo, n\xE3o ru\xEDdo. Conte para a gente o seu desafio de comunica\xE7\xE3o."), /*#__PURE__*/React.createElement(Button, {
    variant: "signature",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Falar com um especialista"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 48px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    color: "green",
    symbolSrc: A,
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--text-faint)',
      fontSize: 13
    }
  }, "\xA9 2026 Pulsar Media \xB7 Intelig\xEAncia. M\xEDdia. Presen\xE7a."));
}
function Site() {
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2200);
      return () => clearTimeout(t);
    }
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pulsar-white)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: l => setToast(l)
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Offering, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 40,
      background: 'var(--pulsar-navy)',
      color: '#fff',
      padding: '12px 18px',
      borderRadius: 10,
      fontSize: 14,
      boxShadow: 'var(--shadow-md)'
    }
  }, "Se\xE7\xE3o \u201C", toast, "\u201D \u2014 prot\xF3tipo") : null);
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
