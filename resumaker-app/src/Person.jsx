import { useState } from "react";

function Person() {
  const [showInfo, setShowInfo] = useState({ general: false, education: false, experience:false });
  const [formData, setFormData] = useState({
    person: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'example@example.com',
      phone: '555-555-5555',
    },
    edu: {
      school: 'General College',
      degree: 'B.S',
      date: 'May 2023',
    },
    exp:{
        company: "General Company",
        title: "Software Engineer",
        desc: "Headed programming efforts using React library",
        dates: "January 2020 - Present"
    }
  });

  const toggleInfo = (section) => {
    setShowInfo((prevInfo) => ({ ...prevInfo, [section]: !prevInfo[section] }));
  };

  const handleInputChange = (section, field) => (event) => {
    const newValue = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [field]: newValue },
    }));
  };

  const renderInputFields = (section, fields) => (
    <div className="inputContainer">
      {fields.map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field}
          value={formData[section][field]}
          onChange={handleInputChange(section, field)}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="col1">
        <div className="persondropdown">
          <h3 className="generalInfo">
            General Info
            <button onClick={() => toggleInfo('general')} className="fillOut">
              enter info
            </button>
          </h3>
          {showInfo.general && renderInputFields('person', ['firstName', 'lastName', 'email', 'phone'])}
        </div>

        <div className="persondropdown">
          <h3 className="eduInfo">
            Education
            <button onClick={() => toggleInfo('education')} className="fillOut">
              enter info
            </button>
          </h3>
          {showInfo.education && renderInputFields('edu', ['school', 'degree', 'date'])}
        </div>

        <div className="persondropdown">
            <h3 className="expInfo">
                Experience
                <button onClick={() => toggleInfo('experience')} className="fillOut">
                    enter info
                </button>
            </h3>
            {showInfo.experience && renderInputFields('exp',['company','title','desc','dates'])}
        </div>
      </div>

      <div className="col2">
        <div className="resform">
          <div className="general">
            <div className="person">
              <h1>{formData.person.firstName} {formData.person.lastName}</h1>
              <h4>{formData.person.phone}</h4>
              <h4>{formData.person.email}</h4>
              <hr color="green"></hr>
            </div>
          </div>

          <div className="edu">
            <div className="education">
              <h1>Education</h1>
              <h3>{formData.edu.school} <i>{formData.edu.degree}</i> </h3>
              <h4>{formData.edu.date}</h4>
              <hr color="green"></hr>
            </div>
          </div>

          <div className="exp">
            <div className="experience">
                <h1>Experience</h1>
                <h3>{formData.exp.company} <i>{formData.exp.title}</i></h3>
                <h5>{formData.exp.dates}</h5>
                <h5>{formData.exp.desc}</h5>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;