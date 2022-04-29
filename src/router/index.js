import {createRouter, createWebHistory} from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import("../views/Home")},
        {path: "/register", component: () => import("../views/RegisterUser")},
        {path: "/sign-in", component: () => import("../views/SignIn")},
        {
            path: "/feed",
            component: () => import("../views/Feed"),
            meta: {
                requiresAuth: true,
            }
        },
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    })
}

router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            alert("you don't have access")
            next("/")
        }
    } else {
        next();
    }
});

export default router;