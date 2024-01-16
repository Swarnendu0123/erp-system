import SubRow from "./sub-reg-row";
import { useRecoilState, useRecoilValue } from "recoil";
import { sub } from "../store/atom/subjects.atom";
import SelectedSubjects from "./selected-subjects";


const SubjectReg = () => {
  const [subjects, setSubjects] = useRecoilState(sub);
 
  return (
    <div className="flex justify-evenly">
      <div class="flex flex-col ml-20 mr-20">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Subject Name</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Credit</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Teachers</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Availability</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 ">
                  {
                    subjects.map(subject => <SubRow subject={subject} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SelectedSubjects/>
    </div>
  )
}

export default SubjectReg;