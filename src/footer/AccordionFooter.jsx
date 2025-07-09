import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function AccordionFooter() {
  return (
    <div>
      <Accordion defaultExpanded={false} disableGutters={true} square={true} 
      sx={{
        boxShadow:'none',
        py:'6px',
        px:'10px',
        '&::before': {
          backgroundColor: '#71767f', 
        },
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
          >Account
          </Typography>
        </AccordionSummary>
        <AccordionDetails 
        sx={{
          px:0,
          pb:2
        }}>
          <ul className='text-[12px]'>
            <li>Register</li>
            <li>Sign in</li>
            <li>Orders</li>
            <li>Returns</li>
            <li>GUESS List</li>
            <li>Sign up for text</li>
            <li>Recycle with GUESS</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        disableGutters={true} 
        square={true} 
        sx={{
          boxShadow:'none',
          py:'6px',
          px:'10px',
          '&.Mui-expanded::before': {
            opacity: 1,
          },
          '&.Mui-expanded::after': {
            opacity: 1,
          },
          '&::before': {
              backgroundColor: '#71767f', 
          },
        }}
        >
        <AccordionSummary
          expandIcon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8L10 11.5L6 8" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          }
          sx={{px:'0px'}}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography 
          component="span"
          sx={{
            color:'#000',
            fontSize:'14px',
            fontWeight:'500',
            fontFamily:'Inter'
          }}
          >Assistance</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px:0,
            pb:2
          }}
        >
          <ul className='text-[12px] '>
            <li>Customer care</li>
            <li>Promotions and Offers</li>
            <li>Size charts</li>
            <li>Store locator</li>
            <li>GUESS services</li>
            <li>Apple Pay</li>
            <li>Klarna</li>
            <li>Gift cards</li>
            <li>Feedback</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        disableGutters={true} 
        square={true} 
        sx={{
          boxShadow:'none',
          py:'6px',
          px:'10px',
          '&.Mui-expanded::before': {
            opacity: 1,
          },
          '&::before': {
              backgroundColor: '#71767f', 
          },
        }}
        >
        <AccordionSummary
          expandIcon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8L10 11.5L6 8" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          }
          sx={{px:'0px'}}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography 
          component="span"
          sx={{
            color:'#000',
            fontSize:'14px',
            fontWeight:'500',
            fontFamily:'Inter'
          }}
          >Company</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px:0,
            pb:2
          }}
        >
          <ul className='text-[12px] '>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>About GUESS List</li>
            <li>GUESS 81 app</li>
            <li>Investor relations</li>
            <li>GUESS Foundation</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        disableGutters={true} 
        square={true} 
        sx={{
          boxShadow:'none',
          py:'6px',
          px:'10px',
          '&.Mui-expanded::before': {
            opacity: 1,
          },
          '&.Mui-expanded::after': {
            opacity: 1,
          },
          '&::before': {
              backgroundColor: '#71767f', 
          },
          borderBottom: '2px solid #71767f',
        }}
        >
        <AccordionSummary
          expandIcon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8L10 11.5L6 8" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          }
          sx={{px:'0px'}}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography 
          component="span"
          sx={{
            color:'#000',
            fontSize:'14px',
            fontWeight:'500',
            fontFamily:'Inter'
          }}
          >Brands</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px:0,
            pb:2
          }}
        >
          <ul className='text-[12px] '>
            <li>MARCIANO</li>
            <li>GUESS USA</li>
            <li>GUESS Jeans</li>
            <li>GUESS Originals</li>
            <li>GUESS Kids</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionFooter

