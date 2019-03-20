import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ridefilter'
})
export class RidefilterPipe implements PipeTransform {

  transform(value: any, filters: string): any {
    let search :string  ="Infosys";
    
    
     if (!filters) { 
      return value;
     }
    else if (filters == "TO") { 
     
      console.log("TO");
    return value.filter(loc => loc.endpoint.toLowerCase().indexOf(search.toLowerCase())!= -1);
    }
   else if(filters == "FROM") {
     
     console.log("FROM");
     return value.filter(loc => loc.startpoint.toLowerCase().indexOf(search.toLowerCase()) != -1);
   }
   else if (filters == "OTHER"){
    return value.filter(loc => loc.startpoint.toLowerCase().indexOf(search.toLowerCase()) == -1 && 
          loc.endpoint.toLowerCase().indexOf(search.toLowerCase()) == -1 );
   }
   else {
     return value;
   }
  }

}
