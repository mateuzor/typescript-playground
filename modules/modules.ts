// MODULES IN TYPESCRIPT
// Modules help organize code into separate files and reuse functionality.
// Every file is treated as a module if it contains import or export statements.

// ---------------------------
// NAMED EXPORTS & IMPORTS
// ---------------------------

export const name = "Mateus";
export function greet() {
  return `Hello, ${name}`;
}
export class User {
  constructor(public username: string) {}
}

// In another file:
// import { name, greet, User } from './moduleFile';

// ---------------------------
// DEFAULT EXPORT & IMPORT
// ---------------------------

export default function sayHello() {
  return "Hello from default export";
}

// In another file:
// import sayHello from './moduleFile';

// ---------------------------
// ALIASING EXPORTS
// ---------------------------

export { greet as welcome };

// In another file:
// import { welcome } from './moduleFile';

// ---------------------------
// EXPORTING TYPES
// ---------------------------

export type UserInfo = {
  id: number;
  email: string;
};

// In another file:
// import type { UserInfo } from './moduleFile';

// ---------------------------
// EXPORT ALL FROM MODULE
// ---------------------------

// In file A.ts
// export const a = 1;

// In file B.ts
// export * from './A';

// ---------------------------
// NAMESPACE IMPORT (not recommended in modern TypeScript)
// ---------------------------

// import * as Utils from './utils';
// Utils.greet();

// ---------------------------
// DYNAMIC IMPORT
// ---------------------------

// async function loadModule() {
//   const module = await import('./moduleFile');
//   console.log(module.greet());
// }

// ---------------------------
// COMMONJS VS ESM
// ---------------------------
// NodeJS used CommonJS (require/module.exports), modern TS/JS uses ESM (import/export)
// Always prefer ESM for compatibility with modern tools.
