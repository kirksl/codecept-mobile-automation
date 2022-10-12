// extend 'I' with actions that require low-level driver access
// 'I' cannot be directly accessed within a helper

import Helper from '@codeceptjs/helper';

class CustomHelper extends Helper {
    doSomethingCustom() {
        // console.log("extend 'I' with actions that require low-level driver access");
        return;
    }
}

export = CustomHelper;