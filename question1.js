// Question: Write an example of callback

// Definition: A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

const generateRandom = (cb) => {
    let rand = Math.random();
    console.log("This should be printed before the callback invoked: ", rand);

    cb();
};

function callback1() {
    console.log("This is callback1");
};

generateRandom(callback1); // This is one way to use callback

// We can also define the body of callback inline

generateRandom(() => {
    console.log("This is callback2");
});