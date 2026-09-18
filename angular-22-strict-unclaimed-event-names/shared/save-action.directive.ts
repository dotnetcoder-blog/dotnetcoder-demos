import {Directive, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[saveAction]',
  standalone: true,
})
export class SaveActionDirective {
  @Output() readonly saveClick = new EventEmitter<void>();
}
