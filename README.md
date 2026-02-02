# Node2Know — Express Router Base Paths

This repo demonstrates the “right way” to use **routers with a base path**.

Instead of defining full routes inside the router (like `/things`), you:
1) mount the router at a base path in `app.js`, and  
2) define shorter routes inside the router (like `/` and `/:id`).

---

## ✅ Key Idea

### Mount the router (app.js)

```js
app.use("/things", thingRouter);
```

That means:
- anything starting with `/things` gets forwarded into `thingRouter`

### Define short routes (routes/thingRouter.js)

```js
router.get("/", ...)     // matches /things
router.get("/:id", ...)  // matches /things/:id
```

---

## ✅ Prereqs

- **Node.js**
- **npm**

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

---

## 🧪 Try it

- `http://localhost:3000/things`
- `http://localhost:3000/things/42`

---

## 👀 Watch mode

```bash
npm run watch
```

Stop with:
- `Ctrl + C`

---

## 📁 Project Structure

```txt
.
├── app.js
├── package.json
└── routes/
    └── thingRouter.js
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-ExpressRouterBasePaths.git

---

## License

**Node2Know-LEARN-1.0**
