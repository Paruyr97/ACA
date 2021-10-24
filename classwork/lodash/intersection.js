function intersection(...rest) {

   const fllatenArr = [];

   rest.forEach(el => fllatenArr.push(...el));
    
   const allItems = [...new Set(fllatenArr)];
    
   const res = [];

   for (let el of allItems) {
        if (rest.every(subArr => subArr.includes(el))) {
            res.push(el);
        }
   };

   return res;
}
