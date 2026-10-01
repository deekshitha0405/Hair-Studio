import styled from 'styled-components';
import { riseIn, sweep } from '../../ui/animations';
const Title = styled.h1`font-size:clamp(2.2rem,5.5vw,4rem);line-height:1.05;margin:0 0 10px;max-width:20ch;letter-spacing:-.02em;${riseIn(0)}`;
const Mark = styled.span`background:linear-gradient(transparent 58%,${(p) => p.theme.amber} 58%) no-repeat left;
  animation:${sweep} .8s .5s ease-out both`;
const Lead = styled.p`color:${(p) => p.theme.muted};max-width:56ch;margin:0 0 32px;font-size:1.05rem;${riseIn(0.08)}`;
export default function PageIntro() {
  return (<><Title>Book a chair. <Mark>No DMs, no waiting.</Mark></Title>
    <Lead>Pick a time you can see is free and you're confirmed on the spot. Saturdays go fast, so full slots take a waitlist.</Lead></>);
}
