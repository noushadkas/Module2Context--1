/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter((employee) => employee.profession === "developer");
  developers.map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "Sadav", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Added Employee:", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log("Updated Array:", arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "Munazir", age: "23", profession: "designer" },
    { id: 6, name: "Raza", age: "22", profession: "manager" },
    { id: 7, name: "Ansari", age: "21", profession: "developer" },
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log("Concatenated Array:", concatenatedArray);
}