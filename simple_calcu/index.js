function calculateOld(a, b) {
  const result = a + b;
  return result;
}

const calculate = (a, b) => {
  const result = a + b;
  return result;
};

const calculateFromString = (input) => {
  const parts = input.split(","); // e.g. "1,1" -> ["1", "1"]

  if (parts.length !== 2) {
    throw new Error("Input must contain exactly two numbers separated by a comma");
  }

  const a = Number(parts[0]);
  const b = Number(parts[1]);
  const result = a + b;
  return result;
};

console.log(calculateOld(5, 10));       
console.log(calculate(5, 5));          
console.log(calculateFromString("1,1")); 