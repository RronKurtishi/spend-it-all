import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/interfaces/item';
import { Person } from 'src/app/core/interfaces/person';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  public people: Array<Person>;
  public items: Array<Item>;
  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.data
      .subscribe(
        (data) => {
          this.people = data['people'];
          this.items = data['items'];
        }
      )
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
