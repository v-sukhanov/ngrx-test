import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component3Component } from './component3/component3.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/example.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		Component1Component,
		Component2Component,
		Component3Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		StoreModule.forRoot({
			example: reducer
		}),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
