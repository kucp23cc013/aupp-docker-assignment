const express = require("express");
const mongoose = require("mongoose");

// Create a database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Create a schema for the employee document
const employeeSchema = new mongoose.Schema({
  empid: { type: Number, required: true },
  name: { type: String, required: true },
  emailid: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a model for the employee document
const Employee = mongoose.model("Employee", employeeSchema);

// Create an Express application
const app = express();

// Set up middleware
app.use(express.json());

// Create API endpoints

app.get("/", async (req, res) => {
  res.status(200).json({"message": "Welcome"})
})


// Add a new employee
app.post("/api/employees", async (req, res) => {
  const employee = new Employee({
    empid: req.body.empid,
    name: req.body.name,
    emailid: req.body.emailid,
    password: req.body.password,
  });

  await employee.save();

  res.status(201).json({ message: "Employee created successfully" });
});

// Get all employees
app.get("/api/employees", async (req, res) => {
  const employees = await Employee.find();

  res.status(200).json(employees);
});

// Login
app.post("/api/login", async (req, res) => {
  const { emailid, password } = req.body;

  const employee = await Employee.findOne({ emailid });

  if (!employee || employee.password !== password) {
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    res.status(200).json({ message: "Login successful" });
  }
});

// Search employee by empid
app.get("/api/employees/:empid", async (req, res) => {
  const empid = req.params.empid;

  const employee = await Employee.findOne({ empid });

  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
  } else {
    res.status(200).json(employee);
  }
});

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));

// Connect to the database in the beginning
connectDB();