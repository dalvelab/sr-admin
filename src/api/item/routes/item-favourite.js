module.exports = {
  routes: [
    {
      method: "POST",
      path: "/items/favourites",
      handler: "item.getFavouriteItems",
    },
  ],
};
