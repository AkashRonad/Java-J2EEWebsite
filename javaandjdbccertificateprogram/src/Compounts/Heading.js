import { Grid, makeStyles, Typography } from '@material-ui/core'

import React from 'react'
import image from '../Images/nat-4.jpg';
import InformationAboutProgram from '../Compounts/InformationAboutProgramCard';


const useStyles = makeStyles((theme) => ({
    imagessection:{
        width:'100%',
        height:'650px',
        
    },
    title:{
        position: 'absolute',
        top:'350px',
        left:'22%',
        color:'white',
        fontWeight:'900'

    },
    logo:{
        position:'absolute',
        top:'220px',
        left:'45%',
        width:'97px',
        height:'85px',
        background: 'white',
        borderRadius: '100px',

    },
    textsize:{
        textAlign: 'center',
        fontWeight:'900',
        color:'tomato'
    }
   
  }));


export default function Heading() {
    const classes = useStyles();
    

    return (
        <>
        <Grid container>
            <Grid item>
               <img src={image} alt='loding'  className={classes.imagessection} />
               <div className={classes.logo}>
                   <Typography variant='h2' className={classes.textsize} >
                       J
                   </Typography>

               </div>
               <Typography variant='h2' className={classes.title} >
                   Java & Jdbc Certificate Program 
               </Typography>
               <InformationAboutProgram />
               
            </Grid>
        </Grid>
            
        </>
    )
}
