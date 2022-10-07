import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    //create a function that will store the user value inputs and their names
    const { value, name } = event.target;

    setContact((prevValue) => {
      //create a function to handle the input values
      //we have to store the previous user values and the entered value
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
        {/* displays the user inputs */}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleContact}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleContact}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handleContact}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
