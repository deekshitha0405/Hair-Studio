import styled from 'styled-components';
import { BUSINESS } from '../../data';
import type { View } from '../../types';
const Group = styled.div`display:flex;background:${(p) => p.theme.white};border:1px solid ${(p) => p.theme.line};border-radius:999px;padding:4px`;
const Option = styled.button<{ $on?: boolean }>`border:0;border-radius:999px;padding:8px 16px;background:${(p) => (p.$on ? p.theme.ink : 'transparent')};color:${(p) => (p.$on ? '#fff' : p.theme.ink)}`;
export default function ViewSwitch({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <Group role="group" aria-label="Switch view">
      <Option $on={view === 'client'} aria-pressed={view === 'client'} onClick={() => onChange('client')}>Customer view</Option>
      <Option $on={view === 'owner'} aria-pressed={view === 'owner'} onClick={() => onChange('owner')}>{BUSINESS.owner}'s view</Option>
    </Group>
  );
}
