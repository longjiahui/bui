import Button from './components/button.vue'
import Check from './components/check.vue'
import Input from './components/input.vue'

import './styles/main.scss'

const components = {
    Button,
    Check,
    Input,
}

export default {
    Button,
    install(app){
        for(let k in components){
            app.component(`bui-${k.toLowerCase()}`, components[k])
        }
    }
}