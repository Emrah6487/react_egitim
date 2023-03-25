import React from 'react';
import PropTypes from "prop-types"

const Navbar = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
}
//Navbar ın proptyplarda title gönderiyoruz, o da string ve gereekli olacak 
//! aşağıda kullanırken Navbar.propTypes yazarken p harfini küçük yazıyorsun aman dikkat!!!
//başka yerde kullanacaksan mutlaka string olmalı ve bu alan yazılmalı 
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
//Navbar title gönderilmezse default olarak da birşeyler gönderebiliriz
Navbar.defaultProps={
    title:"Default App"
}




export default Navbar;
