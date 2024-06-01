import { PhotoForm } from '@/app/components';

import { generatePhotoValues } from '@/app/lib/utils';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const values = await generatePhotoValues(params.id);

  return <PhotoForm action="update" values={values} />;
}
