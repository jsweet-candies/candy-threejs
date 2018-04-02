package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
public class TextureLoader extends def.js.Object {
    public TextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String crossOrigin;
    public String withCredentials;
    public String path;
    /**
     * Begin loading from url
     *
     * @param url
     */
    native public Texture load(String url, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public TextureLoader setCrossOrigin(String crossOrigin);
    native public TextureLoader setWithCredentials(String value);
    native public TextureLoader setPath(String path);
    public TextureLoader(){}
    /**
     * Begin loading from url
     *
     * @param url
     */
    native public Texture load(String url, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    /**
     * Begin loading from url
     *
     * @param url
     */
    native public Texture load(String url, java.util.function.Consumer<Texture> onLoad);
    /**
     * Begin loading from url
     *
     * @param url
     */
    native public Texture load(String url);
}

