// extend 'I' with actions that are site/application wide (global)
// use 'this' instead of 'I' in this file to access it's methods

const { I } = inject();

export = function(): any {
    return actor({
        doSomethingGlobal: async function(): Promise<boolean> {
            // console.log("extend 'I' with actions that are site/application wide (global)");
            return true;
        }
    });
}