<template>
    user
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default defineComponent({
    name: 'UsersModule',
    components: {},
    props: {
        theme: String,
        msg: { type: String, required: true }
    },
    data() {
        return {
            userId: null,
            userName: '',
            userRole: 'default'
        }
    },
    computed: {

    },
    // created() {

    // },
    // mounted() {
        
    // },

})

</script>

<style scoped>

</style>