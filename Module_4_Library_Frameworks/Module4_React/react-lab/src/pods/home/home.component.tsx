import { DashboardComponent, DashboardItems} from 'common/components/dashboard';
import React from 'react';

interface Props {
    items: DashboardItems[];
}

export const HomeComponent: React.FC<Props> = (props: Props) => {
    const { items } = props;
    return <DashboardComponent items={items}/>
}