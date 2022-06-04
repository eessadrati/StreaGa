import React, {useState} from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'
import TagsInput from './../layout/TagsInput'

function CreateChannel() {
  const [tagsList,setTagsList]=useState([]);

  const handleTagsList =(items) =>{
    console.log(items)
    setTagsList(items);
  }

  return (
    <Grid container direction="row" spacing={1} sx={styles.container}>
        <Grid item xs={12}>          
            <InputField  id="outlined-basic" label="Channel name" variant="outlined" sx={{width:'400px'}}/>
        </Grid>
        <Grid item sx={{marginTop:'2vh'}}>
            <TagsInput 
            sx={{width:'400px'}}
            selectedTags={handleTagsList}
            variant="outlined"
            id="tags"
            name="tags"
            tags={tagsList}
            placeholder="add tag"
            id="outlined-basic" label="Tags" variant="outlined" 
            />
        </Grid>
    </Grid>
  )
}

const styles = {
    container: {
        marginLeft: '10px',
    },
    button: {
        alignItems:'right' //??
    }
}

export default CreateChannel