import { Component, Input } from "@angular/core";
import { IProperty } from "../Iproperties";

@Component({
    selector :'app-property-card',
    templateUrl : 'property-card.component.html',
    styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{
 @Input()
    property: IProperty;
    
}