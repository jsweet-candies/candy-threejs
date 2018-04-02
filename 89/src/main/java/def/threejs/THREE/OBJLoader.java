package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class OBJLoader extends def.js.Object {
    public OBJLoader(LoadingManager manager){}
    public LoadingManager manager;
    public Object regexp;
    public Material[] materials;
    public String path;
    native public void load(String url, java.util.function.Consumer<Group> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    native public Group parse(String data);
    native public void setPath(String value);
    native public void setMaterials(MaterialCreator materials);
    native public Object _createParserState();
    public OBJLoader(){}
    native public void load(String url, java.util.function.Consumer<Group> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public void load(String url, java.util.function.Consumer<Group> onLoad);
}

