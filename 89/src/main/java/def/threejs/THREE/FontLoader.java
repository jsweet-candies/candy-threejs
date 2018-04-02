package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class FontLoader extends def.js.Object {
    public FontLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<Font> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public Font parse(String json);
    public FontLoader(){}
    native public void load(String url, java.util.function.Consumer<Font> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<Font> onLoad);
    native public void load(String url);
}

