import { useRecoilState } from "recoil";
import { sub } from "../store/atom/subjects.atom";
import { selectedSubjects } from "../store/atom/selectedSubjects.atom";

const SubRow = ({ subject }) => {
    const { teachers, name, credits, applicationStatus, id } = subject; // aub
    const [subjects, setSubjects] = useRecoilState(sub);
    const [selectedSub, setSelectedSub] = useRecoilState(selectedSubjects); // aub

    const handleCancel = () => {
        const newSubjects = subjects.map((sub) => {
            if (sub.id === id) {
                return { ...sub, applicationStatus: "No" };
            }
            return sub;
        });
        setSubjects(newSubjects);
    }

    const handleApply = () => {
        const newSubjects = subjects.map((sub) => {
            if (sub.id === id) {
                return { ...sub, applicationStatus: "Pending" };
            }
            return sub;
        });
        setSubjects(newSubjects);
    }

    const handleSelect = () => {
        // destructuring the selectedSub array and adding the new subject to it
        const newSelectedSubjects = [...selectedSub, subject];
        //removing the selected subject from the subjects array
        const newSubjects = subjects.filter((sub) => sub.id !== id);
        setSubjects(newSubjects);
        setSelectedSub(newSelectedSubjects); 
    }



    return (
        <tr class="hover:bg-gray-100 ">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{credits}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{teachers}</td>
            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ">{applicationStatus}</button>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                {applicationStatus == "No" && <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-500 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" onClick={handleApply}>Apply</button>}
                {
                    applicationStatus == "Pending" && <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none" onClick={handleCancel}>Cancel</button>
                }
                {
                    applicationStatus == "Approved" && <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none " onClick={handleSelect}>Select</button>
                }
            </td>
        </tr>
    );
}
export default SubRow;