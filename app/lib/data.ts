import { sql } from '@vercel/postgres';

import {
    CustomerField,
    CustomersTableType,
    InvoiceForm,
    InvoicesTable,
    LatestInvoiceRaw,
    User,
    Revenue,
    AllCustomersRaw,
    Customer,
    Comment,
  } from './definitions';

export async function fetchAllCustomers(){
    const data = await sql<Customer>`
    SELECT customers.name
    FROM customers
    `;
    const datapartthree = data.rows.map((Customer) => Customer.name);
      console.log(`datapartthree is ${datapartthree}`);
      return datapartthree;
}