import { Heading } from '../../ui/Panel';
import { List } from '../../ui/List';
import BookingRow from './BookingRow';
import type { Booking } from '../../types';
export default function UpcomingList({ bookings, onNoReply }: { bookings: Booking[]; onNoReply: (id: number) => void }) {
  return (<><Heading>Upcoming</Heading>
    <List>{bookings.map((b) => <BookingRow key={b.id} booking={b} onNoReply={() => onNoReply(b.id)} />)}</List></>);
}
