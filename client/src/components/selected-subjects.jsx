import { useRecoilValue } from "recoil";
import SelectedSubRow from "./selected-sub-row";
import { selectedSubjects } from "../store/atom/selectedSubjects.atom";

const SelectedSubjects = () => {
    const selectedSub = useRecoilValue(selectedSubjects);

    return (
        <>
            <div class="flex flex-col">
            <h1 className="text-3xl md-20">Registration Card</h1>
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="border rounded-lg overflow-hidden ">

                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Subject Name</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Credit</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Teachers</th>
                                        <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Slot</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {selectedSub.map((sub) => (
                                        <SelectedSubRow sub={sub} />
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