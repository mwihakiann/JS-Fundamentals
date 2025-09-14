
const first = process.argv[2];
const second = process.argv[3];

if (first === undefined) {
  console.log('No argument');
} else {
  if (second === undefined) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}
