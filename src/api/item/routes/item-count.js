module.exports = {
  routes: [
    {
      method: "GET",
      path: "/items/count",
      handler: "item.count",
    },
    {
      method: "GET",
      path: "/items/count/categories",
      handler: "item.countUniqueCategories",
    },
  ],
};
