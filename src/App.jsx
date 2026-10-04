
import './App.css'
import {Route,Routes} from 'react-router-dom'
import StudentList from './pages/StudentList'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'
import StudentDetails from './pages/StudentDetails'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<StudentList/>}/>
       <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/editstudent/:id' element={<EditStudent/>}/>
         <Route path='/viewstudent/:id' element={<StudentDetails/>}/>
    </Routes>
     </>
  )
}

export default App
