import { Box } from '@chakra-ui/react';
import './App.css';
import { Form } from './pages';
import StepProvider from './context/StepContext';
import SwitchProvider from './context/SwitchContext';

function App() {
  return (
    <Box>
      <StepProvider>
        <SwitchProvider>
          <Form />
        </SwitchProvider>
      </StepProvider>
    </Box>
  );
}

export default App;
