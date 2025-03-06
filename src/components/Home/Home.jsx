import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import FeaturedJobsTitle from "../FeaturedJobs/FeaturedJobsTitle";
import JobCategoryList from "../JobCategoryList/JobCategoryList";


const Home = () => {
    return (
        <div className="text-center  flex flex-col justify-center items-center">
            <h2>This is home</h2>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobsTitle></FeaturedJobsTitle>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;