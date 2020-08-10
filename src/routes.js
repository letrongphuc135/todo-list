import React from 'react';
import HomePage from './pages/HomePage'
import TodoListPage from './pages/TodoListPage';
import TodoActionPage from './pages/TodoActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/todo-list',
        exact: false,
        main: () => <TodoListPage />
    },
    {
        path: '/todo/add',
        exact: false,
        main: ({ history }) => <TodoActionPage history={history} />
    },
    {
        path: '/todo/:id/edit',
        exact: false,
        main: ({match, history}) => <TodoActionPage match={match} history={history}/>
    },
    // {
    //     path: '/',
    //     exact: true,
    //     main: () => <HomePage />
    // },
    // {
    //     path: '/todo-list',
    //     exact: false,
    //     main: () => <TodoListPage />
    // },
]

export default routes;