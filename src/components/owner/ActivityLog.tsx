import { Panel, Heading } from '../../ui/Panel';
import { List } from '../../ui/List';
import type { LogEntry } from '../../types';
export default function ActivityLog({ log }: { log: LogEntry[] }) {
  return (<Panel><Heading>What the studio handled for you</Heading>
    <List>{log.map((l, i) => <li key={i}>{l.msg}<span className="meta">{l.time}</span></li>)}</List></Panel>);
}
