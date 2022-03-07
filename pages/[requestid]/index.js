import { Fragment } from "react";
import RequestDetail from "../../components/requests/RequestDetail";
import prisma from "../../db/prisma";


function RequestDetails() {
  return <RequestDetail details="Vill ha kattvakt" />;
}

export async function getStaticPaths() {
  //create static paths to enable prerendering
  const requests = await prisma.requests.findMany({
    select: {id: true},
    });

  return {
    //if false gets 404 with faulty url
    fallback: false,
    paths: requests.map(request => ({ params: { requestid: request.id.toString()}})),
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
