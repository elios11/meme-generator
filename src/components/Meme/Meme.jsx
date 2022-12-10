import { useState } from "react"
import "./Meme.css"
import memesData from "../../memesData"

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function selectRandomMeme() {
        let memes = allMemeImages.data.memes;
        let randomIndex = Math.floor(Math.random() * (memes.length))
        let randomImgUrl = memes[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomImgUrl
        }))
    }

    return (
        <main>
            <div className="meme">
                <div className="inputs-container">
                    <input 
                        className="meme--input" 
                        placeholder="Top text" 
                        type="text" id="top-text-input" />
                    <input 
                        className="meme--input"
                        placeholder="Bottom text"
                        type="text" id="bottom-text-input" />
                </div>
                <button
                    className="meme--button bold"
                    onClick={selectRandomMeme}
                    type="button"
                    id="generateMemeBtn">
                        Get a new meme image 🖼
                </button>
                <img className="meme--image" src={meme.randomImage} alt="Random generated meme" />
            </div>
        </main>
    )
}