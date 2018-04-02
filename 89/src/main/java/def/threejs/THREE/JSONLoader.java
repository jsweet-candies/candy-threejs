package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
/**
 * A loader for loading objects in JSON format.
 */
public class JSONLoader extends Loader {
    public JSONLoader(LoadingManager manager){}
    public LoadingManager manager;
    public Boolean withCredentials;
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public void setTexturePath(String value);
    native public Parse parse(Object json, String texturePath);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Parse extends def.js.Object {
        public Geometry geometry;
        @jsweet.lang.Optional
        public Material[] materials;
    }
    public JSONLoader(){}
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad);
    native public void load(String url);
    native public Parse parse(Object json);
}

