/**
 * Created by zhaojunjie on 25/2/17.
 */
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
