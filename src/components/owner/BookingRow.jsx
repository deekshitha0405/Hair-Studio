import { fmtDate, fmtTime } from '../../data.js';
import { StatusTag } from '../../ui/StatusTag.jsx';
import { Button } from '../../ui/Button.jsx';
export default function BookingRow({ booking: b, onNoReply }) {
  const confirmed = b.status === 'confirmed';
  return (
    <li>
      {b.name} · {b.service}<StatusTag $confirmed={confirmed}>{b.status}</StatusTag>
      <span className="meta">{fmtDate(b.date)}, {fmtTime(b.hour)}</span>
      {!confirmed && <Button $ghost $small onClick={onNoReply}>Simulate: no reply to reminder</Button>}
    </li>
  );
}
