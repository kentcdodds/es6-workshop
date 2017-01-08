const obj = {"a": 45, "b": 50};
const s = new Set();
s.add(obj)
s.add({"a": 45, "b": 50});

const u = new MagicSet();
const v = new MagicSet();

u.add(1);
u.add(2);
v.add(2);
v.add(3);
u.add(3);
u.add(4);

console.log(
  // s.size
  // u.union(v)
  // u.isSuper(v)
  // u.difference(v)
  // u.intersection(v)
  // u.union(v).isIdentical(u)
  // u.union(v).isSuper(v)
)

// TODO: create a new class called MagicSet extending Set
// MagicSet will have all behaviours of a typical set
// and some more
class MagicSet extends Set {
  // TODO: implement constructor
  constructor() {

  }
  /**
   * performs union between two magic sets
   * Should be invoked as S.union(T)
   * @returns a new MagicSet which has elements from both S and T
   */
  union(T) {
    // TODO: implement this
  }

  /**
   * performs intersection between two magic sets
   * intersection set is a set of all common elements in A and B
   * If A = {1, 2, 3} and B = { 2, 3, 4}, then intersection = {2, 3}
   * should be invoked as S.intersection(T)
   */
  intersection(T) {
    // TODO: implement this
  }

  /**
   * performs difference between two sets
   * difference is a union of two magic sets
   * 1) a magic set of all elements in A not in B
   * 2) a magic set of all elements in B not in A
   * should be invoked as A.difference(B)
   * if A = {1, 2, 3} and B = { 2, 3, 4}; difference = { 1, 4}
   */
  difference() {
    // TODO: implement this
    // use the union function defined above
  }

  /**
   * @returns true if A is a superset of B
   * to be invoked as A.isSuper(B)
   * A.isSuper(B) is true if A has all elements of B
   * A may or may not have more elements than B
   */
  isSuper() {
    // TODO: implement this
  }

  /**
   * @returns true if A and B are identical
   * A.isIdentical(B) is true if A is superset of B
   * and A and B have same size
   */
  isIdentical() {
    // TODO: implement this
  }

}
