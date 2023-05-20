type formatCurrencyProps = {
  value: number;
  currency: string;
};

const formatCurrency = ({value, currency}: formatCurrencyProps) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  });
};

export {formatCurrency};
