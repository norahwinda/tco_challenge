import { Box, Button, Typography } from "@mui/material";

const Signin = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'724px', xs:'477.83px'},
         backgroundColor:'#7FB7C1',position:'absolute',top:{lg: '5406.5px', xs:'3697.7px'},
         left:'0px', display:'flex', flexDirection:'column', alignItems:'center',
         justifyContent:'center', paddingBottom:'10px'}}>
          <img src="/eGroup bubble.png" alt="bubble" className="bubble" />
          <Typography sx={{width:{lg:'645px', xs:'302px'}, height:{lg:'36px', xs:'72px'},
         fontFamily:'Helvetica Now Display', fontStyle:'normal', fontWeight:'700',
         fontSize:'32px', textAlign:'center', color:'#000000'}}>
          Ready to get started?
          </Typography>
          <Button variant="contained" sx={{width:{lg:'302px', xs:'302px'}, height:{lg:'48px', xs:'48px'},
        display:'flex', flexDirection:'row', backgroundColor:'#000000', borderRadius:'16px'}}>
          Join an eGroup
          </Button>
          <Typography sx={{width:{lg:'164px',xs:'145px'}, height:{lg:'24px', xs:'21px'},
             fontFamily:'Mulish', fontStyle:'normal', fontSize:'16px', textAlign:'center',
             color:'#000000'}}>
          Already in an eGroup?
          </Typography>
          <img src="/Button.png" alt="Button" className="Button"/>
          <Typography src={{width:{lg:'302px', xs:'302px'}, height:{lg:'42px', xs:'42px'},
             fontFamily:'Mulish', fontStyle:'normal', fontWeight:'500', fontSize:'14px',
             textAlign:'center'}}>
             *contact your eGroup leader with 
           Sign-in instructions
          </Typography>
          <img src="/04_PEACE-element 1.png" alt="Landscape" className="landscape"/>
        </Box>
     );
}
 
export default Signin;