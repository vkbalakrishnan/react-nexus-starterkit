/* jshint ignore:start */
// Escape double-quotes
const X = (x) => x.replace(/\"/g, '\\"');

module.exports = ({ title, description, canonical, lang, rootHtml, serializedFlux, serializedHeaders, guid }) =>
  `<!DOCTYPE html${lang ? ` lang="${X(lang)}"` : ''}>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      ${description ? `<meta name="description" content="${X(description)}">` : ''}
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title || ""}</title>
      <link rel="stylesheet" type="text/css" href="/p${__DEV__ ? '': '.min'}.css">
      <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id="__ReactNexusRoot">
        ${rootHtml}
      </div>
      <script type="text/javascript">
        (function(w, d, i, f, h, g) {
          w.__ReactNexus = { serializedFlux: f, serializedHeaders: h, guid: g, rootElement: d.getElementById(i) };
        }(window, document, '__ReactNexusRoot', '${serializedFlux}', '${serializedHeaders}', '${guid}'))
      </script>
      <script type="text/javascript" src="/p${__DEV__ ? '': '.min'}.js"></script>
    </body>
  </html>
  `;
/* jshint ignore:end */
