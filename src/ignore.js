// const str = 'IKBjbDKJBN Sojbdnajb KDI';

// const term = 'jbd';
// .map((el, k) => {
//   console.log(el);
//   return { startIndex: k, endIndex: k + el.length, s: el };
// });

// console.log(lengthSplit, '');

// console.log(lengthSplit, 'lengthSplit');

// const getSlice = (k, length, s, index, lengthS) => {
//   // console.log(length);
//   if (k === lengthS) {
//     return [
//       {
//         slice: `${index + n.length + 4}, ${index + n.length + 4 + length}`,
//         s,
//       },
//     ];
//   } else if (k > 0) {
//     return [
//       {
//         slice: `${index + n.length + 2}, ${index + n.length + 2 + length}`,
//         s,
//       },
//       { value: n, h: true },
//     ];
//   } else {
//     return [
//       { slice: `${index}, ${length}`, s },
//       { value: n, h: true },
//     ];
//   }
// };

// const gasimPractic = lengthSplit
//   .map(({ index, length, s }, k) => {
//     return getSlice(k, length, s, index, lengthSplit.length - 1);
//     // return k === lengthSplit.length - 1
//     //   ? [{ slice: `${index}, ${length}`, s }]
//     //   : [
//     //       { slice: `${index}, ${length}`, s },
//     //       { value: n, h: true },
//     //     ];
//   })
//   .flatMap((el) => el);

// console.log(gasimPractic, 'gasimPractic');

// console.log(
//   lengthSplit.map(({ length }, key) => str.split(length[key])),
//   'CUUUVVV'
// );

// const filter = (value, list) => {
//   const valueToArray = value.split('');
//   const listToArray = list.map((el) => el.toLowerCase().split(''));

//   // console.log(listToArray, 'cac');
//   return listToArray.map((el) => el.includes(valueToArray));
// };

// console.log(filter(val, arr));
