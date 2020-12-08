
import { DELETE, fetch, GET, POST, PUT } from "../apis";
import { GET_FILM_FAIL, GET_FILM_SUCCESS, GET_PEOPLE_FAIL, GET_PEOPLE_SUCCESS, GET_SPESIES_FAIL, GET_SPESIES_SUCCESS, GET_STARSHIP_FAIL, GET_STARSHIP_SUCCESS, GET_VEHICLES_FAIL, GET_VEHICLES_SUCCESS } from "../utils";

export const getPeople = (parameters) =>{
    return async dispatch=>{
        fetch(GET, 'https://swapi.dev/api/people', parameters)
            .then(response =>{
                dispatch({
                    type:GET_PEOPLE_SUCCESS,
                    payload:{
                        ...response
                    }
                })
            })
            .catch(err =>{
                dispatch({
                    type:GET_PEOPLE_FAIL,
                    payload:{
                        message: err 
                    }
                })
            })
    }
}
export const getFilm = (parameters) =>{
    return async dispatch=>{
        fetch(GET, parameters.url, parameters)
            .then(response =>{
                dispatch({
                    type:GET_FILM_SUCCESS,
                    payload:{
                        ...response
                    }
                })
            })
            .catch(err =>{
                dispatch({
                    type:GET_FILM_FAIL,
                    payload:{
                        message: err 
                    }
                })
            })
    }
}

export const getVehicle = (parameters) =>{
    return async dispatch=>{
        fetch(GET, parameters.url, parameters)
            .then(response =>{
                dispatch({
                    type:GET_VEHICLES_SUCCESS,
                    payload:{
                        ...response
                    }
                })
            })
            .catch(err =>{
                dispatch({
                    type:GET_VEHICLES_FAIL,
                    payload:{
                        message: err 
                    }
                })
            })
    }
}

export const getSpesies = (parameters) =>{
    return async dispatch=>{
        fetch(GET, parameters.url, parameters)
            .then(response =>{
                dispatch({
                    type:GET_SPESIES_SUCCESS,
                    payload:{
                        ...response
                    }
                })
            })
            .catch(err =>{
                dispatch({
                    type:GET_SPESIES_FAIL,
                    payload:{
                        message: err 
                    }
                })
            })
    }
}

export const getStarship = (parameters) =>{
    return async dispatch=>{
        fetch(GET, parameters.url, parameters)
            .then(response =>{
                dispatch({
                    type:GET_STARSHIP_SUCCESS,
                    payload:{
                        ...response
                    }
                })
            })
            .catch(err =>{
                dispatch({
                    type:GET_STARSHIP_FAIL,
                    payload:{
                        message: err 
                    }
                })
            })
    }
}
