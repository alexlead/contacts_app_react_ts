import React from 'react'

interface filter {
    letter: string,
    selected: boolean,
    applyFilter: (letter:string)=>void
}


const ContactsFilter = ( {letter, selected, applyFilter}:filter ) => {

    const checkSelected = () => {
        return selected ? " selected": "";
    }


  return (
    <div className={'char' + checkSelected() } onClick={()=>applyFilter(letter)}>{letter}</div>
  )
}

export default ContactsFilter