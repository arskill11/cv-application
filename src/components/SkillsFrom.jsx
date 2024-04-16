let nextId = 2;
function SkillsForm ({ onEdit, value }) {

  function handleChange(e) {
    let index = e.target.getAttribute('data-id');
    let nextSkills = value.skills.map(s => {
      if (index == s.id) {
        return {
          ...s,
          [e.target.className]: e.target.value,
        }
      } else {
        return s;
      }
    })

    onEdit({
      ...value,
      skills: nextSkills,
    })
  }

  function handleClick(e) {
    e.preventDefault();
    switch(e.target.className) {
      case 'addMore': {
        onEdit({
          ...value,
          skills: [
            ...value.skills,
            {
              id: nextId++,
              skill: '', 
            }
          ]
        })
        break;
      };
      case 'delete': {
        let index = e.target.getAttribute('data-id');
        const newSkills = value.skills.filter(skill => skill.id != index)
        onEdit({
          ...value,
          skills: newSkills,
        })
      }
    }

  }

  return (
    <div className="skillsInfo">
      <h2 className="skillsInfoHeader">Skills</h2>
      <div className="skills">
        { value.skills.map((skill, index) => {
          return (
            <form key={skill.id}>
              <div className="formHeader">
                { value.skills.length > 1 &&
                  <h3 className="skillIndex">#{index + 1}</h3>
                }
                { value.skills.length > 1 &&
                <button
                  className="delete"
                  data-id={skill.id}
                  onClick={handleClick}>
                    Delete</button>}
              </div>
              <input type="text"
                className="skill"
                data-id={skill.id}
                onChange={handleChange}
                placeholder="Skill" />
            </form>
          )
        })}
      </div>
      <button className="addMore"
      onClick={handleClick}
        >More</button>
    </div>

  )
}

export default SkillsForm