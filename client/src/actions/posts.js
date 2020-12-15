import * as api from '../api/Index';
import * as Const from '../const/const';

export const getPosts = () => async (dispatch) => {
         try {
             const { data } = await  api.fetchPosts();
             dispatch({type : Const.FETCH_ALL, payload: data});  
         } catch (error) {
             console.log('Error! ' + error);
         }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: Const.CREATE, payload: data});
    } catch (error) {
        console.log('Error! ' + error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const data  = await api.updatePost(id, post);
        dispatch({ type: Const.UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }   
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: Const.DELETE, payload: id});
    } catch (error) {
        console.log('Error!', error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: Const.LIKE, payload: data})
    } catch (error) {
        console.log('Error!', error);
    }
}