import styled from 'styled-components';
export const List = styled.ul`list-style:none;margin:0;padding:0;
  li{padding:10px 0;border-bottom:1px solid ${(p) => p.theme.line};font-size:.92rem}
  li span.meta{color:${(p) => p.theme.muted};display:block;font-size:.8rem}`;
