import { Heading } from '../../ui/Panel.jsx';
import { Input } from '../../ui/Input.jsx';
export default function DetailsForm({ name, phone, onName, onPhone }) {
  return (<><Heading>Your details</Heading>
    <Input placeholder="Your name" aria-label="Your name" value={name} onChange={(e) => onName(e.target.value)} />
    <Input placeholder="WhatsApp number (10 digits)" aria-label="WhatsApp number" inputMode="numeric" value={phone}
      onChange={(e) => onPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} /></>);
}
