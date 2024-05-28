import { ServiceForm } from '@/app/components';

import { generateServiceValues } from '@/app/lib/utils';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const values = await generateServiceValues(params.id);

  return <ServiceForm action="update" values={values} />;
}
