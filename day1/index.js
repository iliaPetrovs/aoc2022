import fs from "fs";

async function getDataPart1() {
    const file = Math.max(
        ...fs
            .readFileSync("./data.txt")
            .toString()
            .split("\n\n")
            .map((i) => i.split("\n"))
            .map((i) => i.reduce((a, b) => Number(a) + Number(b)))
            .map((i) => Number(i))
    );

    console.log(file);
}
async function getDataPart2() {
    const array = fs
        .readFileSync("./day1.txt")
        .toString()
        .split("\n\n")
        .map((i) => i.split("\n"))
        .map((i) => i.reduce((a, b) => Number(a) + Number(b)))
        .map((i) => Number(i)).sort((a, b) => a > b);

        const getTop = () => {
            return array.splice(array.indexOf(Math.max(...array)), 1)
        }


        console.log(Number(getTop()) + Number(getTop()) + Number(getTop()));
        

}

getDataPart2();
