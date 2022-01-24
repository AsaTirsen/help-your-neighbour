//component for displaying info about each request


function RequestItem(props) {

  return (
      <li>
        <div>
        <p>Namn: {props.first_name + " " + props.last_name}</p>
        <p>Område: {props.location}</p>
        <p>Period: {props.dates}</p>
      </div>
    </li>
  );
}
export default RequestItem;
