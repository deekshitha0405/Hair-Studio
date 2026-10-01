import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;color:${(p) => p.theme.ink};font-family:'Bricolage Grotesque',system-ui,sans-serif;line-height:1.5;
    background-color:${(p) => p.theme.bg};background-attachment:fixed;
    background-image:
      radial-gradient(900px 520px at 5% -5%,rgba(91,63,209,.20),transparent 60%),
      radial-gradient(700px 500px at 100% 15%,rgba(189,235,211,.65),transparent 60%),
      radial-gradient(800px 600px at 50% 110%,rgba(246,196,83,.22),transparent 60%)}
  button{font:inherit;cursor:pointer}
  :focus-visible{outline:3px solid ${(p) => p.theme.brand};outline-offset:2px}
  @media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
`;
