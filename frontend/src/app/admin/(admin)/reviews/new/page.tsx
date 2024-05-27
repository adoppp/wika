import { ReviewForm } from '@/app/components';

interface PageProps {}

export default function Page(props: Readonly<PageProps>) {
  return <ReviewForm action="create" />;
}
