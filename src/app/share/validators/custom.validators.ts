import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
import { checkPhoneVN } from "@core/utils/checkPhoneVN";

@Injectable({
  providedIn: "root",
})
export class ValidatorService {
  static checkPhoneVN(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isPhone = checkPhoneVN.checkPhone(value);
    return isPhone ? null : { phoneInvalid: true };
  }
}
