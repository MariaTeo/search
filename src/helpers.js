export const arrayFromRange = (first, last) =>
  [...Array(last - first + 1).keys()].map((x) => x + first);

export const getTermIndexes = (str, term) =>
  [...str.matchAll(new RegExp(term, 'gi'))].reduce((acc, curr) => {
    return [
      ...acc,
      ...arrayFromRange(curr.index, curr.index + term.length - 1),
    ];
  }, []);
