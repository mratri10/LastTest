import { GET_FILM_FAIL, GET_FILM_SUCCESS, GET_PEOPLE_FAIL, GET_PEOPLE_SUCCESS, GET_VEHICLES_SUCCESS, GET_VEHICLES_FAIL, GET_SPESIES_SUCCESS, GET_SPESIES_FAIL, GET_STARSHIP_FAIL, GET_STARSHIP_SUCCESS } from "../utils"


const initState = {
    people:null,
    film:null,
    vehicle:null,
    spesies:null,
    starship:null,
    message:null
}
export default (state = initState, action) =>{
    switch (action.type) {
        case GET_PEOPLE_SUCCESS:
            return{
                ...state,
                people: action.payload
            }
        case GET_PEOPLE_FAIL:
            return{
                ...state,
                message: action.payload
            }
        case GET_FILM_SUCCESS:
            return{
                ...state,
                film: action.payload
            }
        case GET_FILM_FAIL:
            return{
                ...state,
                message: action.payload
            }
        case GET_VEHICLES_SUCCESS:
            return{
                ...state,
                vehicle: action.payload
            }
        case GET_VEHICLES_FAIL:
            return{
                ...state,
                message: action.payload
            }
        case GET_SPESIES_SUCCESS:
            return{
                ...state,
                spesies: action.payload
                }
        case GET_STARSHIP_FAIL:
            return{
                ...state,
                message: action.payload
            }
        case GET_STARSHIP_SUCCESS:
            return{
                ...state,
                starship: action.payload
            }
        case GET_STARSHIP_FAIL:
            return{
                ...state,
                message: action.payload
            }
        
    
        default:
            return state
    }
}