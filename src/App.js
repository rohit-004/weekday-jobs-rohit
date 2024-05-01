import JobCard from "./components/JobCard";
import "./App.css";
import { fetchData } from "./services/index.js";
import { useEffect, useState } from "react";

function App() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetchData().then((result) => {
      const jobs = result.jdList;
      setJobList(jobs);
    });
  }, []);

  return (
    <div className="App">
      <div className="job-card-wrapper">
        {jobList.map((job) => {
          return (
            <JobCard
              key={job.jdUid}
              job_title={job.jobRole}
              location={job.location}
              job_description={job.jobDetailsFromCompany}
              apply_link={job.jdLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
