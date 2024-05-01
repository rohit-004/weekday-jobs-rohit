import JobCard from "./components/JobCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="job-card-wrapper">
        <JobCard
          job_title={"ios"}
          company_name={"apple"}
          location={"delhi"}
          job_description={
            "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."
          }
          experience_required={"2 years"}
          apply_link={"https://weekday.works"}
        />
        <JobCard
          job_title={"frontend"}
          company_name={"google"}
          location={"gurugram"}
          job_description={
            "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."
          }
          experience_required={"3 years"}
          apply_link={"https://weekday.works"}
        />
        <JobCard
          job_title={"frontend"}
          company_name={"google"}
          location={"gurugram"}
          job_description={
            "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."
          }
          experience_required={"3 years"}
          apply_link={"https://weekday.works"}
        />
      </div>
    </div>
  );
}

export default App;
