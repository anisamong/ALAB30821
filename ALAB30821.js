// Part 1 Prediction of Plant growth after a week
const PI = 3.1415
let radius = 5
const area = PI * radius * radius

let plants = 20
let min_per_plant = 0.8
let capacity = 0

capacity = (plants * 2) * min_per_plant
plants = plants * 2
console.log("The number of plants for week 1 is " + plants)

console.log("The capacity is " + capacity)

if (capacity > area * 0.8) {
  console.log("Week 1 maximum capacity is over 80%. Garden needs to be pruned.")

} else if(capacity >= area * 0.5) {
console.log("Week 1 maximum capacity is between 50% to 80%. Garden needs to be monitored.")

} else {
  console.log("week 1 maximum capacity is less than 50%. There is room to plant more.")
}

// Part 2




// let growth = 2





// Part 2

// area after 10 weeks starting with 100 plants capacity / pi / 2

// capacity = plants * growth rate * 

// capacity = 102400
// radius = 