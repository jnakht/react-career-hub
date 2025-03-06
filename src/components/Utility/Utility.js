import { setItem } from "localforage";

const getApplicants = () => {
    const applicants = localStorage.getItem('applicants');
    if (applicants) {
        return JSON.parse(applicants);
    }
    return [];
}

const setToLocal = (existing) => {
    const obj = JSON.stringify(existing);
    localStorage.setItem('applicants', obj);
    console.log('the obj is : ', obj)
}
const setApplicants = id => {
    console.log('start of setapplicants');
    const existing = getApplicants();
    console.log('existing: ', existing)
    const isThere = existing.find(eId => eId === id);
    console.log('is therer', isThere);
    if (!isThere) {
        existing.push(id);
    } 
    setToLocal(existing);
    console.log('end of setapplicansts')
}

export {getApplicants, setToLocal, setApplicants};