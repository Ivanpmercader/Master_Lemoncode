import { createStore } from "vuex";
import OrganizationModule from "./modules/organization";

export default createStore({
  modules: {
    OrganizationModule,
  },
});
