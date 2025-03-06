import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const id = useParams();
    const idInt = parseInt(id.id);
    console.log('id : ', id)
    console.log('id int: ', idInt)

    console.log('jobs: ', jobs)
    
    const clickedJob = jobs.find(job => job.id === idInt);
    console.log('clicked job: ', clickedJob)
    return (
        <div>
            <h2>Details of job: {clickedJob.id}</h2>
        </div>
    );
};

export default JobDetails;