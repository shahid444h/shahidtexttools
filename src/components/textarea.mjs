import React from "react";
import { useState } from "react";
export default function Textarea(props) {
  let [text, setText] = useState("");
  let [texty, settexty] = useState("");
  let [change, schange] = useState("");
  let [count, setcount] = useState(0);
  let vowelcounter = () => {
    if (text == "") {
      alert("Please Enter Text");
    }
    count = 0;
    let str = text.toLowerCase();
    for (let i of str) {
      if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
        count++;
      }
    }
    setcount(count);
  };

  let thor = () => {
    settexty(document.getElementById("btnn").value);
  };
  let thor1 = () => {
    schange(document.getElementById("btn1").value);
  };
  let repl = () => {
    if (change == "") {
      alert("Please Enter The Word To Be Replaced");
    }
    if (document.getElementById("btn2").value == "") {
      alert("Please Enter The Word To Replace");
    }
    let val2 = document.getElementById("btn2").value;
    setText(text.replaceAll(change, val2));
  };
  let search = () => {
    if (text == "") {
      alert("Please Enter The Text To Search");
    }
    let h = text;
    if (text.includes(texty)) {
      let star = text.indexOf(texty);
      let end = texty.length + star;
      console.log(star, end);
      let kalar = document.getElementById("myform");
      setText(highlightText(text, star, end));
      setTimeout(() => {
        setText(h);
      }, "5000");
    }
  };

  function highlightText(text, star, end) {
    let newte = text.slice(star, end);
    let nxr = text.replaceAll(newte, `👉${newte}👈`);
    return nxr;
  }
  function mycopy() {
    if (text == "") {
      alert("Please Enter Text");
    } else {
      var copyText = document.getElementById("myform");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      alert("text copied");
    }
  }
  let paste = () => {
    navigator.clipboard.readText().then((text2) => {
      setText(text2);
    });
  };
  let capital = () => {
    if (text == "") {
      alert("Please Enter Text");
    }
    let newText = text.toUpperCase();
    setText(newText);
  };
  let clear = () => {
    if (text == "") {
      alert("Please Enter Text");
    }
    setcount(0);

    setText("");
  };
  let replace = () => {
    if (text == "") {
      alert("Please Enter Text");
    } else {
      let s = text.replaceAll("class=", "className=");
      var sk = s.replaceAll("for=", "htmlFor=");
      let htmlString = sk;
      const selfClosingTags = [
        "br",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "source",
        "wbr",
        "base",
        "embed",
        "keygen",
        "param",
        "track",
        "area",
        "command",
        "col",
      ];
      selfClosingTags.forEach((tag) => {
        const pattern = new RegExp(`<${tag}(\\s+[^>]+)?>`, "g");
        htmlString = htmlString.replace(pattern, `<${tag}$1 />`);
      });
      setText(sk);
      setText("<>\n" + htmlString + "\n</>");
    }
  };
  let Capitalise = () => {
    if (text == "") {
      alert("Please Enter Text");
    }
    let exp = text.split(" ");
    let newa = [];
    for (let e of exp) {
      newa.push(e.replace(e[0], e[0].toUpperCase()));
    }
    let u = newa.join(" ");
    setText(u);
  };
  let lower = () => {
    if (text == "") {
      alert("Please Enter Text");
    }
    let newText = text.toLowerCase();
    setText(newText);
  };
  const letchange = (event) => {
    setcount(0);
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  onChange={thor}
                  id="btnn"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success mx-2"
                  type="submit"
                  onClick={search}
                >
                  Search
                </button>
              </div>
              <div className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  onChange={thor1}
                  id="btn1"
                  type="search"
                  placeholder="Replace word"
                  aria-label="Replace word"
                />
                <input
                  className="form-control mx-2"
                  id="btn2"
                  type="search"
                  placeholder="Replace with"
                  aria-label="Replace with"
                />
                <button
                  className="btn btn-outline-success mx-2"
                  type="submit"
                  onClick={repl}
                >
                  Replace
                </button>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary mx-3"
            id="style"
            onClick={props.trigger}
          >
            {props.tex}
          </button>
        </nav>
      </div>
      <div className="mb-3 mx-5 my-6">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.text}
        </label>
        <textarea
          className="form-control"
          id="myform"
          rows="8"
          value={text}
          onChange={letchange}
          style={{
            backgroundColor: `${
              props.mode === "white" ? "#e6ffff" : "#E5E5E5"
            }`,
            color: `${props.mode === "white" ? "black" : "black"}`,
          }}
        ></textarea>
        <button className="btn btn-primary my-3 my-3" onClick={capital}>
          AllCapital
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={lower}>
          All Small
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={paste}>
          Paste
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={Capitalise}>
          Capitalise
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={replace}>
          HTML - JSX
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={mycopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={vowelcounter}>
          Count Vowels
        </button>
      </div>
      <div className="tarea">
        <h2>YOU HAVE :)</h2>
        <p>{text.length} Charecters</p>
        <p> {count} Vowels</p>
        <p> {count == 0 ? 0 : text.length - count} Consonants And Charecters</p>
        <p>{text.length == 0 ? 0 : text.split(" ").length} Words</p>
        <h3>You Wave Written</h3>
        <p>{text.length == 0 ? "Nothing" : text}</p>
      </div>
    </>
  );
}
