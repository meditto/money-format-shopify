import formatMoney from './index';

describe('formatMoney', () => {
    const amount = 1134.65;
    it('{{ amount }} should return 1,134.65', () => {
        expect(formatMoney(amount, '{{ amount }}')).toBe('1,134.65');
    });
    it('${{ amount }} should return $1,134.65', () => {
        expect(formatMoney(amount, '${{ amount }}')).toBe('$1,134.65');
    });
    it('{{ amount_no_decimals }} should return 1,135', () => {
        expect(formatMoney(amount, '{{ amount_no_decimals }}')).toBe('1,135');
    });
    it('{{ amount_with_comma_separator }} should return 1.134,65', () => {
        expect(formatMoney(amount, '{{ amount_with_comma_separator }}')).toBe('1.134,65');
    });
    it('€{{amount_with_comma_separator}} EUR should return €1.134,65 EUR', () => {
        expect(formatMoney(amount, '€{{amount_with_comma_separator}} EUR')).toBe('€1.134,65 EUR');
    });
    it('{{ amount_no_decimals_with_comma_separator }} should return 1.135', () => {
        expect(formatMoney(amount, '{{ amount_no_decimals_with_comma_separator }}')).toBe('1.135');
    });
    it("{{ amount_with_apostrophe_separator }} should return 1'134.65", () => {
        expect(formatMoney(amount, '{{ amount_with_apostrophe_separator }}')).toBe("1'134.65");
    });
    it('{{ amount_no_decimals_with_space_separator }} should return 1 135', () => {
        expect(formatMoney(amount, '{{ amount_no_decimals_with_space_separator }}')).toBe('1 135');
    });
    it('{{ amount_with_space_separator }} should return 1 134,65', () => {
        expect(formatMoney(amount, '{{ amount_with_space_separator }}')).toBe('1 134,65');
    });
    it('{{ amount_with_period_and_space_separator }} should return 1 134.65', () => {
        expect(formatMoney(amount, '{{ amount_with_period_and_space_separator }}')).toBe(
            '1 134.65'
        );
    });
});
