import React, { useState } from "react";
import User from "./user.js";

var musicians = [
  { name: "Dan", lastName: "Brown" },
  { name: "Joanne", lastName: "Rowling" },
  { name: "Stephen", lastName: "King" }
];

var user = new User("Zemtsova Valeria Sergeevna", 123, "tinyis@gmail.com", "Krivoy Rog");

function Profile(){
 
  const [nameState, setNameState] = useState(user.fio);
  const [telState, setTelState] = useState(user.tel);
  const [emailState, setEmailState] = useState(user.email);
  const [cityState, setCityState] = useState(user.city);

  const handlerSubmit = event => {
    event.preventDefault();
    user.fio=nameState;
    user.tel=telState;
    user.email=emailState;
    user.city=cityState;  
    alert("Данные успешно изменены!");

  };
  
  const handlerChange = event => {

      const target = event.target;

      switch(target.name) {
        case 'fio':{
          
          setNameState(target.value);
          break;
        }
        case 'tel':{

          setTelState(target.value);
          break;
        } 
        case 'email':{

          setEmailState(target.value);
          break;
        }
        case 'city':{

          setCityState(target.value);
          break;
        }
      }
  };

  function handleClick(e) {
  e.preventDefault();
    
   setNameState(user.fio);
   setTelState(user.tel);
   setEmailState(user.email);
   setCityState(user.city);
  }

  return (

    <form onSubmit={handlerSubmit}>
    <div className = "formElement">
      <label>FIO</label>
      <input type="text" name="fio" placeholder ="Input fio" value={nameState} onChange={handlerChange} required/>
    </div>
    <div className = "formElement">
      <label>Telephone</label>
      <input type="text" name="tel" placeholder ="Input tel" value={telState} onChange={handlerChange} required/>
    </div>
    <div className = "formElement">
      <label>Email</label>
      <input type="text" name="email" placeholder ="Input email" value={emailState} onChange={handlerChange} required/>
    </div>
    <div className = "formElement">
      <label>City</label>
      <input type="text" name="city" placeholder ="Input city" value={cityState} onChange={handlerChange} required/>
    </div>
    <div className="formElement">
        <input type="submit" value="Edit" />
        <button onClick={handleClick}>Cancel</button>
    </div>
  </form>
  )
}

function Musician(props) {
  return (
    <>
      <div>
        {props.name} {props.lastName}
      </div>
      <hr />
    </>
  );
}
function MusiciansList(props) {
  return (
    <div>
      {props.data.map(item => (
        <Musician {...item} />
      ))}
    </div>
  );
}

function Form(){

let nameRef=React.createRef();
let emailRef=React.createRef();
let addressRef=React.createRef();
let stateRef=React.createRef();
let ageRef=React.createRef();

const handlerSubmit=event=>{
  event.preventDefault();

  if(nameRef.current.value.length>=3 && (emailRef.current.value).includes('@') && ageRef.current.value>18)
    alert(nameRef.current.value+"\n"+emailRef.current.value+"\n"+addressRef.current.value+"\n"+stateRef.current.value+"\n"+ageRef.current.value+"\n");
}

  return(
    <form onSubmit={handlerSubmit}>
      <div className = "formElement">
        <input type="text" placeholder ="Input name" ref={nameRef} required/>
      </div>
      <div className = "formElement">
        <input type="text" placeholder ="Input email" ref={emailRef} required/>
      </div>
      <div className = "formElement">
        <input type="text" placeholder ="Input address" ref={addressRef} required/>
      </div>
      <div className = "formElement">
        <input type="text" placeholder ="Input age" ref={ageRef} required/>
      </div>
      <div className = "formElement">
        <label>Male</label>
        <input type="radio" ref={stateRef} value="Male" name="state" />
        <label>Female</label>
        <input type="radio" ref={stateRef} value="Female" name="state" />
      </div>
      <div className="formElement">
          <input type="submit" value="Send data" />
        </div>
    </form>
  )
}


function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <MusiciansList data={musicians} /> */}
      <Profile/>
    </div>
  );
}

export default App;
