"use strict";

const { uniq, props, prop } = require("ramda");

/**
 *  item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };
    const entity = await strapi.service("api::item.item").find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
  async count(ctx) {
    const { query } = ctx.request;
    const result = await strapi.query("api::item.item").count({ where: query });
    return { count: result };
  },
  async countUniqueCategories(ctx) {
    const { query } = ctx;
    const entity = await strapi.service("api::item.item").find({
      ...query,
    });
    const result = entity.results;

    const uniqueCategoriesWithItemCount = uniq(
      result.map((item) => {
        return {
          category: item.category.category,
          image: item.category.image.url,
          count: result.filter(
            (res) => res.category.category === item.category.category
          ).length,
        };
      })
    );

    return {
      data: {
        categories: uniqueCategoriesWithItemCount,
      },
    };
  },
}));
