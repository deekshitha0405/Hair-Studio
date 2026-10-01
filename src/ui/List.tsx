import styled from 'styled-components';
import { slideIn } from './animations';
export const List = styled.ul`list-style:none;margin:0;padding:0;
  li{padding:10px 8px;border-bottom:1px solid ${(p) => p.theme.line};font-size:.92rem;border-radius:8px;animation:${slideIn} .6s ease-out both}
  li span.meta{color:${(p) => p.theme.muted};display:block;font-size:.8rem}`;
