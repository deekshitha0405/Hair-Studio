import { SERVICES } from '../../data';
import type { Service } from '../../types';
import { Chip } from '../../ui/Chip';
import { Heading, Row } from '../../ui/Panel';
export default function ServicePicker({ value, onChange }: { value: Service; onChange: (s: Service) => void }) {
  return (<><Heading>Choose a service</Heading>
    <Row>{SERVICES.map((s) => (
      <Chip key={s.id} $on={value.id === s.id} onClick={() => onChange(s)}>{s.name}<br /><small>{s.mins} min · ₹{s.price}</small></Chip>
    ))}</Row></>);
}
