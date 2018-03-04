import test from 'ava';

const SETS = ['baseGame', 'allItems', 'dlc1'];

SETS.forEach(setName => {
  test(`setData '${setName}.js' should be valid javascript`, t => {
    t.notThrows(() => {
      require(`../src/setData/${setName}`);
    });
  });
});
