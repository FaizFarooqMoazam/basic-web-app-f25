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

  // Handle math operations
  const mathMatch = query.toLowerCase().match(/what\s+is\s+(\d+)\s+plus\s+(\d+)/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1]);
    const num2 = parseInt(mathMatch[2]);
    return (num1 + num2).toString();
  }

  // Handle largest number queries
  const largestMatch = query.toLowerCase().match(/which.*largest.*?(\d+).*?(\d+).*?(\d+)/);
  if (largestMatch) {
    const numbers = [parseInt(largestMatch[1]), parseInt(largestMatch[2]), parseInt(largestMatch[3])];
    return Math.max(...numbers).toString();
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  return "";
}
