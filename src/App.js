import './App.css';
import { Form } from './pages';
import StepProvider from './context/StepContext';
import SwitchProvider from './context/SwitchContext';
import AuthProvider from './context/AuthContext';
import { Box, Image } from '@chakra-ui/react';
import bgImg from './assets/bg-sidebar-mobile.svg'
import AppLayout from './components/AppLayout';

function App() {
  return (
    <AuthProvider>
      <StepProvider>
        <SwitchProvider>
          <Image src={bgImg} pos='fixed' top='0' left='0' h='30vh' w='100%' zIndex='-2' objectFit='cover' />
          <Box pos='fixed' top={{ base: '30vh', md: '0' }} left='0' h='100vh' w='100vw' bg='#f0f8fd' zIndex='-1'></Box>
          <AppLayout />
        </SwitchProvider>
      </StepProvider>
    </AuthProvider>
  );
}

export default App;
