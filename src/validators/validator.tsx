import { RegExp } from './validationExpression'

export function validate(email: string) {
    if (email.match(RegExp)) {
        return false;
    }
    return true;
}