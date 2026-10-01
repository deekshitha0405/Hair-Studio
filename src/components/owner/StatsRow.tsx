import { Row } from '../../ui/Panel';
import { Stat } from '../../ui/Stat';
export default function StatsRow({ minutes, bookings, waitlist }: { minutes: number; bookings: number; waitlist: number }) {
  return (<Row><Stat value={`${minutes} min`} label="of your time saved today" />
    <Stat value={bookings} label="bookings, 0 DMs answered" /><Stat value={waitlist} label="on waitlist" /></Row>);
}
