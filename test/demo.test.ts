import {describe, it, expect} from "vitest";

describe('foo', () => {
    it("sum", () => {
        expect(globalThis.crypto).to.be.not.undefined;
    })
});