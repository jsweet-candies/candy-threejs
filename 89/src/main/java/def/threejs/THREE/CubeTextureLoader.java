package def.threejs.THREE;
import def.js.Array;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class CubeTextureLoader extends def.js.Object {
    public CubeTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String corssOrigin;
    public String path;
    native public CubeTexture load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public CubeTextureLoader setCrossOrigin(String crossOrigin);
    native public CubeTextureLoader setPath(String path);
    public CubeTextureLoader(){}
    native public CubeTexture load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public CubeTexture load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad);
    native public CubeTexture load(Array<String> urls);
    native public CubeTexture load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public CubeTexture load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public CubeTexture load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad);
    native public CubeTexture load(String[] urls);
}

