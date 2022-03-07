//component for displaying info about each request
import { useRouter } from "next/router";

function RequestItem(props) {
  const router = useRouter();

    function showDetailsHandler() {
        // router objects has method for pushing page via path 
      router.push('/' + props.id)
  }
  return (
    <li>
      <div>
        <p>Namn: {props.firstname} {props.lastname}</p>
        <p>Område: {props.location}</p>
        <p>Period: {props.startdate} - {props.enddate}</p>
      </div>
      <div><button onClick={showDetailsHandler}>Visa detaljer</button></div>
    </li>
  );
}
export default RequestItem;
