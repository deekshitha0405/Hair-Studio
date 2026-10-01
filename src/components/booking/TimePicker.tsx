import { slotsFor, fmtTime } from '../../data';
import { Chip } from '../../ui/Chip';
import { Heading, Row } from '../../ui/Panel';
export default function TimePicker({ value, onChange, isFull }: { value: number | null; onChange: (h: number) => void; isFull: (h: number) => boolean }) {
  return (<><Heading>Pick a time</Heading>
    <Row>{slotsFor().map((h) => (
      <Chip key={h} $on={value === h} $full={isFull(h)} onClick={() => onChange(h)}>
        {fmtTime(h)}{isFull(h) && <small><br />Full · join waitlist</small>}
      </Chip>))}</Row></>);
}
