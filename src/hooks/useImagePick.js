import { useRef, useState } from "react";

const useImagePick = () => {
  const [imgUrl, setImgUrl] = useState("");
  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return { imgUrl, handleButtonClick, handleImageUpload, fileInput };
};

export default useImagePick;
