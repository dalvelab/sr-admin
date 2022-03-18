module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d95cf2e8082b3382c187c7f8c2815fb'),
  },
});
