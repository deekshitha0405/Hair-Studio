import { useStore } from '../../state/StoreContext.jsx';
import { Panel, TwoCol } from '../../ui/Panel.jsx';
import StatsRow from './StatsRow.jsx';
import UpcomingList from './UpcomingList.jsx';
import ActivityLog from './ActivityLog.jsx';
export default function OwnerDashboard() {
  const { state, dispatch } = useStore();
  return (
    <TwoCol>
      <Panel>
        <StatsRow minutes={state.minutesSaved} bookings={state.bookings.length} waitlist={state.waitlist.length} />
        <UpcomingList bookings={state.bookings} onNoReply={(id) => dispatch({ type: 'free', id, reason: 'noreply' })} />
      </Panel>
      <ActivityLog log={state.log} />
    </TwoCol>
  );
}
