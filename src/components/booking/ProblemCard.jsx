import { BUSINESS } from '../../data.js';
import { Panel, Heading } from '../../ui/Panel.jsx';
export default function ProblemCard() {
  return (<Panel><Heading>The problem this solves</Heading><p>{BUSINESS.brief}</p>
    <p>Closed Mondays and 2 to 3 PM. Every slot is confirmed instantly, reminded twice, and refilled from the waitlist if someone drops out.</p></Panel>);
}
