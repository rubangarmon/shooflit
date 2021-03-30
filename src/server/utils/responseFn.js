const createAndLocation = (req, res, newId) => {
  return res
    .location(`http://${req.headers["host"]}${req.baseUrl}/` + newId)
    .status(201)
    .end();
};


export {
    createAndLocation
}