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
  hero: Hero = {
    id: 12,
    name: "junjie"
  };


}
