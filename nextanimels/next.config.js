/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    // i18n,
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'src/styles')],
    //     prependData: `@import "variables.scss";`,
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig

// module.exports = {
//     images: {
//       domains: ['cdn.myanimelist.net'],
//     },
//   };