import { useState } from "react";

let nextId = 2;

function PracticeInfoForm ({ onEdit, value}) {

  function handleClick(e) {
    e.preventDefault();
    switch(e.target.className) {
      case 'addMore': {
        onEdit({
          ...value,
          practiceInfo: [
            ...value.practiceInfo,
            {
              id: nextId++,
              companyName: '',
              position: '',
              responsibilities: '',  
            }
          ]
        })
        break;
      };
      case 'delete': {
        let index = e.target.getAttribute('data-id');
        const newPractice = value.practiceInfo.filter(prac => prac.id != index)
        onEdit({
          ...value,
          practiceInfo: newPractice,
        })
      }
    } 
  }

  function handleChange (e) {
    let index = e.target.getAttribute('data-id');
    let nextPractice = value.practiceInfo.map(p => {
      if (index == p.id) {
        return {
          ...p,
          [e.target.className]: e.target.value,
        }
      } else {
        return p;
      }
    })

    onEdit({
      ...value,
      practiceInfo: nextPractice,
    })
  }

  return (
    <div className="practiceInfo">
      <h2 className="practiceInfoHeader">Practical Experience</h2>
      <div className="practices">
        { value.practiceInfo.map( (prac, index) => {
          return (
            <form key={prac.id} >
            <div className="formHeader">
              {value.practiceInfo.length > 1 && 
                <h3 className="practiceIndex">#{index + 1}</h3>
              }
              {value.practiceInfo.length > 1 &&
              <button
                className="delete"
                onClick={handleClick}
                data-id={prac.id} >
                  Delete</button>}
            </div>
            <input type="text"
              className="companyName"
              data-id={prac.id}
              onChange={handleChange}
              placeholder="Company Name" />
            <input type="text"
              className="position"
              data-id={prac.id}
              onChange={handleChange}
              placeholder="Position Title" />
            <textarea rows={3} 
              className="responsibilities"
              data-id={prac.id}
              onChange={handleChange}
              placeholder="Responsibilities" />
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

export default PracticeInfoForm;
