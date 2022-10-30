import { Box, Button } from "@mui/material";


const Navbar = () => {
    return ( 
        <Box className="navbar" sx={{backgroundColor:"#FFFFFF", 
        width:{lg:'1440px', xs:'414px'}, height:{lg:'144px', xs:'60px'},
        display:'flex', alignItems:'center',justifyContent:'center',
        position:'absolute', left:{lg:'0px',xs:'0px'}, right:{lg:'0px', xs:'0px'}}}>
          <Button variant="contained" sx={{backgroundColor:'#000000',
        width:{lg:'162px',xs:'162px'}, height:{lg:'48px',xs:'40px'},
        display:'flex', justifyContent:'center',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.12)',
        borderRadius:'16px', marginRight:'26px'}}>Join an eGroup</Button>
          <Button variant="text" sx={{color:'#000000', 
          width:{lg:'66px', xs:'53px'}, height:{lg:'30px',xs:'24px'},fontSize:'10px',
          fontWeight:'700'}}>Sign In</Button>
        </Box>
     );
}
 
export default Navbar;