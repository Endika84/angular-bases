import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]= ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public latestHero?: string;
  public borrado: boolean= false;

  deleteLatestHero(): void {
    const latestHero= this.heroNames.pop();
    this.borrado= true;
    this.latestHero = latestHero!;
  }

}
