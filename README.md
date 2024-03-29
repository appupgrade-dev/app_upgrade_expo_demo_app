# App Upgrade: Expo Demo App

[App Upgrade: Expo Demo App](https://github.com/appupgrade-dev/app_upgrade_expo_demo_app) is a sample expo app integrated with [App Upgrade React-Native SDK](https://www.npmjs.com/package/app-upgrade-react-native-sdk) to demonstrate how Force upgrade works in expo app with [App Upgrade](https://appupgrade.dev). 


## Installation

To get started, clone the repo:

`$ git clone https://github.com/appupgrade-dev/app_upgrade_expo_demo_app`

## Setup

1. Once cloned, navigate to the `app_upgrade_expo_demo_app` directory.

   `$ cd app_upgrade_expo_demo_app`

2. Then install the dependencies:

   `$ npm install`

3. Open the directory in your code editor.

4. Open the `app_upgrade_expo_demo_app/App.js` file, and enter required values for the variables:

   | Key                   | Value Description |
   | -----------------------|-------------|
   | `xApiKey`     | Your API Key. Required. |
   | `appName`  | Your app name. Required. |
   | `appVersion`  | Your app version. Required. |
   | `platform`  | Your app platform, ex: android or iOS. Required. |
   | `environment`  | Your app enviroment, ex: dev, stating, production. Required. |
   | `appLanguage`  | Your app language, ex: en, es. Optional. |

   Example:

   ```js
    const xApiKey = 'YjhlZjdlMWMtODJhMC00YWZiLTk3MTktZmQ0ZmNmZjI0ODQ0';
    const appInfo = {
        appId: 'com.microsoft.bing',
        appName: 'Wallpaper app', // Your app name
        appVersion: '1.0.0', // Your app version
        platform: 'android', // App Platform, android or ios
        environment: 'production', // App Environment, production, development
        appLanguage: 'en', // App LAnguage, en, es etc.
    };
   ```

5. Save `App.js` file.

## Run the app:
   Start the expo
   `$ expo start`

   and select your platform or scan code to view app in your device.

> Ref: https://reactnative.dev/docs/environment-setup

## Usage:   

1. Head to [App Upgrade](https://appupgrade.dev) and signup if not already.
2. Create a new Project.
3. Grab the API Key. You will need to provide the same in the required fields mentioned in above section.
4. Create a new version with the required details and force upgrade field as selected. Make sure the details provided in version matches with the details provided in the App.js file.
5. Refresh the app and you will be able to see a popup for force upgrade.
6. Edit the version in dashboard with Force upgrade field unselected. Refresh the app and you will see a popup with soft upgrade with a button to upgrade later.
 > For full details on how to use App Upgrade dashboard read our [Documentation](https://appupgrade.dev/docs)

## Screenshots
 ![forceupgrade_expo](https://raw.githubusercontent.com/appupgrade-dev/app-upgrade-assets/main/images/forceupgrade_expo.png)

## Need help?

If you're looking for help, try our [Documentation](https://appupgrade.dev/docs/) or our [FAQ](https://appupgrade.dev/docs/app-upgrade-faq).
If you need support please write to us at support@appupgrade.dev
