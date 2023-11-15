const SET_REGION = "QUIZREDUCER_SET_REGION";
const UPDATE_REGION = "QUIZREDUCER_UPDATE_REGION";
const SET_STEP = "QUIZREDUCER_SET_STEP";
const SET_PROPERTY_TYPE = "QUIZREDUCER_SET_PROPERTY_TYPE";
const SET_ROOM_RANGE = "QUIZREDUCER_SET_ROOM_RANGE";
const SET_FLOOR_RANGE = "QUIZREDUCER_SET_FLOOR_RANGE";
const SET_PRICE = "QUIZREDUCER_SET_PRICE";
const SET_VALIDATIONS = "QUIZREDUCER_SET_VALIDATIONS";
const SET_NAME = "QUIZREDUCER_SET_NAME";
const SET_NUMBER = "QUIZREDUCER_SET_NUMBER";

let initialState = {
  regions: ["kyky", "pppp", "LLLL", "eeeeee"],
  selectedRegion: "",
  regionFormText: "",
  step: 0,
  propertyType: "",
  roomRange: [1, 9],
  price: [0, 10000000],
  havePark: false,
  haveBalcony: false,
  haveSafetyRoom: false,
  floorRange: [1, 45],
  name: "",
  number: "",
};

type initialStateType = typeof initialState;

const quizReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SET_REGION:
      return { ...state, selectedRegion: action.region };

    case SET_STEP:
      return { ...state, step: action.step };

    case UPDATE_REGION:
      return { ...state, regionFormText: action.text };

    case SET_PROPERTY_TYPE:
      return { ...state, propertyType: action.variant };

    case SET_ROOM_RANGE:
      return { ...state, roomRange: action.values };

    case SET_FLOOR_RANGE:
      return { ...state, floorRange: action.values };

    case SET_PRICE:
      return { ...state, price: action.values };

    case SET_NAME:
      return { ...state, name: action.name };

    case SET_NUMBER:
      return { ...state, number: action.number };

    case SET_VALIDATIONS:
      return {
        ...state,
        havePark: action.payload[0],
        haveBalcony: action.payload[1],
        haveSafetyRoom: action.payload[2],
      };

    default:
      return state;
  }
};

export const setRegionForm = (region: string) => ({
  type: SET_REGION,
  region,
});

export const setStep = (step: number) => ({
  type: SET_STEP,
  step,
});

export const updateRegionFormText = (text: string) => ({
  type: UPDATE_REGION,
  text,
});

export const setPropertyType = (variant: string) => ({
  type: SET_PROPERTY_TYPE,
  variant,
});

export const setName = (name: string) => ({
  type: SET_NAME,
  name,
});

export const setNumber = (number: string) => ({
  type: SET_NUMBER,
  number,
});

export const setRoomRange = (values: Array<number>) => ({
  type: SET_ROOM_RANGE,
  values,
});

export const setFloorRange = (values: Array<number>) => ({
  type: SET_FLOOR_RANGE,
  values,
});

export const setPrice = (values: Array<number>) => ({
  type: SET_PRICE,
  values,
});

export const setValidations = (payload: Array<boolean>) => ({
  type: SET_VALIDATIONS,
  payload,
});

export default quizReducer;
