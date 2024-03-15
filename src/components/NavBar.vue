<template>
    <nav class="navbar navbar-expand-lg bg-brown sticky-top">
        <div class="container-fluid" id="myNav">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active text-white">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active text-white">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/stocks" class="nav-link active text-white">
                            Stocks
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link active text-white">
                            Admin
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link active text-white">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComp'
}
</script>

<style src="@/assets/css/style.css">

</style>
