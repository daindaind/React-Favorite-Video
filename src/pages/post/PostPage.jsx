import Input from "../../components/common/input/Input";
import TextInput from "../../components/common/textInput/TextInput";
import styles from "./PostPage.module.css";
import { MdOutlinePhoto } from "react-icons/md";
import Button from "../../components/common/button/Button";
import useImagePick from "../../hooks/useImagePick";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const PostPage = () => {
  const { imgUrl, fileInput, handleButtonClick, handleImageUpload } =
    useImagePick();
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      name: "",
      email: "",
      title: "",
      summary: "",
      instructions: "",
      image: "",
    },
  });
  const image = watch("image");

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    setValue("image", imgUrl);
  }, [imgUrl, setValue]);

  return (
    <form className={styles.Container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.ContentContainer}>
        <h2 className={styles.Title}>당신이 좋아하는 작품을 공유해주세요.</h2>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>이름</p>
          <Input
            register={register}
            id="name"
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>이메일</p>
          <Input
            register={register}
            id="email"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>영화 제목</p>
          <Input
            register={register}
            id="title"
            placeholder="영화 제목을 입력해주세요."
          />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>영화 줄거리</p>
          <Input
            register={register}
            id="summary"
            placeholder="영화 줄거리를 입력해주세요."
          />
        </div>
        <div className={styles.InputContainer}>
          <p className={styles.InputTitle}>주의 사항</p>
          <TextInput
            register={register}
            id="instructions"
            placeholder="주의 사항을 입력해주세요."
          />
        </div>
        <div className={styles.ImgContainer}>
          {image ? (
            <img className={styles.Img} src={image} />
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
            <Button
              label="Choose an image"
              onClick={handleButtonClick}
              type="button"
            />
          </div>
        </div>
        <Button label="작품 소개 업로드" type="submit" />
      </div>
    </form>
  );
};

export default PostPage;
