export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' },
      { name: 'items', type: 'array', of: [{ type: 'object', fields: [
        { name: 'productId', type: 'reference', to: [{ type: 'product' }] },
        { name: 'quantity', type: 'number', title: 'Quantity' },
      ] }] },
      { name: 'total', type: 'number', title: 'Total Price' },
      { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Preparing', 'Out for Delivery', 'Delivered'] } },
      { name: 'timestamp', type: 'datetime', title: 'Order Time' },
    ],
  };
  