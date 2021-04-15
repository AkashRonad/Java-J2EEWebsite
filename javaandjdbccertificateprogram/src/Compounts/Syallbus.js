import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '50px',
        fontWeight: '900',
        textAlign: 'center',
        color:'black',
        margin:theme.spacing(1),
      
    },
  }));

export default function Syallbus(props) {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h2' className={classes.title}>
                        Topic Covers
                </Typography>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>

        </>
    )
}
