import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material"

const StudyBooks = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'838px', xs:'600.7px'},
        position:'absolute',top:{lg: '4568.5px', xs:'3097px'}, left:'0px'}}>
        <Box sx={{width:'100%',height:'40%', backgroundColor:'#3C7E6B', display:'flex',
          flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
         <Typography sx={{width:{lg:'474px', xs:'302px'}, height:{lg:'80px', xs:'60px'},
         fontFamily:'Helvetica Now Display', fontStyle:'normal', fontWeight:'500',
         textAlign:'center', color:'#FFFFFF', marginTop:{lg:'350px', xs:'200px'}}}>
         Complete the study on your tablet, Kindle, or Nook.
         </Typography>
         <Box sx={{width:{lg:'805px', xs:'350px'}, height:{lg:'342px', xs:'148.7px'}}}>
         <img src="/IM_book_layout 2.png" className="book-layout" alt="Book Layout"/>
         </Box>
        </Box>
        <Typography sx={{width:{lg:'811px',xs:'302px'}, height:{lg:'96px', xs:'120px'},
           fontFamily:'Helvetica Now Display', fontStyle:'normal', fontSize:'24px',
           textAlign:'justify', color:'#161412', marginTop:{lg:'200px',xs:'100px'},
           marginLeft:{lg:'315px', xs:'56px'}}}>
        Join an eGroup to download the free PDF that can be 
        printed or uploaded to a Kindle, Nook, or tablet or 
        purchase a hard copy of the study book from the Elevation Church store.
        </Typography>
        <Button variant="contained"  sx={{backgroundColor:'#3C7E6B', width:{lg:'287px', xs:'302px'},
        height:{lg:'48px', xs:'48px'}, borderRadius:'16px', marginTop:{lg:'48px', xs:'150px'},
        marginLeft:{lg:'577px', xs:'54px'}}}>
        Purchase Book
        </Button>
        </Box>
     );
}
 
export default StudyBooks;