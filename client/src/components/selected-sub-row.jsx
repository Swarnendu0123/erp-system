import { useRecoilState } from "recoil";
import { sub } from "../store/atom/subjects.atom";
import { selectedSubjects } from "../store/atom/selectedSubjects.atom";

const SelectedSubRow = ({ subject }) => {
    const { teachers, name, credits, slot, id } = subject;
    const [ subjects, setSubjects ] = useRecoilState(sub);
    const [ selectedSub, setSelectedSub ] = useRecoilState(selectedSubjects);

    const handleCancel = () => {
        //removing the selected subject from the selectedSub array
        const newSelectedSubjects = selectedSub.filter((sub) => sub.id !== id);
        // adding the selected subject back to the subjects array
        const newSubjects = [...subjects, subject];
        setSubjects(newSubjects);
        setSelectedSub(newSelectedSubjects);
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{credits}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{teachers}</td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">{slot}</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={handleCancel}>cancel</button>
            </td>
        </tr>
    )
}
export default SelectedSubRow;