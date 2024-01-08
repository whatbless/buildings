export type questionType = {
  title: string;
};

export type propertyTypeVariants = {
  var: string;
};

export type carouselObject = {
  images: Array<any>;
  id: number;
  preview: string;
  title: string;
  desc: string;
  desc_main: string;
  text: string;
};

export type diplomaType = {
  src: string;
  alt: string;
};

export type SocialType = {
  alt: string;
  img: string;
  link: string;
};

export type QuizPropsType = {
  closeModal?: () => void;
};
