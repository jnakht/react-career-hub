import { Link } from "react-router-dom";


const Job = ({ job }) => {
    console.log(job)
    const { id, logo, company_name, job_title, remote_or_onsite, location, job_type, salary, job_description, job_responsibility
    } = job;
    return (
        <div className="border border-solid border-[#E8E8E8] rounded-[8px]  p-10 h-[392px]">
            <img src={logo} className="w-[116px] h-[40px]" alt="" />
            <h2 className="text-[#474747] text-2xl font-extrabold mt-8">{job_title}</h2>
            <p className="text-[#757575] text-xl font-semibold mt-2">{company_name}</p>
            <div className="flex gap-4 mt-4">
                <button className="btn text-base font-extrabold rounded px-5 py-2 text-[#9873FF]">{remote_or_onsite}</button>
                <button className="btn text-base font-extrabold rounded px-5 py-2 text-[#9873FF]">{job_type}</button>
            </div>
            <div className="flex gap-6 mt-4 ">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p>{location}</p>
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p>Salary: {salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                 <button className="btn px-4 py-3 text-[#FFF] text-xl font-extrabold bg-[#9873FF] mt-6">View Details</button>
            </Link>
        </div>
    );
};

export default Job;