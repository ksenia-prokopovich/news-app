import
{Component, OnInit} from '@angular/core';
import {ItemsService} from "../add/service/items.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id = null;

  constructor(public itemsService: ItemsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => this.id = item.id)
  }


  get item() {
    return this.itemsService.items.find(item => item.id === Number(this.id));
  }

  navigate () {
    this.router.navigate(['list']);
  }
}
