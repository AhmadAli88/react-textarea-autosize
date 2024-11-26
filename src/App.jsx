import './App.css';
import BasicExample from './components/BasicExample';
import ControlledTextarea from './components/ControlledTextarea';
import FixedWidthExample from './components/FixedWidthExample';
import FormExample from './components/FormExample';
import MinMaxRowsExample from './components/MinMaxRowsExample';
import StyledTextarea from './components/StyledTextarea';

function App() {
  return (
    <div>
      <BasicExample />
      <StyledTextarea />
      <MinMaxRowsExample />
      <ControlledTextarea/>
      <FixedWidthExample/>
      <FormExample/>
    </div>
  );
}

export default App;
