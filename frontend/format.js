//format javascript with prettier --write server/back-script.js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//a function that formats code with prettier
function formatJavascript(file) {
    const prettier = require('prettier');
    const fs = require('fs');
    const path = require('path'); 
    const filePath = path.resolve(__dirname, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const formattedContent = prettier.format(fileContent, {
        tabs: true,
        parser: 'babel',
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        semi: true,
        bracketSpacing: true,
        arrowParens: 'avoid',
        rangeStart: 0,
        rangeEnd: Infinity,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        endOfLine: 'lf',
    });
    fs.writeFileSync(filePath, formattedContent, 'utf8');
}



//get all relative paths ending with .{js, jsx, md, css, scss, html, ejs, vue, ts, tsx}
const paths = require('glob').sync(
    './src/**/*.{js, jsx, md, css, scss, html, ejs, vue, ts, tsx}',
    { nodir: true }
);
//call formatJavascript on each path
paths.forEach(path => {
  formatJavascript(path);
});
