import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Snackbar } from '@mui/material';
import Background from '../Assets/BGNew.png'
import Header from '../Components/Header';
import Illustation from '../Assets/Illustration.png';
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
        padding:'100px 0px 0px 70px'
    },
    gridItemRight:{
        padding:'50px 70px 0px 0px'
    },
    illustration:{
        height: '540px',
        width: '87%' 
    },
    fontPageTitle:{
        fontSize:'45px',
        color:'#cfd1d4',
        fontFamily: 'open-sans,sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: "50px"
    },
    fontPageSubTitle:{
        fontSize:'17px',
        color:'#75787e',
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
        padding:'10px',
        color:'#b4b7b8',
        backgroundColor:'#0f141d',
        fontWeight: 600,
        textTransform: 'none',
        borderColor:'#3b454f',
        '&:hover':{
            backgroundColor:'#7e0fe1',
            color:'#f7f1fd',
            cursor:'pointer'
        }
    }
};

const LandingPage = (props) => {
    const [form,setForm]=useState({
        name:'',
        email:''
    });
    const[emailError,setEmailError]=useState(false);

    const handleInputChange = event => {
        const name=event.target.name;
        setForm({ ...form, [name]: event.target.value });
    };

    const isValidEmail=(email)=> {
        return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email));
    };

    const handleSubmit=()=>{  
        if(form.name===""){
            props.snackbarShowMessage('Please enter a Name','error');
            return;
        }
        if(form.email===""){
            props.snackbarShowMessage('Please enter an Email Address','error');
            return;
        }
        if(!isValidEmail(form.email)){
            props.snackbarShowMessage('Please enter a valid email address','error');            
            setEmailError(true);
            return;
        }
        props.snackbarShowMessage('Details saved successfully','success');
        console.log("State: ",form);
        var savedData = JSON.parse(localStorage.getItem("SubmittedData")) || [];
        savedData.push(form);
        localStorage.setItem("SubmittedData", JSON.stringify(savedData));
        setForm({
            name:'',
            email:''
        })
    }

return (
    <React.Fragment>
        <div style={styles.bgImage}>
            <Header page="Landing"/>
            <Grid container>                
                <Grid item xs={5} style={styles.gridItemLeft}>
                    <Typography style={styles.fontPageTitle}>
                        Vehicle Maintenance From The Comfort of Your Home
                    </Typography>
                    <Typography style={{...styles.fontPageSubTitle,...styles.marginTop30}}>
                        Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free
                    </Typography>
                    <form>
                        <Box 
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                                borderRadius: '50px',
                                ...styles.marginTop20
                            }}>
                            <InputField
                                name="name"
                                required
                                label="Enter Your Name"
                                value={form.name}
                                onChange={handleInputChange}
                                autoComplete="off"
                                fullWidth
                                validator="textonly"
                                maxLength={50}
                            />
                        </Box>
                        <Box 
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                                borderRadius: '50px',
                                ...styles.marginTop20
                            }}>    
                            <InputField 
                                name="email"
                                required
                                label="Enter Your Email"
                                value={form.email}
                                onChange={handleInputChange}
                                autoComplete="off"
                                validator="email"
                                fullWidth
                                error={emailError}
                            />
                        </Box>                        
                        <Button variant="outlined" style={styles.submitButton} onClick={handleSubmit}>Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={7} style={styles.gridItemRight}>
                    <img src={Illustation} style={styles.illustration}></img>
                </Grid>
            </Grid>
            <Footer page="Landing"/>
        </div>
    </React.Fragment>	
    );
}

export default withSnackbar(LandingPage);
