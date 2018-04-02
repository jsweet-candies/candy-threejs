package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class MTLLoader extends EventDispatcher {
    public MTLLoader(LoadingManager manager){}
    public LoadingManager manager;
    public java.lang.Object materialOptions;
    public Material[] materials;
    public String path;
    public String texturePath;
    public Boolean crossOrigin;
    native public void load(String url, java.util.function.Consumer<MaterialCreator> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public MaterialCreator parse(String text);
    native public void setPath(String path);
    native public void setTexturePath(String path);
    native public void setBaseUrl(String path);
    native public void setCrossOrigin(Boolean value);
    native public void setMaterialOptions(Object value);
    public MTLLoader(){}
    native public void load(String url, java.util.function.Consumer<MaterialCreator> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<MaterialCreator> onLoad);
}

