import { useReducer, useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { BUSINESS, SERVICES, nextDays, baseTaken, slotsFor, fmtTime, fmtDate } from './data.js';

const theme = { bg: '#F3F1F6', ink: '#221B33', muted: '#6B6480', brand: '#5B3FD1', mint: '#BDEBD3', amber: '#F6C453', line: '#DAD5E4', white: '#fff' };
const Global = createGlobalStyle`
  *{box-sizing:border-box} body{margin:0;background:${(p) => p.theme.bg};color:${(p) => p.theme.ink};font-family:'Bricolage Grotesque',system-ui,sans-serif;line-height:1.5}
  button{font:inherit;cursor:pointer} :focus-visible{outline:3px solid ${(p) => p.theme.brand};outline-offset:2px}
  @media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
`;

const Shell = styled.div`max-width:1040px;margin:0 auto;padding:20px 16px 64px`;
const Top = styled.header`display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:28px`;
const Brand = styled.div`font-size:1.25rem;font-weight:700;small{display:block;font-weight:400;color:${(p) => p.theme.muted};font-size:.85rem}`;
const Tabs = styled.div`display:flex;background:${(p) => p.theme.white};border:1px solid ${(p) => p.theme.line};border-radius:999px;padding:4px`;
const Tab = styled.button`border:0;border-radius:999px;padding:8px 16px;background:${(p) => (p.$on ? p.theme.ink : 'transparent')};color:${(p) => (p.$on ? '#fff' : p.theme.ink)}`;
const H1 = styled.h1`font-size:clamp(2rem,5vw,3.4rem);line-height:1.05;margin:0 0 8px;max-width:16ch;letter-spacing:-.02em`;
const Lead = styled.p`color:${(p) => p.theme.muted};max-width:52ch;margin:0 0 28px`;
const Grid = styled.div`display:grid;gap:24px;grid-template-columns:1.5fr 1fr;@media(max-width:820px){grid-template-columns:1fr}`;
const Panel = styled.section`background:${(p) => p.theme.white};border:1px solid ${(p) => p.theme.line};border-radius:18px;padding:22px`;
const H2 = styled.h2`font-size:1.05rem;margin:0 0 12px`;
const Row = styled.div`display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px`;
const chip = css`border:1px solid ${(p) => p.theme.line};background:${(p) => (p.$on ? p.theme.brand : p.theme.white)};color:${(p) => (p.$on ? '#fff' : p.theme.ink)};border-radius:12px;padding:10px 14px;text-align:left`;
const Chip = styled.button`${chip}
  &:disabled{background:#EEEBF3;color:#A39CB5;cursor:not-allowed;text-decoration:line-through}
  ${(p) => p.$full && css`background:#FFF6DC;border-style:dashed;text-decoration:none;color:${p.theme.ink}`}`;
const Input = styled.input`width:100%;padding:12px;border:1px solid ${(p) => p.theme.line};border-radius:12px;font:inherit;margin-bottom:10px`;
const Btn = styled.button`border:0;border-radius:12px;padding:13px 20px;font-weight:700;background:${(p) => (p.$ghost ? 'transparent' : p.theme.brand)};color:${(p) => (p.$ghost ? p.theme.ink : '#fff')};${(p) => p.$ghost && `border:1px solid ${p.theme.line}`}
  &:disabled{opacity:.4;cursor:not-allowed}`;
const Banner = styled.div`background:${(p) => p.theme.mint};border-radius:14px;padding:16px;margin-bottom:16px;strong{display:block;font-size:1.1rem}`;
const Log = styled.ul`list-style:none;margin:0;padding:0;li{padding:10px 0;border-bottom:1px solid ${(p) => p.theme.line};font-size:.92rem}li span{color:${(p) => p.theme.muted};display:block;font-size:.8rem}`;
const Stat = styled.div`flex:1;min-width:130px;background:${(p) => p.theme.bg};border-radius:14px;padding:14px;b{font-size:1.9rem;display:block;line-height:1.1}span{color:${(p) => p.theme.muted};font-size:.85rem}`;
const Tag = styled.span`display:inline-block;border-radius:999px;padding:2px 10px;font-size:.78rem;background:${(p) => (p.$k === 'confirmed' ? p.theme.mint : p.theme.amber)}`;

const init = {
  bookings: [
    { id: 1, name: 'Ananya R.', service: 'Global colour', date: nextDays(1)[0], hour: 11, status: 'confirmed' },
    { id: 2, name: 'Divya S.', service: 'Haircut & finish', date: nextDays(1)[0], hour: 16, status: 'awaiting reply' },
  ],
  waitlist: [],
  log: [{ t: 'Setup', msg: 'Auto-confirm, reminders and waitlist fill are switched on.' }],
  saved: 0,
};
const mins = { confirm: 4, remind: 3, waitlist: 6, release: 5 }; // owner minutes saved per automation
function reducer(s, a) {
  const L = (msg) => ({ t: 'Just now', msg });
  switch (a.type) {
    case 'book': {
      const b = { id: Date.now(), ...a.b, status: 'awaiting reply' };
      return { ...s, bookings: [...s.bookings, b], saved: s.saved + mins.confirm + mins.remind,
        log: [L(`Confirmed ${b.name} for ${fmtDate(b.date)}, ${fmtTime(b.hour)} and sent WhatsApp with map + reschedule link.`), L(`Queued reminders for ${b.name}: 24h before and 3h before ("Reply Y to keep your slot").`), ...s.log] };
    }
    case 'waitlist':
      return { ...s, waitlist: [...s.waitlist, a.w], log: [L(`${a.w.name} joined the waitlist for ${fmtDate(a.w.date)}, ${fmtTime(a.w.hour)}.`), ...s.log] };
    case 'free': { // cancellation or unconfirmed release -> auto-fill from waitlist
      const gone = s.bookings.find((b) => b.id === a.id);
      if (!gone) return s;
      const rest = s.bookings.filter((b) => b.id !== a.id);
      const w = s.waitlist.find((x) => x.date === gone.date && x.hour === gone.hour);
      const why = a.reason === 'noreply' ? `${gone.name} didn't reply to the reminder, slot released.` : `${gone.name} cancelled via link.`;
      if (!w) return { ...s, bookings: rest, saved: s.saved + mins.release, log: [L(why + ' Slot reopened online.'), ...s.log] };
      return { ...s, bookings: [...rest, { id: Date.now(), name: w.name, service: gone.service, date: gone.date, hour: gone.hour, status: 'confirmed' }],
        waitlist: s.waitlist.filter((x) => x !== w), saved: s.saved + mins.release + mins.waitlist,
        log: [L(`${why} Offered to ${w.name} from the waitlist, accepted, confirmed.`), ...s.log] };
    }
    default: return s;
  }
}

function Booking({ s, d }) {
  const days = nextDays(10);
  const [svc, setSvc] = useState(SERVICES[0]);
  const [date, setDate] = useState(days[0]);
  const [hour, setHour] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(null);
  const taken = (h) => baseTaken(date).includes(h) || s.bookings.some((b) => b.date === date && b.hour === h);
  const full = hour !== null && taken(hour);
  const ok = hour !== null && name.trim() && /^\d{10}$/.test(phone);
  const submit = () => {
    const rec = { name: name.trim(), service: svc.name, date, hour };
    if (full) d({ type: 'waitlist', w: rec });
    else d({ type: 'book', b: rec });
    setDone({ ...rec, waitlisted: full });
  };
  if (done) {
    const mine = s.bookings.find((b) => b.name === done.name && b.date === done.date && b.hour === done.hour);
    return (
      <Panel aria-live="polite">
        <Banner><strong>{done.waitlisted ? "You're on the waitlist" : "You're booked"}</strong>
          {fmtDate(done.date)} at {fmtTime(done.hour)} · {done.service}</Banner>
        <p>{done.waitlisted ? 'If that slot opens up, you will get a WhatsApp and it is yours once you tap Accept.' : `Confirmation sent to +91 ${phone}. We'll remind you the day before.`}</p>
        <Row>
          {mine && <Btn $ghost onClick={() => { d({ type: 'free', id: mine.id }); setDone(null); setHour(null); }}>Cancel booking</Btn>}
          <Btn onClick={() => { setDone(null); setHour(null); }}>Book another</Btn>
        </Row>
      </Panel>
    );
  }
  return (
    <Panel>
      <H2>Choose a service</H2>
      <Row>{SERVICES.map((x) => <Chip key={x.id} $on={svc.id === x.id} onClick={() => setSvc(x)}>{x.name}<br /><small>{x.mins} min · ₹{x.price}</small></Chip>)}</Row>
      <H2>Pick a day</H2>
      <Row>{days.map((k) => <Chip key={k} $on={date === k} onClick={() => { setDate(k); setHour(null); }}>{fmtDate(k)}</Chip>)}</Row>
      <H2>Pick a time</H2>
      <Row>{slotsFor().map((h) => <Chip key={h} $on={hour === h} $full={taken(h)} onClick={() => setHour(h)}>{fmtTime(h)}{taken(h) && <small><br />Full · join waitlist</small>}</Chip>)}</Row>
      <H2>Your details</H2>
      <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" />
      <Input placeholder="WhatsApp number (10 digits)" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} aria-label="WhatsApp number" />
      <Btn disabled={!ok} onClick={submit}>{full ? 'Join waitlist' : 'Book instantly'}</Btn>
    </Panel>
  );
}

function Owner({ s, d }) {
  return (
    <Grid>
      <Panel>
        <Row>
          <Stat><b>{s.saved} min</b><span>of your time saved today</span></Stat>
          <Stat><b>{s.bookings.length}</b><span>bookings, 0 DMs answered</span></Stat>
          <Stat><b>{s.waitlist.length}</b><span>on waitlist</span></Stat>
        </Row>
        <H2>Upcoming</H2>
        <Log>{s.bookings.map((b) => (
          <li key={b.id}>{b.name} · {b.service} <Tag $k={b.status === 'confirmed' ? 'confirmed' : 'x'}>{b.status}</Tag>
            <span>{fmtDate(b.date)}, {fmtTime(b.hour)}</span>
            {b.status !== 'confirmed' && <Btn $ghost style={{ padding: '4px 10px', marginTop: 6 }} onClick={() => d({ type: 'free', id: b.id, reason: 'noreply' })}>Simulate: no reply to reminder</Btn>}
          </li>))}</Log>
      </Panel>
      <Panel>
        <H2>What the studio handled for you</H2>
        <Log>{s.log.map((l, i) => <li key={i}>{l.msg}<span>{l.t}</span></li>)}</Log>
      </Panel>
    </Grid>
  );
}

export default function App() {
  const [s, d] = useReducer(reducer, init);
  const [view, setView] = useState('client');
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Shell>
        <Top>
          <Brand>{BUSINESS.name}<small>{BUSINESS.area}</small></Brand>
          <Tabs role="tablist">
            <Tab $on={view === 'client'} onClick={() => setView('client')}>Customer view</Tab>
            <Tab $on={view === 'owner'} onClick={() => setView('owner')}>{BUSINESS.owner}'s view</Tab>
          </Tabs>
        </Top>
        {view === 'client' ? (
          <>
            <H1>Book a chair. No DMs, no waiting.</H1>
            <Lead>Pick a time you can see is free. You're confirmed on the spot. Saturdays go fast, so full slots take a waitlist.</Lead>
            <Grid><Booking s={s} d={d} />
              <Panel><H2>The problem this solves</H2><p>{BUSINESS.brief}</p>
                <p>Closed Mondays and 2 to 3 PM. Every slot is confirmed instantly, reminded twice, and refilled from the waitlist if someone drops out.</p></Panel></Grid>
          </>
        ) : <Owner s={s} d={d} />}
      </Shell>
    </ThemeProvider>
  );
}
