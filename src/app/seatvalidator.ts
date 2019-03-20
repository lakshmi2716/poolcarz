
import { Validator, FormControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector : "[validateseat]",
    providers : [{provide: NG_VALIDATORS, useExisting :Seatvalidatordirective, multi:true}]
})

export class Seatvalidatordirective implements Validator{
    validate(control: FormControl): { [key: string]: any}| null {
        console.log("dd",control.value);
        return control.value < 0 || control.value > 8  ?{validseat : true} : null;
    }
    
}