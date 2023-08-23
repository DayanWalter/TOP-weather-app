# Project Template

## What's configured?

- Webpack (module bundler)
- Normalize.css (CSS Reset)
- FontAwesome(Icons)
- ESLint (linter)
  - Setup with Airbnb style guide
- Prettier (code formatter)
  - Includes eslint-config-prettier
- css-loader and style-loader to bundle `.css` files
- html-webpack-plugin to bundle `.html` files

### How to create a repository with this template

1. **Install** all packages listed in `package.json` with `npm install`

### Included scripts

- **Build** `npm run build`
- **Watch** `npm run watch`
- **Publish**  `npm run github-pages`
- **Lint** `npm run lint`

## VSCode

- Add config below to your VSCode `settings.json`(Strg + Shift + p -> Preferences: Open Workspace Settings(JSON))

```
"editor.formatOnSave": true,
"[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```
