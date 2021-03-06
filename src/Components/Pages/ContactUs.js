import React from 'react';
// Styles
import './ContactUs.css'
// Components
import {Header} from '../Header.js';
import {Footer} from '../Footer.js';
import {NavBar} from '../NavBar.js';
import {SideBar} from '../SideBar.js';

export const ContactUs = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <p>This website was brought to you by the Chat for Change web development team.</p>
          <p>If you notice a mistake or have a suggestion reach out to us:</p>
          <p>Yaseen Ahmed: yaseen6607@yahoo.com</p>
          <p className="add-space">Ameera Merza: mer0006@gwsc.vic.edu.au</p>
        </main>
        </div>
      <Footer />
    </div>
  );
}
