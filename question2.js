// Question: Write a program to print pattern 1,3,6,10,15...

const generatePattern = (range) => {
    let toBePrint = 1;
    let finalPattern = "";
    for(let i = 1; i <= range; i++) {
        if(i === 1) {
            // console.log(toBePrint);
            finalPattern = finalPattern + toBePrint + ",";
        }else {
            toBePrint += i;
            // console.log(toBePrint);
            finalPattern = finalPattern + toBePrint + ",";
        }
    }
    console.log(finalPattern);
};

generatePattern(50);