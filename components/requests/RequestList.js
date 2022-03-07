// component for rendering list of all current requests
import RequestItem from "./RequestItem";

function RequestList(props) {
    return (
      <ul>
        {props.requests.map(request => (
          <RequestItem
            key={request.id}
            id={request.id}
            firstname={request.firstname}
            lastname={request.lastname}
            location={request.location}
            details = {request.details}
            startdate={request.startdate}
            enddate={request.enddate}
          />
        ))}
      </ul>
    )
  }
  
  export default RequestList