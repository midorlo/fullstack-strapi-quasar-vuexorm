module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9090),
  //  url: '/api/v1',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '253b6efd9ef1aed8845819d45b83782f'),
      url: '/dashboard',
    },
  },
});
