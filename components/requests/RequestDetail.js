import classes from './RequestDetail.module.css'


function RequestDetail(props) {
    return (
      <>
            <div className={classes.detail}>Detaljer: { props.location }</div>
      </>
    );
  }
  
  export default RequestDetail;
  