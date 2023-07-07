import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/mainsection";
import Footer from "./components/footer";
import { Routes, Route} from "react-router-dom";

import { legacy_createStore as createStore } from "redux";
import Jobs from "./components/jobs";
import JobDetails from "./components/jobdetails";
import PageNotFound from "./components/pagenotfound";
import reducer from "./reducer";
import { initialState } from "./reducer";
import { Provider } from "react-redux";


//create store over here
const appstore=createStore(reducer,initialState);

function App(): any {
  return (
    //Add provider here
    <Provider store={appstore}>
    <div>
     
      <Header></Header>
      <Routes>
        
        <Route index element={<Main heading="Find your job here.." desc="We help you to bridge your aspirations and the exact opportunity here find the perfect job that you desreve and apply easily from wherever you want." />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="details/:id" element={<JobDetails />} />
        {/* Write the code here for handling PageNotFound functionality */}
        <Route  path="*" element={<PageNotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;
