## Purpose
The purpose of this project is to demonstrate automation of Android and iOS platforms using Codecept.

## Setup
Install [NodeJS](https://nodejs.org/)

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
Appium Capabilities

`app`
- Android: `Absolute path to .apk file`
- iOS: `Absolute path to .ipa file (iOS real device) or .app file (iOS simulator)`

`platformName` (`platform` in Codecept)
- Android: `Android`
- iOS: `iOS`

`deviceName` (`device` in Codecept)
- Android: `adb.exe -s "<device id>" shell getprop ro.product.model`
- iOS: `instruments -s devices` | `xcrun xctrace list devices`

`platformVersion`
- Android: `adb.exe -s "emulator-5554" shell getprop ro.build.version.release`
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
