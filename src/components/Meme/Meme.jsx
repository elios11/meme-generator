import "./Meme.css"

export default function Meme() {
    return (
        <main>
            <div className="meme-form">
                <div className="inputs-container">
                    <input 
                        className="meme-form--input" 
                        placeholder="Top text" 
                        type="text" id="top-text-input" />
                    <input 
                        className="meme-form--input"
                        placeholder="Bottom text"
                        type="text" id="bottom-text-input" />
                </div>
                <button
                    className="meme-form--button bold"
                    type="button"
                    id="generateMemeBtn">
                        Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}