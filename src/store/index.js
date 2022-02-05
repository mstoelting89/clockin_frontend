import { createStore } from 'vuex'

import auth from "./modules/auth";
import timetracking from "./modules/timetracking";

export default createStore({
  modules: {
    auth,
    timetracking
  }
})


