import styled from 'styled-components';
export const StatusTag = styled.span`display:inline-block;border-radius:999px;padding:2px 10px;font-size:.78rem;margin-left:6px;
  background:${(p) => (p.$confirmed ? p.theme.mint : p.theme.amber)}`;
