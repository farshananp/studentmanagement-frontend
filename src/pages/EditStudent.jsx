import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudents, getStudent } from "../redux/StudentSlice";


const EditStudent = () => {
const {id} =useParams()
const dispatch=useDispatch()
const navigate=useNavigate()

const [student,setStudent]=useState({
    id:id,
    name:"",
    course:"",
    email:""
})

const handleChange=(e)=>{
    const {name,value}=e.target
    setStudent({
        ...student,
        [name]:value
    })
}

const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        await dispatch(editStudents(student)).unwrap()
         alert("Student updated successfully");
        navigate(`/viewstudent/${student.id}`)
    }
    catch(error){
console.log(error);

    }
}
 useEffect(()=>{
    const loadStudent=async()=>{
        try{
         const data=await dispatch(getStudent(id)).unwrap()
         setStudent(data)
         
        }
        catch(error){
console.log("error");

        }
    }
    loadStudent()
 },[dispatch,id])
  return (
    <div className="edit-page">

      <div className="edit-container">

        <div className="edit-header">
          <h1>Edit Student</h1>
          <p>Update student information</p>
        </div>


        <form onSubmit={handleSubmit}>

          <div className="edit-group">
            <label>Student Name</label>

            <input
              type="text"
              value={student.name}
              
              name="name"
              onChange={handleChange}

            />
          </div>


          <div className="edit-group">
            <label>Course</label>

            <input
              type="text"
               value={student.course}
              
              name="course"
              onChange={handleChange}
            />
          </div>


          <div className="edit-group">
            <label>Email</label>

            <input
              type="email"
               value={student.email}
              
              name="email"
              onChange={handleChange}
            />
          </div>


          <div className="edit-buttons">

            <button
              type="button"
              className="edit-cancel-btn"
            onClick={()=>navigate('/')}>
              Cancel
            </button>

            <button
              type="submit"
              className="update-btn"

            >
              Update Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditStudent;