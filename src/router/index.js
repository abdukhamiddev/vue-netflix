import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/home/Home.vue")
    },
    {
        path: "/shows",
        name: "shows",
        component: () => import("../views/shows/Shows.vue")
    },
    {
        path: "/movies",
        name: "movies",
        component: () => import("../views/movies/Movies.vue")
    },
    {
        path: "/popular",
        name: "popular",
        component: () => import("../views/popular/Popular.vue")
    },
    {
        path: "/my-list",
        name: "mylist",
        component: () => import("../views/mylist/MyList.vue")
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;