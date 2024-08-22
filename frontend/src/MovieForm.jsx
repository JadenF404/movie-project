import {useState} from 'react'

const MovieForm = ({}) => {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [director, setDirector] = useState("")
    const [actor1, setActor1] = useState("")
    const [actor2, setActor2] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            title,
            rating,
            director,
            actor1,
            actor2
        }

        const url = "http://127.0.0.1:5000/add_movie"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            }

            const response = await fetch(url, options)
            if (response.status !== 201 && response.status !== 200) {
                const data = await response.json()
                alert(data.message)
            } else {
                //
            }
        }

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value = {title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="text" id="rating" value = {rating} onChange={(e) => setRating(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="director">Director:</label>
                <input type="text" id="director" value = {director} onChange={(e) => setDirector(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="actor1">Actor1:</label>
                <input type="text" id="actor1" value = {actor1} onChange={(e) => setActor1(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="actor2">Actor2:</label>
                <input type="text" id="actor2" value = {actor2} onChange={(e) => setActor2(e.target.value)}/>
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );

};

export default MovieForm