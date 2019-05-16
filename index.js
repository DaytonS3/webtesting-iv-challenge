const port = 4000 || process.env.port;
if (process.env.NODE_ENV !== "test") {
  server.listen(port, () => {
    console.log("server running...");
  });
}
