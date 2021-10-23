import React from 'react';
import { cx } from 'emotion';
import { DashboardItems } from './dashboard.model';
import * as dashboardClasses from './dashboard.styles';
import { ClassesProps, ItemComponent } from './item.component';

interface ClassNameProps {
    root?: string;
    items?: string;
    item?: ClassesProps;
}

interface Props {
    items: DashboardItems[];
    classes?: ClassNameProps;
    dataTestId?: string;
}


export const DashboardComponent: React.FC<Props> = (props: Props) => {
    const { items, classes, dataTestId } = props;

    return (
        <div
            data-testid={dataTestId}
            className={cx(dashboardClasses.root, classes.root)}
        >
            <div
                data-testid={dataTestId}
                className={cx(dashboardClasses.items, classes.items)}
            >
                {
                    items.map( item => 
                        Boolean(item) && (
                            <ItemComponent 
                                key={item.title}
                                classes={{
                                    ...classes.item,
                                    root: cx(dashboardClasses.item, classes.item.root)
                                }}
                                item={item}
                            />
                        ))
                }

                
            </div>
        </div>
    );
}

DashboardComponent.defaultProps = {
    classes: {
        root: '',
        items: '',
        item: {
            root: '',
            icon: '',
            title: ''
        }
    }
}