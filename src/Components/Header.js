import React , {useState} from 'react'
// import CloseIcon from '@mui/icons-material/Close';


function Header() {


  let [hide, sethidebar] = useState(false) 

  function showbar(e){
      e.preventDefault()
      sethidebar(true)
  }
  
  function hidebar(e){
    e.preventDefault()
    sethidebar(false)
  }


  return (
    <div className='header'>
      <div className='logo'>
        <img src='images\logo.svg' ></img>
      </div>
        <ul>
            <li> <a>Model S</a> </li>
            <li> <a>Model 3</a> </li>
            <li> <a>Model X</a> </li>
            <li> <a>Model Y</a> </li>
            <li> <a>Solar Roof</a> </li>
            <li> <a>Solar Panels</a> </li>
        </ul>
        <ul className='second'>
            <li> <a>Shop</a> </li>
            <li> <a>Account</a> </li>
            <li> <a onClick={showbar} >Menu</a> </li>
        </ul>
        <ul className='sidebar' style={{right: hide===false? "-350px" : 0}}>
          <a className='togle' onClick={hidebar}>---</a>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Model Solar Roof</li>
          <li>Model Solar Panel</li>
          <li>Existing Inventory</li>
          <li>Used Inventory</li>
          <li>Trade In</li>
          <li>Test Drive</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
        </ul>
    </div>
  )
}

export default Header