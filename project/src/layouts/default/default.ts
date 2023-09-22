import { Component, Vue, toNative, Prop } from "vue-facing-decorator";
import AppHeader from '@/components/app-header/app-header.vue';

@Component({
    components: { AppHeader }
})
class DefaultLayout extends Vue {

    @Prop
    page?: () => any

}
export default toNative(DefaultLayout);