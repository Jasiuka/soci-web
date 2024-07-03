import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/Home.view.vue"
import AboutView from "@/views/About.view.vue"
import AuthView from "@/views/Auth.view.vue"
import ActivityView from "@/views/Activity.view.vue"
import SignIn from "@/components/Auth/SignIn.component.vue"
import SignUp from "@/components/Auth/SignUp.component.vue"
import PassRecover from "@/components/Auth/PassRecover.component.vue"
import NotFoundView from "@/views/NotFound.view.vue"
import Profile from "@/views/Profile.view.vue"

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "link-active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about-us",
            name: "about",
            component: AboutView
        },
        {
            path: "/auth",
            name: "auth",
            component: AuthView,

            children: [
                { path: "", redirect: { name: "SignIn" }, name: "redirection" },
                { path: "signin", component: SignIn, name: "SignIn" },
                { path: "signup", component: SignUp, name: "SignUp" },
                { path: "recover", component: PassRecover, name: "Recover" }
            ]
        },
        {
            path: "/activity/:id",
            name: "activity",
            component: ActivityView
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundView
        }
    ]
})

export default router
