/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Filter = ({ onFillterChanege }) => {
  const years = Array.from(
    new Array(10),
    (val, index) => new Date().getFullYear() - index,
  );

  return <>year</>;
};

export default Filter;
