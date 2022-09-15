import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchSchoolsAsync = createAsyncThunk("allSchools", async () => {
  try {
    const { data } = await axios.get(`/api/schools`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addSchoolAsync = createAsyncThunk("createSchool", async ({fname, lname, email, gpa, imgUrl, campusId}) => {
  try {
    const { data } = await axios.post(`/api/schools/`,{
      fname,
      lname,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    return data;
  } catch (err) {
    console.log(err.response);
  }
});

export const deleteSchoolAsync = createAsyncThunk("deleteSchool", async (schoolId)=>{
  try{
    const { data } = await axios.delete(`/api/schools/${schoolId}`);
    return data;
  }
  catch(err){
    console.log(err)
  }
})

export const editSchoolAsync = createAsyncThunk(
  "editSchool",
  async ({id,fname, lname, email, gpa, imgUrl, campusId}) => {
    const { data } = await axios.put(`/api/schools/${id}`, {
      fname,
      lname,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    return data;
  }
);

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSchoolsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectSchools = (state) => {
  return state.schools;
};

export default schoolsSlice.reducer;