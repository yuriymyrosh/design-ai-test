// shadcn/ui primitives — cosmetic recreations.
// Tokens come from colors_and_type.css (var(--primary) etc.).

function cx(...a) { return a.filter(Boolean).join(" "); }

/* ---------------- Button ---------------- */
function Button({ variant = "default", size = "default", children, onClick, disabled, style }) {
  return (
    <button className={cx("ui-btn", `v-${variant}`, `s-${size}`)} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}

/* ---------------- Input + Label ---------------- */
function Label({ children, htmlFor }) {
  return <label className="ui-label" htmlFor={htmlFor}>{children}</label>;
}
function Input({ value, onChange, placeholder, type = "text", id, style }) {
  return <input id={id} className="ui-input" type={type} value={value}
                onChange={onChange} placeholder={placeholder} style={style} />;
}

/* ---------------- Badge ---------------- */
function Badge({ variant = "default", children }) {
  return <span className={cx("ui-badge", `b-${variant}`)}>{children}</span>;
}

/* ---------------- Card ---------------- */
function Card({ children, style }) { return <div className="ui-card" style={style}>{children}</div>; }
function CardHeader({ children }) { return <div className="ui-card-hd">{children}</div>; }
function CardTitle({ children }) { return <div className="ui-card-title">{children}</div>; }
function CardDescription({ children }) { return <div className="ui-card-desc">{children}</div>; }
function CardContent({ children, style }) { return <div className="ui-card-content" style={style}>{children}</div>; }
function CardFooter({ children }) { return <div className="ui-card-ft">{children}</div>; }

/* ---------------- Switch ---------------- */
function Switch({ checked, onChange }) {
  return (
    <button role="switch" aria-checked={checked} className={cx("ui-switch", checked && "on")}
            onClick={() => onChange(!checked)}>
      <span className="knob" />
    </button>
  );
}

/* ---------------- Checkbox ---------------- */
function Checkbox({ checked, onChange }) {
  return (
    <button role="checkbox" aria-checked={checked} className={cx("ui-checkbox", checked && "on")}
            onClick={() => onChange(!checked)}>
      {checked && <Icon name="check" size={12} strokeWidth={3} />}
    </button>
  );
}

/* ---------------- Avatar ---------------- */
function Avatar({ src, fallback, size = 40 }) {
  const [err, setErr] = React.useState(false);
  return (
    <span className="ui-avatar" style={{ width: size, height: size }}>
      {src && !err
        ? <img src={src} alt="" onError={() => setErr(true)} />
        : <span className="ui-avatar-fb">{fallback}</span>}
    </span>
  );
}

/* ---------------- Tabs ---------------- */
function Tabs({ tabs, value, onChange }) {
  return (
    <div className="ui-tabs">
      {tabs.map(t => (
        <button key={t.value} className={cx("ui-tab", value === t.value && "active")}
                onClick={() => onChange(t.value)}>{t.label}</button>
      ))}
    </div>
  );
}

/* ---------------- Separator ---------------- */
function Separator() { return <div className="ui-separator" />; }

Object.assign(window, {
  cx, Button, Label, Input, Badge,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Switch, Checkbox, Avatar, Tabs, Separator,
});
