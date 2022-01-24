// component for rendering list of all current requests
import RequestItem from "./RequestItem";

function RequestList(props) {
    return (
      <ul>
        {props.requests.map(request => (
          <RequestItem
            key={request.id}
            id={request.id}
            first_name={request.first_name}
            last_name={request.last_name}
            location={request.location}
            dates={request.dates}
            actions={request.actions}
          />
        ))}
      </ul>
    )
  }
  
  export default RequestList