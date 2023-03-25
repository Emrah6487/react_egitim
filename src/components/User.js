import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
/*

default değerlerini class altında render üstünde bu şekilde de tanımlayabilirsin

static defaultProps = {
    name:"Bilgi Yok",
    salary:"Bilgi Yok",
    department:"Bilgi Yok",
}
*/
  render() {
//!İsim: {this.props.name} yazıyorsun normalde bunu kısaltmak için destructing kullanabilirsin
    //Destructing
    const {name,department,salary} =this.props;
    return (
      <div>
       <ul>
        <li>İsim: {name}</li>
        <li>Depertman: {department}</li>
        <li>Maaş: {salary}</li>
       </ul>
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