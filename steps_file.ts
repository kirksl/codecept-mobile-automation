// extend 'I' with actions that are site/application wide (global)
// use 'this' instead of 'I' in this file to access it's methods
// declare main export without a return type or intellisense will break
// add 'this' statements to new 'I' methods or they will not run in codecept execution flow

export = function() {
    return actor({
        doSomethingGlobal: async function() {
			this.wait(2);
        }
    });
}