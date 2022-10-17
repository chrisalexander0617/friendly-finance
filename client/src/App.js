import {
  Container,
  Box, 
  Paper, 
  Typography,
  Grid,
  Button
} from '@mui/material'
import {MortageCalculator} from '../src/components/MortgageCalculator'

function App() {
  const styles = {
    Paper:{
      padding:5
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:'10px',
      padding:5,
      alignItems:'start'
    }
  }
  return (
    <Container>
      <Box sx={styles.FlexBox}>
        <MortageCalculator />
      </Box>
    </Container>
  )
}

export default App
