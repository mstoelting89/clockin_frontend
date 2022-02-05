import { state } from '@/store/modules/timetracking/state';
import { mutations } from '@/store/modules/timetracking/mutations';
import { actions } from '@/store/modules/timetracking/actions';
import { getters } from '@/store/modules/timetracking/getters';

const timeTracking = {
    state,
    mutations,
    actions,
    getters
}

export default timeTracking;