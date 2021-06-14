import React from 'react';
import 

// const tasks = [
//     {
//         id: 1,
//         text: "Practice Javascript",
//         day: "everday",
//         reminder: true
//     },
//     {
//         id: 2,
//         text: "Bath the dog",
//         day: "June 15",
//         reminder: false
//     },
//     {
//         id: 3,
//         text: "Career Counseling Meeting",
//         day: "June 20 at 4:30",
//         reminder: true
//     }
// ]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}> {task.text}</h3>))}
        </>
    )
}

export default Tasks;
