import React, {useState, useRef} from 'react';
import Chat from './Chat';

const Rooms = () => {

    const [room, setRoom] = useState(null);

    const roomInputReference = useRef(null);
    return(

        <div>
      
               <div>
                {room ? <div><Chat/></div>  : 

               <div>
                <label>subscribe to this room</label>
                <input ref = {roomInputReference}/>
                <button onClick={() => setRoom(roomInputReference.current.value)}>subscribe</button>
               </div>

               }</div>
        </div>

    )
}


export default Rooms;