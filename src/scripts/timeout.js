import { ref, watch } from 'vue'

export default {
    createTimeout(){
        let timeout = ref(0)
        let timeoutInstance = ref(null)
        let resovlers = []
        watch(timeout, val=>{
            if(timeoutInstance.value){
                clearTimeout(timeoutInstance.value)
                timeoutInstance.value = null
            }
            if(timeout.value > 0){
                timeoutInstance.value = setTimeout(()=>{
                    if(timeout.value > 0){
                        timeout.value -= 1
                    }
                }, 1000)
            }else{
                // trigger
                resovlers?.forEach(r=>{
                    if(r instanceof Function){
                        r()
                    }
                })
                resovlers = []
            }
        })
        return {
            timeout,
            timeoutInstance,
            set(t){
                return new Promise((r, reject)=>{
                    resovlers.push(r)
                    timeout.value = t
                })
            }
        }
    }   
}