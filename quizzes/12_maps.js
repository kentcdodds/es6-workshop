const m = new Map();
m.set("a", 3);
m.set({v: 5, j: 7}, 7);
m.set(() => {}, 8);

// TODO: refactor this with arrow function
function display(m) {
  // TODO: implement this
  // this will iterate over the map m
  // and print key value pair
  // simply return the template String
}

console.log(
  // m.size
  // display(m)
);

// TODO: the following is a naive fibonacci number generator
const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

fib(15)
fib(20)
fib(25); // the time taken to compute these increase drastically as n gets bigger
fib(90); // won't finish in hours

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
 * We can simply speed this up, by not computing repeatedly
 * Instead, if we have computed something beforehand, save them in a Map()
 * and retrieve it when needed again
 * This technique is an example of memoization
 */
const cache = new Map();
const fibMemoized = (n) => {
  if(n <= 2) {
    // TODO: memoize values of fibMemoized(1) and fibMemoized(2)

    return 1;
  }
  // check if already exists in cache
  if(/* TODO: add check */) {
    // TODO: found in cache, retrieve and return
  }
  // not found in cache
  // compute recursively
  const value = fibMemoized(n - 1) + fibMemoized(n - 2);
  // TODO: add it to cache so when we come here through another path
  // we don't have to compute again

  return value;
}

console.log(
  // fibMemoized(90)
  // fibMemoized(100)
  // fibMemoized(500)
  // fibMemoized(1000)
);

/**
 * Let's practice memoization with something similar
 * We will practice with nCr or combinatorial formula
 * If you don't know combinatorial or binomial theorem
 * You don't need to know
 * nCr or C(n, r) is the number of different collections
 * by taking r objects out of a collection of n objects
 *
 * Only thing we are trying to implement is the function C
 * C(n, k) = C(n - 1, k - 1) + C(n, k - 1)
 * And C(n, n) = C(n, 0) = 1
 * Also, if n = 1, C(n, 1) = C(n , 0) = 1
 * k < n
 */
// The naive implementation
const C(n, k) = (n === 1 || k === n || k === 0) ? 1 : C(n - 1, k) + C(n - 1, k - 1)

console.log(
  // C(10, 5)
  // C(20, 3)
  // C(50, 14)
  // C(70, 35)
);

/**
 * Has the same issue as the fibonacci naive implementation
 * Tries to recompute C(n - 1, k - 1) while it was already done
 * trying to compute C(n - 1, k)
 * So, we cache or memoize it
 */
// TODO: implementat the cached / memoized version
// with a Map
const combinatorialMap = new Map();

const C_memoized = (n, k) => {
  // You can do this!
  // think of the Map structure
  // Now you have two keys instead of one
  // You would be tempted to try something like this
  // Map.set({n: 3, k: 2}, 3)
  // Use the (n, k) pair as an object and the value as output from C(n, k)
  // Except this won't work, because two objects with same content
  // do not have same memory address, and consequently, same hashcode
  // So when you do Map.get({n: 3, k: 2}), it will return undefined
  // Not what you have set earlier
  // Another way of saying this is that
  // V8 engine doesn't have object pooling by default
  // hint: how about a map in a map!
}

console.log(
  // C_memoized(3, 2) --- should give 3
  // C_memoized(10, 4) --- should give 210
  // C_memoized(6, 5) --- should give 6
  // C_memoized(120, 60)
  // C_memoized(600, 290)
)
