import Header from "./Header.js"

import { useState } from 'react';
import Tasks from "./Tasks"
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Practice Javascript",
        day: "everday",
        reminder: true
    },
    {
        id: 2,
        text: "Bath the dog",
        day: "June 15",
        reminder: false
    },
    {
        id: 3,
        text: "Career Counseling Meeting",
        day: "June 20 at 4:30",
        reminder: true
    }
]
)

  const deleteItem = (id) => {
     setTasks = (tasks.filter((task) => task.id !== id))
    
  }

  return (
    <div className="container">
      <Header title="Goal Getter: Tasks" />
      <Tasks tasks={tasks} onDelete={deleteItem}/>
    
    </div>
  );
};


export default App;
