import chef from "/restaurantchef.png";
import greeksalad from "/greeksalad.jpg";
import bruschetta from "/bruschetta.jpg";
import lemondessert from "/lemondessert.jpg";
const Main = () => {
return(
<>

<section className="little-lemon">
    <article className="bio">
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button className="btn">Reserve a Table</button>
    </article>
    <article> &nbsp;
    <br></br>
    </article>
    <article>
    <img className="bio-img" src={chef} alt="restaurant chef image"/>
    </article>
</section>

<section className="specials">
    <h2>This week's specials!</h2>
    <button className="menu-btn">Online Menu</button>
    </section>
    <section className="items">
    <article className="greek-salad">
    <img src= {greeksalad} alt="image of a greek salad"/>
    <h3 className="h3-food">Greek Salad <p className="price">$12.99</p></h3>
    <p className="p-food">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with rosemary croutons.</p>
    <p className="delivery-food">order a delivery &nbsp; <img className="delivery-icon" src="/Deliveryicon.jpeg" alt="delivery icon"/></p>
    
    </article>


    <article className="bruschetta">
    <img src= {bruschetta} alt="image of bruschetta" />
    <h3  className="h3-food">Bruschetta<p className="price">$5.99</p></h3>
    <p className="p-food">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
    <p className="delivery-food">order a delivery &nbsp;  <img className="delivery-icon" src="/Deliveryicon.jpeg" alt="delivery icon"/></p>
   
    </article>

    <article className="lemon-dessert">
        <img src={lemondessert} alt="image of lemon dessert" />
        <h3  className="h3-food">Lemon Dessert <p className="price">$5.99</p></h3>
        <p className="p-food">This comes straight from grandma’s recipe book, every ingredient has been sourced and is as authentic as can be imagined.</p>
        <p className="delivery-food">order a delivery &nbsp; <img className="delivery-icon" src="/Deliveryicon.jpeg" alt="delivery icon"/></p>
        
    </article>
</section>
</>
)
}

export default Main;