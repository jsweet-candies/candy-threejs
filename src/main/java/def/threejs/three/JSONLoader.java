package def.threejs.three;
import def.dom.HTMLElement;
/**
     * A loader for loading objects in JSON format.
     */
public class JSONLoader extends Loader {
    public JSONLoader(LoadingManager manager){}
    public LoadingManager manager;
    public Boolean withCredentials;
    public HTMLElement statusDomElement;
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
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
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String url, java.util.function.BiConsumer<Geometry,Material[]> onLoad);
    native public void load(String url);
    native public Parse parse(Object json);
}

