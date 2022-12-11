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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

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
            <div className="form">
                <div className="form--inputs-container">
                    <input 
                        className="form--input" 
                        placeholder="Top text" 
                        type="text" id="top-text-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange} />
                    <input 
                        className="form--input"
                        placeholder="Bottom text"
                        type="text" id="bottom-text-input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange} />
                </div>
                <button
                    className="form--button bold"
                    onClick={selectRandomMeme}
                    type="button"
                    id="generateMemeBtn">
                        Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img className="meme--image" src={meme.randomImage} alt="Random generated meme" />
                    <h2 className="meme--text top">One does not simply</h2>
                    <h2 className="meme--text bottom">Walk into Mordor</h2>
                </div>
            </div>
        </main>
    )
}