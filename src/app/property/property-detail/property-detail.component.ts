import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
propertyid : number;
  constructor(private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

    // this.propertyid = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe (
      (params) => 
      {this.propertyid = +params['id']  }
    )
  }
  goNext(){
    this.propertyid += 1;
    this.router.navigate(['property-detail',this.propertyid]);
  }
}
