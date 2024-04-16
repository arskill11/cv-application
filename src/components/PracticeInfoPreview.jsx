function PracticeInfoPreview ({ value }) {
  return (
    <div className="cvPracticePreview">
      <h2 className="cvPracticePreviewHeader">Practice</h2>
      <div className="practice">
        <ul className="practiceList">
          { value.map(prac => {
            return (
              <li className="practiceElement">
                <p className="companyName">&#183; {prac.companyName}</p>
                <p className="position">{prac.position}</p>
                <p className="responsibilities">{prac.responsibilities}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PracticeInfoPreview;