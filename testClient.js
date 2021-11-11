const args = process.argv.slice(2);
if (args.length === 0 ) {
    console.log("no connection url");
    process.exit(1);
}
const url = args[0];
console.log(`connect ${url}`);

const https = require('https');

https.get(url, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
