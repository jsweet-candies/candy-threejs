package def.threejs.three;
/**
     * Handles and keeps track of loaded and pending data.
     */
public class LoadingManager extends def.js.Object {
    public LoadingManager(java.lang.Runnable onLoad, jsweet.util.function.TriConsumer<String,Double,Double> onProgress, java.lang.Runnable onError){}
    public java.lang.Runnable onStart;
    /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
    public java.lang.Runnable onLoad;
    /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
    public jsweet.util.function.TriConsumer<Object,Double,Double> onProgress;
    /**
         * Will be called when each element in the scene completes loading.
         * The default is a function with empty body.
         */
    public java.lang.Runnable onError;
    native public void itemStart(String url);
    native public void itemEnd(String url);
    native public void itemError(String url);
    public LoadingManager(java.lang.Runnable onLoad, jsweet.util.function.TriConsumer<String,Double,Double> onProgress){}
    public LoadingManager(java.lang.Runnable onLoad){}
    public LoadingManager(){}
}

