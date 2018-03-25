import baseGame from './baseGame';
import dlc1 from './dlc1';
import allItems from './allItems';
import newemblems from './newemblems';
import strikeGear from './strikeGear';

export default [
  {
    path: '/',
    setData: baseGame
  },
  {
    path: '/curse-of-osiris',
    setData: dlc1
  },
  {
    path: '/all-items',
    setData: allItems
  },
  {
    path: '/strike-gear',
    setData: strikeGear
  },
  {
    path: '/newemblems',
    setData: newemblems
  }
];
