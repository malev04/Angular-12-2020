import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {
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
