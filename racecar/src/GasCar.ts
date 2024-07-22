import Racer from "./Racer.js"

export class GasCar implements Racer {
    team: string
    speed: number = 0
    fuel: number

    constructor(team: string, fuel: number = 10) {
        this.team = team
        this.fuel = fuel
    }

    accelerate(): void {
        this.speed += 2
        this.fuel -= 1
    }

    isFuelEmpty(): boolean {
        return this.fuel <= 0
    }
}