/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*", // Any request to /api/* will be proxied
                destination: "https://temp-3-923n.onrender.com/api/:path*", // Change 5000 to your Express server port
            },
        ];
    },
};

export default nextConfig;
