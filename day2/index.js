import fs from "fs";

// A and X rock
// B and Y paper
// C and Z scissors
const dict = {
    X: 1,
    Y: 2,
    Z: 3,
};
function getPoints(input) {
    if (
        (input[0] === "A" && input[1] === "Y") ||
        (input[0] === "B" && input[1] === "Z") ||
        (input[0] === "C" && input[1] === "X")
    ) {
        return 6 + dict[input[1]];
    }
    if (
        (input[0] === "B" && input[1] === "X") ||
        (input[0] === "A" && input[1] === "Z") ||
        (input[0] === "C" && input[1] === "Y")
    ) {
        return 0 + dict[input[1]];
    }
    if (
        (input[0] === "C" && input[1] === "Z") ||
        (input[0] === "B" && input[1] === "Y") ||
        (input[0] === "A" && input[1] === "X")
    ) {
        return 3 + dict[input[1]];
    }
}

async function getDataPart1() {
    const file = fs
        .readFileSync("./data.txt")
        .toString()
        .split("\n")
        .map((item) => item.split(" "));

    let sum = 0;
    file.forEach((item) => {
        sum += getPoints(item);
    });
    console.log(sum);
}

const xDict = {
    A: "Z",
    B: "X",
    C: "Y",
};

const yDict = {
    A: "X",
    B: "Y",
    C: "Z",
};

const zDict = {
    A: "Y",
    B: "Z",
    C: "X",
};
async function getDataPart2() {
    const file = fs
        .readFileSync("./data.txt")
        .toString()
        .split("\n")
        .map((item) => item.split(" "));

    let sum = 0;
    file.forEach((item) => {
        switch (item[1]) {
            case "X":
                item[1] = xDict[item[0]];
                console.log(item);
                break;
            case "Y":
                item[1] = yDict[item[0]];
                break;
            case "Z":
                item[1] = zDict[item[0]];
                break;
        }
        console.log(getPoints(item));
        console.log(item);
        sum += getPoints(item);
    });
    console.log(sum);
}

getDataPart2();
