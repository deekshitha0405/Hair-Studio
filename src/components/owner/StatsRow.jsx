import { Row } from '../../ui/Panel.jsx';
import { Stat } from '../../ui/Stat.jsx';
export default function StatsRow({ minutes, bookings, waitlist }) {
  return (<Row><Stat value={`${minutes} min`} label="of your time saved today" />
    <Stat value={bookings} label="bookings, 0 DMs answered" /><Stat value={waitlist} label="on waitlist" /></Row>);
}
