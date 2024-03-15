<template>
    <br>
    <h2>Users Table</h2><br>
    <div class="container">
        <table class="table">
            <thead class="table-light">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>User Role</th>
                    <th>Email Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="users">
                <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td class="d-flex justify-content-between">
                        <button class="btn btn-user deleteButton" @click.prevent="deleteUser(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
    },
    methods: {
        deleteUser(user) {
            this.$store.dispatch('deleteUser', user);
        },
    }
}


</script>

<style scoped></style>