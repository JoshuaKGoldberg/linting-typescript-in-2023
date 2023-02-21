import { promises as fs } from "node:fs";

function capitalizeFile(fileName) {
	let contents;

	return new Promise((resolve) => {
		// 1. Read contents from the file
		fs.readFile(fileName).then((data) => {
			contents = data.toString();
			console.log("Read contents:", contents);
		});

		setTimeout(() => {
			const uppercased = contents.toUpperCase();

			// 2. Write uppercased contents to the file
			fs.writeFile(fileName, uppercased).then(() => {
				console.log("Finished writing:", uppercased);
				resolve();
			});
		});
	});
}

capitalizeFile("./example.txt").catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
