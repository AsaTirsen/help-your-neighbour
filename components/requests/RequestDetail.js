import classes from "./RequestDetail.module.css";

function sendTextMessage() {
  // router objects has method for pushing page via path 
console.log(props.id + "users telephonenumber")}

function RequestDetail(props) {
  return (
    <li>
      <div>
        <p>
          Namn: {props.firstname} {props.lastname}
        </p>
        <p>Område: {props.location}</p>
        <p>
          Period: {props.startdate} - {props.enddate}
        </p>
        <p>Detaljer: {props.details}</p>
      </div>
      <div>
        <button onClick={sendTextMessage}>Kontakta</button>
      </div>
    </li>
  );
}

export default RequestDetail;
