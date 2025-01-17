const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require("shiki/themes/min-dark.json")

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    flexsearch: {
        codeblock: false
    },
    mdxOptions: {
        remarkPlugins: [[remarkCodeHike, { theme }]],
    },
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra({
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
})
