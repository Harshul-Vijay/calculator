import { Component, h, Element } from '@stencil/core';
import { buttons, fnBtns } from './ui';
import { evaluate } from '../../global/evaluator.worker';
import { generateButtons } from '../../helpers/utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Element() rootEl: HTMLElement;

  componentWillLoad() {
    localStorage.setItem('_expr', '');
  }

  renderButtons() {
    return buttons;
  }

  renderFunctions() {
    return fnBtns;
  }

  get expr() {
    return localStorage.getItem('_expr') || 'empty';
  }

  set expr(value: string) {
    localStorage.setItem('_expr', value);
  }

  async evaluate() {
    const answer = await evaluate(localStorage.getItem('_expr')) + ``;
    this.rootEl.querySelector('.ans')
      .textContent = answer;
    localStorage.setItem('_expr', answer);
  }

  run(evt: MouseEvent) {
    localStorage.setItem('_expr', localStorage.getItem('_expr') + 
      evt.target['dataset'].value);
  }

  render() {
    {/* <ion-card color="primary" class="no-margin expr">
      <ion-card-content>
        content
      </ion-card-content>
    </ion-card>,
    <ion-card color="secondary" class="no-margin controls">
      <ion-card-content>
        <div class="numbers">
          {...this.renderButtons()}
        </div>
        <div class="functions">
          {...this.renderFunctions()}
        </div>
      </ion-card-content>
    </ion-card> */}
    return [
      <ion-card color="light">
        <ion-card-content>
          expression: <span class="ans"></span>
        </ion-card-content>
      </ion-card>,
      <ion-card color="tertiary">
        <ion-card-content>{/* 
          <ion-button onClick={(e) => this.run(e)}
            data-value="1">1</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="2">2</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="3">3</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="4">4</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="5">5</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="6">6</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="7">7</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="8">8</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="9">9</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="(">(</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="0">0</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value=")">)</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value=".">.</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="+">+</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="-">-</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="/">/</ion-button>
          <ion-button onClick={(e) => this.run(e)}
            data-value="*">*</ion-button>
          <ion-button onClick={() => this.evaluate()}
            data-value="=">=</ion-button> */}
          {generateButtons()}
        </ion-card-content>
      </ion-card>
    ];
  }
}
