import { ButtonGenerator } from '../components/app-home/ui';
export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

export function generateButtons() {
  const buttons: Array<ButtonGenerator> = [];
  const onclick = (e: Event) => {
    console.log(e);
  }
  // Numbers
  for (let i = 1; i <= 9; i++) {
    buttons.push(new ButtonGenerator(i + '', i + '', (e) => onclick(e)));
  }

  buttons.push(
    new ButtonGenerator(`\u00B1`, 'plusmn', (e) => onclick(e)),
    new ButtonGenerator('0', '0', (e) => onclick(e)),
    new ButtonGenerator('.', '.', (e) => onclick(e)),
  );

  return buttons;
}
