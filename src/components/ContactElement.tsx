import React from 'react'
import { userContact } from './Contacts'

interface IContactElement {
    contactElement: userContact
}


const ContactElement = ( {contactElement}:IContactElement ) => {

    const {   id, name, username, email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: {
            lat,
            lng
          }
        },
        phone,
        website,
        company: {
           name: companyName,
          catchPhrase,
          bs
        }} = contactElement;

  return (
    <div className='card'>

        <div className="card__header">{name}</div>
        <div className="card__details">
            
            <div className="card__details__company">
                <p>{companyName}</p>
            </div>
            <div className="card__details__address">
                <p>{street},{suite}</p>
                <p>{city}, {zipcode}</p>
                <p>tel: {phone}</p>
                <p>email: {email}</p>
                <p>site: {website}</p>
            </div>
            
            
            
            </div>

        <div className="card__footer">
        <p><span>ID:</span> {id}</p>


        </div>
        
    </div>
  )
}

export default ContactElement