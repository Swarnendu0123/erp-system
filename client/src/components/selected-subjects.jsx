import { useRecoilValue } from "recoil";
import SelectedSubRow from "./selected-sub-row";
import { selectedSubjects } from "../store/atom/selectedSubjects.atom";

const SelectedSubjects = () => {
    const selectedSub = useRecoilValue(selectedSubjects);

    return (
        <>
            <div className="flex flex-col">
            <h1 className="text-3xl mb-10">Registration Card</h1>
                <div className="-m-1.5 overflow-x-auto max-h-96">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden ">

                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Subject Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Credit</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Teachers</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Slot</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {selectedSub.map((subject) => (
                                        <SelectedSubRow subject={subject} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedSubjects;