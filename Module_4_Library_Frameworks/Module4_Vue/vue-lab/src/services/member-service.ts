import { Member } from "@/types";

export const memberService = {
  async get(stateOrg: string): Promise<Member[]> {
    const members = await fetch(
      `https://api.github.com/orgs/${stateOrg}/members`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    ).then((response) => response.json());
    return members;
  },
  async getMember(
    login: Member["login"],
    stateOrg: string
  ): Promise<Member | undefined> {
    if (!login) throw new Error("Login is required");
    return this.get(stateOrg).then((memberList) => {
      return memberList.find((member: Member) => member.login === login);
    });
  },
};
