import { useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css'

const JobDetails = () => {
    const jobs = useLoaderData();
    const id = useParams();
    const idInt = parseInt(id.id);
    const clickedJob = jobs.find(job => job.id === idInt);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = clickedJob;
    return (
        <div className="p-10">
            <h2 className="text-[#1A1919] text-3xl font-extrabold">Job Details</h2>
            <div className="grid md:grid-cols-4">
                <div className="grid md:col-span-3 gap-6">
                    <h3 className="title">Job Description: </h3>
                    <p className="paragraph">{job_description}</p>
                    <h3 className="title">Job Responsibility: </h3>
                    <p className="paragraph">{job_responsibility}</p>
                    <h3 className="title">Educational Requirements: </h3>
                    <p className="paragraph">{educational_requirements}</p>
                    <h3 className="title">Experiences: </h3>
                    <p className="paragraph">{experiences}</p>

                </div>
                <div>
                    <h3>Job Details </h3>
                    <div>
                        <div>
                             <h3 className="title">Salary: </h3>
                             <p className="paragraph">{salary}</p>
                        </div>
                        <div>
                            <h3 className="title">Job Title: </h3>
                            <p className="paragraph">{job_title}</p>
                        </div>

                    </div>
                    <h3>Contact Information</h3>
                    <div>
                        <div>
                            <h3 className="title">Phone: </h3>
                            <p className="paragraph">{contact_information.phone}</p>
                        </div>
                        <div>
                           <h3 className="title">Email:</h3>
                            <p className="paragraph"> {contact_information.email}</p>
                        </div>
                        <div>
                             <h3 className="title">Address: </h3>
                             <p className="paragraph">{contact_information.address}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;