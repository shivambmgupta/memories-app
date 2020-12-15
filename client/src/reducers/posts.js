import * as Const from '../const/const';

export default (posts = [], action) => {
    switch (action.type) {
        case Const.FETCH_ALL:
            return action.payload ;
        case Const.CREATE:
            return [...posts, action.payload ];
        case Const.UPDATE:
        case Const.LIKE:
            return posts.map((post) => {
                return post._id === action.payload._id ? action.payload : post
            });
        case Const.DELETE:
            return posts.filter((post) => post._id != action.payload)
        default:
            return posts;
    }
}