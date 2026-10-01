export type View = 'client' | 'owner';
export type BookingStatus = 'confirmed' | 'awaiting reply';
export type FreeReason = 'noreply' | 'cancel';

export interface Service { id: string; name: string; mins: number; price: number }
export interface Slot { date: string; hour: number }
export interface BookingRequest extends Slot { name: string; service: string }
export interface BookingResult extends BookingRequest { waitlisted: boolean }
export interface Booking extends BookingRequest { id: number; status: BookingStatus }
export interface LogEntry { time: string; msg: string }

export interface State {
  bookings: Booking[];
  waitlist: BookingRequest[];
  log: LogEntry[];
  minutesSaved: number;
}
export type Action =
  | { type: 'book'; rec: BookingRequest }
  | { type: 'waitlist'; rec: BookingRequest }
  | { type: 'free'; id: number; reason?: FreeReason };
