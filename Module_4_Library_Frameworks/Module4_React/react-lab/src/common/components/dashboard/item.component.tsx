import React from 'react';
import { cx } from 'emotion';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as itemClasses from './dashboard-items.styles';
import { DashboardItems } from './dashboard.model';

export interface ClassesProps {
    title?: string;
    subtitle?: string;
    root?: string;
    icon?: string;
}

interface Props {
    item: DashboardItems;
    classes?: ClassesProps;
    dataTestId?: string;
}

export const ItemComponent: React.FC<Props> = (props: Props) => {
    const {
        item: { title, subtitle, link, icon: Icon},
        classes, 
        dataTestId
    } = props;
    return (
        <Link className={cx(itemClasses.root, classes.root)}
         to={link} 
         data-testid={dataTestId}>
            <Icon className={cx(itemClasses.icon, classes.icon)}></Icon>
            <Typography variant="h3" className={cx(itemClasses.title, classes.title)}>
                {title}
            </Typography> 
            <Typography variant="h6" className={cx(itemClasses.subtitle, classes.subtitle)}>
                {subtitle}
            </Typography> 
         </Link>
    )
};

ItemComponent.defaultProps= {
    classes: {
        title: '',
        subtitle: '',
        root: '',
        icon: '',
    }
}