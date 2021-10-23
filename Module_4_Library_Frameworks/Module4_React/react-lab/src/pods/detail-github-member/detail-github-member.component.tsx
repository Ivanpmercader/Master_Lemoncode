import React from 'react';
import { MemberEntity } from 'pods/github-members/github-member.model';
import { ToolbarContainer } from 'common-app/components/toolbar';
import * as imgClasses from 'layouts/image.layout.styles';
import * as detailBoxClases from 'layouts/detail-box.layout.styles';

interface Props {
    member: MemberEntity;
}

export const DetailGithubMemberComponent: React.FC<Props> = (props) => {
    const { member } = props;
    const toolbar = { title: 'Github Member Detail', backLink: 'githubMembers' }
    return (
        <div>
            <ToolbarContainer item={toolbar}/>
            <div className={detailBoxClases.root}>
                <div className={imgClasses.rootBigImg}>
                    <img className={imgClasses.img} src={member.avatar_url} alt="Logo" />
                </div>
                <p className={detailBoxClases.lines}>ID: {member.id}</p>
                <p className={detailBoxClases.lines}>Login: {member.login}</p>
                <p className={detailBoxClases.lines}>Avatar_Url: {member.avatar_url}</p>  
            </div>
        </div>
    )
}