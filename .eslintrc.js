module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        semi: [2, "never"],
        quotes: [2, "single"]
    }
}
