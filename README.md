<div align="center" markdown="1">
# React + Vite template
<br>
</div>

## Features

- ⚠️ main: `react`、`typescript`
- 🚚 build: `vite`
- 🚀 routing: `react-router-dom`
- 🚧 state management: `react-redux`
- 🎨 style: `tailwindcss`
- 🎬 animation: `tailwindcss`
- 📒 format: `eslint`、`prettier`

## Quick start
- Download this template
- Extract it and rename the folder with your project's name
- Modify package.json to match your app name
```
cd "folder name"
npm install 
npm run dev
```

## Adding new components to the project
In order to standardize components creating generate-react-cli.json contains the information to create Components, Pages and Layouts and their associates
- Creating a component:
```
npx generate-react-cli component ComponentName 
```
- Creating a page or a layout:
```
npx generate-react-cli component PageName  --type=page
npx generate-react-cli component CompName  --type=default
npx generate-react-cli component UiName  --type=uiKit
```
these commands will create the new component in a sub-folder located inside these folders depending on the type:
- ./src/components
- ./src/pages

The root folder can also be manually specified by using --path parameter
```
npx generate-react-cli component PageName  --type=page --path=src/pages/
npx generate-react-cli component CompName  --type=default --path=src/components/
npx generate-react-cli component UiName  --type=uiKit --path=src/ui-kit/
```
The output will be inside "./src/pages/some-inner-folder/PageName/" for the first case

Dont Forget Update index.ts on parent folder and App.tsx for routing