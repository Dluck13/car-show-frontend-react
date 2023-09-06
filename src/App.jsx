
import { AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import  DataGrid  from './components/DataGrid'


const App = () => {
  return (
   <div className='app-div'>
    <AppBar position='static'>
      <Toolbar>
        <Typography align='center' variant='h1' >
           Car Show 🏎️
        </Typography>
      </Toolbar>      
    </AppBar>
    <DataGrid  />
   </div>
  )
}

export default App
