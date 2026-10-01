import { fmtDate, fmtTime } from '../../data.js';
import { Panel, Row } from '../../ui/Panel.jsx';
import { Banner } from '../../ui/Banner.jsx';
import { Button } from '../../ui/Button.jsx';
export default function BookingConfirmation({ result, phone, onCancel, onReset }) {
  const { waitlisted, date, hour, service } = result;
  return (
    <Panel aria-live="polite">
      <Banner><strong>{waitlisted ? "You're on the waitlist" : "You're booked"}</strong>{fmtDate(date)} at {fmtTime(hour)} · {service}</Banner>
      <p>{waitlisted ? 'If that slot opens up you get a WhatsApp, and it is yours once you tap Accept.' : `Confirmation sent to +91 ${phone}. We'll remind you the day before.`}</p>
      <Row>{!waitlisted && <Button $ghost onClick={onCancel}>Cancel booking</Button>}<Button onClick={onReset}>Book another</Button></Row>
    </Panel>
  );
}
