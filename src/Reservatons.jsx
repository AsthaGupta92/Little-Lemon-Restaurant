
const Reservations = () =>{
    return(
        <>
        <h1 className="heading">Reservations</h1>
        <form>
            <fieldset>
            <section className="reservation">
                <article className="reservation-column">
            <div>
                <label htmlFor="user_name">Name</label><br></br>
                <input type="text" id="user_name" name="user_name" placeholder="Full Name"></input>
            </div>

            <div>
                <label htmlFor="reserv_date">Date</label><br></br>
                <input type="date" id="reserv_date" name="reserv_date"></input>
            </div>

            <div>
                <label htmlFor="user_occasion">Occasion</label><br></br>
                <select id="user_occasion" name="user_occasion">
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                </select>
            </div>
            </article>

            <article className="reservation-column">
            <div>
                <label htmlFor="number_of_people">Number of people</label><br></br>
                <input type="number" id="number_of_people" name="number_of_people" placeholder="1" min={1} max={10}></input>
            </div>

            <div>
                <label htmlFor="time">Time</label><br></br>
                <select id="time" name="time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                </select>
            </div>

            <div>
                <label htmlFor="seating">Seating</label><br></br>
                <input type="radio" id="seating" name="seating" value="Indoor"></input>
                <label htmlFor="seating">Indoor</label> 

                <input type="radio" id="seating" name="seating" value="Outdoor"></input>
                <label htmlFor="seating">Outdoor</label>
            </div>

            </article>
             </section>

             <article className="confirm-button">
            <div>
            <button className="confirm-btn">Confirm</button>
            </div>
            </article>
            </fieldset>
        </form>
        </>
    )
}

export default Reservations;
