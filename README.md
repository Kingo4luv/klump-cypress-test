# klumpadmin

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

To make sure your code is properly linted follow these steps

-   Get latest code from release/develop,
-   `run npm install`
-   Create a .vscode/settings.json file and then enter the following code snippets:

```json
    {
        “editor.formatOnSave”: true,
        “editor.codeActionsOnSave”: {
            “source.fixAll.eslint”: true
        },
        “[vue]“: {
            “editor.defaultFormatter”: “esbenp.prettier-vscode”
        },
        “[javascript]“: {
            “editor.defaultFormatter”: “esbenp.prettier-vscode”
        },
    }
```

The code code above will help you auto lint and format your code according to the defined eslint rules.

-   And finally make sure you run `npm run lint` to make sure you don’t have linting issues before raising a pr.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
