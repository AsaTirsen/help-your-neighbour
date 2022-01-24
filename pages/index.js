//Root page//
import RequestList from "../components/requests/RequestList";
import React, { Component } from 'react'

const DUMMY_REQUEST = [
    {
    id: "1",
    first_name: "Asa",
    last_name: "Tirsen",
    location: "Vantorsvagen",
    dates: "1 July",
  },
    {
    id: "2",
    first_name: "Marlene",
    last_name: "Ahlenius",
    location: "Fagersjo",
    dates: "2 July",
  },
];

function IndexPage() {
    return <><h1>Aktuella förfrågningar</h1>
    <RequestList requests={DUMMY_REQUEST}/></>
}

export default IndexPage;
