// The Path module provides a way of working with directories and file paths.
const path = require("path");
const rootDir = require("../util/path");
const Expenses = require("../models/home");

exports.getHome = (req, res, next) => {
  console.log("GOT HOME");
  res.sendFile(path.join(rootDir, "views", "home.html"));
};

exports.addData = async (req, res, next) => {
  try {
    if (!req.body.category) {
      throw new Error("category is mandatory");
    }
    const expenses = req.body.expenses;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expenses.create({
      expenses: expenses,
      description: description,
      category: category,
    });

    res.status(201).json({ newExpenses: data }); // The HTTP 201 Created success status response code
;
  } catch (err) {
    console.log("ERROR");

    res.status(500).json({
      error: err,
    });
  }
};

// create controller for get data from database
exports.getData = async (req, res, next) => {
  try {
    const data = await Expenses.findAll();
    res.status(200).json({ newExpenses: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }

};

exports.deleteData = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("ID IS MISSING");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    // destroy method for deleting data.
    await Expenses.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.editData = async(req,res,next)=>{
  try {
    if (!req.body.category) {
      throw new Error("category is mandatory");
    }
    const expenses = req.body.expenses;
    const description = req.body.description;
    const category = req.body.category;
    const uId = re.params.id;
    const data = await Expenses.update(({where :{id  : id}})=>{
      expenses;
     description;
    category;
    });

    res.status(201).json({ newExpenses: data }); // The HTTP 201 Created success status response code
;
  } catch (err) {
    console.log("ERROR");

    res.status(500).json({
      error: err,
    });
  }
}
