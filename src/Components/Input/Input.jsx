import React from 'react';
import { TextField } from '@mui/material';

function Input(props) {
    const label = props.label;
    const defaultValue = props.defaultValue;
    const [ error, setError ] = React.useState(false);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        let formattedValue = inputValue;

        if (label === 'Card Number') {
            formattedValue = formattedValue.replace(/\s/g, '').slice(0, 19); // Limit to 19 characters

            if (formattedValue.length < 10 || formattedValue.length > 19) {
                setError(true);
            } else {
                setError(false);
            }
        }
        formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space every 4 characters

        event.target.value = formattedValue;
    };

    return (
        <div className="flex mr-10">
            <TextField
                id="outlined-helperText"
                label={label}
                defaultValue={defaultValue}
                color={error ? 'error' : 'primary'}
                fullWidth
                type={label === 'CVV/CVC' ? 'password' : 'text'}
                InputProps={{
                    sx: {
                        borderRadius: '16px',
                        fontFamily: 'Open Sans',
                    },
                    onChange: handleChange,
                }}
                error={error}
                helperText={error ? 'Not a valid card number' : ''}
            />
        </div>
    );
}

export default Input;
