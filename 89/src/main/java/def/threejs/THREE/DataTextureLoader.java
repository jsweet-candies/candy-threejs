package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class DataTextureLoader extends def.js.Object {
    public DataTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    public DataTextureLoader(){}
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<DataTexture> onLoad);
}

