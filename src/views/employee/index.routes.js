export default [
    {
        path: '/employee',
        redirect: '/employee/list',
        component: () => import('@/views/employee/views/index.vue'),
        children: [
            {
                path: 'list',
                name: 'list',
                component: () => import('@/views/employee/views/list.vue'),
            }
        ]
    }
]