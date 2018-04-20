var coffeeShop = {
    beans: 40,
    money: 100,
    beanCost: 2,

    drinkRequirements: {
        latte: {
            beansRequirements: 10,
            price:  5   
        },
        americano: {
            beansRequirements: 5,
            price:  2.5  
        },
        doubleShot: {
            beansRequirements: 15,
            price:  7.5   
        },
        frenchPress: {
            beansRequirements: 12,
            price:  6   
        }
    },

    
    buySupplies: function(numBeansBought) {
        if (this.money - (numBeansBought*this.beanCost) >= 0)
        {
          this.money-= numBeansBought*this.beanCost;
          this.beans+=numBeansBought;
        }
    },
    
    
    makeDrink: function(drinkType) {
        /*
        How to check if value exists in an object
        Let's consider an example which would answer this question
        var priceOfFood = { pizza: 14, burger 10 }
        priceOfFood.hasOwnProperty('pizza') // true 
        priceOfFood['pizza'] // 14 
        priceOfFood.hasOwnProperty('chips') // false
        priceOfFood['chips'] // undefined

        */
        //if (this.drinkRequirements.hasOwnProperty(drinkType) === false)
        if (!this.drinkRequirements[drinkType])
        {
            alert("Sorry, we don't make "+ drinkType);
            return false;
        }
        else
        {
            var beansRest =  0;
            beansRest = this.beans - this.drinkRequirements[drinkType].beansRequirements;
            if (beansRest < 0) 
            {
              alert("Sorry, we're all out of beans!");
              return false;
            }
            else
            {
                this.beans = beansRest;
                return true;
            }
        }
    }

    ,
    buyDrink: function(drinkType) {
        if (this.makeDrink(drinkType))
        {
            this.money+= this.drinkRequirements[drinkType].price;
            console.log('the new coffeeShop money is ' + this.money);
        }
    }
    
}

coffeeShop.makeDrink("latte");
console.log("latte, " + coffeeShop.beans);

coffeeShop.buyDrink("latte");
console.log("latte, " + coffeeShop.beans);
coffeeShop.buyDrink("americano");
console.log("americano, " + coffeeShop.beans);
coffeeShop.buyDrink("filtered");
console.log("filtered, " + coffeeShop.beans);
coffeeShop.buyDrink("doubleShot");
console.log("doubleShot, " + coffeeShop.beans);
coffeeShop.buyDrink("frenchPress");
console.log("frenchPress, " + coffeeShop.beans);
