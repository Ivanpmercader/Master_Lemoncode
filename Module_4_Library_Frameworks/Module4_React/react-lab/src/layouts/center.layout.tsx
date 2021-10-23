import React from "react";;
import * as classes from './center.layout.styles';

export const CenterLayout: React.FC = (props) => {
    const { children } = props;
    return <div className={classes.center}>{children}</div>
}