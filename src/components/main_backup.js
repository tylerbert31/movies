import React, { useState, useEffect } from "react"
import "../styles/main.css"
import "../styles/mobile_nav.css"
import "../styles/modal.css"
import { db } from "../scripts/db"
import Comment from "./comment"
import { collection, getDocs } from "firebase/firestore"

function Movie() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "comments")

  useEffect(() => {
    const fetchUsers = async () => {
      // check if users are already cached in state
      if (users.length > 0) {
        return
      }

      try {
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data() })))
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [users, usersCollectionRef])

  return (
    <React.Fragment>
      <center>
        <h1 className="watch_together">Watch Together!</h1>

        <h3 className="tb">By Tyler Bert</h3>
        <img
          id="img_link"
          src="https://movies.universalpictures.com/media/02-pib-dm-mobile-banner-1080x745-km-f01-061422-62a9f2d372f3a-1.jpg"
          alt="Movie Banner"
        ></img>
        <h1 id="title">Puss in Boots : The Last Wish</h1>
        <p id="Description">
          Puss in Boots discovers that his passion for adventure has taken its
          toll when he learns that he has burnt through eight of his nine lives.
          Puss sets out on an epic journey to find the mythical Last Wish and
          restore his nine lives.
        </p>

        <h3>
          Show Time : <h4 id="showime">8:00 PM</h4>
        </h3>
        <h3 className="status">
          Status : <h4 id="status">Showing</h4>
        </h3>
        <button>GOOGLE MEET</button>

        <table id="suggestions">
          <th>Suggestions</th>
          <tbody className="comments">
            <td>
              <Comment commenter={users.name} comments={users.comment} />
            </td>
          </tbody>
        </table>
      </center>
    </React.Fragment>
  )
}

export default Movie
