// pages/api/search.js
"use client";

import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const { rows: products } = await sql`SELECT * FROM PRODUCTS`;
    const { rows: workers } = await sql`SELECT * FROM WORKERS`;

    res.status(200).json({ products, workers });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
