package def.threejs.three;
/**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
public class TextureLoader extends def.js.Object {
    public TextureLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String crossOrigin;
    public String path;
    /**
         * Begin loading from url
         *
         * @param url
         */
    native public Texture load(String url, java.util.function.Consumer<Texture> onLoad);
    native public void setCrossOrigin(String crossOrigin);
    native public void setPath(String path);
    public TextureLoader(){}
    /**
         * Begin loading from url
         *
         * @param url
         */
    native public Texture load(String url);
}

