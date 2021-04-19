import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineICon from '@material-ui/icons/MailOutline';
import Language from '@material-ui/icons/Language';
import images from '../Images/nat-10.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        position: 'absolute',
        top:'68px',
        left:'83%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function InformationAboutProgram() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            A
          </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Akash Ronad"
                    subheader="Instructor"
                />
                <CardMedia
                    className={classes.media}
                    image={images}
                    title="Instructor"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <header>Course Duration: 6Weeks</header>
                        <header>Course Fess: 5000</header>
                        <header>Contact Us</header>
                        <header><WhatAppIcon />:9740152833</header>
                        <header><MailOutlineICon />:akashronad48@gmail.com</header>
						<header><Language />:<a href="https://akashronad.netlify.app/" target="_blank"> https://akashronad.netlify.app/ </a></header>
                        
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>MyProfile:</Typography>
                        <Typography paragraph>
                         <header>Instructor</header> 
                         My Name is Akash Ronad I Have Instructor of this Course Along with Two Year Industry Exprinces in This Domian And I Also Instructor of Full Stack Web Development Intership Program(MERN STACK).
                        
                           
          </Typography>
                        
                        <Typography>
                            Thank YOU.
          </Typography>
                    </CardContent>
                </Collapse>
            </Card>
  





















        </>
    )
}
