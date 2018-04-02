package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class FBXLoader extends def.js.Object {
    public FBXLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<Group> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public Group parse(String FBXText, String resourceDirectory);
    public FBXLoader(){}
    native public void load(String url, java.util.function.Consumer<Group> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<Group> onLoad);
}

