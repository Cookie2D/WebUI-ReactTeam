import * as React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        width: '345px',
        padding: '12px'
    },
    media: {
        height: '200px',
    },
    img: {
        height: "auto",
    }
});

export default function CardItem(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" style={{padding: '5px 15px'}}>
                    <Typography gutterBottom variant="h6" component="h2" style={{margin: 0}}>
                        OPEN
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}