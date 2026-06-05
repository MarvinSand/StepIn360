/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: framer-motion's useScroll (used by the ContainerScroll tour
  // animation) is incompatible with StrictMode's double-render in Next 14 dev,
  // which throws "Cannot update a component while rendering" and remounts the
  // tour in a loop. Off here = stable scroll animations. No effect in production.
  reactStrictMode: false,
};

export default nextConfig;
