import { Panel } from '../../ui/Panel.jsx';
import { Button } from '../../ui/Button.jsx';
import ServicePicker from './ServicePicker.jsx';
import DayPicker from './DayPicker.jsx';
import TimePicker from './TimePicker.jsx';
import DetailsForm from './DetailsForm.jsx';
import BookingConfirmation from './BookingConfirmation.jsx';
import { useBookingForm } from './useBookingForm.js';
export default function BookingFlow() {
  const f = useBookingForm();
  if (f.result) return <BookingConfirmation result={f.result} phone={f.phone} onCancel={f.cancel} onReset={f.reset} />;
  return (
    <Panel>
      <ServicePicker value={f.service} onChange={f.setService} />
      <DayPicker days={f.days} value={f.date} onChange={f.pickDate} />
      <TimePicker value={f.hour} onChange={f.setHour} isFull={f.isFull} />
      <DetailsForm name={f.name} phone={f.phone} onName={f.setName} onPhone={f.setPhone} />
      <Button disabled={!f.valid} onClick={f.submit}>{f.joining ? 'Join waitlist' : 'Book instantly'}</Button>
    </Panel>
  );
}
