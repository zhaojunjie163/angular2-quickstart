import {Component} from '@angular/core';
import {Hero} from "./hero";


/**
 * What will be covered in this Demo:
 * a sensible project structure,
 * data binding,
 * master/detail,
 * services,
 * dependency injection,
 * navigation,
 * and remote data access.
 */
const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title: string = 'app works!';
  //define properties here,{{}} is the "interpolation" form of one-way data binding.
  //name: string = 'zhao junjie!'
  // Below is the model and how to initialize it
  selectedHero: Hero;
  heroes: Hero[] = HEROES;

  /*hero: Hero = {
   id: 12,
   name: "junjie",
   title:"ss"
   };*/

  // to illustrate event binding, click
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(JSON.stringify(this.selectedHero));
  }

}
