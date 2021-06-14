import Header from "./Header.js"
import Button from 'react-bootstrap/Button';

import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="container">
      <Header title="Goal Getter: Tasks" />
     <Task/>
    
    </div>
  );
};


export default App;
