import later from 'later';
import { r, r_internal } from '../db';

const emptyTable = [
  {name: 'linguang', subjects: ['yuwen','tiyu'], sports: ['lanqiu','zuqiu'], sex: 'male'},
  {name: 'zhajgyuj', subjects: ['yuwen','shuxue'], sports: ['lanqiu','zuqiu'], sex: 'male'},
  {name: 'ldidd', subjects: ['yuwen','dili'], sports: ['lanqiu','zuqiu'], sex: 'female'},
  {name: 'hdhdhd', subjects: ['yuwen','lishi'], sports: ['lanqiu','zuqiu'], sex: 'female'}
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
