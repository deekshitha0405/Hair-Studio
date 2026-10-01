import styled from 'styled-components';
export const Button = styled.button<{ $ghost?: boolean; $small?: boolean }>`
  border:0;border-radius:12px;padding:13px 20px;font-weight:700;
  background:${(p) => (p.$ghost ? 'transparent' : p.theme.brand)};
  color:${(p) => (p.$ghost ? p.theme.ink : '#fff')};
  ${(p) => p.$ghost && `border:1px solid ${p.theme.line};`}
  ${(p) => p.$small && 'padding:4px 10px;margin-top:6px;font-weight:400;'}
  &:disabled{opacity:.4;cursor:not-allowed}`;
