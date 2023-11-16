// export default interface Clients extends Array<Client>{}

// export default interface dbPropsProviders{
//     providers: Provider[]

// }

export default interface Clients extends Array<Client>{}
export default interface Providers extends Array<Provider>{}

// type Clients = Client[]
// type Providers = Provider[]

export interface Client   {
    id: number, 
    fName: string, 
    lName: string, 
    dob: Date, 
    phone: string, 
    address: {
        houseNum: number,
        street: string,
        apt: string,
        city: string,
        zip: number
}}

export interface Provider {
    id: number, 
    fName: string, 
    lName: string, 
    dob: Date, 
    phone: string, 
    address: {
        houseNum: number,
        street: string,
        apt: string,
        city: string,
        zip: number
}}

// export default Clients
