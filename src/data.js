export const BUSINESS = {
  name: 'Kinara Hair Studio',
  owner: 'Meera',
  area: 'Indiranagar, Bengaluru',
  brief:
    'Solo stylist Meera runs a 1-chair studio. Saturdays fill up, ~1 in 5 clients no-show, and she used to answer booking DMs between colour applications.',
};
export const SERVICES = [
  { id: 'cut', name: 'Haircut & finish', mins: 45, price: 900 },
  { id: 'colour', name: 'Global colour', mins: 120, price: 3800 },
  { id: 'spa', name: 'Hair spa', mins: 60, price: 1500 },
  { id: 'bridal', name: 'Bridal trial', mins: 90, price: 2500 },
];
const HOURS = [10, 11, 12, 13, 15, 16, 17, 18]; // closed 2-3pm for lunch
const pad = (n) => String(n).padStart(2, '0');
export const dkey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const fmtTime = (h) => `${h % 12 || 12}:00 ${h < 12 ? 'AM' : 'PM'}`;
export const fmtDate = (k) =>
  new Date(k + 'T00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
export function nextDays(n = 10) {
  const out = [];
  const d = new Date();
  while (out.length < n) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 1) out.push(dkey(d)); // closed Mondays
  }
  return out;
}
// Deterministic "already booked" pattern; Saturdays are nearly full
export function baseTaken(date) {
  const d = new Date(date + 'T00:00');
  const sat = d.getDay() === 6;
  return HOURS.filter((h, i) => (sat ? i % 4 !== 3 : (d.getDate() * 7 + h * 3 + i) % 3 === 0));
}
export const slotsFor = () => HOURS;
