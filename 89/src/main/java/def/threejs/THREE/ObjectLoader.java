package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.js.Error;
import def.dom.HTMLImageElement;
import def.dom.ProgressEvent;
public class ObjectLoader extends def.js.Object {
    public ObjectLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String texturePass;
    public String crossOrigin;
    @jsweet.lang.Name("load")
    native public void loadOnErrorConsumer(String url, java.util.function.Consumer<Object3D> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<Error> onError);
    native public void setTexturePath(String value);
    native public void setCrossOrigin(String crossOrigin);
    native public <T extends Object3D> T parse(Object json, java.util.function.Consumer<Object3D> onLoad);
    native public Object[] parseGeometries(Object json);
    native public Material[] parseMaterials(Object json, Texture[] textures);
    native public AnimationClip[] parseAnimations(Object json);
    native public ParseImages parseImages(Object json, java.lang.Runnable onLoad);
    native public Texture[] parseTextures(Object json, Object images);
    native public <T extends Object3D> T parseObject(Object data, Object[] geometries, Material[] materials);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class ParseImages extends def.js.Object {
        native public HTMLImageElement $get(String key);
    }
    public ObjectLoader(){}
    native public void load(String url, java.util.function.Consumer<Object3D> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<Object3D> onLoad);
    native public void load(String url);
    native public <T extends Object3D> T parse(Object json);
    @jsweet.lang.Name("load")
    native public void loadOnErrorErrorEventConsumer(String url, java.util.function.Consumer<Object3D> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
}

