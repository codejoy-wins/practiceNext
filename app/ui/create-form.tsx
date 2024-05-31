'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';

import { createCustomer } from '@/app/lib/actions';

import { useFormState } from 'react-dom';
// import { useFormState } from 'react-hook-form';


// update form to take in all the necessary customer information like name and email...
// OBVIOUSLY DOESN"T WORK Because of State issues

export default function Form() {
  const initialState = {message: null, errors: {}};
//   const [state, dispatch] = useFormState(createCustomer, initialState);
  return (
    <form>
    {/* <form action={dispatch}> */}

      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer Name
          </label>
          <div className="relative">
          <input
                id="customerName"
                name="customerName"
                type="string"
                step="0.01"
                placeholder="Enter Customer Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-name-error"
              />
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer Email
          </label>
          <div className="relative">
          <input
                id="customerEmail"
                name="customerEmail"
                type="email"
                step="0.01"
                placeholder="Enter Customer Email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-email-error"
              />
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer Image
          </label>
          <div className="relative">
          <input
                id="customerImg"
                name="customerImg"
                type="string"
                step="0.01"
                placeholder="Enter Customer Image URL"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="customer-image-error"
              />
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/datareader"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
