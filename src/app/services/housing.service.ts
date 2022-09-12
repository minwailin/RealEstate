import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../property/Iproperties';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // propertyList:any;
  constructor(private http:HttpClient) { }

  getAllApartment(_Sell_Rent:number):Observable<IProperty[]>{
    return this.http.get<IProperty[]>('assets/Data/properties.json');
      }
  }

