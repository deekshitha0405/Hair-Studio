import styled from 'styled-components';
const Box = styled.div`flex:1;min-width:140px;background:${(p) => p.theme.white};border-radius:14px;padding:14px 16px;
  border-left:4px solid ${(p) => p.theme.brand};box-shadow:0 8px 20px -14px rgba(34,27,51,.5);
  b{font-size:2rem;display:block;line-height:1.1;color:${(p) => p.theme.brand}}span{color:${(p) => p.theme.muted};font-size:.85rem}`;
export const Stat = ({ value, label }: { value: string | number; label: string }) => <Box><b>{value}</b><span>{label}</span></Box>;
