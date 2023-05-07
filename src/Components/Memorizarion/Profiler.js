import React from 'react'
import Api from '../Api'
import { Profiler } from 'react'
import Props from '../Props/Props'

function Profiler1() {

    const callback =(id,phase,actualduration,baseduration,starttime,commitime, interaction)=>{
        console.log(id,phase,actualduration,baseduration,starttime,commitime, interaction)
    }
  return (

   


    <div>
        <h1>profiler component</h1>
        <div>
            <Profiler id="Api component" onRender={callback}/>
            <h4>PLease wait</h4>
            <Api/>
            <Profiler/>
            <Profiler id="props component" onRender={callback}/>
                <Props/>
            <Profiler/>
        </div>
    </div>
  )
}

export default Profiler1;