# Shopify Money Format

## Description

This package provides a utility for formatting money values in the Shopify platform. It allows you to easily format currency values according to the currency formatting rules specified by Shopify. You can find more information about the currency formatting rules in the [Shopify documentation](https://help.shopify.com/en/manual/markets/pricing/currency-formatting).
| Money format                            | Rounded | Example     |
|-----------------------------------------|---------|-------------|
| {{ amount }}                            |         | 1,134.65    |
| {{ amount_no_decimals }}                 | ✓       | 1,135       |
| {{ amount_with_comma_separator }}        |         | 1,134,65    |
| {{ amount_no_decimals_with_comma_separator }} | ✓       | 1,135       |
| {{ amount_with_apostrophe_separator }}   |         | 1'134.65    |
| {{ amount_no_decimals_with_space_separator }} | ✓       | 1 135       |
| {{ amount_with_space_separator }}        |         | 1 134,65    |
| {{ amount_with_period_and_space_separator }} |         | 1 134.65    |

## Installation

To install the package, you can use npm:

```bash
npm i money-format-shopify
```

## Usage

```js
import formatMoney from 'money-format-shopify';

const amount = 1134.65;
formatMoney(amount, '{{ amount }}') // 1,134.65
formatMoney(amount, '${{ amount }}') // $1,134.65
formatMoney(amount, '{{ amount_no_decimals }}') // 1,135
formatMoney(amount, '{{ amount_with_comma_separator }}') // 1.134,65
formatMoney(amount, '€{{amount_with_comma_separator}} EUR') // €1.134,65 EUR
formatMoney(amount, '{{ amount_no_decimals_with_comma_separator }}') // 1.135
formatMoney(amount, '{{ amount_with_apostrophe_separator }}') // 1'134.65
formatMoney(amount, '{{ amount_no_decimals_with_space_separator }}') // 1 135
formatMoney(amount, '{{ amount_with_space_separator }}') // 1 134,65
formatMoney(amount, '{{ amount_with_period_and_space_separator }}') // 1 134.65
```

According to the Shopify docs, When using the formatting option `amount_no_decimals`, the thousands separator (used for digit grouping) is determined from the international set standard for the currency code. By default, the `formatMoney` function uses a comma for this case. However, for accurate formatting, especially when dealing with different locales, it's recommended to pass both the `currencyCode` and the `locale`, as shown in the examples above.

## Example

```javascript
import formatMoney from 'money-format-shopify';

const amount = 1134.65;

// Example usage with amount_no_decimals option and passing currencyCode and locale
formatMoney(amount, '{{ amount_no_decimals }}', 'USD', 'en-US') // 1,135
formatMoney(amount, '{{ amount_no_decimals }}', 'USD', 'de-DE') // 1.135
