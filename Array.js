"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class extendedArray extends Array {
    *rEntries() {
        for (let i = this.length - 1; i > -1; --i)
            yield [i, this[i]];
    }
    *rKeys() {
        for (let i = this.length - 1; i > -1; --i)
            yield i;
    }
    *rValues() {
        for (let i = this.length - 1; i > -1; --i)
            yield this[i];
    }
}
exports.extendedArray = extendedArray;
