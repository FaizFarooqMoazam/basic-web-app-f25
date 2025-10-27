export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return "Faiz";
  }

  // Handle math operations - addition
  const addMatch = query.toLowerCase().match(/what\s+is\s+(\d+)\s+plus\s+(\d+)/);
  if (addMatch) {
    const num1 = parseInt(addMatch[1]);
    const num2 = parseInt(addMatch[2]);
    return (num1 + num2).toString();
  }

  // Handle math operations - multiplication
  const multiplyMatch = query.toLowerCase().match(/what\s+is\s+(\d+)\s+multiplied\s+by\s+(\d+)/);
  if (multiplyMatch) {
    const num1 = parseInt(multiplyMatch[1]);
    const num2 = parseInt(multiplyMatch[2]);
    return (num1 * num2).toString();
  }

  // Handle square and cube queries
  const squareAndCubeMatch = query.toLowerCase().match(/which.*both.*square.*cube.*?([\d,\s]+)/);
  if (squareAndCubeMatch) {
    const numbersStr = squareAndCubeMatch[1];
    const numbers = numbersStr.match(/\d+/g)?.map(n => parseInt(n)) || [];
    
    // A number is both a perfect square and perfect cube if it's a perfect sixth power
    for (const num of numbers) {
      const sixthRoot = Math.round(Math.pow(num, 1/6));
      if (Math.pow(sixthRoot, 6) === num) {
        return num.toString();
      }
    }
    return "";
  }

  // Handle largest number queries - improved regex
  const largestMatch = query.toLowerCase().match(/which.*largest.*?([\d,\s:]+)/);
  if (largestMatch) {
    const numbersStr = largestMatch[1];
    const numbers = numbersStr.match(/\d+/g)?.map(n => parseInt(n)) || [];
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  return "";
}
