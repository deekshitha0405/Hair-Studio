import { useState } from 'react';
import { SERVICES, nextDays } from '../../data';
import { useStore } from '../../state/StoreContext';
import { isTaken } from '../../state/selectors';
import type { BookingRequest, BookingResult, Service } from '../../types';

const days = nextDays(10);

export function useBookingForm() {
  const { state, dispatch } = useStore();
  const [service, setService] = useState<Service>(SERVICES[0]);
  const [date, setDate] = useState<string>(days[0]);
  const [hour, setHour] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<BookingResult | null>(null);

  const isFull = (h: number) => isTaken(state.bookings, date, h);
  const joining = hour !== null && isFull(hour);
  const valid = hour !== null && name.trim() !== '' && phone.length === 10;

  const submit = () => {
    if (hour === null) return;
    const rec: BookingRequest = { name: name.trim(), service: service.name, date, hour };
    dispatch(joining ? { type: 'waitlist', rec } : { type: 'book', rec });
    setResult({ ...rec, waitlisted: joining });
  };
  const reset = () => { setResult(null); setHour(null); };
  const cancel = () => {
    if (!result) return;
    const mine = state.bookings.find((b) => b.name === result.name && b.date === result.date && b.hour === result.hour);
    if (mine) dispatch({ type: 'free', id: mine.id, reason: 'cancel' });
    reset();
  };
  const pickDate = (d: string) => { setDate(d); setHour(null); };

  return { days, service, setService, date, pickDate, hour, setHour, name, setName, phone, setPhone,
    result, isFull, joining, valid, submit, reset, cancel };
}
