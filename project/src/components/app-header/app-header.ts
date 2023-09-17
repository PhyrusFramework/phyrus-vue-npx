import { Component, Vue, toNative } from "vue-facing-decorator";

@Component({})
class AppHeaderComponent extends Vue {}
export default toNative(AppHeaderComponent);