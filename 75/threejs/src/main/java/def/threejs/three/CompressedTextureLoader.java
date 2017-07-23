package def.threejs.three;
public class CompressedTextureLoader extends def.js.Object {
    public CompressedTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String path;
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public void setPath(String path);
    public CompressedTextureLoader(){}
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String url, java.util.function.Consumer<CompressedTexture> onLoad);
}

