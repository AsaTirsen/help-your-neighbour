import React, { useRef } from "react";
import classes from "./NewRequestForm.module.css";


// TODO Fixa handler funktionen!


function NewRequestForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const locationInputRef = useRef();
  const datesInputRef = useRef();
  
  const submitForm = event => {
    event.preventDefault()
    console.log("submitted")

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredDates = datesInputRef.current.value;

    const requestData = {
      title: enteredFirstName,
      image: enteredLastName,
      address: enteredLocation,
      description: enteredDates,
    }
  }


  return (
      <form className={classes.form} onSubmit={submitForm}>
       {/* firstname */}
        <div className={classes.control}>
          <label htmlFor="firstname">Förnamn</label>
          <input type="text" required id="firstname" ref={firstNameInputRef} />
        </div>
        {/* lastname */}
        <div className={classes.control}>
          <label htmlFor="lastname">Efternamn</label>
          <input type="text" required id="lastname" ref={lastNameInputRef} />
        </div>
        {/* location */}
        <div className={classes.control}>
          <label htmlFor="location">Område</label>
          <input type="text" required id="location" ref={locationInputRef} />
        </div>
        {/* dates */}
        <div className={classes.control}>
          <label htmlFor="dates">Period</label>
          <input type="text" required id="dates" ref={datesInputRef} />
        </div>
        {/* button */}
        <div className={classes.actions}>
          <button type="submit">Gör din förfrågan</button>
        </div>
      </form>
  );
}

export default NewRequestForm
