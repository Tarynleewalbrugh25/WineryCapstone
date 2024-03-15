<template>
    <div class="container-fluid" id="footer">
        <div class="row">
            <div class="col">
                <p class="text-white text-center"> Bella Italia &copy; {{ currentYear }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComp',
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style src="@/assets/css/style.css">
</style>
