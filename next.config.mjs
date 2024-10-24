/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {

        protocol: 'https',
        hostname: 'morel.us-east.host.bsky.network',
        pathname: '/xrpc/com.atproto.sync.getBlob',
        // search: '?did=did=did%3Aplc%3A2cxgdrgtsmrbqnjkwyplmp43&cid=**',

      },
    ],
  },
};

export default withPlausibleProxy({
  customDomain: "https://plausible.mozzius.dev",
})(nextConfig);
