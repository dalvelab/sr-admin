const CyrillicToTranslit = require("cyrillic-to-translit-js");

const cyrillicToTranslit = new CyrillicToTranslit();

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = cyrillicToTranslit
        .transform(`${data.title} ${data.vendor_code}`, "-")
        .toLowerCase();
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = cyrillicToTranslit
        .transform(`${data.title} ${data.vendor_code}`, "-")
        .toLowerCase();
    }
  },
};
