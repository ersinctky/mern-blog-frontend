import {myApi} from "../../api/myApi"
import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import { useHistory } from "react-router-dom";





export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const history=useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      
      title,
      desc,
    };
    if (true) {
      const data =new FormData();
      // data.append("file", file);
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      data.append("title", title);
      data.append("desc", desc);
      newPost.photo = filename;
      console.log(filename);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const res = await myApi.post("/posts/upload", data,config);
        console.log(res.data);
              history.push("/")

      } catch (err) {}
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const res = await myApi.post("/posts", newPost,config);
      console.log(res.data);
      console.log(file);
      history.push("/")
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}