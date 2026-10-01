import { nextDays } from '../data.js';
const tomorrow = nextDays(1)[0];
export const initialState = {
  bookings: [
    { id: 1, name: 'Ananya R.', service: 'Global colour', date: tomorrow, hour: 11, status: 'confirmed' },
    { id: 2, name: 'Divya S.', service: 'Haircut & finish', date: tomorrow, hour: 16, status: 'awaiting reply' },
  ],
  waitlist: [],
  log: [{ time: 'Setup', msg: 'Auto-confirm, reminders and waitlist fill are switched on.' }],
  minutesSaved: 0,
};
