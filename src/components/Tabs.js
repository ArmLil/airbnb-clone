import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Experiencesinside from "./Experiences";

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  border: '1px solid black'
}

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-flow: column;
  justify-content: space-between;
`;

const For_you = () => <div><h2>For_you</h2></div>
const Homes = () => <div><h2>Homes</h2></div>
const Experiences = () => <div><h2>Experiences</h2></div>
const Places = () => <div><h2>Places</h2></div>

const Tabs = () =>
<Container>
 <div style={style}>
  <Link to="/For_you">For you |</Link>
  <Link to="/Homes">Homes |</Link>
  <Link to="/Experiences" onClick={()=> <Experiencesinside/>}>Experiences |</Link>
  <Link to="/Places">Places</Link>
 </div>
</Container>

export default Tabs;
