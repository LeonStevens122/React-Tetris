// import dependancies

import React from 'react'
import { Component } from 'react'



// Define props for the Music Element Board
type PlayMusicProps = {
    pauseMusic: boolean
}

// class component returns a HTML Audio Element which autoplays the Tetris theme song
class PlayMusic extends Component<PlayMusicProps> {
    constructor(props: any) {
        super(props)
    }
  // render element renders the audio element if the pauseMusic prop from the Tetris component state is false. 
    // or returns an empty Div if the music is paused
    render() {
        if (!this.props.pauseMusic)
        {
            return (
            <div>
                    <audio   autoPlay loop>
                        <source src="https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3" type="audio/mpeg" /> 
                    Your browser does not support the audio element.
                </audio>
            </div>
            )
        }   else return (<div> </div>)  
        }
    }
    
export default PlayMusic;