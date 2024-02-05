import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
};

export default CustomButton;
