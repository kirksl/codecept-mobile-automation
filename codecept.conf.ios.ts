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
			platform: 'ios',
			smartWait: 10000,
			desiredCapabilities: {
				app: './apps/Automation.app',
				automationName: 'XCUITest',
				deviceName: 'iPhone 8'
			}
		},
		AssertHelper: {
			require: './helpers/AssertHelper'
		},
		CustomHelper: {
			require: './helpers/CustomHelper'
		}
	},
	include: {
		I: './steps_file',
		Page: './pages/pages'
	},
	plugins: {
		reportportal: {
			enabled: false,
			require: '@reportportal/agent-js-codecept',
			token: '<access_token_here>',
			endpoint: 'http://localhost:8080/api/v2',
			launchName: 'ios',
			launchAttributes: [{key: 'build', value: '0'}],
			projectName: 'demo'
		},
		testrail: {
			enabled: false,
			require: 'codeceptjs-testrail',
			host: '<host_name_here>',
			user: '<user_name_here>',
			password: '<password_here>',
			suiteId: 1,
			projectId: 2,
			runName: 'Android Demo Run',
			configuration: {
				groupName: 'mobile',
				configName: 'android'
			},
			closeTestRun: true
		},
		retryFailedStep: {
			enabled: true
		},
		screenshotOnFail: {
			enabled: true
		}
	},
	name: 'codecept-mobile-automation'
}