function SkillsPreview ({ value }) {
  return (
    <div className="cvSkillsPreview">
      <h2 className="cvSkillsPreviewHeader">Skills</h2>
      <div className="skills">
        { value.map(s => {
          return (
            <p className="skill">{s.skill}</p>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsPreview;