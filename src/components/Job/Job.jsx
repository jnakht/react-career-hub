

const Job = ({job}) => {
    console.log(job)
    const {id, logo, company_name, job_title, mote_or_onsite} = job;
    return (
        <div>
            <h2>id: {id}</h2>
            <img src={logo} alt="" />
            <h2>Company Name: {company_name}</h2>
        </div>
    );
};

export default Job;