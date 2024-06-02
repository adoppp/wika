import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: "Ваше ім'я", type: 'text' },
        password: { label: 'Пароль', type: 'password' },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const { identifier, password } = credentials;
          const body: string = JSON.stringify({ identifier, password });

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body,
            },
          );

          console.log(response);

          const user = response.json();

          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      session.user = {
        ...(token as any),
        id: user ? user.id : null,
      };

      return Promise.resolve(session);
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = user ? true : false;

      if (isSignIn && account) {
        let data;

        if (account.provider === 'google') {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`,
          );

          data = await response.json();
        } else {
          data = user;
        }

        token.jwt = data.jwt;
        token.id = data.user.id;
        token.username = data.user.username;
      }

      return Promise.resolve(token);
    },
    signIn: async ({ profile, user }) => {
      if (
        profile?.email === process.env.ADMIN_EMAIL ||
        (user as any).user.email === process.env.ADMIN_EMAIL_BACKUP
      ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
