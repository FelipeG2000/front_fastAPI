import { ref } from 'vue'
class PostService {
    private posts

    constructor(){
        this.posts = ref([])
 
    }
    getPosts () {
        return this.posts
    }

    async fetchAll(){
        try {
            const url = 'http://localhost:8000/hero/0'
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);}

            const json = await response.json()
            this.posts.value = await json
        }
        catch(error){
            console.log(error)
        }
    }
}

export default PostService