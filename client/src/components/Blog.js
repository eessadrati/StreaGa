import React,{ useState,useEffect, useRef, useContext}from 'react';
import { Avatar, Button, Divider, Grid, IconButton, Paper, Rating, styled, Typography,
    Dialog, DialogTitle,DialogContent,DialogActions} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LikeButton from '../layout/LikeButton';
import SendIcon from '@mui/icons-material/Send';
import AvatarProfile from './../layout/AvatarProfile';
import Tag from './../layout/Tag';
import useOutsideClick from './../utils/useOutsideClick';
import CloseIcon  from '@mui/icons-material/Close';
import TagsInput from './../layout/TagsInput';
import InputField from './../layout/InputField';
import { blogURL } from '../config/Config';
import axios from 'axios';
import ConfirmDelete from './ConfirmDelete';
import BlogContext from './../context/BlogContext';
import moment from 'moment';


const Blog = (props) => {
    const {blog,sx} = props;
    const {deleteBlog,updateBlog}=useContext(BlogContext)
    //blog={id,userId,title,tags,likes,body,rating}
    const [tagsList,setTagsList]=useState([]);
    //const rating=2;
    const [isNews,setIsNews]=useState(false);
    const [isConfirmDeleteOpen,setIsConfirmDeleteOpen]=useState(false);
   // const [likes, setLikes] = useState(785);
    //const [isLiked, setIsLiked] = useState(false);
    const [blogTitle, setBlogTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [bodyError, setBodyError] = useState("");
    const [rating, setRating] = useState(2);
    const [isMe, setIsMe] = useState(true);
    const [editPostIsOpen, setEditPostIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    const moreButtonRef=useRef(null);
    const dialogRef=useRef(null);

    useEffect(()=>{
        if(blog){
         
        if(blog.type==="News"){
            setIsNews(true);
        }else{
            setIsNews(false);
        }
        setBlogTitle(blog.title);
        setBlogBody(blog.content);
        setRating(blog.rating);
        setTagsList(blog.tags);
        //setLikes(blog.likes);
           
    }

    },[blog])

    const handleMoreClick = () => {
    
        setDialogIsOpen(true)
    }
    /*const handleLikeClick = () => {
        if (isLiked) {
            setLikes(l=>l);
        } else {
            setLikes(l=>l);
        }
        setIsLiked(!isLiked);
    }*/
    
  
    useOutsideClick(dialogRef,moreButtonRef,() => setDialogIsOpen(false));
    const editePost=()=>{
        setEditPostIsOpen(true);
    }
    const handleTagsList =(items) =>{
       setTagsList(items);
    }
      const handleblogTitleChange=(e)=>{
               setBlogTitle(e.target.value);
      }
      const handleBlogBodyChange =(e)=>{
        setBlogBody(e.target.value);
      }
      const handleSavePost= async ()=>{
       if(blogTitle.trim()===""){
            setTitleError("Title is required");
            return
       }
       setTitleError("");
       const data={
                title:blogTitle,
                content:blogBody,
                tags:tagsList,
                rating:rating
                }
      await axios.put(`${blogURL}/${blog._id}`,data).then(res=>{
           //console.log(res)
           updateBlog(res.data);
       }).catch(err=>{
              console.log(err)  
         })

        setEditPostIsOpen(false);

      }
    const handleCancelEditePost=()=>{
            
            setBlogTitle(blog.title);
            setBlogBody(blog.content);
            setRating(blog.rating);
            setTagsList(blog.tags);
            setEditPostIsOpen(false);
    }
        
    const handleDeletePost= async()=>{
        await axios.delete(`${blogURL}/${blog._id}`).then(res=>{
            console.log(res)
            deleteBlog(blog._id)
        }).catch(err=>{
            console.log(err)
        })
        setIsConfirmDeleteOpen(false)
    }
    

    return (
        <>
        <Paper elevation={2} sx={{position:'relative', bgcolor:'#fff',margin:'3vh 0vw',padding:'1vh 0.1vw', paddingTop:'0vh',...sx}}>
         <Grid container sx={{}} >
            <Grid item  container xs={10} sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}>
             <AvatarProfile srcImg={""} name={"name"} />
            <Grid sx={{paddingLeft:'0.6vw'}}>
                <Typography variant='body1' fontSize='1.6vw' sx={{cursor:'pointer'}}>channel name</Typography>
            </Grid>
            <Grid sx={{paddingLeft:'0.6vw', fontSize:'0.8vw'}}>{`${moment(blog.createdAt).fromNow()}`}</Grid>
            </Grid>
            <Grid item container xs={2} sx={{}} alignItems='center' justifyContent='right' paddingRight='0.8vw'>
               {isMe &&(<IconButton ref={moreButtonRef} onClick={handleMoreClick}>
                    <MoreVertIcon/>
                </IconButton>
                )} 
            </Grid>
         </Grid>
            <Grid container sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}>
                <Grid item xs={12} >
                <Typography variant='h5'  >
                       {blogTitle} 
                </Typography>
                </Grid>
                <Grid item xs={12} sx={{marginTop:'0.8vh'}} >
                {!isNews && (
                    <Grid container>
                   
                    <Rating
                        name="rating"
                        value={rating}
                        precision={0.5}
                        max={10}
                        readOnly 
                    />
                    </Grid>
                    )}
                </Grid>
                <Grid item xs={12} >
                <Typography variant='subtitle1' component='div'  >
                   {blogBody}
                </Typography>
                </Grid>
                <Grid item xs={12} sx={{marginTop:'0.8vh'}} >
                {tagsList && tagsList.map((tag,index)=>(
                  <Tag key={index} tag={tag}  onClick={()=>console.log(tag)}/>
                  ))}
                 </Grid>
            </Grid> 
         
           {/** <Divider sx={{marginTop:'0.5vh'}}/>
         <Grid container item  sx={{paddingLeft:'0.3vw', paddingBottom:'0.5vh'}} direction="row" alignItems="center"
                                             >
                <Grid item   >
                <LikeButton isLiked={isLiked} onClick={handleLikeClick}/>
                </Grid>
                <Grid  item >
                    
                    <Typography variant='body1' fontSize='1.3vw' sx={{marginLeft:'0.1vw'}}>
                        {isLiked ? `you and ${likes} others`:`${likes} people `}
                    </Typography>
                    
                </Grid>
                
              </Grid> */}
           
        {/**<Divider sx={{marginBottom:'2vh'}}/>
         <Grid  sx={{position:'relative'}}>
                <InputMessage handleMessage={handleMessage}
                              StartAdornement={startAdornement}
                              EndAdornement={endAdornement}
                              inputStyle={{borderRadius:'8px',border:'1px solid #ccc'}}
                              sx={{margin:'0.6vh 0vh'}}
                              placeholder='Write a comment...'
                              size="small"
                              />
            </Grid> */}
        
            {dialogIsOpen &&(
                <>
                <Grid container   sx={{
                position: "absolute",
                top: "6vh",
                left: "45%",
                width:'auto',
                }}
                ref={dialogRef}>
        {/** <MoreButtonDialog open={dialogIsOpen} onClose={closeDialog} />*/} 
       <Paper elevation={8} sx={{width:'20vw'}}>
        <Typography variant='body1'
                    onClick={editePost}
                     fontSize='1.3vw' sx={{padding:'2vh 1.5vw','&:hover':{
            backgroundColor:'#f5f5f5',
            cursor:'pointer'
        } }}>
            Edite post
        </Typography>
        <Divider/>
        <Typography variant='body1' 
                    fontSize='1.3vw'
                    onClick={()=>setIsConfirmDeleteOpen(true)}
                    sx={{padding:'2vh 1.5vw','&:hover':{
                    backgroundColor:'#f5f5f5',
                    cursor:'pointer'
                    }}}>
            Delete post
        </Typography>
        </Paper>
        </Grid>
        </>
        )}
        </Paper>
        <Dialog
                  fullWidth
                  open={editPostIsOpen}
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                    Edit information
                    <IconButton
                          aria-label="close"
                          onClick={handleCancelEditePost}
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
                  <DialogContent dividers>
                    
                    <InputField 
                              fullWidth
                              multiline
                              required
                              maxRows={3}
                              name="blogTitle"
                              label='title'
                              value={blogTitle}
                              onChange={handleblogTitleChange}
                              placeholder='blog title'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={titleError}
                              />
                    {!isNews && (
                        <Grid sx={{padding:'1vh 1vw',marginTop:'1vh'}}>
                        <Typography variant='subtitle1' component="div" fontSize='1.2vw' sx={{cursor:'pointer'}}>
                        Edit rating
                    </Typography>
                        <Rating name="rating" value={rating}
                                precision={0.5}
                                max={10}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }} />
                        </Grid>
                    )}
                    <InputField 
                              fullWidth
                              multiline
                              label='Description'
                              name="blogBody"
                              value={blogBody}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={handleBlogBodyChange}
                              placeholder='Blog description' 
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
                    
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleCancelEditePost}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSavePost}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>

              <ConfirmDelete    open={isConfirmDeleteOpen} 
                                onClose={()=>{setIsConfirmDeleteOpen(false)}}
                                onConfirm={()=>{handleDeletePost()}}
                                />
        </>
    );
};

export default Blog;

    
    
 
    