var Product = {
    constructor (name, price, description){
        this.name = name;
        this.price = price;
        this.description = description; 
    },
    add ({newName, newPrice, newDescription}){
        
             this.name =  newName,
             this.price = newPrice,
             this.description = newDescription

        return {
            name: this.name,
            price: this.price,
            description: this.description
        }
    }
}

const Product1 = new Product ("Biscuit", 100, "Delicious")