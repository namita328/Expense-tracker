let balance = 5000;

const categoryData = [
  {
    name: "Food",
    value: {},
  },
  {
    name: "Entertainment",
    value: {},
  },
  {
    name: "Travel",
    value: {},
  },
];

categoryData.sort((a, b) => b.value - a.value);

export { balance, categoryData };
