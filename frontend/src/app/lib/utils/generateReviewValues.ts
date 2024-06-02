import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { getReview } from '../api';

export async function generateReviewValues(id: string) {
  const session = await getServerSession(authOptions);
  const { jwt } = session?.user as any;

  const {
    attributes: {
      reviewerName,
      avatarUrl,
      avatarId,
      date,
      ruLocaleId,
      review: reviewUk,
    },
  } = await getReview({
    id,
    token: jwt,
  });

  const {
    attributes: { review: reviewRu },
  } = await getReview({
    id: ruLocaleId,
    token: jwt,
  });

  return {
    reviewerName,
    avatarUrl,
    avatarId,
    date: new Date(date),
    reviewUk,
    reviewRu,
  };
}
