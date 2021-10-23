import React from 'react';
import { routes } from 'core/router';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarEntity } from './toolbar.model';
import { useHistory } from 'react-router-dom';

interface Props {
    item: ToolbarEntity;
}
export const ToolbarContainer: React.FC<Props> = (props) => {
    const { item } = props;
    const history = useHistory();
    
    const handleBack = () => {
        history.push(routes[item.backLink]);
    }
    return <ToolbarComponent title={item.title} onBack={handleBack}/>
}