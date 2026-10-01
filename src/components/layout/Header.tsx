import styled from 'styled-components';
import { BUSINESS } from '../../data';
import ViewSwitch from './ViewSwitch';
import type { View } from '../../types';
const Bar = styled.header`display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:28px`;
const Name = styled.div`font-size:1.25rem;font-weight:700;small{display:block;font-weight:400;color:${(p) => p.theme.muted};font-size:.85rem}`;
export default function Header({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return <Bar><Name>{BUSINESS.name}<small>{BUSINESS.area}</small></Name><ViewSwitch view={view} onChange={onChange} /></Bar>;
}
