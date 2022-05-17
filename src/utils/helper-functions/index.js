export const textColorGetter = () => {
  return (hexcolor) => {
    if (hexcolor.slice(0, 1) === "#") {
      hexcolor = hexcolor.slice(1);
    }
    if (hexcolor.length === 3) {
      hexcolor = hexcolor
        .split("")
        .map(function (hex) {
          return hex + hex;
        })
        .join("");
    }
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };
};
export const isNoteInList = (id, list) => {
  return list.some((note) => note._id === id);
};

export const getAllLabels = (notes) => {
  let allLabels = [];
  let allUniqueLabels = [];
  for (let note of notes) {
    allLabels.push.apply(allLabels, note.labels);
  }
  for (let label of allLabels) {
    if (allUniqueLabels.indexOf(label) === -1) {
      allUniqueLabels.push(label);
    }
  }
  return allUniqueLabels;
};
