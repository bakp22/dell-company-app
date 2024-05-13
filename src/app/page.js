import Image from "next/image";
import styles from "./page.module.css";

import { sql } from "@vercel/postgres";
import { Contrail_One } from "next/font/google";

async function Cart() {
  const { rows } = await sql`SELECT * from WORKERS`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div class="center-container">
      <h1 style={{ width: '100px', margin: 'auto' }}>Dell</h1>
      <h2 style={{ paddingLeft: '750px', margin: 'auto' }}>Names of People</h2>
      <h3 style={{ paddingLeft: '600px', margin: 'auto' }}>by Beren Akpinar, Narelle Robles, and Pedro Patlan</h3>
      <Cart />
    </div>
  );
}
