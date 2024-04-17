import { PageProps } from '@/app/lib/types';
import { Modal } from '@/app/components';

export default async function Page({
  params: { lng },
  searchParams,
}: Readonly<PageProps>) {
  const serviceTitle =
    searchParams?.showModal === 'true' ? undefined : searchParams?.showModal;

  return (
    <Modal
      lng={lng}
      serviceTitle={serviceTitle}
      isOpen={!!searchParams?.showModal}
    />
  );
}
