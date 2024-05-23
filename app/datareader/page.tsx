import Image from "next/image";
import Link from "next/link";

import AllCustomers from "../ui/all-customers"

// SELECT customers.name
// FROM customers
// I want to display all customers with that simple SQL query that works on Vercel.
// Did it with a custom component... AllCustomers...
export default function Page(){
    return(
        <>
            <h1>Display data here 2... </h1>
            <p className="text-blue-500">
            read from my only postgres database on vercel...
            </p>
            <div>
                <AllCustomers/>
            </div>
            <Image
              src="/cosmos.jpeg"
              alt="Dark Matter"
              width={1000}
              height={240}
            />
      < Link href={'/something'} >Something?!</Link>

        </>
    )
}