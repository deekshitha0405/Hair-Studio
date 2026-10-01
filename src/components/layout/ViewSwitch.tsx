import styled from 'styled-components';
import { BUSINESS } from '../../data';
import type { View } from '../../types';
const Group = styled.div`display:flex;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:4px`;
const Option = styled.button<{ $on?: boolean }>`border:0;border-radius:999px;padding:8px 18px;transition:background .2s,color .2s;
  background:${(p) => (p.$on ? '#fff' : 'transparent')};color:${(p) => (p.$on ? p.theme.ink : '#fff')};font-weight:${(p) => (p.$on ? 700 : 400)}`;
export default function ViewSwitch({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <Group role="group" aria-label="Switch view">
      <Option $on={view === 'client'} aria-pressed={view === 'client'} onClick={() => onChange('client')}>Customer view</Option>
      <Option $on={view === 'owner'} aria-pressed={view === 'owner'} onClick={() => onChange('owner')}>{BUSINESS.owner}'s view</Option>
    </Group>
  );
}
