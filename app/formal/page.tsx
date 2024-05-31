import Form from '@/app/ui/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAllCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchAllCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer (under construction process)',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      {/* <Form customers={customers} /> */}
      <Form />


    </main>
  );
}