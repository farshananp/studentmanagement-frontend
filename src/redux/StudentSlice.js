import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { addStudentAPI, deletestudentAPI, editstudentAPI, getSingleStudentAPI, getStudentAPI } from '../services/allAPI'

export const fetchStudents=createAsyncThunk(
    "students/fetchStudents",async()=>{
        const response=await getStudentAPI()
        return response.data
    }
)

export const addStudents=createAsyncThunk(
    "students/addStudents",async(student)=>{
        const response=await addStudentAPI(student)
        return response.data
    }
)
 export const editStudents=createAsyncThunk(
    "students/editStudents",async(student)=>{
        const response=await editstudentAPI(student.id,student)
        return response.data
    }
 )
export const getStudent=createAsyncThunk(
    "students/getstudent",async(id)=>{
        const response=await getSingleStudentAPI(id)
        return response.data
    }
)
export const deleteStudent=createAsyncThunk(
    "students/deletestudent",async(id)=>{
        const response=await deletestudentAPI(id)
        return response.data
    }
)

export const studentSlice=createSlice({
    name:"students",
    initialState:{
        students:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(fetchStudents.pending,
    (state,action)=>{
        state.loading=true;

    }
)
builder.addCase(fetchStudents.fulfilled,
    (state,action)=>{
        state.loading=false,
        state.students=action.payload

    }
)
builder.addCase(fetchStudents.rejected,
    (state,action)=>{
        state.loading=false,
        state.error="failed to fetch students API"

    }
)
builder.addCase(addStudents.fulfilled,
    (state,action)=>{
        state.students.push(action.payload)
    }
)
builder.addCase(editStudents.fulfilled,
(state,action)=>{
    const index=state.students.findIndex(
        (student)=>
            student.id==action.payload.id
        

    )
    if(index!==-1){
     state.students[index]=action.payload
    }
}
)
builder.addCase(deleteStudent.fulfilled,
    (state,action)=>{
       state.students=state.students.filter((student)=>(
student.id!==action.payload
       ))
    }
)
    }
})
export default studentSlice.reducer