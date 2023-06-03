import React from "react";
import { Helmet } from "react-helmet";
import img from "../assets/chef.png";

export default function App() {
  const [title, setTitle] = React.useState("Foody");
  const [description, setDescription] = React.useState(
    "THE KEY TO FINE DINNING"
  );
  const [image, setImage] = React.useState(img);
  const [link, setLink] = React.useState(
    "https://st-anthony-frontend.netlify.app/"
  );

  return (
    <>
      <Helmet>
        <meta name="title" property="og:title" content={title}></meta>
        <meta
          name="description"
          property="og:description"
          content={description}
        ></meta>
        <meta name="image" property="og:image" content={image}></meta>
        <meta property="og:url" content={link} />
        <meta property="og:type" content="website" />
      </Helmet>
    </>
  );
}
