//Root page//
import RequestList from "../components/requests/RequestList";
import React, { Component } from 'react'
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import prisma from "../db/prisma";

function IndexPage(props) {
    return <><h1>Aktuella förfrågningar</h1>
    <RequestList requests={props.requests}/></>
}

export async function getStaticProps() { 
  //fetching data on build from API 
  const requests = await prisma.requests.findMany();
  
  return {
    props: {
      requests: requests.map(request => ({
        key: request.id.toString(),
        id: request.id.toString(),
        firstname: request.firstname,
        lastname: request.lastname,
        location: request.location,
        details: request.details,
        startdate: request.startdate,
        enddate: request.enddate
      }))
    },
    revalidate: 100
  };
}

export default IndexPage;
