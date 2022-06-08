import React, {useState} from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'
import TagsInput from './../layout/TagsInput'

function CreateChannel() {
  const [tagsList,setTagsList]=useState([]);
  const [name, setName]=useState('');
  const [nameError, setNameError]=useState('');
  const handleTagsList =(items) =>{
    setTagsList(items);
  }

  return (
    <Grid container  sx={{padding:'2px'}} >
        <Grid item xs={10}>          
            <InputField  value={name}
                         label="Channel name"
                          placeholder="Enter channel name"
                          errorMessage={nameError}
                          onChange={(e)=>setName(e.target.value)}
                         sx={{width:'400px'}}/>
        </Grid>
        <Grid item xs={10} sx={{marginTop:'2vh'}}>
            <TagsInput 
            sx={{width:'400px'}}
            selectedTags={handleTagsList}
            variant="outlined"
            id="tags"
            name="tags"
            tags={tagsList}
            placeholder="add tag"
             label="Tags"  
            />
        </Grid>
    </Grid>
  )
}



export default CreateChannel