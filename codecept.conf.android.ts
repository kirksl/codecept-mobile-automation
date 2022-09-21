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
			app: 'app-debug.apk',
			platform: 'android',
			smartWait: 5000,
			device: 'Android SDK built for x86',
			desiredCapabilities: {
				platformVersion: '10.0'
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
			endpoint: '<base_url_here>/api/v1',
			launchName: '<launch_name_here>',
			projectName: '<project_name_here>'
		}
	},
	name: 'codecept-mobile-automation'
}