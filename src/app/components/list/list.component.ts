import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../add/service/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  constructor(public itemsService: ItemsService, private router: Router) {
  }

  delete(value: any): void {
    this.itemsService.delete(value);
  }

  navigate(): void {
    this.router.navigate(['add']);
  }

  editNavigate(id: number): void {
    this.router.navigate(['edit', id]);
  }
}
