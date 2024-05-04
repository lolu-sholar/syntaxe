import{SyntaxeEngine as r}from"./lib/engine.js";export default class{#data;#schema;success;error;constructor(t=null){this.#init(t)}#init(t=null){t&&(this.#data=t.data||this.#data,this.#schema=t.schema||this.#schema),this.success=!1,this.error=String()}async query(t=null){try{this.#init(t),this.#data?this.#schema||(this.error="'schema' is invalid."):this.error="'data' is invalid.";var a,s=new r,i=await s.filterSchema(this.#schema);return i.status?null==(a=await s.walkThroughHandler({data:this.#data,...i}))?(this.error="Query failed. Check your schema and try again.",this.#data):(this.success=!0,a):(this.error=i.err,this.#data)}catch(t){return t}}schema(t=null){return this.#schema=t,this}data(t=null){return this.#data=t,this}}