var getCostPrice = function(){
    return 1000;
};

var cart = {
    title : "cart",
    getCostPrice : ()=>{
        // console.log("get cost price : === : ",this.title);
        return 100;
    },
    getSellingPrice : () => {
        // console.log("get selling price : === : ",this.title);
       /*  
        var scope = this;
        var calculateProfit = function(){
            return scope.getCostPrice() * 0.2
        }; 
        */
        /* 
        var calculateProfit = function(scope){
            return scope.getCostPrice() * 0.2
        }; 
        */
        var calculateProfit = () => {
            return this.getCostPrice() * 0.2
        };
        // return this.getCostPrice() + calculateProfit.call(this);
        // return this.getCostPrice() + calculateProfit.apply(this);
        // return this.getCostPrice() + calculateProfit.bind(this)();
        return this.getCostPrice() + calculateProfit();
    }
};

console.log(cart.getSellingPrice());// 120