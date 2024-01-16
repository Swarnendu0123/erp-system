import SubRow from "./sub-reg-row";
import { useRecoilState, useRecoilValue } from "recoil";
import { sub } from "../store/atom/subjects.atom";
import SelectedSubjects from "./selected-subjects";


const SubjectReg = () => {
  const [subjects, setSubjects] = useRecoilState(sub);
 
  return (
    <div className="flex justify-evenly">
      <div className="text-center">
      <p className="text-3xl mb-10">Subject Registration</p>
      <div className="border flex flex-col ml-20 mr-20 max-h-96">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Subject Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Credit</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Teachers</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {
                    subjects.map(subject => <SubRow subject={subject} key={subject.id}/>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      <SelectedSubjects/>
    </div>
  )
}

export default SubjectReg;