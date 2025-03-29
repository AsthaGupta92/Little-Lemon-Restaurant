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
    <article className="bio-img">
    <img src={chef} width="253px" height="291px" alt="restaurant chef image"/>
    </article>
</section>

<section className="specials">
    <h2>This week's specials!</h2>
    <button className="btn">Online Menu</button>
    <article className="greek-salad">
    <img src= {greeksalad} alt="image of a greek salad"/>
    <h3>Greek Salad</h3>
    <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
    <p>order a delivery</p>
    <img src="/Deliveryicon.jpeg" alt="delivery icon"/>
    </article>


    <article className="bruschetta">
    <img src= {bruschetta} alt="image of bruschetta" />
    <h3>Bruschetta</h3>
    <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
    <p>order a delivery</p>
    <img src="/Deliveryicon.jpeg" alt="delivery icon"/>
    </article>

    <article className="lemon-dessert">
        <img src={lemondessert} alt="image of lemon dessert" />
        <h3>Lemon Dessert</h3>
        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
        <p>order a delivery</p>
        <img src="/Deliveryicon.jpeg" alt="delivery icon"/>
    </article>
</section>
</>
)
}

export default Main;