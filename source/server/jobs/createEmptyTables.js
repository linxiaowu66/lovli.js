import later from 'later';
import { r, r_internal } from '../db';

const emptyTable = [
  {name: '', grade: '', class: '', sex: ''},
  {name: '', grade: '', class: '', sex: ''},
  {name: '', grade: '', class: '', sex: ''},
  {name: '', grade: '', class: '', sex: ''}
]

const createEmptyTable = () => {
  r_internal.table('collections').get('lg_table').run()
  .then(function(result) {
    r.table(result.table).delete().run();
    emptyTable.map(function(item, index){
      r.table(result.table).insert({ content: item, $hz_v$: index }).run();
    });
  });
};

const every1seconds = later.parse.text('every 1 seconds');

later.setTimeout(createEmptyTable, every1seconds);
