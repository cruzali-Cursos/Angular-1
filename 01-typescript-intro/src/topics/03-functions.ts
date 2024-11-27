// Video 17 y 18
// function addNumbers(a: number,b: number) {
//   return a + b;
// }

// const result: number = addNumbers(1,2);
// console.log("Result: ", { result } );

// const addNumbersArrow = (a: number, b: number):string => {
//   return `${ a + b}`;
// }

// const result2: string = addNumbersArrow(1,2);
// console.log({ result2 });

// function multiply(firstNumber: number, secondNumber?: number, base:number = 2) {
//   return firstNumber * base;
// }

// const multiplyResult: number = multiply(5);
// console.log({ multiplyResult });


interface Character {
  name: string;
  hp: number;
  showHp: () => void; //valor de retorno
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
}


const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  }
}

healCharacter(strider, 10);
healCharacter(strider, 1);

strider.showHp();

  export {};