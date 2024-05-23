import { fetchAllCustomers } from '@/app/lib/data';
// import clsx from 'clsx';

// need to .map() all of the customers

// this is basically a custom component now that I'm exporting to my datareader page... why am I mapping it here and somewhere else though?

export default async function AllCustomers(){
  const allCustomers = await fetchAllCustomers();
  return (
    <>
        <div>
            <p>
                These are all the customers... this text is from all-customers.tsx
            </p>
            
        </div>
        <div className='text-pink-500'>
            {/* this also works now, with the simple mapping  */}
            {allCustomers}
        </div>
    </>
  );
}