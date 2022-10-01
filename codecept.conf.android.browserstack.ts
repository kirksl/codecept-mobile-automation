import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
	tests: './tests/*_test.ts',
	output: './output',
	helpers: {
		Appium: {
			host: 'hub-cloud.browserstack.com',
			port: 4444,
			platform: 'android',
			//smartWait: 10000,
			desiredCapabilities: {
				'bstack:options': {
					userName: '<user_name_here>',
					accessKey: '<access_key_here>',
					appiumVersion: '1.22.0',
					local: 'false'
				},
				platformName: 'android',
				platformVersion: '9.0',
				deviceName: 'Google Pixel 3',
				app: '<app_here>'
			}
		}
	},
	include: {
		Page: './pages/pages'
	},
	plugins: {
		reportportal: {
			enabled: false,
			require: '@reportportal/agent-js-codecept',
			token: '<access_token_here>',
			endpoint: 'http://localhost:8080/api/v2',
			launchName: 'android',
			launchAttributes: [{key: 'build', value: '0'}],
			projectName: 'demo'
		},
		retryFailedStep: {
			enabled: true
		}
	},
	name: 'codecept-mobile-automation'
}