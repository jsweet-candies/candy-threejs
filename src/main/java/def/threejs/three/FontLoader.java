package def.threejs.three;
public class FontLoader extends def.js.Object {
    public FontLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    public FontLoader(){}
    native public void load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String url, java.util.function.Consumer<String> onLoad);
    native public void load(String url);
}

