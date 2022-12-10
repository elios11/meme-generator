import { useState } from "react"
import "./Meme.css"
import memesData from "../../memesData"

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

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