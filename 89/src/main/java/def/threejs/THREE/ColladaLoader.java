package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class ColladaLoader extends def.js.Object {
    public ColladaLoader(){}
    native public void load(String url, java.util.function.Consumer<ColladaModel> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public void setCrossOrigin(Object value);
    native public ColladaModel parse(String text);
    native public void load(String url, java.util.function.Consumer<ColladaModel> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<ColladaModel> onLoad);
}

