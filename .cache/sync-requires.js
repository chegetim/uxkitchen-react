const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/src/pages/contact.js"))),
  "component---src-pages-corporates-js": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/src/pages/corporates.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/timchege/Desktop/< React Sites/ux-kitchen-website/src/pages/using-typescript.tsx")))
}

