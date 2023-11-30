import React, { useEffect, useState } from 'react'
import ContactsFilter from './ContactsFilter'
import ContactElement from './ContactElement'

export interface userContact {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }


// https://jsonplaceholder.typicode.com/users/
const Contacts = () => {
  
    const [contactList, setContactList] = useState<userContact[]>([])
    const [chars, setChars] = useState<string[]>([])
    const [filter, setFilter] = useState<string>("")

    const setAllChars = (contacts:userContact[]):void => {

        const allLetters = new Set( contacts.map(contact=>contact.name[0]).sort((a,b)=> a.localeCompare(b,"en") ) ) ;
        setChars([ "All",...Array.from(allLetters) ] );
        setFilter("All");
    }

    const applyFilter = ( newFilter: string ):void => {

        if ( newFilter.length && newFilter !== filter ) {
            setFilter(newFilter)
        }  
    }

const selected = (letter:string):boolean => {
    return letter === filter;
}

    useEffect(() => {
      
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
            setContactList([...json]);
            setAllChars([...json]);
        });


        
    }, [])
    


    return (
    
    <div>
        <header>
<div className="logo">
    Contacts
</div>
<div className="contactsFilter">
    {
        chars &&
        chars.map((item, index)=> <ContactsFilter key={index} letter={item} selected={selected(item)} applyFilter={applyFilter} />)
    }
</div>
    </header>
    <hr />

<div className="content">


        {
            filter === "All" ?
            (

                contactList &&
                contactList.map( (contact, index) => ( <ContactElement key={index} contactElement={contact}/>) )
                
                ) : (
                    
                    contactList &&
                    contactList.filter(item=>item.name[0] === filter).map( (contact, index) => ( <ContactElement key={index} contactElement={contact}/>) )

                )
        }

        </div>
    </div>
  )
}

export default Contacts