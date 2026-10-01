import styled, { css } from 'styled-components';
import { pop } from './animations';
export const Chip = styled.button<{ $on?: boolean; $full?: boolean }>`
  border:1px solid ${(p) => p.theme.line};border-radius:12px;padding:10px 14px;text-align:left;
  background:${(p) => (p.$on ? 'linear-gradient(135deg,#6C4FE3,#4A32B8)' : p.theme.white)};
  color:${(p) => (p.$on ? '#fff' : p.theme.ink)};
  transition:transform .15s,border-color .15s,box-shadow .15s;
  &:hover{transform:translateY(-2px);border-color:${(p) => p.theme.brand}}
  ${(p) => p.$full && css`background:#FFF6DC;border-style:dashed;color:${p.theme.ink}`}
  ${(p) => p.$on && css`animation:${pop} .3s;box-shadow:0 10px 22px -8px rgba(91,63,209,.65)`}
  small{opacity:.8}`;
