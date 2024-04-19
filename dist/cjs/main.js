"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("./lib/engine.js");exports.default=class{#data;#schema;success;error;constructor(t=null){this.#init(t)}#init(t=null){t&&(this.#data=t.data||this.#data,this.#schema=t.schema||this.#schema),this.success=!1,this.error=String()}async query(t=null){try{this.#init(t),this.#data?this.#schema||(this.error="'schema' is invalid."):this.error="'data' is invalid.";var s,a=await(0,r.filterSchema)(this.#schema);return a.status?null==(s=await(0,r.walkThroughHandler)({data:this.#data,...a}))?(this.error="Query failed. Check your schema and try again.",this.#data):(this.success=!0,s):(this.error=a.err,this.#data)}catch(t){return t}}schema(t=null){return this.#schema=t,this}data(t=null){return this.#data=t,this}};