import { TwoCol } from '../ui/Panel.jsx';
import PageIntro from './layout/PageIntro.jsx';
import BookingFlow from './booking/BookingFlow.jsx';
import ProblemCard from './booking/ProblemCard.jsx';
export default function CustomerPage() {
  return (<><PageIntro /><TwoCol><BookingFlow /><ProblemCard /></TwoCol></>);
}
