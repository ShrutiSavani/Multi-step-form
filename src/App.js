import './App.css';
import { Form } from './pages';
import StepProvider from './context/StepContext';
import SwitchProvider from './context/SwitchContext';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <StepProvider>
        <SwitchProvider>
          <Form />
        </SwitchProvider>
      </StepProvider>
    </AuthProvider>
  );
}

export default App;
