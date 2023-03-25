import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  state={
    isVisible:false
  }

/*

default değerlerini class altında render üstünde bu şekilde de tanımlayabilirsin

static defaultProps = {
    name:"Bilgi Yok",
    salary:"Bilgi Yok",
    department:"Bilgi Yok",
}
*/

/* 
state oluşturmanın birinci yolu :::::::::
constructor(props) {
  super(props);
  this.state={
    isVisible:false
  }
} */

/* bind etmenin 3 yolu var
1. tagın içinde
   <h4 className='d-inline' onClick={this.onClickEvent.bind(this)} >{name}</h4>

2. constructor(props) {
  super(props)
  this.onClickEvent=this.onClickEvent.bind(this);
}
3. array function bind işlemini otomatik olarak kendi yapıyor
onClickEvent = (e) =>{
  console.log(this)
}


*/




onClickEvent = (number,e) =>{
  console.log(number)
}


  render() {
//!İsim: {this.props.name} yazıyorsun normalde bunu kısaltmak için destructing kullanabilirsin
    //Destructing
    const {name,department,salary} =this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className="card-header d-flex justify-content-between">
            <h4 className='d-inline' onClick={this.onClickEvent.bind(this,64)} >{name}</h4>
            <i className='fa-solid fa-trash' style={{cursor:"pointer"}}></i>
          </div>
          {
            isVisible ? 
          <div className='card-body'>
            <p className='card-text'>Maaş : {salary}</p>
            <p className='card-text'>Department : {department}</p>
          </div>
          :
          null

          }
        </div>      
      </div>
    )
  }
}
User.propTypes={
    name:PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired
}
User.defaultProps={
    name:"Bilgi Yok",
    salary:"Bilgi Yok",
    department:"Bilgi Yok",
}


export default User;