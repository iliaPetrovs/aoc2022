import fs from "fs";

const dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
};

async function getDataPart1() {
    const file = fs.readFileSync("./data.txt").toString().split("\n");
    let sum = 0;
    file.forEach((line) => {
        const arr = [
            line.slice(0, line.length / 2),
            line.slice(line.length / 2),
        ];
        const letterLog = [];
        for (let i = 0; i < arr[0].length; i++) {
            const letter = arr[0].charAt(i);
            if (arr[1].includes(letter) && !letterLog.includes(letter)) {
                letterLog.push(letter)
                const val = dict[letter] ?? 0;
                sum += val;
            }
        }
    });

    console.log(sum);
}
async function getDataPart2() {
    const file = fs.readFileSync("./data.txt").toString().split("\n");
    let sum = 0;
    for(let i = 0; i < file.length; i+=3) {
        for (let j = 0; j < file[i].length; j++) {
            const letter = file[i].charAt(j);
            if (file[i+1].includes(letter) && file[i+2].includes(letter)) {
                const val = dict[letter] ?? 0;
                sum += val;
                break;
            }
        } 
    }

    console.log(sum);
}
getDataPart2();
