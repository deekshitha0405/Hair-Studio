import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{box-sizing:border-box}
  body{margin:0;background:${(p) => p.theme.bg};color:${(p) => p.theme.ink};font-family:'Bricolage Grotesque',system-ui,sans-serif;line-height:1.5}
  button{font:inherit;cursor:pointer}
  :focus-visible{outline:3px solid ${(p) => p.theme.brand};outline-offset:2px}
  @media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
`;
