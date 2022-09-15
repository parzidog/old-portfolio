import { configureStore } from "@reduxjs/toolkit";
import schoolsSlice from "../features/schoolsSlice";
import projectsSlice from "../features/projectsSlice";
import jobsSlice from "../features/jobsSlice";

const store = configureStore(
  {
  reducer: {
    jobs: jobsSlice,
    projects: projectsSlice,
    schools: schoolsSlice
  },
}
);

export default store;