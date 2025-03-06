import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } ,[])
    return (
        <div className="grid grid-cols-2 gap-6">
            {
                jobs.map(job => <Job job={job}></Job>)
            }
        </div>
    );
};

export default FeaturedJobs;