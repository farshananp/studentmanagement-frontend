import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { fetchStudents } from "../redux/StudentSlice";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../redux/StudentSlice";

const StudentList = () => {
    const dispatch=useDispatch()
const {students,loading,error}=useSelector((state)=>state.students)
useEffect(()=>{
    dispatch(fetchStudents())
},[dispatch])
 const navigate=useNavigate()

const handleDelete=async()=>{
    const confirmDelete=window.confirm("are you sure you want to delete?")
    if(!confirmDelete){
        return
    }
    try{
await dispatch(deleteStudent(id)).unwrap()

    }
    catch(error){
console.log("error");

    }
 }
  return (
    <div className="student-page">

      <div className="student-header">
        <div>
          <h1>Student Management</h1>
          <p>Manage all students in one place</p>
        </div>

        <button className="add-btn" onClick={()=>navigate('/addstudent')}>
          + Add Student
        </button>
      </div>

      <div className="student-grid">
        {
        students.map((student)=>
 <div className="student-card">
          <div className="student-avatar">{student.name.charAt(0)}</div>

          <div className="student-info">
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <span>{student.email}</span>
          </div>

          <div className="card-actions">
            <button className="view-btn" onClick={()=>navigate(`/viewstudent/${student.id}`)}>View</button>
            <button className="edit-btn" onClick={()=>navigate(`/editstudent/${student.id}`)}>Edit</button>
            {/* <button className="delete-btn" onClick={handleDelete}>Delete</button> */}
          </div>
        </div>)
       
}
       




      </div>

    </div>
  );
};

export default StudentList;