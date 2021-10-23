import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
    DetailGithubMemberScene,
    GithubMembersScene,
    HomeScene,
    RickMortyCharactersScene
} from 'scenes';
import { DetailRickMortyCharacterScene } from 'scenes/detail-rick-morty-character.scene';

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    exact={true}
                    path={switchRoutes.root}
                    component = {HomeScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.githubMembers}
                    component = {GithubMembersScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.detailGithubMember}
                    component = {DetailGithubMemberScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.rickMortyCharacters}
                    component = {RickMortyCharactersScene}
                />
                <Route 
                    exact={true}
                    path={switchRoutes.detailRickMortyCharacter}
                    component = {DetailRickMortyCharacterScene}
                />
            </Switch>
        </Router>
    )
}