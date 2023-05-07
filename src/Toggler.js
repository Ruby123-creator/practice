import React from 'react'
import { Appcontext } from './context'

function Toggler() {
  return (
    <div>
        <Appcontext.Consumer>
            {
                (info)=>{
                    return(
                        <div>
                            <div style={info.defaultWhite}>
                                 <h1>Hello</h1> 
                                 <p>How are you doing, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quam expedita voluptatibus veniam, maxime asperiores officiis earum reprehenderit suscipit doloribus dignissimos quidem ab quas fuga sequi ex mollitia. Facere, ipsa.</p>
                            </div>
                              <button onClick={info.defaultRed}>Change Color</button>
                          </div>
                    )
                }
            }
        </Appcontext.Consumer>
    </div>
  )
}

export default Toggler