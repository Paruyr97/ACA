function vendingMachine(products, money, productNumber) {

    const getChange = (money, price) => {

        if(money === price) {
            return 0;
        }

        const coins = [500, 200, 100, 50, 20, 10];
        
        let change = money - price;

        let result = []

        for (let i = 0; i < coins.length; i++) {
            if (change >= coins[i]) {

                result.push(coins[i]);
                change -= coins[i];

                if (change >= coins[i]) {
                    i -= 1;
                }
            }
        }

        return result;
    }
    
    const product = products.filter(({ number }) => productNumber === number);
    const { name, price } = product[0];

    if (!product.length) {
        return 'Enter a valid product number';
    }

    if (money < product.price) {
        return 'Not enough money for this product';
    } else {
        return { product: name, change: getChange(money, price) };
    }
}
