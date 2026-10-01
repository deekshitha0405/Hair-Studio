import styled, { css } from 'styled-components';
export const Chip = styled.button`
  border:1px solid ${(p) => p.theme.line};border-radius:12px;padding:10px 14px;text-align:left;
  background:${(p) => (p.$on ? p.theme.brand : p.theme.white)};
  color:${(p) => (p.$on ? '#fff' : p.theme.ink)};
  ${(p) => p.$full && css`background:#FFF6DC;border-style:dashed;color:${p.theme.ink}`}
  small{opacity:.8}`;
