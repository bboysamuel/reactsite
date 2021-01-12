import React from 'react';
import SocialContacts from "./SocialContacts"



const Footer = (props) => {
  console.log('footer working')
  return <footer class="py-5 fullWidth bg-dark">
    <div class="container">
      <SocialContacts />
      <p class="m-0 text-center text-white">Copyright 2020 &copy; SamuelMcKaig.com | <a href="https://SamuelMcKaig.com/privacy">Privacy</a> | <a href="https://samuelmckaig.com/TOS">TOS</a> | website powered by: Me! </p>
    </div>
  </footer>

}

export default Footer;
