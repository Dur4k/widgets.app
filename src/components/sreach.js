import React, { useState, useEffect } from "react";
import axios from "axios";
import dompurify from "dompurify";

const Sreach = () => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const sreach = async () => {
      const stuff = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          origin: "*",
          list: "search",
          srsearch: term,
        },
      });

      setList(stuff.data.query.search);
    };
    if (term && !list.length) {
      sreach();
    }
    if (!term) {
      setList([]);
    } else {
      const setTimeoutId = setTimeout(() => {
        return term ? sreach() : "loading";
      }, 1000);
      return () => {
        clearTimeout(setTimeoutId);
      };
    }
  }, [term]);
  const renderedlist = list.map((l) => {
    return (
      <div key={l.pageid} className="item">
        <div className="content">
          <div className="header">{l.title}</div>
          <div dangerouslySetInnerHTML={{ __html: l.snippet }} />
          <div className="right floated content">
            <a className="ui button" href={`http://en.wikipedia.org/?curid=${l.pageid}`}>
              go
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>enter sreach term</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)} className="input"></input>
        </div>
      </div>
      <div className="ui celled list"> {renderedlist}</div>
    </div>
  );
};

export default Sreach;
// IF TERM IS PRESENT AND WE DOT HAVE RESULT YET
/* if (term && !list.length) {
    sreach();
  } else {
    const setTimeoutId = setTimeout(() => {
      return term ? sreach() : "loading";
    }, 5000);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }
}
 */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dompurify from "dompurify";

// const Sreach = () => {
//   const [term, setTerm] = useState("");
//   const [list, setList] = useState([]);
//   console.log(list);
//   useEffect(() => {
//     const result = async () => {
//       const { data } = await axios.get("https://en.wikipedia.org/w/api.php	", {
//         params: {
//           action: "query",
//           list: "search",
//           origin: "*",
//           format: "json",

//           srsearch: term,
//         },
//       });
//       setTimeout(() => setList(data.query.search), 500);
//     };
//     return term ? result() : "loading";
//   }, [term]);

//   const renderedstuff = list.map((i) => {
//     const sanitizer = dompurify.sanitize;
//     return (
//       <div key={i.pageid} className="item">
//         <div className="content">
//           <div className="header">{i.title}</div>
//           <div dangerouslySetInnerHTML={{ __html: sanitizer(i.snippet) }} />
//           <div className="right floated content">
//             <a className="ui button" href={`http://en.wikipedia.org/?curid=${i.pageid}`}>
//               go
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <div className="ui form">
//         <div className="field">
//           <label>enter sreach term</label>
//           <input value={term} onChange={(e) => setTerm(e.target.value)} className="input"></input>
//         </div>
//       </div>
//       <div className="ui celled list"> {renderedstuff}</div>
//     </div>
//   );
// };

// export default Sreach;
