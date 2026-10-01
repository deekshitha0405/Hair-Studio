import { baseTaken } from '../data';
import type { Booking } from '../types';
export const isTaken = (bookings: Booking[], date: string, hour: number) =>
  baseTaken(date).includes(hour) || bookings.some((b) => b.date === date && b.hour === hour);
