import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
const Leagues = ({sport}) => {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontSize:"20px",
            maxWidth: "100%",
        },
        media: {
            width: "100%",
            height: 150,
            backgroundSize: 'contain',
        },
    });
    const classes = useStyles();
    const {idLeague,strSport,strBadge,strLeague}=sport;
    return (
        <div>
            <Card className={classes.root}>
             <CardActionArea>
               <CardMedia
                className={classes.media}
                image={strBadge}
                title={strLeague}
               />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <strong>{strLeague}</strong>
                  </Typography>
                  <Typography gutterBottom variant="p" component="p">
                      Sports type: <strong>{strSport}</strong>
                  </Typography>
                  <Link to={`league/${idLeague}`}><Button variant="contained" color="primary"> Explore</Button></Link>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
    );
};

export default Leagues;