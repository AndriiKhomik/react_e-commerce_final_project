// const updateCartItems = (cartItems, item, idx) => {
//   if (item.count === 0) {
//     return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
//   }

//   if (idx === -1) {
//     return [...cartItems, item];
//   }

//   return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
// };

// const updateitem = (book, item = {}, quantity) => {
//   const {
//     itemNo = book.itemNo,
//     count = 0,
//     title = book.title,
//     total = 0,
//   } = item;

//   return {
//     itemNo,
//     title,
//     count: count + quantity,
//     total: total + book.currentPrice,
//   };
// };

// export const updateOrder = (state, bookId, quantity) => {
//   const { bookList, shoppingCart } = state;
//   const book = bookList.find(({ itemNo }) => itemNo === bookId);
//   const itemIndex = shoppingCart.findIndex(({ itemNo }) => itemNo === bookId);
//   const item = shoppingCart[itemIndex];

//   const newItem = updateitem(book, item, quantity);
//   return {
//     orderTotal: 0,
//     cartItems: updateCartItems(shoppingCart, newItem, itemIndex),
//   };
// };
