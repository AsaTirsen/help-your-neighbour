import React, { useRef } from "react";
import classes from "./NewRequestForm.module.css";


// TODO Fixa handler funktionen!


function NewRequestForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const locationInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();
  const detailsInputRef = useRef();
  const locationInputRef = useRef();

  
  const submitForm = event => {
    event.preventDefault()
    console.log("submitted")

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredStartDate = startDateInputRef.current.value;
    const enteredEndDate = endDateInputRef.current.value;
    const enteredDetails = detailsInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    const requestData = {
      title: enteredFirstName,
      image: enteredLastName,
      address: enteredLocation,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      description: enteredDetails,
      location: enteredDetails
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
      {/* location */}
      <div className={classes.control}>
          <label htmlFor="location">Detaljer</label>
          <input type="text" required id="location" ref={detailsInputRef} />
        </div>
        {/* dates */}
        <div className={classes.control}>
          <label htmlFor="dates">Från</label>
          <input type="text" required id="dates" ref={startDateInputRef} />
      </div>
      {/* dates */}
      <div className={classes.control}>
          <label htmlFor="dates">Till</label>
          <input type="text" required id="dates" ref={endDateInputRef} />
        </div>
        {/* button */}
        <div className={classes.actions}>
          <button type="submit">Gör din förfrågan</button>
        </div>
      </form>
  );
}

export default NewRequestForm
