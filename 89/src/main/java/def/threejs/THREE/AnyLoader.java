package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
/**
* Interface for all loaders
* CompressedTextureLoader don't extends Loader class, but have load method
*/
@jsweet.lang.Interface
public abstract class AnyLoader extends def.js.Object {
    native public Object load(String url, java.util.function.Consumer<Object> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public Object load(String url, java.util.function.Consumer<Object> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public Object load(String url, java.util.function.Consumer<Object> onLoad);
    native public Object load(String url);
}

