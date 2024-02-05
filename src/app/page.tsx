import Image from "next/image";
import styles from "./page.module.css";
import { sql } from "@vercel/postgres";


const likes = 100;
export default async function Home() {
  const deleteDb = async() => {
    const { rows } = await sql`
      DROP TABLE products
    `;
  }

  const createTable = async() => {
    const { rows } = await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        image VARCHAR(255)
      );
    `;
  }

  const insertProduct = async() => {
    const { rows } = await sql`
      INSERT INTO products(title, price, image) VALUES ('MantaRay', 10.0, 'https://i.etsystatic.com/21493117/r/il/a18e30/3392715649/il_fullxfull.3392715649_630p.jpg' )
    `;
  }

 //await deleteDb()
 //await createTable()
 //await insertProduct()
  

 
}
