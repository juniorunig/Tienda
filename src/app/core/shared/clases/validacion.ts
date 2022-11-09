import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class CustomValidators {
  static MatchValidator(soruce: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(soruce);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismath: true }
        : null;
    };
  }
}

export function passwordMatch(password: string, confirm_pas: string) {
  return function (form: AbstractControl) {
    const passwordValue = form.get(password)?.value;
    const confirm_passValue = form.get(confirm_pas)?.value;

    if (passwordValue === confirm_passValue) {
      console.log('son iguales');

      return null;
    }
    return { passwordMismatchError: true };
  };
}
