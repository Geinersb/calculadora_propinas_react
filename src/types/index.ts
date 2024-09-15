export type MenuItem = {
    id: number,
    name: string,
    price: number 
}

//con esto se toma lo mismo que tiene Menu Item pero le agregamos otra variable cantidad
export type OrderItem = MenuItem & {
    quantity : number
}