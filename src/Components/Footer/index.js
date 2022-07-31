import React from "react";
import { Grid } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter,BsYoutube,BsLinkedin,BsInstagram } from "react-icons/bs";
import ScrollButton from "../ScrollButton";

const styles={
    background:{
        background:'#121821',
        height:'40px',
        display:'flex',
        justifyContent:'flex-end',
        paddingRight:'90px',
    },
    iconStyles:{
        fontSize:16,
        marginRight:'20px',
        color:'#cfd1d4',
        '&:hover':{
            cursor:'pointer'
        }
    }
}

const Footer = (props) =>{
    const{page}=props;
    return(
        <React.Fragment>
            <Grid container style={styles.background}>
                {page.toString().toLowerCase()==="landing"&&<ScrollButton />}
                <FaFacebookF style={styles.iconStyles}/>
                <BsTwitter style={styles.iconStyles}/>
                <BsYoutube style={styles.iconStyles}/>
                <BsLinkedin style={styles.iconStyles}/>
                <BsInstagram style={styles.iconStyles}/>
            </Grid>
        </React.Fragment>
    )   
};

export default Footer;