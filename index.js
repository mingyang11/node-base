// global.name = 'fuyao';
const { JSDOM } = require('jsdom');

const dom = new JSDOM(
  `<body>
    <div id="content"></div>
    <script>document.getElementById("content").append(document.createElement("hr"));</script>
  </body>`,
  { runScripts: 'dangerously' }
);

// The script will be executed and modify the DOM:
console.log(dom.window.document.getElementById('content').children.length); // 1
