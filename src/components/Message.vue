<template>
    <div>
        <input v-model="message" @keyup.enter="storeMessage">
    </div>
</template>
<script>
    export default{
        name: 'message',
        data() {
            return {
                message: ''
            }
        },
        methods: {
            storeMessage: function() {
                this.$emit('new-message', this.message);
                this.message = '';
            }
        }

    }
</script>
