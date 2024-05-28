import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { getService } from '../api';

export async function generateServiceValues(id: string) {
  const session = await getServerSession(authOptions);
  const { jwt } = session?.user as any;

  const { attributes: ukAttributes } = await getService({
    id,
    token: jwt,
  });

  const { attributes: ruAttributes } = await getService({
    id: ukAttributes.ruLocaleId,
    token: jwt,
  });

  return {
    titleUk: ukAttributes.title,
    titleRu: ruAttributes.title,
    descriptionUk: ukAttributes.description,
    descriptionRu: ruAttributes.description,
  };
}
