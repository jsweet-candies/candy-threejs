package def.threejs.three;
import def.js.Array;
public class CubeTextureLoader extends def.js.Object {
    public CubeTextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String corssOrigin;
    public String path;
    native public void load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public void setCrossOrigin(String crossOrigin);
    native public void setPath(String path);
    public CubeTextureLoader(){}
    native public void load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(Array<String> urls, java.util.function.Consumer<CubeTexture> onLoad);
    native public void load(Array<String> urls);
    native public void load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public void load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String[] urls, java.util.function.Consumer<CubeTexture> onLoad);
    native public void load(String[] urls);
}

