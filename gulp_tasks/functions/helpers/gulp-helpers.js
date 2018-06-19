const getRiSizes = (sizes) =>
sizes.map(size => ({
  width: size,
  suffix: `-${size}px`,
  quality: 85,
})); 

exports.riOpts = (types, sizes) => {
  let opts = {};
  types.forEach(type => 
    opts[type] = getRiSizes(sizes)
  );
  return opts;
};