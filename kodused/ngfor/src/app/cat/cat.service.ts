import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  //1-dimensiooniline massiiv
  cats = [
    "Miisu",
    "Kissa",
    "Kiisu",
    "Liisu",
    "Kiti",
    "Nurr"
    ]

  constructor() { }
}
