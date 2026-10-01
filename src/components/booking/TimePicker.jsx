import { slotsFor, fmtTime } from '../../data.js';
import { Chip } from '../../ui/Chip.jsx';
import { Heading, Row } from '../../ui/Panel.jsx';
export default function TimePicker({ value, onChange, isFull }) {
  return (<><Heading>Pick a time</Heading>
    <Row>{slotsFor().map((h) => (
      <Chip key={h} $on={value === h} $full={isFull(h)} onClick={() => onChange(h)}>
        {fmtTime(h)}{isFull(h) && <small><br />Full · join waitlist</small>}
      </Chip>))}</Row></>);
}
