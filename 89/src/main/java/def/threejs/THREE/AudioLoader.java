package def.threejs.THREE;
import def.js.Function;
public class AudioLoader extends def.js.Object {
    public AudioLoader(LoadingManager manager){}
    native public void load(String url, Function onLoad, Function onPrgress, Function onError);
    public AudioLoader(){}
}

