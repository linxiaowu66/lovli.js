import later from 'later';
import { r, r_internal } from '../db';

const emptyTable = [
  {name: '', subjects: [], sports: [], sex: '', completed: false},
  {name: '', subjects: [], sports: [], sex: '', completed: false},
  {name: '', subjects: [], sports: [], sex: '', completed: false},
  {name: '', subjects: [], sports: [], sex: '', completed: false},
];

const defaultSubTable = ['Math', 'English', 'Physical', 'geography', 'science', 'chemistry', 'biology', 'history'];

const createEmptyTable = () => {
  r_internal.table('collections').get('lg_table').run()
    .then(function(result) {
    //r.table(result.table).delete().run();
    emptyTable.map(function(item, index){
        r.table(result.table).insert({ content: item, $hz_v$: index, id: index }).run();
      });
    });
  r_internal.table('collections').get('subject_table').run()
    .then(function(result){
      //r.table(result.table).delete().run();
      defaultSubTable.map(function(subject,index){
        r.table(result.table).insert({subject: subject, $hz_v$:index, id: index}).run();
      });
    });
  /*r_internal.table('collections').get('sport_table').run()
    .then(function(result){
      r.table(result.table).delete().run();
  });*/
};

//const every1seconds = later.parse.text('every 2 seconds');

//later.setTimeout(createEmptyTable, every1seconds);
export default createEmptyTable;
