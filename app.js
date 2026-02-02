"use strict";

/**
 * Node2Know — Express Router Base Paths
 *
 * When you mount a router with a base path, Express prepends that base path
 * to every route defined inside the router.
 *
 * This lets your router define SHORT, clean paths:
 *   "/"     instead of "/things"
 *   "/:id"  instead of "/things/:id"
 */

const express = require("express");
const app = express();

const thingRouter = require("./routes/thingRouter");

const PORT = process.env.PORT || 3000;

// Mount the router
// Any request starting with "/things" goes here
app.use("/things", thingRouter);

app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Try: http://localhost:${PORT}/things`);
  console.log(`Try: http://localhost:${PORT}/things/42`);
});
