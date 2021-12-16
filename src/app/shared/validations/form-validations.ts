import { FormGroup } from "@angular/forms";

export class FormValidations {

  static checkValidations(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(fieldName => {
      const control = formGroup.get(fieldName);
      control?.markAsDirty();
    })
  }
}
