import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./card.styles";
import { CardEntity } from "./card.model";

interface Props {
    item: CardEntity;
    onDetail?: (id: string) => void;
}

export const CardComponent: React.FC<Props> = (props: Props)=> {
    const { item, onDetail } = props;
    const classes = useStyles();
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    return (
        <Card className={classes.card} key={item.id}>
            <CardMedia
                className={classes.media}
                component="img"
                image={item.image}
                alt={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.subtitle ? item.subtitle: lorem}
                </Typography>
            </CardContent>
            {Boolean(item.detailLink) && (
                <CardActions className={classes.actions}>
                    <Button  onClick={() => onDetail(item.id)} className={classes.buttons}>
                        Detail
                    </Button>
                </CardActions>
            )}
        </Card>
    )
}

CardComponent.defaultProps = {
    item: {
        id: '',
        image: '',
        title: ''
    }
};