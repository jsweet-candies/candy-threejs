package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.MimeType;
import def.dom.ProgressEvent;
public class FileLoader extends def.js.Object {
    public FileLoader(LoadingManager manager){}
    public LoadingManager manager;
    public MimeType mimeType;
    public String path;
    public String responseType;
    public String withCredentials;
    native public Object load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public FileLoader setMimeType(MimeType mimeType);
    native public FileLoader setPath(String path);
    native public FileLoader setResponseType(String responseType);
    native public FileLoader setWithCredentials(String value);
    public FileLoader(){}
    native public Object load(String url, java.util.function.Consumer<String> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public Object load(String url, java.util.function.Consumer<String> onLoad);
    native public Object load(String url);
}

