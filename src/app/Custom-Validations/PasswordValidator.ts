import { AbstractControl } from "@angular/forms";

export function Passwordvalidator(control :AbstractControl): {[key: string] :boolean} | null{

    const password = control.get('password');
    const confirmPassword= control.get('cpassword');

    if (password?.pristine || confirmPassword?.pristine)
        return null;
    return password && confirmPassword && password.value != confirmPassword.value ? { 'mismatch': true} : null ;
}