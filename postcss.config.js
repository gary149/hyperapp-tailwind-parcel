const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

// This will extract variants
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    ...(false
      ? [
          purgecss({
            content: ['./src/*.js', './src/components/*.js'],
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['js']
              }
            ]
          })
        ]
      : [])
  ]
}
