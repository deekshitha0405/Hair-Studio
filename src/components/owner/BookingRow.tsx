import { fmtDate, fmtTime } from '../../data';
import type { Booking } from '../../types';
import { StatusTag } from '../../ui/StatusTag';
import { Button } from '../../ui/Button';
export default function BookingRow({ booking: b, onNoReply }: { booking: Booking; onNoReply: () => void }) {
  const confirmed = b.status === 'confirmed';
  return (
    <li>
      {b.name} · {b.service}<StatusTag $confirmed={confirmed}>{b.status}</StatusTag>
      <span className="meta">{fmtDate(b.date)}, {fmtTime(b.hour)}</span>
      {!confirmed && <Button $ghost $small onClick={onNoReply}>Simulate: no reply to reminder</Button>}
    </li>
  );
}
