import { TwoCol } from '../ui/Panel';
import PageIntro from './layout/PageIntro';
import BookingFlow from './booking/BookingFlow';
import ProblemCard from './booking/ProblemCard';
export default function CustomerPage() {
  return (<><PageIntro /><TwoCol><BookingFlow /><ProblemCard /></TwoCol></>);
}
