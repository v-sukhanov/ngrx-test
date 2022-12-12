import { Component } from '@angular/core';
import { ExampleActions } from '../store/example.actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-component2',
	templateUrl: './component2.component.html',
	styleUrls: ['./component2.component.scss']
})
export class Component2Component {
	message = '';

	constructor(
		private _store$: Store
	) {
	}

	sendMessage() {
		this._store$.dispatch(ExampleActions.sendMessage({message: this.message}));
	}
}
