import fs from "fs";

async function getDataPart1() {
    const data = [
        ["B", "W", "N"],
        ["L", "Z", "S", "P", "T", "D", "M", "B"],
        ["Q", "H", "Z", "W", "R"],
        ["W", "D", "V", "J", "Z", "R"],
        ["S", "H", "M", "B"],
        ["L", "G", "N", "J", "H", "V", "P", "B"],
        ["J", "Q", "Z", "F", "H", "D", "L", "S"],
        ["W", "S", "F", "J", "G", "Q", "B"],
        ["Z", "W", "M", "S", "C", "D", "J"],
    ];

    const file = fs.readFileSync("./data.txt").toString().split("\n");
    file.forEach((line) => {
        const quantity = line.length === 18 ? line.charAt(5) : line.slice(5, 7);
        const sourceIdx =
            line.length === 18
                ? Number(line.charAt(12)) - 1
                : Number(line.charAt(13)) - 1;
        const targetIdx =
            line.length === 18
                ? Number(line.charAt(17)) - 1
                : Number(line.charAt(18)) - 1;
        for (let i = 0; i < Number(quantity); i++) {
            const toMove = data[sourceIdx].pop();
            console.log(`Moving ${toMove} to ${data[targetIdx]}`);
            data[targetIdx].push(toMove);
        }
    });
    let res = "";
    data.forEach((stack) => (res += stack.pop()));
    console.log(res);
}

async function getDataPart2() {
    const data = [
        ["B", "W", "N"],
        ["L", "Z", "S", "P", "T", "D", "M", "B"],
        ["Q", "H", "Z", "W", "R"],
        ["W", "D", "V", "J", "Z", "R"],
        ["S", "H", "M", "B"],
        ["L", "G", "N", "J", "H", "V", "P", "B"],
        ["J", "Q", "Z", "F", "H", "D", "L", "S"],
        ["W", "S", "F", "J", "G", "Q", "B"],
        ["Z", "W", "M", "S", "C", "D", "J"],
    ];

    const file = fs.readFileSync("./data.txt").toString().split("\n");
    file.forEach((line) => {
        const quantity = line.length === 18 ? line.charAt(5) : line.slice(5, 7);
        const sourceIdx =
            line.length === 18
                ? Number(line.charAt(12)) - 1
                : Number(line.charAt(13)) - 1;
        const targetIdx =
            line.length === 18
                ? Number(line.charAt(17)) - 1
                : Number(line.charAt(18)) - 1;
        const start = data[sourceIdx].length - quantity;
        const chunk = data[sourceIdx].splice(start, quantity);
        const t = chunk.length;
        for (let i = 0; i < t; i++) {
            const toMove = chunk.shift();
            data[targetIdx].push(toMove);
        }
    });
    let res = "";
    data.forEach((stack) => (res += stack.pop()));
    console.log(res);
}
getDataPart2();
