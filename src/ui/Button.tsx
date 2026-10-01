import styled from 'styled-components';
export const Button = styled.button<{ $ghost?: boolean; $small?: boolean }>`
  border:0;border-radius:12px;padding:14px 22px;font-weight:700;
  background:${(p) => (p.$ghost ? 'transparent' : 'linear-gradient(135deg,#6C4FE3,#4A32B8)')};
  color:${(p) => (p.$ghost ? p.theme.ink : '#fff')};
  ${(p) => p.$ghost && `border:1px solid ${p.theme.line};`}
  ${(p) => p.$small && 'padding:4px 10px;margin-top:6px;font-weight:400;'}
  transition:transform .15s,box-shadow .15s;
  &:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 24px -10px rgba(91,63,209,.7)}
  &:active:not(:disabled){transform:translateY(0) scale(.98)}
  &:disabled{opacity:.4;cursor:not-allowed}`;
