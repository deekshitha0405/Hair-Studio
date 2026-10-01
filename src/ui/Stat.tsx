import styled from 'styled-components';
const Box = styled.div`flex:1;min-width:130px;background:${(p) => p.theme.bg};border-radius:14px;padding:14px;
  b{font-size:1.9rem;display:block;line-height:1.1}span{color:${(p) => p.theme.muted};font-size:.85rem}`;
export const Stat = ({ value, label }: { value: string | number; label: string }) => <Box><b>{value}</b><span>{label}</span></Box>;
