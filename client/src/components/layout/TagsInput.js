import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { TextField, Chip, Grid,Typography } from '@mui/material';


export default function TagsInput({ ...props }) {
  
  const { selectedTags, placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if(selectedItem.length < 5){
        setErrorMessage(null);
        const newSelectedItem = [...selectedItem];
        const duplicatedValues = newSelectedItem.indexOf(
          event.target.value.trim()
        );

        if (duplicatedValues !== -1) {
          setInputValue("");
          return;
        }
        if (!event.target.value.replace(/\s/g, "").length) return;

        newSelectedItem.push(event.target.value.trim());
        setSelectedItem(newSelectedItem);
        selectedTags(newSelectedItem);
        setInputValue("");
      }else{
        setErrorMessage("You cannot add more than 5 tags");
        setInputValue("");
      }
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      setErrorMessage(null);
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
      selectedTags(selectedItem.slice(0, selectedItem.length - 1));
    }
  }
  function handleChange(item) {
    if(selectedItem.length < 5){
        let newSelectedItem = [...selectedItem];
        if (newSelectedItem.indexOf(item) === -1) {
          newSelectedItem = [...newSelectedItem, item];
        }
        setInputValue("");
        setErrorMessage("");
        setSelectedItem(newSelectedItem);
        selectedTags(newSelectedItem);
    }else{
        setInputValue("");
        setErrorMessage("You cannot add more than 5 tags");
    }

  }

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
    selectedTags(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder
          });
          return (
            <div>
              <TextField
                fullWidth
                color={errorMessage ? "error" : "primary"}
                InputProps={{
                  startAdornment: selectedItem.map(item => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      onDelete={handleDelete(item)}
                      sx={{
                        margin: "0 4px 4px 0",
                        color: "text",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    />
                  )),
                  onBlur,
                  onChange: event => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus
                }}
                {...other}
                {...inputProps}
              />
           <Typography color="error" marginLeft='0.4vw'>{errorMessage}</Typography>
            </div>
          );
        }}
        
      </Downshift>
      
    </>
  );
}
TagsInput.defaultProps = {
  tags: []
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
