import { fmtDate } from '../../data';
import { Chip } from '../../ui/Chip';
import { Heading, Row } from '../../ui/Panel';
export default function DayPicker({ days, value, onChange }: { days: string[]; value: string; onChange: (d: string) => void }) {
  return (<><Heading>Pick a day</Heading>
    <Row>{days.map((d) => <Chip key={d} $on={value === d} onClick={() => onChange(d)}>{fmtDate(d)}</Chip>)}</Row></>);
}
