<template>
<div>{{ posts }}</div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostFastApi';

    export default defineComponent({
        name:'PostList',
        setup(){
            const service = new PostService()
            const posts = service.getPosts()

            onMounted(async () => {
                await service.fetchAll()
            })
            return {posts}
        }
    })

</script>

<style>
</style>