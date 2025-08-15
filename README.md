# TypeScript Playground

## 📦 Installation & Setup

- **Installing**

```bash
npm install -g typescript
```

- **Create a `tsconfig.json` config file**

```bash
tsc --init
```

---

## ⚡ Compilation

### Manual compilation

```bash
tsc file_name.ts
```

### Running a file with Node

> Node can interpret TypeScript files directly (unlike the browser).

```bash
node file_name.ts
```

---

## 🔄 Automatic Compilation

- **Watch mode (auto transpile to JS)**

```bash
tsc -w
```

- **Run TypeScript without manual transpilation**

1. Install **Code Runner** extension in VSCode
2. Install **ts-node** globally:

   ```bash
   npm install -g ts-node
   ```

---

## 🚀 Starting a Project with Live Server

```bash
npm start
```

---

## 🔗 Interoperability

**TypeScript and JavaScript** can work together in the same project:

- You can use **JavaScript files inside TypeScript projects**.
- TypeScript code is transpiled to **standard JavaScript**, usable anywhere.
- This makes it easier to **gradually migrate** existing JS projects to TS.
