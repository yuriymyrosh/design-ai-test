// Overlays — DropdownMenu + Dialog (modal). Cosmetic shadcn recreations.

/* ---------------- DropdownMenu ---------------- */
function DropdownMenu({ trigger, children, align = "end" }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <div className="ui-dd" ref={ref}>
      <div onClick={() => setOpen(o => !o)}>{trigger}</div>
      {open && (
        <div className={cx("ui-dd-menu", `al-${align}`)} onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
}
function MenuLabel({ children }) { return <div className="ui-dd-label">{children}</div>; }
function MenuItem({ children, icon, onClick, destructive }) {
  return (
    <button className={cx("ui-dd-item", destructive && "destructive")} onClick={onClick}>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
    </button>
  );
}
function MenuSeparator() { return <div className="ui-dd-sep" />; }

/* ---------------- Dialog ---------------- */
function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="ui-overlay" onClick={onClose}>
      <div className="ui-dialog" onClick={e => e.stopPropagation()}>
        <button className="ui-dialog-x" onClick={onClose} aria-label="Close">
          <Icon name="x" size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}
function DialogHeader({ children }) { return <div className="ui-dialog-hd">{children}</div>; }
function DialogTitle({ children }) { return <div className="ui-dialog-title">{children}</div>; }
function DialogDescription({ children }) { return <div className="ui-dialog-desc">{children}</div>; }
function DialogFooter({ children }) { return <div className="ui-dialog-ft">{children}</div>; }

Object.assign(window, {
  DropdownMenu, MenuLabel, MenuItem, MenuSeparator,
  Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
});
