import { Box } from "@mui/material";

const Video = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'977.2px',xs:'386.33px'},
        backgroundColor:'#E8822E',position:'absolute',top:{lg: '2248px', xs:'1472px'},
        left:'0px'}}>
            <img src="/Video.png" className="video" alt="Video"/>
        </Box>
     );
}
 
export default Video;