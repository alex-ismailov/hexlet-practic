/*
  Реализуйте функцию summaryRanges, которая находит в массиве
  непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.

  Примеры
  summaryRanges([]); // []
  summaryRanges([1]); // []
  summaryRanges([1, 2, 3]); // ['1->3']
  summaryRanges([0, 1, 2, 4, 5, 7]); // ['0->2', '4->5']
  summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]); // ['110->112', '-5->-4']
*/
const searchLinearSequences = (subSequencesColl) => {
  const linearSubSequences = [];
  for (const currSubSequence of subSequencesColl) {
    if (currSubSequence.length >= 2) {
      linearSubSequences.push(currSubSequence);
    }
  }
  return linearSubSequences;
}

const prepareForDisplay = (subSeqColl) => {
  const resColl = [];
  for (const subSeq of subSeqColl) {
    const str = `${subSeq[0]}->${subSeq[subSeq.length - 1]}`;
    resColl.push(str);
  }
  return resColl;
};

const summaryRanges = (sequence) => {
  let acc = []; // linearSubSequence
  const subSequencesColl = [];
  for (let i = 0; i < sequence.length; i += 1) {
    if ((sequence[i] + 1) === sequence[i + 1]) {
      acc.push(sequence[i]);
    } else {
      acc.push(sequence[i]);
      subSequencesColl.push(acc);
      if (i < sequence.length) {
        acc = [];
      }
    }
  }
  const linearSubSequences = searchLinearSequences(subSequencesColl);
  return prepareForDisplay(linearSubSequences);

  // console.log(subSequencesColl);
  // const resString =  showresColluences(subSequencesColl);
  // return resString;
};

// testing
console.log(summaryRanges([])); // []
console.log(summaryRanges([1])); // []
console.log(summaryRanges([1, 2, 3])); // ['1->3']
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ['0->2', '4->5']
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])); // ['110->112', '-5->-4']
