import { baseTaken } from '../data.js';
export const isTaken = (bookings, date, hour) =>
  baseTaken(date).includes(hour) || bookings.some((b) => b.date === date && b.hour === hour);
