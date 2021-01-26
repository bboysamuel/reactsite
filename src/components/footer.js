import React from 'react';
import SocialContacts from "./SocialContacts"


const Footer = (props) => {
  return <footer style={ {backgroundColor: 'black'}} className="py-5 fullWidth">
    <div className="container">
      <SocialContacts />
      <p className="m-0 text-center text-white">Copyright 2020 &copy; SamuelMcKaig.com | <a href="/privacy">Privacy</a> | developed using React. View on <a href="https://github.com/bboysamuel/">Github</a> | website powered by: Me ;) </p>
    </div>
  </footer>

}

export default Footer;
