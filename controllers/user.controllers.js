const data = require("../MOCK_DATA.json");

module.exports.getAllUsers = (req, res, next) => {
  res.json(data);
};
module.exports.randomUser = (req, res, next) => {
  const single = data[Math.round(Math.random() * data.length)];
  res.json(single);
};
module.exports.saveATools = (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.send(data);
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const nweData = data.find((tool) => tool.id === Number(id));
  nweData.id = id;
  nweData.name = req.body.name;
  nweData.gender = req.body.gender;
  nweData.address = req.body.address;
  nweData.contact = req.body.contact;
  nweData.phatoUrl = req.body.phatoUrl;
  res.send(nweData);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deleteUser = data.filter((user) => user.id !== Number(id));
  res.send(deleteUser);
};
