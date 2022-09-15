import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchProjectsAsync = createAsyncThunk("allProjects", async () => {
  try {
    const { data } = await axios.get(`/api/projects`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addProjectAsync = createAsyncThunk("createProject", async ({fname, lname, email, gpa, imgUrl, campusId}) => {
  try {
    const { data } = await axios.post(`/api/projects/`,{
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

export const deleteProjectAsync = createAsyncThunk("deleteProject", async (projectId)=>{
  try{
    const { data } = await axios.delete(`/api/projects/${projectId}`);
    return data;
  }
  catch(err){
    console.log(err)
  }
})

export const editProjectAsync = createAsyncThunk(
  "editProject",
  async ({id,fname, lname, email, gpa, imgUrl, campusId}) => {
    const { data } = await axios.put(`/api/projects/${id}`, {
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

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectProjects = (state) => {
  return state.projects;
};

export default projectsSlice.reducer;