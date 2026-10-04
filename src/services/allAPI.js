import apiService from "../api/apiService";
//api call for get full data

export const getStudentAPI = async (reqBody) => {
  return await apiService("GET", `/students`, reqBody);
};
//api call for add resume, called by steps component

export const addStudentAPI=async(reqBody)=>{
  return await apiService("POST",`/students`,reqBody)
}

//api call for getting single resume, called by view resume when page loaded

export const getSingleStudentAPI = async (id) => {
  return await apiService("GET", `/students/${id}`);
};


//api call for editing resume
export const editstudentAPI =async(id,reqBody) => {
  return await apiService("PUT",`/students/${id}`,reqBody)
}



//api call for delete downloaded resume
export const deletestudentAPI=async (id)=>{
  return await apiService("DELETE",`/students/${id}`,{})
}
