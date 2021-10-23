
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        width: 250,
    },
    media: {
        padding: 10,
        boxSizing: "border-box",
        height: 140,
        objectFit: "contain"
    },
    actions: {
        justifyContent: "center"
    },
    buttons: {
        width: "100%",
        color: "whitesmoke",
        backgroundColor: "#3f51b5",
        '&:hover': {
            backgroundColor: "#ff0052"
         },
    }

  });
