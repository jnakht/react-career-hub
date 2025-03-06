import { useLoaderData } from "react-router-dom";
import { getApplicants } from "../Utility/Utility";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    // all jobs
    const allJobs = useLoaderData();
    // id stored on local storage
    const ids = getApplicants();
    const [jobsToShow, setJobsToShow] = useState([]);
    useEffect( () => {
        const appliedJobs = allJobs.filter(job => {
            if(ids.includes(job.id)) return job;
        })
        setJobsToShow(appliedJobs);
        console.log('these are the applied jobs: ', appliedJobs)
    } ,[])
    return (
        <div>
            <h2>Jobs i applied: {jobsToShow.length}</h2>
            <div>
                {
                    jobsToShow.map(job => <div> 
                        <h2>{job.job_title}, {job.company_name}</h2>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;