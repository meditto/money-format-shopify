"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
describe('formatMoney', () => {
    const amount = 1134.65;
    it('{{ amount }} should return 1,134.65', () => {
        expect((0, index_1.default)(amount, '{{ amount }}')).toBe('1,134.65');
    });
    it('{{ amount_no_decimals }} should return 1,135', () => {
        expect((0, index_1.default)(amount, '{{ amount_no_decimals }}')).toBe('1,135');
    });
    it('{{ amount_with_comma_separator }} should return 1.134,65', () => {
        expect((0, index_1.default)(amount, '{{ amount_with_comma_separator }}')).toBe('1.134,65');
    });
    it('{{ amount_no_decimals_with_comma_separator }} should return 1.135', () => {
        expect((0, index_1.default)(amount, '{{ amount_no_decimals_with_comma_separator }}')).toBe('1.135');
    });
    it("{{ amount_with_apostrophe_separator }} should return 1'134.65", () => {
        expect((0, index_1.default)(amount, '{{ amount_with_apostrophe_separator }}')).toBe("1'134.65");
    });
    it('{{ amount_no_decimals_with_space_separator }} should return 1 135', () => {
        expect((0, index_1.default)(amount, '{{ amount_no_decimals_with_space_separator }}')).toBe('1 135');
    });
    it('{{ amount_with_space_separator }} should return 1 134,65', () => {
        expect((0, index_1.default)(amount, '{{ amount_with_space_separator }}')).toBe('1 134,65');
    });
    it('{{ amount_with_period_and_space_separator }} should return 1 134.65', () => {
        expect((0, index_1.default)(amount, '{{ amount_with_period_and_space_separator }}')).toBe('1 134.65');
    });
});
