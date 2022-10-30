import { Box } from "@mui/material";

const Wisdom = () => {
    return ( 
        <Box sx={{width:{lg:'1440px', xs:'414px'}, height:{lg:'1865px', xs:'1236px'},
        position:'absolute',top:{lg: '6130.5px', xs:'4174.7px'},
         left:'0px', backgroundColor:'#E8E3CD'}}>
            <img src="/01_WISDOM-element2 2.png" alt="Wisdom" className="wisdom"/>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',
                justifyContent:'center'}}>
            <img src="/Title.png" alt="FAQ" className="title"/>
            <img src="/Question Dropdown.png" alt="question drop" className="question"/>
            </Box>
        </Box>
     );
}
 
export default Wisdom;