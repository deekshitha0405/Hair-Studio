import { Heading } from '../../ui/Panel.jsx';
import { List } from '../../ui/List.jsx';
import BookingRow from './BookingRow.jsx';
export default function UpcomingList({ bookings, onNoReply }) {
  return (<><Heading>Upcoming</Heading>
    <List>{bookings.map((b) => <BookingRow key={b.id} booking={b} onNoReply={() => onNoReply(b.id)} />)}</List></>);
}
