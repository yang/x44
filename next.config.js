
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['b48wmqCFKZPE5zP36D46Y9'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  