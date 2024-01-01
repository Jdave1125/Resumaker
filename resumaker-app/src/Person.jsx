import { useState } from "react";

function Person() {
    const [showInfo,setInfo] = useState(false);
    const [person, setPerson] = useState({ firstName: 'John', lastName: "Smith",email: "example@example.com",phone:'555-555-5555' });
    const [edu, setEdu] = useState({ school: 'General College', degree: "B.S",date: "May 2023"});
    // const handleIncreaseAge = () =>{
    //   console.log("in handleIncreaseAge (before setPerson call): ", person)
    //   setPerson({ ...person, age: person.age + 1 });
    //   // we've called setPerson, surely person has updated?
    //   console.log("in handleIncreaseAge (after setPerson call): ", person);
    // };

    //NOTE FOR NEXT TIME - see how we can fit the info into one box(the inputs)

    const handleInputChange = (field) => (event) =>{
        const newValue = event.target.value;
        setPerson((prevPerson) => ({...prevPerson,[field]:newValue}));
    } //this code simplifies and makes it so we dont have to use all these functions!

    const handleEduChange = (field) => (event) =>{
        const newValue = event.target.value;
        setEdu((prevPerson) => ({...prevPerson,[field]:newValue}));
    } 
    // const handleFirstChange = () =>{
    //     const newFirst = event.target.value;
    //     setPerson((prevPerson) => ({...prevPerson, firstName: newFirst}))
    // }

    // const handleSecChange = () =>{
    //     const newSec = event.target.value;
    //     // setPerson((prevPerson) => ({...prevPerson,lastName:newSec})) //updater function here is best practice however
    //     setPerson({...person, lastName:newSec}) //can do either or
    // }

    // // const handleIncreaseAge = () => {
    // //     setPerson({ ...person, age: person.age + 1 });
    // //   }; // this code here inc by 2 bc we use the prevPerson cb (how we update state mult times)
    // const handleEmailChange = () =>{
    //   const newEmail = event.target.value;
    //   setPerson({...person, email:newEmail})
    // }

    // const handlePhChange = () =>{
    //   const newPh = event.target.value;
    //   setPerson({...person,phone:newPh})
    // }

    const toggleInfo =() =>{
        setInfo((prevInfo) => !prevInfo);
        //use functional form to avoid potential issues related to async nature
        //original was setInfo(!showInfo)
    }

    return (
<>
    <div className="col1">
    <div className="persondropdown" >
        <h3 className="generalInfo">
            General Info
            <button onClick={toggleInfo} className="fillOut">
                enter info 
            </button>
        </h3>

        {showInfo && (
        <div className="inputContainer">
        <input
            type="text"
            placeholder="First Name"
            value={person.firstName}
            onChange={(handleInputChange('firstName'))}
            />
        
        <input
            type="text"
            placeholder="Last Name"
            value={person.lastName}
            onChange={handleInputChange("lastName")}
            />

        <input
            type="text"
            placeholder="email"
            value={person.email}
            onChange={handleInputChange("email")}
            />

        <input
            type="text"
            placeholder="555-555-5555"
            value={person.phone}
            onChange={handleInputChange("phone")}
            />
        </div>
        )}
    </div>
    
    <div className="persondropdown" >
        
        <h3 className="eduInfo">
            Education
            <button onClick={toggleInfo} className="fillOut">
                enter info 
            </button>
        </h3>
        
        {showInfo && (
        <div className="inputContainer">
        <input
            type="text"
            placeholder="General University"
            value={edu.school}
            onChange={(handleEduChange('school'))}
            />
        
        <input
            type="text"
            placeholder="B.S Human Biology"
            value={edu.degree}
            onChange={handleEduChange("degree")}
            />

        <input
            type="text"
            placeholder="May 2023"
            value={edu.date}
            onChange={handleEduChange("date")}
            />
        </div>
        )}
    </div>



    </div>

    
    <div className="col2">
        {/* <button onClick={handleIncreaseAge}>Increase age</button> */}
      <div className="resform">

        <div className="general">
          <div className="person">
            <h1>{person.firstName} {person.lastName}</h1>
            <h4>{person.phone}</h4>
            <h4>{person.email}</h4>
            <hr color="green"></hr>
          </div>
        </div>

        <div className="edu">
          <div className="education">
            <h1>Education</h1>
            <h3>{edu.school} <i>{edu.degree}</i> </h3>
            <h4>{edu.date}</h4>
            <hr color="green"></hr>
          </div>
        </div>
        

      </div>


    </div>
    </>
      );
    }


    export default Person;