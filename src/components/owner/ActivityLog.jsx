import { Panel, Heading } from '../../ui/Panel.jsx';
import { List } from '../../ui/List.jsx';
export default function ActivityLog({ log }) {
  return (<Panel><Heading>What the studio handled for you</Heading>
    <List>{log.map((l, i) => <li key={i}>{l.msg}<span className="meta">{l.time}</span></li>)}</List></Panel>);
}
