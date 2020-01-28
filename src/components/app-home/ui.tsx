import { h } from "@stencil/core";

export class ButtonGenerator {
  constructor (
    text: string,
    type: string,
    onclick: (e: Event) => void = () => {},
    color: string = 'primary'
  ) {
    return <ion-button color={color} data-type={ type }
      onClick={(e) => onclick(e)}>
      { text }
    </ion-button>;
  }
}

const buttonText: Array<string> = [];
const buttonType: Array<string> = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'lparen',
  'zero',
  'rparen',
];

const fnText: Array<string> = [
  'sin',
  'cos',
  'tan',
  'cot',
  'sec',
  'cosec',
  'log',
  'ln',
  'sin',
  'cos',
  'tan',
  'cot',
  'sec',
  'cosec',
  'log',
  'ln',
];

for (let i = 1; i <= 9; i++) {
  buttonText.push(i.toString());
}

buttonText.push(
  '(',
  '0',
  ')'
);

export const buttons: Array<ButtonGenerator> = [];

buttonText.map((text, index) => {
  buttons.push(new ButtonGenerator(text, buttonType[index]));
});

export const fnBtns: Array<ButtonGenerator> = [];

fnText.map((text, index) => {
  fnBtns.push(new ButtonGenerator(text, fnText[index]));
});
