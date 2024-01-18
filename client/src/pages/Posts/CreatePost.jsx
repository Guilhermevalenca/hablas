import axios from "axios";
import {useState,useEffect} from "react";

function CreatePost(){
    const[post,setPost] = useState({
        title: null,
        content: null,
    });
    function changeData(e){
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }
    function send(e){
        e.preventDefault();
        axios.post('api/post/',post)
            .then(response => {

                console.log(response.data);
            });
    }
    return(
      <>
          <main>
              <section>
                  <form onSubmit={send}>
                      <input type="text" name="title" placeholder="Digite um Titulo para o seu post" onChange={changeData}/>
                      <input type="text" name="content"/>
                      <button type="submit"/>
                  </form>
              </section>
          </main>
      </>
    );
}
export default CreatePost;