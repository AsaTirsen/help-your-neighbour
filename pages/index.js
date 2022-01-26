//Root page//
import RequestList from "../components/requests/RequestList";
import React, { Component } from 'react'
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const DUMMY_REQUEST = [
    {
    id: "1",
    firstname: "Jon",
    lastname: "Tirsen",
    location: "Vantorsvagen",
    dates: "1 July",
  },
    {
    id: "2",
    firstname: "Marlene",
    lastname: "Ahlenius",
    location: "Fagersjo",
    dates: "2 July",
  },
];

function IndexPage(props) {
    return <><h1>Aktuella förfrågningar</h1>
    <RequestList requests={props.requests}/></>
}

export async function getStaticProps() { 
  //fetching data on build from API 
  return {
    props: {
      requests: DUMMY_REQUEST
    },
    revalidate: 100
  };
}

export default IndexPage;
