import { MemberEntity } from 'pods/github-members/github-member.model';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailGithubMemberComponent } from './detail-github-member.component';

interface Params {
    login: string;
}

export const DetailGithubMemberContainer: React.FC = () => {
    const { login } = useParams<Params>();
    const [ member, setMember ] = useState<MemberEntity>({} as MemberEntity);

    React.useEffect(()=> {
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then((json) => setMember(json))
    }, []);

    return <DetailGithubMemberComponent member={member}/>
}