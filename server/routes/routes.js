import {
    homeRoute, 
    addNewApplication, 
    getApplications,
    getUserById,
    deleteUserById,
    updateUserById
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/')
        .get(homeRoute)
    //Data Fetching
    app.route('/applications')
        .get(getApplications)
        .post(addNewApplication)
    //CRUD operations
    app.route('/application/:id')
        .get(getUserById)
        .delete(deleteUserById)
        .put(updateUserById)
}

export default routes