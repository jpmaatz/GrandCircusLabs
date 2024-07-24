
import Racer from "./Racer.js"

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    return racers.filter(racer => racer.isFuelEmpty())
}

export function findAverageSpeed(racers: Racer[]): number {
    if (racers.length === 0) {
        return 0
      }
    const totalSpeed = racers.reduce((sum, racer) => sum + racer.speed, 0)
    return totalSpeed / racers.length
}

export function getFasterRacer(racer1: Racer, racer2: Racer): Racer | null {
    if (racer1.speed > racer2.speed) {
        return racer1
    } else if (racer2.speed > racer1.speed) {
        return racer2
    } else {
        return null
    }

import Racer from "./Racer.js"

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    return racers.filter(racer => racer.isFuelEmpty())
}

export function findAverageSpeed(racers: Racer[]): number {
    if (racers.length === 0) {
        return 0
      }
    const totalSpeed = racers.reduce((sum, racer) => sum + racer.speed, 0)
    return totalSpeed / racers.length
}

export function getFasterRacer(racer1: Racer, racer2: Racer): Racer | null {
    if (racer1.speed > racer2.speed) {
        return racer1
    } else if (racer2.speed > racer1.speed) {
        return racer2
    } else {
        return null
    }

}