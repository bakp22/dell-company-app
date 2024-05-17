import Image from "next/image";
import styles from "./page.module.css";

import { Bree_Serif, Contrail_One } from "next/font/google";

import { sql } from "@vercel/postgres";


export default async function Page() {
  var { rows : products } = await sql`SELECT * from PRODUCTS`;
  var { rows : workers } = await sql `SELECT * from WORKERS`;

  return (
    <div>


      <div class="title" style={{ width: '400px', margin: 'auto' , fontSize: '50px' }}>
        <h1>The Company Dell</h1>
      </div>


      <div class="description" style={{textAlign: "center", width: '500px', margin: 'auto'}}> 
        <h2>Innovation that stops at nothing.</h2>
      </div>
    
      <hr style={{ width: '50%', margin: 'auto', borderColor: 'purple' }} />

      <br></br>

      <div class="products" style={{margin: 'auto', textAlign: "center"}}>
        <h3>Here is a list of products:</h3>
      </div>

      
      <br></br>

    
      {products.map((product) => (
        <div key={product.id} style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
          {product.device} - {product.price} dollars
        </div>
      ))}
     
      
      <br></br>

      <div class="workers" style={{margin:"auto", textAlign: "center"}}>
       <h3>The people who made this possible:</h3> 
      </div>

      <br></br>

      {workers.length > 0 && (
  <div style={{ margin: 'auto', textAlign: "center"}}>
     {workers[0].firstname} {workers[0].lastname} - Technician working in the {workers[0].department} department
  </div>
)}

{workers.length > 0 && (
  <div style={{ margin: 'auto', textAlign: "center"}}>
     {workers[1].firstname} {workers[1].lastname} - Technician working in the {workers[1].department} department
  </div>
)}

{workers.length > 0 && (
  <div style={{ margin: 'auto', textAlign: "center"}}>
     {workers[2].firstname} {workers[2].lastname} - Technician working in the {workers[2].department} department
  </div>
)}

{workers.length > 0 && (
  <div style={{ margin: 'auto', textAlign: "center"}}>
     {workers[3].firstname} {workers[3].lastname} - Technician working in the {workers[3].department} department
  </div>
)}


    </div>

   
  );
}

const MyComponent = () => {
  return (
    <div>
      <MyLogo/>
    </div>
  );
};

