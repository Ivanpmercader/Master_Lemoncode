import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
    githubMembers: string;
    detailGithubMember:string;
    rickMortyCharacters: string;
    detailRickMortyCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    githubMembers: '/github-members',
    detailGithubMember: '/github-members/:login',
    rickMortyCharacters: '/rick-morty-characters',
    detailRickMortyCharacter: '/rick-morty-characters/:id',
}

interface OmitGithubRoutes extends Omit<SwitchRoutes, 'detailGithubMember'> {
    detailGithubMember: (login: string) => string;
}

interface Routes extends Omit<OmitGithubRoutes, 'detailRickMortyCharacter'> {
    detailRickMortyCharacter: (id: string) => string;
}


export const routes: Routes = {
    ...switchRoutes,
    detailGithubMember: login => generatePath(switchRoutes.detailGithubMember, { login }),
    detailRickMortyCharacter: id => generatePath(switchRoutes.detailRickMortyCharacter, { id })
}