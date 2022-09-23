## Purpose
The purpose of this project is to demonstrate automation of Android and iOS platforms using CodeceptJS, WebdriverIO, ReportPortal.

## Setup
Install [NodeJS](https://nodejs.org/)

Install [Java](https://www.java.com/en/download/)

Install Android Studio

Install Android Studio > `SDK Manager` > `Build-Tools` > `Platform-Tools`

Add Android Tools to PATH (See Appendix)

Open terminal

Install dependencies `npm i`

Install Appium Doctor `npm i -g appium-doctor`

Install Appium `npm i -g appium`

Obtain and put .apk (Android Native) and/or .ipa/.app (iOS Native) in known location

Launch emulator or connect physical device to computer

Configure `codecept.conf.android.ts` > `Appium` based on target Android device (See Appendix)

Configure `codecept.conf.ios.ts` > `Appium` based on target iOS device (See Appendix)

## Development
Launch emulator or connect physical device to computer

Start Appium `appium --allow-cors`

Open https://inspector.appiumpro.com/

Configure Appium Inspector (See Appendix)

Start Appium Inspector Session

Launch application to develop against

## Execute
Launch emulator or connect physical device to computer

Start Appium `appium --allow-cors`

Run the end-to-end Android tests `npm run codecept:android`

Run the end-to-end iOS tests `npm run codecept:ios`

## Review

## Appendix
Add Android Tools to PATH

Note instructions assume Z shell on Mac/Linux and Cmd on Windows (adjust as appropriate)

Note instructions assume default Android SDK paths (adjust as appropriate)

Mac/Linux
- Open terminal
- Run `echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zshrc`
- Run `echo 'export ANDROID_SDK=$HOME/Library/Android/sdk' >> ~/.zshrc`
- Run `echo 'export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk' >> ~/.zshrc`
- Run `echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.zshrc`
- Run `echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.zshrc`
- Run `source ~/.zshrc`

Windows
- Goto `This PC` > `System properties` > `Advanced system settings` > `Environment Variables`
- Click `New` under `System variables`
- Set `Variable name` to `ANDROID_HOME`, `Variable value` to `%LOCALAPPDATA%\Android\Sdk`
- Click `OK`
- Double click `Path` under `System variables`
- Click `New` to add entry to Path `%ANDROID_HOME%\emulator`
- Click `New` to add entry to Path `%ANDROID_HOME%\platform-tools`
- Click `OK`

Appium Capabilities

`app`
- Android: `Absolute path to .apk file`
- iOS: `Absolute path to .ipa file (iOS real device) or .app file (iOS simulator)`

`platformName` (`platform` in Codecept)
- Android: `Android`
- iOS: `iOS`

`deviceName` (`device` in Codecept)
- Android: `adb -s "<device id>" shell getprop ro.product.model`
- iOS: `instruments -s devices` | `xcrun xctrace list devices`

`platformVersion`
- Android: `adb -s "emulator-5554" shell getprop ro.build.version.release`
- iOS: ``instruments -s devices`` | `xcrun xctrace list devices`

Appium Server

`Remote Host`
- Local: `127.0.0.1`
- Remote: `See Device Grid Configuration`

`Remote Port`
- Local: `4723`
- Remote: `See Device Grid Configuration`

`Remote Path`
- Local: `/wd/hub`
- Remote: `See Device Grid Configuration`

## Notes
https://codecept.io/mobile
https://appium.io/docs/en/writing-running-appium/caps/
