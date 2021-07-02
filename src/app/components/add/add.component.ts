import { Component} from '@angular/core';
import {ItemsService} from "./service/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = '';
  content = '';

  constructor(public itemsService: ItemsService, private router: Router) {
  }

  add(): void{
    console.log(this.title)
    console.log(this.content)

    this.itemsService.add({title: this.title, content: this.content});

    this.router.navigate(['list'])
  }
}
