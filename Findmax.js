const findmax = item => Math.max(..item.map(row => Array.isArray(row)? findmax(row): row));
console.log(findMax([2,4,10,[12,4,[100,99],4],[3,2,99],0]));
