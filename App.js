import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Name from './Name';
import Pic from './Pic';
import Adress from './Adress';


function App() {
  return (
    <div className="App">
    <Name/>
    <Pic/>
    <Adress/>

    </div>
  );
}
export default App;
