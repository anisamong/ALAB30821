// Part 1 Prediction of Plant growth after a week

const PI = 3.1415
let radius = 5
const area = PI * radius * radius

let plants = 20
let minSpacePerPlant = 0.8
let maxCapacity = 0

// Week 1
// plants = plants
maxCapacity = plants * minSpacePerPlant
console.log("The number of plants for week 1 is " + plants)

console.log("The maxCapacity is " + maxCapacity)

if (maxCapacity > area * 0.8) {
  console.log("Week 1 maximum capacity is over 80%. Garden needs to be pruned.")

} else if(maxCapacity >= area * 0.5) {
console.log("Week 1 maximum capacity is between 50% to 80%. Garden needs to be monitored.")

} else {
  console.log("week 1 maximum capacity is less than 50%. There is room to plant more.")
}

//  Week 2
plants = plants * 2
maxCapacity = plants * minSpacePerPlant
console.log("The number of plants for week 2 is " + plants)

console.log("The maxCapacity is " + maxCapacity)

if (maxCapacity > area * 0.8) {
  console.log("Week 2 maximum capacity is over 80%. Garden needs to be pruned.")

} else if(maxCapacity >= area * 0.5) {
console.log("Week 2 maximum capacity is between 50% to 80%. Garden needs to be monitored.")

} else {
  console.log("week 2 maximum capacity is less than 50%. There is room to plant more.")
}

//  Week 3
plants = (plants * 2) * 2
maxCapacity = plants * minSpacePerPlant
console.log("The number of plants for week 3 is " + plants)

console.log("The maxCapacity is " + maxCapacity)

if (maxCapacity > area * 0.8) {
  console.log("Week 3 maximum capacity is over 80%. Garden needs to be pruned.")

} else if(maxCapacity >= area * 0.5) {
console.log("Week 3 maximum capacity is between 50% to 80%. Garden needs to be monitored.")

} else {
  console.log("week 3 maximum capacity is less than 50%. There is room to plant more.")
}


// // Part 2
plants = 100 // starting at 100 

//plants after 10 weeks
plants = plants * (2 * 2) * (2 * 2) * (2 * 2) * (2 * 2) * (2 * 2)

// maxCapacity = plants * growth rate * minSpacePerPlant
maxCapacity = plants * minSpacePerPlant 

radius = Math.sqrt((maxCapacity / PI))
console.log("The number of plants for week 10 is " + plants)
console.log("The maximum Capacity needed is " + maxCapacity)
console.log("The radius for the expanded garden is " + radius)

if (maxCapacity > area * 0.8) {
    console.log("It's been 10 weeks! Your garden's maximum capacity is over 80%. Time to pruned.")
  
  } else if(maxCapacity >= area * 0.5) {
  console.log("It's been 10 weeks! Your garden's maximum capacity is between 50% to 80%. It should be monitored.")
  
  } else {
    console.log("It's been 10 weeks! Your garden's maximum capacity is less than 50%. There is room to plant more.")
  }


// Part 3

try {
  if (maxCapacity > area * 0.8) {
    console.log("It's been 10 weeks! Your garden's maximum capacity is over 80%.")
  throw "Error - Garden is over capacity. "

} else if(maxCapacity >= area * 0.5) {
  console.log("It's been 10 weeks! Your garden's capacity is between 50% to 80%. It needs to be monitored")

} else {
  console.log("It's been 10 weeks! Your garden's capacity is below 50! You have enough capacity to plant more.")
}
}
catch (error) {
  console.log(error)
} finally {
  console.log(maxCapacity)
}




