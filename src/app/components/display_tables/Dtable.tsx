import Image from 'next/image'
import classes from './dtable.module.css'

import Clients from '../../interfaces/dbprops'

import Providers from '../../interfaces/dbprops'

interface ComponentProps{
    clients : Clients,
    providers : Providers,
    route: string,
    imgSource: string
}

export default function Dtable(props: ComponentProps) {
    
    const { clients  = [{}], providers = [{}], route, imgSource } = props

    const arr: any[] = route === 'clients' ? clients : providers

    function toTitleCase(str: string): string   {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
    
    return(
        <div className={classes.container}>
            <h3>
                {route === 'clients' ? 'Clients' : 'Providers'}
                <Image
                    // className={styles.logo}
                    src={imgSource}
                    alt="A Ariel"
                    width={36}
                    height={36}
                    priority
                />
            </h3>
            <div className={classes.dtable}>
                <div className={classes.dtableRow + ' ' + classes.dtableRowHeader}>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>DOB</div>
                    <div>Phone</div>
                    <div>Address</div>
                    <div className={classes.lastDiv}>
                        <Image
                            className={classes.addIcon}
                            src="/icons/add-50.png"
                            alt="A Ariel"
                            width={45}
                            height={45}
                            priority
                        />
                    </div>
                </div>
                {arr.map((i: any) => 
                    <div key={i.id} className={classes.dtableRow}>
                        <div>{toTitleCase(i.fName)}</div>
                        <div>{toTitleCase(i.lName)}</div>
                        <div>{i.dob.toLocaleString("en-US", {month:"2-digit"})}/{i.dob.toLocaleString("en-US", {day:"2-digit"})}/{i.dob.getFullYear()}</div>
                        <div>{i.phone}</div>
                        <div>{i.address.houseNum + ' ' + toTitleCase(i.address.street) + (i.address.apt !== '' ? ', ' + i.address.apt + ', ' : ', ')  + toTitleCase(i.address.city) + ', ' + i.address.zip}</div>
                        <div className={classes.lastDiv}>
                            <Image
                                className={classes.addIcon_}
                                src="/icons/edit-50.png"
                                alt="A Ariel"
                                width={33}
                                height={33}
                                priority
                            />  
                            <Image
                            className={classes.addIcon_}
                            src="/icons/delete-50.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        </div>
                    </div>
                )}
            </div>
        </div>
        

    )
    

}