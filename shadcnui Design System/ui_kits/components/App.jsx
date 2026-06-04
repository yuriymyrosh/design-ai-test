// shadcn/ui UI Kit — interactive demo app (Dashboard + Settings).
// Assembled entirely from the kit primitives.

function TopNav({ page, setPage, onLogout }) {
  return (
    <header className="app-nav">
      <div className="app-nav-left">
        <span className="app-logo"><span className="app-logo-dot" />shadcn/ui</span>
        <nav className="app-tabs">
          <button className={cx("app-tablink", page === "dashboard" && "active")} onClick={() => setPage("dashboard")}>Overview</button>
          <button className={cx("app-tablink", page === "customers" && "active")} onClick={() => setPage("customers")}>Customers</button>
          <button className={cx("app-tablink", page === "settings" && "active")} onClick={() => setPage("settings")}>Settings</button>
        </nav>
      </div>
      <div className="app-nav-right">
        <div className="app-search">
          <Icon name="search" size={16} style={{ color: "var(--muted-foreground)" }} />
          <input placeholder="Search…" />
        </div>
        <Button variant="ghost" size="icon"><Icon name="bell" size={18} /></Button>
        <DropdownMenu trigger={<button className="app-avatar-btn"><Avatar src="../../assets/avatar.jpg" fallback="SC" size={36} /></button>}>
          <MenuLabel>My Account</MenuLabel>
          <MenuSeparator />
          <MenuItem icon="user">Profile</MenuItem>
          <MenuItem icon="credit-card">Billing</MenuItem>
          <MenuItem icon="settings" onClick={() => setPage("settings")}>Settings</MenuItem>
          <MenuSeparator />
          <MenuItem icon="log-out" destructive onClick={onLogout}>Log out</MenuItem>
        </DropdownMenu>
      </div>
    </header>
  );
}

const STATS = [
  { label: "Total Revenue", value: "$45,231.89", delta: "+20.1% from last month", icon: "dollar-sign" },
  { label: "Subscriptions", value: "+2,350", delta: "+180.1% from last month", icon: "users" },
  { label: "Sales", value: "+12,234", delta: "+19% from last month", icon: "credit-card" },
  { label: "Active Now", value: "+573", delta: "+201 since last hour", icon: "activity" },
];

const MEMBERS = [
  { name: "Sofia Davis", email: "sofia.davis@email.com", role: "Owner", fb: "SD" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", role: "Member", fb: "JL" },
  { name: "Isabella Nguyen", email: "isabella@email.com", role: "Member", fb: "IN" },
  { name: "William Kim", email: "will@email.com", role: "Billing", fb: "WK" },
];

function Dashboard({ onCreate }) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1 className="ds-h2">Dashboard</h1>
          <p className="ds-muted" style={{ marginTop: 4 }}>An overview of your workspace activity.</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="outline"><Icon name="calendar" size={16} />Jan 20, 2024</Button>
          <Button onClick={onCreate}><Icon name="plus" size={16} />Create</Button>
        </div>
      </div>

      <div className="stat-grid">
        {STATS.map(s => (
          <Card key={s.label}>
            <div className="stat-card">
              <div className="stat-top">
                <span className="ds-small" style={{ fontWeight: 500 }}>{s.label}</span>
                <Icon name={s.icon} size={16} style={{ color: "var(--muted-foreground)" }} />
              </div>
              <div className="stat-value">{s.value}</div>
              <div className="ds-muted" style={{ fontSize: 12 }}>{s.delta}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="dash-cols">
        <Card>
          <CardHeader><CardTitle>Recent activity</CardTitle><CardDescription>A weekly snapshot of revenue.</CardDescription></CardHeader>
          <CardContent>
            <div className="chart">
              {[40, 65, 45, 80, 55, 95, 70, 60, 88, 50, 75, 92].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Team members</CardTitle><CardDescription>Invite your team to collaborate.</CardDescription></CardHeader>
          <CardContent style={{ paddingTop: 4, display: "flex", flexDirection: "column", gap: 16 }}>
            {MEMBERS.map(m => (
              <div key={m.email} className="member">
                <Avatar fallback={m.fb} size={36} />
                <div className="member-meta">
                  <span className="member-name">{m.name}</span>
                  <span className="ds-muted" style={{ fontSize: 13 }}>{m.email}</span>
                </div>
                <Badge variant={m.role === "Owner" ? "default" : "secondary"}>{m.role}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Customers() {
  const rows = [
    { ...MEMBERS[0], status: "Active", spend: "$1,999.00" },
    { ...MEMBERS[1], status: "Active", spend: "$39.00" },
    { ...MEMBERS[2], status: "Pending", spend: "$299.00" },
    { ...MEMBERS[3], status: "Active", spend: "$99.00" },
  ];
  return (
    <div className="page">
      <div className="page-head">
        <div><h1 className="ds-h2">Customers</h1><p className="ds-muted" style={{ marginTop: 4 }}>Manage your customers and their subscriptions.</p></div>
        <Button><Icon name="plus" size={16} />Add customer</Button>
      </div>
      <Card>
        <div className="tbl">
          <div className="tbl-row tbl-head">
            <span>Name</span><span>Status</span><span>Role</span><span style={{ textAlign: "right" }}>Spend</span>
          </div>
          {rows.map(r => (
            <div key={r.email} className="tbl-row">
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar fallback={r.fb} size={32} />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span className="member-name">{r.name}</span>
                  <span className="ds-muted" style={{ fontSize: 12 }}>{r.email}</span>
                </span>
              </span>
              <span><Badge variant={r.status === "Active" ? "secondary" : "outline"}>{r.status}</Badge></span>
              <span className="ds-muted" style={{ fontSize: 14 }}>{r.role}</span>
              <span style={{ textAlign: "right", fontWeight: 500, fontSize: 14 }}>{r.spend}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Settings() {
  const [tab, setTab] = React.useState("account");
  const [name, setName] = React.useState("Sofia Davis");
  const [email, setEmail] = React.useState("sofia.davis@email.com");
  const [prefs, setPrefs] = React.useState({ marketing: true, social: false, security: true });
  const [terms, setTerms] = React.useState(true);
  return (
    <div className="page">
      <div className="page-head"><div><h1 className="ds-h2">Settings</h1><p className="ds-muted" style={{ marginTop: 4 }}>Manage your account settings and preferences.</p></div></div>
      <Tabs value={tab} onChange={setTab} tabs={[
        { value: "account", label: "Account" },
        { value: "notifications", label: "Notifications" },
        { value: "billing", label: "Billing" },
      ]} />

      {tab === "account" && (
        <Card style={{ maxWidth: 560 }}>
          <CardHeader><CardTitle>Account</CardTitle><CardDescription>Update your profile. Click save when you're done.</CardDescription></CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="field"><Label>Name</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
            <div className="field"><Label>Email</Label><Input value={email} onChange={e => setEmail(e.target.value)} /><span className="ds-muted" style={{ fontSize: 13 }}>This is the address we'll use to contact you.</span></div>
            <label className="check-row"><Checkbox checked={terms} onChange={setTerms} />Accept terms and conditions</label>
          </CardContent>
          <CardFooter><Button>Save changes</Button><Button variant="ghost">Cancel</Button></CardFooter>
        </Card>
      )}

      {tab === "notifications" && (
        <Card style={{ maxWidth: 560 }}>
          <CardHeader><CardTitle>Notifications</CardTitle><CardDescription>Choose what you want to be notified about.</CardDescription></CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { k: "marketing", t: "Marketing emails", d: "Receive emails about new products and features." },
              { k: "social", t: "Social notifications", d: "Mentions, follows and replies." },
              { k: "security", t: "Security emails", d: "Activity and password changes. Always on for safety." },
            ].map(row => (
              <div key={row.k} className="switch-row">
                <div className="switch-meta"><span className="member-name" style={{ fontSize: 14 }}>{row.t}</span><span className="ds-muted" style={{ fontSize: 13 }}>{row.d}</span></div>
                <Switch checked={prefs[row.k]} onChange={v => setPrefs(p => ({ ...p, [row.k]: v }))} />
              </div>
            ))}
          </CardContent>
          <CardFooter><Button>Save preferences</Button></CardFooter>
        </Card>
      )}

      {tab === "billing" && (
        <Card style={{ maxWidth: 560 }}>
          <CardHeader><CardTitle>Billing</CardTitle><CardDescription>You are currently on the Pro plan.</CardDescription></CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="plan">
              <div><div className="member-name">Pro plan</div><span className="ds-muted" style={{ fontSize: 13 }}>$39 / month · renews Feb 1, 2024</span></div>
              <Badge>Active</Badge>
            </div>
            <div className="field"><Label>Card number</Label><Input value="•••• •••• •••• 4242" onChange={() => {}} /></div>
          </CardContent>
          <CardFooter><Button variant="outline">Change plan</Button><Button variant="destructive">Cancel subscription</Button></CardFooter>
        </Card>
      )}
    </div>
  );
}

function Login({ onLogin }) {
  return (
    <div className="login-wrap">
      <Card style={{ width: 380 }}>
        <CardHeader><CardTitle style={{ fontSize: 24 }}>Login</CardTitle><CardDescription>Enter your email below to login to your account.</CardDescription></CardHeader>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="field"><Label>Email</Label><Input placeholder="m@example.com" /></div>
          <div className="field"><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
        </CardContent>
        <CardFooter style={{ flexDirection: "column", gap: 10 }}>
          <Button style={{ width: "100%" }} onClick={onLogin}>Sign in</Button>
          <Button variant="outline" style={{ width: "100%" }} onClick={onLogin}><Icon name="mail" size={16} />Login with Email</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function App() {
  const [authed, setAuthed] = React.useState(false);
  const [page, setPage] = React.useState("dashboard");
  const [dialog, setDialog] = React.useState(false);

  if (!authed) return <Login onLogin={() => setAuthed(true)} />;

  return (
    <div className="app">
      <TopNav page={page} setPage={setPage} onLogout={() => setAuthed(false)} />
      <main className="app-main">
        {page === "dashboard" && <Dashboard onCreate={() => setDialog(true)} />}
        {page === "customers" && <Customers />}
        {page === "settings" && <Settings />}
      </main>

      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogHeader>
          <DialogTitle>Create project</DialogTitle>
          <DialogDescription>Deploy your new project in one click. You can change settings later.</DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="field"><Label>Project name</Label><Input placeholder="acme-web" onChange={() => {}} /></div>
          <div className="field"><Label>Framework</Label><Input value="Next.js" onChange={() => {}} /></div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDialog(false)}>Cancel</Button>
          <Button onClick={() => setDialog(false)}>Deploy</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
