import React,{useState} from 'react';
import TextField from '@mui/material/TextField';

const InputField=(props)=>{
    const {
        label,
        onChange,
        required,
        name,
        value,
        disabled,
        variant,
        validator,
        maxLength,
        ...rest
    } = props;

    const [error,setError]=useState(false);
    const handleChange = event =>{
        const evt=event;
        if(validator ==='number') evt.target.value =numberOnly(evt.target.value);
        else if(validator==='textonly') evt.target.value = textOnly(evt.target.value);
        onChange(evt);
    };

    const numberOnly = value =>{
        return value.replace(/[^0-9]/g,'');
    };

    const textOnly = value =>{
        return value.replace(/[^a-zA-Z ]/g, '');
    }

    return(
        <React.Fragment>
            <TextField 
                id="outlined-basic" 
                label={label}
                variant={variant}
                name={name}
                disabled={disabled}
                onChange={handleChange}
                value={value}
                inputProps={{ maxLength: maxLength }}
                {...rest}
                error={error}
            />
        </React.Fragment>        
    )
}

export default InputField