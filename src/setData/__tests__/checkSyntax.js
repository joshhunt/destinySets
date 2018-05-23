const SET_FILES = [
  'allSeasons',
  'dlc1',
  'dlc2',
  'baseGame',
  'allItems',
  'allItemsDeluxe',
  'strikeGear',
  'common'
];

SET_FILES.forEach(setFile => {
  test(`${setFile} should be valid syntax`, () => {
    require(`../${setFile}`);
  });
});
