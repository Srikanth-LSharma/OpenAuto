import React from "react";
import { Grid } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Logo from '../../Assets/Logo.png';

const styles={
    background:{
        background:'#121821',
        height:'80px'
    },
    headerMain :{
        padding: '20px 60px'
    },
    fontStyles:{
        fontSize:14,
        color:'#b5b8b9'
    },
    setGrid:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    menuBorder:{
        fontSize:14,
        color:'#b5b8b9',
        border: '2px solid #b5b8b9',
        padding:'10px 40px',
        fontFamily: 'open-sans,sans-serif',
        fontWeight: 600,
        borderRadius:'30px',
        textTransform: 'none',
        '&:hover':{
            backgroundColor:'#b5b8b9',
            color:'#121821',
            cursor:'pointer'
        }
    },
    logoStyle:{
        height: '40px',
        width: '200px'
    }
}

const Header = (props) =>{
    const {page}=props;
    return(
        <React.Fragment>
            <Grid container style={styles.background}>
                <Grid item xs={6} style={styles.headerMain}>
                    <img src={Logo} style={styles.logoStyle}/>                 
                </Grid>
                <Grid item xs={6} style={styles.setGrid}>
                    <Button startIcon={<PhoneIcon/>} style={{textTransform: 'none'}}>
                        <Typography style={styles.fontStyles}> +769 586 4558 </Typography>
                    </Button>
                    <Button startIcon={<EmailIcon/>} style={{textTransform: 'none'}}>
                        <Typography style={styles.fontStyles}> service@openauto.ca </Typography>
                    </Button>
                    {page.toString().toLowerCase()==='landing'&& <Button style={styles.menuBorder}>
                         Download the mobile app  
                    </Button>}
                </Grid>
            </Grid>
        </React.Fragment>
    )   
};

export default Header;