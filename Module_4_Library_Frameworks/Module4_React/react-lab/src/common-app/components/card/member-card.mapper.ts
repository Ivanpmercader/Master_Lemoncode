import { CardEntity } from "common-app/components/card/card.model"
import { MemberEntity } from "pods/github-members/github-member.model"

export const MapMemberToCard = (member: MemberEntity): CardEntity => {
    return {
        id: member.login,
        image: member.avatar_url,
        title: member.login
    }
}