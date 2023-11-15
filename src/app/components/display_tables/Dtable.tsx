import classes from './dtable.module.css'

export default function Dtable() {
    let clients: {id: number, 
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
                    } }[]
            = [
                    {
                        id: 1,
                        fName: 'john',
                        lName: 'doe',
                        dob: new Date(1950, 1, 1),
                        phone: '303-111-1111',
                        address: {
                            houseNum: 101,
                            street: 'main st',
                            apt: '',
                            city: 'denver',
                            zip: 80022
                        }
                    },
                    {
                        id: 2,
                        fName: 'johanna',
                        lName: 'does',
                        dob: new Date(1955, 3, 3),
                        phone: '303-222-2222',
                        address: {
                            houseNum: 202,
                            street: 'eve st',
                            apt: '13A',
                            city: 'aurora',
                            zip: 80013
                        }
                    }
                ]

    function toTitleCase(str: string): string   {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
    
    return(
        <div className={classes.container}>
            <h3>Clients</h3>
            <div className={classes.dtable}>
                <div className={classes.dtableRow + ' ' + classes.dtableRowHeader}>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>DOB</div>
                    <div>Phone</div>
                    <div>Address</div>
                </div>
                {clients.map((i) => 
                    <div key={i.id} className={classes.dtableRow}>
                        <div>{toTitleCase(i.fName)}</div>
                        <div>{toTitleCase(i.lName)}</div>
                        <div>{i.dob.toLocaleString("en-US", {month:"2-digit"})}/{i.dob.toLocaleString("en-US", {day:"2-digit"})}/{i.dob.getFullYear()}</div>
                        <div>{i.phone}</div>
                        <div>{i.address.houseNum + ' ' + toTitleCase(i.address.street) + (i.address.apt !== '' ? ', ' + i.address.apt + ', ' : ', ')  + toTitleCase(i.address.city) + ', ' + i.address.zip}</div>
                    </div>
                )}
            </div>
        </div>
        

    )
    

}