import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const PartThree = () => {
    return ( 
        <Box sx={{width:{lg:'1441px',xs:'414px'}, height:{lg:'602px', xs:'685.2px'},
        position:'absolute',top:{lg:'1646px', xs:'787px'}, left:'0px', 
        backgroundColor:'#E8E3CD', backgroundBlendMode:'darken, normal'}}>
            <Typography sx={{width:{lg:'600px',xs:'237px'},height:{lg:'40px', xs:'60px'},
          textAlign:'center', letterSpacing:'0.01em', fontWeight:'700', fontSize:'24px',
          fontFamily:'Helvetica Now Display', marginLeft:{lg:'400px', xs:'88.5px'}}}>
            A seven-week Bible study with the book of Ephesians.
            </Typography>
            <Box className="bible--study" sx={{width:{lg:'1441px', xs:'414px',
              height:{lg:'500px', xs:'665.2px'}, backgroundColor:'#E8E3CD'}}}>
            <img src="./02_GRACE-Paul.png" className="grace-paul-image" alt="Grace Paul"/>
            <Typography sx={{width:{lg:'339px', xs:'254px'}, height:{lg:'140px', xs:'104px'},
              marginTop:{lg:'-155px',xs:'16px'}, marginLeft:{lg:'500px',xs:'80px'}}}>
              This study explores many of the promises found throughout Scripture,
              and more specifically in Paul’s letter to the Ephesians.</Typography>
              </Box>
        </Box>
     );
}
 
export default PartThree;