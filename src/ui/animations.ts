import { css, keyframes } from 'styled-components';

export const rise = keyframes`from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}`;
export const pop = keyframes`0%{transform:scale(.92)}60%{transform:scale(1.05)}100%{transform:scale(1)}`;
export const slideIn = keyframes`from{opacity:0;transform:translateX(-10px);background:#EFE9FF}to{opacity:1;transform:none;background:transparent}`;
export const pulse = keyframes`0%{box-shadow:0 0 0 0 rgba(120,230,170,.7)}100%{box-shadow:0 0 0 10px rgba(120,230,170,0)}`;
export const sweep = keyframes`from{background-size:0% 100%}to{background-size:100% 100%}`;

export const riseIn = (delay = 0) => css`animation:${rise} .6s ${delay}s cubic-bezier(.2,.7,.2,1) both;`;
