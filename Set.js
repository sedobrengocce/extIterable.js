"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class extSet extends Set {
    *rEntries() {
        let tmp = [];
        for (let e of this.entries()) {
            tmp.unshift(e);
        }
        for (let e of tmp)
            yield e;
    }
    ;
    *rValues() {
        let tmp = [];
        for (let e of this.values())
            tmp.unshift(e);
        for (let e of tmp)
            yield e;
    }
    *rKeys() {
        let tmp = [];
        for (let e of this.keys())
            tmp.unshift(e);
        for (let e of tmp)
            yield e;
    }
}
exports.extSet = extSet;
