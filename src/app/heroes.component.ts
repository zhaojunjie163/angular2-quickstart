import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import { HEROES } from './mock-heroes';
import {HeroService} from "./hero.service";

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
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit{
  ngOnInit(): void {

    this.service.getHeroesSlowly().then((response)=>{
      this.heroes = response
      console.log(JSON.stringify(response));
    });
  }
  //title: string = 'app works!';
  //define properties here,{{}} is the "interpolation" form of one-way data binding.
  //name: string = 'zhao junjie!'
  // Below is the model and how to initialize it
  selectedHero: Hero={
    id:12,
    name:"default"
  };
  heroes : Hero[];

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


  constructor(private service: HeroService){

  }




}
