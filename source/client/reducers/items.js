import {
  ADD_ITEM
} from '../actions/actions';

// Define the initial state properties here
const initialState = {
    content: [
      {name: '', subjects: [], sports: [], sex: '', id: 0, complete: 'false'},
      {name: '', subjects: [], sports: [], sex: '', id: 1, complete: 'false'},
      {name: '', subjects: [], sports: [], sex: '', id: 2, complete: 'false'},
      {name: '', subjects: [], sports: [], sex: '', id: 3, complete: 'false'}
    ]
}

let items = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.add(action.itemId);

    default:
      return state;
  }
};

export default items;