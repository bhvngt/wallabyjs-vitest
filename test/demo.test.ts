import {describe, it, expect} from "vitest";
import {foo} from "@libs/foo/demo";

describe('foo', () => {
    it("sum", () => {
        expect(globalThis.crypto).to.be.not.undefined;
        expect(foo).to.eql("FOO");
    })
});