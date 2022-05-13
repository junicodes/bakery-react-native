



//Sort Object variables 
const sortObjectArrayAsc = (key) => (a, b) => a[key].localeCompare(b[key]);
const sortObjectArrayDesc = (key) => (a, b) => b[key].localeCompare(a[key]);

const sortNumberAsc = (key) => (a, b) => a[key] -  b[key];
const sortNumberDesc = (key) => (a, b) => b[key] -  a[key];

const sortDateAsc = (key) => (a, b) => new Date(a[key]) -  new Date(b[key]);
const sortDateDesc = (key) => (a, b) => new Date(b[key]) -  new Date(a[key]);

export const sortObjectItem = ({key, order, type}) => {
    if(type === 'text' && order === 'asc') return sortObjectArrayAsc(key);
    if(type === 'text' && order === 'desc') return sortObjectArrayDesc(key);
    if(type === 'number' && order === 'asc') return sortNumberAsc(key);
    if(type === 'number' && order === 'desc') return sortNumberDesc(key);
    if(type === 'date' && order === 'asc') return sortDateAsc(key);
    if(type === 'date' && order === 'desc') return sortDateDesc(key);
}
