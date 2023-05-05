
export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    username: "",
    title: "",
    cat: "",
    coverImg: "",
    images: [],
    desc: "",
    shortTitle: "",
    shortDesc: "",
    deliveryTime: "",
    revisionNumber: "",
    features: [],
    price: 0
};


export const reducer  = (state, action) => {
    switch(action.type) {

        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case "ADD_IMAGES":
            return {
                ...state,
                coverImg: action.payload.coverImg,
                images: action.payload.images
            };
        case "ADD_FEATURE":
            return{
                    ...state,
                    features: [...state.features, action.payload]
            };
        case "REMOVE_FEATURE":
            return {
                 ...state,
                 features: state.features.filter(
                    (feature) => feature !== action.payload // bu şartı sağlamayan tüm feature (elementleri) ları içerir.
                    )
            };
        
        default:
            return state;
    }
}