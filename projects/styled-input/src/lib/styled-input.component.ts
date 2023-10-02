import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-styled-input',
  template: `
    <p>
        {{ title }}
    </p>
  `,
  styles: [
  ]
})
export class StyledInputComponent {
  @Input() title = 'title'
}
