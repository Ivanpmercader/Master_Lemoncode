import React from 'react';
import { routes } from 'core/router';
import { HomeComponent } from './home.component';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import { DashboardItems } from 'common/components';

export const HomeContainer: React.FC = () => {
    const items: DashboardItems[] = React.useMemo(
        (): DashboardItems[] => [
            {
                title: 'Github Members',
                subtitle: 'Fetch to github api to get members of organization',
                link: routes.githubMembers,
                icon: AccountCircleRoundedIcon
            },
            {
                title: 'Rick Morty Characters',
                subtitle: 'Fetch to rick morty api to get characters',
                link: routes.rickMortyCharacters,
                icon: FaceRoundedIcon
            },
        ],
        []
    );

    return <HomeComponent items={items}/>
}