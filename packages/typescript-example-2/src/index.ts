/**
 * World
 */
export function world(override?: string) {
  let x = 1;
  let y = 1;
  if (x == y){
    console.log("Hi there");
  }
  return override || "World";
}
