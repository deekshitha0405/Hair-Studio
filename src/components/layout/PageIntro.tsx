import styled from 'styled-components';
const Title = styled.h1`font-size:clamp(2rem,5vw,3.4rem);line-height:1.05;margin:0 0 8px;max-width:16ch;letter-spacing:-.02em`;
const Lead = styled.p`color:${(p) => p.theme.muted};max-width:52ch;margin:0 0 28px`;
export default function PageIntro() {
  return (<><Title>Book a chair. No DMs, no waiting.</Title>
    <Lead>Pick a time you can see is free and you're confirmed on the spot. Saturdays go fast, so full slots take a waitlist.</Lead></>);
}
