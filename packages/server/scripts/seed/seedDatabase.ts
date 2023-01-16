/* eslint-disable no-console */
import yargs from 'yargs';

import { connectDatabase, dropDatabase } from '../../src/database';

import createProducts from './createProducts';
import createStore from './createStore';
import { createUser } from './createUser';

const runScript = async ({ dropDatabase: _dropDatabase, userCount }) => {
  if (_dropDatabase) await dropDatabase();

  console.log(`⏳ Seeding...\n`);

  const denianUser = await createUser({
    name: 'Denian',
    surname: 'Fossatti',
    password: '123456',
    email: { email: 'denian@deliveryapp.com', wasVerified: true },
  }).save();
  console.log('👤 Denian user created\n');

  const store = await createStore();

  const products = await createProducts({ store });

  console.log(`📚 ${products.length} products created\n`);
  console.log(`👥 ${userCount} users created\n`);
};

const run = async () => {
  const yarg = yargs(process.argv.slice(2));

  const argv = yarg.usage('Database Seed').options({
    users: {
      description: 'The amount of users to be generated.',
      alias: 'u',
      default: 1000,
    },
    dropDatabase: {
      description: 'Drop the database before seeding.',
      default: false,
      boolean: true,
    },
  }).argv;

  await connectDatabase();

  await runScript({ userCount: argv.users, dropDatabase: argv.dropDatabase });
  process.exit(0);
};

(async () => {
  await run();
})();
