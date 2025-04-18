<script>
export default {
    name: "Navbar",
};
</script>

<template>
    <nav class="navbar justify-content-center">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tools">Tools</router-link></li>
        </ul>
    </nav>
</template>