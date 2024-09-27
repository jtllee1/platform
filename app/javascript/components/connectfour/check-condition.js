import { collectSequence } from 'components/connectfour/collect-sequence';

const checkCondition = () => {
  let firstRow = 90;
  let lastRow = 99;

  for (let step = 0; step < 11; step++) {
    collectSequence(firstRow, lastRow, "row");
    firstRow = 90 - (10 * step);
    lastRow = 99 - (10 * step);
  };

  for (let step = 90; step < 100; step++) {
    collectSequence(step, 0, "column");
  };


  for (let i = 0; i < 7; i++) {
    for (let step = 90; step < 95; step++) {
      let first = step - (i * 10);
      collectSequence(first, 0, "diagonal-l");
    };

    for (let step = 95; step < 100; step++) {
      let first = step - (i * 10);
      collectSequence(first, 0, "diagonal-r");
    };
  };
};

export { checkCondition };
