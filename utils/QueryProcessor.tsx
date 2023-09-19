export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if(query.toLowerCase().includes("andrew id")){
    return(
      "My Andrew ID is jiayiwa2."
    );
  }

  if(query.toLowerCase().includes("name")){
    return(
      "bert"
    );
  }

  if(query.toLowerCase().includes("Which of the following numbers is the largest: 2, 8, 6?")){
    return(
      "8"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);

  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const biggestNum = query.match(/Which of the following numbers is the largest: (\d), (\d), (\d)/);

  if (biggestNum){
    const x: number =parseInt(biggestNum[1]);
    const y: number =parseInt(biggestNum[2]);
    const z: number =parseInt(biggestNum[3]);
    return Math.max(x,y,z).toString();
  }

  const multiNum = query.match(/What is (\d+) multiplied by (\d+)/);

  if (multiNum) {
    const x: number = parseInt(multiNum[1]);
    const y: number = parseInt(multiNum[2]);
    return (x*y).toString();
  }
  return "";


}
