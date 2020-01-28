import { Component, h, Element } from '@stencil/core';
import { Evaluator } from '../../global/logic/evaluator';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  @Element() root: HTMLElement;
  componentWillLoad() {
    /* const pi_180 = Math.PI / 179.9999999999999; */
    /* const result = new Evaluator(`1+2+8sin(90 * ${pi_180})`)
      .result; */
    /* const result = new Evaluator(`(4^2 + 3^2)^(1/2)`).result;
    console.log(result); */
  }

  componentDidLoad() {
    const input: HTMLInputElement = this.root.querySelector('#expr')
      .firstElementChild as unknown as HTMLInputElement;
    const answer: HTMLSpanElement = this.root.querySelector('.answer')
    const evaluate = () => {
      const result = new Evaluator(input.value).result;
      answer.innerText = `${result}`;
    };
    const _eval: HTMLElement = this.root.querySelector('#eval');
    _eval.onclick = evaluate;
    input.onkeypress = (evt: KeyboardEvent) => {
      if (evt.key === 'Enter') {
        evaluate();
      }
    };
  }

  render() {
    {/* <ion-app>
      <app-home></app-home>
    </ion-app> */}
    {/* <ion-app>
    </ion-app> */}
    return (
      <ion-app>
        <span>
          <ion-item>
            <ion-label position="floating">Expression</ion-label>
            <ion-input type="text" id="expr"></ion-input>
          </ion-item>
          <ion-button id="eval">Evaluate</ion-button><br/>
          Answer: <span class="answer"></span>
        </span>
      </ion-app>
    );
  }
}
