import styled from 'styled-components';
import { pop } from './animations';
export const Banner = styled.div`
  background:linear-gradient(135deg,${(p) => p.theme.mint},#E6F8EE);border-radius:16px;padding:18px;margin-bottom:16px;
  strong{display:block;font-size:1.25rem}
  &::before{content:'✓';display:grid;place-items:center;width:30px;height:30px;border-radius:50%;
    background:${(p) => p.theme.ink};color:#fff;margin-bottom:8px;animation:${pop} .5s .1s both}`;
