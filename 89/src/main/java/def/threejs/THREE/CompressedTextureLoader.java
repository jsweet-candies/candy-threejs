package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class CompressedTextureLoader extends def.js.Object {
    public CompressedTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String path;
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public CompressedTextureLoader setPath(String path);
    public CompressedTextureLoader(){}
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad);
}

