const data = [
  { category: 'Skill', name: 'Skill', value: 'Beginner' },
  { category: 'Distance', name: 'Distance (In Miles)', value: 3 },
  { category: 'Body Part', name: 'Body Part', value: ['Legs', 'Back'] }
]
// go down the ordering array
// whenever you see a match, you put it into the new ordered array
const ordering = [
  "Time",
  "Skill",
  "Region",
  "Body Part",
  "Type",
  "Activity",
  "Goal",
  "Location",
  "Impact Level",
  "Best For",
  "Distance",
  "Reps",
  "Sets"
];

const orderingMap = ordering.reduce((accumulator, category, index) => {
  accumulator[category] = index

  return accumulator
}, {})

function mySort (a, b) {
  const categoryA = a.category
  const categoryB = b.category

  // default to 100 if not found
  const categoryAIndex = orderingMap[categoryA] || 100
  const categoryBIndex = orderingMap[categoryB] || 100

  if (categoryAIndex < categoryBIndex) {
    return -1
  }

  return 1
}

console.log(data)

console.log()

console.log(data.sort(mySort))