import styled from 'styled-components';
import { BUSINESS } from '../../data.js';
const Group = styled.div`display:flex;background:${(p) => p.theme.white};border:1px solid ${(p) => p.theme.line};border-radius:999px;padding:4px`;
const Option = styled.button`border:0;border-radius:999px;padding:8px 16px;background:${(p) => (p.$on ? p.theme.ink : 'transparent')};color:${(p) => (p.$on ? '#fff' : p.theme.ink)}`;
export default function ViewSwitch({ view, onChange }) {
  return (
    <Group role="group" aria-label="Switch view">
      <Option $on={view === 'client'} aria-pressed={view === 'client'} onClick={() => onChange('client')}>Customer view</Option>
      <Option $on={view === 'owner'} aria-pressed={view === 'owner'} onClick={() => onChange('owner')}>{BUSINESS.owner}'s view</Option>
    </Group>
  );
}
