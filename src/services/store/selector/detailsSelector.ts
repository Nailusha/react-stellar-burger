export const detailsSelector = (store: { orderDetails: { order }; }) => {
  return store.orderDetails.order;
};
