import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    left: "",
    right: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemesArr, setAllMemesArr] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesArr(data.data.memes));
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    setMeme((prev) => ({
      ...prev,
      randomImage:
        allMemesArr[Math.floor(Math.random() * allMemesArr.length)].url,
    }));
    meme.left = "";
    meme.right = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <form className="form" onSubmit={handleSumbit}>
        <div className="input-box">
          <input
            type="text"
            name="left"
            onChange={handleChange}
            className="input"
            value={meme.left}
          ></input>
          <input
            type="text"
            name="right"
            onChange={handleChange}
            className="input"
            value={meme.right}
          ></input>
        </div>
        <button className="submit-btn" type="submit">
          Get a new meme image
        </button>
      </form>
      <div className="img-container">
        <h2 className="top-text"> {meme.left} </h2>
        <img className="img" src={meme.randomImage} alt="" />
        <h2 className="bottom-text"> {meme.right} </h2>
      </div>
    </main>
  );
};

export default Main;
