package def.threejs.THREE;
public class CTMLoader extends Loader {
    public CTMLoader(){}
    /**
     * load multiple CTM parts defined in JSON.
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    native public Object loadParts(String url, java.util.function.Supplier<Object> callback, Object parameters);
    /**
     * Load CTMLoader compressed models
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    native public Object load(String url, java.util.function.Function<Object,Object> callback, Object parameters);
    /**
     * create buffergeometry by ctm file.
     * @param file(required)
     * @param callback(required)
     */
    native public Object createModel(String file, java.util.function.Supplier<Object> callback);
    /**
     * load multiple CTM parts defined in JSON.
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    native public Object loadParts(String url, java.util.function.Supplier<Object> callback);
    /**
     * Load CTMLoader compressed models
     * @param url(required)
     * @param callback(required)
     * @param parameters
     */
    native public Object load(String url, java.util.function.Function<Object,Object> callback);
}

