import React from 'react';
import InputField from './InputField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

            
const DateField = (props) => {
    const { label,value,onDateChange,errorMessage} = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        renderInput={(props) => <InputField {...props} sx={{width:'218px'}} errorMessage={errorMessage}/>}
        label={label}
        value={value}
        onChange={(newValue)=>onDateChange(newValue)}
        
      />
    </LocalizationProvider>
    );
};

export default DateField;