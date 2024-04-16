import GeneralInfoForm from "./GeneralInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import PracticeInfoForm from "./PracticeInfoForm";
import SkillsForm from "./SkillsFrom";
import GeneralInfoPreview from "./GeneralInfoPreview";
import EducationInfoPreview from "./EducationInfoPreview";
import PracticeInfoPreview from "./PracticeInfoPreview";
import SkillsPreview from "./SkillsPreview";
import '../styles/App.css'
import '../styles/Form.css'
import '../styles/Preview.css'
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    generalInfo: {
      firstName: '',
      lastName: '',
      occupation: '',
      email: '',
      facts: '',
    },
    educationInfo: {
      schoolName: '',
      titleOfStudy: '',
      from: null,
      to: null,
    },
    practiceInfo: [
      {
        id: 1,
        companyName: '',
        position: '',
        responsibilities: '',
      }
    ],
    skills: [
      {
        id: 1,
        skill: '',
      }
    ]
  });

  console.log(info);
  return (
    <div className="mainApplication">
      <h1 className="mainApplicationHeaader">cv-application</h1>
      <div className="container">
        <div className="mainForm">
          <GeneralInfoForm onEdit={setInfo} value={info} />
          <EducationInfoForm onEdit={setInfo} value={info} />
          <PracticeInfoForm onEdit={setInfo} value={info} />
          <SkillsForm onEdit={setInfo} value={info} />
        </div>
        <div className="cvPreview">
          <GeneralInfoPreview value={info.generalInfo} />
          <EducationInfoPreview value={info.educationInfo} />
          <PracticeInfoPreview value={info.practiceInfo} />
          <SkillsPreview value={info.skills} />
        </div>
      </div>
    </div>
  )
}

export default App
