import { clientPromise } from '@/lib/db';
import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const setupAuth = async () => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  return betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    session: {
      expiresIn: 60 * 60 * 24 * 7,
      updateAge: 60 * 60 * 24,
    },
    database: mongodbAdapter(db),
  });
};

export const auth = await setupAuth();
