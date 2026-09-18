import {Component} from '@angular/core';
import {SaveActionDirective} from '../shared/save-action.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaveActionDirective],
  template: '<button saveAction (saveClick)="onSave()">Save</button>',
})
export class AppComponent {
  onSave(): void {}
}
