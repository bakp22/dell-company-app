
"use client";


import Image from "next/image";
import styles from "./page.module.css";
import { sql } from "@vercel/postgres";
import React, { } from "react";
import logo from "./assets/freelancer.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


//Home Image Component of Person Working on Laptop
const MyImageComponent = () => {
  return <Image src={logo} alt="Freelancer Logo" />;
};

//Navigation Bar Component
const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand className='brandTitle' href="#home">The Company Dell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">Team</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );

}




export default async function Page() {
  var { rows : products } = await sql`SELECT * from PRODUCTS`;
  var { rows : workers } = await sql `SELECT * from WORKERS`;
  
  return (
    <div>
      
      <NavBarComponent/>

      
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          width: "1200px",
          margin: "auto",
        }}
      >
        <div
          className="title"
          style={{ flex: 1, fontSize: "50px", color: "black" }}
        >
          <h1 className="titleName">The Company Dell</h1>
          <p style={{ color: "black" }}>
            Developers: Beren Akpinar, Narelle Robles, and Pedro Patlan
          </p>
        </div>
        <div className="image" style={{ flex: 1 }}>
          <MyImageComponent />
        </div>
      </div>

      <div
        className="description"
        style={{
          textAlign: "center",
          width: "500px",
          margin: "auto",
          color: "black",
        }}
      >
        <h2>Innovation that stops at nothing.</h2>
      </div>

      <hr
        style={{
          width: "50%",
          margin: "auto",
          borderColor: "rgb(246, 217, 246)",
          borderWidth: "5px",
          borderRadius: "50px",
          color: "black",
        }}
      />

      <br></br>

      <div
        className="products"
        style={{ margin: "auto", textAlign: "center", color: "black" }}
      >
        <h3>Here is a list of our products:</h3>
      </div>

      <br></br>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "500px",
            margin: "auto",
            textAlign: "center",
            color: "black",
          }}
        >
          {product.device} - {product.price} dollars
        </div>
      ))}

      <br></br>

      <div
        className="workers"
        style={{ margin: "auto", textAlign: "center", color: "black" }}
      >
        <h3>The people who made this possible:</h3>
      </div>

      <br></br>

      {workers.length > 0 && (
        <div style={{ margin: "auto", textAlign: "center", color: "black" }}>
          {workers[0].firstname} {workers[0].lastname} - Technician working in
          the {workers[0].department} department
        </div>
      )}

      {workers.length > 0 && (
        <div style={{ margin: "auto", textAlign: "center", color: "black" }}>
          {workers[1].firstname} {workers[1].lastname} - Technician working in
          the {workers[1].department} department
        </div>
      )}

      {workers.length > 0 && (
        <div style={{ margin: "auto", textAlign: "center", color: "black" }}>
          {workers[2].firstname} {workers[2].lastname} - Technician working in
          the {workers[2].department} department
        </div>
      )}

      {workers.length > 0 && (
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            paddingBottom: "50px",
            color: "black",
          }}
        >
          {workers[3].firstname} {workers[3].lastname} - Technician working in
          the {workers[3].department} department
        </div>
      )}

    </div>
  );
}
