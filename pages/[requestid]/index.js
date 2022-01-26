import { Fragment } from "react";
import RequestDetail from "../../components/requests/RequestDetail";

function RequestDetails() {
  return <RequestDetail details="Vill ha kattvakt" />;
}

export async function getStaticPaths() {
  //create static paths to enable prerendering
  return {
    //if false gets 404 with faulty url
    fallback: false,
    paths: [
      {
        params: {
          requestid: '1',
        },
      },
      {
        params: {
          requestid: '2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch the data for request details
  const requestId = context.params.requestid;
  console.log("params id " + requestId);
  return {
    props: {
          requestid: {
      }
    },
  };
}

export default RequestDetails;
