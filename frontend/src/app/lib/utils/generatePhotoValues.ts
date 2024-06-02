import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { getPhoto } from '../api';

export async function generatePhotoValues(id: string) {
  const session = await getServerSession(authOptions);
  const { jwt } = session?.user as any;

  const {
    attributes: {
      description: descriptionUk,
      ruLocaleId,
      beforeUrl,
      beforeMediaId,
      afterUrl,
      afterMediaId,
    },
  } = await getPhoto({
    id,
    token: jwt,
  });

  const {
    attributes: { description: descriptionRu },
  } = await getPhoto({
    id: ruLocaleId,
    token: jwt,
  });

  return {
    descriptionUk,
    descriptionRu,
    beforeUrl,
    beforeMediaId,
    afterUrl,
    afterMediaId,
  };
}
