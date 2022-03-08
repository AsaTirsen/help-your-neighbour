//Root page//
import RequestList from "../components/requests/RequestList";
import React, { Component } from "react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import prisma from "../db/prisma";
import { disconnect } from "../db/disconnect";

function IndexPage(props) {
  return (
    <>
      <h1>Aktuella förfrågningar</h1>
      <RequestList requests={props.requests} />
    </>
  );
}

export async function getStaticProps(req, res) {
  // fetching data on build from API
  let requests;
  try {
    requests = await prisma.requests.findMany();
    if ((res.status = 200)) {
      res.json({ message: "Request found" });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    disconnect(prisma);
  }
  return {
    props: {
      requests: requests.map((request) => ({
        key: request.id.toString(),
        id: request.id.toString(),
        firstname: request.firstname,
        lastname: request.lastname,
        location: request.location,
        details: request.details,
        startdate: request.startdate.slice(2, 10),
        enddate: request.enddate.slice(2, 10),
      })),
    },
    revalidate: 100,
  };
}

export default IndexPage;
