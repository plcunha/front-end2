const findMaxDate = (date1, date2) => (date1 > date2 ? date1 : date2);

const calculateDateInterval = (date1, date2) => {
  const startDate = new Date(Math.min(date1, date2));
  const endDate = new Date(Math.max(date1, date2));

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleString();
};
