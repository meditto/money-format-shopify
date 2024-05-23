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

## Installation

To install the package, you can use npm:

```npm i shopify-money-format-js```

## Usage

```js
import formatMoney from 'shopify-money-format-js';

const amount = 1134.65;
formatMoney(amount, '{{ amount }}') // 1,134.65
formatMoney(amount, '{{ amount_no_decimals }}') // 1,135
formatMoney(amount, '{{ amount_with_comma_separator }}') // 1.134,65;
formatMoney(amount, '{{ amount_no_decimals_with_comma_separator }}') // 1.135
formatMoney(amount, '{{ amount_with_apostrophe_separator }}') // 1'134.65
formatMoney(amount, '{{ amount_no_decimals_with_space_separator }}') // 1 135
formatMoney(amount, '{{ amount_with_space_separator }}') // 1 134,65
formatMoney(amount, '{{ amount_with_period_and_space_separator }}') // 1 134.65
```
