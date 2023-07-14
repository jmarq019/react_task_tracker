import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
  const[showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: '歯医者',
            day: '二月一日、午後の二時半',
            reminder: true,
        },
        {
            id: 2,
            text: '美容院の予約',
            day: '二月三日、 午後の一時',
            reminder: true,
        },
        {
            id: 3,
            text: '食品の買い物',
            day: '二月六日、午前の十時',
            reminder: false,
        },
    ]
)

    //Add Task
    const addTask = (task) =>{
      const id = Math.floor(Math.random() * 1000) + 1;
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id ));
    }

    //Toggle Reminder
    const toggleReminder = (id) =>{
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
      <Routes>
      <Route 
        path='/' 
        element = {
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "今日の予定は空いていますよ～！"}
            </>
          } 
      />
      
    <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
