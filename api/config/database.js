module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   connections: {
//     default: {
//       settings: {
//         password: env('DATABASE_PASSWORD'),
//       },
//     },
//   },
// });
