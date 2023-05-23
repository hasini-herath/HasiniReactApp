import logo from './logo.svg';
import './App.css';

import Records from './records.json';

function App() {
  return (
    <div className="App">
 
  {
     Records.map( record => {
      return(
        <div className="box" key={record.id}>
         <strong> {record.field}</strong> : {record.fieldcontent}<br/><br/>

        </div>
       
      )
    } )
  }
   <button>submit</button>
    </div>
  );
}

export default App;
