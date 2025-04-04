import asset from '/Asset 18@4x.png';

const Footer = () => {
return(
    <section className="links">
        <article>
            <img className='footer-img' src={asset} alt='image'/>
        </article>
        <article className='footer-link'>
<h4>Important Links</h4>
<ul>
<li className="links-li"><a href="">Home</a></li>
<li className="links-li"><a href="">About</a></li>
<li className="links-li"><a href="">Menu</a></li>
<li className="links-li"><a href="">Reservations</a></li>
<li className="links-li"><a href="">Order Online</a></li>
<li className="links-li"><a href="">Login</a></li>
 </ul>
 </article>

 <article className='footer-link'>
 <h4>Contact</h4>
 <ul>
<li className="contact-li">Address:<br></br>123 street, Chicago</li>
<li className="contact-li">Phone:<br></br>+00123456789</li>
<li className="contact-li">Email:<br></br>littlelemon@restaurant.com</li>
</ul>
</article>

<article className='footer-link'>
<ul>
    <h4>Social Media Links</h4>
    <li className="social-li"><a href="">Instagram</a></li>
    <li className="social-li"><a href="">Facebook</a></li>
    <li className="social-li"><a href="">X</a></li>
</ul>
</article>
</section>
)
}

export default Footer;