import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { footerList } from '../../server/footerData';

function AccordionFooter() {
    return (
      <>
      {
        footerList.map((item,i)=>(
          <Accordion key={i} defaultExpanded={false} disableGutters={true} square={true} 
          sx={{
            boxShadow:'none',
            py:'6px',
            px:'10px',
            '&::before': {
              backgroundColor: '#71767f', 
            },
            // '&.Mui-expanded::before': {
            //     opacity: 1,
            // },
            
            ...(i!=2 &&
            {'&.Mui-expanded::after': {
              opacity: 1,
            },} ),
            ...(i!=0 &&
            {'&.Mui-expanded::before': {
              opacity: 1,
            },} )
          }}>
            <AccordionSummary
              expandIcon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8L10 11.5L6 8" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
                  </path>
                </svg>
              }
              sx={{px:'0px'}}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography 
              component="span"
              sx={{
                color:'#000',
                fontSize:'14px',
                fontWeight:'500',
                fontFamily:'Inter'
              }}
              >{item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails 
            sx={{
              px:0,
              pb:2
            }}>
              <ul className='text-[12px]'>
                {
                  item.options.map((option,index)=><li key={index}>{option}</li>)
                }
              </ul>
            </AccordionDetails>
          </Accordion>
        ))
      }
      </>
    )
}

export default AccordionFooter

