import { ValitudService } from '../valitud/valitud.service';
import { ArrayService } from '../array.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //humans: { firstName: string; lastName: string; age: number; address: string; }[];
  //human: { firstName: string; lastName: string; age: number; address: string; }[];
  humans = [];
  human;
  valitudService: any;

  // { firstName: string; lastName: string; age: number; address: string; }
  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void {
    console.log(this.humans);
    this.humans = this.arrayService.getAll();
    console.log(this.humans);
  }

  onChooce(inimene: any) {
    this.valitudService.addHuman(inimene);
  }

  onRemoveAll() {
    this.arrayService.removeAll();
    this.humans = this.arrayService.getAll();
  }

  onRemoveOne(i: number) {
    console.log(i);
    this.arrayService.removeOne(i);
    this.humans = this.arrayService.getAll();
  }

  onAdd(human: any) {
    this.arrayService.addOne(human);
  }

  onGetOne(i: any) {
    this.human = this.arrayService.getOne(i);
  }

  /*
  onGetAll() {
    this.human = this.arrayService.getAll();
  }
  */

}