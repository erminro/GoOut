import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider, colors } from '@mui/material'
import { MuiBottomNavigation } from './components/MuiBottomNavigation.tsx'
//import { MuiSpeedDial } from './components/MuiSpeedDial';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiTabs /> */}
          {/* <MuiSpeedDial /> */}
          <MuiBottomNavigation />
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiProgress /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiCustomTheme />  */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App;
