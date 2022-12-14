import { useState, useEffect } from "react"
import "./Meme.css"

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [memeImages, setMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(json => setMemeImages(json.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function selectRandomMeme() {
        let randomIndex = Math.floor(Math.random() * (memeImages.length))
        let randomImgUrl = memeImages[randomIndex].url
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
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}