import { useState } from 'react';
import { SERVICES, nextDays } from '../../data.js';
import { useStore } from '../../state/StoreContext.jsx';
import { isTaken } from '../../state/selectors.js';
const days = nextDays(10);
export function useBookingForm() {
  const { state, dispatch } = useStore();
  const [service, setService] = useState(SERVICES[0]);
  const [date, setDate] = useState(days[0]);
  const [hour, setHour] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const isFull = (h) => isTaken(state.bookings, date, h);
  const joining = hour !== null && isFull(hour);
  const valid = hour !== null && name.trim() !== '' && phone.length === 10;

  const submit = () => {
    const rec = { name: name.trim(), service: service.name, date, hour };
    dispatch({ type: joining ? 'waitlist' : 'book', rec });
    setResult({ ...rec, waitlisted: joining });
  };
  const reset = () => { setResult(null); setHour(null); };
  const cancel = () => {
    const mine = state.bookings.find((b) => b.name === result.name && b.date === result.date && b.hour === result.hour);
    if (mine) dispatch({ type: 'free', id: mine.id });
    reset();
  };
  return { days, service, setService, date, pickDate: (d) => { setDate(d); setHour(null); }, hour, setHour,
    name, setName, phone, setPhone, result, isFull, joining, valid, submit, reset, cancel };
}
