import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [{name:"Kilimanjaro", height:19341},{name:"Everest", height:29029},{name:"Denali", height:20310}]

const findNameOfTallestMountain = (rock:Mountain[]):string => 
    
    rock.reduce( (ac,nv) => ac.height > nv.height ? ac:nv).name


console.log(findNameOfTallestMountain(mountains))

