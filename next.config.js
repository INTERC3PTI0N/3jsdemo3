/** @type {import('next').NextConfig} */
// The site is a self-contained static WebGL shell (public/index.html) booted by
// its own inline + webpack scripts. Serving it verbatim avoids React hydrating
// (and fighting) the canvas the scripts mount. Everything else lives in public/.
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        { 
          source: '/', 
          destination: '/index.html' 
        }
      ],
    };
  },
};
