import { faker } from "@faker-js/faker"

export class Company {
    cName: string
    catchPhrase: string
    location: {
        lat: number
        lng: number
    }
    constructor(){
        this.cName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string{
        return `
        <div>
            <h3>$(this.cName)</h3>
            <p>$(this.catchPhrase)</p>
        </div>
        `
    }
   
}

   