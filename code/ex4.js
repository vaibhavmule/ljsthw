// Variables and Names
var cars = 100
var space_in_a_car = 4.0
var drivers = 30
var passengers = 90
var cars_not_driven = cars - drivers
var cars_driven = drivers
var carpool_capacity = cars_driven * space_in_a_car
var average_passengers_per_car = passengers / cars_driven


console.log("There are", cars, "cars available.")
console.log("There are only", drivers, "drivers available.")
console.log("There will be", cars_not_driven, "empty cars today.")
console.log("We can transport", carpool_capacity, "people today.")
console.log("We have", passengers, "to carpool today.")
console.log("We need to put about", average_passengers_per_car, "in each car.")
