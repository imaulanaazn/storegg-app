module.exports = {
  images: {
    domains:
    ['storegg-server-production.up.railway.app'],
    formats: ['image/jpeg', 'image/png'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://storegg-server.up.railway.app/api/:path*', // Replace with your target URL
      },
    ];
  },
};
// module.exports = {
//   images:
//     { domains: ['localhost'], formats: ['image/jpeg', 'image/png'] },
// };
