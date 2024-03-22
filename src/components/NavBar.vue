<template>
    <nav class="navbar navbar-expand-lg bg-brown sticky-top">
        <div class="container-fluid" id="myNav">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" @mouseenter="hovered = true" @mouseleave="hovered = false">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ path: '/', exact: true }" class="nav-link text-white" :class="{ 'active': $route.path === '/' || hovered }" >
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-white" :class="{ 'active': $route.path === '/about' || hovered }">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/stocks" class="nav-link text-white" :class="{ 'active': $route.path === '/stocks' || hovered }">
                            Stocks
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <router-link to="/profile" class="nav-link text-white" :class="{ 'active': $route.path === '/profile' || hovered }">
                            Profile
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link text-white" :class="{ 'active': $route.path === '/admin' || hovered }">
                            Admin
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComp',
    data() {
        return {
            hovered: false,
            loggedIn: false // Initially set to false
        };
    }
};
</script>

<style src="@/assets/css/style.css">

</style>
