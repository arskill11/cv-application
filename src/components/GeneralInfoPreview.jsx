function GeneralInfoPreview ({ value }) {
  return (
    <div className="cvGeneralPreview">
      <div className="general">
        <p className="firstName">{value.firstName}</p>
        <p className="lastName">{value.lastName}</p>
        <p className="occupation">{value.occupation}</p>
        <p className="email">{value.email}</p>
        <p className="facts">{value.facts}</p>
      </div>
    </div>
  )
}

export default GeneralInfoPreview;