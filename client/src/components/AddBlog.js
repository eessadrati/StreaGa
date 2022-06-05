import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContentText, DialogTitle, Grid, IconButton,
          List, ListItem, ListItemText, Rating, Typography } from "@mui/material";
import TagsInput from "../layout/TagsInput";
import InputField from "../layout/InputField";
import CloseIcon from '@mui/icons-material/Close';
import SelectInput from "../layout/SelectInput";
const AddBlog = (props) => {
    const {open,handleClose} =props;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNews, setIsNews] = useState(true);
  const  [blogTitle, setBlogTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const  [blogContent, setBlogContent] = useState('');
  const  [blogContentError, setBlogContentError] = useState('');
  const  [tagsList, setTagsList] = useState([]);
  const  [blogRating, setBlogRating] = useState(0);
  const [blogType, setBlogType] = useState('');
  const [blogTypeError, setBlogTypeError] = useState("");
  const [blogRatingError, setBlogRatingError] = useState(false);
  const handleBlogTitleChange = (event) => {
    setBlogTitle(event.target.value);
  }
  const handleBlogContentChange = (event) => {
    setBlogContent(event.target.value);
  }
  const handleTagsList = (tags) => {
    setTagsList(tags);
  }
 
  const handleBlogTypeChange = (type) => {
    console.log(type);
    if(type === 'News'){
      setIsNews(true);
      setBlogTypeError("");
    }else if(type === 'Reviews'){
      setIsNews(false);
      setBlogTypeError("");
    }else{
      setBlogTypeError("Please select a type");
    }
    setBlogType(type);
  }
  const handleCreateBlog = () => {
    if(blogTitle.trim() === ''){
      setTitleError("Please enter a title");
      return;
    }
    setTitleError("");

    if(!blogType){
      setBlogTypeError("Please select a type");
      return;
    }
    setBlogTypeError("");

    if(!blogRating && blogType === 'Reviews'){
      setBlogRatingError("Please enter a rating");
      return;
    }
    setBlogRatingError("");

    if(blogContent.trim() === ''){
      setBlogContentError("Please enter a content");
      return;
    }
    setBlogContentError("");
    handleClose();
  }
    return (
        <>
            <Dialog
                  fullWidth
                  open={open}
                 
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                     
                    <Grid container justifyContent="center" alignItems="center">
                    Add Blog
                    </Grid>
                    <IconButton
                          aria-label="close"
                          onClick={()=>handleClose()}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                          }}
                        >
                        <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContentText dividers  sx={{padding:'0.5vh 1vw'}}>
                    
                    <InputField 
                              fullWidth
                              multiline
                              required
                              maxRows={3}
                              name="blogTitle"
                              label='title'
                              value={blogTitle}
                              onChange={handleBlogTitleChange}
                              placeholder='blog title'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={titleError}
                              />
                    <SelectInput 
                              options={["News","Reviews" ]}
                              error={blogTypeError} 
                              label='Type'
                              sx={{marginTop:'2vh',marginBottom:'0'}}
                              handleChange={handleBlogTypeChange}
                              />
                    {!isNews && (
                        <Grid sx={{padding:'0vh 0.5vw',marginTop:'0vh'}}>
                        <Typography variant='subtitle1' component="div" fontSize='1.2vw' sx={{cursor:'pointer'}}>
                        Rating
                        </Typography>
                        <Rating name="rating" value={blogRating}
                                precision={0.5}
                                max={10}
                                onChange={(event, newValue) => {
                                   setBlogRating(newValue);
                                }} />
                      <Typography color="error" marginLeft='0.3vw'>
                          {!blogRating && blogRatingError}
                      </Typography>
                        
                        </Grid>
                    )}
                    <InputField 
                              fullWidth
                              multiline
                              label='Content'
                              name="blogContent"
                              value={blogContent}
                              errorMessage={blogContentError}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={handleBlogContentChange}
                              placeholder='Blog content' 
                              />
                    <TagsInput
                            selectedTags={handleTagsList}
                            fullWidth
                            variant="outlined"
                            id="tags"
                            name="tags"
                            tags={tagsList}
                            placeholder="add Tags"
                            label="tags"
                    />
                    
                  </DialogContentText>
                  <DialogActions>
                    <Button autoFocus onClick={()=>handleClose()}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleCreateBlog}>
                      Add
                    </Button>
                  </DialogActions>
              </Dialog>
        </>
    );
};

export default AddBlog;