import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleSelector } from '../store/example.selector';

@Component({
	selector: 'app-component3',
	templateUrl: './component3.component.html',
	styleUrls: ['./component3.component.scss']
})
export class Component3Component {
	readonly count$ = this._store$.select(ExampleSelector.count);
	readonly message$ = this._store$.select(ExampleSelector.message);

	constructor(
		private _store$: Store
	) {
	}
}
