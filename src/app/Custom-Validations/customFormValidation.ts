import { FormControl } from '@angular/forms';

export function ageValidation(ageControl: FormControl) {
  if (ageControl.value() > 21 && ageControl.value() < 65) {
    return null;
  } else {
    return {
      ageValidation: {
        valid: false
      }
    };
  }
}
