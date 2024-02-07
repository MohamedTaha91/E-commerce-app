require('dotenv/config');
import { db } from "@vercel/postgres";

async function seedProducts() {
    try {
      await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          price FLOAT NOT NULL UNIQUE,
          image VARCHAR(255),
        );
      `;
  
      console.log(`Created "users" table`);
  
      return {
        createTable
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
  }

  async function main() {
    const client = await db.connect();
  
    await seedProducts(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });

  