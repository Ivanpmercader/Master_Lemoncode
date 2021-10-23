import React from "react";;
import * as classes from './list.layout.styles';

export const ListLayout: React.FC = (props) => {
    const { children } = props;
    return <div className={classes.wrapList}>{children}</div>
}