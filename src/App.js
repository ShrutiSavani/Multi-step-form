import './App.css';
import { Form } from './pages';
import StepProvider from './context/StepContext';
import SwitchProvider from './context/SwitchContext';
import AuthProvider from './context/AuthContext';
import { Box, Image } from '@chakra-ui/react';
import useWindowsWidth from './hooks/UseWindowsWidth';
import bgImg from './assets/bg-sidebar-mobile.svg'
import AppLayout from './components/AppLayout';

function App() {
  const { width } = useWindowsWidth()
  return (
    <AuthProvider>
      <StepProvider>
        <SwitchProvider>
          {/* <Box pos='fixed' top='0' left='0' h='100vh' w='100vw' bg='#cbe9fa' zIndex='-1' ></Box> */}
          <Image src={bgImg} pos='fixed' top='0' left='0' h='30vh' w='100%' zIndex='-1' objectFit='cover' />
          {/* <Box pos='fixed' top='0' left='0' h='30vh' w='100vw' bg='blue.50' zIndex='-1'></Box> */}
          <Box pos='fixed' top='30vh' left='0' h='100vh' w='100vw' bg='#f0f8fd' zIndex='-1'></Box>


          <AppLayout/>
        </SwitchProvider>
      </StepProvider>
    </AuthProvider>
  );
}

export default App;
