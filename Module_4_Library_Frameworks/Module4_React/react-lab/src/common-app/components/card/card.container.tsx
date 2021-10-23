import { routes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardComponent } from './card.component';
import { CardEntity } from './card.model';

interface Props {
    item: CardEntity;
}
export const CardContainer: React.FC<Props> = (props) => {
    const { item } = props;
    const history = useHistory();
    
    const handleDetail = (id: string) => {
        history.push(routes[item.detailLink](id));
    }
    return <CardComponent item={item} onDetail={handleDetail}/>
}