import { Fragment } from "react";
import RequestDetail from "../../components/requests/RequestDetail";
import prisma from "../../db/prisma";
import { disconnect } from "../../db/disconnect";

function RequestDetails(props) {
  return <RequestDetail requestDetail={props} />;
}

export async function getStaticPaths() {
  // create static paths to enable prerendering
  let requests;
  try {
    requests = await prisma.requests.findMany({
      select: {
        id: true,
        resolved: false,
      },
    });
  } finally {
    disconnect(prisma);
  }

  return {
    // if false gets 404 with faulty url
    fallback: false,
    paths: requests.map((request) => ({
      params: { requestid: request.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch the data for request details
  const requestId = context.params.requestid;
  let selectedRequest;
  try {
    selectedRequest = await prisma.requests.findUnique({
      where: {
        id: parseInt(requestId),
        resolved: false,
      },
    });
  } finally {
    disconnect(prisma);
  }
  return {
    props: {
      // make into a an object for RequestDetail
      id: selectedRequest.id.toString(),
      firstname: selectedRequest.firstname,
      lastname: selectedRequest.lastname,
      location: selectedRequest.location,
      startdate: selectedRequest.startdate.slice(2, 10),
      enddate: selectedRequest.enddate.slice(2, 10),
      details: selectedRequest.details,
    },
  };
}

export default RequestDetails;
