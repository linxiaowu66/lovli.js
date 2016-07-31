
export const ADD_ITEM = 'ADD_ITEM';
export function addItem(itemId) {
  return { type: ADD_ITEM, itemId };
}
