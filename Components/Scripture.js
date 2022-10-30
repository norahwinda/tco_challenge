import { Box, Typography } from "@mui/material";

const Scripture = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'477px', xs:'415px'},
        backgroundColor:'#712559',position:'absolute',top:{lg: '3225.2px', xs:'1858px'},
        left:'0px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography sx={{width:{lg:'805px', xs:'320px'}, height:{lg:'290px',xs:'245px'},
        fontStyle:'normal', fontWeight:'200', fontSize:'20px', color:'#FFFFFF',
        textAlign:'justify'}}>
          Now to Him who is able to do immeasurably more than all we
          ask or imagine, according to His power that is at work within us,
           to Him be glory in the church and in Christ Jesus throughout all 
           generations, forever and ever! Amen.
          </Typography>
          <Typography sx={{width:{lg:'805px', xs:'352px'}, height:{lg:'35px', xs:'26px'},
            textAlign:'center', fontSize:'24px', fontWeight:'700', fontStyle:'normal',
            color:'#FFFFFF'}}>
           Ephesians 3:20-21
           </Typography>
        </Box>
     );
}
 
export default Scripture;