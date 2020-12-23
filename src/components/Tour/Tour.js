import React from 'react'
import './Tour.css'

const Tour =({removetour, tour:{id,city, name, img, info}}) => {

        return (
            <article>
                <div className="col s12 m6 l3 white card">
                    <div className="card-image">
                       <img src={img} alt="" className="responsive-img materialboxed"/>
                       <button className="btn-floating indigo pulse halfway-fab" onClick = {()=> {removetour(id)}}>
                           <i className="material-icons">delete</i>
                       </button>
                    </div>
                    <div className="card-content">
                          <span className="card-title">{city}</span>
                        <p>{info}</p>            
                    </div>
                    <div className="card-action truncate">
                       {name}
                    </div>
                </div> 
            </article>
        )
    }
    


export default Tour
