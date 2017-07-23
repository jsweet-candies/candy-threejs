package def.threejs.three;
/**
     * Base class for implementing loaders.
     *
     * Events:
     *     load
     *         Dispatched when the image has completed loading
     *         content — loaded image
     *
     *     error
     *
     *          Dispatched when the image can't be loaded
     *          message — error message
     */
public class Loader extends def.js.Object {
    public Loader(){}
    /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
    public java.lang.Runnable onLoadStart;
    /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
    public java.lang.Runnable onLoadProgress;
    /**
         * Will be called when load completes.
         * The default is a function with empty body.
         */
    public java.lang.Runnable onLoadComplete;
    /**
         * default — null.
         * If set, assigns the crossOrigin attribute of the image to the value of crossOrigin, prior to starting the load.
         */
    public String crossOrigin;
    native public String extractUrlBase(String url);
    native public Material[] initMaterials(Material[] materials, String texturePath);
    native public Boolean createMaterial(Material m, String texturePath, String crossOrigin);
    public static LoaderHandler Handlers;
    native public Boolean createMaterial(Material m, String texturePath);
}

