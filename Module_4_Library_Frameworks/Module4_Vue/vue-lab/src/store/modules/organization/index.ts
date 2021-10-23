import { ActionContext } from "vuex";

export type OrgType = string;

export interface OrgState {
  orgName: OrgType;
}

const state: () => OrgState = () => ({
  orgName: "lemoncode",
});

const mutations = {
  CHANGE_NAME_ORGANIZATION(state: OrgState, newOrgName: OrgType): void {
    if (newOrgName !== "") state.orgName = newOrgName;
  },
};

const actions = {
  addNewValueToState: (
    { commit }: ActionContext<OrgState, unknown>,
    newOrgName: OrgType
  ): void => {
    commit("CHANGE_NAME_ORGANIZATION", newOrgName);
  },
};

const getters = {
  getOrgNameState: (state: OrgState): string => {
    return state.orgName;
  },
};

const OrganizationModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default OrganizationModule;
