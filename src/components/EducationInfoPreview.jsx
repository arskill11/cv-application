function EducationInfoPreview({ value }) {


  return (
    <div className="cvEducationPreview">
      <h2 className="cvEducationPreviewHeader">Education</h2>
      <div className="education">
        <p className="schoolName">{value.schoolName}</p>
        <p className="titleOfStudy">{value.titleOfStudy}</p>
        { value.from && value.to && 
          <p className="duration">{value.from} - {value.to}</p>
        }
      </div>
    </div>
  )
}

export default EducationInfoPreview;