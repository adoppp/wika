import { ReviewForm } from '@/app/components';
import { generateReviewValues } from '@/app/lib/utils';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const values = await generateReviewValues(params.id);

  return <ReviewForm action="read" values={values} />;
}
