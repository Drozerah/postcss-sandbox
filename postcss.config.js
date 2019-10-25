module.exports = {
	plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({ 
      browsers: 'last 2 versions'
    }),
    require('cssnano')({ // https://cssnano.co/optimisations/
      preset: [ // https://cssnano.co/guides/presets
        'default', 
        { 
          discardComments: { // https://cssnano.co/optimisations/discardcomments/ 
            removeAll: true, // https://github.com/cssnano/cssnano/tree/master/packages/postcss-discard-comments
            removeAllButFirst: false,
          },
          discardEmpty: true, // https://cssnano.co/optimisations/discardempty/
          discardDuplicates: false, // https://cssnano.co/optimisations/discardduplicates/
          cssDeclarationSorter: true, // https://cssnano.co/optimisations/cssdeclarationsorter/
          orderedValues: true, // https://cssnano.co/optimisations/orderedvalues/
          normalizeString: { 
            preferredQuote: 'single' // https://cssnano.co/optimisations/normalizestring/ 
          }
        } 
      ]
    })
  ]
}
