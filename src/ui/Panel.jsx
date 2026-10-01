import styled from 'styled-components';
export const Panel = styled.section`background:${(p) => p.theme.white};border:1px solid ${(p) => p.theme.line};border-radius:18px;padding:22px`;
export const Heading = styled.h2`font-size:1.05rem;margin:0 0 12px`;
export const Row = styled.div`display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px`;
export const TwoCol = styled.div`display:grid;gap:24px;grid-template-columns:1.5fr 1fr;@media(max-width:820px){grid-template-columns:1fr}`;
