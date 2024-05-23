"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_js_1 = __importDefault(require("decimal.js"));
function formatMoney(amount, format) {
    return format
        .replace(/{{\s*amount\s*}}/g, apply_separators({ amount }))
        .replace(/{{\s*amount_no_decimals\s*}}/g, apply_separators({ amount, round: true }))
        .replace(/{{\s*amount_with_comma_separator\s*}}/g, apply_separators({ amount, fractionalSeparator: ',', thousandsSeparator: '.' }))
        .replace(/{{\s*amount_no_decimals_with_comma_separator\s*}}/g, apply_separators({ amount, round: true, thousandsSeparator: '.' }))
        .replace(/{{\s*amount_with_apostrophe_separator\s*}}/g, apply_separators({
        amount,
        thousandsSeparator: "'"
    }))
        .replace(/{{\s*amount_no_decimals_with_space_separator\s*}}/g, apply_separators({ amount, round: true, thousandsSeparator: ' ' }))
        .replace(/{{\s*amount_with_space_separator\s*}}/g, apply_separators({ amount, thousandsSeparator: ' ', fractionalSeparator: ',' }))
        .replace(/{{\s*amount_with_period_and_space_separator\s*}}/g, apply_separators({ amount, thousandsSeparator: ' ' }));
}
exports.default = formatMoney;
function apply_separators({ amount, fractionalSeparator = '.', thousandsSeparator = ',', round = false }) {
    // we need to get the decimal part of the number
    const decimal = new decimal_js_1.default(round ? Math.round(amount) : amount);
    const integerPart = decimal.trunc().toString();
    const precision = decimal.decimalPlaces();
    const fractionalPart = decimal
        .minus(integerPart)
        .times(10 ** precision)
        .toString();
    // apply thousands separator
    const integerPartWithThousandsSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    return round
        ? integerPartWithThousandsSeparator
        : [integerPartWithThousandsSeparator, fractionalPart].join(fractionalSeparator);
}
