import Decimal from 'decimal.js';

export default function formatMoney(
    amount: number,
    format: string,
    currencyCode?: string,
    locale?: string
) {
    return format
        .replace(/{{\s*amount\s*}}/g, apply_separators({ amount }))
        .replace(
            /{{\s*amount_no_decimals\s*}}/g,
            apply_separators({ amount, round: true, currencyCode, locale })
        )
        .replace(
            /{{\s*amount_with_comma_separator\s*}}/g,
            apply_separators({ amount, fractionalSeparator: ',', thousandsSeparator: '.' })
        )
        .replace(
            /{{\s*amount_no_decimals_with_comma_separator\s*}}/g,
            apply_separators({ amount, round: true, thousandsSeparator: '.' })
        )
        .replace(
            /{{\s*amount_with_apostrophe_separator\s*}}/g,
            apply_separators({
                amount,
                thousandsSeparator: "'"
            })
        )
        .replace(
            /{{\s*amount_no_decimals_with_space_separator\s*}}/g,
            apply_separators({ amount, round: true, thousandsSeparator: ' ' })
        )
        .replace(
            /{{\s*amount_with_space_separator\s*}}/g,
            apply_separators({ amount, thousandsSeparator: ' ', fractionalSeparator: ',' })
        )
        .replace(
            /{{\s*amount_with_period_and_space_separator\s*}}/g,
            apply_separators({ amount, thousandsSeparator: ' ' })
        );
}

type ApplySeparatorsProps = {
    amount: number;
    fractionalSeparator?: string;
    thousandsSeparator?: string;
    round?: boolean;
    currencyCode?: string;
    locale?: string;
};
function apply_separators({
    amount,
    fractionalSeparator = '.',
    thousandsSeparator = ',',
    round = false,
    currencyCode,
    locale
}: ApplySeparatorsProps) {
    // we need to get the decimal part of the number
    if (currencyCode && locale) {
        thousandsSeparator = getThousandsSeparator(currencyCode, locale);
    }
    const decimal = new Decimal(round ? Math.round(amount) : amount);
    const integerPart = decimal.trunc().toString();
    const precision = decimal.decimalPlaces();
    const fractionalPart = decimal
        .minus(integerPart)
        .times(10 ** precision)
        .toString();
    // apply thousands separator
    const integerPartWithThousandsSeparator = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandsSeparator
    );
    return round
        ? integerPartWithThousandsSeparator
        : [integerPartWithThousandsSeparator, fractionalPart].join(fractionalSeparator);
}
function getThousandsSeparator(currency: string, locale: string = 'en-US') {
    try {
        const numberFormat = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        });
        const parts = numberFormat.formatToParts(1000);
        const group = parts.find((part) => part.type === 'group');
        return group?.value || ',';
    } catch (_e) {
        return ',';
    }
}
