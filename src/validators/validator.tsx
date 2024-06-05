import { alphabeticSymbolRegExp } from './validationExpression'

export function validate(email: string) {
    if (email.match(alphabeticSymbolRegExp)) {
        return true;
    }
    return false;
}