class Room {
    constructor(name, length, width, available, capacity){
        this.name = name
        this.length = length
        this.width = width
        this.available = true
        this.capacity = capacity
    }

    getArea(){
        return this.length * this.width
    }

    getPerimeter(){
        return (this.length + this.width) * 2 
    }

    
}

const room = new Room("bedroom", 10, 50, false, 15)
const roomBath = new Room("bathroom", 8, 7, true, 18)
roomBath.available = false

console.log(room)
console.log(roomBath)