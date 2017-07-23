package def.threejs.three;
import def.dom.HTMLImageElement;
/**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
public class ImageLoader extends def.js.Object {
    public ImageLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String crossOrigin;
    public String path;
    /**
         * Begin loading from url
         * @param url
         */
    native public HTMLImageElement load(String url, java.util.function.Consumer<HTMLImageElement> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public void setCrossOrigin(String crossOrigin);
    native public void setPath(Object value);
    public ImageLoader(){}
    /**
         * Begin loading from url
         * @param url
         */
    native public HTMLImageElement load(String url, java.util.function.Consumer<HTMLImageElement> onLoad, java.util.function.Consumer<Object> onProgress);
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

