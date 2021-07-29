import React from 'react';
import '../assets/css/home.css';

function Home() {
  return (
    <>
      <div id='bg_container'>
        <iframe
          title='spline-background'
          id='bg'
          src='https://my.spline.design/senikurnicopy-c32be502baecbd1b69cc31d0a860339f/'
          frameborder='0'
          border='none'
          height='100%'
          width='100%'
        ></iframe>
      </div>
      <div id='content'>
        <div class='topnav'>
          <a href='#home'>SENIKURNI</a>
          <div class='topnav-right'>
            <a href='#portofolio'>PORTOFOLIO</a>
            <a href='#portofolio'>BLOG</a>
          </div>
        </div>
        <div id='profile'>
          <h2>Hi there &#128512;, I'm</h2>
          <h1>Kurniawan Adhi</h1>
          <p>
            I'm a UI/UX Designer and Illustrator. I'm passionate about improving the lives of others
            through design.
          </p>
          <p>Currently a freelancer based in Bandung.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
