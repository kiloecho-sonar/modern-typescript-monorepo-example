import { world } from "@mme/typescript-example-2";

/**
 * Hello World
 */
export function helloWorld() {
  let x = 0;
  let y = 1;
  if (x != y) {
    console.log("X > Y");
  }
  return `Hello ${world()}`;
}
