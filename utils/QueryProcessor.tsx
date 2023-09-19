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

  const biggestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);

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

  const minusNum = query.match(/What is (\d+) minus (\d+)/);

  if (minusNum) {
    const x: number = parseInt(minusNum[1]);
    const y: number = parseInt(minusNum[2]);
    return (x-y).toString();
  }

  function isPrime(n: number) {
    if (n <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    
    return true;
  }

  function findPrimes(arr: number[]) {
    const primeNumbers = [];
    
    for (const num of arr) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    
    return primeNumbers;
  }
  
  const findPrime = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if(findPrime){
    const x: number = parseInt(findPrime[1]);
    const y: number = parseInt(findPrime[2]);
    const z: number = parseInt(findPrime[3]);
    const a: number = parseInt(findPrime[4]);
    const b: number = parseInt(findPrime[5]);
    const arr = [x,y,z,a,b];
    findPrimes(arr);
    return findPrimes(arr).toString();
  }


  const addx3 = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if(addx3){
    const x:number = parseInt(addx3[1]);
    const y:number = parseInt(addx3[2]);
    const z:number = parseInt(addx3[3]);
    return (x+y+z).toString();
  }

  const powerOf = query.match(/What is (\d+) to the power of (\d+)/);
  if(powerOf){
    const x:number = parseInt(powerOf[1]);
    const y:number = parseInt(powerOf[2]);
    return (Math.pow(x,y)).toString();
  }
  return "";


}
