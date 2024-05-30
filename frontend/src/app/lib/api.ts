import { notFound } from 'next/navigation';
import { Language } from '../i18n/settings';

export interface VideoAttributes {
  url: string;
  mediaId: string;
}

export interface VideoResponse {
  id: string;
  attributes: VideoAttributes;
}

export interface ServiceAttributes {
  title: string;
  description: string[];
  ruLocaleId?: string;
}

export interface ServiceResponse {
  id: string;
  attributes: ServiceAttributes;
}

export interface PhotosAttributes {
  description: string;
  beforeUrl: string;
  beforeMediaId: string;
  afterUrl: string;
  afterMediaId: string;
  ruLocaleId?: string;
}

export interface PhotosResponse {
  id: string;
  attributes: PhotosAttributes;
}

export interface ReviewAttributes {
  date: string;
  reviewerName: string;
  review: string;
  avatarUrl: string;
  avatarId: string;
  ruLocaleId?: string;
}

export interface ReviewResponse {
  id: string;
  attributes: ReviewAttributes;
}

export interface ContactsAttributes {
  telegram: string;
  tiktok: string;
  instagram: string;
}

export interface Contacts {
  id: string;
  attributes: ContactsAttributes;
}

export interface LoginResponse {
  jwt: string;
  user: {
    username: string;
  };
}

export const PROJECT_API = process.env.NEXT_PUBLIC_API_URL;
export const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
export const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

const buildUrl = (...paths: string[]) =>
  `${PROJECT_API}/api/${paths.join('/')}`;

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(await res.json());
  }

  const response = await res.json();

  return response.data || (response as T);
};

// Public fetches
export const getVideo = (init?: RequestInit) => {
  return sendRequest<VideoResponse>(buildUrl('video'), init);
};

export const getServices = (lng: Language, init?: RequestInit) => {
  return sendRequest<ServiceResponse[]>(
    buildUrl(`services?locale=${lng}`),
    init,
  );
};

export const getPhotos = (lng: Language, init?: RequestInit) => {
  return sendRequest(buildUrl(`photos?locale=${lng}`), init);
};

export const getReviews = (lng: Language, init?: RequestInit) => {
  return sendRequest<ReviewResponse[]>(buildUrl(`reviews?locale=${lng}`), init);
};

export const getContacts = (
  lng: Language,
  init?: RequestInit,
  populate?: true,
) => {
  return sendRequest<Contacts>(
    buildUrl(`contact?locale=${lng}${populate ? '&populate=*' : ''}`),
    init,
  );
};

// Private fetches
export const uploadMedia = (
  formData: FormData,
  token: string,
  init?: RequestInit,
) => {
  return sendRequest(buildUrl('upload'), {
    method: 'POST',
    body: formData,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMedia = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest(buildUrl('upload', 'files', id), {
    method: 'DELETE',
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateVideo = ({
  data,
  token,
  init,
}: {
  data: VideoAttributes;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest(buildUrl('video'), {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const getService = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ServiceResponse>(buildUrl(`services/${id}`), {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addService = ({
  data,
  token,
  init,
}: {
  data: ServiceAttributes & { locale?: 'ru' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ServiceResponse>(buildUrl('services'), {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const updateService = ({
  id,
  data,
  token,
  init,
}: {
  id: string;
  data: ServiceAttributes & { locale?: 'ru' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ServiceResponse>(buildUrl(`services/${id}`), {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const deleteService = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ServiceResponse>(buildUrl(`services/${id}`), {
    method: 'DELETE',
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPhoto = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<PhotosResponse>(buildUrl(`photos/${id}`), {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPhoto = ({
  data,
  token,
  init,
}: {
  data: PhotosAttributes & { locale?: 'ru' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<PhotosResponse>(buildUrl('photos'), {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const updatePhoto = ({
  id,
  data,
  token,
  init,
}: {
  id: string;
  data: PhotosAttributes & { locale?: 'ru' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<PhotosResponse>(buildUrl(`photos/${id}`), {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const deletePhoto = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<PhotosResponse>(buildUrl(`photos/${id}`), {
    method: 'DELETE',
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getReview = (id: string, token: string, init?: RequestInit) => {
  return sendRequest<ReviewResponse>(buildUrl(`reviews/${id}?populate=*`), {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const uploadImage = (
//   formData: FormData,
//   token: string,
//   init?: RequestInit,
// ) => {
//   return sendRequest(buildUrl('upload'), {
//     method: 'POST',
//     body: formData,
//     headers: {
//       ...init?.headers,
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteImage = (id: string, token: string, init?: RequestInit) => {
//   return sendRequest(buildUrl('upload', 'files', id), {
//     method: 'DELETE',
//     headers: {
//       ...init?.headers,
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

export const addReview = ({
  data,
  token,
  init,
}: {
  data: ReviewAttributes & { locale?: 'en' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ReviewResponse>(buildUrl('reviews'), {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const updateReview = ({
  id,
  data,
  token,
  init,
}: {
  id: string;
  data: ReviewAttributes & { locale?: 'en' };
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ReviewResponse>(buildUrl(`reviews/${id}`), {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

export const deleteReview = ({
  id,
  token,
  init,
}: {
  id: string;
  token: string;
  init?: RequestInit;
}) => {
  return sendRequest<ReviewResponse>(buildUrl(`reviews/${id}`), {
    method: 'DELETE',
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateContacts = ({
  data,
  token,
  locale,
}: {
  data: Partial<ContactsAttributes>;
  token: string;
  locale: Language;
}) => {
  return sendRequest(buildUrl(`contact?locale=${locale}`), {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
};

// Form submit to Telegram
export const submitForm = async ({
  serviceTitle,
  values,
}: {
  serviceTitle: string | undefined;
  values: any;
}) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  const obj = {
    chat_id: TELEGRAM_CHAT_ID,
    text: `
    Нова відправка форми з сайту:

${serviceTitle ? `Послуга, яка цікавить: ${serviceTitle}` : ''}

Імʼя: ${values.name}
Номер телефону: ${values.phoneNumber.split(' ').join('')}

Час та дні тижня, в які було б зручно займатись: ${values.text}
    `,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  const response = await res.json();

  if (!res.ok) {
    throw new Error(response.description);
  }

  return response;
};
