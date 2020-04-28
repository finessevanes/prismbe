const datatonicRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/datatonic.json";

  // READ
  app.get("/datatonic", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = datatonicRoutes;
