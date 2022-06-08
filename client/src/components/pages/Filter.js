import React, { useState,useRef,useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { Grid,FormControl, Typography,FormGroup,FormControlLabel,Checkbox } from '@mui/material';

function Filter(props) {
  /*const data = [
    { Tag: "FIFA", id: 1 },
    { Tag: "WARZONE", id: 2 },
    { Tag: "R6S", id: 1 },
    { Tag: "VALORANT", id: 1 },
    { Tag: "LOL", id: 1 },
  ];*/
//  const [options] = useState(data);
const {options,handleOptions}=props;

const [selectedOptions, setSelectedOptions] = useState([]);
const filterRef=useRef(null)
const handleChange =(event)=>{
  //get all cchild of filterRef
  const filterList=filterRef.current;
  console.log(filterList)
  if(event.target.checked){
    setSelectedOptions(prv=>[...prv, event.target.value]);
  } else {
    setSelectedOptions(selectedOptions.filter(op => op !== event.target.value));
  }
}
useEffect(()=>{
 // console.log(selectedOptions)
  handleOptions(selectedOptions)
},[selectedOptions,handleOptions])


  return (
    <>
  <FormControl fullWidth component="fieldset">
        <Grid container
                   direction="column"
                   sx={{marginTop :'0vh'}}>
          <FormGroup row ref={filterRef}>
         
            {options.map((option, i) => (
                <FormControlLabel
                control={
                    <Checkbox 
                        size="small"
                        name={option}
                        value={option}
                        onChange={handleChange}
                        style ={{
                                color: "#005f73",
                        }}
                    />
                }
                label={<Typography variant="h6" sx={{}}>{option}</Typography>}
                key={i}
                
                />
             
            ))}
          </FormGroup>
        </Grid>
      </FormControl>

      





    {/** <div
      style={{
        width: "90%",
        justifyContent: "left",
        marginLeft: "250px",
        marginTop: "25px",
        display: "flex",
      }}
    >
      <div className="App">
        <Multiselect placeholder="Tags" options={options} displayValue="Tag" />
      </div>
    </div>*/}
    </>
  );
}
export default Filter;
