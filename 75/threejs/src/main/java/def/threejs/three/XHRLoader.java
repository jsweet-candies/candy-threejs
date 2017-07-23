package def.threejs.three;
public class XHRLoader extends def.js.Object {
    public XHRLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String path;
    public String responseType;
    public Boolean withCredentials;
    native public Object load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public void setPath(String path);
    native public void setResponseType(String responseType);
    native public void setWithCredentials(Boolean withCredentials);
    public XHRLoader(){}
    native public Object load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<Object> onProgress);
    native public Object load(String url, java.util.function.Consumer<String> onLoad);
    native public Object load(String url);
}

