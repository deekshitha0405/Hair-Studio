import { fmtDate } from '../../data.js';
import { Chip } from '../../ui/Chip.jsx';
import { Heading, Row } from '../../ui/Panel.jsx';
export default function DayPicker({ days, value, onChange }) {
  return (<><Heading>Pick a day</Heading>
    <Row>{days.map((d) => <Chip key={d} $on={value === d} onClick={() => onChange(d)}>{fmtDate(d)}</Chip>)}</Row></>);
}
