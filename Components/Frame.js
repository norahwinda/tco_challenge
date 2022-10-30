import { Box, Typography } from "@mui/material";

const Frame = () => {
    return ( 
        <Box sx={{width:{lg:'1441px', xs:'414px'}, height:{lg:'415px', xs:'318px'},
        position:'absolute',top:{lg: '4153.5px', xs:'2779px'},
        left:'0px', backgroundColor:'#E8E3CD', display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center'}}>
            <Typography sx={{width:{lg:'341px', xs:'249px'}, height:{lg:'35px', xs:'26px'},
            fontFamily:'Helvetica Now Display', fontStyle:'normal', fontWeight:'700',
            color:'#000000',display:'flex', alignItems:'center', justifyContent:'center'}}>
            Our prayer is that you’ll receive
            </Typography>
            <img src="Untitled-1 1.png" className="bigwritings" alt="Big Writings"/>
            <Typography sx={{width:{lg:'246px', xs:'197px'}, height:{lg:'80px', xs:'64px'},
             fontFamily:'PP Editorial New', fontStyle:'italic', fontSize:'64px', textAlign:'justify',
             color:'#712559'}}>
            Wisdom
            </Typography>
        </Box>
     );
}
 
export default Frame;