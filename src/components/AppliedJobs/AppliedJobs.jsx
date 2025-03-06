import { useLoaderData } from "react-router-dom";
import { getApplicants } from "../Utility/Utility";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    // all jobs
    const allJobs = useLoaderData();
    // id stored on local storage
    const ids = getApplicants();
    const [jobsToShow, setJobsToShow] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const handleFilteredJobs = filterText => {
        if (filterText === 'all') {
            setFilteredJobs(jobsToShow);
        }
        else if (filterText === 'remote') {
            const filteredRemoteJobs = jobsToShow.filter(job => job.remote_or_onsite === 'Remote');
            setFilteredJobs(filteredRemoteJobs);
        }
        else if (filterText === 'onsite') {
            const filteredOnsiteJobs = jobsToShow.filter(job => job.remote_or_onsite === 'Onsite');
            setFilteredJobs(filteredOnsiteJobs);
            
        }
    }
    useEffect(() => {
        const appliedJobs = allJobs.filter(job => {
            if (ids.includes(job.id)) return job;
        })
        setJobsToShow(appliedJobs);
        setFilteredJobs(appliedJobs)
        console.log('these are the applied jobs: ', appliedJobs)
    }, [])
    return (
        <div>
            <h2>Jobs i applied: {jobsToShow.length}</h2>
            <div className="w-full flex justify-end border-2 border-red-500">
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleFilteredJobs('all')}><a>All</a></li>
                        <li onClick={() => handleFilteredJobs('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilteredJobs('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    filteredJobs.map(job => 
                        <h2>{job.job_title}, {job.company_name}</h2>

                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;