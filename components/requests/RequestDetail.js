import classes from "./RequestDetail.module.css";

function sendTextMessage() {
  // router objects has method for pushing page via path
  console.log("users telephonenumber");
}

function RequestDetail(props) {
  return (
    <ul>
      <div>
        <p>
          Namn: {props.requestDetail.firstname} {props.requestDetail.lastname}
        </p>
        <p>Område: {props.requestDetail.location}</p>
        <p>
          Period: {props.requestDetail.startdate} -{" "}
          {props.requestDetail.enddate}
        </p>
        <p>Detaljer: {props.requestDetail.details}</p>
      </div>
      <div>
        <button onClick={sendTextMessage}>Kontakta</button>
      </div>
    </ul>
  );
}

export default RequestDetail;
