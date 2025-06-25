function createUser (name)
{
    const discordUser = '@' + name

    let reputation = 0
    const getRep = () => reputation;
    const giveRep = () => reputation++;

    return {name, discordUser, getRep, giveRep}
}

const jogh = createUser('jhon');

console.log(`discord username= ${jogh.discordUser} 
    rep = ${jogh.getRep()}`)

    console.log({discordName : jogh.discordUser, reputation: jogh.getRep()})



const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    const patata = () => ('ciao')
    return { add, sub, mul, div, patata };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476

console.log(calculator.patata(1))