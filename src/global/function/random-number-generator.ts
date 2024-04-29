const useRandomNumberGenerator = () => {
  const totalSalesGenerator = (): string => {
    return Math.round(Math.random() * 100000).toFixed(2);
  };

  const menuPriceGenerator = (): string => {
    return String(Math.round(Math.random() * 5000));
  };

  const monthlySalesGenerator = (): number => {
    return Math.round(Math.random() * 500000);
  };

  const monthlyLossGenerator = (): number => {
    return Math.round(Math.random() * 100000);
  };

  return {
    totalSalesGenerator,
    menuPriceGenerator,
    monthlyLossGenerator,
    monthlySalesGenerator,
  };
};

export default useRandomNumberGenerator;
