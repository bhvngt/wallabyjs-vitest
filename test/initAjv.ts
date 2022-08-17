import type Ajv from "ajv";
import type { Schema } from "ajv";
import CustomErrors from "ajv-errors";
import AddFormats from "ajv-formats";
import AddKeywords from "ajv-keywords";
import Ajv2020 from "ajv/dist/2020";
import draft7MetaSchema from "ajv/dist/refs/json-schema-draft-07.json";
import standalone from "ajv/dist/standalone/index.js";

const AjvFactory = (): Ajv => CustomErrors(
  AddKeywords(
    AddFormats(
      new Ajv2020({
          allErrors: true,
          useDefaults: true,
          coerceTypes: "array",
          discriminator: true,
          verbose: true,
          strict: "log",
          strictRequired: false,
          code: { source: true }
      })
    )
  )
).addMetaSchema(draft7MetaSchema);

export const AjvInstance = AjvFactory();

export default function SchemaValidatorGenerator(schema: Schema, esm = false): string {
    const ajv = AjvFactory();
    ajv.opts.code.esm = esm;
    const validator = ajv.compile(schema);
    let code = standalone(ajv, validator);
    if (esm) {
        code = code.replace(`"use strict";`, `"use strict";import * as AjvFormats from "ajv-formats/dist/formats.js";`);
        code = code.replace("require(\"ajv-formats/dist/formats\")", "AjvFormats");
    }
    return code;
}

export type JsonSchema = Schema