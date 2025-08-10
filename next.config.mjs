/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
        },
        {
          protocol: 'http',
          hostname: '127.0.0.1',
        },
        {
          protocol: 'https',
          hostname: 'www.gungeum.co.kr',
        },
        {
            protocol: 'https',
            hostname: 'dbuuh2wfbpxcx.cloudfront.net',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'd1bc1xn3hygkq4.cloudfront.net',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'artbava.s3.amazonaws.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.pacegallery.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.mcst.go.kr',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'artsonje.org',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'img.artlogic.net',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'http',
            hostname: 'www.gallerymeme.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'http',
            hostname: 'www.barakat.kr',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 's3.perrotin.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.koeniggalerie.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'sahngupgallery.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'www.mmca.go.kr',
            port: '',
            pathname: '/**',
            }
      ],
    },
  };

export default nextConfig;
