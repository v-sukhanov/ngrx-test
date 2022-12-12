import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from '../store/example.actions';

@Component({
	selector: 'app-component1',
	templateUrl: './component1.component.html',
	styleUrls: ['./component1.component.scss']
})
export class Component1Component {

	constructor(
		private _store$: Store
	) {
	}

	increaseCount() {
		this._store$.dispatch(ExampleActions.increaseCount());
	}
}
