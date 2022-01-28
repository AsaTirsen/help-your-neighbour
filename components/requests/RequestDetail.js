import classes from './RequestDetail.module.css'


function RequestDetail(props) {
    return (
      <>
            <div className={classes.detail}>Detaljer: { props.details }</div>
      </>
    );
  }
  
  export default RequestDetail;
  