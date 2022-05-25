import React,{useState,useEffect} from 'react';
import InputField from './InputField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateTimeField = (props) => {
    const { label,value,onDateChange,errorMessage} = props;
   const [valuee, setValue] = useState(new Date());
   console.log(valuee);
  /* useEffect(() => {
     onChangee();
    }, [valuee,onChangee]);*/

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <InputField {...props} errorMessage={errorMessage}/>}
        label={label}
        value={value}
        onChange={(newValue)=>onDateChange(newValue)}
        
      />
    </LocalizationProvider>
    );
};

export default DateTimeField;