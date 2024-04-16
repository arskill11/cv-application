function EducationInfoForm ({ onEdit, value }) {
  
  function handleChange(e) {
    onEdit({
      ...value,
      educationInfo: {
        ...value.educationInfo,
        [e.target.className]: e.target.value
      }
    })
  }

  return ( 
    <div className="educationInfo">
      <h2 className="educationInfoHeader">Education</h2>
      <form>
        <input type="text"
          className="schoolName"
          onChange={handleChange}
          placeholder="School Name" />
        <input type="text"
          className="titleOfStudy"
          onChange={handleChange}
          placeholder="Title of Study" />
        <div className="studyPeriod">
          <h3>Study period</h3>
          <div className="interval">
            <input type="number"
              className="from"
              onChange={handleChange}
              placeholder="From"
              min={1900} max={2030}
            />
            <input type="number"
              className="to"
              onChange={handleChange}
              placeholder="To"
              min={1900} max={2050}
            />
          </div>
        </div>
        </form>
    </div>
  )
}

export default EducationInfoForm;