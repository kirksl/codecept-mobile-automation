/// <reference types='codeceptjs' />
type Page = typeof import('./pages/pages');

declare namespace CodeceptJS {
  interface SupportObject { I: I, Page: Page, current: any }
  interface Methods extends Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
