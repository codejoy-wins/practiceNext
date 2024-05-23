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
  } from './definitions';

export async function fetchAllCustomers(){
    const data = await sql<Customer>`
    SELECT customers.name
    FROM customers
    `;
    const datapartthree = data.rows.map((Customer) => Customer.name);
    // this is the part that I don't understand. What is the ...customer, name:Customer.name part doing?
    const dataparttwo = data.rows.map((Customer) => ({
        ...Customer,
        name: Customer.name,
      }));
      console.log(`data is ${data}`)
      console.log(`data2 is ${dataparttwo}`);
      return datapartthree;
}