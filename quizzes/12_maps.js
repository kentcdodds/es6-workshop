console.log(
  // display(),
  // prime(),
  // fibonacci(),
  // combinatorial()
);


function display() {
  const m = new Map();
  m.set(); // TODO: add "a" as key, 3 as value
  m.set(); // TODO: key is {v: 5, j: 7}, value is 7
  m.set(); // TODO: key is a nop function, value is 8
  return m
}

function prime() {
  // In this exercise
  // we will isolate the prime numbers between 2 to 100
  // and list other composite numbers between 2 to 100
  // The Map would have prime numbers and keys
  // and the value is an array of composite numbers
  // for which it's a factor
  //
  // Map { 2 => [4, 8], 3 => [6, 9], 5 => [10], 7 => []}

  const m = new Map()

  // TODO: iterate over 2 to 100 and do this
  // Both 2 and 100 are included


  return m
}

// the following deals with mysteries of fibonacci number
function fibonacci() {
  // this is the definition of fibonacci number
  const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

  // TODO: change the following to fib(40), fib(43), fib(45), fib(47) etc.
  // It will demonstrate how it gets real slow, real fast
  return fib(30) // the time taken to compute these increase drastically as n gets bigger
  // TODO: comment out the above return statement once done

  // TODO: Rewrite the above fib function
  // With Map() to speed it up
  /**
   * We have to make the above recursive implementation better
   * The reason it gets slow is the step where you do fib(n - 1) + fib(n - 2)
   * Say, n = 4
   * Then the function expands like this
   * fib(4) = (fib(3)) + (fib(2))
   * Now, fib(2) = 1, as defined
   * It then tries to compute fib(3)
   * fib(3) = fib(2) + fib(1) = 1 + 1 = 2
   * See above that even when it has computed fib(n - 2) once
   * It will try to compute fib(n - 2) again in the process of computing fib(n - 1)
   * Basically, it's evaluating same function for a given argument over and over again
   * And computing f(r) means computing f(r- 1), f(r - 2), f(r - 3), ..., f(2), f(1)
   *
   * We can speed this up easily, by not computing repeatedly
   * Instead, if we have computed something beforehand,
   * save them in a Map()
   * and retrieve it when needed again
   * This technique is an example of memoization
   */
  // TODO: Define your map here
  const fibMemoized = (n) => {
    if(n <= 2) {
      // you may memoize values of fibMemoized(1) and fibMemoized(2)
      // though it's not necessary

      return 1;
    }
    // check if already exists in cache
    // TODO: add check
    if(false) {
      // TODO: found in cache, retrieve and return
    }
    // not found in cache
    // compute recursively
    const value = fibMemoized(n - 1) + fibMemoized(n - 2);
    // TODO: add it to cache so when we come here through another path
    // we don't have to compute again

    return value;
  }

  return fibMemoized(500) // TODO: Now increase to 1000, 2000

}



/**
 * Let's practice memoization with something similar
 * We will practice with nCr or combinatorial formula
 * If you don't know combinatorial or binomial theorem
 * You don't need to know
 * nCr or C(n, r) is the number of different collections
 * by taking r objects out of a collection of n objects
 *
 * It's ok if the above didn't make tings clear
 * Just know that nCr is a cool number that
 * Mathematicians like to compute for different n and r
 *
 * Only thing we are trying to implement is the function C
 * C(n, k) = C(n - 1, k - 1) + C(n, k - 1)
 * And C(n, n) = C(n, 0) = 1
 * Also, if n = 1, C(n, 1) = C(n , 0) = 1
 * k < n
 */
function combinatorial() {
  // The naive implementation
  const C = (n, k) => (n === 1 || k === n || k === 0) ? 1 : C(n - 1, k) + C(n - 1, k - 1)

  // TODO: first increase the number to get a feel
  // of how slow it gets as n increases
  // keep k ~ n/2
  return C(30, 15) // don't go beyond (34, 17)
  // TODO: Now comment out the above return statement

  /**
   * Has the same issue as the fibonacci naive implementation
   * Tries to recompute C(n - 1, k - 1) while it was already done
   * trying to compute C(n - 1, k)
   * So, we cache or memoize it
   */

   // Now you have two keys instead of one
   // You would be tempted to try something like this
   // Map.set({n: 3, k: 2}, 3)
   // Use the (n, k) pair as an object and the value as output from C(n, k)
   // Except this won't work, because two objects with same content
   // do not have same memory address, and consequently, different hashcodes
   // So when you do Map.get({n: 3, k: 2}), it will return undefined
   // Not what you had set earlier
   // Another way of saying this is that
   // V8 engine doesn't have object pooling by default
   // hint: how about a map in a map!

   // TODO: define the map here
   const C_memoized = (n, k) => {
     if(n === 1 || k === n || k === 0) {
       // you won't get any benefit caching things here
       return 1;
     }
     else {
       // TODO: check that Map has an entry for n
       // if not, set a new Map as its value
       if(false) {
         // TODO: Set a new Map as its value
       }
       // TODO: check if Map(n)
       // which is a map
       // has key k
       if(false) {
         // TODO: return it
       }
       // TODO: this is another clever optimization
       // C(n, k) = C(n - k)
       // Hence, we should also check if Map(n) has a key n - k
       if (false) {
         // TODO: If found C(n, n -k) return it
       }
     }
     // we are here because it was not in cache
     // so we are computing it
     const value = C(n - 1, k - 1) + C(n - 1, k);
     // TODO: Also store in cache
     // Map(n) should have a new entry with key k
     // value C(n, k)
     return value;
   }

   return C_memoized(100, 50) // TODO: Increase these values and see how fast it is!


}












// SOLUTION BELOW
// No peeking!




















function displaySOLUTION() {
  const m = new Map();
  m.set('a', 3);
  m.set({v: 5, j: 7}, 7);
  m.set(() => {}, 8);
  return m
}

function primeSOLUTION() {
  // In this exercise
  // we will isolate the prime numbers between 2 to 100
  // and list other composite numbers between 2 to 100
  // The Map would have prime numbers and keys
  // and the value is an array of composite numbers
  // for which it's a factor
  //
  // Map { 2 => [4, 8], 3 => [6, 9], 5 => [10], 7 => []}

  const m = new Map()
  let primeArray, j;
  // iterate over 2 to 100 and do this
  // Both 2 and 100 are included
  for(let i = 2; i <= 100; i += 1) {
    primeArray = [...m.keys()]
    for(j = 0; j < primeArray.length; j++) {
      if(i % primeArray[j] === 0) {
        // composite number
        m.set(primeArray[j], [...m.get(primeArray[j]), i])
        break;
      }
    }
    // if prime number - create the key
    if(j === primeArray.length) {
      m.set(i, [])
    }
  }

  return m
}

// the following deals with mysteries of fibonacci number
function fibonacciSOLUTION() {
  // this is the definition of fibonacci number
  const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

  // change the following to fib(40), fib(43), fib(45), fib(47) etc.
  // It will demonstrate how it gets real slow, real fast
  // return fib(30) // the time taken to compute these increase drastically as n gets bigger
  // comment out the above return statement once done

  // Rewrite the above fib function
  // With Map() to speed it up
  /**
   * We have to make the above recursive implementation better
   * The reason it gets slow is the step where you do fib(n - 1) + fib(n - 2)
   * Say, n = 4
   * Then the function expands like this
   * fib(4) = (fib(3)) + (fib(2))
   * Now, fib(2) = 1, as defined
   * It then tries to compute fib(3)
   * fib(3) = fib(2) + fib(1) = 1 + 1 = 2
   * See above that even when it has computed fib(n - 2) once
   * It will try to compute fib(n - 2) again in the process of computing fib(n - 1)
   * Basically, it's evaluating same function for a given argument over and over again
   * And computing f(r) means computing f(r- 1), f(r - 2), f(r - 3), ..., f(2), f(1)
   *
   * We can speed this up easily, by not computing repeatedly
   * Instead, if we have computed something beforehand,
   * save them in a Map()
   * and retrieve it when needed again
   * This technique is an example of memoization
   */
  // Define your map here
  const cache = new Map()

  const fibMemoized = (n) => {
    if(n <= 2) {
      // you may memoize values of fibMemoized(1) and fibMemoized(2)
      // though it's not necessary
      return 1;
    }
    // check if already exists in cache
    // add check
    if(cache.has(n)) {
      // found in cache, retrieve and return
      return cache.get(n)
    }
    // not found in cache
    // compute recursively
    const value = fibMemoized(n - 1) + fibMemoized(n - 2);
    // add it to cache so when we come here through another path
    // we don't have to compute again
    cache.set(n, value);

    return value;
  }

  return fibMemoized(1000) // Now increase to 1000, 2000

}



/**
 * Let's practice memoization with something similar
 * We will practice with nCr or combinatorial formula
 * If you don't know combinatorial or binomial theorem
 * You don't need to know
 * nCr or C(n, r) is the number of different collections
 * by taking r objects out of a collection of n objects
 *
 * It's ok if the above didn't make tings clear
 * Just know that nCr is a cool number that
 * Mathematicians like to compute for different n and r
 *
 * Only thing we are trying to implement is the function C
 * C(n, k) = C(n - 1, k - 1) + C(n, k - 1)
 * And C(n, n) = C(n, 0) = 1
 * Also, if n = 1, C(n, 1) = C(n , 0) = 1
 * k < n
 */
function combinatorialSOLUTION() {
  // The naive implementation
  const C = (n, k) => (n === 1 || k === n || k === 0) ? 1 : C(n - 1, k) + C(n - 1, k - 1)

  // first increase the number to get a feel
  // of how slow it gets as n increases
  // keep k ~ n/2
  // return C(30, 15) // don't go beyond (34, 17)
  // Now comment out the above return statement

  /**
   * Has the same issue as the fibonacci naive implementation
   * Tries to recompute C(n - 1, k - 1) while it was already done
   * trying to compute C(n - 1, k)
   * So, we cache or memoize it
   */

   // Now you have two keys instead of one
   // You would be tempted to try something like this
   // Map.set({n: 3, k: 2}, 3)
   // Use the (n, k) pair as an object and the value as output from C(n, k)
   // Except this won't work, because two objects with same content
   // do not have same memory address, and consequently, different hashcodes
   // So when you do Map.get({n: 3, k: 2}), it will return undefined
   // Not what you had set earlier
   // Another way of saying this is that
   // V8 engine doesn't have object pooling by default
   // hint: how about a map in a map!

   // define the map here
   const cache = new Map()

   const C_memoized = (n, k) => {
     if(n === 1 || k === n || k === 0) {
       return 1;
      }
      else {
        if(!cache.has(n)) {
          cache.set(n, new Map());
        }
        if(cache.get(n).has(k)) {
          return cache.get(n).get(k);
        }
        if (cache.get(n).has(n - k)) {
          return cache.get(n).get(n - k);
        }
      }
      const value = C_memoized(n - 1, k - 1) + C_memoized(n - 1, k);
      cache.get(n).set(k, value);
      return value;
   }

   return C_memoized(100, 50) // Increase these values and see how fast it is!


}
