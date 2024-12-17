import { useState } from "react";


function App() {

  const [posts, setPost] = useState([]);
  const [titlePost, setTitlePost] = useState("")
  const [descriptionPost, setDescriptionPost] = useState("")


  // funzione di callback della creazione della card e aggiunta all'array
  
  const hendelSubmitPost = (event) => {
    event.preventDefault();
    // console.log("ciao")
  const newElem = {
    id: Date.now(),
    title: titlePost,
    description: descriptionPost
  }

  // console.log(newElem)

  
  const newPostArray = [...posts, newElem]

  // console.log(newPostArray)
  setPost(newPostArray)
  setTitlePost("")
  setDescriptionPost("")
  
  
  }


  // funzione che cancella il post

  const cancel = (idToDelite) => {

    const newPostArray = posts.filter((curPost) => curPost.id !== idToDelite)
    setPost(newPostArray)

  }



  return (
    <>
      <header>
        <div className="container">
          <h1 className="text-center py-3">Lista card post:</h1>
        </div>
      </header>
      <main>

        {/* sezione di stampa delle card */}
        <section>


          <div className="container">
            {posts.length > 0 ? (<div className="row row-cols-1 row-cols-lg-4">

                {posts.map((curPost) =>(
                  <div className="col" key={curPost.id}>
                    <div className="card">
                      <div className="card-body">
                        <h2>{curPost.title}</h2>
                        <p>{curPost.description}</p>
                        <button className="btn btn-danger" onClick={() => cancel(curPost.id)}>cancalla</button>
                      </div>
                    </div>

                  </div>
                ))}

            </div>
            ) : (<p className="text-center mt-5">non ci sono card da mostrare...</p>)}



          </div>
        </section>

        {/* fine sezione di stampa delle card */}




        {/* inizio sezione della creazione nuove card */}

        <section>
          <div className="container">

            <form onSubmit={hendelSubmitPost}>
              {/* form titolo */}
              <div className="p-3">
                <label htmlFor="createCardForm" className="mx-3">inserisci qui il titolo del tuo post</label>
                <input type="text" value={titlePost} onChange={(event) => setTitlePost(event.target.value)} />
              </div>

              {/* form descrizione */}
              <div className="p-3">
                <label htmlFor="createCardForm">inserisci qui la descrizio del tuo post</label>
                <textarea name="" id="createCardForm" value={descriptionPost} onChange={(event) => setDescriptionPost(event.target.value)}></textarea>
              </div>
              <button className="btn btn-primary" type="submit">crea la card</button>
            </form>
          </div>

          {/* <p className="pt-3">{titlePost}</p>
          <p className="pt-3">{descriptionPost}</p> */}
        </section>
      </main>
    </>
  )
}

export default App
