import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Snackbar } from '@mui/material';
import Background from '../Assets/BGNew.png'
import Header from '../Components/Header';
import Illustation from '../Assets/Mobile.png';
import InputField from '../Components/InputField';
import {withSnackbar} from "../Components/Notifier";
import Footer from "../Components/Footer";

const styles={
    bgImage:{
        backgroundColor: '#121821', 
        height: '100vh', 
        backgroundImage:`url(${Background})`,
        width:'100%', 
        backgroundSize: 'cover'
    },
    gridItemLeft:{
        padding:'100px 50px 0px 30px'
    },
    gridItemRight:{
        padding:'70px 120px 0px 120px'
    },
    illustration:{
        height: '500px',
        width: '100%' 
    },
    fontPageTitle:{
        fontSize:'45px',
        color:'#cfd1d4',
        fontFamily: 'open-sans,sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: "50px",
        maxWidth:"300px",
        display:"block"
    },
    fontPageSubTitle:{
        fontSize:'16px',
        color:'#75787e',
        lineHeight: "30px",
        fontFamily: 'open-sans,sans-serif',
        fontWeight: 300,
        fontStyle: 'normal'
    },
    marginTop30:{
        marginTop:'30px'
    },
    marginTop20:{
        marginTop:'20px'
    },
    inputField:{
        [`& fieldset`]: {
            borderRadius: 15,
        },
    },
    submitButton:{
        borderRadius: 40, 
        width:"300px",
        marginTop:'20px',
        padding:'10px'
    },
    menuBorder:{
        fontSize:16,
        color:'#b5b8b9',
        fontFamily: 'open-sans,sans-serif',
        fontWeight: 600,
        border: '2px solid #b5b8b9',
        borderRadius:'30px',
        textTransform: 'none',
        padding:'10px 40px',
        '&:hover':{
            backgroundColor:'#b5b8b9',
            color:'#121821',
            cursor:'pointer'
        }
    },
};

const LandingPage = (props) => {

    const [offsetY,setoffsetY]=useState(0);
    const handleScroll=()=>setoffsetY(window.pageYOffset);
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[]);
    
return (
    <React.Fragment>
        <div style={styles.bgImage}>
            <Grid container>
                <Grid item xs={6} style={styles.gridItemRight}>
                    <img src={Illustation} style={{...styles.illustration,transform:`translateX(${offsetY*0.05}px)`,transition: 'transform 100ms ease-in-out'}}></img>
                </Grid>
                <Grid item xs={6} style={styles.gridItemLeft}>
                    <Typography style={styles.fontPageTitle}>
                        Focused on Time Saving
                    </Typography>
                    <Typography style={{...styles.fontPageSubTitle,...styles.marginTop30}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <Button style={{...styles.menuBorder,...styles.marginTop20}}>
                         Download the mobile app  
                    </Button>
                </Grid>
            </Grid>
            <Header page="Info"/>
            <Footer page="Info"/>
        </div>
    </React.Fragment>	
    );
}

export default withSnackbar(LandingPage);
