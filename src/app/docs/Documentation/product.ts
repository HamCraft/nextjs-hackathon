export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Dish Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'image', type: 'image', title: 'Dish Image' },
    ],
  };
  