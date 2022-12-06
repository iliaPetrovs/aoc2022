import fs from "fs";

async function getDataPart1() {
    const file = fs
        .readFileSync("./data.txt")
        .toString()
        .split("\n")
        .map((i) =>
            i.split(",").map((i) => {
                return {
                    low: Number(i.split("-")[0]),
                    high: Number(i.split("-")[1]),
                };
            })
        );
    let counter = 0;
    file.forEach((item) => {
        if (
            item[0].low <= item[1].low &&
            item[0].high >= item[1].high &&
            item[0].low >= item[1].low &&
            item[0].high <= item[1].high
        ) {
            counter++;
        }
    });

    console.log(counter);
}
async function getDataPart2() {
    const file = fs
        .readFileSync("./data.txt")
        .toString()
        .split("\n")
        .map((i) =>
            i.split(",").map((i) => {
                return {
                    low: Number(i.split("-")[0]),
                    high: Number(i.split("-")[1]),
                };
            })
        );
    let counter = 0;
    file.forEach((item) => {
        if (item[0].high >= item[1].low && item[0].low <= item[1].high) {
            counter++;
        }
    });
    console.log(counter);
}
getDataPart2();
