import { createServer } from "http";
import fs from "fs";

const buf = new Buffer.alloc(1024);
const PORT = 8000;

console.log( __filename );

fs.mkdir('tester',(err) => { 
  if (err) console.log(err);
  console.log('folder created')
})

// fs.unlink('data/hello.txt',(err) => {
//   if (err) console.log(err);
//   console.log('file deleted successfully')
// })

fs.writeFile(
  "gmc.jsx",
  `useEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(list));
}, [list]); // Includes 'list' dependency
`,
  (err) => {
    if (err) console.log(err);
    console.log("file was created successfully");
  }
);

fs.stat("data/text.txt", (err, stats) => {
  if (err) console.log(err);
  console.log("is a file?:", stats.isFile());
  console.log("is a folder?:", stats.isDirectory());
  // console.log(stats);
});

const text = fs.openSync("data/text.txt", "rs");
console.log("file opened sync", text);

fs.open("data/text.txt", "r+", (err, data) => {
  if (err) console.log("file failed to open", err);
  console.log("file opened", data);

  fs.read(data, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) console.log(err);

    console.log(bytes, "bytes read");

    if (bytes > 0) {
      console.log(
        "reading the data inthe file",
        buf.slice(0, bytes).toString()
      );
    }

    fs.close(data, (err) => {
      if (err) console.log(err);
      console.log("file closed successfully");
    });
  });
});

fs.readFile("data/text.txt", (err, data) => {
  if (err) console.log(err);
  console.log("async method:", data.toString());
});

const data = fs.readFileSync("data/text.txt");
console.log("sync method:", data.toString());

// fs.unlink('gmc.txt',(err) => {
//   if (err) console.log(err);
//   console.log('file deleted successfully')
// })

// fs.readFile("input.txt", (err, data) => {
//   if (err) console.log(err.message);
//   console.log(data.toString());
// });

// // console.log(data.toString());
// console.log("Program Ended");

// createServer((req, res) => {
//   // Send the HTTP header
//   // HTTP Status: 200 : OK
//   // Content Type: text/plain
//   res.writeHead(200, { "Content-Type": "text/json" });

//   res.end('hhuio');
// }).listen(PORT);

// console.log(`server is running on  http://localhost:${PORT}`);
