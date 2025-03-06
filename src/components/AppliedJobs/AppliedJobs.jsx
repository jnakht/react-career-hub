import { useLoaderData } from "react-router-dom";
import { getApplicants } from "../Utility/Utility";
import { useEffect } from "react";


const AppliedJobs = () => {
    // all jobs
    const allJobs = useLoaderData();
    // id stored on local storage
    const ids = getApplicants();
    useEffect( () => {
        const appliedJobs = allJobs.map(job => {
            if(ids.includes(job.id)) return job;
        })
        console.log('these are the applied jobs: ', appliedJobs)
    } ,[])
    return (
        <div>
            <h2>Jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;