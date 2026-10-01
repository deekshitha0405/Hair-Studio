import { fmtDate, fmtTime } from '../data.js';
const SAVED = { confirm: 4, remind: 3, waitlist: 6, release: 5 }; // owner minutes saved per automation
const entry = (msg) => ({ time: 'Just now', msg });
const when = (r) => `${fmtDate(r.date)}, ${fmtTime(r.hour)}`;

function book(s, rec) {
  const b = { id: Date.now(), ...rec, status: 'awaiting reply' };
  return {
    ...s,
    bookings: [...s.bookings, b],
    minutesSaved: s.minutesSaved + SAVED.confirm + SAVED.remind,
    log: [
      entry(`Confirmed ${b.name} for ${when(b)} and sent WhatsApp with map + reschedule link.`),
      entry(`Queued reminders for ${b.name}: 24h and 3h before ("Reply Y to keep your slot").`),
      ...s.log,
    ],
  };
}
function joinWaitlist(s, rec) {
  return { ...s, waitlist: [...s.waitlist, rec], log: [entry(`${rec.name} joined the waitlist for ${when(rec)}.`), ...s.log] };
}
function freeSlot(s, id, reason) {
  const gone = s.bookings.find((b) => b.id === id);
  if (!gone) return s;
  const rest = s.bookings.filter((b) => b.id !== id);
  const next = s.waitlist.find((w) => w.date === gone.date && w.hour === gone.hour);
  const why = reason === 'noreply' ? `${gone.name} didn't reply to the reminder, slot released.` : `${gone.name} cancelled via link.`;
  if (!next) return { ...s, bookings: rest, minutesSaved: s.minutesSaved + SAVED.release, log: [entry(`${why} Slot reopened online.`), ...s.log] };
  const filled = { id: Date.now(), name: next.name, service: gone.service, date: gone.date, hour: gone.hour, status: 'confirmed' };
  return {
    ...s,
    bookings: [...rest, filled],
    waitlist: s.waitlist.filter((w) => w !== next),
    minutesSaved: s.minutesSaved + SAVED.release + SAVED.waitlist,
    log: [entry(`${why} ${next.name} accepted from the waitlist and is confirmed.`), ...s.log],
  };
}
export function reducer(s, a) {
  switch (a.type) {
    case 'book': return book(s, a.rec);
    case 'waitlist': return joinWaitlist(s, a.rec);
    case 'free': return freeSlot(s, a.id, a.reason);
    default: return s;
  }
}
