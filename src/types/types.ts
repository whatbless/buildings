export type questionType = {
  title: string;
};

export type propertyTypeVariants = {
  var: string;
};

// export type carouselObject = {
//   src: string;
//   title: string;
//   desc: string;
//   text: string;
// };

export type carouselObject = {
  images: Array<any>;
  id: number;
  preview: string;
  title: string;
  desc: string;
  desc_main: string;
  text: string;
};

export type nums = {
  [key: number]: string;
}

export type diplomaType = {
  src: string;
  alt: string;
};
