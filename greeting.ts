export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Deliberately wrong, so there is something for a run to fix.
console.log(greet("Wrold"));
