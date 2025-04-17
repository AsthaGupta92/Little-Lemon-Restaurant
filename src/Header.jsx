import logo from "/logo.jpeg";


const Header = () => {
    return(
      <section className="header">
        <article>
        <header >
              {
                <img className="header-logo" src = {logo} alt="logo" width="200px" />

                 }
        </header>
</article>
        <article className="nav">
            <ul className="nav-ul">
                   <li className="nav-li"><a className="nav-a" href="">Login</a></li>
                   <li className="nav-li"><a className="nav-a" href="">Order Online</a></li>

                   <li className="nav-li"><a className="nav-a" href ="/Reservations">
                    Reservations
                   </a></li>
                   <li className="nav-li"><a className="nav-a"href="">Menu</a></li>
                   <li className="nav-li"><a className="nav-a"href="">About</a></li>
                   <li className="nav-li"><a className="nav-a"href="/">Home</a></li>
            </ul>


        </article>
        </section>)
}

export default Header;

