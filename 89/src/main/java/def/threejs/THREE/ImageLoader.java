package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.HTMLImageElement;
import def.dom.ProgressEvent;
/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
public class ImageLoader extends def.js.Object {
    public ImageLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String crossOrigin;
    public String withCredentials;
    public String path;
    /**
     * Begin loading from url
     * @param url
     */
    native public HTMLImageElement load(String url, java.util.function.Consumer<HTMLImageElement> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public ImageLoader setCrossOrigin(String crossOrigin);
    native public ImageLoader setWithCredentials(String value);
    native public ImageLoader setPath(String value);
    public ImageLoader(){}
    /**
     * Begin loading from url
     * @param url
     */
    native public HTMLImageElement load(String url, java.util.function.Consumer<HTMLImageElement> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    /**
     * Begin loading from url
     * @param url
     */
    native public HTMLImageElement load(String url, java.util.function.Consumer<HTMLImageElement> onLoad);
    /**
     * Begin loading from url
     * @param url
     */
    native public HTMLImageElement load(String url);
}

