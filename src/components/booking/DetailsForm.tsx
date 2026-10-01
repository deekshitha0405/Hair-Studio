import { Heading } from '../../ui/Panel';
import { Input } from '../../ui/Input';
export default function DetailsForm({ name, phone, onName, onPhone }: { name: string; phone: string; onName: (v: string) => void; onPhone: (v: string) => void }) {
  return (<><Heading>Your details</Heading>
    <Input placeholder="Your name" aria-label="Your name" value={name} onChange={(e) => onName(e.target.value)} />
    <Input placeholder="WhatsApp number (10 digits)" aria-label="WhatsApp number" inputMode="numeric" value={phone}
      onChange={(e) => onPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} /></>);
}
