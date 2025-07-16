import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 200, 
      md: 770,
      lg: 1020
    },
  },
});

export default theme;