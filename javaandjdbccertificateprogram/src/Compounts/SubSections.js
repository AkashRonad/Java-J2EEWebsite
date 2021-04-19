import { Grid } from '@material-ui/core';
import React from 'react';
import Classcard from './ClassCard';
import DataTypes from './DataTypesCard';
import Operators from '../Compounts/OperatorsCard';
import ControlStatement from '../Compounts/ControlStatementCard';
import InputAndOutput from '../Compounts/InputAndOutputCard';
import Arrays from '../Compounts/ArraysCard';
import StringCrad from '../Compounts/StringsCard';
import ClassAndObjects from '../Compounts/Class&ObjectsCard';
import MethodsCards from '../Compounts/MethodsCards';
import OppsConcepts from '../Compounts/OppsConceptsCards';
import ExceptionHandling from '../Compounts/ExceptionHandlingCard';
import CollectionFrameWork from '../Compounts/CollectionFrameWorkCard';
import ThreadsCrad from '../Compounts/ThreadsCrads';
import JavaDataBaseCards from '../Compounts/JavaDataBaseCrads';


export default function Subsections() {
    

    return (
        <>
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Classcard />
               
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <DataTypes />
            
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Operators />
              
            </Grid>
        </Grid>
        <br />
        <Grid container >
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ControlStatement />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <InputAndOutput />
                
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Arrays />
                
            </Grid>
        </Grid>
        <br />
        <Grid container>
            <Grid item  xs={12} sm={12} md={6} lg={4}>
                <StringCrad />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ClassAndObjects />

            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={4}>
                <MethodsCards />

            </Grid>
        </Grid>
        <br />
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <OppsConcepts />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ExceptionHandling />
                
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <CollectionFrameWork />
                
                </Grid>
        </Grid>
        <br />
        <Grid container >
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ThreadsCrad />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <JavaDataBaseCards />
                
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                   
                
                </Grid>
        </Grid>
            
        </>
    )
}
