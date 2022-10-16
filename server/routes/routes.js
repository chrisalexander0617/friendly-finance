import {
    homeRoute, 
    addNewUser, 
    getUsers,
    getUserById,
    deleteUserById,
    updateUserById
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/')
        .get(homeRoute)
    //Data Fetching
    app.route('/users')
        .get(getUsers)
        .post(addNewUser)
    //CRUD operations
    app.route('/user/:id')
        .get(getUserById)
        .delete(deleteUserById)
        .put(updateUserById)
}

export default routes