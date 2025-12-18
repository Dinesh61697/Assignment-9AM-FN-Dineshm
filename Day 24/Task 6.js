class product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    discountedprice(discountpercent) {
        return this.price - (this.price * discountpercent / 100);
    }
}

const product1 = new product("Mobile", 35000);
console.log(product1.discountedprice(15));
