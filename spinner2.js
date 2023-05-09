const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|' ];

let counter = 0;

for (const char of spinnerArr) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, 100 + counter);
  counter += 200;
}