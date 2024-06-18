# Electron + Vite + React Calculator App

## Build Your Electron Vite App (Win):

First, ensure your Electron Vite app is built and ready for distribution. Use the Vite build command to generate the necessary production files.

```
npm run build
```

This command compiles your Vite project into optimized build files typically located in a dist folder.

## Prepare Electron Packaging:

You will need an Electron packaging tool like electron-builder to create installer files for different platforms (Windows, macOS, Linux).

```
npm install electron-builder --save-dev
```

## Configure electron-builder:

Create a `electron-builder.yml` (or `electron-builder.json`) configuration file in your project root to specify packaging settings. Here's a basic example:

```yaml
appId: com.example.myapp
productName: MyApp
directories:
  output: dist
files:
  - dist/**/*  # Include all files in the 'dist' folder
```

Adjust appId, productName, and paths according to your application's specifics.

## Build the Installer:

Run the electron-builder command to package your app into an installer:

```
npx electron-builder build
```

This command builds your Electron app and creates installer files for your target platforms in the dist folder.

## Distribute Your Installer:

After successful packaging, you'll find your installer files (e.g., .exe for Windows, .dmg for macOS, .AppImage for Linux) in the dist directory.
These installer files can be distributed to users for installation.