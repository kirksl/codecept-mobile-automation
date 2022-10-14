/// <reference types='codeceptjs' />

// remove .ts from steps_file import or intellisense will break
type steps_file = typeof import('./steps_file');
type Page = typeof import('./pages/pages');
type CustomHelper = import('./helpers/CustomHelper');
type AssertHelper = import('./helpers/AssertHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, Page: Page, current: any }
  interface Methods extends Appium, CustomHelper, AssertHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}