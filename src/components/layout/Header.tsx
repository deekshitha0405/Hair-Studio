import styled from 'styled-components';
import { BUSINESS } from '../../data';
import { pulse } from '../../ui/animations';
import ViewSwitch from './ViewSwitch';
import type { View } from '../../types';

const Bar = styled.header`
  position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;
  padding:14px clamp(16px,4vw,48px);color:#fff;
  background:linear-gradient(110deg,#221B33 0%,#3A2A7A 55%,#5B3FD1 100%);
  box-shadow:0 10px 30px -14px rgba(34,27,51,.7)`;
const Name = styled.div`font-size:1.25rem;font-weight:700;display:flex;align-items:center;gap:12px;
  small{display:block;font-weight:400;color:rgba(255,255,255,.7);font-size:.85rem}`;
const Live = styled.span`width:10px;height:10px;border-radius:50%;background:#78E6AA;animation:${pulse} 1.8s infinite`;

export default function Header({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <Bar>
      <Name><Live aria-hidden /><div>{BUSINESS.name}<small>{BUSINESS.area} · taking bookings now</small></div></Name>
      <ViewSwitch view={view} onChange={onChange} />
    </Bar>
  );
}
