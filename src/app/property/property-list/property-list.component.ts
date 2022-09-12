
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperties';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  propertyList: Array<IProperty> = [];
// [
//   {
//     "Id" :1 ,
//     "Name" :"AyaChanTha Housing 1st Floor",
//     "Price":"250000",
//      "Type":"2 Bed Rooms"
//  },
//  {
//     "Id" :2 ,
//     "Name" :"AyaChanTha Housing 1st floor",
//     "Price":"250000",
//      "Type":"3 Bed Rooms"
//  },
//  {
//     "Id" :3 ,
//     "Name" :"AyaChanTha Housing 1st floor",
//     "Price":"255000",
//      "Type":"2 Bed Rooms"
//  },
//  {
//     "Id" :4 ,
//     "Name" :"AyaChanTha Housing 2nd floor",
//     "Price":"250000",
//      "Type":"2 Bed Rooms"
//  },
//  {
//     "Id" :5 ,
//     "Name" :"AyaChanTha Housing 2nd floor",
//     "Price":"150000",
//      "Type":"1 Bed Rooms"
//  },
//  {
//     "Id" :6 ,
//     "Name" :"AyaChanTha Housing 2nd floor",
//     "Price":"450000",
//      "Type":"3 Bed Rooms"
//  },
// ]

  constructor(private route:ActivatedRoute,private housingService:HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllApartment(this.sellRent).subscribe(
      res => {
         this.propertyList = res;
         console.log(res);
         console.log(this.route.snapshot.url.toString());
      }
    )
  }

}
