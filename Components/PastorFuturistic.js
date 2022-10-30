import { Box, Button, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const PastorFuturistic = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'451px', xs:'506.75px'},
        backgroundColor:'#C1B08F',position:'absolute',top:{lg: '3702.5px', xs:'2273px'},
        left:'0px'}}>
        <Box>
        <Box sx={{width:{lg:'448px',xs:'318px'}, height:{lg:'170px',xs:'100px'},
          position:'absolute', top:{lg:'100.39px', xs:'250px'}, left:{lg:'260px', xs:'53px'}}}>
         <Typography sx={{width:{lg:'448px', xs:'318px'}, height:{lg:'120px', xs:'44px'},
        fontWeight:'800', fontSize:'31.18', fontStyle:'mulish'}}>
         Listen to the book of Ephesians narrated by Pastor Steven Furtick
         </Typography>
         <Button variant="contained" sx={{backgroundColor:'#000000',
        width:{lg:'162px',xs:'162px'}, height:{lg:'48px',xs:'40px'},
        display:'flex', justifyContent:'center',marginTop:{lg:'2px', xs:'10px'},
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.12)'}}>
        <PlayCircleFilledWhiteIcon />Listen Now
        </Button>
        </Box>
        <Box sx={{width:{lg:'300.01px', xs:'200.17px'}, height:{lg:'310.7px', xs:'210.42px'},
          display:'flex', alignItems:'center', justifyContent:'center', position:'absolute',
          top:{lg:'17.39px', xs:'49.03px'}, left:{lg:'660.23px', xs:'53px'}}}>
        <img src="/book.png" className="book" alt="05 1"/>
        </Box>
        </Box>
        </Box>
     );
}
 
export default PastorFuturistic;