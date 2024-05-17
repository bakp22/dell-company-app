import Image from "next/image";
import styles from "./page.module.css";
import axios from 'axios';



import { Contrail_One } from "next/font/google";

import { sql } from "@vercel/postgres";


export default async function Page() {
  const { rows } = await sql`SELECT * from PRODUCTS`;

  return (
    <div>

      


      <div class="title" style={{ width: '500px', margin: 'auto' , fontSize: '50px' }}>
        <h1>The Company Dell</h1>
      </div>


      <div class="description" style={{width: '500px', margin: 'auto'}}> 
        <h3>Innovation that stops at nothing.</h3>
      </div>
    
      <div class="products" style={{margin: 'auto'}}>
        Here is a list of products 
        
      </div>


      
      {rows.map((row) => (
        <div key={row.device}>
          {row.device} - {row.department}
          {row.price}
        </div>
      ))}



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

