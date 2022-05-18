import React, {Fragment} from 'react'
import Header from "./components/layout/Header";
import Education from "./components/credentials/Education";
import Work from "./components/credentials/Work";
import Courses from "./components/credentials/Projects";

function App() {
  return (
        <Fragment>
            <Header/>
            <Education/>
            <Work/>
            <Courses/>
        </Fragment>
  );
}

export default App;
