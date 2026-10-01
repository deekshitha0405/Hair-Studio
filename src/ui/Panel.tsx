import styled from 'styled-components';
import { riseIn } from './animations';
export const Panel = styled.section`
  background:rgba(255,255,255,.82);backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.9);border-radius:20px;padding:24px;
  box-shadow:0 18px 40px -24px rgba(34,27,51,.45),0 0 0 1px ${(p) => p.theme.line};`;
export const Heading = styled.h2`font-size:1.05rem;margin:0 0 12px`;
export const Row = styled.div`display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px`;
export const TwoCol = styled.div`display:grid;gap:28px;align-items:start;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);${riseIn(0.16)}
  @media(max-width:900px){grid-template-columns:1fr}`;
