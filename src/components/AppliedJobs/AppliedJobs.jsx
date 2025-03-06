import { useLoaderData } from "react-router-dom";
import { getApplicants } from "../Utility/Utility";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    // all jobs
    const allJobs = useLoaderData();
    // id stored on local storage
    const ids = getApplicants();
    const [jobsToShow, setJobsToShow] = useState([]);
    useEffect(() => {
        const appliedJobs = allJobs.filter(job => {
            if (ids.includes(job.id)) return job;
        })
        setJobsToShow(appliedJobs);
        console.log('these are the applied jobs: ', appliedJobs)
    }, [])
    return (
        <div>
            <h2>Jobs i applied: {jobsToShow.length}</h2>
            <div>
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
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