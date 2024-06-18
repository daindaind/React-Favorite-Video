import Input from "../../components/common/input/Input";
import TextInput from "../../components/common/textInput/TextInput";
import styles from "./PostPage.module.css";
import { MdOutlinePhoto } from "react-icons/md";
import Button from "../../components/common/button/Button";
import useImagePick from "../../hooks/useImagePick";

const PostPage = () => {
  const { imgUrl, fileInput, handleButtonClick, handleImageUpload } =
    useImagePick();

  return (
    <div className={styles.Container}>
      <div className={styles.ContentContainer}>
        <h2 className={styles.Title}>당신이 좋아하는 작품을 공유해주세요.</h2>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>이름</p>
          <Input />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>이메일</p>
          <Input />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>영화제목</p>
          <Input />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>영화 줄거리</p>
          <Input />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>주의 사항</p>
          <TextInput />
        </div>
        <div className={styles.ImgContainer}>
          {imgUrl ? (
            <img className={styles.Img} src={imgUrl} />
          ) : (
            <div className={styles.NoneImg}>
              <MdOutlinePhoto color="#838d9b" size={40} />
            </div>
          )}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              ref={fileInput}
            />
            <Button label="Choose an image" onClick={handleButtonClick} />
          </div>
        </div>
        <Button label="작품 소개 업로드" />
      </div>
    </div>
  );
};

export default PostPage;
