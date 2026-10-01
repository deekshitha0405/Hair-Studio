import { SERVICES } from '../../data.js';
import { Chip } from '../../ui/Chip.jsx';
import { Heading, Row } from '../../ui/Panel.jsx';
export default function ServicePicker({ value, onChange }) {
  return (<><Heading>Choose a service</Heading>
    <Row>{SERVICES.map((s) => (
      <Chip key={s.id} $on={value.id === s.id} onClick={() => onChange(s)}>{s.name}<br /><small>{s.mins} min · ₹{s.price}</small></Chip>
    ))}</Row></>);
}
