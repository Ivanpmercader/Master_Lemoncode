import React from 'react';
import { CenterLayout } from 'layouts';
import { MemberEntity } from './github-member.model';
import { ListLayout } from 'layouts/list.layout';
import { CardEntity } from 'common-app/components/card/card.model';
import { MapMemberToCard } from 'common-app/components/card/member-card.mapper';
import { CardContainer } from 'common-app/components/card';
import { ToolbarContainer } from 'common-app/components/toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OrgContext } from 'core/context/member.context';


interface Props {
    onClick: () => void
}

const SearchButton: React.FC<Props> = React.memo((props:Props) => {
   return (
        <Button variant="contained" color="secondary" onClick={props.onClick}>
            Search Members
        </Button>
    )
});

export const GithubMembersComponent: React.FC = () => {
    const {organization, setOrganization} = React.useContext(OrgContext);
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const toolbar = { title: 'Github Members', backLink: 'root' }

    React.useEffect(()=> {
        fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json))
    }, [])

    const searchOrg = React.useCallback(() => {
        fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json))
    }, [organization]);     


    return (
        <div>
            <ToolbarContainer item={toolbar}/>

            <CenterLayout>
                <form  noValidate autoComplete="off" style={{
                    display: 'flex',
                    margin: '2rem',
                    gap: '2rem'
                }}>
                    <TextField id="search" label="Search" placeholder={organization} value={organization}
                    onChange={(e) => setOrganization(e.target.value)}/>
                    <SearchButton onClick={searchOrg}/>
                </form>
                <ListLayout>
                {
                    members.map((member) => {
                        const cardEntity: CardEntity = {...MapMemberToCard(member), detailLink: 'detailGithubMember'};
                        return <CardContainer key={member.id} item={cardEntity}/>
                    })
                }
                </ListLayout>    
            </CenterLayout>
        </div>
    )
}