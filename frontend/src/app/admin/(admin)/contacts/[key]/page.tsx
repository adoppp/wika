import { ContactForm } from '@/app/components';
import { Contacts, getContacts } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    key: string;
  };
}

export default async function Page({ params: { key } }: Readonly<PageProps>) {
  const keyword = key.split('edit_')[1];

  if (
    keyword !== 'instagram' &&
    keyword !== 'telegram' &&
    keyword !== 'tiktok'
  ) {
    notFound();
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const contacts = queryClient.getQueryData(['contacts']) as Contacts;

  return <ContactForm contacts={contacts.attributes} name={keyword} />;
}
