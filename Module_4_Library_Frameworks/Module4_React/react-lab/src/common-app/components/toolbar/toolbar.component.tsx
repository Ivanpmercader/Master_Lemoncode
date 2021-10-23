import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./toolbar.styles";

interface Props {
    title: string;
    onBack: () => void;
}

export const ToolbarComponent: React.FC<Props> = (props: Props)=> {
    const { title, onBack } = props;
    const classes = useStyles();

    return (
        <Toolbar variant="dense" className={classes.toolbar}>
            <IconButton onClick={() => onBack()} edge="start"   aria-label="menu">
                <ArrowBackRoundedIcon className={classes.back}/>
            </IconButton>
            <Typography variant="h4" color="inherit">
                {title}
            </Typography>
        </Toolbar>
    )
}