// 1
function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName=featureName
    this.isEnabled=isEnabled
    this.userGroupAccess=userGroupAccess

}
const userRole=["admins","users","testers"]

FeatureToggle.prototype.canAccess=function(userRole){
    return this.isEnabled && this.userGroupAccess.includes(userRole)
}


FeatureToggle.prototype.toggleFeature=function(flag){
  this.isEnabled=flag
}

userRole.forEach(role => {
    if(featureName.canAccess(ruserRole)){
    console.log(`access granted`)
}
else{
    console.log("access granted")
}
})

const feature =new FeatureToggle("New Das",true,["admins","testers"])
const userGroupAccess=["admins","users","testers"]

// console.log(feature.canAccess("admins"))
// feature.toggleFeature(false)
// console.log(feature.canAccess("admins"))






















function FeatureToggle(featureName, isEnabled, userGroupAccess) {
	this.featureName = featureName;
	this.isEnabled = isEnabled;
	this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole) {
	return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function(flag) {
	this.isEnabled = flag;
};










//  3
function Order(customer, items, status) {
    this.customer = customer
    this.items = items
    this.status = "pending"

}
Order.prototype.totalCost = function () {
    return this.items.reduce((sum, item) => sum + (item.quantity + item.price), 0)
}
Order.prototype.updateStatus = function (paymentReceived) {
    if (paymentReceived) {
        this.status = "Completed"
    }
    else {
        this.status = "pending"
    }


}

Order.prototype.categorizeUrgency = function () {
    switch (this.status) {
        case "Completed":
            return "order is completed"
        case "Pending":
            return "Order is pending"
        default:
            return "Unkown result"



    }
}
const order = new Order({ name: "Semhal", email: "semhal@gmail.com" }, [{ productName: "Phone", quantity: 1, price: 10000 }, { productName: "Laptop", quantity: 2, price: 5000 }]);
console.log(order.totalCost())
order.updateStatus(true)
console.log(order.categorizeUrgency())

// 4

// function Employee(id, name, performance,feedback) {
//     this.id = id
//     this.name = name
//     this.performance = performance
//     this.feedback=feedback


// }
// Order.prototype.average = function () {
//    let scores=object.values(this.performance)
//    let totalscore=scores.reduce((item,score)=>item+score,0)
//    let ave=totalscore/scores.length
//    return ave
// }
// Order.prototype.classifyPerfomance = function () {
// //     this.average.filter(item=)

//  }
// Order.prototype.addFeedback = function (text) {
   
// this.feedback.push(text)
    
// }

// const employee= new Employee("Semahl",{communication:3,efficeny:4,reliablity:9},["You did great."])
// // console.log(average())
// employee.feedback("You should improve little")
// console.log("Feedback",employee.feedback)






 

//   5,

// function Elearning(title,instructor,students){
// this.title=title
// this.instructor=instructor
// this.students=students

// }

// Order.prototype.completedName = function () {
//    return this.completedName
    
// }











