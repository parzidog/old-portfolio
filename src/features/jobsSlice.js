import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchJobsAsync = createAsyncThunk("allJobs", async () => {
  try {
    const { data } = await axios.get(`/api/jobs`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectJobs = (state) => {
  console.log(jobsSlice)
  return state.jobs;
};

export default jobsSlice.reducer;