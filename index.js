function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
}


const superBowls = [
    { year: 2017, result: "L" },
    { year: 2018, result: "W" },
    { year: 2019, result: "L" }
];

console.log(superbowlWin(superBowls));