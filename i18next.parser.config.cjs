module.exports = {
  defaultNameSpace: "translation",
  jsx: [{
    lexer: 'JsxLexer',
    // attr: 'i18nKey', // Attribute for the keys
    // componentFunctions: ['Trans'], // Array of components to match
  }],
  locales: ["en", "de"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/*.{js,jsx}"],
};
