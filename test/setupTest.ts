import { beforeAll } from 'vitest'
import { webcrypto } from "node:crypto";

beforeAll(() => {
    globalThis.crypto = webcrypto as Crypto;
})