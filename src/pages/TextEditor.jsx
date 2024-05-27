import { useState } from "react";
import ReactEditor from "react-text-editor-kit";

function TextEditor() {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const image_handler = async (e) => {
    // let requestObj = {
    //   method: "POST",
    //   url: "your-api-end-point",
    //   headers: {}, // attach required headers
    // };
    // let formData = new FormData();
    // formData.append("image", e.image);
    // formData.append("width", "600");
    // requestObj["data"] = formData;
    // try {
    //   let results = await axios(requestObj);
    //   if (results.data.code === 200) {
    //     return results.data.image_path;
    //   } else {
    //     return "";
    //   }
    // } catch (error) {
    //   return "";
    // }
  };

  const get_editor_ref = (value) => {};

  const theme_config = {
    "background-color": "palegoldenrod",
    "border-color": "red",
    "text-color": "black",
    "toolbar-button-background": "#fff",
    "toolbar-text-color": "black",
    "toolbar-button-hover-background": "gold",
    "toolbar-button-selected-background": "#dee0e2",
    "svg-color": "#414141",
    "save-button-background": "rgb(9, 134, 62)",
  };

  const navbar = [
    {
      name: "file",
      options: ["new_document", "preview", "print"],
    },
    {
      name: "view",
      title: "View",
      options: ["source_code", "full_screen"],
    },
    {
      name: "insert",
      title: "insert",
      options: ["image", "link", "video", "hr_line", "special_char"],
    },
    {
      name: "format",
      title: "format",
      options: [
        "bold",
        "italic",
        "underline",
        "superscript",
        "subscript",
        "font",
        "font_size",
        "alignment",
      ],
    },
    "|",
    "select_all",
    "|",
    "image",
    "link",
    "video",
    "|",
    "copy",
    "cut",
    "paste",
    "|",
  ];

  const toolbar = [
    "undo",
    "redo",
    "|",
    "format",
    "|",
    "bold",
    "italic",
    "underline",
    "superscript",
    "subscript",
    "|",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "|",
    "indent",
    "outdent",
    "|",
    "orderedList",
    "unorderedList",
    "|",
    "removeFormat",
    "|",
    "textColor",
    "backgroundColor",
    "|",
    "ltr",
    "rtl",
    "|",
  ];

  return (
    <div className="App">
      <ReactEditor
        value={value}
        getEditorRef={get_editor_ref} // if you want to get ref of editor
        onChange={handleChange}
        mainProps={{ className: "red" }} // these props will be used to style the most parent div of the editor
        placeholder="Write Your TeXt/Explanation here"
        theme_config={theme_config} // apply the theme configuration
        remove_from_toolbar={[
          "bold",
          { name: "formatcheck", options: ["h1"] }, // options you want to remove from format dropdown
        ]}
        remove_from_navbar={[
          "select_all", // options you want to remove
          { name: "view", options: ["source_code"] }, // options you want to remove from view dropdown
        ]}
        navbar={navbar} // customize navbar
        toolbar={toolbar} // customize toolbar
        // image_handler={image_handler} // if you want to upload image on your server
      />
    </div>
  );
}

export default TextEditor;
