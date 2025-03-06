import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } ,[])
    const [dataLength, setDataLength] = useState(4);
    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job job={job}></Job>)
            }
            </div>
            <div className={`mx-auto border-2 border-green-500 text-center mt-2 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary ">Show All</button>
            </div>
        </div>
        
    );
};

export default FeaturedJobs;