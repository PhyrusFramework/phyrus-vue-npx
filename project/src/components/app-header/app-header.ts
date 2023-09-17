import { Component, Vue, toNative } from "vue-facing-decorator";
import DocsIndex from '../../docs/index';

@Component({})
class AppHeaderComponent extends Vue {

    getDocsLink() {
        const version = DocsIndex.fixVersionString(DocsIndex.lastVersion);
        const defaultPost = DocsIndex.getVersion(version).defaultPost;
        return '/docs/' + version + '/' + defaultPost;
    }

}
export default toNative(AppHeaderComponent);