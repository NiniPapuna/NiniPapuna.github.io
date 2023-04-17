// Problem 1
var employees = [
    sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
    },
    
    mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
    },
    
    bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
    }
] 
console.log(employees)

// Problem 2
var techStars = {
    techStarsName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

// Problem 3
var anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};
    
techStars.employees.push(anna);
    
console.log(techStars);

//problem 4
let totalSalary=0;
techStars.employees.forEach((employee)=>{totalSalary += employee.salary});

console.log(totalSalary)

//problem 5
function updateSalary(techStars){
    techStars.employees.ForEach((employee)=>{
        if(employee.raiseel){
            employee.salary*=1.1
            employee.raiseel=false
        }
    })
}
updateSalary(techStars);
console.log(techStars)

//problem 6 
const workingfromhome=["Anna", "Sam"];
techStars.employees.forEach((employee)=>{
    employee.wfh=workingfromhome.includes(employee.firstName);
});

console.log(techStars)