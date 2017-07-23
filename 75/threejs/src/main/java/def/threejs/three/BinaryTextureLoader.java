package def.threejs.three;
public class BinaryTextureLoader extends def.js.Object {
    public BinaryTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    public BinaryTextureLoader(){}
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad);
}

