import { Box } from '@chakra-ui/react';
import './App.css';
import { Form } from './pages';
import StepProvider from './context/StepContext';

function App() {
  return (
    <Box>
      <StepProvider>
        <Form />
      </StepProvider>
    </Box>
  );
}

export default App;
