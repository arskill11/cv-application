function GeneralInfoForm ({onEdit, value}) {

  function handleChange(e) {
    onEdit({
      ...value,
      generalInfo: {
        ...value.generalInfo,
        [e.target.className]: e.target.value,
      }})
  }

  return (
    <div className="personalInfo">
      <h2 className="personalInfoHeader">Personal Information</h2>
      <form>
        <div className="name">
          <input type="text"
            className="firstName"
            placeholder="First Name" 
            maxLength={15}
            onChange={handleChange} />
          <input type="text"
            className="lastName"
            placeholder="Last Name"
            maxLength={15}
            onChange={handleChange} />
        </div>
        <input type="text"
          className="occupation"
          placeholder="Your Occupation"
          maxLength={15}
          onChange={handleChange} />
        <input type="email"
          className="email"
          placeholder="Email"
          onChange={handleChange} />
        <textarea rows={4} className="facts"
          placeholder="Write something about yourself"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  )
}

export default GeneralInfoForm;